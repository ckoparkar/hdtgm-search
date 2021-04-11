console.clear();

import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/src/tagify.scss";

const hilitor = require("./hilitor")
const movieDb = require("./db");

(function() {
    // DOM elements we manipulate.
    var domDisplayList = document.querySelector("#episodes-list");
    var domTextInput = document.querySelector("#text-filter");
    var domRemoveAllBtn = document.querySelector("#tags-removeAllBtn");

    // All the movies we know about.
    var allMoviesSet = new Set(movieDb.db);
    // A set of movies which are currently visible.
    var visibleMoviesSet = new Set(allMoviesSet);
    // A set of all tags (used to build a tagify whitelist).
    var allTagsSet = new Set();
    // A set of tags which are currently applied.
    var activeTagsSet = new Set();
    // A map from a tag to a set of movies it *removes* from the current visible set.
    var tagRemovesEnv = {};

    // Build up a whitelist of tags.
    for (const movie of allMoviesSet) {
        var tags = movie.guests
            .concat(movie.actors)
            .concat(movie.directors)
            .concat([movie.name, movie.id.toString()])
        movie.tags = tags;
        for (const tag of tags) {
            allTagsSet.add(tag);
        }
    }

    // Initialize tagify.
    var tagify = new Tagify(domTextInput, {
        enforceWhitelist: true,
        whitelist: Array.from(allTagsSet)
    });
    tagify.on("add", onTagAdd);
    tagify.on("remove", onTagRemove);
    domRemoveAllBtn.addEventListener("click", tagify.removeAllTags.bind(tagify));
    // document.addEventListener("onload", tagify.removeAllTags.bind(tagify));
    // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    //     console.info( "This page is reloaded" );

    // } else {
    //     console.info( "This page is not reloaded");
    // }

    // Initialize Hilitor.
    var hilitorObj = hilitor.Hilitor("movies-list");

    // Called when a tag is added.
    function onTagAdd(e) {
        var tag = e.detail.data.value;
        activeTagsSet.add(tag);
        tagRemovesEnv[tag] = new Set();
        var visibleMoviesSet2 = new Set();
        for (const movie of visibleMoviesSet) {
            if (movie.tags.includes(tag)) {
                visibleMoviesSet2.add(movie);
            } else {
                tagRemovesEnv[tag].add(movie);
            }
        }
        visibleMoviesSet = visibleMoviesSet2;
        renderVisibleMovies();
    }

    // Called when a tag is removed.
    function onTagRemove(e) {
        var tag = e.detail.data.value;
        activeTagsSet.delete(tag);
        for (const movie of tagRemovesEnv[tag]) {
            visibleMoviesSet.add(movie);
        }
        tagRemovesEnv[tag] = new Set();
        renderVisibleMovies();
    }

    // Render a single movie on screen.
    function renderMovie(movie) {
        var li = document.createElement("li");
        var name = document.createElement("div");
        var actors = document.createElement("div");
        var directors = document.createElement("div");
        var guests = document.createElement("div");

        name.classList.add("movie-name");
        actors.classList.add("movie-actors");
        directors.classList.add("movie-directors");
        guests.classList.add("movie-guests");

        name.textContent = "#" + movie.id + " " + movie.name;
        if (movie.actors.length != 0) {
            actors.textContent = "Starring: " + movie.actors.join(", ");
        }
        if (movie.directors.length != 0) {
            directors.textContent = "Directed By: " + movie.directors.join(", ");
        }
        if (movie.guests.length != 0) {
            guests.textContent = "Episode Guests: " + movie.guests.join(", ");
        }

        li.appendChild(name);
        li.appendChild(actors);
        li.appendChild(directors);
        li.appendChild(guests);

        return li;
    }

    // Render the set of movies which are currently visible.
    function renderVisibleMovies() {
        var visibleMoviesList = Array.from(visibleMoviesSet)
            .sort((a,b) => b.id - a.id);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < visibleMoviesList.length; i++) {
            var movie = visibleMoviesList[i],
                li = renderMovie(movie);
            frag.appendChild(li);
        }
        domDisplayList.innerHTML = "";
        domDisplayList.appendChild(frag);
        hilitorObj.apply(Array.from(activeTagsSet).join(" "));
    }

    // Clear all tags and render *all* movies at the beginning.
    tagify.removeAllTags.bind(tagify)();
    renderVisibleMovies();

})();
