/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8246:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(594);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js
var object_assign = __webpack_require__(1942);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js
var map = __webpack_require__(2991);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js
var concat = __webpack_require__(7766);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(9348);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/regenerator/index.js
var regenerator = __webpack_require__(3109);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/api/api.ts




var API_KEY = 'e8312a66378248f4aaa1299a34a2d6be';
var MAX_SERVER_RESULT = 100;
var axiosInstance = axios_default().create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000
});
var getResponse = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(searchValue, sortBy, artOnPage, page) {
    var _context, _context2, _context3, _context4;

    return regenerator_default().wrap(function _callee$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", axiosInstance.get(concat_default()(_context = concat_default()(_context2 = concat_default()(_context3 = concat_default()(_context4 = "v2/everything?q=".concat(searchValue, "&apiKey=")).call(_context4, API_KEY, "&sortBy=")).call(_context3, sortBy, "&pageSize=")).call(_context2, artOnPage, "&page=")).call(_context, page)));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee);
  }));

  return function getResponse(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const api = ((/* unused pure expression or super */ null && (axiosInstance)));
;// CONCATENATED MODULE: ./src/types.ts
var SortType;

(function (SortType) {
  SortType["relevancy"] = "relevancy";
  SortType["popularity"] = "popularity";
  SortType["publishedAt"] = "publishedAt";
})(SortType || (SortType = {}));
;// CONCATENATED MODULE: ./src/utils/pageHandler.ts


var pageHandler = function pageHandler(totalResult, articlesOnPage) {
  if (totalResult > MAX_SERVER_RESULT) {
    return Math.ceil(MAX_SERVER_RESULT / articlesOnPage);
  }

  return Math.ceil(totalResult / articlesOnPage);
};

/* harmony default export */ const utils_pageHandler = (pageHandler);
;// CONCATENATED MODULE: ./src/components/SearchForm/SearchForm.tsx











var SearchForm = function SearchForm(_ref) {
  var setArticles = _ref.setArticles,
      setResults = _ref.setResults;

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0,react.useState)(SortType.popularity),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      sortBy = _useState6[0],
      setSortBy = _useState6[1];

  var _useState7 = (0,react.useState)(1),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      page = _useState8[0],
      setPage = _useState8[1];

  var _useState9 = (0,react.useState)(10),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      artOnPage = _useState10[0],
      setArtOnPage = _useState10[1];

  var _useState11 = (0,react.useState)(0),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      pageQuantity = _useState12[0],
      setPageQuantity = _useState12[1];

  var handleFetch = function handleFetch(sort, curPage, articlesOnPage) {
    setIsLoading(true);
    setArticles([]);

    try {
      getResponse(searchValue, sort, articlesOnPage, curPage).then(function (res) {
        setArticles(res.data.articles);
        setArtOnPage(articlesOnPage);
        setResults(res.data.totalResults);
        setPageQuantity(utils_pageHandler(res.data.totalResults, artOnPage));
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(e) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              handleFetch(sortBy, page, artOnPage);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react.useEffect)(function () {
    if (searchValue) {
      handleFetch(sortBy, page, artOnPage);
    }
  }, [sortBy, page, artOnPage]);
  return (0,jsx_runtime.jsxs)("form", assign_default()({
    className: "search-form",
    onSubmit: handleSubmit
  }, {
    children: [(0,jsx_runtime.jsxs)("div", assign_default()({
      className: "search-form__search-bar"
    }, {
      children: [(0,jsx_runtime.jsx)("label", assign_default()({
        className: "search-form__search-bar__label",
        htmlFor: "search-bar"
      }, {
        children: (0,jsx_runtime.jsx)("input", {
          className: "search-form__search-bar__input",
          id: "search-bar",
          type: "text",
          value: searchValue,
          placeholder: "Search...",
          onChange: function onChange(e) {
            return setSearchValue(e.target.value);
          }
        }, void 0)
      }), void 0), (0,jsx_runtime.jsx)("button", {
        className: "search-form__search-bar__btn",
        type: "submit",
        disabled: !searchValue || isLoading
      }, void 0)]
    }), void 0), (0,jsx_runtime.jsxs)("div", assign_default()({
      className: "search-form__radios"
    }, {
      children: [(0,jsx_runtime.jsxs)("label", assign_default()({
        className: "search-form__radios-label",
        htmlFor: "radio-popularity"
      }, {
        children: [(0,jsx_runtime.jsx)("input", {
          className: "search-form__radios-input",
          id: "radio-popularity",
          type: "radio",
          value: SortType.popularity,
          checked: sortBy === SortType.popularity,
          onChange: function onChange() {
            return setSortBy(SortType.popularity);
          }
        }, void 0), "popularity"]
      }), void 0), (0,jsx_runtime.jsxs)("label", assign_default()({
        className: "search-form__radios-label",
        htmlFor: "radio-relevancy"
      }, {
        children: [(0,jsx_runtime.jsx)("input", {
          className: "search-form__radios-input",
          id: "radio-relevancy",
          type: "radio",
          value: SortType.relevancy,
          checked: sortBy === SortType.relevancy,
          onClick: function onClick() {
            return setSortBy(SortType.relevancy);
          }
        }, void 0), "relevancy"]
      }), void 0), (0,jsx_runtime.jsxs)("label", assign_default()({
        className: "search-form__radios-label",
        htmlFor: "radio-published"
      }, {
        children: [(0,jsx_runtime.jsx)("input", {
          className: "search-form__radios-input",
          id: "radio-published",
          type: "radio",
          value: SortType.publishedAt,
          checked: sortBy === SortType.publishedAt,
          onChange: function onChange() {
            return setSortBy(SortType.publishedAt);
          }
        }, void 0), "published"]
      }), void 0)]
    }), void 0), (0,jsx_runtime.jsxs)("div", assign_default()({
      className: "search-form__controls"
    }, {
      children: [(0,jsx_runtime.jsxs)("p", assign_default()({
        className: "search-form__controls__text"
      }, {
        children: ["page:", ' ', (0,jsx_runtime.jsxs)("span", {
          children: [pageQuantity && page, " / ", pageQuantity]
        }, void 0)]
      }), void 0), (0,jsx_runtime.jsxs)("label", assign_default()({
        className: "search-form__controls__label-input",
        htmlFor: "page-input"
      }, {
        children: ["go to", ' ', (0,jsx_runtime.jsx)("input", {
          className: "search-form__controls__input-page",
          id: "page-input",
          placeholder: "Enter number",
          onChange: function onChange(e) {
            if (+e.target.value > 0 && +e.target.value <= pageQuantity) {
              setPage(+e.target.value);
            }
          }
        }, void 0), ' ', "page"]
      }), void 0), (0,jsx_runtime.jsxs)("label", assign_default()({
        className: "search-form__controls__label-select",
        htmlFor: "art-on-page-select"
      }, {
        children: ["Result on page", (0,jsx_runtime.jsxs)("select", assign_default()({
          className: "search-form__controls__select",
          id: "art-on-page-select",
          value: artOnPage,
          onChange: function onChange(e) {
            setArtOnPage(+e.target.value);
            setPage(1);
          }
        }, {
          children: [(0,jsx_runtime.jsx)("option", assign_default()({
            className: "search-form__controls__select-option"
          }, {
            children: "5"
          }), void 0), (0,jsx_runtime.jsx)("option", assign_default()({
            className: "search-form__controls__select-option"
          }, {
            children: "8"
          }), void 0), (0,jsx_runtime.jsx)("option", assign_default()({
            className: "search-form__controls__select-option"
          }, {
            children: "10"
          }), void 0), (0,jsx_runtime.jsx)("option", assign_default()({
            className: "search-form__controls__select-option"
          }, {
            children: "15"
          }), void 0)]
        }), void 0)]
      }), void 0), (0,jsx_runtime.jsxs)("div", assign_default()({
        className: "search-form__controls__btns"
      }, {
        children: [(0,jsx_runtime.jsx)("button", assign_default()({
          type: "button",
          className: "search-form__controls__btns-btn",
          onClick: function onClick() {
            return setPage(page - 1);
          },
          disabled: page === 1 || isLoading
        }, {
          children: "previous page"
        }), void 0), (0,jsx_runtime.jsx)("button", assign_default()({
          type: "button",
          className: "search-form__controls__btns-btn",
          onClick: function onClick() {
            return setPage(page + 1);
          },
          disabled: page >= pageQuantity || isLoading
        }, {
          children: "next page"
        }), void 0)]
      }), void 0)]
    }), void 0)]
  }), void 0);
};

/* harmony default export */ const SearchForm_SearchForm = (SearchForm);
;// CONCATENATED MODULE: ./src/components/Article/Article.tsx





var Article = function Article(_ref) {
  var author = _ref.author,
      title = _ref.title,
      content = _ref.content,
      publishedAt = _ref.publishedAt,
      source = _ref.source,
      urlToImage = _ref.urlToImage;
  return (0,jsx_runtime.jsxs)("div", assign_default()({
    className: "article"
  }, {
    children: [(0,jsx_runtime.jsx)("h2", assign_default()({
      className: "article__title"
    }, {
      children: title
    }), void 0), (0,jsx_runtime.jsx)("img", {
      className: "article__image",
      src: urlToImage,
      alt: title
    }, void 0), (0,jsx_runtime.jsx)("p", assign_default()({
      className: "article__content"
    }, {
      children: content
    }), void 0), (0,jsx_runtime.jsxs)("div", assign_default()({
      className: "article__inner"
    }, {
      children: [(0,jsx_runtime.jsx)("p", assign_default()({
        className: "article__published"
      }, {
        children: publishedAt
      }), void 0), (0,jsx_runtime.jsx)("p", assign_default()({
        className: "article__author"
      }, {
        children: author
      }), void 0)]
    }), void 0), (0,jsx_runtime.jsxs)("p", assign_default()({
      className: "article__source"
    }, {
      children: ["read more at ", source.name]
    }), void 0)]
  }), void 0);
};

/* harmony default export */ const Article_Article = (Article);
;// CONCATENATED MODULE: ./src/containers/App.tsx









var defaultImage = './public/assets/images/default-image.jpg';

var App = function App() {
  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      articles = _useState2[0],
      setArticles = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  return (0,jsx_runtime.jsxs)("main", assign_default()({
    className: "main"
  }, {
    children: [(0,jsx_runtime.jsx)("h1", assign_default()({
      className: "main__title"
    }, {
      children: "react. api"
    }), void 0), (0,jsx_runtime.jsx)(SearchForm_SearchForm, {
      setArticles: setArticles,
      setResults: setResults
    }, void 0), (0,jsx_runtime.jsx)("div", assign_default()({
      className: "main__articles-field"
    }, {
      children: !articles.length ? results ? (0,jsx_runtime.jsx)("p", {
        children: "Loading"
      }, void 0) : (0,jsx_runtime.jsx)("p", {
        children: "No results"
      }, void 0) : map_default()(articles).call(articles, function (article) {
        var _context, _context2;

        return (0,jsx_runtime.jsx)(Article_Article, {
          author: article.author,
          title: article.title,
          content: article.content,
          publishedAt: article.publishedAt,
          source: article.source,
          urlToImage: article.urlToImage || defaultImage
        }, concat_default()(_context = concat_default()(_context2 = "".concat(article.author, "-")).call(_context2, article.title, "-")).call(_context, article.publishedAt));
      })
    }), void 0)]
  }), void 0);
};

/* harmony default export */ const containers_App = (App);
;// CONCATENATED MODULE: ./src/index.tsx





react_dom.render((0,jsx_runtime.jsx)(containers_App, {}, void 0), document.getElementById('root'));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0,
/******/ 			296: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_components"] = self["webpackChunkreact_components"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [296,872], () => (__webpack_require__(8246)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.479683b3e053c5adcfc9.js.map