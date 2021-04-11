// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@yaireo/tagify/dist/tagify.min.js":[function(require,module,exports) {
var define;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Tagify = e();
}(this, function () {
  "use strict";

  var t = function t(_t, e, i, s) {
    return _t = "" + _t, e = "" + e, s && (_t = _t.trim(), e = e.trim()), i ? _t == e : _t.toLowerCase() == e.toLowerCase();
  };

  function e(t) {
    var e = document.createElement("div");
    return t.replace(/\&#?[0-9a-z]+;/gi, function (t) {
      return e.innerHTML = t, e.innerText;
    });
  }

  function i(t, e) {
    for (e = e || "previous"; t = t[e + "Sibling"];) {
      if (3 == t.nodeType) return t;
    }
  }

  function s(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/`|'/g, "&#039;");
  }

  function a(t) {
    return t instanceof Array;
  }

  function n(t) {
    var e = Object.prototype.toString.call(t).split(" ")[1].slice(0, -1);
    return t === Object(t) && "Array" != e && "Function" != e && "RegExp" != e && "HTMLUnknownElement" != e;
  }

  function o(t, e, i) {
    function s(t, e) {
      for (var i in e) {
        if (e.hasOwnProperty(i)) {
          if (n(e[i])) {
            n(t[i]) ? s(t[i], e[i]) : t[i] = Object.assign({}, e[i]);
            continue;
          }

          if (a(e[i])) {
            t[i] = Object.assign([], e[i]);
            continue;
          }

          t[i] = e[i];
        }
      }
    }

    return t instanceof Object || (t = {}), s(t, e), i && s(t, i), t;
  }

  function r(t) {
    return String.prototype.normalize ? "string" == typeof t ? t.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : void 0 : t;
  }

  var l = function l() {
    return /(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);
  };

  var d,
      h = {
    init: function init() {
      this.DOM.dropdown = this.parseTemplate("dropdown", [this.settings]), this.DOM.dropdown.content = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownWrapperSelector);
    },
    show: function show(e) {
      var _this = this;

      var i,
          s,
          a,
          o = this.settings,
          r = "mix" == o.mode && !o.enforceWhitelist,
          l = !o.whitelist || !o.whitelist.length,
          d = "manual" == o.dropdown.position;

      if (e = void 0 === e ? this.state.inputText : e, (!l || r || o.templates.dropdownItemNoMatch) && !1 !== o.dropdown.enable && !this.state.isLoading) {
        if (clearTimeout(this.dropdownHide__bindEventsTimeout), this.suggestedListItems = this.dropdown.filterListItems.call(this, e), e && !this.suggestedListItems.length && (this.trigger("dropdown:noMatch", e), o.templates.dropdownItemNoMatch && (a = o.templates.dropdownItemNoMatch.call(this, {
          value: e
        }))), !a) {
          if (this.suggestedListItems.length) e && r && !this.state.editing.scope && !t(this.suggestedListItems[0].value, e) && this.suggestedListItems.unshift({
            value: e
          });else {
            if (!e || !r || this.state.editing.scope) return this.input.autocomplete.suggest.call(this), void this.dropdown.hide.call(this);
            this.suggestedListItems = [{
              value: e
            }];
          }
          s = "" + (n(i = this.suggestedListItems[0]) ? i.value : i), o.autoComplete && s && 0 == s.indexOf(e) && this.input.autocomplete.suggest.call(this, i);
        }

        this.dropdown.fill.call(this, a), o.dropdown.highlightFirst && this.dropdown.highlightOption.call(this, this.DOM.dropdown.content.children[0]), this.state.dropdown.visible || setTimeout(this.dropdown.events.binding.bind(this)), this.state.dropdown.visible = e || !0, this.state.dropdown.query = e, this.setStateSelection(), d || setTimeout(function () {
          _this.dropdown.position.call(_this), _this.dropdown.render.call(_this);
        }), setTimeout(function () {
          _this.trigger("dropdown:show", _this.DOM.dropdown);
        });
      }
    },
    hide: function hide(t) {
      var _this2 = this;

      var e = this.DOM,
          i = e.scope,
          s = e.dropdown,
          a = "manual" == this.settings.dropdown.position && !t;
      if (s && document.body.contains(s) && !a) return window.removeEventListener("resize", this.dropdown.position), this.dropdown.events.binding.call(this, !1), i.setAttribute("aria-expanded", !1), s.parentNode.removeChild(s), setTimeout(function () {
        _this2.state.dropdown.visible = !1;
      }, 100), this.state.dropdown.query = this.state.ddItemData = this.state.ddItemElm = this.state.selection = null, this.state.tag && this.state.tag.value.length && (this.state.flaggedTags[this.state.tag.baseOffset] = this.state.tag), this.trigger("dropdown:hide", s), this;
    },
    render: function render() {
      var _this3 = this;

      var t,
          e,
          i,
          s = (t = this.DOM.dropdown, (i = t.cloneNode(!0)).style.cssText = "position:fixed; top:-9999px; opacity:0", document.body.appendChild(i), e = i.clientHeight, i.parentNode.removeChild(i), e),
          a = this.settings;
      return this.DOM.scope.setAttribute("aria-expanded", !0), document.body.contains(this.DOM.dropdown) || (this.DOM.dropdown.classList.add(a.classNames.dropdownInital), this.dropdown.position.call(this, s), a.dropdown.appendTarget.appendChild(this.DOM.dropdown), setTimeout(function () {
        return _this3.DOM.dropdown.classList.remove(a.classNames.dropdownInital);
      })), this;
    },
    fill: function fill(t) {
      var e;
      t = "string" == typeof t ? t : this.dropdown.createListHTML.call(this, t || this.suggestedListItems), this.DOM.dropdown.content.innerHTML = (e = t) ? e.replace(/\>[\r\n ]+\</g, "><").replace(/(<.*?>)|\s+/g, function (t, e) {
        return e || " ";
      }) : "";
    },
    refilter: function refilter(t) {
      t = t || this.state.dropdown.query || "", this.suggestedListItems = this.dropdown.filterListItems.call(this, t), this.dropdown.fill.call(this), this.suggestedListItems.length || this.dropdown.hide.call(this), this.trigger("dropdown:updated", this.DOM.dropdown);
    },
    position: function position(t) {
      var e = this.settings.dropdown;

      if ("manual" != e.position) {
        var i,
            s,
            a,
            n,
            o,
            r,
            l = this.DOM.dropdown,
            d = e.placeAbove,
            h = document.documentElement.clientHeight,
            g = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 480 ? e.position : "all",
            c = this.DOM["input" == g ? "input" : "scope"];
        t = t || l.clientHeight, this.state.dropdown.visible && ("text" == g ? (a = (i = this.getCaretGlobalPosition()).bottom, s = i.top, n = i.left, o = "auto") : (r = function (t) {
          for (var e = 0, i = 0; t;) {
            e += t.offsetLeft || 0, i += t.offsetTop || 0, t = t.parentNode;
          }

          return {
            left: e,
            top: i
          };
        }(this.settings.dropdown.appendTarget), s = (i = c.getBoundingClientRect()).top - r.top, a = i.bottom - 1 - r.top, n = i.left - r.left, o = i.width + "px"), s = Math.floor(s), a = Math.ceil(a), d = void 0 === d ? h - i.bottom < t : d, l.style.cssText = "left:" + (n + window.pageXOffset) + "px; width:" + o + ";" + (d ? "top: " + (s + window.pageYOffset) + "px" : "top: " + (a + window.pageYOffset) + "px"), l.setAttribute("placement", d ? "top" : "bottom"), l.setAttribute("position", g));
      }
    },
    events: {
      binding: function binding() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var e = this.dropdown.events.callbacks,
            i = this.listeners.dropdown = this.listeners.dropdown || {
          position: this.dropdown.position.bind(this),
          onKeyDown: e.onKeyDown.bind(this),
          onMouseOver: e.onMouseOver.bind(this),
          onMouseLeave: e.onMouseLeave.bind(this),
          onClick: e.onClick.bind(this),
          onScroll: e.onScroll.bind(this)
        },
            s = t ? "addEventListener" : "removeEventListener";
        "manual" != this.settings.dropdown.position && (window[s]("resize", i.position), window[s]("keydown", i.onKeyDown)), this.DOM.dropdown[s]("mouseover", i.onMouseOver), this.DOM.dropdown[s]("mouseleave", i.onMouseLeave), this.DOM.dropdown[s]("mousedown", i.onClick), this.DOM.dropdown.content[s]("scroll", i.onScroll);
      },
      callbacks: {
        onKeyDown: function onKeyDown(t) {
          var _this4 = this;

          var e = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector),
              i = this.dropdown.getSuggestionDataByNode.call(this, e);

          switch (t.key) {
            case "ArrowDown":
            case "ArrowUp":
            case "Down":
            case "Up":
              var s;
              t.preventDefault(), e && (e = e[("ArrowUp" == t.key || "Up" == t.key ? "previous" : "next") + "ElementSibling"]), e || (s = this.DOM.dropdown.content.children, e = s["ArrowUp" == t.key || "Up" == t.key ? s.length - 1 : 0]), i = this.dropdown.getSuggestionDataByNode.call(this, e), this.dropdown.highlightOption.call(this, e, !0);
              break;

            case "Escape":
            case "Esc":
              this.dropdown.hide.call(this);
              break;

            case "ArrowRight":
              if (this.state.actions.ArrowLeft) return;

            case "Tab":
              if ("mix" != this.settings.mode && e && !this.settings.autoComplete.rightKey && !this.state.editing) {
                t.preventDefault();
                var a = this.dropdown.getMappedValue.call(this, i);
                return this.input.autocomplete.set.call(this, a), !1;
              }

              return !0;

            case "Enter":
              t.preventDefault(), this.settings.hooks.suggestionClick(t, {
                tagify: this,
                tagData: i,
                suggestionElm: e
              }).then(function () {
                e ? _this4.dropdown.selectOption.call(_this4, e) : _this4.dropdown.hide.call(_this4);
              }).catch(function (t) {
                return t;
              });
              break;

            case "Backspace":
              {
                if ("mix" == this.settings.mode || this.state.editing.scope) return;

                var _t2 = this.state.inputText.trim();

                "" != _t2 && 8203 != _t2.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTags() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0));
              }
          }
        },
        onMouseOver: function onMouseOver(t) {
          var e = t.target.closest(this.settings.classNames.dropdownItemSelector);
          e && this.dropdown.highlightOption.call(this, e);
        },
        onMouseLeave: function onMouseLeave(t) {
          this.dropdown.highlightOption.call(this);
        },
        onClick: function onClick(t) {
          var _this5 = this;

          if (0 == t.button && t.target != this.DOM.dropdown && t.target != this.DOM.dropdown.content) {
            var e = t.target.closest(this.settings.classNames.dropdownItemSelector),
                i = this.dropdown.getSuggestionDataByNode.call(this, e);
            this.state.actions.selectOption = !0, setTimeout(function () {
              return _this5.state.actions.selectOption = !1;
            }, 50), this.settings.hooks.suggestionClick(t, {
              tagify: this,
              tagData: i,
              suggestionElm: e
            }).then(function () {
              e ? _this5.dropdown.selectOption.call(_this5, e) : _this5.dropdown.hide.call(_this5);
            }).catch(function (t) {
              return t;
            });
          }
        },
        onScroll: function onScroll(t) {
          var e = t.target,
              i = e.scrollTop / (e.scrollHeight - e.parentNode.clientHeight) * 100;
          this.trigger("dropdown:scroll", {
            percentage: Math.round(i)
          });
        }
      }
    },
    getSuggestionDataByNode: function getSuggestionDataByNode(t) {
      var e = t ? +t.getAttribute("tagifySuggestionIdx") : -1;
      return this.suggestedListItems[e] || null;
    },
    highlightOption: function highlightOption(t, e) {
      var i,
          s = this.settings.classNames.dropdownItemActive;
      if (this.state.ddItemElm && (this.state.ddItemElm.classList.remove(s), this.state.ddItemElm.removeAttribute("aria-selected")), !t) return this.state.ddItemData = null, this.state.ddItemElm = null, void this.input.autocomplete.suggest.call(this);
      i = this.suggestedListItems[this.getNodeIndex(t)], this.state.ddItemData = i, this.state.ddItemElm = t, t.classList.add(s), t.setAttribute("aria-selected", !0), e && (t.parentNode.scrollTop = t.clientHeight + t.offsetTop - t.parentNode.clientHeight), this.settings.autoComplete && (this.input.autocomplete.suggest.call(this, i), this.dropdown.position.call(this));
    },
    selectOption: function selectOption(t) {
      var _this6 = this;

      var e = this.settings.dropdown,
          i = e.clearOnSelect,
          s = e.closeOnSelect;
      if (!t) return this.addTags(this.state.inputText, !0), void (s && this.dropdown.hide.call(this));
      var a = t.getAttribute("tagifySuggestionIdx"),
          n = this.suggestedListItems[+a];
      this.trigger("dropdown:select", {
        data: n,
        elm: t
      }), a && n ? (this.state.editing ? this.onEditTagDone(null, o({
        __isValid: !0
      }, n)) : this["mix" == this.settings.mode ? "addMixTags" : "addTags"]([n], i), setTimeout(function () {
        _this6.DOM.input.focus(), _this6.toggleFocusClass(!0);
      }), s ? setTimeout(this.dropdown.hide.bind(this)) : this.dropdown.refilter.call(this)) : this.dropdown.hide.call(this);
    },
    selectAll: function selectAll() {
      return this.suggestedListItems.length = 0, this.dropdown.hide.call(this), this.addTags(this.dropdown.filterListItems.call(this, ""), !0), this;
    },
    filterListItems: function filterListItems(t, e) {
      var _this7 = this;

      var i,
          s,
          a,
          o,
          l,
          d = this.settings,
          h = d.dropdown,
          g = (e = e || {}, t = "select" == d.mode && this.value.length && this.value[0][d.tagTextProp] == t ? "" : t, []),
          c = d.whitelist,
          p = h.maxItems || 1 / 0,
          u = h.searchKeys,
          m = 0;
      if (!t || !u.length) return (d.duplicates ? c : c.filter(function (t) {
        return !_this7.isTagDuplicate(n(t) ? t.value : t);
      })).slice(0, p);

      function v(t, e) {
        return e.toLowerCase().split(" ").every(function (e) {
          return t.includes(e.toLowerCase());
        });
      }

      for (l = h.caseSensitive ? "" + t : ("" + t).toLowerCase(); m < c.length; m++) {
        i = c[m] instanceof Object ? c[m] : {
          value: c[m]
        };

        var _t3 = !Object.keys(i).some(function (t) {
          return u.includes(t);
        }) ? ["value"] : u;

        if (h.fuzzySearch && !e.exact ? (a = _t3.reduce(function (t, e) {
          return t + " " + (i[e] || "");
        }, "").toLowerCase(), h.accentedSearch && (a = r(a), l = r(l)), s = v(a, l)) : s = _t3.some(function (t) {
          var s = "" + (i[t] || "");
          return h.accentedSearch && (s = r(s), l = r(l)), h.caseSensitive || (s = s.toLowerCase()), e.exact ? s == l : 0 == s.indexOf(l);
        }), o = !d.duplicates && this.isTagDuplicate(n(i) ? i.value : i), s && !o && p-- && g.push(i), 0 == p) break;
      }

      return g;
    },
    getMappedValue: function getMappedValue(t) {
      var e = this.settings.dropdown.mapValueTo;
      return e ? "function" == typeof e ? e(t) : t[e] || t.value : t.value;
    },
    createListHTML: function createListHTML(t) {
      var _this8 = this;

      return o([], t).map(function (t, e) {
        "string" != typeof t && "number" != typeof t || (t = {
          value: t
        });

        var i = _this8.dropdown.getMappedValue.call(_this8, t);

        t.value = i && "string" == typeof i ? s(i) : i;

        var a = _this8.settings.templates.dropdownItem.call(_this8, t);

        return a = a.replace(/\s*tagifySuggestionIdx=(["'])(.*?)\1/gim, "").replace(">", " tagifySuggestionIdx=\"".concat(e, "\">"));
      }).join("");
    }
  },
      g = {
    delimiters: ",",
    pattern: null,
    tagTextProp: "value",
    maxTags: 1 / 0,
    callbacks: {},
    addTagOnBlur: !0,
    duplicates: !1,
    whitelist: [],
    blacklist: [],
    enforceWhitelist: !1,
    keepInvalidTags: !1,
    mixTagsAllowedAfter: /,|\.|\:|\s/,
    mixTagsInterpolator: ["[[", "]]"],
    backspace: !0,
    skipInvalid: !1,
    editTags: {
      clicks: 2,
      keepInvalid: !0
    },
    transformTag: function transformTag() {},
    trim: !0,
    mixMode: {
      insertAfterTag: " "
    },
    autoComplete: {
      enabled: !0,
      rightKey: !1
    },
    classNames: {
      namespace: "tagify",
      mixMode: "tagify--mix",
      selectMode: "tagify--select",
      input: "tagify__input",
      focus: "tagify--focus",
      tag: "tagify__tag",
      tagNoAnimation: "tagify--noAnim",
      tagInvalid: "tagify--invalid",
      tagNotAllowed: "tagify--notAllowed",
      inputInvalid: "tagify__input--invalid",
      tagX: "tagify__tag__removeBtn",
      tagText: "tagify__tag-text",
      dropdown: "tagify__dropdown",
      dropdownWrapper: "tagify__dropdown__wrapper",
      dropdownItem: "tagify__dropdown__item",
      dropdownItemActive: "tagify__dropdown__item--active",
      dropdownInital: "tagify__dropdown--initial",
      scopeLoading: "tagify--loading",
      tagLoading: "tagify__tag--loading",
      tagEditing: "tagify__tag--editable",
      tagFlash: "tagify__tag--flash",
      tagHide: "tagify__tag--hide",
      hasMaxTags: "tagify--hasMaxTags",
      hasNoTags: "tagify--noTags",
      empty: "tagify--empty"
    },
    dropdown: {
      classname: "",
      enabled: 2,
      maxItems: 10,
      searchKeys: ["value", "searchBy"],
      fuzzySearch: !0,
      caseSensitive: !1,
      accentedSearch: !0,
      highlightFirst: !1,
      closeOnSelect: !0,
      clearOnSelect: !0,
      position: "all",
      appendTarget: null
    },
    hooks: {
      beforeRemoveTag: function beforeRemoveTag() {
        return Promise.resolve();
      },
      suggestionClick: function suggestionClick() {
        return Promise.resolve();
      }
    }
  },
      c = {
    wrapper: function wrapper(t, e) {
      return "<tags class=\"".concat(e.classNames.namespace, " ").concat(e.mode ? "".concat(e.classNames[e.mode + "Mode"]) : "", " ").concat(t.className, "\"\n                    ").concat(e.readonly ? "readonly" : "", "\n                    ").concat(e.required ? "required" : "", "\n                    tabIndex=\"-1\">\n            <span ").concat(e.readonly && "mix" == e.mode ? "" : "contenteditable", " data-placeholder=\"").concat(e.placeholder || "&#8203;", "\" aria-placeholder=\"").concat(e.placeholder || "", "\"\n                class=\"").concat(e.classNames.input, "\"\n                role=\"textbox\"\n                aria-autocomplete=\"both\"\n                aria-multiline=\"").concat("mix" == e.mode, "\"></span>\n        </tags>");
    },
    tag: function tag(t) {
      return "<tag title=\"".concat(t.title || t.value, "\"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex=\"-1\"\n                    class=\"").concat(this.settings.classNames.tag, " ").concat(t.class ? t.class : "", "\"\n                    ").concat(this.getAttributes(t), ">\n            <x title='' class=\"").concat(this.settings.classNames.tagX, "\" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class=\"").concat(this.settings.classNames.tagText, "\">").concat(t[this.settings.tagTextProp] || t.value, "</span>\n            </div>\n        </tag>");
    },
    dropdown: function dropdown(t) {
      var e = t.dropdown,
          i = "manual" == e.position,
          s = "".concat(t.classNames.dropdown);
      return "<div class=\"".concat(i ? "" : s, " ").concat(e.classname, "\" role=\"listbox\" aria-labelledby=\"dropdown\">\n                    <div class=\"").concat(t.classNames.dropdownWrapper, "\"></div>\n                </div>");
    },
    dropdownItem: function dropdownItem(t) {
      return "<div ".concat(this.getAttributes(t), "\n                    class='").concat(this.settings.classNames.dropdownItem, " ").concat(t.class ? t.class : "", "'\n                    tabindex=\"0\"\n                    role=\"option\">").concat(t.value, "</div>");
    },
    dropdownItemNoMatch: null
  };
  var p = {
    customBinding: function customBinding() {
      var _this9 = this;

      this.customEventsList.forEach(function (t) {
        _this9.on(t, _this9.settings.callbacks[t]);
      });
    },
    binding: function binding() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var e,
          i = this.events.callbacks,
          s = t ? "addEventListener" : "removeEventListener";
      if (!this.state.mainEvents || !t) for (var a in this.state.mainEvents = t, t && !this.listeners.main && (this.DOM.input.addEventListener(this.isIE ? "keydown" : "input", i[this.isIE ? "onInputIE" : "onInput"].bind(this)), this.settings.isJQueryPlugin && jQuery(this.DOM.originalInput).on("tagify.removeAllTags", this.removeAllTags.bind(this))), e = this.listeners.main = this.listeners.main || {
        focus: ["input", i.onFocusBlur.bind(this)],
        blur: ["input", i.onFocusBlur.bind(this)],
        keydown: ["input", i.onKeydown.bind(this)],
        click: ["scope", i.onClickScope.bind(this)],
        dblclick: ["scope", i.onDoubleClickScope.bind(this)],
        paste: ["input", i.onPaste.bind(this)]
      }) {
        ("blur" != a || t) && this.DOM[e[a][0]][s](a, e[a][1]);
      }
    },
    callbacks: {
      onFocusBlur: function onFocusBlur(t) {
        var e = t.target ? this.trim(t.target.textContent) : "",
            i = this.settings,
            s = t.type,
            a = i.dropdown.enabled >= 0,
            n = {
          relatedTarget: t.relatedTarget
        },
            o = this.state.actions.selectOption && (a || !i.dropdown.closeOnSelect),
            r = this.state.actions.addNew && a,
            l = t.relatedTarget && t.relatedTarget.classList.contains(i.classNames.tag) && this.DOM.scope.contains(t.relatedTarget);

        if ("blur" == s) {
          if (t.relatedTarget === this.DOM.scope) return this.dropdown.hide.call(this), void this.DOM.input.focus();
          this.postUpdate(), this.triggerChangeEvent();
        }

        if (!o && !r) if (this.state.hasFocus = "focus" == s && +new Date(), this.toggleFocusClass(this.state.hasFocus), "mix" != i.mode) {
          if ("focus" == s) return this.trigger("focus", n), void (0 === i.dropdown.enabled && this.dropdown.show.call(this));
          "blur" == s && (this.trigger("blur", n), this.loading(!1), "select" == this.settings.mode && l && (e = ""), ("select" == this.settings.mode && e ? !this.value.length || this.value[0].value != e : e && !this.state.actions.selectOption && i.addTagOnBlur) && this.addTags(e, !0), "select" != this.settings.mode || e || this.removeTags()), this.DOM.input.removeAttribute("style"), this.dropdown.hide.call(this);
        } else "focus" == s ? this.trigger("focus", n) : "blur" == t.type && (this.trigger("blur", n), this.loading(!1), this.dropdown.hide.call(this), this.state.dropdown.visible = void 0, this.setStateSelection());
      },
      onKeydown: function onKeydown(t) {
        var _this10 = this;

        var s = this.trim(t.target.textContent);

        if (this.trigger("keydown", {
          originalEvent: this.cloneEvent(t)
        }), "mix" == this.settings.mode) {
          switch (t.key) {
            case "Left":
            case "ArrowLeft":
              this.state.actions.ArrowLeft = !0;
              break;

            case "Delete":
            case "Backspace":
              if (this.state.editing) return;
              var a,
                  n,
                  o = document.getSelection(),
                  r = "Delete" == t.key && o.anchorOffset == (o.anchorNode.length || 0),
                  h = 1 == o.anchorNode.nodeType || !o.anchorOffset && o.anchorNode.previousElementSibling,
                  g = e(this.DOM.input.innerHTML),
                  c = this.getTagElms();
              if (l() && h) return n = i(h), h.hasAttribute("readonly") || h.remove(), this.DOM.input.focus(), void setTimeout(function () {
                _this10.placeCaretAfterNode(n), _this10.DOM.input.click();
              });
              if ("BR" == o.anchorNode.nodeName) return;
              if ((r || h) && 1 == o.anchorNode.nodeType ? a = 0 == o.anchorOffset ? r ? c[0] : null : c[o.anchorOffset - 1] : r ? a = o.anchorNode.nextElementSibling : h && (a = h), 3 == o.anchorNode.nodeType && !o.anchorNode.nodeValue && o.anchorNode.previousElementSibling && t.preventDefault(), (h || r) && !this.settings.backspace) return void t.preventDefault();
              if ("Range" != o.type && !o.anchorOffset && o.anchorNode == this.DOM.input && "Delete" != t.key) return void t.preventDefault();
              if ("Range" != o.type && a && a.hasAttribute("readonly")) return void this.placeCaretAfterNode(i(a));
              clearTimeout(d), d = setTimeout(function () {
                var t = document.getSelection(),
                    i = e(_this10.DOM.input.innerHTML),
                    s = t.anchorNode.previousElementSibling;
                if (!l() && i.length >= g.length && s && !s.hasAttribute("readonly") && (_this10.removeTags(s), _this10.fixFirefoxLastTagNoCaret(), 2 == _this10.DOM.input.children.length && "BR" == _this10.DOM.input.children[1].tagName)) return _this10.DOM.input.innerHTML = "", _this10.value.length = 0, !0;
                _this10.value = [].map.call(c, function (t, e) {
                  var i = _this10.tagData(t);

                  if (t.parentNode || i.readonly) return i;

                  _this10.trigger("remove", {
                    tag: t,
                    index: e,
                    data: i
                  });
                }).filter(function (t) {
                  return t;
                });
              }, 20);
          }

          return !0;
        }

        switch (t.key) {
          case "Backspace":
            this.state.dropdown.visible && "manual" != this.settings.dropdown.position || "" != s && 8203 != s.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTags() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0));
            break;

          case "Esc":
          case "Escape":
            if (this.state.dropdown.visible) return;
            t.target.blur();
            break;

          case "Down":
          case "ArrowDown":
            this.state.dropdown.visible || this.dropdown.show.call(this);
            break;

          case "ArrowRight":
            {
              var _t4 = this.state.inputSuggestion || this.state.ddItemData;

              if (_t4 && this.settings.autoComplete.rightKey) return void this.addTags([_t4], !0);
              break;
            }

          case "Tab":
            {
              var _e = "select" == this.settings.mode;

              if (!s || _e) return !0;
              t.preventDefault();
            }

          case "Enter":
            if (this.state.dropdown.visible || 229 == t.keyCode) return;
            t.preventDefault(), setTimeout(function () {
              _this10.state.actions.selectOption || _this10.addTags(s, !0);
            });
        }
      },
      onInput: function onInput(t) {
        if ("mix" == this.settings.mode) return this.events.callbacks.onMixTagsInput.call(this, t);
        var e = this.input.normalize.call(this),
            i = e.length >= this.settings.dropdown.enabled,
            s = {
          value: e,
          inputElm: this.DOM.input
        };
        s.isValid = this.validateTag({
          value: e
        }), this.trigger("input", s), this.state.inputText != e && (this.input.set.call(this, e, !1), -1 != e.search(this.settings.delimiters) ? this.addTags(e) && this.input.set.call(this) : this.settings.dropdown.enabled >= 0 && this.dropdown[i ? "show" : "hide"].call(this, e));
      },
      onMixTagsInput: function onMixTagsInput(t) {
        var _this11 = this;

        var e,
            i,
            s,
            a,
            n,
            r,
            d,
            h,
            g = this.settings,
            c = this.value.length,
            p = this.getTagElms(),
            u = document.createDocumentFragment(),
            m = window.getSelection().getRangeAt(0),
            v = [].map.call(p, function (t) {
          return _this11.tagData(t).value;
        });
        if ("deleteContentBackward" == t.inputType && l() && this.events.callbacks.onKeydown.call(this, {
          target: t.target,
          key: "Backspace"
        }), this.value.slice().forEach(function (t) {
          t.readonly && !v.includes(t.value) && u.appendChild(_this11.createTagElem(t));
        }), u.childNodes.length && (m.insertNode(u), this.setRangeAtStartEnd(!1, u.lastChild)), p.length != c) return this.value = [].map.call(this.getTagElms(), function (t) {
          return _this11.tagData(t);
        }), void this.update({
          withoutChangeEvent: !0
        });
        if (this.hasMaxTags()) return !0;

        if (window.getSelection && (r = window.getSelection()).rangeCount > 0 && 3 == r.anchorNode.nodeType) {
          if ((m = r.getRangeAt(0).cloneRange()).collapse(!0), m.setStart(r.focusNode, 0), s = (e = m.toString().slice(0, m.endOffset)).split(g.pattern).length - 1, (i = e.match(g.pattern)) && (a = e.slice(e.lastIndexOf(i[i.length - 1]))), a) {
            if (this.state.actions.ArrowLeft = !1, this.state.tag = {
              prefix: a.match(g.pattern)[0],
              value: a.replace(g.pattern, "")
            }, this.state.tag.baseOffset = r.baseOffset - this.state.tag.value.length, h = this.state.tag.value.match(g.delimiters)) return this.state.tag.value = this.state.tag.value.replace(g.delimiters, ""), this.state.tag.delimiters = h[0], this.addTags(this.state.tag.value, g.dropdown.clearOnSelect), void this.dropdown.hide.call(this);
            n = this.state.tag.value.length >= g.dropdown.enabled;

            try {
              d = (d = this.state.flaggedTags[this.state.tag.baseOffset]).prefix == this.state.tag.prefix && d.value[0] == this.state.tag.value[0], this.state.flaggedTags[this.state.tag.baseOffset] && !this.state.tag.value && delete this.state.flaggedTags[this.state.tag.baseOffset];
            } catch (t) {}

            (d || s < this.state.mixMode.matchedPatternCount) && (n = !1);
          } else this.state.flaggedTags = {};

          this.state.mixMode.matchedPatternCount = s;
        }

        setTimeout(function () {
          _this11.update({
            withoutChangeEvent: !0
          }), _this11.trigger("input", o({}, _this11.state.tag, {
            textContent: _this11.DOM.input.textContent
          })), _this11.state.tag && _this11.dropdown[n ? "show" : "hide"].call(_this11, _this11.state.tag.value);
        }, 10);
      },
      onInputIE: function onInputIE(t) {
        var e = this;
        setTimeout(function () {
          e.events.callbacks.onInput.call(e, t);
        });
      },
      onClickScope: function onClickScope(t) {
        var e = this.settings,
            i = t.target.closest("." + e.classNames.tag),
            s = +new Date() - this.state.hasFocus;

        if (t.target != this.DOM.scope) {
          if (!t.target.classList.contains(e.classNames.tagX)) return i ? (this.trigger("click", {
            tag: i,
            index: this.getNodeIndex(i),
            data: this.tagData(i),
            originalEvent: this.cloneEvent(t)
          }), void (1 !== e.editTags && 1 !== e.editTags.clicks || this.events.callbacks.onDoubleClickScope.call(this, t))) : void (t.target == this.DOM.input && ("mix" == e.mode && this.fixFirefoxLastTagNoCaret(), s > 500) ? this.state.dropdown.visible ? this.dropdown.hide.call(this) : 0 === e.dropdown.enabled && "mix" != e.mode && this.dropdown.show.call(this) : "select" == e.mode && !this.state.dropdown.visible && this.dropdown.show.call(this));
          this.removeTags(t.target.parentNode);
        } else this.state.hasFocus || this.DOM.input.focus();
      },
      onPaste: function onPaste(t) {
        var e;
        t.preventDefault(), this.settings.readonly || (e = (t.clipboardData || window.clipboardData).getData("Text"), this.injectAtCaret(e, window.getSelection().getRangeAt(0)), "mix" != this.settings.mode && this.addTags(this.DOM.input.textContent, !0));
      },
      onEditTagInput: function onEditTagInput(t, e) {
        var i = t.closest("." + this.settings.classNames.tag),
            s = this.getNodeIndex(i),
            a = this.tagData(i),
            n = this.input.normalize.call(this, t),
            r = i.innerHTML != i.__tagifyTagData.__originalHTML,
            l = this.validateTag(_defineProperty({}, this.settings.tagTextProp, n));
        r || !0 !== t.originalIsValid || (l = !0), i.classList.toggle(this.settings.classNames.tagInvalid, !0 !== l), a.__isValid = l, i.title = !0 === l ? a.title || a.value : l, n.length >= this.settings.dropdown.enabled && (this.state.editing && (this.state.editing.value = n), this.dropdown.show.call(this, n)), this.trigger("edit:input", {
          tag: i,
          index: s,
          data: o({}, this.value[s], {
            newValue: n
          }),
          originalEvent: this.cloneEvent(e)
        });
      },
      onEditTagFocus: function onEditTagFocus(t) {
        this.state.editing = {
          scope: t,
          input: t.querySelector("[contenteditable]")
        };
      },
      onEditTagBlur: function onEditTagBlur(t) {
        if (this.state.hasFocus || this.toggleFocusClass(), this.DOM.scope.contains(t)) {
          var e,
              i = this.settings,
              s = t.closest("." + i.classNames.tag),
              a = this.input.normalize.call(this, t),
              n = this.tagData(s).__originalData,
              r = s.innerHTML != s.__tagifyTagData.__originalHTML,
              l = this.validateTag(_defineProperty({}, i.tagTextProp, a));

          if (a) {
            if (r) {
              var _o;

              if (e = this.getWhitelistItem(a) || o({}, n, (_o = {}, _defineProperty(_o, i.tagTextProp, a), _defineProperty(_o, "value", a), _o)), i.transformTag.call(this, e, n), !0 !== (l = this.validateTag(_defineProperty({}, i.tagTextProp, e[i.tagTextProp])))) {
                if (this.trigger("invalid", {
                  data: e,
                  tag: s,
                  message: l
                }), i.editTags.keepInvalid) return;
                i.keepInvalidTags ? e.__isValid = l : e = n;
              }

              this.onEditTagDone(s, e);
            } else this.onEditTagDone(s, n);
          } else this.onEditTagDone(s);
        }
      },
      onEditTagkeydown: function onEditTagkeydown(t, e) {
        switch (this.trigger("edit:keydown", {
          originalEvent: this.cloneEvent(t)
        }), t.key) {
          case "Esc":
          case "Escape":
            e.innerHTML = e.__tagifyTagData.__originalHTML;

          case "Enter":
          case "Tab":
            t.preventDefault(), t.target.blur();
        }
      },
      onDoubleClickScope: function onDoubleClickScope(t) {
        var e,
            i,
            s = t.target.closest("." + this.settings.classNames.tag),
            a = this.settings;
        s && (e = s.classList.contains(this.settings.classNames.tagEditing), i = s.hasAttribute("readonly"), "select" == a.mode || a.readonly || e || i || !this.settings.editTags || this.editTag(s), this.toggleFocusClass(!0), this.trigger("dblclick", {
          tag: s,
          index: this.getNodeIndex(s),
          data: this.tagData(s)
        }));
      }
    }
  };

  function u(t, e) {
    return t ? t.previousElementSibling && t.previousElementSibling.classList.contains("tagify") ? (console.warn("Tagify: ", "input element is already Tagified", t), this) : (o(this, function (t) {
      var e = document.createTextNode("");

      function i(t, i, s) {
        s && i.split(/\s+/g).forEach(function (i) {
          return e[t + "EventListener"].call(e, i, s);
        });
      }

      return {
        off: function off(t, e) {
          return i("remove", t, e), this;
        },
        on: function on(t, e) {
          return e && "function" == typeof e && i("add", t, e), this;
        },
        trigger: function trigger(i, s, a) {
          var n;
          if (a = a || {
            cloneData: !0
          }, i) if (t.settings.isJQueryPlugin) "remove" == i && (i = "removeTag"), jQuery(t.DOM.originalInput).triggerHandler(i, [s]);else {
            try {
              var r = "object" == _typeof(s) ? s : {
                value: s
              };
              if ((r = a.cloneData ? o({}, r) : r).tagify = this, s instanceof Object) for (var l in s) {
                s[l] instanceof HTMLElement && (r[l] = s[l]);
              }
              n = new CustomEvent(i, {
                detail: r
              });
            } catch (t) {
              console.warn(t);
            }

            e.dispatchEvent(n);
          }
        }
      };
    }(this)), this.isFirefox = "undefined" != typeof InstallTrigger, this.isIE = window.document.documentMode, this.applySettings(t, e || {}), this.state = {
      inputText: "",
      editing: !1,
      actions: {},
      mixMode: {},
      dropdown: {},
      flaggedTags: {}
    }, this.value = [], this.listeners = {}, this.DOM = {}, this.build(t), this.getCSSVars(), this.loadOriginalValues(), this.events.customBinding.call(this), this.events.binding.call(this), void (t.autofocus && this.DOM.input.focus())) : (console.warn("Tagify: ", "input element not found", t), this);
  }

  return u.prototype = {
    dropdown: h,
    TEXTS: {
      empty: "empty",
      exceed: "number of tags exceeded",
      pattern: "pattern mismatch",
      duplicate: "already exists",
      notAllowed: "not allowed"
    },
    customEventsList: ["change", "add", "remove", "invalid", "input", "click", "keydown", "focus", "blur", "edit:input", "edit:beforeUpdate", "edit:updated", "edit:start", "edit:keydown", "dropdown:show", "dropdown:hide", "dropdown:select", "dropdown:updated", "dropdown:noMatch"],
    trim: function trim(t) {
      return this.settings.trim && t && "string" == typeof t ? t.trim() : t;
    },
    parseHTML: function parseHTML(t) {
      return new DOMParser().parseFromString(t.trim(), "text/html").body.firstElementChild;
    },
    templates: c,
    parseTemplate: function parseTemplate(t, e) {
      return t = this.settings.templates[t] || t, this.parseHTML(t.apply(this, e));
    },
    applySettings: function applySettings(t, e) {
      g.templates = this.templates;
      var i = this.settings = o({}, g, e);
      i.readonly = t.hasAttribute("readonly"), i.placeholder = t.getAttribute("placeholder") || i.placeholder || "", i.required = t.hasAttribute("required");

      var _loop = function _loop(_t5) {
        Object.defineProperty(i.classNames, _t5 + "Selector", {
          get: function get() {
            return "." + this[_t5].split(" ").join(".");
          }
        });
      };

      for (var _t5 in i.classNames) {
        _loop(_t5);
      }

      if (this.isIE && (i.autoComplete = !1), ["whitelist", "blacklist"].forEach(function (e) {
        var s = t.getAttribute("data-" + e);
        s && (s = s.split(i.delimiters)) instanceof Array && (i[e] = s);
      }), "autoComplete" in e && !n(e.autoComplete) && (i.autoComplete = g.autoComplete, i.autoComplete.enabled = e.autoComplete), "mix" == i.mode && (i.autoComplete.rightKey = !0, i.delimiters = e.delimiters || null, i.tagTextProp && !i.dropdown.searchKeys.includes(i.tagTextProp) && i.dropdown.searchKeys.push(i.tagTextProp)), t.pattern) try {
        i.pattern = new RegExp(t.pattern);
      } catch (t) {}
      if (this.settings.delimiters) try {
        i.delimiters = new RegExp(this.settings.delimiters, "g");
      } catch (t) {}
      "select" == i.mode && (i.dropdown.enabled = 0), i.dropdown.appendTarget = e.dropdown && e.dropdown.appendTarget ? e.dropdown.appendTarget : document.body;
    },
    getAttributes: function getAttributes(t) {
      if ("[object Object]" != Object.prototype.toString.call(t)) return "";
      var e,
          i,
          s = Object.keys(t),
          a = "";

      for (i = s.length; i--;) {
        "class" != (e = s[i]) && t.hasOwnProperty(e) && void 0 !== t[e] && (a += " " + e + (void 0 !== t[e] ? "=\"".concat(t[e], "\"") : ""));
      }

      return a;
    },
    setStateSelection: function setStateSelection() {
      var t = window.getSelection(),
          e = {
        anchorOffset: t.anchorOffset,
        anchorNode: t.anchorNode,
        range: t.getRangeAt && t.rangeCount && t.getRangeAt(0)
      };
      return this.state.selection = e, e;
    },
    getCaretGlobalPosition: function getCaretGlobalPosition() {
      var t = document.getSelection();

      if (t.rangeCount) {
        var _e2 = t.getRangeAt(0),
            _i = _e2.startContainer,
            _s = _e2.startOffset;

        var _a, _n;

        if (_s > 0) return _n = document.createRange(), _n.setStart(_i, _s - 1), _n.setEnd(_i, _s), _a = _n.getBoundingClientRect(), {
          left: _a.right,
          top: _a.top,
          bottom: _a.bottom
        };
        if (_i.getBoundingClientRect) return _i.getBoundingClientRect();
      }

      return {
        left: -9999,
        top: -9999
      };
    },
    getCSSVars: function getCSSVars() {
      var t = getComputedStyle(this.DOM.scope, null);
      var e;
      this.CSSVars = {
        tagHideTransition: function (_ref) {
          var t = _ref.value,
              e = _ref.unit;
          return "s" == e ? 1e3 * t : t;
        }(function (t) {
          if (!t) return {};
          var e = (t = t.trim().split(" ")[0]).split(/\d+/g).filter(function (t) {
            return t;
          }).pop().trim();
          return {
            value: +t.split(e).filter(function (t) {
              return t;
            })[0].trim(),
            unit: e
          };
        }((e = "tag-hide-transition", t.getPropertyValue("--" + e))))
      };
    },
    build: function build(t) {
      var e = this.DOM;
      this.settings.mixMode.integrated ? (e.originalInput = null, e.scope = t, e.input = t) : (e.originalInput = t, e.scope = this.parseTemplate("wrapper", [t, this.settings]), e.input = e.scope.querySelector(this.settings.classNames.inputSelector), t.parentNode.insertBefore(e.scope, t)), this.settings.dropdown.enabled >= 0 && this.dropdown.init.call(this);
    },
    destroy: function destroy() {
      this.DOM.scope.parentNode.removeChild(this.DOM.scope), this.dropdown.hide.call(this, !0), clearTimeout(this.dropdownHide__bindEventsTimeout);
    },
    loadOriginalValues: function loadOriginalValues(t) {
      var e,
          i = this.settings;
      if (t = t || (i.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value)) {
        if (this.removeAllTags({
          withoutChangeEvent: !0
        }), "mix" == i.mode) this.parseMixTags(t.trim()), (e = this.DOM.input.lastChild) && "BR" == e.tagName || this.DOM.input.insertAdjacentHTML("beforeend", "<br>");else {
          try {
            JSON.parse(t) instanceof Array && (t = JSON.parse(t));
          } catch (t) {}

          this.addTags(t).forEach(function (t) {
            return t && t.classList.add(i.classNames.tagNoAnimation);
          });
        }
      } else this.postUpdate();
      this.state.lastOriginalValueReported = i.mixMode.integrated ? "" : this.DOM.originalInput.value, this.state.loadedOriginalValues = !0;
    },
    cloneEvent: function cloneEvent(t) {
      var e = {};

      for (var i in t) {
        e[i] = t[i];
      }

      return e;
    },
    loading: function loading(t) {
      return this.state.isLoading = t, this.DOM.scope.classList[t ? "add" : "remove"](this.settings.classNames.scopeLoading), this;
    },
    tagLoading: function tagLoading(t, e) {
      return t && t.classList[e ? "add" : "remove"](this.settings.classNames.tagLoading), this;
    },
    toggleClass: function toggleClass(t, e) {
      "string" == typeof t && this.DOM.scope.classList.toggle(t, e);
    },
    toggleFocusClass: function toggleFocusClass(t) {
      this.toggleClass(this.settings.classNames.focus, !!t);
    },
    triggerChangeEvent: function triggerChangeEvent() {
      if (!this.settings.mixMode.integrated) {
        var t = this.DOM.originalInput,
            e = this.state.lastOriginalValueReported !== t.value,
            i = new CustomEvent("change", {
          bubbles: !0
        });
        e && (this.state.lastOriginalValueReported = t.value, i.simulated = !0, t._valueTracker && t._valueTracker.setValue(Math.random()), t.dispatchEvent(i), this.trigger("change", this.state.lastOriginalValueReported), t.value = this.state.lastOriginalValueReported);
      }
    },
    events: p,
    fixFirefoxLastTagNoCaret: function fixFirefoxLastTagNoCaret() {},
    placeCaretAfterNode: function placeCaretAfterNode(t) {
      if (t && t.parentNode) {
        var e = t.nextSibling,
            i = window.getSelection(),
            s = i.getRangeAt(0);
        i.rangeCount && (s.setStartBefore(e || t), s.setEndBefore(e || t), i.removeAllRanges(), i.addRange(s));
      }
    },
    insertAfterTag: function insertAfterTag(t, e) {
      if (e = e || this.settings.mixMode.insertAfterTag, t && t.parentNode && e) return e = "string" == typeof e ? document.createTextNode(e) : e, t.parentNode.insertBefore(e, t.nextSibling), e;
    },
    editTag: function editTag(t, e) {
      var _this12 = this;

      t = t || this.getLastTag(), e = e || {}, this.dropdown.hide.call(this);
      var i = this.settings;

      function s() {
        return t.querySelector(i.classNames.tagTextSelector);
      }

      var a = s(),
          n = this.getNodeIndex(t),
          r = this.tagData(t),
          l = this.events.callbacks,
          d = this,
          h = !0;

      if (a) {
        if (!(r instanceof Object && "editable" in r) || r.editable) return a.setAttribute("contenteditable", !0), t.classList.add(i.classNames.tagEditing), this.tagData(t, {
          __originalData: o({}, r),
          __originalHTML: t.innerHTML
        }), a.addEventListener("focus", l.onEditTagFocus.bind(this, t)), a.addEventListener("blur", function () {
          setTimeout(function () {
            return l.onEditTagBlur.call(d, s());
          });
        }), a.addEventListener("input", l.onEditTagInput.bind(this, a)), a.addEventListener("keydown", function (e) {
          return l.onEditTagkeydown.call(_this12, e, t);
        }), a.focus(), this.setRangeAtStartEnd(!1, a), e.skipValidation || (h = this.editTagToggleValidity(t, r.value)), a.originalIsValid = h, this.trigger("edit:start", {
          tag: t,
          index: n,
          data: r,
          isValid: h
        }), this;
      } else console.warn("Cannot find element in Tag template: .", i.classNames.tagTextSelector);
    },
    editTagToggleValidity: function editTagToggleValidity(t, e) {
      var i,
          s = this.tagData(t);
      if (s) return i = !(!s.__isValid || 1 == s.__isValid), t.classList.toggle(this.settings.classNames.tagInvalid, i), s.__isValid;
      console.warn("tag has no data: ", t, s);
    },
    onEditTagDone: function onEditTagDone(t, e) {
      e = e || {};
      var i = {
        tag: t = t || this.state.editing.scope,
        index: this.getNodeIndex(t),
        previousData: this.tagData(t),
        data: e
      };
      this.trigger("edit:beforeUpdate", i, {
        cloneData: !1
      }), this.state.editing = !1, delete e.__originalData, delete e.__originalHTML, t && e[this.settings.tagTextProp] ? (this.editTagToggleValidity(t), this.replaceTag(t, e)) : t && this.removeTags(t), this.trigger("edit:updated", i), this.dropdown.hide.call(this), this.settings.keepInvalidTags && this.reCheckInvalidTags();
    },
    replaceTag: function replaceTag(t, e) {
      e && e.value || (e = t.__tagifyTagData), e.__isValid && 1 != e.__isValid && o(e, this.getInvalidTagAttrs(e, e.__isValid));
      var i = this.createTagElem(e);
      t.parentNode.replaceChild(i, t), this.updateValueByDOMTags();
    },
    updateValueByDOMTags: function updateValueByDOMTags() {
      var _this13 = this;

      this.value.length = 0, [].forEach.call(this.getTagElms(), function (t) {
        t.classList.contains(_this13.settings.classNames.tagNotAllowed.split(" ")[0]) || _this13.value.push(_this13.tagData(t));
      }), this.update();
    },
    setRangeAtStartEnd: function setRangeAtStartEnd(t, e) {
      t = "number" == typeof t ? t : !!t, e = (e = e || this.DOM.input).lastChild || e;
      var i = document.getSelection();

      try {
        i.rangeCount >= 1 && ["Start", "End"].forEach(function (s) {
          return i.getRangeAt(0)["set" + s](e, t || e.length);
        });
      } catch (t) {
        console.warn("Tagify: ", t);
      }
    },
    injectAtCaret: function injectAtCaret(t, e) {
      if (e = e || this.state.selection.range) return "string" == typeof t && (t = document.createTextNode(t)), e.deleteContents(), e.insertNode(t), this.setRangeAtStartEnd(!1, t), this.updateValueByDOMTags(), this.update(), this;
    },
    input: {
      set: function set() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var i = this.settings.dropdown.closeOnSelect;
        this.state.inputText = t, e && (this.DOM.input.innerHTML = s("" + t)), !t && i && this.dropdown.hide.bind(this), this.input.autocomplete.suggest.call(this), this.input.validate.call(this);
      },
      validate: function validate() {
        var t = !this.state.inputText || !0 === this.validateTag({
          value: this.state.inputText
        });
        return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid, !t), t;
      },
      normalize: function normalize(t) {
        var e = t || this.DOM.input,
            i = [];
        e.childNodes.forEach(function (t) {
          return 3 == t.nodeType && i.push(t.nodeValue);
        }), i = i.join("\n");

        try {
          i = i.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(0));
        } catch (t) {}

        return i = i.replace(/\s/g, " "), this.settings.trim && (i = i.replace(/^\s+/, "")), i;
      },
      autocomplete: {
        suggest: function suggest(t) {
          if (this.settings.autoComplete.enabled) {
            "string" == typeof (t = t || {}) && (t = {
              value: t
            });
            var e = t.value ? "" + t.value : "",
                i = e.substr(0, this.state.inputText.length).toLowerCase(),
                s = e.substring(this.state.inputText.length);
            e && this.state.inputText && i == this.state.inputText.toLowerCase() ? (this.DOM.input.setAttribute("data-suggest", s), this.state.inputSuggestion = t) : (this.DOM.input.removeAttribute("data-suggest"), delete this.state.inputSuggestion);
          }
        },
        set: function set(t) {
          var e = this.DOM.input.getAttribute("data-suggest"),
              i = t || (e ? this.state.inputText + e : null);
          return !!i && ("mix" == this.settings.mode ? this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix + i)) : (this.input.set.call(this, i), this.setRangeAtStartEnd()), this.input.autocomplete.suggest.call(this), this.dropdown.hide.call(this), !0);
        }
      }
    },
    getTagIdx: function getTagIdx(t) {
      return this.value.findIndex(function (e) {
        return e.__tagId == (t || {}).__tagId;
      });
    },
    getNodeIndex: function getNodeIndex(t) {
      var e = 0;
      if (t) for (; t = t.previousElementSibling;) {
        e++;
      }
      return e;
    },
    getTagElms: function getTagElms() {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }

      var e = "." + [].concat(_toConsumableArray(this.settings.classNames.tag.split(" ")), t).join(".");
      return [].slice.call(this.DOM.scope.querySelectorAll(e));
    },
    getLastTag: function getLastTag() {
      var t = this.DOM.scope.querySelectorAll("".concat(this.settings.classNames.tagSelector, ":not(.").concat(this.settings.classNames.tagHide, "):not([readonly])"));
      return t[t.length - 1];
    },
    tagData: function tagData(t, e, i) {
      return t ? (e && (t.__tagifyTagData = i ? e : o({}, t.__tagifyTagData || {}, e)), t.__tagifyTagData) : (console.warn("tag elment doesn't exist", t, e), e);
    },
    isTagDuplicate: function isTagDuplicate(e, i) {
      var _this14 = this;

      var s = this.settings;
      return "select" != s.mode && this.value.reduce(function (a, n) {
        return t(_this14.trim("" + e), n.value, i || s.dropdown.caseSensitive) ? a + 1 : a;
      }, 0);
    },
    getTagIndexByValue: function getTagIndexByValue(e) {
      var _this15 = this;

      var i = [];
      return this.getTagElms().forEach(function (s, a) {
        t(_this15.trim(s.textContent), e, _this15.settings.dropdown.caseSensitive) && i.push(a);
      }), i;
    },
    getTagElmByValue: function getTagElmByValue(t) {
      var e = this.getTagIndexByValue(t)[0];
      return this.getTagElms()[e];
    },
    flashTag: function flashTag(t) {
      var _this16 = this;

      t && (t.classList.add(this.settings.classNames.tagFlash), setTimeout(function () {
        t.classList.remove(_this16.settings.classNames.tagFlash);
      }, 100));
    },
    isTagBlacklisted: function isTagBlacklisted(t) {
      return t = this.trim(t.toLowerCase()), this.settings.blacklist.filter(function (e) {
        return ("" + e).toLowerCase() == t;
      }).length;
    },
    isTagWhitelisted: function isTagWhitelisted(t) {
      return !!this.getWhitelistItem(t);
    },
    getWhitelistItem: function getWhitelistItem(e, i, s) {
      i = i || "value";
      var a,
          n = this.settings;
      return (s = s || n.whitelist).some(function (s) {
        var o = "string" == typeof s ? s : s[i] || s.value;
        if (t(o, e, n.dropdown.caseSensitive, n.trim)) return a = "string" == typeof s ? {
          value: s
        } : s, !0;
      }), a || "value" != i || "value" == n.tagTextProp || (a = this.getWhitelistItem(e, n.tagTextProp, s)), a;
    },
    validateTag: function validateTag(t) {
      var e = this.settings,
          i = "value" in t ? "value" : e.tagTextProp,
          s = this.trim(t[i] + "");
      return (t[i] + "").trim() ? e.pattern && e.pattern instanceof RegExp && !e.pattern.test(s) ? this.TEXTS.pattern : !e.duplicates && this.isTagDuplicate(s, this.state.editing) ? this.TEXTS.duplicate : this.isTagBlacklisted(s) || e.enforceWhitelist && !this.isTagWhitelisted(s) ? this.TEXTS.notAllowed : !e.validate || e.validate(t) : this.TEXTS.empty;
    },
    getInvalidTagAttrs: function getInvalidTagAttrs(t, e) {
      return {
        "aria-invalid": !0,
        class: "".concat(t.class || "", " ").concat(this.settings.classNames.tagNotAllowed).trim(),
        title: e
      };
    },
    hasMaxTags: function hasMaxTags() {
      return this.value.length >= this.settings.maxTags && this.TEXTS.exceed;
    },
    setReadonly: function setReadonly(t) {
      var e = this.settings;
      document.activeElement.blur(), e.readonly = t, this.DOM.scope[(t ? "set" : "remove") + "Attribute"]("readonly", !0), "mix" == e.mode && (this.DOM.input.contentEditable = !t);
    },
    normalizeTags: function normalizeTags(t) {
      var _this17 = this,
          _ref3;

      var e = this.settings,
          i = e.whitelist,
          s = e.delimiters,
          a = e.mode,
          n = e.tagTextProp;
      e.enforceWhitelist;

      var o = [],
          r = !!i && i[0] instanceof Object,
          l = t instanceof Array,
          d = function d(t) {
        return (t + "").split(s).filter(function (t) {
          return t;
        }).map(function (t) {
          var _ref2;

          return _ref2 = {}, _defineProperty(_ref2, n, _this17.trim(t)), _defineProperty(_ref2, "value", _this17.trim(t)), _ref2;
        });
      };

      if ("number" == typeof t && (t = t.toString()), "string" == typeof t) {
        if (!t.trim()) return [];
        t = d(t);
      } else l && (t = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.map(function (t) {
        return t.value ? t : d(t);
      }))));

      return r && (t.forEach(function (t) {
        var e = o.map(function (t) {
          return t.value;
        }),
            i = _this17.dropdown.filterListItems.call(_this17, t[n], {
          exact: !0
        }).filter(function (t) {
          return !e.includes(t.value);
        }),
            s = i.length > 1 ? _this17.getWhitelistItem(t[n], n, i) : i[0];

        s && s instanceof Object ? o.push(s) : "mix" != a && (null == t.value && (t.value = t[n]), o.push(t));
      }), t = o), t;
    },
    parseMixTags: function parseMixTags(t) {
      var _this18 = this;

      var e = this.settings,
          i = e.mixTagsInterpolator,
          s = e.duplicates,
          a = e.transformTag,
          n = e.enforceWhitelist,
          o = e.maxTags,
          r = e.tagTextProp,
          l = [];
      return t = t.split(i[0]).map(function (t, e) {
        var d,
            h,
            g,
            c = t.split(i[1]),
            p = c[0],
            u = l.length == o;

        try {
          if (p == +p) throw Error;
          h = JSON.parse(p);
        } catch (t) {
          h = _this18.normalizeTags(p)[0] || {
            value: p
          };
        }

        if (u || !(c.length > 1) || n && !_this18.isTagWhitelisted(h.value) || !s && _this18.isTagDuplicate(h.value)) {
          if (t) return e ? i[0] + t : t;
        } else a.call(_this18, h), h[d = h[r] ? r : "value"] = _this18.trim(h[d]), g = _this18.createTagElem(h), l.push(h), g.classList.add(_this18.settings.classNames.tagNoAnimation), c[0] = g.outerHTML, _this18.value.push(h);

        return c.join("");
      }).join(""), this.DOM.input.innerHTML = t, this.DOM.input.appendChild(document.createTextNode("")), this.DOM.input.normalize(), this.getTagElms().forEach(function (t, e) {
        return _this18.tagData(t, l[e]);
      }), this.update({
        withoutChangeEvent: !0
      }), t;
    },
    replaceTextWithNode: function replaceTextWithNode(t, e) {
      if (this.state.tag || e) {
        e = e || this.state.tag.prefix + this.state.tag.value;
        var i,
            s,
            a = window.getSelection(),
            n = a.anchorNode,
            o = this.state.tag.delimiters ? this.state.tag.delimiters.length : 0;
        return n.splitText(a.anchorOffset - o), i = n.nodeValue.lastIndexOf(e), s = n.splitText(i), t && n.parentNode.replaceChild(t, s), !0;
      }
    },
    selectTag: function selectTag(t, e) {
      if (!this.settings.enforceWhitelist || this.isTagWhitelisted(e.value)) return this.input.set.call(this, e[this.settings.tagTextProp || "value"], !0), this.state.actions.selectOption && setTimeout(this.setRangeAtStartEnd.bind(this)), this.getLastTag() ? this.replaceTag(this.getLastTag(), e) : this.appendTag(t), this.value[0] = e, this.trigger("add", {
        tag: t,
        data: e
      }), this.update(), [t];
    },
    addEmptyTag: function addEmptyTag(t) {
      var e = o({
        value: ""
      }, t || {}),
          i = this.createTagElem(e);
      this.tagData(i, e), this.appendTag(i), this.editTag(i, {
        skipValidation: !0
      });
    },
    addTags: function addTags(t, e) {
      var _this19 = this;

      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.settings.skipInvalid;
      var s = [],
          a = this.settings,
          n = document.createDocumentFragment();
      return t && 0 != t.length ? (t = this.normalizeTags(t), "mix" == a.mode ? this.addMixTags(t) : ("select" == a.mode && (e = !1), this.DOM.input.removeAttribute("style"), t.forEach(function (t) {
        var e,
            r = {},
            l = Object.assign({}, t, {
          value: t.value + ""
        });

        if ((t = Object.assign({}, l)).__isValid = _this19.hasMaxTags() || _this19.validateTag(t), a.transformTag.call(_this19, t), !0 !== t.__isValid) {
          if (i) return;
          o(r, _this19.getInvalidTagAttrs(t, t.__isValid), {
            __preInvalidData: l
          }), t.__isValid == _this19.TEXTS.duplicate && _this19.flashTag(_this19.getTagElmByValue(t.value));
        }

        if (t.readonly && (r["aria-readonly"] = !0), e = _this19.createTagElem(t, r), s.push(e), "select" == a.mode) return _this19.selectTag(e, t);
        n.appendChild(e), t.__isValid && !0 === t.__isValid ? (_this19.value.push(t), _this19.update(), _this19.trigger("add", {
          tag: e,
          index: _this19.value.length - 1,
          data: t
        })) : (_this19.trigger("invalid", {
          data: t,
          index: _this19.value.length,
          tag: e,
          message: t.__isValid
        }), a.keepInvalidTags || setTimeout(function () {
          return _this19.removeTags(e, !0);
        }, 1e3)), _this19.dropdown.position.call(_this19);
      }), this.appendTag(n), t.length && e && this.input.set.call(this), this.dropdown.refilter.call(this), s)) : ("select" == a.mode && this.removeAllTags(), s);
    },
    addMixTags: function addMixTags(t) {
      var _this20 = this;

      if (t[0].prefix || this.state.tag) this.prefixedTextToTag(t[0]);else {
        "string" == typeof t && (t = [{
          value: t
        }]);
        var e = !!this.state.selection,
            i = document.createDocumentFragment();
        t.forEach(function (t) {
          var e = _this20.createTagElem(t);

          i.appendChild(e), _this20.insertAfterTag(e);
        }), e ? this.injectAtCaret(i) : (this.DOM.input.focus(), (e = this.setStateSelection()).range.setStart(this.DOM.input, e.range.endOffset), e.range.setEnd(this.DOM.input, e.range.endOffset), this.DOM.input.appendChild(i), this.updateValueByDOMTags(), this.update());
      }
    },
    prefixedTextToTag: function prefixedTextToTag(t) {
      var _this21 = this;

      var e,
          i = this.settings,
          s = this.state.tag.delimiters;

      if (i.transformTag.call(this, t), t.prefix = t.prefix || this.state.tag ? this.state.tag.prefix : (i.pattern.source || i.pattern)[0], e = this.createTagElem(t), this.replaceTextWithNode(e) || this.DOM.input.appendChild(e), setTimeout(function () {
        return e.classList.add(_this21.settings.classNames.tagNoAnimation);
      }, 300), this.value.push(t), this.update(), !s) {
        var a = this.insertAfterTag(e) || e;
        this.placeCaretAfterNode(a);
      }

      return this.state.tag = null, this.trigger("add", o({}, {
        tag: e
      }, {
        data: t
      })), e;
    },
    appendTag: function appendTag(t) {
      var e = this.DOM,
          i = e.scope.lastElementChild;
      i === e.input ? e.scope.insertBefore(t, i) : e.scope.appendChild(t);
    },
    createTagElem: function createTagElem(t, e) {
      t.__tagId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (t) {
        return (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16);
      });
      var i,
          a = o({}, t, {
        value: s(t.value + "")
      });
      return function (t) {
        for (var e, i = document.createNodeIterator(t, NodeFilter.SHOW_TEXT, null, !1); e = i.nextNode();) {
          e.textContent.trim() || e.parentNode.removeChild(e);
        }
      }(i = this.parseTemplate("tag", [a])), this.tagData(i, t), i;
    },
    reCheckInvalidTags: function reCheckInvalidTags() {
      var _this22 = this;

      var t = this.settings,
          e = "".concat(t.classNames.tagSelector).concat(t.classNames.tagNotAllowedSelector),
          i = this.DOM.scope.querySelectorAll(e);
      [].forEach.call(i, function (t) {
        var e = _this22.tagData(t),
            i = t.getAttribute("title") == _this22.TEXTS.duplicate,
            s = !0 === _this22.validateTag(e);

        i && s && (e = e.__preInvalidData ? e.__preInvalidData : {
          value: e.value
        }, _this22.replaceTag(t, e));
      });
    },
    removeTags: function removeTags(t, e, i) {
      var _this23 = this;

      var s;
      t = t && t instanceof HTMLElement ? [t] : t instanceof Array ? t : t ? [t] : [this.getLastTag()], s = t.reduce(function (t, e) {
        return e && "string" == typeof e && (e = _this23.getTagElmByValue(e)), e && t.push({
          node: e,
          idx: _this23.getTagIdx(_this23.tagData(e)),
          data: _this23.tagData(e, {
            __removed: !0
          })
        }), t;
      }, []), i = "number" == typeof i ? i : this.CSSVars.tagHideTransition, "select" == this.settings.mode && (i = 0, this.input.set.call(this)), 1 == s.length && s[0].node.classList.contains(this.settings.classNames.tagNotAllowed) && (e = !0), s.length && this.settings.hooks.beforeRemoveTag(s, {
        tagify: this
      }).then(function () {
        function t(t) {
          t.node.parentNode && (t.node.parentNode.removeChild(t.node), e ? this.settings.keepInvalidTags && this.trigger("remove", {
            tag: t.node,
            index: t.idx
          }) : (this.trigger("remove", {
            tag: t.node,
            index: t.idx,
            data: t.data
          }), this.dropdown.refilter.call(this), this.dropdown.position.call(this), this.DOM.input.normalize(), this.settings.keepInvalidTags && this.reCheckInvalidTags()));
        }

        i && i > 10 && 1 == s.length ? function (e) {
          e.node.style.width = parseFloat(window.getComputedStyle(e.node).width) + "px", document.body.clientTop, e.node.classList.add(this.settings.classNames.tagHide), setTimeout(t.bind(this), i, e);
        }.call(_this23, s[0]) : s.forEach(t.bind(_this23)), e || (s.forEach(function (t) {
          var e = Object.assign({}, t.data);
          delete e.__removed;

          var i = _this23.getTagIdx(e);

          i > -1 && _this23.value.splice(i, 1);
        }), _this23.update());
      }).catch(function (t) {});
    },
    removeTagsFromDOM: function removeTagsFromDOM() {
      [].slice.call(this.getTagElms()).forEach(function (t) {
        return t.parentNode.removeChild(t);
      });
    },
    removeAllTags: function removeAllTags(t) {
      t = t || {}, this.value = [], "mix" == this.settings.mode ? this.DOM.input.innerHTML = "" : this.removeTagsFromDOM(), this.dropdown.position.call(this), "select" == this.settings.mode && this.input.set.call(this), this.update(t);
    },
    postUpdate: function postUpdate() {
      var t = this.settings.classNames,
          e = "mix" == this.settings.mode ? this.settings.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value : this.value.length;
      this.toggleClass(t.hasMaxTags, this.value.length >= this.settings.maxTags), this.toggleClass(t.hasNoTags, !this.value.length), this.toggleClass(t.empty, !e);
    },
    getCleanValue: function getCleanValue() {
      return t = this.value, e = ["__isValid", "__removed", "__originalData", "__originalHTML", "__tagId"], t.map(function (t) {
        var i = {};

        for (var s in t) {
          e.indexOf(s) < 0 && (i[s] = t[s]);
        }

        return i;
      });
      var t, e;
    },
    update: function update(t) {
      var e = this.DOM.originalInput,
          i = (t || {}).withoutChangeEvent,
          s = this.getCleanValue();
      this.settings.mixMode.integrated || (e.value = "mix" == this.settings.mode ? this.getMixedTagsAsString(s) : s.length ? this.settings.originalInputValueFormat ? this.settings.originalInputValueFormat(s) : JSON.stringify(s) : ""), this.postUpdate(), !i && this.state.loadedOriginalValues && this.triggerChangeEvent();
    },
    getMixedTagsAsString: function getMixedTagsAsString() {
      var t = "",
          e = this,
          i = this.settings.mixTagsInterpolator;
      return function s(a) {
        a.childNodes.forEach(function (a) {
          if (1 == a.nodeType) {
            if (a.classList.contains(e.settings.classNames.tag) && e.tagData(a)) {
              if (e.tagData(a).__removed) return;
              return void (t += i[0] + JSON.stringify(a.__tagifyTagData) + i[1]);
            }

            "BR" != a.tagName || a.parentNode != e.DOM.input && 1 != a.parentNode.childNodes.length ? "DIV" != a.tagName && "P" != a.tagName || (t += "\r\n", s(a)) : t += "\r\n";
          } else t += a.textContent;
        });
      }(this.DOM.input), t;
    }
  }, u.prototype.removeTag = u.prototype.removeTags, u;
});
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/@yaireo/tagify/src/tagify.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"hilitor.js":[function(require,module,exports) {
// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.
function Hilitor(id, tag) {
  // private variables
  var targetNode = document.getElementById(id) || document.body;
  var hiliteTag = tag || "MARK";
  var skipTags = new RegExp("^(?:" + hiliteTag + "|SCRIPT|FORM|SPAN)$");
  var colors = ["#ff6", "#a0ffff", "#9f9", "#f99", "#f6f"];
  var wordColor = [];
  var colorIdx = 0;
  var matchRegExp = "";
  var openLeft = false;
  var openRight = false; // characters to strip from start and end of the input string

  var endRegExp = new RegExp('^[^\\w]+|[^\\w]+$', "g"); // characters used to break up the input string into words

  var breakRegExp = new RegExp('[^\\w\'-]+', "g");

  this.setEndRegExp = function (regex) {
    endRegExp = regex;
    return endRegExp;
  };

  this.setBreakRegExp = function (regex) {
    breakRegExp = regex;
    return breakRegExp;
  };

  this.setMatchType = function (type) {
    switch (type) {
      case "left":
        this.openLeft = false;
        this.openRight = true;
        break;

      case "right":
        this.openLeft = true;
        this.openRight = false;
        break;

      case "open":
        this.openLeft = this.openRight = true;
        break;

      default:
        this.openLeft = this.openRight = false;
    }
  };

  this.setRegex = function (input) {
    input = input.replace(endRegExp, "");
    input = input.replace(breakRegExp, "|");
    input = input.replace(/^\||\|$/g, "");

    if (input) {
      var re = "(" + input + ")";

      if (!this.openLeft) {
        re = "\\b" + re;
      }

      if (!this.openRight) {
        re = re + "\\b";
      }

      matchRegExp = new RegExp(re, "i");
      return matchRegExp;
    }

    return false;
  };

  this.getRegex = function () {
    var retval = matchRegExp.toString();
    retval = retval.replace(/(^\/(\\b)?|\(|\)|(\\b)?\/i$)/g, "");
    retval = retval.replace(/\|/g, " ");
    return retval;
  }; // recursively apply word highlighting


  this.hiliteWords = function (node) {
    if (node === undefined || !node) return;
    if (!matchRegExp) return;
    if (skipTags.test(node.nodeName)) return;

    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++) {
        this.hiliteWords(node.childNodes[i]);
      }
    }

    if (node.nodeType == 3) {
      // NODE_TEXT
      if ((nv = node.nodeValue) && (regs = matchRegExp.exec(nv))) {
        if (!wordColor[regs[0].toLowerCase()]) {
          wordColor[regs[0].toLowerCase()] = colors[colorIdx++ % colors.length];
        }

        var match = document.createElement(hiliteTag);
        match.appendChild(document.createTextNode(regs[0]));
        match.style.backgroundColor = wordColor[regs[0].toLowerCase()];
        match.style.color = "#000";
        var after = node.splitText(regs.index);
        after.nodeValue = after.nodeValue.substring(regs[0].length);
        node.parentNode.insertBefore(match, after);
      }
    }

    ;
  }; // remove highlighting


  this.remove = function () {
    var arr = document.getElementsByTagName(hiliteTag);

    while (arr.length && (el = arr[0])) {
      var parent = el.parentNode;
      parent.replaceChild(el.firstChild, el);
      parent.normalize();
    }
  }; // start highlighting at target node


  this.apply = function (input) {
    this.remove();

    if (input === undefined || !(input = input.replace(/(^\s+|\s+$)/g, ""))) {
      return;
    }

    if (this.setRegex(input)) {
      this.hiliteWords(targetNode);
    }

    return matchRegExp;
  };

  return this;
}

exports.Hilitor = Hilitor;
},{}],"db.js":[function(require,module,exports) {
var db = [{
  id: 263,
  name: "The January Man",
  guests: ["Kulap Vilaysack"],
  directors: ["Pat O'Connor"],
  actors: ["Kevin Kline", "Susan Sarandon", "Mary Elizabeth Mastrantonio", "Harvey Keitel", "Danny Aiello", "Rod Steiger"]
}, {
  id: 205,
  name: "Cellular",
  guests: ["Ike Barinholtz", "Erin Gibson"],
  directors: ["David R. Ellis"],
  actors: ["Kim Basinger", "Chris Evans", "Jason Statham", "Eric Christian Olsen", "Noah Emmerich", "William H. Macy"]
}, {
  id: 220,
  name: "Hobbs & Shaw",
  guests: ["Adam Scott", "Nicole Byer"],
  directors: ["David Leitch"],
  actors: ["Dwayne Johnson", "Jason Statham", "Idris Elba", "Vanessa Kirby", "Eiza González", "Cliff Curtis", "Helen Mirren"]
}];
exports.db = db;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _tagify = _interopRequireDefault(require("@yaireo/tagify"));

require("@yaireo/tagify/src/tagify.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

console.clear();

var hilitor = require("./hilitor");

var movieDb = require("./db");

(function () {
  // DOM elements we manipulate.
  var domDisplayList = document.querySelector("#episodes-list");
  var domTextInput = document.querySelector("#text-filter");
  var domRemoveAllBtn = document.querySelector("#tags-removeAllBtn"); // All the movies we know about.

  var allMoviesSet = new Set(movieDb.db); // A set of movies which are currently visible.

  var visibleMoviesSet = new Set(allMoviesSet); // A set of all tags (used to build a tagify whitelist).

  var allTagsSet = new Set(); // A set of tags which are currently applied.

  var activeTagsSet = new Set(); // A map from a tag to a set of movies it *removes* from the current visible set.

  var tagRemovesEnv = {}; // Build up a whitelist of tags.

  var _iterator = _createForOfIteratorHelper(allMoviesSet),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var movie = _step.value;
      var tags = movie.guests.concat(movie.actors).concat(movie.directors).concat([movie.name, movie.id.toString()]);
      movie.tags = tags;

      var _iterator4 = _createForOfIteratorHelper(tags),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var tag = _step4.value;
          allTagsSet.add(tag);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    } // Initialize tagify.

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var tagify = new _tagify.default(domTextInput, {
    enforceWhitelist: true,
    whitelist: Array.from(allTagsSet)
  });
  tagify.on("add", onTagAdd);
  tagify.on("remove", onTagRemove);
  domRemoveAllBtn.addEventListener("click", tagify.removeAllTags.bind(tagify)); // document.addEventListener("onload", tagify.removeAllTags.bind(tagify));
  // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  //     console.info( "This page is reloaded" );
  // } else {
  //     console.info( "This page is not reloaded");
  // }
  // Initialize Hilitor.

  var hilitorObj = hilitor.Hilitor("movies-list"); // Called when a tag is added.

  function onTagAdd(e) {
    var tag = e.detail.data.value;
    activeTagsSet.add(tag);
    tagRemovesEnv[tag] = new Set();
    var visibleMoviesSet2 = new Set();

    var _iterator2 = _createForOfIteratorHelper(visibleMoviesSet),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var movie = _step2.value;

        if (movie.tags.includes(tag)) {
          visibleMoviesSet2.add(movie);
        } else {
          tagRemovesEnv[tag].add(movie);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    visibleMoviesSet = visibleMoviesSet2;
    renderVisibleMovies();
  } // Called when a tag is removed.


  function onTagRemove(e) {
    var tag = e.detail.data.value;
    activeTagsSet.delete(tag);

    var _iterator3 = _createForOfIteratorHelper(tagRemovesEnv[tag]),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var movie = _step3.value;
        visibleMoviesSet.add(movie);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    tagRemovesEnv[tag] = new Set();
    renderVisibleMovies();
  } // Render a single movie on screen.


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
    actors.textContent = "Starring: " + movie.actors.join(", ");
    directors.textContent = "Directed By: " + movie.directors.join(", ");

    if (movie.guests != null) {
      guests.textContent = "Episode Guests: " + movie.guests.join(", ");
    }

    li.appendChild(name);
    li.appendChild(actors);
    li.appendChild(directors);
    li.appendChild(guests);
    return li;
  } // Render the set of movies which are currently visible.


  function renderVisibleMovies() {
    var visibleMoviesList = Array.from(visibleMoviesSet).sort(function (a, b) {
      return b.id - a.id;
    });
    var frag = document.createDocumentFragment();

    for (var i = 0; i < visibleMoviesList.length; i++) {
      var movie = visibleMoviesList[i],
          li = renderMovie(movie);
      frag.appendChild(li);
    }

    domDisplayList.innerHTML = "";
    domDisplayList.appendChild(frag);
    hilitorObj.apply(Array.from(activeTagsSet).join(" "));
  } // Clear all tags and render *all* movies at the beginning.


  tagify.removeAllTags.bind(tagify)();
  renderVisibleMovies();
})();
},{"@yaireo/tagify":"node_modules/@yaireo/tagify/dist/tagify.min.js","@yaireo/tagify/src/tagify.scss":"node_modules/@yaireo/tagify/src/tagify.scss","./hilitor":"hilitor.js","./db":"db.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57604" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/hdtgm-search.e31bb0bc.js.map