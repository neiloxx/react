/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 870:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
;// CONCATENATED MODULE: ./src/containers/Header/Header.tsx




var Header = function Header() {
  return (0,jsx_runtime.jsx)("header", Object.assign({
    className: "header"
  }, {
    children: (0,jsx_runtime.jsx)("h1", Object.assign({
      className: "header__title"
    }, {
      children: "react components"
    }), void 0)
  }), void 0);
};

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./src/collections/cards.ts
var cards = [{
  name: 'czech republic',
  image: './public/assets/images/czech.jpg',
  url: '0#',
  cities: [{
    name: 'prague',
    url: '0#',
    watchers: 121
  }, {
    name: 'brno',
    url: '0#',
    watchers: 13
  }, {
    name: 'liberec',
    url: '0#',
    watchers: 19
  }, {
    name: 'ostrava',
    url: '0#',
    watchers: 58
  }, {
    name: 'plzen',
    url: '0#',
    watchers: 26
  }]
}, {
  name: 'germany',
  image: './public/assets/images/germany.jpg',
  url: '0#',
  cities: [{
    name: 'berlin',
    url: '0#',
    watchers: 387
  }, {
    name: 'munich',
    url: '0#',
    watchers: 132
  }, {
    name: 'frankfurt',
    url: '0#',
    watchers: 195
  }, {
    name: 'humburg',
    url: '0#',
    watchers: 58
  }, {
    name: 'stuttgart',
    url: '0#',
    watchers: 26
  }]
}, {
  name: 'france',
  image: './public/assets/images/france.jpg',
  url: '0#',
  cities: [{
    name: 'paris',
    url: '0#',
    watchers: 1213
  }, {
    name: 'marseille',
    url: '0#',
    watchers: 103
  }, {
    name: 'lyon',
    url: '0#',
    watchers: 193
  }, {
    name: 'marseille',
    url: '0#',
    watchers: 103
  }, {
    name: 'lyon',
    url: '0#',
    watchers: 193
  }]
}, {
  name: 'spain',
  image: './public/assets/images/spain.jpg',
  url: '0#',
  cities: [{
    name: 'Madrid',
    url: '0#',
    watchers: 121
  }, {
    name: 'Barcelona',
    url: '0#',
    watchers: 13
  }]
}, {
  name: 'italy',
  image: './public/assets/images/italy.jpg',
  url: '0#',
  cities: [{
    name: 'Rome',
    url: '0#',
    watchers: 121
  }, {
    name: 'Milan',
    url: '0#',
    watchers: 13
  }, {
    name: 'Naples',
    url: '0#',
    watchers: 13
  }]
}];
/* harmony default export */ const collections_cards = (cards);
;// CONCATENATED MODULE: ./src/components/Card/Card.tsx




var Card = function Card(_ref) {
  var name = _ref.name,
      image = _ref.image,
      url = _ref.url,
      cities = _ref.cities;
  return (0,jsx_runtime.jsxs)("div", Object.assign({
    className: "card"
  }, {
    children: [(0,jsx_runtime.jsxs)("figure", Object.assign({
      className: "card__image-container"
    }, {
      children: [(0,jsx_runtime.jsx)("img", {
        className: "card__image-container-image",
        src: image,
        alt: "".concat(name),
        height: 200
      }, void 0), (0,jsx_runtime.jsx)("figcaption", Object.assign({
        className: "card__image-container-description"
      }, {
        children: name
      }), void 0)]
    }), void 0), (0,jsx_runtime.jsx)("ul", Object.assign({
      className: "card__list"
    }, {
      children: cities.map(function (city) {
        return (0,jsx_runtime.jsx)("li", Object.assign({
          className: "card__list-item"
        }, {
          children: (0,jsx_runtime.jsxs)("a", Object.assign({
            href: city.url,
            className: "card__list-item-link"
          }, {
            children: [city.name, " \xA0", (0,jsx_runtime.jsx)("span", {
              className: "watch-icon"
            }, void 0), city.watchers]
          }), void 0)
        }), city.name);
      })
    }), void 0), (0,jsx_runtime.jsx)("a", Object.assign({
      href: url,
      className: "card__link"
    }, {
      children: "watch more"
    }), void 0)]
  }), void 0);
};

/* harmony default export */ const Card_Card = (Card);
;// CONCATENATED MODULE: ./src/components/Search-bar/SearchBar.tsx




var SearchBar = function SearchBar() {
  return (0,jsx_runtime.jsxs)("div", Object.assign({
    className: "search-bar"
  }, {
    children: [(0,jsx_runtime.jsx)("input", {
      className: "search-bar__input",
      id: "search-bar",
      type: "text",
      placeholder: "Search..."
    }, void 0), (0,jsx_runtime.jsx)("button", {
      className: "search-bar__btn",
      type: "button"
    }, void 0)]
  }), void 0);
};

/* harmony default export */ const Search_bar_SearchBar = (SearchBar);
;// CONCATENATED MODULE: ./src/containers/Main/Main.tsx







var Main = function Main() {
  return (0,jsx_runtime.jsxs)("main", Object.assign({
    className: "main"
  }, {
    children: [(0,jsx_runtime.jsx)("h2", Object.assign({
      className: "main__title"
    }, {
      children: "choose your travel"
    }), void 0), (0,jsx_runtime.jsx)(Search_bar_SearchBar, {}, void 0), (0,jsx_runtime.jsx)("div", Object.assign({
      className: "main__cards-field"
    }, {
      children: collections_cards.map(function (card) {
        return (0,jsx_runtime.jsx)(Card_Card, {
          name: card.name,
          image: card.image,
          url: card.url,
          cities: card.cities
        }, card.name);
      })
    }), void 0)]
  }), void 0);
};

/* harmony default export */ const Main_Main = (Main);
;// CONCATENATED MODULE: ./src/containers/Footer/Footer.tsx




var Footer = function Footer() {
  return (0,jsx_runtime.jsx)("footer", Object.assign({
    className: "footer"
  }, {
    children: (0,jsx_runtime.jsx)("a", Object.assign({
      className: "footer__link",
      href: "https://github.com/neiloxx"
    }, {
      children: "github"
    }), void 0)
  }), void 0);
};

/* harmony default export */ const Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./src/containers/App.tsx






var App = function App() {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Header_Header, {}, void 0), (0,jsx_runtime.jsx)(Main_Main, {}, void 0), (0,jsx_runtime.jsx)(Footer_Footer, {}, void 0)]
  }, void 0);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [296,589], () => (__webpack_require__(870)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.b9aa2ae0dfd454fed26d.js.map