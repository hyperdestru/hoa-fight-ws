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
 * @param pFilePath
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
// !!! Add multiple keys at once: 
// this.keys = this.input.keyboard.addKeys('ENTER,W,A,S,D')
// this.keys.ENTER.isDown...
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
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) - 50, 'button', Gui.mainBtnStyle, params.text).addListener('click').on('click', function () {
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
    Gui.mainBtnStyle = "width: 150px; \n\t\theight: 49px; \n\t\tfont-family: Grobold,Arial; \n\t\tcolor: #000000; \n\t\tfont-size: 25px; \n\t\tbackground-color: #d2d2d2; \n\t\tborder: none";
    Gui.secondaryBtnStyle = "width: 100px; \n\t\theight: 33px; \n\t\tfont-family: Grobold, Arial, sans-serif; \n\t\tcolor: #000000; \n\t\tfont-size: 17px; \n\t\tbackground-color: #d2d2d2; \n\t\tborder: none";
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
        if (params.user.screenSide === -1) {
            this.avatar = params.scene.add.image(0, 35, params.user.characterInstance.thumbnailKey).setOrigin(0, 0);
            this.text = params.scene.add.dom(0, 0, 'h5', this.textStyle, params.user.username + " | Rang " + params.user.rank).setOrigin(0, 0);
        }
        else if (params.user.screenSide === 1) {
            this.avatar = params.scene.add.image(helpers_1.getGameWidth(params.scene), 35, params.user.characterInstance.thumbnailKey).setOrigin(1, 0);
            this.text = params.scene.add.dom(helpers_1.getGameWidth(params.scene), 0, 'h5', this.textStyle, params.user.username + " | Rang " + params.user.rank).setOrigin(1, 0);
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
        if (this.health > 0) {
            this.health -= 20;
            this.healthBar.decrease(20);
            this.setState(this.STATES.HURT);
        }
    };
    Player.prototype.initSounds = function () {
        this.jumpSound = this.scene.sound.add('jumpSound');
        this.shootSound = this.scene.sound.add('shootSound');
    };
    Player.prototype.initVitals = function () {
        this.health = 100;
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
        this._score = params.score;
        this._ratio = params.ratio;
        this._rank = params.rank;
        this._avatar = params.avatar;
        this._isGuest = params.isGuest;
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
    Object.defineProperty(User.prototype, "score", {
        /**
         * User's score from DB.
         */
        get: function () {
            return this._score;
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
    Object.defineProperty(User.prototype, "rank", {
        /**
         * User's rank from DB.
         */
        get: function () {
            return this._rank;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "avatar", {
        /**
         * User's avatar filepath from DB.
         */
        get: function () {
            return this._avatar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isGuest", {
        /**
         * Whether this user is a guest (created specificaly for the game)
         * or not (the user connected to the website, already exists in DB).
         */
        get: function () {
            return this._isGuest;
        },
        set: function (v) {
            this._isGuest = v;
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
    /**
     * Increment the user's score (when he win a game)
     * @return: the new incremented score.
     */
    User.prototype.updateScore = function () {
        this._score = this.score + 1;
        return this._score;
    };
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
                id: 1,
                username: 'Foo10',
                rank: 1,
                score: 10,
                ratio: 90,
                avatar: '',
                isGuest: false,
                screenSide: -1
            }),
            new user_1.User({
                id: 2,
                username: 'Boo20',
                rank: 2,
                score: 1,
                ratio: 80,
                avatar: '',
                isGuest: false,
                screenSide: 1
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
        gui_1.Gui.title({ scene: this, text: "HOA FIGHT" });
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
        this.data.values.users[0].playerInstance = this.player1;
        this.data.values.users[1].playerInstance = this.player2;
        this.data.set('users', this.data.values.users);
    };
    GameScene.prototype.update = function () {
        var _this = this;
        this.player1.update();
        this.player2.update();
        // Winner handling.
        // All this is dangerous and not acceptable. The new scene start timed event 
        // is asynchronous so I don't have any certainty that a winner will be set
        // correctly before scene transfer. Basically right now it works cause
        // of the generous timeout of 5 seconds.
        if (this.player1.isDead() || this.player2.isDead()) {
            if (this.player1.isDead() && !this.player2.isDead()) {
                this.winner = this.data.values.users[1];
            }
            else if (!this.player1.isDead() && this.player2.isDead()) {
                this.winner = this.data.values.users[0];
            }
            else if (this.player2.isDead() && this.player2.isDead()) {
                this.winner = null;
            }
            this.data.set('winner', this.winner);
            this.newSceneTimedEvent = this.time.addEvent({
                delay: 5000,
                callback: function () {
                    _this.sound.stopAll();
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
    GameoverScene.prototype.init = function (gameSceneData) {
        if (gameSceneData.winner !== undefined) {
            this.data.set('winner', gameSceneData.winner);
        }
    };
    GameoverScene.prototype.create = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'backgroundForGUIScenes');
        gui_1.Gui.title({ scene: this, text: "Fin De Partie" });
        gui_1.Gui.customText({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 200,
            text: this.data.values.winner.username + " remporte la partie !"
        });
        gui_1.Gui.customText({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 260,
            text: "Ancien score : " + this.data.values.winner.score
        });
        gui_1.Gui.customText({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 320,
            text: "Nouveau score : " + this.data.values.winner.updateScore()
        });
        gui_1.Gui.mainBtn({
            scene: this,
            text: "REJOUER",
            stopSounds: true,
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
        gui_1.Gui.customText({ scene: this, x: 650, y: 200, text: "Joueur 1" });
        gui_1.Gui.customText({ scene: this, x: 850, y: 200, text: "Joueur 2" });
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
            y: 400,
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
            y: 400,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvYm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvZ3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9odWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvbGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvdGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lb3Zlci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS1zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFD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LHFFQUFxRTtRQUNyRSx1RUFBdUU7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRy9DLFNBQUcsQ0FBQyxPQUFPLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxPQUFPO1lBQ2IsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFdBQVcsRUFBRSxNQUFNO1lBQ25CLHlEQUF5RDtZQUN6RCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDN0IsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxDQTNKOEIsTUFBTSxDQUFDLEtBQUssR0EySjFDO0FBM0pZLDhCQUFTIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gKiBXaGljaCBpcyBnZW5lcmFsbHkgZXF1YWwgdG8gdGhlIHdpZHRoIG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuXHRyZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcblx0cmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgZmlsZSBpbiBhamF4IGFuZCByZXR1cm4gaXRzIHJlc3BvbnNlIHRleHQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGUgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG5cdGxldCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0bGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuXHRyYXdGaWxlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byBsb2FkIGZpbGUuXCIpO1xyXG5cdH1cclxuXHJcblx0cmF3RmlsZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuXHRcdFx0aWYgKHJhd0ZpbGUuc3RhdHVzID09PSAyMDAgfHwgcmF3RmlsZS5zdGF0dXMgPT09IDApIHtcclxuXHRcdFx0XHRyZXN1bHQgPSByYXdGaWxlLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmF3RmlsZS5vcGVuKFwiR0VUXCIsIHBGaWxlUGF0aCwgZmFsc2UpO1xyXG5cdHJhd0ZpbGUuc2VuZChudWxsKTtcclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuXHRsZXQgcmF3R3JpZCA9IHRoaXMubG9hZEZpbGUocEZpbGVQYXRoKTtcclxuXHRyZXR1cm4gcmF3R3JpZC5zcGxpdCgnXFxuJykubWFwKGl0ZW0gPT4gaXRlbS5zcGxpdCgnJykpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuXHRjdXN0b21CbHVlOiB7IHN0cmluZzogJyM0MzQ2ZjknLCBoZXg6IDB4NDM0NmY5IH0sXHJcblx0Y3VzdG9tR3JlZW46IHsgc3RyaW5nOiAgJyM3NmVhNjQnLCBoZXg6IDB4NzZlYTY0IH0sXHJcblx0dmlicmFudEdyZWVuOiB7IHN0cmluZzogJyMyNWY5NDUnLCBoZXg6IDB4MjVmOTQ1IH0sXHJcblx0Y3VzdG9tUmVkOiB7IHN0cmluZzogJyNlYTJkMjMnLCBoZXg6IDB4ZWEyZDIzIH0sXHJcblx0d2hpdGU6IHsgc3RyaW5nOiAnI2ZmZmZmZicsIGhleDogMHhmZmZmZmYgfVxyXG59XHJcblxyXG4vLyAhISEgQWRkIG11bHRpcGxlIGtleXMgYXQgb25jZTogXHJcbi8vIHRoaXMua2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5cygnRU5URVIsVyxBLFMsRCcpXHJcbi8vIHRoaXMua2V5cy5FTlRFUi5pc0Rvd24uLi5cclxuZXhwb3J0IGNvbnN0IENPTlRST0xLRVlTID0ge1xyXG5cdFBMQVlFUjoge1xyXG5cdFx0U0VUMToge1xyXG5cdFx0XHRyaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlJJR0hULFxyXG5cdFx0XHRsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCxcclxuXHRcdFx0anVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlVQLFxyXG5cdFx0XHRzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNISUZUXHJcblx0XHR9LFxyXG5cclxuXHRcdFNFVDI6IHtcclxuXHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxyXG5cdFx0XHRsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUSxcclxuXHRcdFx0anVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlMsXHJcblx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0VcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcyc7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG5cclxuXHR0aXRsZTogJ0hvYSBGaWdodCcsXHJcblxyXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cclxuXHRzY2FsZToge1xyXG5cdFx0d2lkdGg6IDEwMjQsXHJcblx0XHRoZWlnaHQ6IDY0MFxyXG5cdH0sXHJcblxyXG5cdGlucHV0OiB7XHJcblx0XHRnYW1lcGFkOiB0cnVlLFxyXG5cdFx0a2V5Ym9hcmQ6IHRydWVcclxuXHR9LFxyXG5cdFxyXG5cdHBoeXNpY3M6IHtcclxuXHRcdGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG5cdFx0YXJjYWRlOiB7XHJcblx0XHRcdGdyYXZpdHk6IHtcclxuXHRcdFx0XHR5OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdGRlYnVnOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0ZG9tOiB7XHJcblx0XHRjcmVhdGVDb250YWluZXI6IHRydWVcclxuXHR9LFxyXG5cclxuXHRwYXJlbnQ6ICdnYW1lJyxcclxuXHRcclxuXHRzY2VuZTogU2NlbmVzXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb21iIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkltYWdlIHtcclxuXHJcblx0cHJpdmF0ZSBpc091dCgpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnggPiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgfHwgXHJcblx0XHR0aGlzLnkgPiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIHx8IFxyXG5cdFx0dGhpcy54IDwgMCB8fCB0aGlzLnkgPCAwKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuXHRcdHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblx0XHR0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEJvdW5jZSgxKTtcclxuXHRcdHRoaXMuc2V0VmVsb2NpdHkoUGhhc2VyLk1hdGguQmV0d2VlbigtMjAwLCAyMDApLCAyMCk7XHJcblx0XHR0aGlzLnNldEdyYXZpdHlZKDEwMDApO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuaXNPdXQoKSkge1xyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJCb21iIGRlc3Ryb3llZCBjYXVzZSBvdXQgb2Ygd29ybGQgYm91bmRzXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudCBhIEdhbWUgQ2hhcmFjdGVyLCBub3QgdG8gYmUgY29uZnVzZWQgd2l0aCB0aGUgXCJQbGF5ZXJcIi5cclxuICogQSBQbGF5ZXIgaW50ZWdyYXRlcyBhIENoYXJhY3Rlci4gQSBDaGFyYWN0ZXIgaXMganVzdCBhYm91dCBob2xkaW5nIGRhdGEgOlxyXG4gKiB0ZXh0dXJlIGtleXMsIG1ldGFkYXRhLCB2b2ljZXMgZXRjLiBOb3RoaW5nIHRvIGJlIGNvbnRyb2xsZWQgd2l0aCB5b3VyXHJcbiAqIGtleWJvYXJkIGhlcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuXHJcblx0Ly8gVmVyeSBpbXBvcnRhbnQgZmllbGQsIHRpZ2h0bHkgbGlua2VkIHRvIHRoZSBrZXlzIHlvdSBwcm92aWRlIGluIHBhY2suanNvblxyXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSBkZXRhaWxzOiBvYmplY3Q7XHJcblx0cHJpdmF0ZSBzdGF0czogb2JqZWN0O1xyXG5cclxuXHQvLyBGaWVsZHMgYnVpbHQgdXBvbiB0aGUgSWQgcHJvdmlkZWQgYXQgaW5zdGFuY2lhdGlvbi5cclxuXHRwcml2YXRlIF90ZXh0dXJlS2V5OiBzdHJpbmc7XHJcblx0Ly8gQ2hhcmFjdGVyJ3MgYXZhdGFyXHJcblx0cHJpdmF0ZSBfdGh1bWJuYWlsS2V5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfc291bmRLZXk6IHN0cmluZztcclxuXHJcblxyXG5cdHB1YmxpYyBnZXQgdGV4dHVyZUtleSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RleHR1cmVLZXk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHRodW1ibmFpbEtleSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RodW1ibmFpbEtleTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgc291bmRLZXkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9zb3VuZEtleTtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuXHRcdGlkOiBudW1iZXI7XHJcblx0XHRkZXRhaWxzPzogb2JqZWN0O1xyXG5cdFx0c3RhdHM/OiBvYmplY3Q7XHJcblx0fSkge1xyXG5cclxuXHRcdHRoaXMuaWQgPSBwYXJhbXMuaWQ7XHJcblx0XHR0aGlzLmRldGFpbHMgPSBwYXJhbXMuZGV0YWlscztcclxuXHRcdHRoaXMuc3RhdHMgPSBwYXJhbXMuc3RhdHM7XHJcblxyXG5cdFx0dGhpcy5fdGV4dHVyZUtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9YDtcclxuXHRcdHRoaXMuX3RodW1ibmFpbEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9QXZhdGFyYDtcclxuXHRcdHRoaXMuX3NvdW5kS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1Tb3VuZGA7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHdWkge1xyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBtYWluQnRuU3R5bGUgPSBcclxuXHRcdGB3aWR0aDogMTUwcHg7IFxyXG5cdFx0aGVpZ2h0OiA0OXB4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLEFyaWFsOyBcclxuXHRcdGNvbG9yOiAjMDAwMDAwOyBcclxuXHRcdGZvbnQtc2l6ZTogMjVweDsgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyOyBcclxuXHRcdGJvcmRlcjogbm9uZWBcclxuXHQ7XHJcblxyXG5cdFxyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgc2Vjb25kYXJ5QnRuU3R5bGUgPSBcclxuXHRcdGB3aWR0aDogMTAwcHg7IFxyXG5cdFx0aGVpZ2h0OiAzM3B4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZjsgXHJcblx0XHRjb2xvcjogIzAwMDAwMDsgXHJcblx0XHRmb250LXNpemU6IDE3cHg7IFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2QyZDJkMjsgXHJcblx0XHRib3JkZXI6IG5vbmVgXHJcblx0O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgc3R5bGl6ZWQgQnV0dG9uIERPTSBFbGVtZW50IHdpdGggYSBjbGljayBldmVudCBsaXN0ZW5lciBhdHRhY2hlZFxyXG5cdCAqIHRvIGl0LiBUaGUgZXZlbnQgbGlzdGVuZXIgY2FsbGJhY2sgc3RhcnRzIGEgbmV3IHNjZW5lIHVzaW5nIHRoZSBzY2VuZSBrZXlcclxuXHQgKiBwYXNzZWQgaW4gYXJndW1lbnRzIGFuZCBzdG9wcyBhbGwgc291bmRzIGlmIHN0b3BTb3VuZHMgc2V0IHRvIHRydWUuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBtYWluQnRuKHBhcmFtczoge1xyXG5cdFx0IHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0IHRleHQ6IHN0cmluZzsgXHJcblx0XHQgc3RvcFNvdW5kczogYm9vbGVhbjsgXHJcblx0XHQgc2NlbmVQbHVnaW46IFBoYXNlci5TY2VuZXMuU2NlbmVQbHVnaW47IFxyXG5cdFx0IG5ld1NjZW5lS2V5OiBzdHJpbmc7XHJcblx0XHQgc2NlbmVEYXRhPzogb2JqZWN0O1xyXG5cdH0pOiB2b2lkIHtcclxuXHJcblx0XHRwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuXHJcblx0XHRcdGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLzIsXHJcblx0XHRcdGdldEdhbWVIZWlnaHQocGFyYW1zLnNjZW5lKS01MCxcclxuXHRcdFx0J2J1dHRvbicsXHJcblx0XHRcdEd1aS5tYWluQnRuU3R5bGUsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblxyXG5cdFx0KS5hZGRMaXN0ZW5lcignY2xpY2snKS5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAocGFyYW1zLnN0b3BTb3VuZHMpIHtcclxuXHRcdFx0XHRwYXJhbXMuc2NlbmUuc291bmQuc3RvcEFsbCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmVQbHVnaW4uc3RhcnQocGFyYW1zLm5ld1NjZW5lS2V5LCBwYXJhbXMuc2NlbmVEYXRhKTtcclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJ1dHRvbiB0aGF0IGNoYW5nZXMgYW4gaW1hZ2UgKGltZykgdGV4dHVyZSB3aXRoIGFub3RoZXIgKHRleHR1cmVzKSxcclxuXHQgKiBvbmUgYnkgb25lLiBMaWtlIGEgc2xpZGVzaG93LlxyXG5cdCAqIEBwYXJhbSBpbWc6IGEgcGhhc2VyIGdhbWUgb2JqZWN0IGltYWdlIHRoYXQgYWN0IGFzIGEgY29udGFpbmVyIGluIGEgd2F5LlxyXG5cdCAqIEBwYXJhbSB0ZXh0dXJlczogdGhlIHRleHR1cmVzIHRvIGFwcGVuZCB0byBpbWcuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBzbGlkZUJ0bihwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdFx0eDogbnVtYmVyO1xyXG5cdFx0eTogbnVtYmVyO1xyXG5cdFx0dGV4dDogc3RyaW5nO1xyXG5cdFx0aW1nOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcblx0XHR0ZXh0dXJlS2V5czogQXJyYXk8c3RyaW5nPjtcclxuXHRcdGNhbGxiYWNrPzogRnVuY3Rpb247XHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdGxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cclxuXHRcdFx0cGFyYW1zLngsXHJcblx0XHRcdHBhcmFtcy55LFxyXG5cdFx0XHQnYnV0dG9uJyxcclxuXHRcdFx0R3VpLnNlY29uZGFyeUJ0blN0eWxlLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cclxuXHRcdCkuYWRkTGlzdGVuZXIoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudEluZGV4IDwgcGFyYW1zLnRleHR1cmVLZXlzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXgrKztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXggPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJhbXMuaW1nLnNldFRleHR1cmUocGFyYW1zLnRleHR1cmVLZXlzW2N1cnJlbnRJbmRleF0pO1xyXG5cclxuXHRcdFx0aWYgKHBhcmFtcy5jYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cGFyYW1zLmNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyB0aXRsZShwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHRleHQ6IHN0cmluZyA7XHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKS8yLFxyXG5cdFx0XHQyNCxcclxuXHRcdFx0J2gzJyxcclxuXHRcdFx0YGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdFx0Zm9udC1zaXplOiA0MHB4OyBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmYCxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBzZWN0aW9uVGl0bGUocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHRleHQ6IHN0cmluZzsgXHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRwYXJhbXMueCxcclxuXHRcdFx0cGFyYW1zLnksXHJcblx0XHRcdCdoNCcsXHJcblx0XHRcdGBjb2xvcjogI2ZmZmZmZjsgXHJcblx0XHRcdGZvbnQtc2l6ZTogMzBweDsgXHJcblx0XHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZmAsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY3VzdG9tVGV4dChwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHg6IG51bWJlcjsgXHJcblx0XHR5OiBudW1iZXI7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdHBhcmFtcy54LFxyXG5cdFx0XHRwYXJhbXMueSxcclxuXHRcdFx0J3AnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7IFxyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxufSIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciB7XHJcblxyXG5cdHByaXZhdGUgYmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XHJcblx0cHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBoZWFsdGhWYWx1ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwZXJjZW50YWdlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlKHBBbW91bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgLT0gcEFtb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoVmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcblxyXG4gICAgICAgIHJldHVybiAodGhpcy5oZWFsdGhWYWx1ZSA9PT0gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIEJhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLndoaXRlLmhleCk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoVmFsdWUgPiAzMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbUJsdWUuaGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbVJlZC5oZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWx0aFdpZHRoID0gTWF0aC5mbG9vcih0aGlzLnBlcmNlbnRhZ2UgKiB0aGlzLmhlYWx0aFZhbHVlKTtcclxuXHRcdC8vIFRoZSBhY3R1YWwgaGVhbHRoIGphdWdlIHlvdSBzZWUgZGVjcmVhc2luZ1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCBoZWFsdGhXaWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSkge1xyXG4gICAgICAgIC8vIEVxdWl2YWxlbnQgdG8gdGhpcy5iYXIgPSBwYXJhbXMuc2NlbmUuYWRkLmdyYXBoaWNzKClcclxuICAgICAgICB0aGlzLmJhciA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3MocGFyYW1zLnNjZW5lKTtcclxuICAgICAgICB0aGlzLnggPSBwYXJhbXMueDtcclxuICAgICAgICB0aGlzLnkgPSBwYXJhbXMueTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTI7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSA9IDEwMDtcclxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2UgPSAxMDAvMTAwO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzLmJhcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGggfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSHVkIHtcclxuXHJcblx0cHJpdmF0ZSBhdmF0YXI6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIHRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5ET01FbGVtZW50O1xyXG5cdHByaXZhdGUgdGV4dFN0eWxlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0dXNlcjogVXNlcjtcclxuXHR9KSB7XHJcblxyXG5cdFx0dGhpcy50ZXh0U3R5bGUgPSBgXHJcblx0XHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbDsgXHJcblx0XHRcdG1hcmdpbjogMDsgXHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDsgXHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4XHJcblx0XHRgO1xyXG5cclxuXHRcdGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSAtMSkge1xyXG5cclxuXHRcdFx0dGhpcy5hdmF0YXIgPSBwYXJhbXMuc2NlbmUuYWRkLmltYWdlKFxyXG5cdFx0XHRcdDAsIFxyXG5cdFx0XHRcdDM1LCBcclxuXHRcdFx0XHRwYXJhbXMudXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXlcclxuXHRcdFx0KS5zZXRPcmlnaW4oMCwwKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudGV4dCA9IHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQnaDUnLFxyXG5cdFx0XHRcdHRoaXMudGV4dFN0eWxlLFxyXG5cdFx0XHRcdGAke3BhcmFtcy51c2VyLnVzZXJuYW1lfSB8IFJhbmcgJHtwYXJhbXMudXNlci5yYW5rfWBcclxuXHRcdFx0KS5zZXRPcmlnaW4oMCwwKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHBhcmFtcy51c2VyLnNjcmVlblNpZGUgPT09IDEpIHtcclxuXHJcblx0XHRcdHRoaXMuYXZhdGFyID0gcGFyYW1zLnNjZW5lLmFkZC5pbWFnZShcclxuXHRcdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSwgXHJcblx0XHRcdFx0MzUsIFxyXG5cdFx0XHRcdHBhcmFtcy51c2VyLmNoYXJhY3Rlckluc3RhbmNlLnRodW1ibmFpbEtleVxyXG5cdFx0XHQpLnNldE9yaWdpbigxLDApO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50ZXh0ID0gcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdFx0Z2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSksXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQnaDUnLFxyXG5cdFx0XHRcdHRoaXMudGV4dFN0eWxlLFxyXG5cdFx0XHRcdGAke3BhcmFtcy51c2VyLnVzZXJuYW1lfSB8IFJhbmcgJHtwYXJhbXMudXNlci5yYW5rfWBcclxuXHRcdFx0KS5zZXRPcmlnaW4oMSwwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSAnLi90aWxlbWFwJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEEgTGV2ZWwgY29uc2lzdHMgb2YgOiBhIGJhY2tncm91bmQgKyBhIG11c2ljIHRoZW1lICsgYSB0aWxlbWFwICsgYSBuYW1lICtcclxuICogYSB0aHVtYm5haWwuXHJcbiAqIEl0IGluaXRzIHRoZSBkaWZmZXJlbnQga2V5cyBuZWVkZWQgYW5kIGNyZWF0ZXMvZHJhdyB0aGUgYmFja2dyb3VuZCxcclxuICogdGhlIHRpbGVtYXAgKGJ5IGluc3RhbmNpYXRlIGl0KSBhbmQgcGxheSB0aGUgbXVzaWMgdGhlbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGV2ZWwge1xyXG5cclxuXHJcblx0cHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIF90aWxlbWFwOiBUaWxlbWFwO1xyXG5cdHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHJcblx0cHJpdmF0ZSBfdGh1bWJuYWlsS2V5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kS2V5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtdXNpY0tleTogc3RyaW5nO1xyXG5cclxuXHJcblx0cHVibGljIGdldCB0aWxlbWFwKCk6IFRpbGVtYXAge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbGVtYXA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB0aHVtYm5haWxLZXkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl90aHVtYm5haWxLZXk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuXHRcdGlkOiBudW1iZXI7XHJcblx0XHRuYW1lOiBzdHJpbmc7XHJcblx0fSkge1xyXG5cclxuXHRcdHRoaXMuaWQgPSBwYXJhbXMuaWQ7XHJcblx0XHR0aGlzLl9uYW1lID0gcGFyYW1zLm5hbWU7XHJcblx0XHR0aGlzLmJhY2tncm91bmRLZXkgPSBgbGV2ZWwke3RoaXMuaWR9QmFja2dyb3VuZGA7XHJcblx0XHR0aGlzLm11c2ljS2V5ID0gYGxldmVsJHt0aGlzLmlkfVRoZW1lYDtcclxuXHRcdHRoaXMuX3RodW1ibmFpbEtleSA9IGBsZXZlbCR7dGhpcy5pZH1UaHVtYm5haWxgO1xyXG5cclxuXHR9XHJcblxyXG5cdGNyZWF0ZShzY2VuZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIsXHJcblx0XHRcdGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMixcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kS2V5XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuX3RpbGVtYXAgPSBuZXcgVGlsZW1hcCh7XHJcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRpZDogdGhpcy5pZFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5zb3VuZC5hZGQodGhpcy5tdXNpY0tleSkucGxheSgpO1xyXG5cclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vcHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gJy4vaGVhbHRoQmFyJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9jaGFyYWN0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuXHRwcml2YXRlIF9wcm9qZWN0aWxlczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cdHByaXZhdGUgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcblxyXG5cdHByaXZhdGUgcmlnaHRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblx0cHJpdmF0ZSBsZWZ0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cdHByaXZhdGUganVtcEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuXHRwcml2YXRlIHNob290S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cdHByaXZhdGUgbGFzdFByZXNzZWRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblxyXG5cdHByaXZhdGUganVtcFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cdHByaXZhdGUgc2hvb3RTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcblx0cHJpdmF0ZSBsYXN0U2hvb3Q6IG51bWJlcjtcclxuXHRwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgdng6IG51bWJlcjtcclxuXHRwcml2YXRlIGdyYXZpdHlZOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBqdW1wVmVsb2NpdHk6IG51bWJlcjtcclxuXHRwcml2YXRlIGJvdW5jZTogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIHJlYWRvbmx5IFNUQVRFUyA9IHtcclxuXHRcdEFMSVZFOiAnQUxJVkUnLFxyXG5cdFx0SFVSVDogJ0hVUlQnLFxyXG5cdFx0RElFOiAnRElFJ1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBwcm9qZWN0aWxlcygpOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXAge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2plY3RpbGVzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRGVhZCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmhlYWx0aCA8PSAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGh1cnQoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5oZWFsdGggPiAwKSB7XHJcblxyXG5cdFx0XHR0aGlzLmhlYWx0aCAtPSAyMDtcclxuXHRcdFx0dGhpcy5oZWFsdGhCYXIuZGVjcmVhc2UoMjApO1xyXG5cclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5IVVJUKTtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRTb3VuZHMoKTogdm9pZCB7XHJcblx0XHR0aGlzLmp1bXBTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdqdW1wU291bmQnKTtcclxuXHRcdHRoaXMuc2hvb3RTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdzaG9vdFNvdW5kJyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRWaXRhbHMoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhlYWx0aCA9IDEwMDtcclxuXHR9XHJcblx0XHJcblx0cHJpdmF0ZSBpbml0UGh5c2ljcygpOiB2b2lkIHtcclxuXHRcdHRoaXMuZ3Jhdml0eVkgPSAxMDAwO1xyXG5cdFx0dGhpcy5qdW1wVmVsb2NpdHkgPSAtNjAwO1xyXG5cdFx0dGhpcy52eCA9IDE1MDtcclxuXHRcdHRoaXMuYm91bmNlID0gMC41O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhcHBseVBoeXNpY3MoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRHcmF2aXR5WSh0aGlzLmdyYXZpdHlZKTtcclxuXHRcdHRoaXMuc2V0Qm91bmNlKHRoaXMuYm91bmNlKTtcclxuXHRcdHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0Q29udHJvbHMocEtleXMpOiB2b2lkIHtcclxuXHRcdHRoaXMuanVtcEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydqdW1wJ10pO1xyXG5cdFx0dGhpcy5yaWdodEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydyaWdodCddKTtcclxuXHRcdHRoaXMubGVmdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydsZWZ0J10pO1xyXG5cdFx0dGhpcy5zaG9vdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydzaG9vdCddKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEhlYWx0aEJhcihwSGVhbHRoQmFyOiBIZWFsdGhCYXIpOiB2b2lkIHtcclxuXHRcdHRoaXMuaGVhbHRoQmFyID0gcEhlYWx0aEJhcjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFNob290aW5nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5sYXN0U2hvb3QgPSAwO1xyXG5cdFx0dGhpcy5fcHJvamVjdGlsZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcblx0XHRcdHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvb3QoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zY2VuZS50aW1lLm5vdyA+IHRoaXMubGFzdFNob290KSB7XHJcblx0XHRcdHRoaXMuX3Byb2plY3RpbGVzLmFkZChcclxuXHRcdFx0XHRuZXcgUHJvamVjdGlsZSh7XHJcblx0XHRcdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcclxuXHRcdFx0XHRcdC8vIENoYW5naW5nIGJ1bGxldCBzdGFydGluZyBwb2ludCBpZiBzcHJpdGUgaXMgZmxpcHBlZCBvbiBYIGF4aXNcclxuXHRcdFx0XHRcdHg6ICghdGhpcy5mbGlwWCkgPyB0aGlzLnggKyAyMCA6IHRoaXMueCAtIDIwLFxyXG5cdFx0XHRcdFx0eTogdGhpcy55ICsgMTEsXHJcblx0XHRcdFx0XHQvLyBCdWxsZXQgZGlyZWN0aW9uIChsZWZ0L3JpZ2h0KSBiYXNlZCBvbiBsYXN0IHByZXNzZWQga2V5XHJcblx0XHRcdFx0XHQvLyAoaS5lIGRpcmVjdGlvbiBvZiB0aGUgcGxheWVyKS4gRGVmYXVsdDogZ29lcyByaWdodC5cclxuXHRcdFx0XHRcdGRpcmVjdGlvbjogKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSkgPyAtMSA6IDEsXHJcblx0XHRcdFx0XHR0ZXh0dXJlS2V5OiAncHJvamVjdGlsZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmxhc3RTaG9vdCA9IHRoaXMuc2NlbmUudGltZS5ub3cgKyA1MDA7XHJcblx0XHRcdC8vIFBsYXlpbmcgc291bmQgaGVyZSBlbnN1cmVzIHVzIGl0IGlzIHBsYXllZCBvbmx5IG9uY2UgZXZlcnkgc2hvb3RcclxuXHRcdFx0dGhpcy5zaG9vdFNvdW5kLnBsYXkoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsaXBwaW5nIHRoZSBzcHJpdGUgb24gaXRzIFggYXhpcywgZGVwZW5kaW5nIG9uIHdoaWNoIGRpcmVjdGlvbiB5b3UgZ28uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBoYW5kbGVTcHJpdGVGbGlwcGluZygpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLmxlZnRLZXkpIHtcclxuXHRcdFx0Ly8gQ2hhbmdlZCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyBsZWZ0XHJcblx0XHRcdHRoaXMuZmxpcFggPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLnJpZ2h0S2V5KSB7XHJcblx0XHRcdC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0XHJcblx0XHRcdHRoaXMuZmxpcFggPSBmYWxzZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0XHJcblx0XHRcdHRoaXMuZmxpcFggPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlSnVtcGluZygpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmp1bXBLZXkuaXNEb3duKSB7XHJcblx0XHRcdGlmICh0aGlzLmJvZHkuYmxvY2tlZC5kb3duIHx8IHRoaXMuYm9keS50b3VjaGluZy5kb3duKSB7XHJcblx0XHRcdFx0dGhpcy5zZXRWZWxvY2l0eVkodGhpcy5qdW1wVmVsb2NpdHkpO1xyXG5cdFx0XHRcdHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZSBpZGxpbmcgKGRvaW5nIG5vdGhpbmcpIEFORCBpZGxpbmctc2hvb3RpbmcuXHJcblx0ICogVGhpcyBpbmNsdWRlcyBhbmltYXRpb24gcGxheWluZywgY2hlY2tpbmcga2V5IHByZXNzLCBzZXR0aW5nIHZlbG9jaXR5LFxyXG5cdCAqIGNyZWF0ZSBzaG9vdHMuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBoYW5kbGVJZGxpbmcoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuXHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUlETEVgLCB0cnVlKTtcclxuXHJcblx0XHQvLyBJZGxpbmctU2hvb3RpbmdcclxuXHRcdGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1JRExFX1NIT09UYCwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuc2hvb3QoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZSB3YWxraW5nIEFORCB3YWxraW5nLXNob290aW5nLlxyXG5cdCAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuXHQgKiBjcmVhdGUgc2hvb3RzIGFuZCByZW1lbWJlcmluZyBsYXN0IHByZXNzZWQga2V5LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgaGFuZGxlV2Fsa2luZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fVdBTEtgLCB0cnVlKTtcclxuXHJcblx0XHQvLyBXYWxraW5nIDogZ29pbmcgcmlnaHRcclxuXHRcdGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNldFZlbG9jaXR5WCh0aGlzLnZ4KTtcclxuXHRcdFx0dGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMucmlnaHRLZXk7XHRcclxuXHRcdH1cclxuXHRcdC8vIFdhbGtpbmcgOiBnb2luZyBsZWZ0XHJcblx0XHRpZiAodGhpcy5sZWZ0S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNldFZlbG9jaXR5WCgtdGhpcy52eCk7XHJcblx0XHRcdHRoaXMubGFzdFByZXNzZWRLZXkgPSB0aGlzLmxlZnRLZXk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gV2Fsa2luZy1TaG9vdGluZ1xyXG5cdFx0aWYgKHRoaXMuc2hvb3RLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fVdBTEtfU0hPT1RgLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5zaG9vdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHRleHR1cmVLZXk6IHN0cmluZztcclxuXHRcdGNvbnRyb2xLZXlzOiBvYmplY3Q7XHJcblx0XHRoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuXHR9KSB7XHJcblxyXG5cdFx0c3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuXHRcdHRoaXMuYXBwbHlQaHlzaWNzKCk7XHJcblx0XHR0aGlzLmluaXRTb3VuZHMoKTtcclxuXHRcdHRoaXMuaW5pdFZpdGFscygpO1xyXG5cdFx0dGhpcy5pbml0SGVhbHRoQmFyKHBhcmFtcy5oZWFsdGhCYXIpO1xyXG5cdFx0dGhpcy5pbml0U2hvb3RpbmcoKTtcclxuXHRcdHRoaXMuaW5pdENvbnRyb2xzKHBhcmFtcy5jb250cm9sS2V5cyk7XHJcblxyXG5cdFx0Ly8gUmVzdHJhaW4gdGhlIGJvdW5kaW5nQm94XHJcblx0XHR0aGlzLnNldFNpemUoMjAsIDYwKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLkFMSVZFKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpOiB2b2lkIHtcclxuXHJcblx0XHRpZiAodGhpcy5pc0RlYWQoKSkgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVTLkRJRTtcclxuXHJcblx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuQUxJVkUpIHtcclxuXHRcdFx0Ly8gVGhpcyBpcyBkZXRhY2hlZCBmcm9tIHRoZSBvdGhlciBibG9jayBiZWNhdXNlIHlvdSBjYW4gZG8gYW55dGhpbmdcclxuXHRcdFx0Ly8gd2hpbGUganVtcGluZzogd2Fsay93YWxrLXNob290LCBpZGxlL2lkbGUtc2hvb3QuIFNvIGl0IGlzbid0IFxyXG5cdFx0XHQvLyBkZXBlbmRhbnQgb2Ygd2hldGhlciB5b3UncmUgcHJlc3NpbmcgbGVmdCBvciByaWdodCBvciB3aGF0ZXZlci5cclxuXHRcdFx0dGhpcy5oYW5kbGVKdW1waW5nKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5yaWdodEtleS5pc0Rvd24gfHwgdGhpcy5sZWZ0S2V5LmlzRG93bikge1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlV2Fsa2luZygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlSWRsaW5nKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuaGFuZGxlU3ByaXRlRmxpcHBpbmcoKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkhVUlQpIHtcclxuXHJcblx0XHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUhJVGAsIHRydWUpO1xyXG5cclxuXHRcdFx0dGhpcy5zZXRWZWxvY2l0eVgoMCk7XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRcdGRlbGF5OiAxMDAwLFxyXG5cdFx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5BTElWRSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5ESUUpIHtcclxuXHJcblx0XHRcdC8vIFdlIGRvbid0IHJlc2V0IHN0YXRlIHRvIEFMSVZFIGNhdXNlIGl0J3MgZW5kIG9mIHRoZSBnYW1lXHJcblxyXG5cdFx0XHR0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1ESUVgLCB0cnVlKTtcclxuXHJcblx0XHRcdHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIFBsYXllciBTdGF0ZVwiKTtcclxuXHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cdHByaXZhdGUgdng6IG51bWJlcjtcclxuXHRwcml2YXRlIGRpcmVjdGlvbjogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMueCA+IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSB8fCB0aGlzLnkgPiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIHx8IHRoaXMueCA8IDAgfHwgdGhpcy55IDwgMCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEFuaW1hdGlvbnMoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdGtleTogJ2NvbGxpc2lvbkVmZmVjdDEnLFxyXG5cdFx0XHRmcmFtZXM6IHRoaXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2NvbGxpc2lvbkVmZmVjdDEnLCB7XHJcblx0XHRcdFx0c3RhcnQ6IDAsXHJcblx0XHRcdFx0ZW5kOiAxXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRyZXBlYXQ6IDFcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XHJcblx0XHRzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcblx0XHR0aGlzLnZ4ID0gNzAwO1xyXG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uO1xyXG5cdFx0XHJcblx0XHR0aGlzLmluaXRBbmltYXRpb25zKCk7XHJcblxyXG5cdFx0dGhpcy5zZXRWZWxvY2l0eVgodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnZ4KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmlzT3V0KCkpIHtcclxuXHJcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUHJvamVjdGlsZSBkZXN0cm95ZWQgY2F1c2Ugb3V0IG9mIHdvcmxkIGJvdW5kcycpO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgVGlsZW1hcCB7XHJcblxyXG5cclxuXHRwcml2YXRlIG1hcDogUGhhc2VyLlRpbGVtYXBzLlRpbGVtYXA7XHJcblx0cHJpdmF0ZSB0aWxlc2V0OiBQaGFzZXIuVGlsZW1hcHMuVGlsZXNldDtcclxuXHRwcml2YXRlIF9tYWluTGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXI7XHJcblx0cHJpdmF0ZSBzdWJMYXllcjogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllcjtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHRlciBmb3IgdGhlIGxheWVyIHRoYXQgY29sbGlkZXM6ICdjb2xsaWRlcycgc2V0IHRvIHRydWUgaW4gVGlsZWQuXHJcblx0ICovXHJcblx0Z2V0IG1haW5MYXllcigpOiBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9tYWluTGF5ZXI7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHRpZDogbnVtYmVyOyBcclxuXHR9KSB7XHJcblxyXG5cdFx0dGhpcy5tYXAgPSBwYXJhbXMuc2NlbmUubWFrZS50aWxlbWFwKHsgXHJcblx0XHRcdGtleTogYGxldmVsJHtwYXJhbXMuaWR9YFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy50aWxlc2V0ID0gdGhpcy5tYXAuYWRkVGlsZXNldEltYWdlKFxyXG5cdFx0XHRgbGV2ZWwke3BhcmFtcy5pZH0tdGlsZXNoZWV0YCwgXHJcblx0XHRcdGBsZXZlbCR7cGFyYW1zLmlkfVRpbGVzaGVldGBcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5fbWFpbkxheWVyID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoXHJcblx0XHRcdCdtYWluTGF5ZXInLCBcclxuXHRcdFx0dGhpcy50aWxlc2V0LCAwLCAwXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuX21haW5MYXllci5zZXRDb2xsaXNpb25CeVByb3BlcnR5KHsgXHJcblx0XHRcdGNvbGxpZGVzOiB0cnVlXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnN1YkxheWVyID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoXHJcblx0XHRcdCdzdWJMYXllcicsXHJcblx0XHRcdHRoaXMudGlsZXNldCwgMCwgMFxyXG5cdFx0KTtcdFxyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4vY2hhcmFjdGVyXCI7XHJcbmltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcclxuaW1wb3J0IHsgR3VpIH0gZnJvbSBcIi4uL29iamVjdHMvZ3VpXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG5cclxuXHJcblx0cHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIF91c2VybmFtZTogc3RyaW5nO1xyXG5cdHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfcmF0aW86IG51bWJlcjtcclxuXHRwcml2YXRlIF9yYW5rOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfYXZhdGFyOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfaXNHdWVzdDogYm9vbGVhbjtcclxuXHRwcml2YXRlIF9zY3JlZW5TaWRlOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfY2hhcmFjdGVySW5zdGFuY2U6IENoYXJhY3RlcjtcclxuXHRwcml2YXRlIF9wbGF5ZXJJbnN0YW5jZTogUGxheWVyO1xyXG5cdHByaXZhdGUgX2xldmVsSW5zdGFuY2U6IExldmVsO1xyXG5cclxuXHRcclxuXHQvKipcclxuXHQgKiBVc2VyJ3MgaWQgZnJvbSBEQi5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5faWQ7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFVzZXIncyB1c2VybmFtZSBmcm9tIERCLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgdXNlcm5hbWUoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl91c2VybmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZXIncyBzY29yZSBmcm9tIERCLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgc2NvcmUoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY29yZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZXIncyByYXRpbyBmcm9tIERCLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcmF0aW8oKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9yYXRpbztcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogVXNlcidzIHJhbmsgZnJvbSBEQi5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IHJhbmsoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9yYW5rO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXNlcidzIGF2YXRhciBmaWxlcGF0aCBmcm9tIERCLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgYXZhdGFyKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYXZhdGFyO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHVzZXIgaXMgYSBndWVzdCAoY3JlYXRlZCBzcGVjaWZpY2FseSBmb3IgdGhlIGdhbWUpIFxyXG5cdCAqIG9yIG5vdCAodGhlIHVzZXIgY29ubmVjdGVkIHRvIHRoZSB3ZWJzaXRlLCBhbHJlYWR5IGV4aXN0cyBpbiBEQikuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBpc0d1ZXN0KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lzR3Vlc3Q7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNjcmVlblNpZGUoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY3JlZW5TaWRlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hhcmFjdGVyIHRoZSB1c2VyIGhhcyBjaG9zZW4gaW4gdGhlIE1lbnUuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBjaGFyYWN0ZXJJbnN0YW5jZSgpOiBDaGFyYWN0ZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NoYXJhY3Rlckluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGxheWVyIGNyZWF0ZWQgaW4gR2FtZSBTY2VuZSBiYXNlZCBvbiBVc2VyJ3MgY2hhcmFjdGVyIGNob2ljZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IHBsYXllckluc3RhbmNlKCk6IFBsYXllciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGxheWVySW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMZXZlbCB0aGUgdXNlciBoYXMgY2hvc2VuIGluIHRoZSBNZW51LCBtYWtlcyBtb3JlIHNlbnNlIHdoZW4gcGxheWluZyBzb2xvLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgbGV2ZWxJbnN0YW5jZSgpOiBMZXZlbCB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbGV2ZWxJbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgY2hhcmFjdGVySW5zdGFuY2UodjogQ2hhcmFjdGVyKSB7XHJcblx0XHR0aGlzLl9jaGFyYWN0ZXJJbnN0YW5jZSA9IHY7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHBsYXllckluc3RhbmNlKHY6IFBsYXllcikge1xyXG5cdFx0dGhpcy5fcGxheWVySW5zdGFuY2UgPSB2O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBsZXZlbEluc3RhbmNlKHY6IExldmVsKSB7XHJcblx0XHR0aGlzLl9sZXZlbEluc3RhbmNlID0gdjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgaXNHdWVzdCh2OiBib29sZWFuKSB7XHJcblx0XHR0aGlzLl9pc0d1ZXN0ID0gdjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluY3JlbWVudCB0aGUgdXNlcidzIHNjb3JlICh3aGVuIGhlIHdpbiBhIGdhbWUpXHJcblx0ICogQHJldHVybjogdGhlIG5ldyBpbmNyZW1lbnRlZCBzY29yZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgdXBkYXRlU2NvcmUoKTogbnVtYmVyIHtcclxuXHRcdHRoaXMuX3Njb3JlID0gdGhpcy5zY29yZSArIDE7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NvcmU7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczogeyBcclxuXHRcdGlkOiBudW1iZXI7IFxyXG5cdFx0dXNlcm5hbWU6IHN0cmluZzsgXHJcblx0XHRzY29yZTogbnVtYmVyOyBcclxuXHRcdHJhdGlvOiBudW1iZXI7XHJcblx0XHRyYW5rOiBudW1iZXI7IFxyXG5cdFx0YXZhdGFyOiBzdHJpbmc7XHJcblx0XHRpc0d1ZXN0OiBib29sZWFuO1xyXG5cdFx0c2NyZWVuU2lkZTogbnVtYmVyO1xyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLl9pZCA9IHBhcmFtcy5pZDtcclxuXHRcdHRoaXMuX3VzZXJuYW1lID0gcGFyYW1zLnVzZXJuYW1lO1xyXG5cdFx0dGhpcy5fc2NvcmUgPSBwYXJhbXMuc2NvcmU7XHJcblx0XHR0aGlzLl9yYXRpbyA9IHBhcmFtcy5yYXRpbztcclxuXHRcdHRoaXMuX3JhbmsgPSBwYXJhbXMucmFuaztcclxuXHRcdHRoaXMuX2F2YXRhciA9IHBhcmFtcy5hdmF0YXI7XHJcblx0XHR0aGlzLl9pc0d1ZXN0ID0gcGFyYW1zLmlzR3Vlc3Q7XHJcblx0XHR0aGlzLl9zY3JlZW5TaWRlID0gcGFyYW1zLnNjcmVlblNpZGU7XHJcblxyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tICcuLi9vYmplY3RzL2xldmVsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL29iamVjdHMvdXNlcic7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4uL29iamVjdHMvY2hhcmFjdGVyJztcclxuaW1wb3J0IHsgR3VpIH0gZnJvbSAnLi4vb2JqZWN0cy9ndWknO1xyXG5cclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG5cdGFjdGl2ZTogZmFsc2UsXHJcblx0dmlzaWJsZTogZmFsc2UsXHJcblx0a2V5OiAnQm9vdCdcclxufTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcblx0cHJpdmF0ZSBsZXZlbHM6IEFycmF5PExldmVsPlxyXG5cdHByaXZhdGUgdXNlcnM6IEFycmF5PFVzZXI+O1xyXG5cdHByaXZhdGUgY2hhcmFjdGVyczogQXJyYXk8Q2hhcmFjdGVyPjtcclxuXHJcblx0cHJpdmF0ZSBsb2dvOiBQaGFzZXIuR2FtZU9iamVjdHMuRE9NRWxlbWVudDtcclxuXHRwcml2YXRlIGJ0bjogUGhhc2VyLkdhbWVPYmplY3RzLkRPTUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcblx0cHJpdmF0ZSBtdXNpY1RoZW1lOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cdFxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblxyXG5cdFx0dGhpcy5sZXZlbHMgPSBbXHJcblx0XHRcdG5ldyBMZXZlbCh7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0bmFtZTogXCJDaW1ldGllcmVcIlxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IExldmVsKHtcclxuXHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRuYW1lOiBcIlByYWlyaWVcIlxyXG5cdFx0XHR9KVxyXG5cdFx0XTtcclxuXHRcdFxyXG5cdFx0dGhpcy51c2VycyA9IFtcclxuXHRcdFx0bmV3IFVzZXIoe1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdHVzZXJuYW1lOiAnRm9vMTAnLFxyXG5cdFx0XHRcdHJhbms6IDEsXHJcblx0XHRcdFx0c2NvcmU6IDEwLFxyXG5cdFx0XHRcdHJhdGlvOiA5MCxcclxuXHRcdFx0XHRhdmF0YXI6ICcnLFxyXG5cdFx0XHRcdGlzR3Vlc3Q6IGZhbHNlLFxyXG5cdFx0XHRcdHNjcmVlblNpZGU6IC0xXHJcblx0XHRcdH0pLFxyXG5cclxuXHRcdFx0bmV3IFVzZXIoe1xyXG5cdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdHVzZXJuYW1lOiAnQm9vMjAnLFxyXG5cdFx0XHRcdHJhbms6IDIsXHJcblx0XHRcdFx0c2NvcmU6IDEsXHJcblx0XHRcdFx0cmF0aW86IDgwLFxyXG5cdFx0XHRcdGF2YXRhcjogJycsXHJcblx0XHRcdFx0aXNHdWVzdDogZmFsc2UsXHJcblx0XHRcdFx0c2NyZWVuU2lkZTogMVxyXG5cdFx0XHR9KVxyXG5cdFx0XTtcclxuXHJcblx0XHR0aGlzLmNoYXJhY3RlcnMgPSBbXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiU3RldmllXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiQ2Fyb2xpbmVcIiB9LFxyXG5cdFx0XHRcdHN0YXRzOiB7fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IENoYXJhY3Rlcih7XHJcblx0XHRcdFx0aWQ6IDMsXHJcblx0XHRcdFx0ZGV0YWlsczogeyBuaWNrbmFtZTogXCJLcmlzdG9mXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiA0LFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiS3Jpc3R5XCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiA1LFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiT3JvblwiIH0sXHJcblx0XHRcdFx0c3RhdHM6IHt9XHJcblx0XHRcdH0pLFxyXG5cdFx0XHRuZXcgQ2hhcmFjdGVyKHtcclxuXHRcdFx0XHRpZDogNixcclxuXHRcdFx0XHRkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIkFsZXhhXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSlcclxuXHRcdF07XHJcblxyXG5cdFx0Ly8gVXNpbmcgdGhlIHNjZW5lIERhdGEgTWFuYWdlciB0byBzdG9yZSBkYXRhIG9uIGEgc2NlbmUgbGV2ZWwuXHJcblx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsIHRoaXMudXNlcnMpO1xyXG5cdFx0dGhpcy5kYXRhLnNldCgnY2hhcmFjdGVycycsIHRoaXMuY2hhcmFjdGVycyk7XHJcblx0XHR0aGlzLmRhdGEuc2V0KCdsZXZlbHMnLCB0aGlzLmxldmVscyk7XHJcblxyXG5cdH1cclxuXHJcblx0cHJlbG9hZCgpIHtcclxuXHJcblx0XHR0aGlzLmxvYWQucGFjayhcclxuXHRcdFx0XCJwcmVsb2FkXCIsXHJcblx0XHRcdFwiYXNzZXRzL3BhY2suanNvblwiLFxyXG5cdFx0XHRcInByZWxvYWRcIlxyXG5cdFx0KTtcclxuXHRcdFxyXG5cdFx0Ly8gUHJlbG9hZCBhbGwgY2hhcmFjdGVycyBhdGxhc2VzIDogYSBqc29uIGZpbGUgdGhhdCBhY3RzIGFzXHJcblx0XHQvLyBhcyBhIFwibWFwXCIvXCJsaW5rXCIgdG8gYSBwbmcgc3ByaXRlc2hlZXQuXHJcblx0XHQvLyBVc2VkIGZvciBkcmF3aW5nIFBMYXllciB0ZXh0dXJlIGFuZCBzZXQgYW5pbWF0aW9ucy5cclxuXHRcdC8vIFN0aWxsIG91dHNpZGUgcGFjay5qc29uIGZvciBub3cgY2F1c2UgSSBkb24ndCBrbm93IGhvdy5cclxuXHRcdGZvciAobGV0IG4gPSAxOyBuIDw9IDY7IG4rKykge1xyXG5cdFx0XHR0aGlzLmxvYWQuYXRsYXMoXHJcblx0XHRcdFx0YGNoYXJhY3RlciR7bn1gLFxyXG5cdFx0XHRcdGBhc3NldHMvaW1hZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVyJHtufS9jaGFyYWN0ZXIke259LXNwcml0ZXNoZWV0LnBuZ2AsXHJcblx0XHRcdFx0YGFzc2V0cy9pbWFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXIke259L2NoYXJhY3RlciR7bn0tYXRsYXMuanNvbmBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cclxuXHRcdHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKCdtZW51VGhlbWUnKTtcclxuXHRcdHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblxyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0Z2V0R2FtZUhlaWdodCh0aGlzKS8yLFxyXG5cdFx0XHQnYmFja2dyb3VuZEZvckdVSVNjZW5lcydcclxuXHRcdCk7XHJcblxyXG5cdFx0R3VpLnRpdGxlKHsgc2NlbmU6IHRoaXMsIHRleHQ6IFwiSE9BIEZJR0hUXCIgfSk7XHJcblx0XHRcclxuXHRcdEd1aS5tYWluQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0dGV4dDogXCJNZW51XCIsIFxyXG5cdFx0XHRzdG9wU291bmRzOiBmYWxzZSxcclxuXHRcdFx0c2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcblx0XHRcdG5ld1NjZW5lS2V5OiAnTWVudScsXHJcblx0XHRcdC8vIFBhc3NpbmcgdGhpcyBzY2VuZSBkYXRhIHRvIHRoZSBkZXN0aW5hdGlvbiBzY2VuZS5cclxuXHRcdFx0c2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKClcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEJvbWIgfSBmcm9tICcuLi9vYmplY3RzL2JvbWInO1xyXG5pbXBvcnQgeyBIdWQgfSBmcm9tICcuLi9vYmplY3RzL2h1ZCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL29iamVjdHMvcGxheWVyJztcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSAnLi4vb2JqZWN0cy9oZWFsdGhCYXInO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gJy4uL29iamVjdHMvbGV2ZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vb2JqZWN0cy91c2VyJztcclxuXHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ0dhbWUnXHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIEdhbWUgU2NlbmUgaXMgd2hlcmUgYWxsIHRoZSBhY3Rpb25zIHRha2VzIHBsYWNlLlxyXG4gKiBBY3RvcnMgc3VjaCBhcyBQbGF5ZXIsIEJvbWJzIGFuZCBCb21iIGFyZSBpbnN0YW5jaWF0ZWQuIFxyXG4gKiBTdGF0aWMgZWxlbWVudHMgc3VjaCBhcyBIVURzIGFuZCBIZWFsdGhCYXJzICh2aWEgUGxheWVyKSBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBMZXZlbCBpcyBjcmVhdGVkIChub3QgaW5zdGFuY2lhdGVkKSwgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHRoYXQgVGlsZW1hcCBpc1xyXG4gKiBkcmF3bi4gQ29sbGlkZXJzIGJldHdlZW4gYWN0b3JzIGFyZSBoYW5kbGVkLiBQbGF5ZXIgYW5pbWF0aW9ucyBhcmUgY3JlYXRlZC5cclxuICogSXQgc2V0cyBhIFNjZW5lIFdpbm5lciB3aGVuIG9uZSBvZiB0aGUgdXNlcnMgUExBWUVSIElOU1RBTkNFUyBpcyBkZWFkIGFuZFxyXG4gKiB0aGVuIHN0YXJ0IHRoZSBuZXcgc2NlbmUgKEdhbWVvdmVyIFNjZW5lKS5cclxuICogSXQgdGFrZXMgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIE1lbnUgU2NlbmUgKGNvbXBvc2VkIG9mIGFuIGFycmF5IG9mIHVzZXJzKSxcclxuICogYXZhaWxhYmxlIGhlcmUgaW4gdGhlIGluaXQoKSBldCBjcmVhdGUoKSBjYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRcclxuXHRwcml2YXRlIHBsYXllcjE6IFBsYXllcjtcclxuXHRwcml2YXRlIHBsYXllcjI6IFBsYXllcjtcclxuXHRwcml2YXRlIGh1ZDE6IEh1ZDtcclxuXHRwcml2YXRlIGh1ZDI6IEh1ZDtcclxuXHRwcml2YXRlIHRpbGVtYXA6IExldmVsW1widGlsZW1hcFwiXTtcclxuXHRwcml2YXRlIGJvbWJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblx0cHJpdmF0ZSBib21iQ3JlYXRpb25FdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuXHRwcml2YXRlIG5ld1NjZW5lVGltZWRFdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuXHJcblx0cHJpdmF0ZSB3aW5uZXI6IFVzZXI7XHJcblxyXG5cclxuXHRwcml2YXRlIHNldENvbGxpZGVycygpOiB2b2lkIHtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMuYm9tYnMsXHJcblx0XHRcdHRoaXMudGlsZW1hcC5tYWluTGF5ZXJcclxuXHRcdCk7XHJcblx0XHR0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG5cdFx0XHR0aGlzLmJvbWJzLFxyXG5cdFx0XHR0aGlzLnBsYXllcjEsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEuaHVydCgpO1xyXG5cdFx0XHRcdHRoaXMuYm9tYnMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMuYm9tYnMsXHJcblx0XHRcdHRoaXMucGxheWVyMixcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMi5odXJ0KCk7XHJcblx0XHRcdFx0dGhpcy5ib21icy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLFxyXG5cdFx0XHR0aGlzLnBsYXllcjJcclxuXHRcdCk7XHJcblx0XHR0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG5cdFx0XHRbdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjJdLCBcclxuXHRcdFx0dGhpcy50aWxlbWFwLm1haW5MYXllclxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMucGxheWVyMSxcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLnByb2plY3RpbGVzLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIxLmh1cnQoKTtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIucHJvamVjdGlsZXMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMucGxheWVyMixcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLnByb2plY3RpbGVzLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIyLmh1cnQoKTtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEucHJvamVjdGlsZXMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cclxuXHRpbml0KG1lbnVTY2VuZURhdGEpIHtcclxuXHJcblx0XHRpZiAobWVudVNjZW5lRGF0YS51c2VycyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJywgbWVudVNjZW5lRGF0YS51c2Vycyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIEFuaW1hdGlvbnMgY3JlYXRpb25cclxuXHRcdGZvciAoY29uc3QgdXNlciBvZiB0aGlzLmRhdGEuZ2V0KCd1c2VycycpKSB7XHJcblxyXG5cdFx0XHRsZXQgdGsgPSB1c2VyLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXk7XHJcblxyXG5cdFx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31XQUxLYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICd3YWxrLXNpZGUtYXJtZWQnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6IDEsXHJcblx0XHRcdFx0XHRlbmQ6IDQsXHJcblx0XHRcdFx0XHR6ZXJvUGFkOiAyXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0ZnJhbWVSYXRlOiAxMCxcclxuXHRcdFx0XHRyZXBlYXQ6IC0xXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31XQUxLX1NIT09UYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICd3YWxrLXNpZGUtc2hvb3QnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6IDEsXHJcblx0XHRcdFx0XHRlbmQ6IDQsXHJcblx0XHRcdFx0XHR6ZXJvUGFkOiAyXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0cmVwZWF0OiAtMVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRcdGtleTogYCR7dGt9SURMRWAsXHJcblx0XHRcdFx0ZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG5cdFx0XHRcdFx0cHJlZml4OiAnaWRsZS1mcm9udC1hcm1lZCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogNCxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDJcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmcmFtZVJhdGU6IDEwLFxyXG5cdFx0XHRcdHJlcGVhdDogLTFcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0XHRrZXk6IGAke3RrfUlETEVfU0hPT1RgLFxyXG5cdFx0XHRcdGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuXHRcdFx0XHRcdHByZWZpeDogJ2lkbGUtZnJvbnQtc2hvb3QnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6IDEsXHJcblx0XHRcdFx0XHRlbmQ6IDEsXHJcblx0XHRcdFx0XHR6ZXJvUGFkOiAyXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0cmVwZWF0OiAtMVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRcdGtleTogYCR7dGt9SElUYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICdoaXQnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6IDEsXHJcblx0XHRcdFx0XHRlbmQ6IDEsXHJcblx0XHRcdFx0XHR6ZXJvUGFkOiAyLFxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdHJlcGVhdDogMVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRcdGtleTogYCR7dGt9RElFYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICdkZWFkJyxcclxuXHRcdFx0XHRcdHN0YXJ0OiAxLFxyXG5cdFx0XHRcdFx0ZW5kOiAxLFxyXG5cdFx0XHRcdFx0emVyb1BhZDogMixcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRyZXBlYXQ6IDFcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5sZXZlbEluc3RhbmNlLmNyZWF0ZSh0aGlzKTtcclxuXHJcblx0XHR0aGlzLnRpbGVtYXAgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmxldmVsSW5zdGFuY2UudGlsZW1hcDtcclxuXHJcblx0XHR0aGlzLmJvbWJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG5cdFx0XHRydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoaXMuYm9tYkNyZWF0aW9uRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRkZWxheTogMjAwMCxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmJvbWJzLmFkZChcclxuXHRcdFx0XHRcdG5ldyBCb21iKHtcclxuXHRcdFx0XHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHRcdFx0XHR4OiBQaGFzZXIuTWF0aC5CZXR3ZWVuKDUwLCBnZXRHYW1lV2lkdGgodGhpcykgLSA1MCksXHJcblx0XHRcdFx0XHRcdHk6IDAsXHJcblx0XHRcdFx0XHRcdHRleHR1cmVLZXk6ICdib21iJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYWxsYmFja1Njb3BlOiB0aGlzXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IDMwMCxcclxuXHRcdFx0eTogMzAwLFxyXG5cdFx0XHR0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcblx0XHRcdGNvbnRyb2xLZXlzOiB7XHJcblx0XHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuXHRcdFx0XHRsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCxcclxuXHRcdFx0XHRqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcblx0XHRcdFx0c2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWFsdGhCYXI6IG5ldyBIZWFsdGhCYXIoe1xyXG5cdFx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHRcdHg6IDYwLFxyXG5cdFx0XHRcdHk6IDQwXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IDkwMCxcclxuXHRcdFx0eTogMzAwLFxyXG5cdFx0XHR0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcblx0XHRcdGNvbnRyb2xLZXlzOiB7XHJcblx0XHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxyXG5cdFx0XHRcdGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG5cdFx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG5cdFx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0VcclxuXHRcdFx0fSxcclxuXHRcdFx0aGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuXHRcdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0XHR4OiBnZXRHYW1lV2lkdGgodGhpcyktMTYyLFxyXG5cdFx0XHRcdHk6IDQwXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmh1ZDEgPSBuZXcgSHVkKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHVzZXI6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuaHVkMiA9IG5ldyBIdWQoe1xyXG5cdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0dXNlcjogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zZXRDb2xsaWRlcnMoKTtcclxuXHJcblx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIxO1xyXG5cdFx0dGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXS5wbGF5ZXJJbnN0YW5jZSA9IHRoaXMucGxheWVyMjtcclxuXHJcblx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsIHRoaXMuZGF0YS52YWx1ZXMudXNlcnMpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cclxuXHRcdHRoaXMucGxheWVyMS51cGRhdGUoKTtcclxuXHRcdHRoaXMucGxheWVyMi51cGRhdGUoKTtcclxuXHJcblx0XHQvLyBXaW5uZXIgaGFuZGxpbmcuXHJcblx0XHQvLyBBbGwgdGhpcyBpcyBkYW5nZXJvdXMgYW5kIG5vdCBhY2NlcHRhYmxlLiBUaGUgbmV3IHNjZW5lIHN0YXJ0IHRpbWVkIGV2ZW50IFxyXG5cdFx0Ly8gaXMgYXN5bmNocm9ub3VzIHNvIEkgZG9uJ3QgaGF2ZSBhbnkgY2VydGFpbnR5IHRoYXQgYSB3aW5uZXIgd2lsbCBiZSBzZXRcclxuXHRcdC8vIGNvcnJlY3RseSBiZWZvcmUgc2NlbmUgdHJhbnNmZXIuIEJhc2ljYWxseSByaWdodCBub3cgaXQgd29ya3MgY2F1c2VcclxuXHRcdC8vIG9mIHRoZSBnZW5lcm91cyB0aW1lb3V0IG9mIDUgc2Vjb25kcy5cclxuXHRcdGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgfHwgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmICF0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHJcblx0XHRcdFx0dGhpcy53aW5uZXIgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICghdGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmIHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cclxuXHRcdFx0XHR0aGlzLndpbm5lciA9IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF07XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxheWVyMi5pc0RlYWQoKSAmJiB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHJcblx0XHRcdFx0dGhpcy53aW5uZXIgPSBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5kYXRhLnNldCgnd2lubmVyJywgdGhpcy53aW5uZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5uZXdTY2VuZVRpbWVkRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRcdGRlbGF5OiA1MDAwLFxyXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNvdW5kLnN0b3BBbGwoKTtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWVvdmVyJywgdGhpcy5kYXRhLmdldEFsbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvZ3VpJztcclxuXHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ0dhbWVvdmVyJ1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lb3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoc2NlbmVDb25maWcpO1xyXG5cdH1cclxuXHJcblxyXG5cdGluaXQoZ2FtZVNjZW5lRGF0YSkge1xyXG5cdFx0aWYgKGdhbWVTY2VuZURhdGEud2lubmVyICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5kYXRhLnNldCgnd2lubmVyJywgZ2FtZVNjZW5lRGF0YS53aW5uZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNyZWF0ZSgpIHtcclxuXHJcblx0XHR0aGlzLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMpLzIsIFxyXG5cdFx0XHQnYmFja2dyb3VuZEZvckdVSVNjZW5lcydcclxuXHRcdCk7XHJcblxyXG5cdFx0R3VpLnRpdGxlKHsgc2NlbmU6IHRoaXMsIHRleHQ6IFwiRmluIERlIFBhcnRpZVwiIH0pO1xyXG5cclxuXHRcdEd1aS5jdXN0b21UZXh0KHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0eDogZ2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHR5OiAyMDAsXHJcblx0XHRcdHRleHQ6IGAke3RoaXMuZGF0YS52YWx1ZXMud2lubmVyLnVzZXJuYW1lfSByZW1wb3J0ZSBsYSBwYXJ0aWUgIWBcclxuXHRcdH0pOyBcclxuXHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IFxyXG5cdFx0XHRzY2VuZTogdGhpcywgXHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0eTogMjYwLFxyXG5cdFx0XHR0ZXh0OiBgQW5jaWVuIHNjb3JlIDogJHt0aGlzLmRhdGEudmFsdWVzLndpbm5lci5zY29yZX1gXHJcblx0XHR9KTtcclxuXHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IFxyXG5cdFx0XHRzY2VuZTogdGhpcywgXHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0eTogMzIwLFxyXG5cdFx0XHR0ZXh0OiBgTm91dmVhdSBzY29yZSA6ICR7dGhpcy5kYXRhLnZhbHVlcy53aW5uZXIudXBkYXRlU2NvcmUoKX1gXHJcblx0XHR9KTtcclxuXHJcblx0XHRHdWkubWFpbkJ0bih7XHJcblx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHR0ZXh0OiBcIlJFSk9VRVJcIixcclxuXHRcdFx0c3RvcFNvdW5kczogdHJ1ZSxcclxuXHRcdFx0c2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcblx0XHRcdG5ld1NjZW5lS2V5OiAnTWVudSdcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcclxuaW1wb3J0IHsgTWVudVNjZW5lIH0gZnJvbSAnLi9tZW51LXNjZW5lJztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcclxuaW1wb3J0IHsgR2FtZW92ZXJTY2VuZSB9IGZyb20gJy4vZ2FtZW92ZXItc2NlbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG5cdEJvb3RTY2VuZSxcclxuXHRNZW51U2NlbmUsXHJcblx0R2FtZVNjZW5lLFxyXG5cdEdhbWVvdmVyU2NlbmVcclxuXTsiLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgR3VpIH0gZnJvbSAnLi4vb2JqZWN0cy9ndWknO1xyXG5cclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG5cdGFjdGl2ZTogZmFsc2UsXHJcblx0dmlzaWJsZTogZmFsc2UsXHJcblx0a2V5OiAnTWVudSdcclxufTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcblxyXG5cdHByaXZhdGUgbGV2ZWxUaHVtYjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdHByaXZhdGUgY2hhcmFjdGVyVGh1bWJzOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U+O1xyXG5cclxuXHJcblx0cHJpdmF0ZSBkcmF3QmFja2dyb3VuZCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYWRkLmltYWdlKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgodGhpcykvMiwgXHJcblx0XHRcdGdldEdhbWVIZWlnaHQodGhpcykvMixcclxuXHRcdFx0J2JhY2tncm91bmRGb3JHVUlTY2VuZXMnXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0VGh1bWJuYWlscyhkYXRhKTogdm9pZCB7XHJcblx0XHQvLyBJbml0IHRoZSBsZXZlbCB0aHVtYm5haWwgb24gdGhlIDFzdCBsZXZlbCB0aHVtYm5haWwgKGluZGV4IDApXHJcblx0XHR0aGlzLmxldmVsVGh1bWIgPSB0aGlzLmFkZC5pbWFnZSgyMDAsIDMwMCwgZGF0YS52YWx1ZXMubGV2ZWxzWzBdLnRodW1ibmFpbEtleSk7XHJcblxyXG5cdFx0Ly8gSW5pdCB0aGUgMiBjaGFyYWN0ZXJzIHRodW1ibmFpbHMgd2l0aCB0aGUgMXN0IGNoYXJhY3RlciB0aHVtYm5haWwuXHJcblx0XHR0aGlzLmNoYXJhY3RlclRodW1icyA9IFtcclxuXHRcdFx0dGhpcy5hZGQuaW1hZ2UoNjUwLCAzMDAsIGRhdGEudmFsdWVzLmNoYXJhY3RlcnNbMF0udGh1bWJuYWlsS2V5KSxcclxuXHRcdFx0dGhpcy5hZGQuaW1hZ2UoODUwLCAzMDAsIGRhdGEudmFsdWVzLmNoYXJhY3RlcnNbMF0udGh1bWJuYWlsS2V5KVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJpbnRUaXRsZXMoKTogdm9pZCB7XHJcblx0XHRHdWkudGl0bGUoeyBzY2VuZTogdGhpcywgdGV4dDogXCJNRU5VXCIgfSk7XHJcblx0XHRHdWkuc2VjdGlvblRpdGxlKHsgc2NlbmU6IHRoaXMsIHg6IDIwMCwgeTogMTMwLCB0ZXh0OiBcIlRlcnJhaW5cIiB9KTtcclxuXHRcdEd1aS5zZWN0aW9uVGl0bGUoeyBzY2VuZTogdGhpcywgeDogNzUwLCB5OiAxMzAsIHRleHQ6IFwiUGVyc29ubmFnZXNcIiB9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJpbnRUZXh0cygpOiB2b2lkIHtcclxuXHRcdEd1aS5jdXN0b21UZXh0KHsgc2NlbmU6IHRoaXMsIHg6IDY1MCwgeTogMjAwLCB0ZXh0OiBcIkpvdWV1ciAxXCIgfSk7XHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IHNjZW5lOiB0aGlzLCB4OiA4NTAsIHk6IDIwMCwgdGV4dDogXCJKb3VldXIgMlwiIH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0VXNlcnNDaG9pY2VzKGRhdGEpOiB2b2lkIHtcclxuXHRcdGZvciAoY29uc3QgdXNlciBvZiBkYXRhLnZhbHVlcy51c2Vycykge1xyXG5cdFx0XHR1c2VyLmxldmVsSW5zdGFuY2UgPSBkYXRhLnZhbHVlcy5sZXZlbHNbMF07XHJcblx0XHRcdHVzZXIuY2hhcmFjdGVySW5zdGFuY2UgPSBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1x0XHRcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGluaXQoYm9vdFNjZW5lRGF0YSkge1xyXG5cclxuXHRcdGlmIChib290U2NlbmVEYXRhLnVzZXJzICE9PSB1bmRlZmluZWQgJiYgXHJcblx0XHRib290U2NlbmVEYXRhLmNoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCAmJiBcclxuXHRcdGJvb3RTY2VuZURhdGEubGV2ZWxzICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJyxib290U2NlbmVEYXRhLnVzZXJzKTtcclxuXHRcdFx0dGhpcy5kYXRhLnNldCgnY2hhcmFjdGVycycsIGJvb3RTY2VuZURhdGEuY2hhcmFjdGVycyk7XHJcblx0XHRcdHRoaXMuZGF0YS5zZXQoJ2xldmVscycsIGJvb3RTY2VuZURhdGEubGV2ZWxzKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBnZXR0aW5nIHVzZXJzLCBjaGFyYWN0ZXJzIGFuZCBsZXZlbHMgZGF0YSBmcm9tIEJvb3QgU2NlbmVcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbml0VXNlcnNDaG9pY2VzKHRoaXMuZGF0YSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTY2VuZSdzIGNyZWF0ZSBjYWxsYmFjay5cclxuXHQgKiBAcGFyYW0gZGF0YSBEYXRhIG9iamVjdCBmcm9tIHRoZSBCb290IFNjZW5lIHRoYXQgYmVsb25ncyB0byB0aGUgRGF0YSBNYW5hZ2VyLlxyXG5cdCAqIEhlcmUgdGhpcyBkYXRhIHdpbGwgYmUgbW9kaWZpZWQ6IGNoYXJhY3RlcnMgKGVsZW1lbnRzIG9mIGRhdGEuY2hhcmFjdGVycykgXHJcblx0ICogYW5kIGxldmVscyAoZWxlbWVudHMgb2YgZGF0YS5sZXZlbHMpIGluc3RhbmNlcyB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBcclxuXHQgKiB1c2VycyBpbnN0YW5jZXMgKGRhdGEudXNlcnMpLlxyXG5cdCAqL1xyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdFxyXG5cdFx0dGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG5cdFx0dGhpcy5pbml0VGh1bWJuYWlscyh0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5wcmludFRpdGxlcygpO1xyXG5cdFx0dGhpcy5wcmludFRleHRzKCk7XHJcblxyXG5cdFx0Ly8gU2xpZGUgYnV0dG9uIG7CsDEuIFRoaXMgaXMgd2hlcmUgVXNlciAxICYgMiBjaG9vc2UgdGhlaXIgbGV2ZWwuIFxyXG5cdFx0Ly8gTW9kaWZpZXMgdGhlIGxldmVsIHRodW1ibmFpbCB0ZXh0dXJlICh3aXRoIHRleHR1cmUga2V5cykgb24gY2xpY2suXHJcblx0XHRHdWkuc2xpZGVCdG4oeyBcclxuXHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHR4OiAyMDAsIFxyXG5cdFx0XHR5OiA0NTAsIFxyXG5cdFx0XHR0ZXh0OiBcIlN1aXZhbnRcIixcclxuXHRcdFx0aW1nOiB0aGlzLmxldmVsVGh1bWIsXHJcblx0XHRcdHRleHR1cmVLZXlzOiB0aGlzLmRhdGEudmFsdWVzLmxldmVscy5tYXAobGV2ZWwgPT4gbGV2ZWwudGh1bWJuYWlsS2V5KSxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHRmb3IgKGNvbnN0IGxldmVsIG9mIHRoaXMuZGF0YS52YWx1ZXMubGV2ZWxzKSB7XHJcblx0XHRcdFx0XHRpZiAobGV2ZWwudGh1bWJuYWlsS2V5ID09PSB0aGlzLmxldmVsVGh1bWIudGV4dHVyZS5rZXkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5sZXZlbEluc3RhbmNlID0gbGV2ZWw7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMV0ubGV2ZWxJbnN0YW5jZSA9IGxldmVsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0XHJcblx0XHQvLyBTbGlkZSBidXR0b24gbsKwMi4gVGhpcyBpcyB3aGVyZSBVc2VyIDEgY2hvb3NlIGl0cyBjaGFyYWN0ZXIuIFxyXG5cdFx0Ly8gTW9kaWZpZXMgdGhlIHRleHR1cmUgb2YgdGhlIGNoYXJhY3RlciB0aHVtYm5haWwgbsKwMSBvbiBjbGljay5cclxuXHRcdEd1aS5zbGlkZUJ0bih7IFxyXG5cdFx0XHRzY2VuZTogdGhpcywgXHJcblx0XHRcdHg6IDY1MCwgXHJcblx0XHRcdHk6IDQwMCwgXHJcblx0XHRcdHRleHQ6IFwiU3VpdmFudFwiLFxyXG5cdFx0XHRpbWc6IHRoaXMuY2hhcmFjdGVyVGh1bWJzWzBdLFxyXG5cdFx0XHR0ZXh0dXJlS2V5czogdGhpcy5kYXRhLnZhbHVlcy5jaGFyYWN0ZXJzLm1hcChjID0+IGMudGh1bWJuYWlsS2V5KSxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHRmb3IgKGNvbnN0IGMgb2YgdGhpcy5kYXRhLnZhbHVlcy5jaGFyYWN0ZXJzKSB7XHJcblx0XHRcdFx0XHRpZiAoYy50aHVtYm5haWxLZXkgPT09IHRoaXMuY2hhcmFjdGVyVGh1bWJzWzBdLnRleHR1cmUua2V5KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0uY2hhcmFjdGVySW5zdGFuY2UgPSBjO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gU2xpZGUgYnV0dG9uIG7CsDMuIFRoaXMgaXMgd2hlcmUgVXNlciAyIGNob29zZSBpdHMgY2hhcmFjdGVyLiBcclxuXHRcdC8vIE1vZGlmaWVzIHRoZSB0ZXh0dXJlIG9mIHRoZSBjaGFyYWN0ZXIgdGh1bWJuYWlsIG7CsDIgb24gY2xpY2suXHJcblx0XHRHdWkuc2xpZGVCdG4oeyBcclxuXHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHR4OiA4NTAsIFxyXG5cdFx0XHR5OiA0MDAsIFxyXG5cdFx0XHR0ZXh0OiBcIlN1aXZhbnRcIixcclxuXHRcdFx0aW1nOiB0aGlzLmNoYXJhY3RlclRodW1ic1sxXSxcclxuXHRcdFx0dGV4dHVyZUtleXM6IHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycy5tYXAoYyA9PiBjLnRodW1ibmFpbEtleSksXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBjIG9mIHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycykge1xyXG5cdFx0XHRcdFx0aWYgKGMudGh1bWJuYWlsS2V5ID09PSB0aGlzLmNoYXJhY3RlclRodW1ic1sxXS50ZXh0dXJlLmtleSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmNoYXJhY3Rlckluc3RhbmNlID0gYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHQvLyBTZXQgdGhlIE1PRElGSUVEIHVzZXJzIGRhdGEgZnJvbSB0aGUgYm9vdCBzY2VuZSB0byB0aGlzIGFjdHVhbCBzY2VuZS5cclxuXHRcdC8vIE1vZGlmaWVkIGJlY2F1c2UgbGV2ZWwgYW5kIGNoYXJhY3RlcnMgaW5zdGFuY2VzIGhhcyBiZWVuIGxpbmtlZCB0b1xyXG5cdFx0Ly8gZWFjaCB1c2VycyB0aGFua3MgdG8gdGhlIHNsaWRlIGJ1dHRvbnMgY2FsbGJhY2tzIGFuZCB0aGUgdGh1bWJuYWlscy5cclxuXHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJywgdGhpcy5kYXRhLnZhbHVlcy51c2Vycyk7XHJcblxyXG5cclxuXHRcdEd1aS5tYWluQnRuKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHRleHQ6IFwiU1RBUlRcIixcclxuXHRcdFx0c3RvcFNvdW5kczogdHJ1ZSxcclxuXHRcdFx0c2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcblx0XHRcdG5ld1NjZW5lS2V5OiAnR2FtZScsXHJcblx0XHRcdC8vIFNlbmRpbmcgdGhpcyBzY2VuZSdzIGRhdGEgKD0gdXNlcnMpIHRvIHRoZSBHYW1lIFNjZW5lLlxyXG5cdFx0XHRzY2VuZURhdGE6IHRoaXMuZGF0YS5nZXRBbGwoKVxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9