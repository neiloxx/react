/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_SERVER_RESULT": () => (/* binding */ MAX_SERVER_RESULT),
/* harmony export */   "getResponse": () => (/* binding */ getResponse),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var API_KEY = 'e8312a66378248f4aaa1299a34a2d6be';
var MAX_SERVER_RESULT = 100;
var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default().create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000
});
var getResponse = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(searchValue, sortBy, artOnPage, page) {
    var _context, _context2, _context3, _context4;

    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", axiosInstance.get(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = "v2/everything?q=".concat(searchValue, "&apiKey=")).call(_context4, API_KEY, "&sortBy=")).call(_context3, sortBy, "&pageSize=")).call(_context2, artOnPage, "&page=")).call(_context, page)));

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

/***/ }),

/***/ "./src/components/Article/Article.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Article/style.scss");





var Article = function Article(_ref) {
  var author = _ref.author,
      title = _ref.title,
      content = _ref.content,
      publishedAt = _ref.publishedAt,
      source = _ref.source,
      urlToImage = _ref.urlToImage;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "article"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: "article__title"
    }, {
      children: title
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      className: "article__image",
      src: urlToImage,
      alt: title
    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: "article__content"
    }, {
      children: content
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: "article__inner"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
        className: "article__published"
      }, {
        children: publishedAt
      }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
        className: "article__author"
      }, {
        children: author
      }), void 0)]
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: "article__source"
    }, {
      children: ["read more at ", source.name]
    }), void 0)]
  }), void 0);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

/***/ }),

/***/ "./src/components/SearchForm/SearchForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/api/api.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/types.ts");
/* harmony import */ var _utils_pageHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/utils/pageHandler.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/SearchForm/style.scss");











var SearchForm = function SearchForm(_ref) {
  var setArticles = _ref.setArticles,
      setResults = _ref.setResults;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_types__WEBPACK_IMPORTED_MODULE_7__.SortType.popularity),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState5, 2),
      sortBy = _useState6[0],
      setSortBy = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState7, 2),
      page = _useState8[0],
      setPage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(10),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState9, 2),
      artOnPage = _useState10[0],
      setArtOnPage = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState11, 2),
      pageQuantity = _useState12[0],
      setPageQuantity = _useState12[1];

  var handleFetch = function handleFetch(sort, curPage, articlesOnPage) {
    setIsLoading(true);
    setArticles([]);

    try {
      (0,_api_api__WEBPACK_IMPORTED_MODULE_6__.getResponse)(searchValue, sort, articlesOnPage, curPage).then(function (res) {
        setArticles(res.data.articles);
        setArtOnPage(articlesOnPage);
        setResults(res.data.totalResults);
        setPageQuantity((0,_utils_pageHandler__WEBPACK_IMPORTED_MODULE_8__.default)(res.data.totalResults, artOnPage));
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
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

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (searchValue) {
      handleFetch(sortBy, page, artOnPage);
    }
  }, [sortBy, page, artOnPage]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
    className: "search-form",
    onSubmit: handleSubmit
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
      className: "search-form__search-bar"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
        className: "search-form__search-bar__label",
        htmlFor: "search-bar"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          className: "search-form__search-bar__input",
          id: "search-bar",
          type: "text",
          value: searchValue,
          placeholder: "Search...",
          onChange: function onChange(e) {
            return setSearchValue(e.target.value);
          }
        }, void 0)
      }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: "search-form__search-bar__btn",
        type: "submit",
        disabled: !searchValue || isLoading
      }, void 0)]
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
      className: "search-form__radios"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
        className: "search-form__radios-label",
        htmlFor: "radio-popularity"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          className: "search-form__radios-input",
          id: "radio-popularity",
          type: "radio",
          value: _types__WEBPACK_IMPORTED_MODULE_7__.SortType.popularity,
          checked: sortBy === _types__WEBPACK_IMPORTED_MODULE_7__.SortType.popularity,
          onChange: function onChange() {
            return setSortBy(_types__WEBPACK_IMPORTED_MODULE_7__.SortType.popularity);
          }
        }, void 0), "popularity"]
      }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
        className: "search-form__radios-label",
        htmlFor: "radio-relevancy"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          className: "search-form__radios-input",
          id: "radio-relevancy",
          type: "radio",
          value: _types__WEBPACK_IMPORTED_MODULE_7__.SortType.relevancy,
          checked: sortBy === _types__WEBPACK_IMPORTED_MODULE_7__.SortType.relevancy,
          onClick: function onClick() {
            return setSortBy(_types__WEBPACK_IMPORTED_MODULE_7__.SortType.relevancy);
          }
        }, void 0), "relevancy"]
      }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
        className: "search-form__radios-label",
        htmlFor: "radio-published"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          className: "search-form__radios-input",
          id: "radio-published",
          type: "radio",
          value: _types__WEBPACK_IMPORTED_MODULE_7__.SortType.publishedAt,
          checked: sortBy === _types__WEBPACK_IMPORTED_MODULE_7__.SortType.publishedAt,
          onChange: function onChange() {
            return setSortBy(_types__WEBPACK_IMPORTED_MODULE_7__.SortType.publishedAt);
          }
        }, void 0), "published"]
      }), void 0)]
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
      className: "search-form__controls"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
        className: "search-form__controls__text"
      }, {
        children: ["page:", ' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          children: [pageQuantity && page, " / ", pageQuantity]
        }, void 0)]
      }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
        className: "search-form__controls__label-input",
        htmlFor: "page-input"
      }, {
        children: ["go to", ' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          className: "search-form__controls__input-page",
          id: "page-input",
          placeholder: "Enter number",
          onChange: function onChange(e) {
            if (+e.target.value > 0 && +e.target.value <= pageQuantity) {
              setPage(+e.target.value);
            }
          }
        }, void 0), ' ', "page"]
      }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
        className: "search-form__controls__label-select",
        htmlFor: "art-on-page-select"
      }, {
        children: ["Result on page", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
          className: "search-form__controls__select",
          id: "art-on-page-select",
          value: artOnPage,
          onChange: function onChange(e) {
            setArtOnPage(+e.target.value);
            setPage(1);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
            className: "search-form__controls__select-option"
          }, {
            children: "5"
          }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
            className: "search-form__controls__select-option"
          }, {
            children: "8"
          }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
            className: "search-form__controls__select-option"
          }, {
            children: "10"
          }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
            className: "search-form__controls__select-option"
          }, {
            children: "15"
          }), void 0)]
        }), void 0)]
      }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
        className: "search-form__controls__btns"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
          type: "button",
          className: "search-form__controls__btns-btn",
          onClick: function onClick() {
            return setPage(page - 1);
          },
          disabled: page === 1 || isLoading
        }, {
          children: "previous page"
        }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchForm);

/***/ }),

/***/ "./src/containers/App.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _components_SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/SearchForm/SearchForm.tsx");
/* harmony import */ var _components_Article_Article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Article/Article.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/containers/style.scss");









var defaultImage = './public/assets/images/default-image.jpg';

var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      articles = _useState2[0],
      setArticles = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    className: "main"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      className: "main__title"
    }, {
      children: "react. api"
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_6__.default, {
      setArticles: setArticles,
      setResults: setResults
    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      className: "main__articles-field"
    }, {
      children: !articles.length ? results ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Loading"
      }, void 0) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "No results"
      }, void 0) : _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(articles).call(articles, function (article) {
        var _context, _context2;

        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Article_Article__WEBPACK_IMPORTED_MODULE_7__.default, {
          author: article.author,
          title: article.title,
          content: article.content,
          publishedAt: article.publishedAt,
          source: article.source,
          urlToImage: article.urlToImage || defaultImage
        }, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = "".concat(article.author, "-")).call(_context2, article.title, "-")).call(_context, article.publishedAt));
      })
    }), void 0)]
  }), void 0);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/containers/App.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/style.scss");





react_dom__WEBPACK_IMPORTED_MODULE_2__.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_containers_App__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0), document.getElementById('root'));

/***/ }),

/***/ "./src/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortType": () => (/* binding */ SortType)
/* harmony export */ });
var SortType;

(function (SortType) {
  SortType["relevancy"] = "relevancy";
  SortType["popularity"] = "popularity";
  SortType["publishedAt"] = "publishedAt";
})(SortType || (SortType = {}));

/***/ }),

/***/ "./src/utils/pageHandler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/api/api.ts");


var pageHandler = function pageHandler(totalResult, articlesOnPage) {
  if (totalResult > _api_api__WEBPACK_IMPORTED_MODULE_0__.MAX_SERVER_RESULT) {
    return Math.ceil(_api_api__WEBPACK_IMPORTED_MODULE_0__.MAX_SERVER_RESULT / articlesOnPage);
  }

  return Math.ceil(totalResult / articlesOnPage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageHandler);

/***/ }),

/***/ "./src/components/Article/style.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/SearchForm/style.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/containers/style.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 			"main": 0,
/******/ 			"style": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style","vendors-node_modules_babel_runtime-corejs3_core-js-stable_instance_concat_js-node_modules_bab-5ef915"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.3d08a33306024939209b.js.map