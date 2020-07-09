/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/**
 * Return the width of the current scene.
 * Which is generally equal to the width of the "screen"/canvas but not always.
 * @param scene
 */
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
/**
 * Return the height of the current scene.
 * Which is generally equal to the height of the "screen"/canvas but not always.
 * @param scene
 */
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};
/**
 * Load a file in ajax and return its response text.
 * @param pFilePath Path to the desired file
 */
exports.loadFile = function (pFilePath) {
    var rawFile = new XMLHttpRequest();
    var result;
    rawFile.onerror = function () {
        console.log("Impossible to load file.");
    };
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                result = rawFile.responseText;
            }
        }
    };
    rawFile.open("GET", pFilePath, false);
    rawFile.send(null);
    return result;
};
/**
 * Returns a 2d-array of strings from a whole text file given as input.
 * Works best if the input text is only composed of single chars and '\n'.
 * Each final array element would be one character of the text input.
 * @param pFilePath
 */
exports.loadStrings = function (pFilePath) {
    var rawGrid = _this.loadFile(pFilePath);
    return rawGrid.split('\n').map(function (item) { return item.split(''); });
};
exports.COLORS = {
    customBlue: { string: '#4346f9', hex: 0x4346f9 },
    customGreen: { string: '#76ea64', hex: 0x76ea64 },
    vibrantGreen: { string: '#25f945', hex: 0x25f945 },
    customRed: { string: '#ea2d23', hex: 0xea2d23 },
    white: { string: '#ffffff', hex: 0xffffff }
};
// Note -- we can add multiple keys at once : 
// this.keys = this.input.keyboard.addKeys('ENTER,W,A,S,D')
// And then do : this.keys.ENTER.isDown...
exports.CONTROLKEYS = {
    PLAYER: {
        SET1: {
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            jump: Phaser.Input.Keyboard.KeyCodes.UP,
            shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT
        },
        SET2: {
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.Q,
            jump: Phaser.Input.Keyboard.KeyCodes.S,
            shoot: Phaser.Input.Keyboard.KeyCodes.SPACE
        }
    }
};
function parsedStorage() {
    if (sessionStorage.getItem('hoafight')) {
        var hf = sessionStorage.getItem('hoafight');
        var parsed = JSON.parse(hf);
        return parsed;
    }
    else {
        return null;
    }
}
exports.parsedStorage = parsedStorage;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: 'Hoa Fight',
    type: Phaser.AUTO,
    scale: {
        width: 1024,
        height: 640
    },
    input: {
        gamepad: true,
        keyboard: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false,
        },
    },
    dom: {
        createContainer: true
    },
    parent: 'game',
    scene: scenes_1.default
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/objects/bomb.ts":
/*!*****************************!*\
  !*** ./src/objects/bomb.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.scene.physics.world.enable(_this);
        _this.scene.add.existing(_this);
        _this.setBounce(1);
        _this.setVelocity(Phaser.Math.Between(-200, 200), 20);
        _this.setGravityY(1000);
        return _this;
    }
    Bomb.prototype.isOut = function () {
        if (this.x > helpers_1.getGameWidth(this.scene) ||
            this.y > helpers_1.getGameHeight(this.scene) ||
            this.x < 0 || this.y < 0) {
            return true;
        }
        return false;
    };
    Bomb.prototype.update = function () {
        if (this.isOut()) {
            this.destroy();
            console.log("Bomb destroyed cause out of world bounds");
        }
    };
    return Bomb;
}(Phaser.Physics.Arcade.Image));
exports.Bomb = Bomb;


/***/ }),

/***/ "./src/objects/character.ts":
/*!**********************************!*\
  !*** ./src/objects/character.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class represent a Game Character, not to be confused with the "Player".
 * A Player integrates a Character. A Character is just about holding data :
 * texture keys, metadata, voices etc. Nothing to be controlled with your
 * keyboard here.
 */
var Character = /** @class */ (function () {
    function Character(params) {
        this.id = params.id;
        this.details = params.details;
        this.stats = params.stats;
        this._textureKey = "character" + this.id;
        this._thumbnailKey = "character" + this.id + "Avatar";
        this._soundKey = "character" + this.id + "Sound";
    }
    Object.defineProperty(Character.prototype, "textureKey", {
        get: function () {
            return this._textureKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "thumbnailKey", {
        get: function () {
            return this._thumbnailKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "soundKey", {
        get: function () {
            return this._soundKey;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());
exports.Character = Character;


/***/ }),

/***/ "./src/objects/gui.ts":
/*!****************************!*\
  !*** ./src/objects/gui.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Gui = /** @class */ (function () {
    function Gui() {
    }
    /**
     * Create a stylized Button DOM Element with a click event listener attached
     * to it. The event listener callback starts a new scene using the scene key
     * passed in arguments and stops all sounds if stopSounds set to true.
     */
    Gui.mainBtn = function (params) {
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) - 100, 'button', Gui.mainBtnStyle, params.text).addListener('click').on('click', function () {
            params.scene.sound.add('clickSound').play();
            if (params.stopSounds) {
                params.scene.sound.stopAll();
            }
            params.scenePlugin.start(params.newSceneKey, params.sceneData);
        });
    };
    /**
     * Button that changes an image (img) texture with another (textures),
     * one by one. Like a slideshow.
     * @param img: a phaser game object image that act as a container in a way.
     * @param textures: the textures to append to img.
     */
    Gui.slideBtn = function (params) {
        var currentIndex = 0;
        params.scene.add.dom(params.x, params.y, 'button', Gui.secondaryBtnStyle, params.text).addListener('click').on('click', function () {
            params.scene.sound.add('clickSound').play();
            if (currentIndex < params.textureKeys.length - 1) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            params.img.setTexture(params.textureKeys[currentIndex]);
            if (params.callback !== undefined) {
                params.callback();
            }
        });
    };
    Gui.title = function (params) {
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, 24, 'h3', "color: #ffffff; \n\t\t\tfont-size: 40px; \n\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.sectionTitle = function (params) {
        params.scene.add.dom(params.x, params.y, 'h4', "color: #ffffff; \n\t\t\tfont-size: 30px; \n\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.customText = function (params) {
        params.scene.add.dom(params.x, params.y, 'p', "color: #ffffff; \n\t\t\tfont-size: 20px; \n\t\t\ttext-align: center; \n\t\t\tfont-family: Grobold, Arial, sans-serif", params.text);
    };
    Gui.mainBtnStyle = "width: 150px; \n\t\theight: 49px; \n\t\tfont-family: Grobold,Arial; \n\t\tcolor: #000000; \n\t\tfont-size: 25px; \n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff; \n\t\tborder: 2px solid #000";
    Gui.secondaryBtnStyle = "width: 100px; \n\t\theight: 33px; \n\t\tfont-family: Grobold, Arial, sans-serif; \n\t\tcolor: #000000; \n\t\tfont-size: 17px; \n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff; \n\t\tborder: 2px solid #000";
    return Gui;
}());
exports.Gui = Gui;


/***/ }),

/***/ "./src/objects/healthBar.ts":
/*!**********************************!*\
  !*** ./src/objects/healthBar.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var HealthBar = /** @class */ (function () {
    function HealthBar(params) {
        // Equivalent to this.bar = params.scene.add.graphics()
        this.bar = new Phaser.GameObjects.Graphics(params.scene);
        this.x = params.x;
        this.y = params.y;
        this.width = 100;
        this.height = 12;
        this.healthValue = 100;
        this.percentage = 100 / 100;
        this.draw();
        params.scene.add.existing(this.bar);
    }
    HealthBar.prototype.decrease = function (pAmount) {
        this.healthValue -= pAmount;
        if (this.healthValue < 0) {
            this.healthValue = 0;
        }
        this.draw();
        return (this.healthValue === 0);
    };
    HealthBar.prototype.draw = function () {
        this.bar.clear();
        // Background
        this.bar.fillStyle(helpers_1.COLORS.white.hex);
        this.bar.fillRect(this.x, this.y, this.width, this.height);
        if (this.healthValue > 30) {
            this.bar.fillStyle(helpers_1.COLORS.customBlue.hex);
        }
        else {
            this.bar.fillStyle(helpers_1.COLORS.customRed.hex);
        }
        var healthWidth = Math.floor(this.percentage * this.healthValue);
        // The actual health jauge you see decreasing
        this.bar.fillRect(this.x, this.y, healthWidth, this.height);
    };
    return HealthBar;
}());
exports.HealthBar = HealthBar;


/***/ }),

/***/ "./src/objects/hud.ts":
/*!****************************!*\
  !*** ./src/objects/hud.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Hud = /** @class */ (function () {
    function Hud(params) {
        this.textStyle = "\n\t\t\tfont-family: Grobold, Arial; \n\t\t\tmargin: 0; \n\t\t\tfont-size: 18px; \n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px\n\t\t";
        if (params.user.screenSide === 'left') {
            this.avatar = params.scene.add.image(0, 35, params.user.characterInstance.thumbnailKey).setOrigin(0, 0);
            this.text = params.scene.add.dom(0, 0, 'h5', this.textStyle, params.user.username + " | Ratio " + params.user.ratio + "%").setOrigin(0, 0);
        }
        else if (params.user.screenSide === 'right') {
            this.avatar = params.scene.add.image(helpers_1.getGameWidth(params.scene), 35, params.user.characterInstance.thumbnailKey).setOrigin(1, 0);
            this.text = params.scene.add.dom(helpers_1.getGameWidth(params.scene), 0, 'h5', this.textStyle, params.user.username + " | Ratio " + params.user.ratio + "%").setOrigin(1, 0);
        }
    }
    return Hud;
}());
exports.Hud = Hud;


/***/ }),

/***/ "./src/objects/level.ts":
/*!******************************!*\
  !*** ./src/objects/level.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tilemap_1 = __webpack_require__(/*! ./tilemap */ "./src/objects/tilemap.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/**
 * A Level consists of : a background + a music theme + a tilemap + a name +
 * a thumbnail.
 * It inits the different keys needed and creates/draw the background,
 * the tilemap (by instanciate it) and play the music theme.
 */
var Level = /** @class */ (function () {
    function Level(params) {
        this.id = params.id;
        this._name = params.name;
        this.backgroundKey = "level" + this.id + "Background";
        this.musicKey = "level" + this.id + "Theme";
        this._thumbnailKey = "level" + this.id + "Thumbnail";
    }
    Object.defineProperty(Level.prototype, "tilemap", {
        get: function () {
            return this._tilemap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "thumbnailKey", {
        get: function () {
            return this._thumbnailKey;
        },
        enumerable: true,
        configurable: true
    });
    Level.prototype.create = function (scene) {
        this.scene = scene;
        this.scene.add.image(helpers_1.getGameWidth(this.scene) / 2, helpers_1.getGameHeight(this.scene) / 2, this.backgroundKey);
        this._tilemap = new tilemap_1.Tilemap({
            scene: this.scene,
            id: this.id
        });
        this.scene.sound.add(this.musicKey).play();
    };
    return Level;
}());
exports.Level = Level;


/***/ }),

/***/ "./src/objects/player.ts":
/*!*******************************!*\
  !*** ./src/objects/player.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var projectile_1 = __webpack_require__(/*! ./projectile */ "./src/objects/projectile.ts");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.STATES = {
            ALIVE: 'ALIVE',
            HURT: 'HURT',
            DIE: 'DIE'
        };
        _this.scene.add.existing(_this);
        _this.initPhysics();
        _this.applyPhysics();
        _this.initSounds();
        _this.initVitals();
        _this.initHealthBar(params.healthBar);
        _this.initShooting();
        _this.initControls(params.controlKeys);
        // Restrain the boundingBox
        _this.setSize(20, 60);
        _this.setState(_this.STATES.ALIVE);
        return _this;
    }
    Object.defineProperty(Player.prototype, "projectiles", {
        get: function () {
            return this._projectiles;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.isDead = function () {
        return this.health <= 0;
    };
    Player.prototype.hurt = function () {
        if (this.bulletProof === false) {
            if (this.health > 0) {
                this.health -= 20;
                this.healthBar.decrease(20);
                this.setState(this.STATES.HURT);
            }
        }
    };
    Player.prototype.makeBulletProof = function () {
        if (this.bulletProof === false)
            this.bulletProof = true;
    };
    Player.prototype.initSounds = function () {
        this.jumpSound = this.scene.sound.add('jumpSound');
        this.shootSound = this.scene.sound.add('shootSound');
    };
    Player.prototype.initVitals = function () {
        this.health = 100;
        this.bulletProof = false;
    };
    Player.prototype.initPhysics = function () {
        this.gravityY = 1000;
        this.jumpVelocity = -600;
        this.vx = 150;
        this.bounce = 0.5;
    };
    Player.prototype.applyPhysics = function () {
        this.scene.physics.world.enable(this);
        this.setGravityY(this.gravityY);
        this.setBounce(this.bounce);
        this.setCollideWorldBounds(true);
    };
    Player.prototype.initControls = function (pKeys) {
        this.jumpKey = this.scene.input.keyboard.addKey(pKeys['jump']);
        this.rightKey = this.scene.input.keyboard.addKey(pKeys['right']);
        this.leftKey = this.scene.input.keyboard.addKey(pKeys['left']);
        this.shootKey = this.scene.input.keyboard.addKey(pKeys['shoot']);
    };
    Player.prototype.initHealthBar = function (pHealthBar) {
        this.healthBar = pHealthBar;
    };
    Player.prototype.initShooting = function () {
        this.lastShoot = 0;
        this._projectiles = this.scene.add.group({
            runChildUpdate: true
        });
    };
    Player.prototype.shoot = function () {
        if (this.scene.time.now > this.lastShoot) {
            this._projectiles.add(new projectile_1.Projectile({
                scene: this.scene,
                // Changing bullet starting point if sprite is flipped on X axis
                x: (!this.flipX) ? this.x + 20 : this.x - 20,
                y: this.y + 11,
                // Bullet direction (left/right) based on last pressed key
                // (i.e direction of the player). Default: goes right.
                direction: (this.lastPressedKey === this.leftKey) ? -1 : 1,
                textureKey: 'projectile'
            }));
            this.lastShoot = this.scene.time.now + 500;
            // Playing sound here ensures us it is played only once every shoot
            this.shootSound.play();
        }
    };
    /**
     * Flipping the sprite on its X axis, depending on which direction you go.
     */
    Player.prototype.handleSpriteFlipping = function () {
        if (this.lastPressedKey === this.leftKey) {
            // Changed sprite orientation: facing left
            this.flipX = true;
        }
        else if (this.lastPressedKey === this.rightKey) {
            // Original sprite orientation: facing right
            this.flipX = false;
        }
        else {
            // Original sprite orientation: facing right
            this.flipX = false;
        }
    };
    Player.prototype.handleJumping = function () {
        if (this.jumpKey.isDown) {
            if (this.body.blocked.down || this.body.touching.down) {
                this.setVelocityY(this.jumpVelocity);
                this.jumpSound.play();
            }
        }
    };
    /**
     * Handle idling (doing nothing) AND idling-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots.
     */
    Player.prototype.handleIdling = function () {
        this.setVelocityX(0);
        this.anims.play(this.texture.key + "IDLE", true);
        // Idling-Shooting
        if (this.shootKey.isDown) {
            this.anims.play(this.texture.key + "IDLE_SHOOT", true);
            this.shoot();
        }
    };
    /**
     * Handle walking AND walking-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots and remembering last pressed key.
     */
    Player.prototype.handleWalking = function () {
        this.anims.play(this.texture.key + "WALK", true);
        // Walking : going right
        if (this.rightKey.isDown) {
            this.setVelocityX(this.vx);
            this.lastPressedKey = this.rightKey;
        }
        // Walking : going left
        if (this.leftKey.isDown) {
            this.setVelocityX(-this.vx);
            this.lastPressedKey = this.leftKey;
        }
        // Walking-Shooting
        if (this.shootKey.isDown) {
            this.anims.play(this.texture.key + "WALK_SHOOT", true);
            this.shoot();
        }
    };
    Player.prototype.update = function () {
        var _this = this;
        if (this.isDead())
            this.state = this.STATES.DIE;
        if (this.state === this.STATES.ALIVE) {
            // This is detached from the other block because you can do anything
            // while jumping: walk/walk-shoot, idle/idle-shoot. So it isn't 
            // dependant of whether you're pressing left or right or whatever.
            this.handleJumping();
            if (this.rightKey.isDown || this.leftKey.isDown) {
                this.handleWalking();
            }
            else {
                this.handleIdling();
            }
            this.handleSpriteFlipping();
        }
        else if (this.state === this.STATES.HURT) {
            this.anims.play(this.texture.key + "HIT", true);
            this.setVelocityX(0);
            // This leads to hurt anim bug 
            this.scene.time.addEvent({
                delay: 1000,
                loop: false,
                callback: function () {
                    _this.setState(_this.STATES.ALIVE);
                }
            });
        }
        else if (this.state === this.STATES.DIE) {
            // We don't reset state to ALIVE cause it's end of the game
            this.anims.play(this.texture.key + "DIE", true);
            this.setVelocityX(0);
        }
        else {
            throw new Error("Unknown Player State");
        }
    };
    return Player;
}(Phaser.Physics.Arcade.Sprite));
exports.Player = Player;


/***/ }),

/***/ "./src/objects/projectile.ts":
/*!***********************************!*\
  !*** ./src/objects/projectile.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Projectile = /** @class */ (function (_super) {
    __extends(Projectile, _super);
    function Projectile(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.scene.physics.world.enable(_this);
        _this.scene.add.existing(_this);
        _this.vx = 700;
        _this.direction = params.direction;
        _this.initAnimations();
        _this.setVelocityX(_this.direction * _this.vx);
        return _this;
    }
    Projectile.prototype.isOut = function () {
        if (this.x > helpers_1.getGameWidth(this.scene) || this.y > helpers_1.getGameHeight(this.scene) || this.x < 0 || this.y < 0) {
            return true;
        }
        return false;
    };
    Projectile.prototype.initAnimations = function () {
        this.scene.anims.create({
            key: 'collisionEffect1',
            frames: this.scene.anims.generateFrameNumbers('collisionEffect1', {
                start: 0,
                end: 1
            }),
            repeat: 1
        });
    };
    Projectile.prototype.update = function () {
        if (this.isOut()) {
            this.destroy();
            console.log('Projectile destroyed cause out of world bounds');
        }
    };
    return Projectile;
}(Phaser.Physics.Arcade.Sprite));
exports.Projectile = Projectile;


/***/ }),

/***/ "./src/objects/tilemap.ts":
/*!********************************!*\
  !*** ./src/objects/tilemap.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tilemap = /** @class */ (function () {
    function Tilemap(params) {
        this.map = params.scene.make.tilemap({
            key: "level" + params.id
        });
        this.tileset = this.map.addTilesetImage("level" + params.id + "-tilesheet", "level" + params.id + "Tilesheet");
        this._mainLayer = this.map.createStaticLayer('mainLayer', this.tileset, 0, 0);
        this._mainLayer.setCollisionByProperty({
            collides: true
        });
        this.subLayer = this.map.createStaticLayer('subLayer', this.tileset, 0, 0);
    }
    Object.defineProperty(Tilemap.prototype, "mainLayer", {
        /**
         * Getter for the layer that collides: 'collides' set to true in Tiled.
         */
        get: function () {
            return this._mainLayer;
        },
        enumerable: true,
        configurable: true
    });
    return Tilemap;
}());
exports.Tilemap = Tilemap;


/***/ }),

/***/ "./src/objects/user.ts":
/*!*****************************!*\
  !*** ./src/objects/user.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(params) {
        this._id = params.id;
        this._username = params.username;
        this._ratio = params.ratio;
        this._screenSide = params.screenSide;
    }
    Object.defineProperty(User.prototype, "id", {
        /**
         * User's id from DB.
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        /**
         * User's username from DB.
         */
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "ratio", {
        /**
         * User's ratio from DB.
         */
        get: function () {
            return this._ratio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "screenSide", {
        get: function () {
            return this._screenSide;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "characterInstance", {
        /**
         * Character the user has chosen in the Menu.
         */
        get: function () {
            return this._characterInstance;
        },
        set: function (v) {
            this._characterInstance = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "playerInstance", {
        /**
         * Player created in Game Scene based on User's character choice.
         */
        get: function () {
            return this._playerInstance;
        },
        set: function (v) {
            this._playerInstance = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "levelInstance", {
        /**
         * Level the user has chosen in the Menu, makes more sense when playing solo.
         */
        get: function () {
            return this._levelInstance;
        },
        set: function (v) {
            this._levelInstance = v;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var level_1 = __webpack_require__(/*! ../objects/level */ "./src/objects/level.ts");
var user_1 = __webpack_require__(/*! ../objects/user */ "./src/objects/user.ts");
var character_1 = __webpack_require__(/*! ../objects/character */ "./src/objects/character.ts");
var gui_1 = __webpack_require__(/*! ../objects/gui */ "./src/objects/gui.ts");
var helpers_2 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot'
};
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.init = function () {
        var _a, _b, _c, _d, _e, _f;
        this.levels = [
            new level_1.Level({
                id: 1,
                name: "Cimetiere"
            }),
            new level_1.Level({
                id: 2,
                name: "Prairie"
            })
        ];
        this.users = [
            new user_1.User({
                id: ((_a = helpers_2.parsedStorage()) === null || _a === void 0 ? void 0 : _a.mainUser.id) || 0,
                username: ((_b = helpers_2.parsedStorage()) === null || _b === void 0 ? void 0 : _b.mainUser.username) || 'Foo1',
                ratio: ((_c = helpers_2.parsedStorage()) === null || _c === void 0 ? void 0 : _c.mainUser.ratio) || 98,
                screenSide: 'left'
            }),
            new user_1.User({
                id: ((_d = helpers_2.parsedStorage()) === null || _d === void 0 ? void 0 : _d.secondaryUser.id) || 0,
                username: ((_e = helpers_2.parsedStorage()) === null || _e === void 0 ? void 0 : _e.secondaryUser.username) || 'Boo2',
                ratio: ((_f = helpers_2.parsedStorage()) === null || _f === void 0 ? void 0 : _f.secondaryUser.ratio) || 89,
                screenSide: 'right'
            })
        ];
        this.characters = [
            new character_1.Character({
                id: 1,
                details: { nickname: "Stevie" },
                stats: {}
            }),
            new character_1.Character({
                id: 2,
                details: { nickname: "Caroline" },
                stats: {}
            }),
            new character_1.Character({
                id: 3,
                details: { nickname: "Kristof" },
                stats: {}
            }),
            new character_1.Character({
                id: 4,
                details: { nickname: "Kristy" },
                stats: {}
            }),
            new character_1.Character({
                id: 5,
                details: { nickname: "Oron" },
                stats: {}
            }),
            new character_1.Character({
                id: 6,
                details: { nickname: "Alexa" },
                stats: {}
            })
        ];
        // Using the scene Data Manager to store data on a scene level.
        this.data.set('users', this.users);
        this.data.set('characters', this.characters);
        this.data.set('levels', this.levels);
    };
    BootScene.prototype.preload = function () {
        this.load.pack("preload", "assets/pack.json", "preload");
        // Preload all characters atlases : a json file that acts as
        // as a "map"/"link" to a png spritesheet.
        // Used for drawing PLayer texture and set animations.
        // Still outside pack.json for now cause I don't know how.
        for (var n = 1; n <= 6; n++) {
            this.load.atlas("character" + n, "assets/images/characters/character" + n + "/character" + n + "-spritesheet.png", "assets/images/characters/character" + n + "/character" + n + "-atlas.json");
        }
    };
    BootScene.prototype.create = function () {
        this.musicTheme = this.sound.add('menuTheme');
        this.musicTheme.play();
        this.background = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'backgroundForGUIScenes');
        this.logo = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2.5, 'mainLogo');
        gui_1.Gui.customText({
            scene: this,
            x: this.logo.x,
            y: this.logo.y + 84,
            text: "Welcome to the fight !"
        });
        gui_1.Gui.mainBtn({
            scene: this,
            text: "Menu",
            stopSounds: false,
            scenePlugin: this.scene,
            newSceneKey: 'Menu',
            // Passing this scene data to the destination scene.
            sceneData: this.data.getAll()
        });
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var bomb_1 = __webpack_require__(/*! ../objects/bomb */ "./src/objects/bomb.ts");
var hud_1 = __webpack_require__(/*! ../objects/hud */ "./src/objects/hud.ts");
var player_1 = __webpack_require__(/*! ../objects/player */ "./src/objects/player.ts");
var healthBar_1 = __webpack_require__(/*! ../objects/healthBar */ "./src/objects/healthBar.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game'
};
/**
 * The Game Scene is where all the actions takes place.
 * Actors such as Player, Bombs and Bomb are instanciated.
 * Static elements such as HUDs and HealthBars (via Player) are instanciated.
 * Level is created (not instanciated), which basically means that Tilemap is
 * drawn. Colliders between actors are handled. Player animations are created.
 * It sets a Scene Winner when one of the users PLAYER INSTANCES is dead and
 * then start the new scene (Gameover Scene).
 * It takes the data object from the Menu Scene (composed of an array of users),
 * available here in the init() et create() callbacks.
 */
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameScene.prototype.setColliders = function () {
        var _this = this;
        this.physics.add.collider(this.bombs, this.tilemap.mainLayer);
        this.physics.add.collider(this.bombs, this.player1, function () {
            _this.player1.hurt();
            _this.bombs.getFirstAlive().destroy();
        });
        this.physics.add.collider(this.bombs, this.player2, function () {
            _this.player2.hurt();
            _this.bombs.getFirstAlive().destroy();
        });
        this.physics.add.collider(this.player1, this.player2);
        this.physics.add.collider([this.player1, this.player2], this.tilemap.mainLayer);
        this.physics.add.collider(this.player1, this.player2.projectiles, function () {
            _this.player1.hurt();
            _this.player2.projectiles.getFirstAlive().destroy();
        });
        this.physics.add.collider(this.player2, this.player1.projectiles, function () {
            _this.player2.hurt();
            _this.player1.projectiles.getFirstAlive().destroy();
        });
    };
    GameScene.prototype.init = function (menuSceneData) {
        if (menuSceneData.users !== undefined) {
            this.data.set('users', menuSceneData.users);
        }
        // Animations creation
        for (var _i = 0, _a = this.data.get('users'); _i < _a.length; _i++) {
            var user = _a[_i];
            var tk = user.characterInstance.textureKey;
            this.anims.create({
                key: tk + "WALK",
                frames: this.anims.generateFrameNames(tk, {
                    prefix: 'walk-side-armed',
                    start: 1,
                    end: 4,
                    zeroPad: 2
                }),
                frameRate: 10,
                repeat: -1
            });
            this.anims.create({
                key: tk + "WALK_SHOOT",
                frames: this.anims.generateFrameNames(tk, {
                    prefix: 'walk-side-shoot',
                    start: 1,
                    end: 4,
                    zeroPad: 2
                }),
                repeat: -1
            });
            this.anims.create({
                key: tk + "IDLE",
                frames: this.anims.generateFrameNames(tk, {
                    prefix: 'idle-front-armed',
                    start: 1,
                    end: 4,
                    zeroPad: 2
                }),
                frameRate: 10,
                repeat: -1
            });
            this.anims.create({
                key: tk + "IDLE_SHOOT",
                frames: this.anims.generateFrameNames(tk, {
                    prefix: 'idle-front-shoot',
                    start: 1,
                    end: 1,
                    zeroPad: 2
                }),
                repeat: -1
            });
            this.anims.create({
                key: tk + "HIT",
                frames: this.anims.generateFrameNames(tk, {
                    prefix: 'hit',
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: 1
            });
            this.anims.create({
                key: tk + "DIE",
                frames: this.anims.generateFrameNames(tk, {
                    prefix: 'dead',
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: 1
            });
        }
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.data.values.users[0].levelInstance.create(this);
        this.tilemap = this.data.values.users[0].levelInstance.tilemap;
        this.bombs = this.add.group({
            runChildUpdate: true
        });
        this.bombCreationEvent = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: function () {
                _this.bombs.add(new bomb_1.Bomb({
                    scene: _this,
                    x: Phaser.Math.Between(50, helpers_1.getGameWidth(_this) - 50),
                    y: 0,
                    textureKey: 'bomb'
                }));
            },
            callbackScope: this
        });
        this.player1 = new player_1.Player({
            scene: this,
            x: 300,
            y: 300,
            textureKey: this.data.values.users[0].characterInstance.textureKey,
            controlKeys: {
                right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
                left: Phaser.Input.Keyboard.KeyCodes.LEFT,
                jump: Phaser.Input.Keyboard.KeyCodes.UP,
                shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT
            },
            healthBar: new healthBar_1.HealthBar({
                scene: this,
                x: 60,
                y: 40
            })
        });
        this.player2 = new player_1.Player({
            scene: this,
            x: 900,
            y: 300,
            textureKey: this.data.values.users[1].characterInstance.textureKey,
            controlKeys: {
                right: Phaser.Input.Keyboard.KeyCodes.D,
                left: Phaser.Input.Keyboard.KeyCodes.Q,
                jump: Phaser.Input.Keyboard.KeyCodes.S,
                shoot: Phaser.Input.Keyboard.KeyCodes.SPACE
            },
            healthBar: new healthBar_1.HealthBar({
                scene: this,
                x: helpers_1.getGameWidth(this) - 162,
                y: 40
            })
        });
        this.hud1 = new hud_1.Hud({
            scene: this,
            user: this.data.values.users[0]
        });
        this.hud2 = new hud_1.Hud({
            scene: this,
            user: this.data.values.users[1]
        });
        this.setColliders();
        // This is where we have user<-->player concordance
        this.data.values.users[0].playerInstance = this.player1;
        this.data.values.users[1].playerInstance = this.player2;
        this.data.set('users', this.data.values.users);
    };
    GameScene.prototype.update = function () {
        var _this = this;
        this.player1.update();
        this.player2.update();
        // Winner handling
        // Enter winner handling mode if one of the player is dead
        if (this.player1.isDead() || this.player2.isDead()) {
            // Make players invicible while waiting for the next scene to start
            // This way we don't have to pause physics but the winner is not
            // killed by the bombs that are still falling.
            this.player1.makeBulletProof();
            this.player2.makeBulletProof();
            // Deciding which one is the winner (the one not dead)
            if (this.player1.isDead() && !this.player2.isDead()) {
                // Winners are users not players
                this.winner = this.data.values.users[1];
            }
            else if (!this.player1.isDead() && this.player2.isDead()) {
                this.winner = this.data.values.users[0];
            }
            else if (this.player2.isDead() && this.player2.isDead()) {
                // Nulling the winner if there's no winner at all
                // Typically this shouldn't ever happen but who knows...
                // Check in next scene if winner is truthy, printing alt text
                // if not (like if null).
                this.winner = null;
            }
            this.data.set('winner', this.winner);
            // 3 seconds delay before launching the next scene
            this.newSceneTimedEvent = this.time.addEvent({
                delay: 3000,
                callback: function () {
                    //this.sound.stopAll();
                    _this.scene.start('Gameover', _this.data.getAll());
                }
            });
        }
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/gameover-scene.ts":
/*!**************************************!*\
  !*** ./src/scenes/gameover-scene.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var gui_1 = __webpack_require__(/*! ../objects/gui */ "./src/objects/gui.ts");
var helpers_2 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Gameover'
};
var GameoverScene = /** @class */ (function (_super) {
    __extends(GameoverScene, _super);
    function GameoverScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameoverScene.prototype.handlingStorage = function () {
        if (helpers_2.parsedStorage()) {
            var parsedUsers = helpers_2.parsedStorage();
            if (this.data.values.winner.id === parsedUsers.mainUser.id) {
                parsedUsers.mainUser.sessionWins += 1;
            }
            else if (this.data.values.winner.id === parsedUsers.secondaryUser.id) {
                parsedUsers.secondaryUser.sessionWins += 1;
            }
            sessionStorage.setItem('hoafight', JSON.stringify(parsedUsers));
        }
    };
    GameoverScene.prototype.init = function (gameSceneData) {
        if (gameSceneData.winner) {
            this.data.set('winner', gameSceneData.winner);
            this.mainMessage = this.data.values.winner.username + " remporte la partie !";
            this.handlingStorage();
        }
        else {
            this.mainMessage = "Oups on dirait qu'il n'y ai pas de gagnant !";
        }
    };
    GameoverScene.prototype.create = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'backgroundForGUIScenes');
        gui_1.Gui.title({ scene: this, text: "Fin De Partie" });
        gui_1.Gui.customText({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 200,
            text: this.mainMessage
        });
        gui_1.Gui.mainBtn({
            scene: this,
            text: "REJOUER",
            stopSounds: false,
            scenePlugin: this.scene,
            newSceneKey: 'Menu'
        });
    };
    return GameoverScene;
}(Phaser.Scene));
exports.GameoverScene = GameoverScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var menu_scene_1 = __webpack_require__(/*! ./menu-scene */ "./src/scenes/menu-scene.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
var gameover_scene_1 = __webpack_require__(/*! ./gameover-scene */ "./src/scenes/gameover-scene.ts");
exports.default = [
    boot_scene_1.BootScene,
    menu_scene_1.MenuScene,
    game_scene_1.GameScene,
    gameover_scene_1.GameoverScene
];


/***/ }),

/***/ "./src/scenes/menu-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/menu-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var gui_1 = __webpack_require__(/*! ../objects/gui */ "./src/objects/gui.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Menu'
};
var MenuScene = /** @class */ (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MenuScene.prototype.drawBackground = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'backgroundForGUIScenes');
    };
    MenuScene.prototype.initThumbnails = function (data) {
        // Init the level thumbnail on the 1st level thumbnail (index 0)
        this.levelThumb = this.add.image(200, 300, data.values.levels[0].thumbnailKey);
        // Init the 2 characters thumbnails with the 1st character thumbnail.
        this.characterThumbs = [
            this.add.image(650, 300, data.values.characters[0].thumbnailKey),
            this.add.image(850, 300, data.values.characters[0].thumbnailKey)
        ];
    };
    MenuScene.prototype.printTitles = function () {
        gui_1.Gui.title({ scene: this, text: "MENU" });
        gui_1.Gui.sectionTitle({ scene: this, x: 200, y: 130, text: "Terrain" });
        gui_1.Gui.sectionTitle({ scene: this, x: 750, y: 130, text: "Personnages" });
    };
    MenuScene.prototype.printTexts = function () {
        gui_1.Gui.customText({ scene: this, x: 650, y: 210, text: "Joueur 1" });
        gui_1.Gui.customText({ scene: this, x: 850, y: 210, text: "Joueur 2" });
    };
    MenuScene.prototype.initUsersChoices = function (data) {
        for (var _i = 0, _a = data.values.users; _i < _a.length; _i++) {
            var user = _a[_i];
            user.levelInstance = data.values.levels[0];
            user.characterInstance = data.values.characters[0];
        }
    };
    MenuScene.prototype.init = function (bootSceneData) {
        if (bootSceneData.users !== undefined &&
            bootSceneData.characters !== undefined &&
            bootSceneData.levels !== undefined) {
            this.data.set('users', bootSceneData.users);
            this.data.set('characters', bootSceneData.characters);
            this.data.set('levels', bootSceneData.levels);
        }
        else {
            throw new Error("Error getting users, characters and levels data from Boot Scene");
        }
        this.initUsersChoices(this.data);
    };
    /**
     * Scene's create callback.
     * @param data Data object from the Boot Scene that belongs to the Data Manager.
     * Here this data will be modified: characters (elements of data.characters)
     * and levels (elements of data.levels) instances will be attached to the
     * users instances (data.users).
     */
    MenuScene.prototype.create = function () {
        var _this = this;
        this.drawBackground();
        this.initThumbnails(this.data);
        this.printTitles();
        this.printTexts();
        // Slide button n°1. This is where User 1 & 2 choose their level. 
        // Modifies the level thumbnail texture (with texture keys) on click.
        gui_1.Gui.slideBtn({
            scene: this,
            x: 200,
            y: 450,
            text: "Suivant",
            img: this.levelThumb,
            textureKeys: this.data.values.levels.map(function (level) { return level.thumbnailKey; }),
            callback: function () {
                for (var _i = 0, _a = _this.data.values.levels; _i < _a.length; _i++) {
                    var level = _a[_i];
                    if (level.thumbnailKey === _this.levelThumb.texture.key) {
                        _this.data.values.users[0].levelInstance = level;
                        _this.data.values.users[1].levelInstance = level;
                    }
                }
            }
        });
        // Slide button n°2. This is where User 1 choose its character. 
        // Modifies the texture of the character thumbnail n°1 on click.
        gui_1.Gui.slideBtn({
            scene: this,
            x: 650,
            y: 370,
            text: "Suivant",
            img: this.characterThumbs[0],
            textureKeys: this.data.values.characters.map(function (c) { return c.thumbnailKey; }),
            callback: function () {
                for (var _i = 0, _a = _this.data.values.characters; _i < _a.length; _i++) {
                    var c = _a[_i];
                    if (c.thumbnailKey === _this.characterThumbs[0].texture.key) {
                        _this.data.values.users[0].characterInstance = c;
                    }
                }
            }
        });
        // Slide button n°3. This is where User 2 choose its character. 
        // Modifies the texture of the character thumbnail n°2 on click.
        gui_1.Gui.slideBtn({
            scene: this,
            x: 850,
            y: 370,
            text: "Suivant",
            img: this.characterThumbs[1],
            textureKeys: this.data.values.characters.map(function (c) { return c.thumbnailKey; }),
            callback: function () {
                for (var _i = 0, _a = _this.data.values.characters; _i < _a.length; _i++) {
                    var c = _a[_i];
                    if (c.thumbnailKey === _this.characterThumbs[1].texture.key) {
                        _this.data.values.users[1].characterInstance = c;
                    }
                }
            }
        });
        // Set the MODIFIED users data from the boot scene to this actual scene.
        // Modified because level and characters instances has been linked to
        // each users thanks to the slide buttons callbacks and the thumbnails.
        this.data.set('users', this.data.values.users);
        gui_1.Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: 'Game',
            // Sending this scene's data (= users) to the Game Scene.
            sceneData: this.data.getAll()
        });
    };
    return MenuScene;
}(Phaser.Scene));
exports.MenuScene = MenuScene;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvYm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvZ3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9odWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvbGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvdGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lb3Zlci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS1zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFD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QztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxDQTNKOEIsTUFBTSxDQUFDLEtBQUssR0EySjFDO0FBM0pZLDhCQUFTIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gKiBXaGljaCBpcyBnZW5lcmFsbHkgZXF1YWwgdG8gdGhlIHdpZHRoIG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuXHRyZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcblx0cmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgZmlsZSBpbiBhamF4IGFuZCByZXR1cm4gaXRzIHJlc3BvbnNlIHRleHQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggUGF0aCB0byB0aGUgZGVzaXJlZCBmaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGUgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG5cdGxldCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0bGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuXHRyYXdGaWxlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byBsb2FkIGZpbGUuXCIpO1xyXG5cdH1cclxuXHJcblx0cmF3RmlsZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuXHRcdFx0aWYgKHJhd0ZpbGUuc3RhdHVzID09PSAyMDAgfHwgcmF3RmlsZS5zdGF0dXMgPT09IDApIHtcclxuXHRcdFx0XHRyZXN1bHQgPSByYXdGaWxlLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmF3RmlsZS5vcGVuKFwiR0VUXCIsIHBGaWxlUGF0aCwgZmFsc2UpO1xyXG5cdHJhd0ZpbGUuc2VuZChudWxsKTtcclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuXHRsZXQgcmF3R3JpZCA9IHRoaXMubG9hZEZpbGUocEZpbGVQYXRoKTtcclxuXHRyZXR1cm4gcmF3R3JpZC5zcGxpdCgnXFxuJykubWFwKGl0ZW0gPT4gaXRlbS5zcGxpdCgnJykpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuXHRjdXN0b21CbHVlOiB7IHN0cmluZzogJyM0MzQ2ZjknLCBoZXg6IDB4NDM0NmY5IH0sXHJcblx0Y3VzdG9tR3JlZW46IHsgc3RyaW5nOiAgJyM3NmVhNjQnLCBoZXg6IDB4NzZlYTY0IH0sXHJcblx0dmlicmFudEdyZWVuOiB7IHN0cmluZzogJyMyNWY5NDUnLCBoZXg6IDB4MjVmOTQ1IH0sXHJcblx0Y3VzdG9tUmVkOiB7IHN0cmluZzogJyNlYTJkMjMnLCBoZXg6IDB4ZWEyZDIzIH0sXHJcblx0d2hpdGU6IHsgc3RyaW5nOiAnI2ZmZmZmZicsIGhleDogMHhmZmZmZmYgfVxyXG59XHJcblxyXG4vLyBOb3RlIC0tIHdlIGNhbiBhZGQgbXVsdGlwbGUga2V5cyBhdCBvbmNlIDogXHJcbi8vIHRoaXMua2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5cygnRU5URVIsVyxBLFMsRCcpXHJcbi8vIEFuZCB0aGVuIGRvIDogdGhpcy5rZXlzLkVOVEVSLmlzRG93bi4uLlxyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRST0xLRVlTID0ge1xyXG5cdFBMQVlFUjoge1xyXG5cdFx0U0VUMToge1xyXG5cdFx0XHRyaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlJJR0hULFxyXG5cdFx0XHRsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCxcclxuXHRcdFx0anVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlVQLFxyXG5cdFx0XHRzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNISUZUXHJcblx0XHR9LFxyXG5cclxuXHRcdFNFVDI6IHtcclxuXHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxyXG5cdFx0XHRsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUSxcclxuXHRcdFx0anVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlMsXHJcblx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0VcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZWRTdG9yYWdlKCkge1xyXG5cdGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdob2FmaWdodCcpKSB7XHJcblx0XHRjb25zdCBoZiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2hvYWZpZ2h0Jyk7XHJcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGhmKTtcclxuXHRcdHJldHVybiBwYXJzZWQ7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJztcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcblxyXG5cdHRpdGxlOiAnSG9hIEZpZ2h0JyxcclxuXHJcblx0dHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG5cdHNjYWxlOiB7XHJcblx0XHR3aWR0aDogMTAyNCxcclxuXHRcdGhlaWdodDogNjQwXHJcblx0fSxcclxuXHJcblx0aW5wdXQ6IHtcclxuXHRcdGdhbWVwYWQ6IHRydWUsXHJcblx0XHRrZXlib2FyZDogdHJ1ZVxyXG5cdH0sXHJcblx0XHJcblx0cGh5c2ljczoge1xyXG5cdFx0ZGVmYXVsdDogJ2FyY2FkZScsXHJcblx0XHRhcmNhZGU6IHtcclxuXHRcdFx0Z3Jhdml0eToge1xyXG5cdFx0XHRcdHk6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVidWc6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRkb206IHtcclxuXHRcdGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZVxyXG5cdH0sXHJcblxyXG5cdHBhcmVudDogJ2dhbWUnLFxyXG5cdFxyXG5cdHNjZW5lOiBTY2VuZXNcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvbWIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2Uge1xyXG5cclxuXHRwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMueCA+IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSB8fCBcclxuXHRcdHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHwgXHJcblx0XHR0aGlzLnggPCAwIHx8IHRoaXMueSA8IDApIHtcclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG5cdFx0c3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHRcdHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuc2V0Qm91bmNlKDEpO1xyXG5cdFx0dGhpcy5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0yMDAsIDIwMCksIDIwKTtcclxuXHRcdHRoaXMuc2V0R3Jhdml0eVkoMTAwMCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5pc091dCgpKSB7XHJcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkJvbWIgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHNcIik7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50IGEgR2FtZSBDaGFyYWN0ZXIsIG5vdCB0byBiZSBjb25mdXNlZCB3aXRoIHRoZSBcIlBsYXllclwiLlxyXG4gKiBBIFBsYXllciBpbnRlZ3JhdGVzIGEgQ2hhcmFjdGVyLiBBIENoYXJhY3RlciBpcyBqdXN0IGFib3V0IGhvbGRpbmcgZGF0YSA6XHJcbiAqIHRleHR1cmUga2V5cywgbWV0YWRhdGEsIHZvaWNlcyBldGMuIE5vdGhpbmcgdG8gYmUgY29udHJvbGxlZCB3aXRoIHlvdXJcclxuICoga2V5Ym9hcmQgaGVyZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xyXG5cclxuXHQvLyBWZXJ5IGltcG9ydGFudCBmaWVsZCwgdGlnaHRseSBsaW5rZWQgdG8gdGhlIGtleXMgeW91IHByb3ZpZGUgaW4gcGFjay5qc29uXHJcblx0cHJpdmF0ZSByZWFkb25seSBpZDogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIGRldGFpbHM6IG9iamVjdDtcclxuXHRwcml2YXRlIHN0YXRzOiBvYmplY3Q7XHJcblxyXG5cdC8vIEZpZWxkcyBidWlsdCB1cG9uIHRoZSBJZCBwcm92aWRlZCBhdCBpbnN0YW5jaWF0aW9uLlxyXG5cdHByaXZhdGUgX3RleHR1cmVLZXk6IHN0cmluZztcclxuXHQvLyBDaGFyYWN0ZXIncyBhdmF0YXJcclxuXHRwcml2YXRlIF90aHVtYm5haWxLZXk6IHN0cmluZztcclxuXHRwcml2YXRlIF9zb3VuZEtleTogc3RyaW5nO1xyXG5cclxuXHJcblx0cHVibGljIGdldCB0ZXh0dXJlS2V5KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGV4dHVyZUtleTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGh1bWJuYWlsS2V5KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGh1bWJuYWlsS2V5O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBzb3VuZEtleSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NvdW5kS2V5O1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG5cdFx0aWQ6IG51bWJlcjtcclxuXHRcdGRldGFpbHM/OiBvYmplY3Q7XHJcblx0XHRzdGF0cz86IG9iamVjdDtcclxuXHR9KSB7XHJcblxyXG5cdFx0dGhpcy5pZCA9IHBhcmFtcy5pZDtcclxuXHRcdHRoaXMuZGV0YWlscyA9IHBhcmFtcy5kZXRhaWxzO1xyXG5cdFx0dGhpcy5zdGF0cyA9IHBhcmFtcy5zdGF0cztcclxuXHJcblx0XHR0aGlzLl90ZXh0dXJlS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1gO1xyXG5cdFx0dGhpcy5fdGh1bWJuYWlsS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1BdmF0YXJgO1xyXG5cdFx0dGhpcy5fc291bmRLZXkgPSBgY2hhcmFjdGVyJHt0aGlzLmlkfVNvdW5kYDtcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR3VpIHtcclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgbWFpbkJ0blN0eWxlID0gXHJcblx0XHRgd2lkdGg6IDE1MHB4OyBcclxuXHRcdGhlaWdodDogNDlweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCxBcmlhbDsgXHJcblx0XHRjb2xvcjogIzAwMDAwMDsgXHJcblx0XHRmb250LXNpemU6IDI1cHg7IFxyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcblx0XHRib3JkZXI6IDJweCBzb2xpZCAjMDAwYFxyXG5cdDtcclxuXHJcblx0XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBzZWNvbmRhcnlCdG5TdHlsZSA9IFxyXG5cdFx0YHdpZHRoOiAxMDBweDsgXHJcblx0XHRoZWlnaHQ6IDMzcHg7IFxyXG5cdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmOyBcclxuXHRcdGNvbG9yOiAjMDAwMDAwOyBcclxuXHRcdGZvbnQtc2l6ZTogMTdweDsgXHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDBgXHJcblx0O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgc3R5bGl6ZWQgQnV0dG9uIERPTSBFbGVtZW50IHdpdGggYSBjbGljayBldmVudCBsaXN0ZW5lciBhdHRhY2hlZFxyXG5cdCAqIHRvIGl0LiBUaGUgZXZlbnQgbGlzdGVuZXIgY2FsbGJhY2sgc3RhcnRzIGEgbmV3IHNjZW5lIHVzaW5nIHRoZSBzY2VuZSBrZXlcclxuXHQgKiBwYXNzZWQgaW4gYXJndW1lbnRzIGFuZCBzdG9wcyBhbGwgc291bmRzIGlmIHN0b3BTb3VuZHMgc2V0IHRvIHRydWUuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBtYWluQnRuKHBhcmFtczoge1xyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR0ZXh0OiBzdHJpbmc7IFxyXG5cdFx0c3RvcFNvdW5kczogYm9vbGVhbjsgXHJcblx0XHRzY2VuZVBsdWdpbjogUGhhc2VyLlNjZW5lcy5TY2VuZVBsdWdpbjsgXHJcblx0XHRuZXdTY2VuZUtleTogc3RyaW5nO1xyXG5cdFx0c2NlbmVEYXRhPzogb2JqZWN0O1xyXG5cdH0pOiB2b2lkIHtcclxuXHJcblx0XHRwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuXHJcblx0XHRcdGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLzIsXHJcblx0XHRcdGdldEdhbWVIZWlnaHQocGFyYW1zLnNjZW5lKS0xMDAsXHJcblx0XHRcdCdidXR0b24nLFxyXG5cdFx0XHRHdWkubWFpbkJ0blN0eWxlLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cclxuXHRcdCkuYWRkTGlzdGVuZXIoJ2NsaWNrJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0cGFyYW1zLnNjZW5lLnNvdW5kLmFkZCgnY2xpY2tTb3VuZCcpLnBsYXkoKTtcclxuXHJcblx0XHRcdGlmIChwYXJhbXMuc3RvcFNvdW5kcykge1xyXG5cdFx0XHRcdHBhcmFtcy5zY2VuZS5zb3VuZC5zdG9wQWxsKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcmFtcy5zY2VuZVBsdWdpbi5zdGFydChwYXJhbXMubmV3U2NlbmVLZXksIHBhcmFtcy5zY2VuZURhdGEpO1xyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQnV0dG9uIHRoYXQgY2hhbmdlcyBhbiBpbWFnZSAoaW1nKSB0ZXh0dXJlIHdpdGggYW5vdGhlciAodGV4dHVyZXMpLFxyXG5cdCAqIG9uZSBieSBvbmUuIExpa2UgYSBzbGlkZXNob3cuXHJcblx0ICogQHBhcmFtIGltZzogYSBwaGFzZXIgZ2FtZSBvYmplY3QgaW1hZ2UgdGhhdCBhY3QgYXMgYSBjb250YWluZXIgaW4gYSB3YXkuXHJcblx0ICogQHBhcmFtIHRleHR1cmVzOiB0aGUgdGV4dHVyZXMgdG8gYXBwZW5kIHRvIGltZy5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHNsaWRlQnRuKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblx0XHR4OiBudW1iZXI7XHJcblx0XHR5OiBudW1iZXI7XHJcblx0XHR0ZXh0OiBzdHJpbmc7XHJcblx0XHRpbWc6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRcdHRleHR1cmVLZXlzOiBBcnJheTxzdHJpbmc+O1xyXG5cdFx0Y2FsbGJhY2s/OiBGdW5jdGlvbjtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0bGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblxyXG5cdFx0XHRwYXJhbXMueCxcclxuXHRcdFx0cGFyYW1zLnksXHJcblx0XHRcdCdidXR0b24nLFxyXG5cdFx0XHRHdWkuc2Vjb25kYXJ5QnRuU3R5bGUsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblxyXG5cdFx0KS5hZGRMaXN0ZW5lcignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHBhcmFtcy5zY2VuZS5zb3VuZC5hZGQoJ2NsaWNrU291bmQnKS5wbGF5KCk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudEluZGV4IDwgcGFyYW1zLnRleHR1cmVLZXlzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXgrKztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXggPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJhbXMuaW1nLnNldFRleHR1cmUocGFyYW1zLnRleHR1cmVLZXlzW2N1cnJlbnRJbmRleF0pO1xyXG5cclxuXHRcdFx0aWYgKHBhcmFtcy5jYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cGFyYW1zLmNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyB0aXRsZShwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHRleHQ6IHN0cmluZyA7XHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKS8yLFxyXG5cdFx0XHQyNCxcclxuXHRcdFx0J2gzJyxcclxuXHRcdFx0YGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdFx0Zm9udC1zaXplOiA0MHB4OyBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmYCxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBzZWN0aW9uVGl0bGUocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHRleHQ6IHN0cmluZzsgXHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRwYXJhbXMueCxcclxuXHRcdFx0cGFyYW1zLnksXHJcblx0XHRcdCdoNCcsXHJcblx0XHRcdGBjb2xvcjogI2ZmZmZmZjsgXHJcblx0XHRcdGZvbnQtc2l6ZTogMzBweDsgXHJcblx0XHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZmAsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3VzdG9tVGV4dChwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHg6IG51bWJlcjsgXHJcblx0XHR5OiBudW1iZXI7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdHBhcmFtcy54LFxyXG5cdFx0XHRwYXJhbXMueSxcclxuXHRcdFx0J3AnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7IFxyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxufSIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciB7XHJcblxyXG5cdHByaXZhdGUgYmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XHJcblx0cHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBoZWFsdGhWYWx1ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwZXJjZW50YWdlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlKHBBbW91bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgLT0gcEFtb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoVmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcblxyXG4gICAgICAgIHJldHVybiAodGhpcy5oZWFsdGhWYWx1ZSA9PT0gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIEJhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLndoaXRlLmhleCk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoVmFsdWUgPiAzMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbUJsdWUuaGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbVJlZC5oZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWx0aFdpZHRoID0gTWF0aC5mbG9vcih0aGlzLnBlcmNlbnRhZ2UgKiB0aGlzLmhlYWx0aFZhbHVlKTtcclxuXHRcdC8vIFRoZSBhY3R1YWwgaGVhbHRoIGphdWdlIHlvdSBzZWUgZGVjcmVhc2luZ1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCBoZWFsdGhXaWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSkge1xyXG4gICAgICAgIC8vIEVxdWl2YWxlbnQgdG8gdGhpcy5iYXIgPSBwYXJhbXMuc2NlbmUuYWRkLmdyYXBoaWNzKClcclxuICAgICAgICB0aGlzLmJhciA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3MocGFyYW1zLnNjZW5lKTtcclxuICAgICAgICB0aGlzLnggPSBwYXJhbXMueDtcclxuICAgICAgICB0aGlzLnkgPSBwYXJhbXMueTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTI7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSA9IDEwMDtcclxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2UgPSAxMDAvMTAwO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzLmJhcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGggfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSHVkIHtcclxuXHJcblx0cHJpdmF0ZSBhdmF0YXI6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIHRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5ET01FbGVtZW50O1xyXG5cdHByaXZhdGUgdGV4dFN0eWxlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0dXNlcjogVXNlcjtcclxuXHR9KSB7XHJcblxyXG5cdFx0dGhpcy50ZXh0U3R5bGUgPSBgXHJcblx0XHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbDsgXHJcblx0XHRcdG1hcmdpbjogMDsgXHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDsgXHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4XHJcblx0XHRgO1xyXG5cclxuXHRcdGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSAnbGVmdCcpIHtcclxuXHJcblx0XHRcdHRoaXMuYXZhdGFyID0gcGFyYW1zLnNjZW5lLmFkZC5pbWFnZShcclxuXHRcdFx0XHQwLCBcclxuXHRcdFx0XHQzNSwgXHJcblx0XHRcdFx0cGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGh1bWJuYWlsS2V5XHJcblx0XHRcdCkuc2V0T3JpZ2luKDAsMCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnRleHQgPSBwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0J2g1JyxcclxuXHRcdFx0XHR0aGlzLnRleHRTdHlsZSxcclxuXHRcdFx0XHRgJHtwYXJhbXMudXNlci51c2VybmFtZX0gfCBSYXRpbyAke3BhcmFtcy51c2VyLnJhdGlvfSVgXHJcblx0XHRcdCkuc2V0T3JpZ2luKDAsMCk7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSAncmlnaHQnKSB7XHJcblxyXG5cdFx0XHR0aGlzLmF2YXRhciA9IHBhcmFtcy5zY2VuZS5hZGQuaW1hZ2UoXHJcblx0XHRcdFx0Z2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSksIFxyXG5cdFx0XHRcdDM1LCBcclxuXHRcdFx0XHRwYXJhbXMudXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXlcclxuXHRcdFx0KS5zZXRPcmlnaW4oMSwwKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudGV4dCA9IHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRcdGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0J2g1JyxcclxuXHRcdFx0XHR0aGlzLnRleHRTdHlsZSxcclxuXHRcdFx0XHRgJHtwYXJhbXMudXNlci51c2VybmFtZX0gfCBSYXRpbyAke3BhcmFtcy51c2VyLnJhdGlvfSVgXHJcblx0XHRcdCkuc2V0T3JpZ2luKDEsMCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gJy4vdGlsZW1hcCc7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIExldmVsIGNvbnNpc3RzIG9mIDogYSBiYWNrZ3JvdW5kICsgYSBtdXNpYyB0aGVtZSArIGEgdGlsZW1hcCArIGEgbmFtZSArXHJcbiAqIGEgdGh1bWJuYWlsLlxyXG4gKiBJdCBpbml0cyB0aGUgZGlmZmVyZW50IGtleXMgbmVlZGVkIGFuZCBjcmVhdGVzL2RyYXcgdGhlIGJhY2tncm91bmQsXHJcbiAqIHRoZSB0aWxlbWFwIChieSBpbnN0YW5jaWF0ZSBpdCkgYW5kIHBsYXkgdGhlIG11c2ljIHRoZW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExldmVsIHtcclxuXHJcblxyXG5cdHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfdGlsZW1hcDogVGlsZW1hcDtcclxuXHRwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcblxyXG5cdHByaXZhdGUgX3RodW1ibmFpbEtleTogc3RyaW5nO1xyXG5cdHByaXZhdGUgYmFja2dyb3VuZEtleTogc3RyaW5nO1xyXG5cdHByaXZhdGUgbXVzaWNLZXk6IHN0cmluZztcclxuXHJcblxyXG5cdHB1YmxpYyBnZXQgdGlsZW1hcCgpOiBUaWxlbWFwIHtcclxuXHRcdHJldHVybiB0aGlzLl90aWxlbWFwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmFtZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGh1bWJuYWlsS2V5KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGh1bWJuYWlsS2V5O1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRpZDogbnVtYmVyO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLmlkID0gcGFyYW1zLmlkO1xyXG5cdFx0dGhpcy5fbmFtZSA9IHBhcmFtcy5uYW1lO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kS2V5ID0gYGxldmVsJHt0aGlzLmlkfUJhY2tncm91bmRgO1xyXG5cdFx0dGhpcy5tdXNpY0tleSA9IGBsZXZlbCR7dGhpcy5pZH1UaGVtZWA7XHJcblx0XHR0aGlzLl90aHVtYm5haWxLZXkgPSBgbGV2ZWwke3RoaXMuaWR9VGh1bWJuYWlsYDtcclxuXHJcblx0fVxyXG5cclxuXHRjcmVhdGUoc2NlbmUpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY2VuZS5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yLFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpLzIsXHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZEtleVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLl90aWxlbWFwID0gbmV3IFRpbGVtYXAoe1xyXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcclxuXHRcdFx0aWQ6IHRoaXMuaWRcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuc291bmQuYWRkKHRoaXMubXVzaWNLZXkpLnBsYXkoKTtcclxuXHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuL3Byb2plY3RpbGUnO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tICcuL2hlYWx0aEJhcic7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4vY2hhcmFjdGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHJcblx0cHJpdmF0ZSBfcHJvamVjdGlsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuXHRwcml2YXRlIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xyXG5cclxuXHRwcml2YXRlIHJpZ2h0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cdHByaXZhdGUgbGVmdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuXHRwcml2YXRlIGp1bXBLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblx0cHJpdmF0ZSBzaG9vdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuXHRwcml2YXRlIGxhc3RQcmVzc2VkS2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cclxuXHRwcml2YXRlIGp1bXBTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHRwcml2YXRlIHNob290U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblxyXG5cdHByaXZhdGUgbGFzdFNob290OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBoZWFsdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIHZ4OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBncmF2aXR5WTogbnVtYmVyO1xyXG5cdHByaXZhdGUganVtcFZlbG9jaXR5OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBib3VuY2U6IG51bWJlcjtcclxuXHRwcml2YXRlIGJ1bGxldFByb29mOiBib29sZWFuO1xyXG5cclxuXHRwcml2YXRlIHJlYWRvbmx5IFNUQVRFUyA9IHtcclxuXHRcdEFMSVZFOiAnQUxJVkUnLFxyXG5cdFx0SFVSVDogJ0hVUlQnLFxyXG5cdFx0RElFOiAnRElFJ1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBwcm9qZWN0aWxlcygpOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXAge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2plY3RpbGVzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRGVhZCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmhlYWx0aCA8PSAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGh1cnQoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5idWxsZXRQcm9vZiA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aWYgKHRoaXMuaGVhbHRoID4gMCkge1xyXG5cdFxyXG5cdFx0XHRcdHRoaXMuaGVhbHRoIC09IDIwO1xyXG5cdFx0XHRcdHRoaXMuaGVhbHRoQmFyLmRlY3JlYXNlKDIwKTtcclxuXHRcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLkhVUlQpO1xyXG5cdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbWFrZUJ1bGxldFByb29mKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuYnVsbGV0UHJvb2YgPT09IGZhbHNlKSB0aGlzLmJ1bGxldFByb29mID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFNvdW5kcygpOiB2b2lkIHtcclxuXHRcdHRoaXMuanVtcFNvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoJ2p1bXBTb3VuZCcpO1xyXG5cdFx0dGhpcy5zaG9vdFNvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoJ3Nob290U291bmQnKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFZpdGFscygpOiB2b2lkIHtcclxuXHRcdHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cdFx0dGhpcy5idWxsZXRQcm9vZiA9IGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRwcml2YXRlIGluaXRQaHlzaWNzKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ncmF2aXR5WSA9IDEwMDA7XHJcblx0XHR0aGlzLmp1bXBWZWxvY2l0eSA9IC02MDA7XHJcblx0XHR0aGlzLnZ4ID0gMTUwO1xyXG5cdFx0dGhpcy5ib3VuY2UgPSAwLjU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFwcGx5UGh5c2ljcygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcblx0XHR0aGlzLnNldEdyYXZpdHlZKHRoaXMuZ3Jhdml0eVkpO1xyXG5cdFx0dGhpcy5zZXRCb3VuY2UodGhpcy5ib3VuY2UpO1xyXG5cdFx0dGhpcy5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRDb250cm9scyhwS2V5cyk6IHZvaWQge1xyXG5cdFx0dGhpcy5qdW1wS2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbJ2p1bXAnXSk7XHJcblx0XHR0aGlzLnJpZ2h0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbJ3JpZ2h0J10pO1xyXG5cdFx0dGhpcy5sZWZ0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbJ2xlZnQnXSk7XHJcblx0XHR0aGlzLnNob290S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbJ3Nob290J10pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0SGVhbHRoQmFyKHBIZWFsdGhCYXI6IEhlYWx0aEJhcik6IHZvaWQge1xyXG5cdFx0dGhpcy5oZWFsdGhCYXIgPSBwSGVhbHRoQmFyO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0U2hvb3RpbmcoKTogdm9pZCB7XHJcblx0XHR0aGlzLmxhc3RTaG9vdCA9IDA7XHJcblx0XHR0aGlzLl9wcm9qZWN0aWxlcyA9IHRoaXMuc2NlbmUuYWRkLmdyb3VwKHtcclxuXHRcdFx0cnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG9vdCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNjZW5lLnRpbWUubm93ID4gdGhpcy5sYXN0U2hvb3QpIHtcclxuXHRcdFx0dGhpcy5fcHJvamVjdGlsZXMuYWRkKFxyXG5cdFx0XHRcdG5ldyBQcm9qZWN0aWxlKHtcclxuXHRcdFx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRcdFx0Ly8gQ2hhbmdpbmcgYnVsbGV0IHN0YXJ0aW5nIHBvaW50IGlmIHNwcml0ZSBpcyBmbGlwcGVkIG9uIFggYXhpc1xyXG5cdFx0XHRcdFx0eDogKCF0aGlzLmZsaXBYKSA/IHRoaXMueCArIDIwIDogdGhpcy54IC0gMjAsXHJcblx0XHRcdFx0XHR5OiB0aGlzLnkgKyAxMSxcclxuXHRcdFx0XHRcdC8vIEJ1bGxldCBkaXJlY3Rpb24gKGxlZnQvcmlnaHQpIGJhc2VkIG9uIGxhc3QgcHJlc3NlZCBrZXlcclxuXHRcdFx0XHRcdC8vIChpLmUgZGlyZWN0aW9uIG9mIHRoZSBwbGF5ZXIpLiBEZWZhdWx0OiBnb2VzIHJpZ2h0LlxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uOiAodGhpcy5sYXN0UHJlc3NlZEtleSA9PT0gdGhpcy5sZWZ0S2V5KSA/IC0xIDogMSxcclxuXHRcdFx0XHRcdHRleHR1cmVLZXk6ICdwcm9qZWN0aWxlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMubGFzdFNob290ID0gdGhpcy5zY2VuZS50aW1lLm5vdyArIDUwMDtcclxuXHRcdFx0Ly8gUGxheWluZyBzb3VuZCBoZXJlIGVuc3VyZXMgdXMgaXQgaXMgcGxheWVkIG9ubHkgb25jZSBldmVyeSBzaG9vdFxyXG5cdFx0XHR0aGlzLnNob290U291bmQucGxheSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRmxpcHBpbmcgdGhlIHNwcml0ZSBvbiBpdHMgWCBheGlzLCBkZXBlbmRpbmcgb24gd2hpY2ggZGlyZWN0aW9uIHlvdSBnby5cclxuXHQgKi9cclxuXHRwcml2YXRlIGhhbmRsZVNwcml0ZUZsaXBwaW5nKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSkge1xyXG5cdFx0XHQvLyBDaGFuZ2VkIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIGxlZnRcclxuXHRcdFx0dGhpcy5mbGlwWCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMucmlnaHRLZXkpIHtcclxuXHRcdFx0Ly8gT3JpZ2luYWwgc3ByaXRlIG9yaWVudGF0aW9uOiBmYWNpbmcgcmlnaHRcclxuXHRcdFx0dGhpcy5mbGlwWCA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gT3JpZ2luYWwgc3ByaXRlIG9yaWVudGF0aW9uOiBmYWNpbmcgcmlnaHRcclxuXHRcdFx0dGhpcy5mbGlwWCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVKdW1waW5nKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuanVtcEtleS5pc0Rvd24pIHtcclxuXHRcdFx0aWYgKHRoaXMuYm9keS5ibG9ja2VkLmRvd24gfHwgdGhpcy5ib2R5LnRvdWNoaW5nLmRvd24pIHtcclxuXHRcdFx0XHR0aGlzLnNldFZlbG9jaXR5WSh0aGlzLmp1bXBWZWxvY2l0eSk7XHJcblx0XHRcdFx0dGhpcy5qdW1wU291bmQucGxheSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9IFxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlIGlkbGluZyAoZG9pbmcgbm90aGluZykgQU5EIGlkbGluZy1zaG9vdGluZy5cclxuXHQgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcblx0ICogY3JlYXRlIHNob290cy5cclxuXHQgKi9cclxuXHRwcml2YXRlIGhhbmRsZUlkbGluZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG5cdFx0dGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SURMRWAsIHRydWUpO1xyXG5cclxuXHRcdC8vIElkbGluZy1TaG9vdGluZ1xyXG5cdFx0aWYgKHRoaXMuc2hvb3RLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUlETEVfU0hPT1RgLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5zaG9vdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlIHdhbGtpbmcgQU5EIHdhbGtpbmctc2hvb3RpbmcuXHJcblx0ICogVGhpcyBpbmNsdWRlcyBhbmltYXRpb24gcGxheWluZywgY2hlY2tpbmcga2V5IHByZXNzLCBzZXR0aW5nIHZlbG9jaXR5LFxyXG5cdCAqIGNyZWF0ZSBzaG9vdHMgYW5kIHJlbWVtYmVyaW5nIGxhc3QgcHJlc3NlZCBrZXkuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBoYW5kbGVXYWxraW5nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9V0FMS2AsIHRydWUpO1xyXG5cclxuXHRcdC8vIFdhbGtpbmcgOiBnb2luZyByaWdodFxyXG5cdFx0aWYgKHRoaXMucmlnaHRLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuc2V0VmVsb2NpdHlYKHRoaXMudngpO1xyXG5cdFx0XHR0aGlzLmxhc3RQcmVzc2VkS2V5ID0gdGhpcy5yaWdodEtleTtcdFxyXG5cdFx0fVxyXG5cdFx0Ly8gV2Fsa2luZyA6IGdvaW5nIGxlZnRcclxuXHRcdGlmICh0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuc2V0VmVsb2NpdHlYKC10aGlzLnZ4KTtcclxuXHRcdFx0dGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMubGVmdEtleTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBXYWxraW5nLVNob290aW5nXHJcblx0XHRpZiAodGhpcy5zaG9vdEtleS5pc0Rvd24pIHtcclxuXHRcdFx0dGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9V0FMS19TSE9PVGAsIHRydWUpO1xyXG5cdFx0XHR0aGlzLnNob290KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHg6IG51bWJlcjsgXHJcblx0XHR5OiBudW1iZXI7IFxyXG5cdFx0dGV4dHVyZUtleTogc3RyaW5nO1xyXG5cdFx0Y29udHJvbEtleXM6IG9iamVjdDtcclxuXHRcdGhlYWx0aEJhcjogSGVhbHRoQmFyO1xyXG5cdH0pIHtcclxuXHJcblx0XHRzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5pbml0UGh5c2ljcygpO1xyXG5cdFx0dGhpcy5hcHBseVBoeXNpY3MoKTtcclxuXHRcdHRoaXMuaW5pdFNvdW5kcygpO1xyXG5cdFx0dGhpcy5pbml0Vml0YWxzKCk7XHJcblx0XHR0aGlzLmluaXRIZWFsdGhCYXIocGFyYW1zLmhlYWx0aEJhcik7XHJcblx0XHR0aGlzLmluaXRTaG9vdGluZygpO1xyXG5cdFx0dGhpcy5pbml0Q29udHJvbHMocGFyYW1zLmNvbnRyb2xLZXlzKTtcclxuXHJcblx0XHQvLyBSZXN0cmFpbiB0aGUgYm91bmRpbmdCb3hcclxuXHRcdHRoaXMuc2V0U2l6ZSgyMCwgNjApO1xyXG5cclxuXHRcdHRoaXMuc2V0U3RhdGUodGhpcy5TVEFURVMuQUxJVkUpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCk6IHZvaWQge1xyXG5cclxuXHRcdGlmICh0aGlzLmlzRGVhZCgpKSB0aGlzLnN0YXRlID0gdGhpcy5TVEFURVMuRElFO1xyXG5cclxuXHRcdGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5BTElWRSkge1xyXG5cdFx0XHQvLyBUaGlzIGlzIGRldGFjaGVkIGZyb20gdGhlIG90aGVyIGJsb2NrIGJlY2F1c2UgeW91IGNhbiBkbyBhbnl0aGluZ1xyXG5cdFx0XHQvLyB3aGlsZSBqdW1waW5nOiB3YWxrL3dhbGstc2hvb3QsIGlkbGUvaWRsZS1zaG9vdC4gU28gaXQgaXNuJ3QgXHJcblx0XHRcdC8vIGRlcGVuZGFudCBvZiB3aGV0aGVyIHlvdSdyZSBwcmVzc2luZyBsZWZ0IG9yIHJpZ2h0IG9yIHdoYXRldmVyLlxyXG5cdFx0XHR0aGlzLmhhbmRsZUp1bXBpbmcoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93biB8fCB0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVXYWxraW5nKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVJZGxpbmcoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5oYW5kbGVTcHJpdGVGbGlwcGluZygpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuSFVSVCkge1xyXG5cclxuXHRcdFx0dGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SElUYCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHR0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuXHJcblx0XHRcdC8vIFRoaXMgbGVhZHMgdG8gaHVydCBhbmltIGJ1ZyBcclxuXHRcdFx0dGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuXHRcdFx0XHRkZWxheTogMTAwMCxcclxuXHRcdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUodGhpcy5TVEFURVMuQUxJVkUpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuRElFKSB7XHJcblxyXG5cdFx0XHQvLyBXZSBkb24ndCByZXNldCBzdGF0ZSB0byBBTElWRSBjYXVzZSBpdCdzIGVuZCBvZiB0aGUgZ2FtZVxyXG5cclxuXHRcdFx0dGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9RElFYCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHR0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBQbGF5ZXIgU3RhdGVcIik7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGUgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRwcml2YXRlIHZ4OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBkaXJlY3Rpb246IG51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSBpc091dCgpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnggPiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgfHwgdGhpcy55ID4gZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSB8fCB0aGlzLnggPCAwIHx8IHRoaXMueSA8IDApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRBbmltYXRpb25zKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRrZXk6ICdjb2xsaXNpb25FZmZlY3QxJyxcclxuXHRcdFx0ZnJhbWVzOiB0aGlzLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdjb2xsaXNpb25FZmZlY3QxJywge1xyXG5cdFx0XHRcdHN0YXJ0OiAwLFxyXG5cdFx0XHRcdGVuZDogMVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0cmVwZWF0OiAxXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG5cdFx0c3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG5cdFx0dGhpcy52eCA9IDcwMDtcclxuXHRcdHRoaXMuZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbjtcclxuXHRcdFxyXG5cdFx0dGhpcy5pbml0QW5pbWF0aW9ucygpO1xyXG5cclxuXHRcdHRoaXMuc2V0VmVsb2NpdHlYKHRoaXMuZGlyZWN0aW9uICogdGhpcy52eCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5pc091dCgpKSB7XHJcblxyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1Byb2plY3RpbGUgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHMnKTtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFRpbGVtYXAge1xyXG5cclxuXHJcblx0cHJpdmF0ZSBtYXA6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwO1xyXG5cdHByaXZhdGUgdGlsZXNldDogUGhhc2VyLlRpbGVtYXBzLlRpbGVzZXQ7XHJcblx0cHJpdmF0ZSBfbWFpbkxheWVyOiBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyO1xyXG5cdHByaXZhdGUgc3ViTGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXI7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZXR0ZXIgZm9yIHRoZSBsYXllciB0aGF0IGNvbGxpZGVzOiAnY29sbGlkZXMnIHNldCB0byB0cnVlIGluIFRpbGVkLlxyXG5cdCAqL1xyXG5cdGdldCBtYWluTGF5ZXIoKTogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbWFpbkxheWVyO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0aWQ6IG51bWJlcjsgXHJcblx0fSkge1xyXG5cclxuXHRcdHRoaXMubWFwID0gcGFyYW1zLnNjZW5lLm1ha2UudGlsZW1hcCh7IFxyXG5cdFx0XHRrZXk6IGBsZXZlbCR7cGFyYW1zLmlkfWBcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMudGlsZXNldCA9IHRoaXMubWFwLmFkZFRpbGVzZXRJbWFnZShcclxuXHRcdFx0YGxldmVsJHtwYXJhbXMuaWR9LXRpbGVzaGVldGAsIFxyXG5cdFx0XHRgbGV2ZWwke3BhcmFtcy5pZH1UaWxlc2hlZXRgXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuX21haW5MYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG5cdFx0XHQnbWFpbkxheWVyJywgXHJcblx0XHRcdHRoaXMudGlsZXNldCwgMCwgMFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLl9tYWluTGF5ZXIuc2V0Q29sbGlzaW9uQnlQcm9wZXJ0eSh7IFxyXG5cdFx0XHRjb2xsaWRlczogdHJ1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zdWJMYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG5cdFx0XHQnc3ViTGF5ZXInLFxyXG5cdFx0XHR0aGlzLnRpbGVzZXQsIDAsIDBcclxuXHRcdCk7XHRcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL2NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuL2xldmVsXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuLi9vYmplY3RzL2d1aVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuXHJcblxyXG5cdHByaXZhdGUgX2lkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfdXNlcm5hbWU6IHN0cmluZztcclxuXHRwcml2YXRlIF9yYXRpbzogbnVtYmVyO1xyXG5cdHByaXZhdGUgX2F2YXRhcjogc3RyaW5nO1xyXG5cdHByaXZhdGUgX3NjcmVlblNpZGU6IHN0cmluZztcclxuXHRwcml2YXRlIF9jaGFyYWN0ZXJJbnN0YW5jZTogQ2hhcmFjdGVyO1xyXG5cdHByaXZhdGUgX3BsYXllckluc3RhbmNlOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBfbGV2ZWxJbnN0YW5jZTogTGV2ZWw7XHJcblxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFVzZXIncyBpZCBmcm9tIERCLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9pZDtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogVXNlcidzIHVzZXJuYW1lIGZyb20gREIuXHJcblx0ICovXHJcblx0cHVibGljIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXNlcidzIHJhdGlvIGZyb20gREIuXHJcblx0ICovXHJcblx0cHVibGljIGdldCByYXRpbygpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JhdGlvO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBzY3JlZW5TaWRlKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NyZWVuU2lkZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoYXJhY3RlciB0aGUgdXNlciBoYXMgY2hvc2VuIGluIHRoZSBNZW51LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgY2hhcmFjdGVySW5zdGFuY2UoKTogQ2hhcmFjdGVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jaGFyYWN0ZXJJbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBsYXllciBjcmVhdGVkIGluIEdhbWUgU2NlbmUgYmFzZWQgb24gVXNlcidzIGNoYXJhY3RlciBjaG9pY2UuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBwbGF5ZXJJbnN0YW5jZSgpOiBQbGF5ZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BsYXllckluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTGV2ZWwgdGhlIHVzZXIgaGFzIGNob3NlbiBpbiB0aGUgTWVudSwgbWFrZXMgbW9yZSBzZW5zZSB3aGVuIHBsYXlpbmcgc29sby5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGxldmVsSW5zdGFuY2UoKTogTGV2ZWwge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xldmVsSW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGNoYXJhY3Rlckluc3RhbmNlKHY6IENoYXJhY3Rlcikge1xyXG5cdFx0dGhpcy5fY2hhcmFjdGVySW5zdGFuY2UgPSB2O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBwbGF5ZXJJbnN0YW5jZSh2OiBQbGF5ZXIpIHtcclxuXHRcdHRoaXMuX3BsYXllckluc3RhbmNlID0gdjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgbGV2ZWxJbnN0YW5jZSh2OiBMZXZlbCkge1xyXG5cdFx0dGhpcy5fbGV2ZWxJbnN0YW5jZSA9IHY7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHsgXHJcblx0XHRpZDogbnVtYmVyOyBcclxuXHRcdHVzZXJuYW1lOiBzdHJpbmc7IFxyXG5cdFx0cmF0aW86IG51bWJlcjtcclxuXHRcdHNjcmVlblNpZGU6IHN0cmluZztcclxuXHR9KSB7XHJcblxyXG5cdFx0dGhpcy5faWQgPSBwYXJhbXMuaWQ7XHJcblx0XHR0aGlzLl91c2VybmFtZSA9IHBhcmFtcy51c2VybmFtZTtcclxuXHRcdHRoaXMuX3JhdGlvID0gcGFyYW1zLnJhdGlvO1xyXG5cdFx0dGhpcy5fc2NyZWVuU2lkZSA9IHBhcmFtcy5zY3JlZW5TaWRlO1xyXG5cclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IExldmVsIH0gZnJvbSAnLi4vb2JqZWN0cy9sZXZlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9vYmplY3RzL3VzZXInO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuLi9vYmplY3RzL2NoYXJhY3Rlcic7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvZ3VpJztcclxuaW1wb3J0IHsgcGFyc2VkU3RvcmFnZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG5cdGFjdGl2ZTogZmFsc2UsXHJcblx0dmlzaWJsZTogZmFsc2UsXHJcblx0a2V5OiAnQm9vdCdcclxufTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcblx0cHJpdmF0ZSBsZXZlbHM6IEFycmF5PExldmVsPlxyXG5cdHByaXZhdGUgdXNlcnM6IEFycmF5PFVzZXI+O1xyXG5cdHByaXZhdGUgY2hhcmFjdGVyczogQXJyYXk8Q2hhcmFjdGVyPjtcclxuXHJcblx0cHJpdmF0ZSBsb2dvOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcblx0cHJpdmF0ZSBidG46IFBoYXNlci5HYW1lT2JqZWN0cy5ET01FbGVtZW50O1xyXG5cdHByaXZhdGUgYmFja2dyb3VuZDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdHByaXZhdGUgbXVzaWNUaGVtZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHRcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cclxuXHRcdHRoaXMubGV2ZWxzID0gW1xyXG5cdFx0XHRuZXcgTGV2ZWwoe1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdG5hbWU6IFwiQ2ltZXRpZXJlXCJcclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBMZXZlbCh7XHJcblx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0bmFtZTogXCJQcmFpcmllXCJcclxuXHRcdFx0fSlcclxuXHRcdF07XHJcblx0XHRcclxuXHRcdHRoaXMudXNlcnMgPSBbXHJcblx0XHRcdG5ldyBVc2VyKHtcclxuXHRcdFx0XHRpZDogcGFyc2VkU3RvcmFnZSgpPy5tYWluVXNlci5pZCB8fCAwLFxyXG5cdFx0XHRcdHVzZXJuYW1lOiBwYXJzZWRTdG9yYWdlKCk/Lm1haW5Vc2VyLnVzZXJuYW1lIHx8ICdGb28xJyxcclxuXHRcdFx0XHRyYXRpbzogcGFyc2VkU3RvcmFnZSgpPy5tYWluVXNlci5yYXRpbyB8fCA5OCxcclxuXHRcdFx0XHRzY3JlZW5TaWRlOiAnbGVmdCdcclxuXHRcdFx0fSksXHJcblxyXG5cdFx0XHRuZXcgVXNlcih7XHJcblx0XHRcdFx0aWQ6IHBhcnNlZFN0b3JhZ2UoKT8uc2Vjb25kYXJ5VXNlci5pZCB8fCAwLFxyXG5cdFx0XHRcdHVzZXJuYW1lOiBwYXJzZWRTdG9yYWdlKCk/LnNlY29uZGFyeVVzZXIudXNlcm5hbWUgfHwgJ0JvbzInLFxyXG5cdFx0XHRcdHJhdGlvOiBwYXJzZWRTdG9yYWdlKCk/LnNlY29uZGFyeVVzZXIucmF0aW8gfHwgODksXHJcblx0XHRcdFx0c2NyZWVuU2lkZTogJ3JpZ2h0J1xyXG5cdFx0XHR9KVxyXG5cdFx0XTtcclxuXHJcblx0XHR0aGlzLmNoYXJhY3RlcnMgPSBbXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiU3RldmllXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiQ2Fyb2xpbmVcIiB9LFxyXG5cdFx0XHRcdHN0YXRzOiB7fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IENoYXJhY3Rlcih7XHJcblx0XHRcdFx0aWQ6IDMsXHJcblx0XHRcdFx0ZGV0YWlsczogeyBuaWNrbmFtZTogXCJLcmlzdG9mXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiA0LFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiS3Jpc3R5XCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiA1LFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiT3JvblwiIH0sXHJcblx0XHRcdFx0c3RhdHM6IHt9XHJcblx0XHRcdH0pLFxyXG5cdFx0XHRuZXcgQ2hhcmFjdGVyKHtcclxuXHRcdFx0XHRpZDogNixcclxuXHRcdFx0XHRkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIkFsZXhhXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSlcclxuXHRcdF07XHJcblxyXG5cdFx0Ly8gVXNpbmcgdGhlIHNjZW5lIERhdGEgTWFuYWdlciB0byBzdG9yZSBkYXRhIG9uIGEgc2NlbmUgbGV2ZWwuXHJcblx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsIHRoaXMudXNlcnMpO1xyXG5cdFx0dGhpcy5kYXRhLnNldCgnY2hhcmFjdGVycycsIHRoaXMuY2hhcmFjdGVycyk7XHJcblx0XHR0aGlzLmRhdGEuc2V0KCdsZXZlbHMnLCB0aGlzLmxldmVscyk7XHJcblxyXG5cdH1cclxuXHJcblx0cHJlbG9hZCgpIHtcclxuXHJcblx0XHR0aGlzLmxvYWQucGFjayhcclxuXHRcdFx0XCJwcmVsb2FkXCIsXHJcblx0XHRcdFwiYXNzZXRzL3BhY2suanNvblwiLFxyXG5cdFx0XHRcInByZWxvYWRcIlxyXG5cdFx0KTtcclxuXHRcdFxyXG5cdFx0Ly8gUHJlbG9hZCBhbGwgY2hhcmFjdGVycyBhdGxhc2VzIDogYSBqc29uIGZpbGUgdGhhdCBhY3RzIGFzXHJcblx0XHQvLyBhcyBhIFwibWFwXCIvXCJsaW5rXCIgdG8gYSBwbmcgc3ByaXRlc2hlZXQuXHJcblx0XHQvLyBVc2VkIGZvciBkcmF3aW5nIFBMYXllciB0ZXh0dXJlIGFuZCBzZXQgYW5pbWF0aW9ucy5cclxuXHRcdC8vIFN0aWxsIG91dHNpZGUgcGFjay5qc29uIGZvciBub3cgY2F1c2UgSSBkb24ndCBrbm93IGhvdy5cclxuXHRcdGZvciAobGV0IG4gPSAxOyBuIDw9IDY7IG4rKykge1xyXG5cdFx0XHR0aGlzLmxvYWQuYXRsYXMoXHJcblx0XHRcdFx0YGNoYXJhY3RlciR7bn1gLFxyXG5cdFx0XHRcdGBhc3NldHMvaW1hZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVyJHtufS9jaGFyYWN0ZXIke259LXNwcml0ZXNoZWV0LnBuZ2AsXHJcblx0XHRcdFx0YGFzc2V0cy9pbWFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXIke259L2NoYXJhY3RlciR7bn0tYXRsYXMuanNvbmBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cclxuXHRcdHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKCdtZW51VGhlbWUnKTtcclxuXHRcdHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblxyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0Z2V0R2FtZUhlaWdodCh0aGlzKS8yLFxyXG5cdFx0XHQnYmFja2dyb3VuZEZvckdVSVNjZW5lcydcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0Z2V0R2FtZUhlaWdodCh0aGlzKS8yLjUsXHJcblx0XHRcdCdtYWluTG9nbydcclxuXHRcdCk7XHJcblxyXG5cdFx0R3VpLmN1c3RvbVRleHQoe1xyXG5cdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0eDogdGhpcy5sb2dvLngsXHJcblx0XHRcdHk6IHRoaXMubG9nby55ICsgODQsXHJcblx0XHRcdHRleHQ6IFwiV2VsY29tZSB0byB0aGUgZmlnaHQgIVwiXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0R3VpLm1haW5CdG4oeyBcclxuXHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHR0ZXh0OiBcIk1lbnVcIixcclxuXHRcdFx0c3RvcFNvdW5kczogZmFsc2UsXHJcblx0XHRcdHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRuZXdTY2VuZUtleTogJ01lbnUnLFxyXG5cdFx0XHQvLyBQYXNzaW5nIHRoaXMgc2NlbmUgZGF0YSB0byB0aGUgZGVzdGluYXRpb24gc2NlbmUuXHJcblx0XHRcdHNjZW5lRGF0YTogdGhpcy5kYXRhLmdldEFsbCgpXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH1cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBCb21iIH0gZnJvbSAnLi4vb2JqZWN0cy9ib21iJztcclxuaW1wb3J0IHsgSHVkIH0gZnJvbSAnLi4vb2JqZWN0cy9odWQnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9vYmplY3RzL3BsYXllcic7XHJcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gJy4uL29iamVjdHMvaGVhbHRoQmFyJztcclxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tICcuLi9vYmplY3RzL2xldmVsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL29iamVjdHMvdXNlcic7XHJcblxyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcblx0YWN0aXZlOiBmYWxzZSxcclxuXHR2aXNpYmxlOiBmYWxzZSxcclxuXHRrZXk6ICdHYW1lJ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHYW1lIFNjZW5lIGlzIHdoZXJlIGFsbCB0aGUgYWN0aW9ucyB0YWtlcyBwbGFjZS5cclxuICogQWN0b3JzIHN1Y2ggYXMgUGxheWVyLCBCb21icyBhbmQgQm9tYiBhcmUgaW5zdGFuY2lhdGVkLiBcclxuICogU3RhdGljIGVsZW1lbnRzIHN1Y2ggYXMgSFVEcyBhbmQgSGVhbHRoQmFycyAodmlhIFBsYXllcikgYXJlIGluc3RhbmNpYXRlZC5cclxuICogTGV2ZWwgaXMgY3JlYXRlZCAobm90IGluc3RhbmNpYXRlZCksIHdoaWNoIGJhc2ljYWxseSBtZWFucyB0aGF0IFRpbGVtYXAgaXNcclxuICogZHJhd24uIENvbGxpZGVycyBiZXR3ZWVuIGFjdG9ycyBhcmUgaGFuZGxlZC4gUGxheWVyIGFuaW1hdGlvbnMgYXJlIGNyZWF0ZWQuXHJcbiAqIEl0IHNldHMgYSBTY2VuZSBXaW5uZXIgd2hlbiBvbmUgb2YgdGhlIHVzZXJzIFBMQVlFUiBJTlNUQU5DRVMgaXMgZGVhZCBhbmRcclxuICogdGhlbiBzdGFydCB0aGUgbmV3IHNjZW5lIChHYW1lb3ZlciBTY2VuZSkuXHJcbiAqIEl0IHRha2VzIHRoZSBkYXRhIG9iamVjdCBmcm9tIHRoZSBNZW51IFNjZW5lIChjb21wb3NlZCBvZiBhbiBhcnJheSBvZiB1c2VycyksXHJcbiAqIGF2YWlsYWJsZSBoZXJlIGluIHRoZSBpbml0KCkgZXQgY3JlYXRlKCkgY2FsbGJhY2tzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0XHJcblx0cHJpdmF0ZSBwbGF5ZXIxOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBwbGF5ZXIyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBodWQxOiBIdWQ7XHJcblx0cHJpdmF0ZSBodWQyOiBIdWQ7XHJcblx0cHJpdmF0ZSB0aWxlbWFwOiBMZXZlbFtcInRpbGVtYXBcIl07XHJcblx0cHJpdmF0ZSBib21iczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cdHByaXZhdGUgYm9tYkNyZWF0aW9uRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcblx0cHJpdmF0ZSBuZXdTY2VuZVRpbWVkRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcblx0cHJpdmF0ZSB3aW5uZXI6IFVzZXI7XHJcblxyXG5cclxuXHRwcml2YXRlIHNldENvbGxpZGVycygpOiB2b2lkIHtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMuYm9tYnMsXHJcblx0XHRcdHRoaXMudGlsZW1hcC5tYWluTGF5ZXJcclxuXHRcdCk7XHJcblx0XHR0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG5cdFx0XHR0aGlzLmJvbWJzLFxyXG5cdFx0XHR0aGlzLnBsYXllcjEsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEuaHVydCgpO1xyXG5cdFx0XHRcdHRoaXMuYm9tYnMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMuYm9tYnMsXHJcblx0XHRcdHRoaXMucGxheWVyMixcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMi5odXJ0KCk7XHJcblx0XHRcdFx0dGhpcy5ib21icy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLFxyXG5cdFx0XHR0aGlzLnBsYXllcjJcclxuXHRcdCk7XHJcblx0XHR0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG5cdFx0XHRbdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjJdLCBcclxuXHRcdFx0dGhpcy50aWxlbWFwLm1haW5MYXllclxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMucGxheWVyMSxcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLnByb2plY3RpbGVzLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIxLmh1cnQoKTtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIucHJvamVjdGlsZXMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMucGxheWVyMixcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLnByb2plY3RpbGVzLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIyLmh1cnQoKTtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEucHJvamVjdGlsZXMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cclxuXHRpbml0KG1lbnVTY2VuZURhdGEpIHtcclxuXHJcblx0XHRpZiAobWVudVNjZW5lRGF0YS51c2VycyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJywgbWVudVNjZW5lRGF0YS51c2Vycyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIEFuaW1hdGlvbnMgY3JlYXRpb25cclxuXHRcdGZvciAoY29uc3QgdXNlciBvZiB0aGlzLmRhdGEuZ2V0KCd1c2VycycpKSB7XHJcblxyXG5cdFx0XHRsZXQgdGsgPSB1c2VyLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXk7XHJcblxyXG5cdFx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31XQUxLYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICd3YWxrLXNpZGUtYXJtZWQnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6IDEsXHJcblx0XHRcdFx0XHRlbmQ6IDQsXHJcblx0XHRcdFx0XHR6ZXJvUGFkOiAyXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0ZnJhbWVSYXRlOiAxMCxcclxuXHRcdFx0XHRyZXBlYXQ6IC0xXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31XQUxLX1NIT09UYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICd3YWxrLXNpZGUtc2hvb3QnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6IDEsXHJcblx0XHRcdFx0XHRlbmQ6IDQsXHJcblx0XHRcdFx0XHR6ZXJvUGFkOiAyXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0cmVwZWF0OiAtMVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRcdGtleTogYCR7dGt9SURMRWAsXHJcblx0XHRcdFx0ZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG5cdFx0XHRcdFx0cHJlZml4OiAnaWRsZS1mcm9udC1hcm1lZCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogNCxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDJcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmcmFtZVJhdGU6IDEwLFxyXG5cdFx0XHRcdHJlcGVhdDogLTFcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0XHRrZXk6IGAke3RrfUlETEVfU0hPT1RgLFxyXG5cdFx0XHRcdGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuXHRcdFx0XHRcdHByZWZpeDogJ2lkbGUtZnJvbnQtc2hvb3QnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6IDEsXHJcblx0XHRcdFx0XHRlbmQ6IDEsXHJcblx0XHRcdFx0XHR6ZXJvUGFkOiAyXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0cmVwZWF0OiAtMVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRcdGtleTogYCR7dGt9SElUYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICdoaXQnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6IDEsXHJcblx0XHRcdFx0XHRlbmQ6IDEsXHJcblx0XHRcdFx0XHR6ZXJvUGFkOiAyLFxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdHJlcGVhdDogMVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRcdGtleTogYCR7dGt9RElFYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICdkZWFkJyxcclxuXHRcdFx0XHRcdHN0YXJ0OiAxLFxyXG5cdFx0XHRcdFx0ZW5kOiAxLFxyXG5cdFx0XHRcdFx0emVyb1BhZDogMixcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRyZXBlYXQ6IDFcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5sZXZlbEluc3RhbmNlLmNyZWF0ZSh0aGlzKTtcclxuXHJcblx0XHR0aGlzLnRpbGVtYXAgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmxldmVsSW5zdGFuY2UudGlsZW1hcDtcclxuXHJcblx0XHR0aGlzLmJvbWJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG5cdFx0XHRydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoaXMuYm9tYkNyZWF0aW9uRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRkZWxheTogMjAwMCxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmJvbWJzLmFkZChcclxuXHRcdFx0XHRcdG5ldyBCb21iKHtcclxuXHRcdFx0XHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHRcdFx0XHR4OiBQaGFzZXIuTWF0aC5CZXR3ZWVuKDUwLCBnZXRHYW1lV2lkdGgodGhpcykgLSA1MCksXHJcblx0XHRcdFx0XHRcdHk6IDAsXHJcblx0XHRcdFx0XHRcdHRleHR1cmVLZXk6ICdib21iJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYWxsYmFja1Njb3BlOiB0aGlzXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IDMwMCxcclxuXHRcdFx0eTogMzAwLFxyXG5cdFx0XHR0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcblx0XHRcdGNvbnRyb2xLZXlzOiB7XHJcblx0XHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuXHRcdFx0XHRsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCxcclxuXHRcdFx0XHRqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcblx0XHRcdFx0c2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWFsdGhCYXI6IG5ldyBIZWFsdGhCYXIoe1xyXG5cdFx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHRcdHg6IDYwLFxyXG5cdFx0XHRcdHk6IDQwXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IDkwMCxcclxuXHRcdFx0eTogMzAwLFxyXG5cdFx0XHR0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcblx0XHRcdGNvbnRyb2xLZXlzOiB7XHJcblx0XHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxyXG5cdFx0XHRcdGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG5cdFx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG5cdFx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0VcclxuXHRcdFx0fSxcclxuXHRcdFx0aGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuXHRcdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0XHR4OiBnZXRHYW1lV2lkdGgodGhpcyktMTYyLFxyXG5cdFx0XHRcdHk6IDQwXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmh1ZDEgPSBuZXcgSHVkKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHVzZXI6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuaHVkMiA9IG5ldyBIdWQoe1xyXG5cdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0dXNlcjogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zZXRDb2xsaWRlcnMoKTtcclxuXHJcblx0XHQvLyBUaGlzIGlzIHdoZXJlIHdlIGhhdmUgdXNlcjwtLT5wbGF5ZXIgY29uY29yZGFuY2VcclxuXHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0ucGxheWVySW5zdGFuY2UgPSB0aGlzLnBsYXllcjE7XHJcblx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIyO1xyXG5cclxuXHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJywgdGhpcy5kYXRhLnZhbHVlcy51c2Vycyk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIxLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5wbGF5ZXIyLnVwZGF0ZSgpO1xyXG5cclxuXHRcdC8vIFdpbm5lciBoYW5kbGluZ1xyXG5cdFx0Ly8gRW50ZXIgd2lubmVyIGhhbmRsaW5nIG1vZGUgaWYgb25lIG9mIHRoZSBwbGF5ZXIgaXMgZGVhZFxyXG5cdFx0aWYgKHRoaXMucGxheWVyMS5pc0RlYWQoKSB8fCB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHJcblx0XHRcdC8vIE1ha2UgcGxheWVycyBpbnZpY2libGUgd2hpbGUgd2FpdGluZyBmb3IgdGhlIG5leHQgc2NlbmUgdG8gc3RhcnRcclxuXHRcdFx0Ly8gVGhpcyB3YXkgd2UgZG9uJ3QgaGF2ZSB0byBwYXVzZSBwaHlzaWNzIGJ1dCB0aGUgd2lubmVyIGlzIG5vdFxyXG5cdFx0XHQvLyBraWxsZWQgYnkgdGhlIGJvbWJzIHRoYXQgYXJlIHN0aWxsIGZhbGxpbmcuXHJcblx0XHRcdHRoaXMucGxheWVyMS5tYWtlQnVsbGV0UHJvb2YoKTtcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLm1ha2VCdWxsZXRQcm9vZigpO1xyXG5cclxuXHRcdFx0Ly8gRGVjaWRpbmcgd2hpY2ggb25lIGlzIHRoZSB3aW5uZXIgKHRoZSBvbmUgbm90IGRlYWQpXHJcblx0XHRcdGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgJiYgIXRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cdFx0XHRcdC8vIFdpbm5lcnMgYXJlIHVzZXJzIG5vdCBwbGF5ZXJzXHJcblx0XHRcdFx0dGhpcy53aW5uZXIgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnBsYXllcjEuaXNEZWFkKCkgJiYgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcblx0XHRcdFx0dGhpcy53aW5uZXIgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxheWVyMi5pc0RlYWQoKSAmJiB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHRcdFx0XHQvLyBOdWxsaW5nIHRoZSB3aW5uZXIgaWYgdGhlcmUncyBubyB3aW5uZXIgYXQgYWxsXHJcblx0XHRcdFx0Ly8gVHlwaWNhbGx5IHRoaXMgc2hvdWxkbid0IGV2ZXIgaGFwcGVuIGJ1dCB3aG8ga25vd3MuLi5cclxuXHRcdFx0XHQvLyBDaGVjayBpbiBuZXh0IHNjZW5lIGlmIHdpbm5lciBpcyB0cnV0aHksIHByaW50aW5nIGFsdCB0ZXh0XHJcblx0XHRcdFx0Ly8gaWYgbm90IChsaWtlIGlmIG51bGwpLlxyXG5cdFx0XHRcdHRoaXMud2lubmVyID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5kYXRhLnNldCgnd2lubmVyJywgdGhpcy53aW5uZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gMyBzZWNvbmRzIGRlbGF5IGJlZm9yZSBsYXVuY2hpbmcgdGhlIG5leHQgc2NlbmVcclxuXHRcdFx0dGhpcy5uZXdTY2VuZVRpbWVkRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRcdGRlbGF5OiAzMDAwLFxyXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHQvL3RoaXMuc291bmQuc3RvcEFsbCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnR2FtZW92ZXInLCB0aGlzLmRhdGEuZ2V0QWxsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvZ3VpJztcclxuaW1wb3J0IHsgcGFyc2VkU3RvcmFnZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG5cdGFjdGl2ZTogZmFsc2UsXHJcblx0dmlzaWJsZTogZmFsc2UsXHJcblx0a2V5OiAnR2FtZW92ZXInXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVvdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuXHRwcml2YXRlIG1haW5NZXNzYWdlOiBzdHJpbmc7XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxpbmdTdG9yYWdlKCkge1xyXG5cdFx0aWYgKHBhcnNlZFN0b3JhZ2UoKSkge1xyXG5cdFx0XHRjb25zdCBwYXJzZWRVc2VycyA9IHBhcnNlZFN0b3JhZ2UoKTtcclxuXHRcdFx0aWYodGhpcy5kYXRhLnZhbHVlcy53aW5uZXIuaWQgPT09IHBhcnNlZFVzZXJzLm1haW5Vc2VyLmlkKSB7XHJcblx0XHRcdFx0cGFyc2VkVXNlcnMubWFpblVzZXIuc2Vzc2lvbldpbnMgKz0gMTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGEudmFsdWVzLndpbm5lci5pZCA9PT0gcGFyc2VkVXNlcnMuc2Vjb25kYXJ5VXNlci5pZCkge1xyXG5cdFx0XHRcdHBhcnNlZFVzZXJzLnNlY29uZGFyeVVzZXIuc2Vzc2lvbldpbnMgKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdob2FmaWdodCcsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFVzZXJzKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdChnYW1lU2NlbmVEYXRhKSB7XHJcblx0XHRcclxuXHRcdGlmIChnYW1lU2NlbmVEYXRhLndpbm5lcikge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5kYXRhLnNldCgnd2lubmVyJywgZ2FtZVNjZW5lRGF0YS53aW5uZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5tYWluTWVzc2FnZSA9IGAke3RoaXMuZGF0YS52YWx1ZXMud2lubmVyLnVzZXJuYW1lfSByZW1wb3J0ZSBsYSBwYXJ0aWUgIWA7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmhhbmRsaW5nU3RvcmFnZSgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHR0aGlzLm1haW5NZXNzYWdlID0gXCJPdXBzIG9uIGRpcmFpdCBxdSdpbCBuJ3kgYWkgcGFzIGRlIGdhZ25hbnQgIVwiO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0Z2V0R2FtZUhlaWdodCh0aGlzKS8yLCBcclxuXHRcdFx0J2JhY2tncm91bmRGb3JHVUlTY2VuZXMnXHJcblx0XHQpO1xyXG5cclxuXHRcdEd1aS50aXRsZSh7IHNjZW5lOiB0aGlzLCB0ZXh0OiBcIkZpbiBEZSBQYXJ0aWVcIiB9KTtcclxuXHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IFxyXG5cdFx0XHRzY2VuZTogdGhpcywgXHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0eTogMjAwLFxyXG5cdFx0XHR0ZXh0OiB0aGlzLm1haW5NZXNzYWdlXHJcblx0XHR9KTtcclxuXHJcblx0XHRHdWkubWFpbkJ0bih7XHJcblx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHR0ZXh0OiBcIlJFSk9VRVJcIixcclxuXHRcdFx0c3RvcFNvdW5kczogZmFsc2UsXHJcblx0XHRcdHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRuZXdTY2VuZUtleTogJ01lbnUnXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC1zY2VuZSc7XHJcbmltcG9ydCB7IE1lbnVTY2VuZSB9IGZyb20gJy4vbWVudS1zY2VuZSc7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XHJcbmltcG9ydCB7IEdhbWVvdmVyU2NlbmUgfSBmcm9tICcuL2dhbWVvdmVyLXNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuXHRCb290U2NlbmUsXHJcblx0TWVudVNjZW5lLFxyXG5cdEdhbWVTY2VuZSxcclxuXHRHYW1lb3ZlclNjZW5lXHJcbl07IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvZ3VpJztcclxuXHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ01lbnUnXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG5cclxuXHRwcml2YXRlIGxldmVsVGh1bWI6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIGNoYXJhY3RlclRodW1iczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkltYWdlPjtcclxuXHJcblxyXG5cdHByaXZhdGUgZHJhd0JhY2tncm91bmQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMpLzIsXHJcblx0XHRcdCdiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzJ1xyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFRodW1ibmFpbHMoZGF0YSk6IHZvaWQge1xyXG5cdFx0Ly8gSW5pdCB0aGUgbGV2ZWwgdGh1bWJuYWlsIG9uIHRoZSAxc3QgbGV2ZWwgdGh1bWJuYWlsIChpbmRleCAwKVxyXG5cdFx0dGhpcy5sZXZlbFRodW1iID0gdGhpcy5hZGQuaW1hZ2UoMjAwLCAzMDAsIGRhdGEudmFsdWVzLmxldmVsc1swXS50aHVtYm5haWxLZXkpO1xyXG5cclxuXHRcdC8vIEluaXQgdGhlIDIgY2hhcmFjdGVycyB0aHVtYm5haWxzIHdpdGggdGhlIDFzdCBjaGFyYWN0ZXIgdGh1bWJuYWlsLlxyXG5cdFx0dGhpcy5jaGFyYWN0ZXJUaHVtYnMgPSBbXHJcblx0XHRcdHRoaXMuYWRkLmltYWdlKDY1MCwgMzAwLCBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdLnRodW1ibmFpbEtleSksXHJcblx0XHRcdHRoaXMuYWRkLmltYWdlKDg1MCwgMzAwLCBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdLnRodW1ibmFpbEtleSlcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByaW50VGl0bGVzKCk6IHZvaWQge1xyXG5cdFx0R3VpLnRpdGxlKHsgc2NlbmU6IHRoaXMsIHRleHQ6IFwiTUVOVVwiIH0pO1xyXG5cdFx0R3VpLnNlY3Rpb25UaXRsZSh7IHNjZW5lOiB0aGlzLCB4OiAyMDAsIHk6IDEzMCwgdGV4dDogXCJUZXJyYWluXCIgfSk7XHJcblx0XHRHdWkuc2VjdGlvblRpdGxlKHsgc2NlbmU6IHRoaXMsIHg6IDc1MCwgeTogMTMwLCB0ZXh0OiBcIlBlcnNvbm5hZ2VzXCIgfSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByaW50VGV4dHMoKTogdm9pZCB7XHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IHNjZW5lOiB0aGlzLCB4OiA2NTAsIHk6IDIxMCwgdGV4dDogXCJKb3VldXIgMVwiIH0pO1xyXG5cdFx0R3VpLmN1c3RvbVRleHQoeyBzY2VuZTogdGhpcywgeDogODUwLCB5OiAyMTAsIHRleHQ6IFwiSm91ZXVyIDJcIiB9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFVzZXJzQ2hvaWNlcyhkYXRhKTogdm9pZCB7XHJcblx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgZGF0YS52YWx1ZXMudXNlcnMpIHtcclxuXHRcdFx0dXNlci5sZXZlbEluc3RhbmNlID0gZGF0YS52YWx1ZXMubGV2ZWxzWzBdO1xyXG5cdFx0XHR1c2VyLmNoYXJhY3Rlckluc3RhbmNlID0gZGF0YS52YWx1ZXMuY2hhcmFjdGVyc1swXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcdFx0XHJcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRpbml0KGJvb3RTY2VuZURhdGEpIHtcclxuXHJcblx0XHRpZiAoYm9vdFNjZW5lRGF0YS51c2VycyAhPT0gdW5kZWZpbmVkICYmIFxyXG5cdFx0Ym9vdFNjZW5lRGF0YS5jaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQgJiYgXHJcblx0XHRib290U2NlbmVEYXRhLmxldmVscyAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsYm9vdFNjZW5lRGF0YS51c2Vycyk7XHJcblx0XHRcdHRoaXMuZGF0YS5zZXQoJ2NoYXJhY3RlcnMnLCBib290U2NlbmVEYXRhLmNoYXJhY3RlcnMpO1xyXG5cdFx0XHR0aGlzLmRhdGEuc2V0KCdsZXZlbHMnLCBib290U2NlbmVEYXRhLmxldmVscyk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgZ2V0dGluZyB1c2VycywgY2hhcmFjdGVycyBhbmQgbGV2ZWxzIGRhdGEgZnJvbSBCb290IFNjZW5lXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5pdFVzZXJzQ2hvaWNlcyh0aGlzLmRhdGEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NlbmUncyBjcmVhdGUgY2FsbGJhY2suXHJcblx0ICogQHBhcmFtIGRhdGEgRGF0YSBvYmplY3QgZnJvbSB0aGUgQm9vdCBTY2VuZSB0aGF0IGJlbG9uZ3MgdG8gdGhlIERhdGEgTWFuYWdlci5cclxuXHQgKiBIZXJlIHRoaXMgZGF0YSB3aWxsIGJlIG1vZGlmaWVkOiBjaGFyYWN0ZXJzIChlbGVtZW50cyBvZiBkYXRhLmNoYXJhY3RlcnMpIFxyXG5cdCAqIGFuZCBsZXZlbHMgKGVsZW1lbnRzIG9mIGRhdGEubGV2ZWxzKSBpbnN0YW5jZXMgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgXHJcblx0ICogdXNlcnMgaW5zdGFuY2VzIChkYXRhLnVzZXJzKS5cclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcblx0XHRcclxuXHRcdHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuXHRcdHRoaXMuaW5pdFRodW1ibmFpbHModGhpcy5kYXRhKTtcclxuXHRcdHRoaXMucHJpbnRUaXRsZXMoKTtcclxuXHRcdHRoaXMucHJpbnRUZXh0cygpO1xyXG5cclxuXHRcdC8vIFNsaWRlIGJ1dHRvbiBuwrAxLiBUaGlzIGlzIHdoZXJlIFVzZXIgMSAmIDIgY2hvb3NlIHRoZWlyIGxldmVsLiBcclxuXHRcdC8vIE1vZGlmaWVzIHRoZSBsZXZlbCB0aHVtYm5haWwgdGV4dHVyZSAod2l0aCB0ZXh0dXJlIGtleXMpIG9uIGNsaWNrLlxyXG5cdFx0R3VpLnNsaWRlQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0eDogMjAwLCBcclxuXHRcdFx0eTogNDUwLCBcclxuXHRcdFx0dGV4dDogXCJTdWl2YW50XCIsXHJcblx0XHRcdGltZzogdGhpcy5sZXZlbFRodW1iLFxyXG5cdFx0XHR0ZXh0dXJlS2V5czogdGhpcy5kYXRhLnZhbHVlcy5sZXZlbHMubWFwKGxldmVsID0+IGxldmVsLnRodW1ibmFpbEtleSksXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBsZXZlbCBvZiB0aGlzLmRhdGEudmFsdWVzLmxldmVscykge1xyXG5cdFx0XHRcdFx0aWYgKGxldmVsLnRodW1ibmFpbEtleSA9PT0gdGhpcy5sZXZlbFRodW1iLnRleHR1cmUua2V5KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0ubGV2ZWxJbnN0YW5jZSA9IGxldmVsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmxldmVsSW5zdGFuY2UgPSBsZXZlbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdFxyXG5cdFx0Ly8gU2xpZGUgYnV0dG9uIG7CsDIuIFRoaXMgaXMgd2hlcmUgVXNlciAxIGNob29zZSBpdHMgY2hhcmFjdGVyLiBcclxuXHRcdC8vIE1vZGlmaWVzIHRoZSB0ZXh0dXJlIG9mIHRoZSBjaGFyYWN0ZXIgdGh1bWJuYWlsIG7CsDEgb24gY2xpY2suXHJcblx0XHRHdWkuc2xpZGVCdG4oeyBcclxuXHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHR4OiA2NTAsIFxyXG5cdFx0XHR5OiAzNzAsIFxyXG5cdFx0XHR0ZXh0OiBcIlN1aXZhbnRcIixcclxuXHRcdFx0aW1nOiB0aGlzLmNoYXJhY3RlclRodW1ic1swXSxcclxuXHRcdFx0dGV4dHVyZUtleXM6IHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycy5tYXAoYyA9PiBjLnRodW1ibmFpbEtleSksXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBjIG9mIHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycykge1xyXG5cdFx0XHRcdFx0aWYgKGMudGh1bWJuYWlsS2V5ID09PSB0aGlzLmNoYXJhY3RlclRodW1ic1swXS50ZXh0dXJlLmtleSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmNoYXJhY3Rlckluc3RhbmNlID0gYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFNsaWRlIGJ1dHRvbiBuwrAzLiBUaGlzIGlzIHdoZXJlIFVzZXIgMiBjaG9vc2UgaXRzIGNoYXJhY3Rlci4gXHJcblx0XHQvLyBNb2RpZmllcyB0aGUgdGV4dHVyZSBvZiB0aGUgY2hhcmFjdGVyIHRodW1ibmFpbCBuwrAyIG9uIGNsaWNrLlxyXG5cdFx0R3VpLnNsaWRlQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0eDogODUwLCBcclxuXHRcdFx0eTogMzcwLCBcclxuXHRcdFx0dGV4dDogXCJTdWl2YW50XCIsXHJcblx0XHRcdGltZzogdGhpcy5jaGFyYWN0ZXJUaHVtYnNbMV0sXHJcblx0XHRcdHRleHR1cmVLZXlzOiB0aGlzLmRhdGEudmFsdWVzLmNoYXJhY3RlcnMubWFwKGMgPT4gYy50aHVtYm5haWxLZXkpLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdGZvciAoY29uc3QgYyBvZiB0aGlzLmRhdGEudmFsdWVzLmNoYXJhY3RlcnMpIHtcclxuXHRcdFx0XHRcdGlmIChjLnRodW1ibmFpbEtleSA9PT0gdGhpcy5jaGFyYWN0ZXJUaHVtYnNbMV0udGV4dHVyZS5rZXkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXS5jaGFyYWN0ZXJJbnN0YW5jZSA9IGM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0Ly8gU2V0IHRoZSBNT0RJRklFRCB1c2VycyBkYXRhIGZyb20gdGhlIGJvb3Qgc2NlbmUgdG8gdGhpcyBhY3R1YWwgc2NlbmUuXHJcblx0XHQvLyBNb2RpZmllZCBiZWNhdXNlIGxldmVsIGFuZCBjaGFyYWN0ZXJzIGluc3RhbmNlcyBoYXMgYmVlbiBsaW5rZWQgdG9cclxuXHRcdC8vIGVhY2ggdXNlcnMgdGhhbmtzIHRvIHRoZSBzbGlkZSBidXR0b25zIGNhbGxiYWNrcyBhbmQgdGhlIHRodW1ibmFpbHMuXHJcblx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsIHRoaXMuZGF0YS52YWx1ZXMudXNlcnMpO1xyXG5cclxuXHJcblx0XHRHdWkubWFpbkJ0bih7XHJcblx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHR0ZXh0OiBcIlNUQVJUXCIsXHJcblx0XHRcdHN0b3BTb3VuZHM6IHRydWUsXHJcblx0XHRcdHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRuZXdTY2VuZUtleTogJ0dhbWUnLFxyXG5cdFx0XHQvLyBTZW5kaW5nIHRoaXMgc2NlbmUncyBkYXRhICg9IHVzZXJzKSB0byB0aGUgR2FtZSBTY2VuZS5cclxuXHRcdFx0c2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKClcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==