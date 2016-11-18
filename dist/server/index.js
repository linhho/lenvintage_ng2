module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Applications/XAMPP/xamppfiles/htdocs/lenProject_ng2";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(39);
var Observable_1 = __webpack_require__(41);
__webpack_require__(43);
__webpack_require__(42);
__webpack_require__(46);
__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(47);
var cache_service_1 = __webpack_require__(10);
function hashCode(str) {
    var hash = 0;
    if (str.length === 0) {
        return hash;
    }
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
exports.hashCode = hashCode;
var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    /**
     * whatever domain/feature method name
     */
    ApiService.prototype.get = function (url, options) {
        return this._http.get(url, options)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            console.log('Error: ', err);
            return Observable_1.Observable.throw(err);
        });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
exports.ApiService = ApiService;
var ModelService = (function () {
    function ModelService(_api, _cache) {
        this._api = _api;
        this._cache = _cache;
    }
    /**
     * whatever domain/feature method name
     */
    ModelService.prototype.get = function (url) {
        var _this = this;
        // you want to return the cache if there is a response in it. This would cache the first response so if your API isn't idempotent you probably want to remove the item from the cache after you use it. LRU of 1
        var key = url;
        if (this._cache.has(key)) {
            return Observable_1.Observable.of(this._cache.get(key));
        }
        // you probably shouldn't .share() and you should write the correct logic
        return this._api.get(url)
            .do(function (json) {
            _this._cache.set(key, json);
        })
            .share();
    };
    ModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ApiService, (typeof (_a = typeof cache_service_1.CacheService !== 'undefined' && cache_service_1.CacheService) === 'function' && _a) || Object])
    ], ModelService);
    return ModelService;
    var _a;
}());
exports.ModelService = ModelService;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(12);
var router_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(5);
var api_service_1 = __webpack_require__(2);
var MODULES = [
    // Do NOT include UniversalModule, HttpModule, or JsonpModule here
    common_1.CommonModule,
    router_1.RouterModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule
];
var PIPES = [];
var COMPONENTS = [];
var PROVIDERS = [
    api_service_1.ModelService,
    api_service_1.ApiService
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            declarations: PIPES.concat(COMPONENTS),
            providers: PROVIDERS.slice(),
            exports: MODULES.concat(PIPES, COMPONENTS)
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(12);
var forms_1 = __webpack_require__(5);
var shared_module_1 = __webpack_require__(3);
var postcategory_component_1 = __webpack_require__(29);
var PostCategoryModule = (function () {
    function PostCategoryModule() {
    }
    PostCategoryModule = __decorate([
        core_1.NgModule({
            declarations: [postcategory_component_1.PostCategoryComponent],
            imports: [
                shared_module_1.SharedModule,
                common_1.CommonModule],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                postcategory_component_1.PostCategoryComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PostCategoryModule);
    return PostCategoryModule;
}());
exports.PostCategoryModule = PostCategoryModule;


/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("angular2-universal/node");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var api_service_1 = __webpack_require__(2);
var CategoryComponent = (function () {
    function CategoryComponent(_route, _router, model) {
        this._route = _route;
        this._router = _router;
        this.model = model;
        this.postNum = 5;
        this.universalInit();
    }
    CategoryComponent.prototype.scrollToMain = function () {
        var ele = document.getElementById("main");
        setTimeout(function () {
            var scrollStep = -window.scrollY / (ele.offsetTop / 15), scrollInterval = setInterval(function () {
                if (window.scrollY > ele.offsetTop) {
                    window.scrollBy(0, scrollStep);
                }
                else
                    clearInterval(scrollInterval);
            }, 15);
        }, 200);
    };
    CategoryComponent.prototype.universalInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.postSlug = params['slug'];
            _this.getData(_this.postSlug);
            _this.scrollToMain();
        });
    };
    CategoryComponent.prototype.getData = function (postSlug) {
        var _this = this;
        var num = this.postNum + 5;
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?filter[category_name]=' + postSlug + '&per_page=' + num).subscribe(function (data) {
            _this.posts = data;
            _this.postsLength = data.length;
        });
    };
    CategoryComponent.prototype.postLoadMore = function () {
        this.postNum += 5;
        this.getData(this.postSlug);
    };
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'category',
            template: __webpack_require__(35)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof api_service_1.ModelService !== 'undefined' && api_service_1.ModelService) === 'function' && _c) || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b, _c;
}());
exports.CategoryComponent = CategoryComponent;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var api_service_1 = __webpack_require__(2);
var router_1 = __webpack_require__(1);
var HomeComponent = (function () {
    function HomeComponent(_route, _router, model) {
        this._route = _route;
        this._router = _router;
        this.model = model;
        this.postNum = 5;
        this.scrollToMain();
        this.universalInit();
    }
    HomeComponent.prototype.scrollToMain = function () {
        var ele = document.getElementById("main");
        setTimeout(function () {
            var scrollStep = -window.scrollY / (ele.offsetTop / 15), scrollInterval = setInterval(function () {
                if (window.scrollY > 0) {
                    window.scrollBy(0, scrollStep);
                }
                else
                    clearInterval(scrollInterval);
            }, 15);
        }, 200);
    };
    HomeComponent.prototype.universalInit = function () {
        var _this = this;
        var num = this.postNum + 5;
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?per_page=' + num).subscribe(function (data) {
            _this.posts = data;
            _this.postsLength = data.length;
        });
    };
    HomeComponent.prototype.postLoadMore = function () {
        this.postNum += 5;
        this.universalInit();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: __webpack_require__(36)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof api_service_1.ModelService !== 'undefined' && api_service_1.ModelService) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
exports.HomeComponent = HomeComponent;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var api_service_1 = __webpack_require__(2);
var PostComponent = (function () {
    function PostComponent(_route, _router, model) {
        this._route = _route;
        this._router = _router;
        this.model = model;
        this.universalInit();
    }
    PostComponent.prototype.scrollToMain = function () {
        var ele = document.getElementById("main");
        setTimeout(function () {
            var scrollStep = -window.scrollY / (ele.offsetTop / 15), scrollInterval = setInterval(function () {
                if (window.scrollY > ele.offsetTop) {
                    window.scrollBy(0, scrollStep);
                }
                else
                    clearInterval(scrollInterval);
            }, 15);
        }, 200);
    };
    PostComponent.prototype.universalInit = function () {
        var _this = this;
        this.scrollToMain();
        this.sub = this._route.params.subscribe(function (params) {
            _this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/' + params['id']).subscribe(function (data) {
                _this.id = data.id;
                _this.image = data.better_featured_image.source_url;
                _this.title = data.title.rendered;
                _this.slug = data.slug;
                _this.date = data.date;
                _this.content = data.content.rendered;
                _this.scrollToMain();
            });
        });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            template: __webpack_require__(37)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof api_service_1.ModelService !== 'undefined' && api_service_1.ModelService) === 'function' && _c) || Object])
    ], PostComponent);
    return PostComponent;
    var _a, _b, _c;
}());
exports.PostComponent = PostComponent;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var CacheService = (function () {
    function CacheService(_cache) {
        this._cache = _cache;
    }
    /**
     * check if there is a value in our store
     */
    CacheService.prototype.has = function (key) {
        var _key = this.normalizeKey(key);
        return this._cache.has(_key);
    };
    /**
     * store our state
     */
    CacheService.prototype.set = function (key, value) {
        var _key = this.normalizeKey(key);
        this._cache.set(_key, value);
    };
    /**
     * get our cached value
     */
    CacheService.prototype.get = function (key) {
        var _key = this.normalizeKey(key);
        return this._cache.get(_key);
    };
    /**
     * release memory refs
     */
    CacheService.prototype.clear = function () {
        this._cache.clear();
    };
    /**
     * convert to json for the client
     */
    CacheService.prototype.dehydrate = function () {
        var json = {};
        this._cache.forEach(function (value, key) { return json[key] = value; });
        return json;
    };
    /**
     * convert server json into out initial state
     */
    CacheService.prototype.rehydrate = function (json) {
        var _this = this;
        Object.keys(json).forEach(function (key) {
            var _key = _this.normalizeKey(key);
            var value = json[_key];
            _this._cache.set(_key, value);
        });
    };
    /**
     * allow JSON.stringify to work
     */
    CacheService.prototype.toJSON = function () {
        return this.dehydrate();
    };
    /**
     * convert numbers into strings
     */
    CacheService.prototype.normalizeKey = function (key) {
        if (core_1.isDevMode() && this._isInvalidValue(key)) {
            throw new Error('Please provide a valid key to save in the CacheService');
        }
        return key + '';
    };
    CacheService.prototype._isInvalidValue = function (key) {
        return key === null ||
            key === undefined ||
            key === 0 ||
            key === '' ||
            typeof key === 'boolean' ||
            Number.isNaN(key);
    };
    CacheService.KEY = 'CacheService';
    CacheService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('LRU')), 
        __metadata('design:paramtypes', [Object])
    ], CacheService);
    return CacheService;
}());
exports.CacheService = CacheService;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var api_service_1 = __webpack_require__(2);
var TagComponent = (function () {
    function TagComponent(_route, _router, model) {
        this._route = _route;
        this._router = _router;
        this.model = model;
        this.postNum = 5;
        this.universalInit();
    }
    TagComponent.prototype.scrollToMain = function () {
        var ele = document.getElementById("main");
        setTimeout(function () {
            var scrollStep = -window.scrollY / (ele.offsetTop / 15), scrollInterval = setInterval(function () {
                if (window.scrollY > ele.offsetTop) {
                    window.scrollBy(0, scrollStep);
                }
                else
                    clearInterval(scrollInterval);
            }, 15);
        }, 200);
    };
    TagComponent.prototype.universalInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.tagSlug = params['slug'];
            _this.getData(_this.tagSlug);
            _this.scrollToMain();
        });
    };
    TagComponent.prototype.getData = function (tagSlug) {
        var _this = this;
        var num = this.postNum + 5;
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?filter[tag]=' + tagSlug + '&per_page=' + num).subscribe(function (data) {
            _this.posts = data;
            _this.postsLength = data.length;
        });
    };
    TagComponent.prototype.postLoadMore = function () {
        this.postNum += 5;
        this.getData(this.tagSlug);
    };
    TagComponent = __decorate([
        core_1.Component({
            selector: 'tag',
            template: __webpack_require__(38)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof api_service_1.ModelService !== 'undefined' && api_service_1.ModelService) === 'function' && _c) || Object])
    ], TagComponent);
    return TagComponent;
    var _a, _b, _c;
}());
exports.TagComponent = TagComponent;


/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Fix Material Support
var platform_browser_1 = __webpack_require__(40);
function universalMaterialSupports(eventName) { return Boolean(this.isCustomEvent(eventName)); }
platform_browser_1.__platform_browser_private__.HammerGesturesPlugin.prototype.supports = universalMaterialSupports;
// End Fix Material Support
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(5);
var node_1 = __webpack_require__(6); // for AoT we need to manually split universal packages
var shared_module_1 = __webpack_require__(3);
var home_module_1 = __webpack_require__(26);
var category_module_1 = __webpack_require__(24);
var app_component_1 = __webpack_require__(22);
var app_routing_module_1 = __webpack_require__(21);
var cache_service_1 = __webpack_require__(10);
// import * as LRU from 'modern-lru';
var post_module_1 = __webpack_require__(28);
var tag_module_1 = __webpack_require__(31);
function getLRU(lru) {
    // use LRU for node
    // return lru || new LRU(10);
    return lru || new Map();
}
exports.getLRU = getLRU;
var MainModule = (function () {
    function MainModule(cache) {
        var _this = this;
        this.cache = cache;
        /**
         * We need to use the arrow function here to bind the context as this is a gotcha
         * in Universal for now until it's fixed
         */
        this.universalDoDehydrate = function (universalCache) {
            universalCache[cache_service_1.CacheService.KEY] = JSON.stringify(_this.cache.dehydrate());
        };
        /**
         * Clear the cache after it's rendered
         */
        this.universalAfterDehydrate = function () {
            // comment out if LRU provided at platform level to be shared between each user
            _this.cache.clear();
        };
    }
    MainModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent],
            imports: [
                node_1.UniversalModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                home_module_1.HomeModule,
                category_module_1.CategoryModule,
                post_module_1.PostModule,
                tag_module_1.TagModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                { provide: 'isBrowser', useValue: node_1.isBrowser },
                { provide: 'isNode', useValue: node_1.isNode },
                {
                    provide: 'LRU',
                    useFactory: getLRU,
                    deps: [
                        [new core_1.Inject('LRU'), new core_1.Optional(), new core_1.SkipSelf()]
                    ]
                },
                cache_service_1.CacheService
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof cache_service_1.CacheService !== 'undefined' && cache_service_1.CacheService) === 'function' && _a) || Object])
    ], MainModule);
    return MainModule;
    var _a;
}());
exports.MainModule = MainModule;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Our API for demos only
var db_1 = __webpack_require__(33);
var cache_1 = __webpack_require__(32);
// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example
// Our API for demos only
function serverApi(req, res) {
    var key = USER_ID + '/data.json';
    var cache = cache_1.fakeDemoRedisCache.get(key);
    if (cache !== undefined) {
        console.log('/data.json Cache Hit');
        return res.json(cache);
    }
    console.log('/data.json Cache Miss');
    db_1.fakeDataBase.get()
        .then(function (data) {
        cache_1.fakeDemoRedisCache.set(key, data);
        return data;
    })
        .then(function (data) { return res.json(data); });
}
exports.serverApi = serverApi;


/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: '**', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var api_service_1 = __webpack_require__(2);
var AppComponent = (function () {
    function AppComponent(model) {
        this.model = model;
        this.categories = [];
        this.randomPosts = [];
        this.searchPosts = [];
        this.tags = [];
        // we need the data synchronously for the client to set the server response
        // we create another method so we have more control for testing
        this.universalInit();
    }
    AppComponent.prototype.universalInit = function () {
        //categories
        this.getCategory();
        //tags
        this.getTag();
        //random posts
        this.getPostRandom();
        //
        //search
        this.getSearchData();
    };
    //category data
    AppComponent.prototype.getCategory = function () {
        var _this = this;
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/categories').subscribe(function (data) {
            _this.categories = data;
        });
    };
    //
    //tags data
    AppComponent.prototype.getTag = function () {
        var _this = this;
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/tags').subscribe(function (data) {
            _this.tags = data;
        });
    };
    //
    //random posts data
    AppComponent.prototype.getPostRandom = function () {
        var _this = this;
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?filter[orderby]=rand&per_page=5').subscribe(function (data) {
            _this.randomPosts = data;
        });
    };
    //
    //search data
    AppComponent.prototype.getSearchData = function () {
        var _this = this;
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts?search=' + this.searchKey).subscribe(function (data) {
            _this.searchPosts = data;
            console.log(_this.searchKey);
        });
    };
    //
    // overLay menu and search
    AppComponent.prototype.openOverlay = function (element) {
        document.getElementById(element).style.width = "100%";
    };
    AppComponent.prototype.closeOverlay = function (element) {
        document.getElementById(element).style.width = "0%";
    };
    //
    // scroll to main
    AppComponent.prototype.scrollToUpMain = function () {
        var ele = document.getElementById("main");
        setTimeout(function () {
            var scrollStep = -window.scrollY / (ele.offsetTop / 15), scrollInterval = setInterval(function () {
                if (window.scrollY > ele.offsetTop) {
                    window.scrollBy(0, scrollStep);
                }
                else
                    clearInterval(scrollInterval);
            }, 15);
        }, 200);
    };
    AppComponent.prototype.scrollToDownMain = function () {
        var ele = document.getElementById("main");
        setTimeout(function () {
            var scrollStep = ele.offsetTop / (window.scrollY + 100 / 15), scrollInterval = setInterval(function () {
                if (window.scrollY < ele.offsetTop) {
                    window.scrollBy(0, scrollStep);
                }
                else
                    clearInterval(scrollInterval);
            }, 15);
        }, 200);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'len-app',
            template: __webpack_require__(34)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof api_service_1.ModelService !== 'undefined' && api_service_1.ModelService) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var category_component_1 = __webpack_require__(7);
var CategoryRoutingModule = (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'category/:slug', component: category_component_1.CategoryComponent }
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());
exports.CategoryRoutingModule = CategoryRoutingModule;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(3);
var category_component_1 = __webpack_require__(7);
var category_routing_module_1 = __webpack_require__(23);
var postcategory_module_1 = __webpack_require__(4);
var CategoryModule = (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                category_routing_module_1.CategoryRoutingModule,
                postcategory_module_1.PostCategoryModule
            ],
            declarations: [
                category_component_1.CategoryComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryModule);
    return CategoryModule;
}());
exports.CategoryModule = CategoryModule;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var home_component_1 = __webpack_require__(8);
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'home', component: home_component_1.HomeComponent }
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(3);
var home_component_1 = __webpack_require__(8);
var home_routing_module_1 = __webpack_require__(25);
var postcategory_module_1 = __webpack_require__(4);
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                home_routing_module_1.HomeRoutingModule,
                postcategory_module_1.PostCategoryModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var post_component_1 = __webpack_require__(9);
var PostRoutingModule = (function () {
    function PostRoutingModule() {
    }
    PostRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'post/:id/:slug', component: post_component_1.PostComponent }
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PostRoutingModule);
    return PostRoutingModule;
}());
exports.PostRoutingModule = PostRoutingModule;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(3);
var post_component_1 = __webpack_require__(9);
var post_routing_module_1 = __webpack_require__(27);
var PostModule = (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                post_routing_module_1.PostRoutingModule
            ],
            declarations: [
                post_component_1.PostComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PostModule);
    return PostModule;
}());
exports.PostModule = PostModule;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var api_service_1 = __webpack_require__(2);
var PostCategoryComponent = (function () {
    function PostCategoryComponent(model) {
        this.model = model;
    }
    PostCategoryComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/categories?post=' + this.postId).subscribe(function (data) {
            _this.slug = data[0].slug;
            _this.desc = data[0].description;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PostCategoryComponent.prototype, "postId", void 0);
    PostCategoryComponent = __decorate([
        core_1.Component({
            selector: 'post-category',
            template: "<a routerLink=\"/category/{{slug}}\"><i class=\"fa {{desc}}\" aria-hidden=\"true\"></i></a>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof api_service_1.ModelService !== 'undefined' && api_service_1.ModelService) === 'function' && _a) || Object])
    ], PostCategoryComponent);
    return PostCategoryComponent;
    var _a;
}());
exports.PostCategoryComponent = PostCategoryComponent;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var tag_component_1 = __webpack_require__(11);
var TagRoutingModule = (function () {
    function TagRoutingModule() {
    }
    TagRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'tag/:slug', component: tag_component_1.TagComponent }
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TagRoutingModule);
    return TagRoutingModule;
}());
exports.TagRoutingModule = TagRoutingModule;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(3);
var tag_component_1 = __webpack_require__(11);
var tag_routing_module_1 = __webpack_require__(30);
var postcategory_module_1 = __webpack_require__(4);
var TagModule = (function () {
    function TagModule() {
    }
    TagModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                tag_routing_module_1.TagRoutingModule,
                postcategory_module_1.PostCategoryModule
            ],
            declarations: [
                tag_component_1.TagComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TagModule);
    return TagModule;
}());
exports.TagModule = TagModule;


/***/ },
/* 32 */
/***/ function(module, exports) {

"use strict";
"use strict";
var _fakeLRUcount = 0;
exports.fakeDemoRedisCache = {
    _cache: {},
    get: function (key) {
        var cache = exports.fakeDemoRedisCache._cache[key];
        _fakeLRUcount++;
        if (_fakeLRUcount >= 10) {
            exports.fakeDemoRedisCache.clear();
            _fakeLRUcount = 0;
        }
        return cache;
    },
    set: function (key, data) { return exports.fakeDemoRedisCache._cache[key] = data; },
    clear: function () { return exports.fakeDemoRedisCache._cache = {}; }
};


/***/ },
/* 33 */
/***/ function(module, exports) {

"use strict";
"use strict";
// Our API for demos only
exports.fakeDataBase = {
    get: function () {
        var res = { data: 'This fake data came from the db on the server.' };
        return Promise.resolve(res);
    }
};


/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = "<header id=\"header\">\n    <nav>\n        <ul class=\"nav-menu\">\n            <li><a routerLink=\"/home\" routerLinkActive=\"is-active\" ><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a></li>\n            <li *ngFor=\"let routerCategory of categories\"><a routerLink=\"/category/{{ routerCategory.slug }}\" routerLinkActive=\"is-active\" ><i class=\"fa {{ routerCategory.description }}\" aria-hidden=\"true\"></i> {{ routerCategory.name }}</a></li>\n        </ul>\n        <ul class=\"menu-mobile\">\n            <a (click)=\"openOverlay('menuOverlay')\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n        </ul>\n        \n        <ul class=\"nav-search\">\n            <li><a href=\"http://goo.gl/v9Rso8\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"goo.gl/Md0yud\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"goo.gl/e7PosF\"><i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i></a></li>\n            <li><a class=\"search-trigger\" (click)=\"openOverlay('searchOverlay')\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n    </nav>\n</header>\n<!--menu overlay-->\n<div id=\"menuOverlay\" class=\"overlay\">\n  <a class=\"closebtn\" (click)=\"closeOverlay('menuOverlay')\">&times;</a>\n  <div class=\"overlay-content\">\n    <a routerLink=\"/home\" (click)=\"closeOverlay('menuOverlay')\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a>\n    <a *ngFor=\"let routerCategory of categories\" routerLink=\"/category/{{ routerCategory.slug }}\" (click)=\"closeOverlay('menuOverlay')\"><i class=\"fa {{ routerCategory.description }}\" aria-hidden=\"true\"></i> {{ routerCategory.name }}</a>\n  </div>\n</div>\n<!---->\n<!--search overlay-->\n<div id=\"searchOverlay\" class=\"overlay\">\n  <a class=\"closebtn\" (click)=\"closeOverlay('searchOverlay')\">&times;</a>\n  <div class=\"overlay-content\">\n    <input class=\"search-input\" type=\"text\" placeholder=\"Search...\" name=\"search\" [(ngModel)]=\"searchKey\" (keydown.enter)=\"getSearchData()\">\n    <div class=\"search-content\" >\n        <div *ngFor=\"let post of searchPosts\" class=\"seach-card\">\n            <a class=\"title\" [routerLink]=\"['/post', post.id, post.slug]\"  (click)=\"closeOverlay('searchOverlay')\">{{post.title.rendered}}</a>\n            <span class=\"desc\" [innerHTML]=\"post.excerpt.rendered\"></span>\n        </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"parallax\">\n    <div class=\"parallax-logo\">\n        <a routerLink=\"/home\"><img src=\"../assets/images/logo.png\" alt=\"logo\"></a>\n    </div>\n    <h1>Len Vintage</h1>\n    <div class=\"parallax-to-content\">\n        <a (click)=\"scrollToDownMain()\">\n            <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n</div>\n<main id=\"main\">\n        <div class=\"web-container\">\n            <div class=\"about\">\n<!--               About me-->\n                <img class=\"about-thumb\" src=\"assets/images/avatar.jpg\" alt=\"len\">\n                <h1>LEN vintage</h1>\n                <span>Kẹo thì ngọt. Len thì rối. Nước khó nắm bắt... Nhưng tất cả rồi sẽ ổn thôi </span>\n            </div>\n            <div class=\"web-wrapper\">\n<!--               Main content of website-->\n              <router-outlet></router-outlet>  \n            </div>\n            <div class=\"sidebar\">\n<!--               Sidebar components-->\n                <!--latest posts-->\n                <h1>Popular posts</h1>\n                \n                <div *ngFor=\"let post of randomPosts\" class=\"sidebar-card\">\n                    <div class=\"sidebar-card_thumb\">\n                        <a [routerLink]=\"['/post', post.id, post.slug]\"><img src=\"{{post.better_featured_image.media_details.sizes.thumbnail.source_url}}\" alt=\"{{post.title.rendered}}\"></a>\n                    </div>\n                    <div class=\"sidebar-card_info\">\n                        <div class=\"sidebar-card_title\">\n                            <a [routerLink]=\"['/post', post.id, post.slug]\">{{post.title.rendered}}</a>\n                        </div>\n                        <div class=\"sidebar-card_time\">\n                            {{post.date | date:\"dd/MM/yyyy\"}}\n                        </div>\n                    </div>\n                </div>\n                <!--Tag cloud-->\n                <h1>Tag Cloud</h1>\n                <div class=\"sidebar-tags\">\n                    <a *ngFor=\"let tag of tags\" routerLink=\"/tag/{{tag.slug}}\">{{tag.name}}</a>\n                </div>\n            \n            </div>\n        </div>\n    </main>\n    \n\n<footer>\n    <div class=\"copyright\">Develop by <a href=\"http://linhho.net\">Linh Ho</a></div>\n    <div class=\"back-to-top\"><a (click)=\"scrollToUpMain()\"><i class=\"fa fa-arrow-circle-up\" aria-hidden=\"true\"></i></a></div>\n</footer>"

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = "<div class=\"card\" *ngFor=\"let post of posts; let i = index\">\n    <template [ngIf]=\"i < postNum\">\n        <div class=\"thumb-card\">\n            <a [routerLink]=\"['/post', post.id, post.slug]\"><img src=\"{{post.better_featured_image.source_url}}\" alt=\"{{post.title.rendered}}\"></a>\n        </div>\n        <div class=\"info-card\">\n            <div class=\"info-card_left\"></div>\n            <div class=\"info-card_right\"></div>\n            <div class=\"category-card\">\n                <post-category [postId]=\"post.id\"></post-category>\n            </div>\n        </div>\n        <div class=\"content-card\">\n            <div class=\"title-card\">\n                <a [routerLink]=\"['/post', post.id, post.slug]\">{{post.title.rendered}}</a>\n            </div>\n            <div class=\"desc-card\">\n                <span [innerHTML]=\"post.excerpt.rendered\"></span>\n                <div class=\"continue-reading\">\n                    <a [routerLink]=\"['/post', post.id, post.slug]\">CONTINUE READING</a>\n                </div>\n                <div class=\"bottom-card\">\n                    <div class=\"time\">\n                        {{post.date | date:\"dd/MM/yyyy\"}} by <a [routerLink]=\"['/home']\">Len</a>\n                    </div>\n                    <div class=\"share-card\">\n                        <a href=\"#!\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                        <a href=\"#!\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                        <a href=\"#!\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </template>\n</div>\n\n<div class=\"load-more\" *ngIf=\"postNum <= postsLength\">\n    <a (click)=\"postLoadMore()\">Load more</a>\n</div>"

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = "<div class=\"card\" *ngFor=\"let post of posts; let i = index\">\n    <template [ngIf]=\"i < postNum\">\n        <div class=\"thumb-card\">\n            <a [routerLink]=\"['/post', post.id, post.slug]\"><img src=\"{{post.better_featured_image.source_url}}\" alt=\"{{post.title.rendered}}\"></a>\n        </div>\n        <div class=\"info-card\">\n            <div class=\"info-card_left\"></div>\n            <div class=\"info-card_right\"></div>\n            <div class=\"category-card\">\n                <post-category [postId]=\"post.id\"></post-category>\n            </div>\n        </div>\n        <div class=\"content-card\">\n            <div class=\"title-card\">\n                <a [routerLink]=\"['/post', post.id, post.slug]\">{{post.title.rendered}}</a>\n            </div>\n            <div class=\"desc-card\">\n                <span [innerHTML]=\"post.excerpt.rendered\"></span>\n                <div class=\"continue-reading\">\n                    <a [routerLink]=\"['/post', post.id, post.slug]\">CONTINUE READING</a>\n                </div>\n                <div class=\"bottom-card\">\n                    <div class=\"time\">\n                        {{post.date | date:\"dd/MM/yyyy\"}} by <a [routerLink]=\"['/home']\">Len</a>\n                    </div>\n                    <div class=\"share-card\">\n                        <a href=\"#!\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                        <a href=\"#!\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                        <a href=\"#!\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </template>\n</div>\n\n<div class=\"load-more\" *ngIf=\"postNum <= postsLength\">\n    <a (click)=\"postLoadMore()\">Load more</a>\n</div>"

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = "    <div class=\"card\">\n        <div class=\"thumb-card\">\n            <a [routerLink]=\"['/post', id, slug]\"><img [src]=\"image\" [alt]=\"title\"></a>\n        </div>\n        <div class=\"info-card\">\n            <div class=\"info-card_left\"></div>\n            <div class=\"info-card_right\"></div>\n            <div class=\"category-card\">\n                <a href=\"#\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i></a>\n            </div>\n        </div>\n        <div class=\"content-card\">\n            <div class=\"title-card\">\n                <a [routerLink]=\"['/post', id, slug]\">{{title}}</a>\n            </div>\n            <div class=\"postcontent-card\">\n                <span [innerHTML]=\"content\"></span>\n                <div class=\"bottom-card\">\n                    <div class=\"time\">\n                        {{date | date:\"dd/MM/yyyy\"}} by <a [routerLink]=\"['/home']\">Len</a>\n                    </div>\n                    <div class=\"share-card\">\n                        <a href=\"#!\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                        <a href=\"#!\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                        <a href=\"#!\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = "<h1 class=\"tag-cloud\">#{{tagSlug}}</h1>\n<div class=\"card\" *ngFor=\"let post of posts; let i = index\">\n    <template [ngIf]=\"i < postNum\">\n        <div class=\"thumb-card\">\n            <a [routerLink]=\"['/post', post.id, post.slug]\"><img src=\"{{post.better_featured_image.source_url}}\" alt=\"{{post.title.rendered}}\"></a>\n        </div>\n        <div class=\"info-card\">\n            <div class=\"info-card_left\"></div>\n            <div class=\"info-card_right\"></div>\n            <div class=\"category-card\">\n                <post-category [postId]=\"post.id\"></post-category>\n            </div>\n        </div>\n        <div class=\"content-card\">\n            <div class=\"title-card\">\n                <a [routerLink]=\"['/post', post.id, post.slug]\">{{post.title.rendered}}</a>\n            </div>\n            <div class=\"desc-card\">\n                <span [innerHTML]=\"post.excerpt.rendered\"></span>\n                <div class=\"continue-reading\">\n                    <a [routerLink]=\"['/post', post.id, post.slug]\">CONTINUE READING</a>\n                </div>\n                <div class=\"bottom-card\">\n                    <div class=\"time\">\n                        {{post.date | date:\"dd/MM/yyyy\"}} by <a [routerLink]=\"['/home']\">Len</a>\n                    </div>\n                    <div class=\"share-card\">\n                        <a href=\"#!\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                        <a href=\"#!\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                        <a href=\"#!\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </template>\n</div>\n\n<div class=\"load-more\" *ngIf=\"postNum <= postsLength\">\n    <a (click)=\"postLoadMore()\">Load more</a>\n</div>"

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/observable/of");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/observable/throw");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/share");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
__webpack_require__(16);
// Fix Universal Style
var node_1 = __webpack_require__(6);
function renderComponentFix(componentProto) {
    return new node_1.NodeDomRenderer(this, componentProto, this._animationDriver);
}
node_1.NodeDomRootRenderer.prototype.renderComponent = renderComponentFix;
// End Fix Universal Style
var path = __webpack_require__(20);
var express = __webpack_require__(19);
var bodyParser = __webpack_require__(17);
var cookieParser = __webpack_require__(18);
// Angular 2 Universal
var angular2_express_engine_1 = __webpack_require__(15);
// App
var app_node_module_1 = __webpack_require__(13);
// enable prod for faster renders
//enableProdMode();
var app = express();
var ROOT = path.join(path.resolve(__dirname, '..'));
// Express View
app.engine('.html', angular2_express_engine_1.createEngine({
    precompile: true,
    ngModule: app_node_module_1.MainModule,
    providers: []
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));
var api_1 = __webpack_require__(14);
// Our API for demos only
app.get('/data.json', api_1.serverApi);
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: 'http://localhost:3000'
    });
}
// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/', ngApp);
app.get('/category/*', ngApp);
app.get('/home', ngApp);
app.get('/home/*', ngApp);
app.get('/post/*/*', ngApp);
app.get('/tag/*', ngApp);
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
// Server
var server = app.listen(app.get('port'), function () {
    console.log("Listening on: http://localhost:" + server.address().port);
});

/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ }
/******/ ]);