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
            DEAD: 'DEAD'
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
            this.state = this.STATES.DEAD;
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
        else if (this.state === this.STATES.DEAD) {
            // We don't reset state to ALIVE cause it's end of the game
            this.anims.play(this.texture.key + "DEAD", true);
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
var storage_1 = __webpack_require__(/*! ../storage */ "./src/storage.ts");
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
                id: ((_b = (_a = storage_1.parsedStorage()) === null || _a === void 0 ? void 0 : _a.mainUser) === null || _b === void 0 ? void 0 : _b.id) || 0,
                username: ((_d = (_c = storage_1.parsedStorage()) === null || _c === void 0 ? void 0 : _c.mainUser) === null || _d === void 0 ? void 0 : _d.username) || 'Foo1',
                ratio: ((_f = (_e = storage_1.parsedStorage()) === null || _e === void 0 ? void 0 : _e.mainUser) === null || _f === void 0 ? void 0 : _f.ratio) || 0,
                screenSide: 'left'
            }),
            new user_1.User({
                id: ((_h = (_g = storage_1.parsedStorage()) === null || _g === void 0 ? void 0 : _g.secondaryUser) === null || _h === void 0 ? void 0 : _h.id) || 0,
                username: ((_k = (_j = storage_1.parsedStorage()) === null || _j === void 0 ? void 0 : _j.secondaryUser) === null || _k === void 0 ? void 0 : _k.username) || 'Boo2',
                ratio: ((_m = (_l = storage_1.parsedStorage()) === null || _l === void 0 ? void 0 : _l.secondaryUser) === null || _m === void 0 ? void 0 : _m.ratio) || 0,
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
                key: tk + "DEAD",
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
var storage_1 = __webpack_require__(/*! ../storage */ "./src/storage.ts");
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (storage_1.parsedStorage()) {
            var parsedUsers = storage_1.parsedStorage();
            if (this.data.values.winner.id === parsedUsers.mainUser.id) {
                (_b = (_a = parsedUsers === null || parsedUsers === void 0 ? void 0 : parsedUsers.mainUser) === null || _a === void 0 ? void 0 : _a.matchs) === null || _b === void 0 ? void 0 : _b.push({ win: true });
                (_d = (_c = parsedUsers === null || parsedUsers === void 0 ? void 0 : parsedUsers.secondaryUser) === null || _c === void 0 ? void 0 : _c.matchs) === null || _d === void 0 ? void 0 : _d.push({ win: false });
            }
            else if (this.data.values.winner.id === parsedUsers.secondaryUser.id) {
                (_f = (_e = parsedUsers === null || parsedUsers === void 0 ? void 0 : parsedUsers.secondaryUser) === null || _e === void 0 ? void 0 : _e.matchs) === null || _f === void 0 ? void 0 : _f.push({ win: true });
                (_h = (_g = parsedUsers === null || parsedUsers === void 0 ? void 0 : parsedUsers.mainUser) === null || _g === void 0 ? void 0 : _g.matchs) === null || _h === void 0 ? void 0 : _h.push({ win: false });
            }
            // Serialize and set in storage the newly updated users objects :
            // with their corresponding matchs pushed entries
            localStorage.setItem('hoafight', JSON.stringify(parsedUsers));
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


/***/ }),

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parsedStorage() {
    if (localStorage.getItem('hoafight')) {
        var hf = localStorage.getItem('hoafight');
        var parsed = JSON.parse(hf);
        return parsed;
    }
    else {
        return null;
    }
}
exports.parsedStorage = parsedStorage;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvYm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvZ3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9odWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvbGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvdGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lb3Zlci1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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LEtBQUs7WUFDdkIsV0FBVyxFQUFFLE1BQU07WUFDbkIseURBQXlEO1lBQ3pELFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUM3QixDQUFDLENBQUM7SUFFSixDQUFDO0lBRUYsZ0JBQUM7QUFBRCxDQUFDLENBM0o4QixNQUFNLENBQUMsS0FBSyxHQTJKMUM7QUEzSlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ1h0QixTQUFnQixhQUFhO0lBQzVCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNyQyxJQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsT0FBTyxNQUFNLENBQUM7S0FDZDtTQUFNO1FBQ04sT0FBTyxJQUFJLENBQUM7S0FDWjtBQUNGLENBQUM7QUFSRCxzQ0FRQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSB3aWR0aCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcblx0cmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gKiBXaGljaCBpcyBnZW5lcmFsbHkgZXF1YWwgdG8gdGhlIGhlaWdodCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG5cdHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogTG9hZCBhIGZpbGUgaW4gYWpheCBhbmQgcmV0dXJuIGl0cyByZXNwb25zZSB0ZXh0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFBhdGggdG8gdGhlIGRlc2lyZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuXHRsZXQgcmF3RmlsZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcblx0cmF3RmlsZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkltcG9zc2libGUgdG8gbG9hZCBmaWxlLlwiKTtcclxuXHR9XHJcblxyXG5cdHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcblx0XHRcdGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09PSAwKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gcmF3RmlsZS5yZXNwb25zZVRleHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJhd0ZpbGUub3BlbihcIkdFVFwiLCBwRmlsZVBhdGgsIGZhbHNlKTtcclxuXHRyYXdGaWxlLnNlbmQobnVsbCk7XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIDJkLWFycmF5IG9mIHN0cmluZ3MgZnJvbSBhIHdob2xlIHRleHQgZmlsZSBnaXZlbiBhcyBpbnB1dC5cclxuICogV29ya3MgYmVzdCBpZiB0aGUgaW5wdXQgdGV4dCBpcyBvbmx5IGNvbXBvc2VkIG9mIHNpbmdsZSBjaGFycyBhbmQgJ1xcbicuXHJcbiAqIEVhY2ggZmluYWwgYXJyYXkgZWxlbWVudCB3b3VsZCBiZSBvbmUgY2hhcmFjdGVyIG9mIHRoZSB0ZXh0IGlucHV0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRTdHJpbmdzID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nW11bXSA9PiB7XHJcblx0bGV0IHJhd0dyaWQgPSB0aGlzLmxvYWRGaWxlKHBGaWxlUGF0aCk7XHJcblx0cmV0dXJuIHJhd0dyaWQuc3BsaXQoJ1xcbicpLm1hcChpdGVtID0+IGl0ZW0uc3BsaXQoJycpKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcblx0Y3VzdG9tQmx1ZTogeyBzdHJpbmc6ICcjNDM0NmY5JywgaGV4OiAweDQzNDZmOSB9LFxyXG5cdGN1c3RvbUdyZWVuOiB7IHN0cmluZzogICcjNzZlYTY0JywgaGV4OiAweDc2ZWE2NCB9LFxyXG5cdHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6ICcjMjVmOTQ1JywgaGV4OiAweDI1Zjk0NSB9LFxyXG5cdGN1c3RvbVJlZDogeyBzdHJpbmc6ICcjZWEyZDIzJywgaGV4OiAweGVhMmQyMyB9LFxyXG5cdHdoaXRlOiB7IHN0cmluZzogJyNmZmZmZmYnLCBoZXg6IDB4ZmZmZmZmIH1cclxufVxyXG5cclxuLy8gTm90ZSAtLSB3ZSBjYW4gYWRkIG11bHRpcGxlIGtleXMgYXQgb25jZSA6IFxyXG4vLyB0aGlzLmtleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleXMoJ0VOVEVSLFcsQSxTLEQnKVxyXG4vLyBBbmQgdGhlbiBkbyA6IHRoaXMua2V5cy5FTlRFUi5pc0Rvd24uLi5cclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuXHRQTEFZRVI6IHtcclxuXHRcdFNFVDE6IHtcclxuXHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuXHRcdFx0bGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcblx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuXHRcdFx0c2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVFxyXG5cdFx0fSxcclxuXHJcblx0XHRTRVQyOiB7XHJcblx0XHRcdHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuXHRcdFx0bGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcblx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG5cdFx0XHRzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFXHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuXHJcblx0dGl0bGU6ICdIb2EgRmlnaHQnLFxyXG5cclxuXHR0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHJcblx0c2NhbGU6IHtcclxuXHRcdHdpZHRoOiAxMDI0LFxyXG5cdFx0aGVpZ2h0OiA2NDBcclxuXHR9LFxyXG5cclxuXHRpbnB1dDoge1xyXG5cdFx0Z2FtZXBhZDogdHJ1ZSxcclxuXHRcdGtleWJvYXJkOiB0cnVlXHJcblx0fSxcclxuXHRcclxuXHRwaHlzaWNzOiB7XHJcblx0XHRkZWZhdWx0OiAnYXJjYWRlJyxcclxuXHRcdGFyY2FkZToge1xyXG5cdFx0XHRncmF2aXR5OiB7XHJcblx0XHRcdFx0eTogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWJ1ZzogZmFsc2UsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdGRvbToge1xyXG5cdFx0Y3JlYXRlQ29udGFpbmVyOiB0cnVlXHJcblx0fSxcclxuXHJcblx0cGFyZW50OiAnZ2FtZScsXHJcblx0XHJcblx0c2NlbmU6IFNjZW5lc1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9tYiBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5JbWFnZSB7XHJcblxyXG5cdHByaXZhdGUgaXNPdXQoKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8IFxyXG5cdFx0dGhpcy55ID4gZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSB8fCBcclxuXHRcdHRoaXMueCA8IDAgfHwgdGhpcy55IDwgMCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XHJcblx0XHRzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cdFx0dGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRCb3VuY2UoMSk7XHJcblx0XHR0aGlzLnNldFZlbG9jaXR5KFBoYXNlci5NYXRoLkJldHdlZW4oLTIwMCwgMjAwKSwgMjApO1xyXG5cdFx0dGhpcy5zZXRHcmF2aXR5WSgxMDAwKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmlzT3V0KCkpIHtcclxuXHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQm9tYiBkZXN0cm95ZWQgY2F1c2Ugb3V0IG9mIHdvcmxkIGJvdW5kc1wiKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnQgYSBHYW1lIENoYXJhY3Rlciwgbm90IHRvIGJlIGNvbmZ1c2VkIHdpdGggdGhlIFwiUGxheWVyXCIuXHJcbiAqIEEgUGxheWVyIGludGVncmF0ZXMgYSBDaGFyYWN0ZXIuIEEgQ2hhcmFjdGVyIGlzIGp1c3QgYWJvdXQgaG9sZGluZyBkYXRhIDpcclxuICogdGV4dHVyZSBrZXlzLCBtZXRhZGF0YSwgdm9pY2VzIGV0Yy4gTm90aGluZyB0byBiZSBjb250cm9sbGVkIHdpdGggeW91clxyXG4gKiBrZXlib2FyZCBoZXJlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcblxyXG5cdC8vIFZlcnkgaW1wb3J0YW50IGZpZWxkLCB0aWdodGx5IGxpbmtlZCB0byB0aGUga2V5cyB5b3UgcHJvdmlkZSBpbiBwYWNrLmpzb25cclxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgZGV0YWlsczogb2JqZWN0O1xyXG5cdHByaXZhdGUgc3RhdHM6IG9iamVjdDtcclxuXHJcblx0Ly8gRmllbGRzIGJ1aWx0IHVwb24gdGhlIElkIHByb3ZpZGVkIGF0IGluc3RhbmNpYXRpb24uXHJcblx0cHJpdmF0ZSBfdGV4dHVyZUtleTogc3RyaW5nO1xyXG5cdC8vIENoYXJhY3RlcidzIGF2YXRhclxyXG5cdHByaXZhdGUgX3RodW1ibmFpbEtleTogc3RyaW5nO1xyXG5cdHByaXZhdGUgX3NvdW5kS2V5OiBzdHJpbmc7XHJcblxyXG5cclxuXHRwdWJsaWMgZ2V0IHRleHR1cmVLZXkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl90ZXh0dXJlS2V5O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB0aHVtYm5haWxLZXkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl90aHVtYm5haWxLZXk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNvdW5kS2V5KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc291bmRLZXk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRpZDogbnVtYmVyO1xyXG5cdFx0ZGV0YWlscz86IG9iamVjdDtcclxuXHRcdHN0YXRzPzogb2JqZWN0O1xyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLmlkID0gcGFyYW1zLmlkO1xyXG5cdFx0dGhpcy5kZXRhaWxzID0gcGFyYW1zLmRldGFpbHM7XHJcblx0XHR0aGlzLnN0YXRzID0gcGFyYW1zLnN0YXRzO1xyXG5cclxuXHRcdHRoaXMuX3RleHR1cmVLZXkgPSBgY2hhcmFjdGVyJHt0aGlzLmlkfWA7XHJcblx0XHR0aGlzLl90aHVtYm5haWxLZXkgPSBgY2hhcmFjdGVyJHt0aGlzLmlkfUF2YXRhcmA7XHJcblx0XHR0aGlzLl9zb3VuZEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9U291bmRgO1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHdWkge1xyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBtYWluQnRuU3R5bGUgPSBcclxuXHRcdGB3aWR0aDogMTUwcHg7IFxyXG5cdFx0aGVpZ2h0OiA0OXB4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLEFyaWFsOyBcclxuXHRcdGNvbG9yOiAjMDAwMDAwOyBcclxuXHRcdGZvbnQtc2l6ZTogMjVweDsgXHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDBgXHJcblx0O1xyXG5cclxuXHRcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeUJ0blN0eWxlID0gXHJcblx0XHRgd2lkdGg6IDEwMHB4OyBcclxuXHRcdGhlaWdodDogMzNweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG5cdFx0Y29sb3I6ICMwMDAwMDA7IFxyXG5cdFx0Zm9udC1zaXplOiAxN3B4OyBcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgIzAwMGBcclxuXHQ7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBzdHlsaXplZCBCdXR0b24gRE9NIEVsZW1lbnQgd2l0aCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGF0dGFjaGVkXHJcblx0ICogdG8gaXQuIFRoZSBldmVudCBsaXN0ZW5lciBjYWxsYmFjayBzdGFydHMgYSBuZXcgc2NlbmUgdXNpbmcgdGhlIHNjZW5lIGtleVxyXG5cdCAqIHBhc3NlZCBpbiBhcmd1bWVudHMgYW5kIHN0b3BzIGFsbCBzb3VuZHMgaWYgc3RvcFNvdW5kcyBzZXQgdG8gdHJ1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIG1haW5CdG4ocGFyYW1zOiB7XHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHRleHQ6IHN0cmluZzsgXHJcblx0XHRzdG9wU291bmRzOiBib29sZWFuOyBcclxuXHRcdHNjZW5lUGx1Z2luOiBQaGFzZXIuU2NlbmVzLlNjZW5lUGx1Z2luOyBcclxuXHRcdG5ld1NjZW5lS2V5OiBzdHJpbmc7XHJcblx0XHRzY2VuZURhdGE/OiBvYmplY3Q7XHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkvMixcclxuXHRcdFx0Z2V0R2FtZUhlaWdodChwYXJhbXMuc2NlbmUpLTEwMCxcclxuXHRcdFx0J2J1dHRvbicsXHJcblx0XHRcdEd1aS5tYWluQnRuU3R5bGUsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblxyXG5cdFx0KS5hZGRMaXN0ZW5lcignY2xpY2snKS5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmUuc291bmQuYWRkKCdjbGlja1NvdW5kJykucGxheSgpO1xyXG5cclxuXHRcdFx0aWYgKHBhcmFtcy5zdG9wU291bmRzKSB7XHJcblx0XHRcdFx0cGFyYW1zLnNjZW5lLnNvdW5kLnN0b3BBbGwoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGFyYW1zLnNjZW5lUGx1Z2luLnN0YXJ0KHBhcmFtcy5uZXdTY2VuZUtleSwgcGFyYW1zLnNjZW5lRGF0YSk7XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBCdXR0b24gdGhhdCBjaGFuZ2VzIGFuIGltYWdlIChpbWcpIHRleHR1cmUgd2l0aCBhbm90aGVyICh0ZXh0dXJlcyksXHJcblx0ICogb25lIGJ5IG9uZS4gTGlrZSBhIHNsaWRlc2hvdy5cclxuXHQgKiBAcGFyYW0gaW1nOiBhIHBoYXNlciBnYW1lIG9iamVjdCBpbWFnZSB0aGF0IGFjdCBhcyBhIGNvbnRhaW5lciBpbiBhIHdheS5cclxuXHQgKiBAcGFyYW0gdGV4dHVyZXM6IHRoZSB0ZXh0dXJlcyB0byBhcHBlbmQgdG8gaW1nLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgc2xpZGVCdG4ocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHRcdHg6IG51bWJlcjtcclxuXHRcdHk6IG51bWJlcjtcclxuXHRcdHRleHQ6IHN0cmluZztcclxuXHRcdGltZzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdFx0dGV4dHVyZUtleXM6IEFycmF5PHN0cmluZz47XHJcblx0XHRjYWxsYmFjaz86IEZ1bmN0aW9uO1xyXG5cdH0pOiB2b2lkIHtcclxuXHJcblx0XHRsZXQgY3VycmVudEluZGV4ID0gMDtcclxuXHJcblx0XHRwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuXHJcblx0XHRcdHBhcmFtcy54LFxyXG5cdFx0XHRwYXJhbXMueSxcclxuXHRcdFx0J2J1dHRvbicsXHJcblx0XHRcdEd1aS5zZWNvbmRhcnlCdG5TdHlsZSxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHJcblx0XHQpLmFkZExpc3RlbmVyKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0cGFyYW1zLnNjZW5lLnNvdW5kLmFkZCgnY2xpY2tTb3VuZCcpLnBsYXkoKTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50SW5kZXggPCBwYXJhbXMudGV4dHVyZUtleXMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdGN1cnJlbnRJbmRleCsrO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcmFtcy5pbWcuc2V0VGV4dHVyZShwYXJhbXMudGV4dHVyZUtleXNbY3VycmVudEluZGV4XSk7XHJcblxyXG5cdFx0XHRpZiAocGFyYW1zLmNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRwYXJhbXMuY2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHRpdGxlKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0dGV4dDogc3RyaW5nIDtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLzIsXHJcblx0XHRcdDI0LFxyXG5cdFx0XHQnaDMnLFxyXG5cdFx0XHRgY29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0XHRmb250LXNpemU6IDQwcHg7IFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHNlY3Rpb25UaXRsZShwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHg6IG51bWJlcjsgXHJcblx0XHR5OiBudW1iZXI7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdHBhcmFtcy54LFxyXG5cdFx0XHRwYXJhbXMueSxcclxuXHRcdFx0J2g0JyxcclxuXHRcdFx0YGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdFx0Zm9udC1zaXplOiAzMHB4OyBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmYCxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBjdXN0b21UZXh0KHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0eDogbnVtYmVyOyBcclxuXHRcdHk6IG51bWJlcjsgXHJcblx0XHR0ZXh0OiBzdHJpbmc7IFxyXG5cdH0pOiB2b2lkIHtcclxuXHJcblx0XHRwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuXHRcdFx0cGFyYW1zLngsXHJcblx0XHRcdHBhcmFtcy55LFxyXG5cdFx0XHQncCcsXHJcblx0XHRcdGBjb2xvcjogI2ZmZmZmZjsgXHJcblx0XHRcdGZvbnQtc2l6ZTogMjBweDsgXHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcblx0XHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZmAsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQmFyIHtcclxuXHJcblx0cHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHRwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGhlYWx0aFZhbHVlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHBlcmNlbnRhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZGVjcmVhc2UocEFtb3VudDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSAtPSBwQW1vdW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmhlYWx0aFZhbHVlID09PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gQmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMud2hpdGUuaGV4KTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA+IDMwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tQmx1ZS5oZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tUmVkLmhleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhbHRoV2lkdGggPSBNYXRoLmZsb29yKHRoaXMucGVyY2VudGFnZSAqIHRoaXMuaGVhbHRoVmFsdWUpO1xyXG5cdFx0Ly8gVGhlIGFjdHVhbCBoZWFsdGggamF1Z2UgeW91IHNlZSBkZWNyZWFzaW5nXHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIGhlYWx0aFdpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KSB7XHJcbiAgICAgICAgLy8gRXF1aXZhbGVudCB0byB0aGlzLmJhciA9IHBhcmFtcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKVxyXG4gICAgICAgIHRoaXMuYmFyID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcyhwYXJhbXMuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMueCA9IHBhcmFtcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBhcmFtcy55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMjtcclxuICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMTAwO1xyXG4gICAgICAgIHRoaXMucGVyY2VudGFnZSA9IDEwMC8xMDA7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG5cclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMuYmFyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIdWQge1xyXG5cclxuXHRwcml2YXRlIGF2YXRhcjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLkRPTUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB0ZXh0U3R5bGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR1c2VyOiBVc2VyO1xyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLnRleHRTdHlsZSA9IGBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsOyBcclxuXHRcdFx0bWFyZ2luOiAwOyBcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4OyBcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHhcclxuXHRcdGA7XHJcblxyXG5cdFx0aWYgKHBhcmFtcy51c2VyLnNjcmVlblNpZGUgPT09ICdsZWZ0Jykge1xyXG5cclxuXHRcdFx0dGhpcy5hdmF0YXIgPSBwYXJhbXMuc2NlbmUuYWRkLmltYWdlKFxyXG5cdFx0XHRcdDAsIFxyXG5cdFx0XHRcdDM1LCBcclxuXHRcdFx0XHRwYXJhbXMudXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXlcclxuXHRcdFx0KS5zZXRPcmlnaW4oMCwwKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudGV4dCA9IHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQnaDUnLFxyXG5cdFx0XHRcdHRoaXMudGV4dFN0eWxlLFxyXG5cdFx0XHRcdGAke3BhcmFtcy51c2VyLnVzZXJuYW1lfSB8IFJhdGlvICR7cGFyYW1zLnVzZXIucmF0aW99JWBcclxuXHRcdFx0KS5zZXRPcmlnaW4oMCwwKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHBhcmFtcy51c2VyLnNjcmVlblNpZGUgPT09ICdyaWdodCcpIHtcclxuXHJcblx0XHRcdHRoaXMuYXZhdGFyID0gcGFyYW1zLnNjZW5lLmFkZC5pbWFnZShcclxuXHRcdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSwgXHJcblx0XHRcdFx0MzUsIFxyXG5cdFx0XHRcdHBhcmFtcy51c2VyLmNoYXJhY3Rlckluc3RhbmNlLnRodW1ibmFpbEtleVxyXG5cdFx0XHQpLnNldE9yaWdpbigxLDApO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50ZXh0ID0gcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdFx0Z2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSksXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQnaDUnLFxyXG5cdFx0XHRcdHRoaXMudGV4dFN0eWxlLFxyXG5cdFx0XHRcdGAke3BhcmFtcy51c2VyLnVzZXJuYW1lfSB8IFJhdGlvICR7cGFyYW1zLnVzZXIucmF0aW99JWBcclxuXHRcdFx0KS5zZXRPcmlnaW4oMSwwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSAnLi90aWxlbWFwJztcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEEgTGV2ZWwgY29uc2lzdHMgb2YgOiBhIGJhY2tncm91bmQgKyBhIG11c2ljIHRoZW1lICsgYSB0aWxlbWFwICsgYSBuYW1lICtcclxuICogYSB0aHVtYm5haWwuXHJcbiAqIEl0IGluaXRzIHRoZSBkaWZmZXJlbnQga2V5cyBuZWVkZWQgYW5kIGNyZWF0ZXMvZHJhdyB0aGUgYmFja2dyb3VuZCxcclxuICogdGhlIHRpbGVtYXAgKGJ5IGluc3RhbmNpYXRlIGl0KSBhbmQgcGxheSB0aGUgbXVzaWMgdGhlbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGV2ZWwge1xyXG5cclxuXHJcblx0cHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIF90aWxlbWFwOiBUaWxlbWFwO1xyXG5cdHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHJcblx0cHJpdmF0ZSBfdGh1bWJuYWlsS2V5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kS2V5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtdXNpY0tleTogc3RyaW5nO1xyXG5cclxuXHJcblx0cHVibGljIGdldCB0aWxlbWFwKCk6IFRpbGVtYXAge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbGVtYXA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB0aHVtYm5haWxLZXkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl90aHVtYm5haWxLZXk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuXHRcdGlkOiBudW1iZXI7XHJcblx0XHRuYW1lOiBzdHJpbmc7XHJcblx0fSkge1xyXG5cclxuXHRcdHRoaXMuaWQgPSBwYXJhbXMuaWQ7XHJcblx0XHR0aGlzLl9uYW1lID0gcGFyYW1zLm5hbWU7XHJcblx0XHR0aGlzLmJhY2tncm91bmRLZXkgPSBgbGV2ZWwke3RoaXMuaWR9QmFja2dyb3VuZGA7XHJcblx0XHR0aGlzLm11c2ljS2V5ID0gYGxldmVsJHt0aGlzLmlkfVRoZW1lYDtcclxuXHRcdHRoaXMuX3RodW1ibmFpbEtleSA9IGBsZXZlbCR7dGhpcy5pZH1UaHVtYm5haWxgO1xyXG5cclxuXHR9XHJcblxyXG5cdGNyZWF0ZShzY2VuZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIsXHJcblx0XHRcdGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMixcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kS2V5XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuX3RpbGVtYXAgPSBuZXcgVGlsZW1hcCh7XHJcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRpZDogdGhpcy5pZFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5zb3VuZC5hZGQodGhpcy5tdXNpY0tleSkucGxheSgpO1xyXG5cclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vcHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gJy4vaGVhbHRoQmFyJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9jaGFyYWN0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuXHRwcml2YXRlIF9wcm9qZWN0aWxlczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cdHByaXZhdGUgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcblxyXG5cdHByaXZhdGUgcmlnaHRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblx0cHJpdmF0ZSBsZWZ0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cdHByaXZhdGUganVtcEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuXHRwcml2YXRlIHNob290S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cdHByaXZhdGUgbGFzdFByZXNzZWRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblxyXG5cdHByaXZhdGUganVtcFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cdHByaXZhdGUgc2hvb3RTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcblx0cHJpdmF0ZSBsYXN0U2hvb3Q6IG51bWJlcjtcclxuXHRwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgdng6IG51bWJlcjtcclxuXHRwcml2YXRlIGdyYXZpdHlZOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBqdW1wVmVsb2NpdHk6IG51bWJlcjtcclxuXHRwcml2YXRlIGJvdW5jZTogbnVtYmVyO1xyXG5cdHByaXZhdGUgYnVsbGV0UHJvb2Y6IGJvb2xlYW47XHJcblxyXG5cdHByaXZhdGUgcmVhZG9ubHkgU1RBVEVTID0ge1xyXG5cdFx0QUxJVkU6ICdBTElWRScsXHJcblx0XHRIVVJUOiAnSFVSVCcsXHJcblx0XHRERUFEOiAnREVBRCdcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcHJvamVjdGlsZXMoKTogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwIHtcclxuXHRcdHJldHVybiB0aGlzLl9wcm9qZWN0aWxlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RlYWQoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5oZWFsdGggPD0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBodXJ0KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuYnVsbGV0UHJvb2YgPT09IGZhbHNlKSB7XHJcblx0XHRcdGlmICh0aGlzLmhlYWx0aCA+IDApIHtcclxuXHRcclxuXHRcdFx0XHR0aGlzLmhlYWx0aCAtPSAyMDtcclxuXHRcdFx0XHR0aGlzLmhlYWx0aEJhci5kZWNyZWFzZSgyMCk7XHJcblx0XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5IVVJUKTtcclxuXHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG1ha2VCdWxsZXRQcm9vZigpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmJ1bGxldFByb29mID09PSBmYWxzZSkgdGhpcy5idWxsZXRQcm9vZiA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRTb3VuZHMoKTogdm9pZCB7XHJcblx0XHR0aGlzLmp1bXBTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdqdW1wU291bmQnKTtcclxuXHRcdHRoaXMuc2hvb3RTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdzaG9vdFNvdW5kJyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRWaXRhbHMoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhlYWx0aCA9IDEwMDtcclxuXHRcdHRoaXMuYnVsbGV0UHJvb2YgPSBmYWxzZTtcclxuXHR9XHJcblx0XHJcblx0cHJpdmF0ZSBpbml0UGh5c2ljcygpOiB2b2lkIHtcclxuXHRcdHRoaXMuZ3Jhdml0eVkgPSAxMDAwO1xyXG5cdFx0dGhpcy5qdW1wVmVsb2NpdHkgPSAtNjAwO1xyXG5cdFx0dGhpcy52eCA9IDE1MDtcclxuXHRcdHRoaXMuYm91bmNlID0gMC41O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhcHBseVBoeXNpY3MoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRHcmF2aXR5WSh0aGlzLmdyYXZpdHlZKTtcclxuXHRcdHRoaXMuc2V0Qm91bmNlKHRoaXMuYm91bmNlKTtcclxuXHRcdHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0Q29udHJvbHMocEtleXMpOiB2b2lkIHtcclxuXHRcdHRoaXMuanVtcEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydqdW1wJ10pO1xyXG5cdFx0dGhpcy5yaWdodEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydyaWdodCddKTtcclxuXHRcdHRoaXMubGVmdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydsZWZ0J10pO1xyXG5cdFx0dGhpcy5zaG9vdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydzaG9vdCddKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEhlYWx0aEJhcihwSGVhbHRoQmFyOiBIZWFsdGhCYXIpOiB2b2lkIHtcclxuXHRcdHRoaXMuaGVhbHRoQmFyID0gcEhlYWx0aEJhcjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFNob290aW5nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5sYXN0U2hvb3QgPSAwO1xyXG5cdFx0dGhpcy5fcHJvamVjdGlsZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcblx0XHRcdHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvb3QoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zY2VuZS50aW1lLm5vdyA+IHRoaXMubGFzdFNob290KSB7XHJcblx0XHRcdHRoaXMuX3Byb2plY3RpbGVzLmFkZChcclxuXHRcdFx0XHRuZXcgUHJvamVjdGlsZSh7XHJcblx0XHRcdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcclxuXHRcdFx0XHRcdC8vIENoYW5naW5nIGJ1bGxldCBzdGFydGluZyBwb2ludCBpZiBzcHJpdGUgaXMgZmxpcHBlZCBvbiBYIGF4aXNcclxuXHRcdFx0XHRcdHg6ICghdGhpcy5mbGlwWCkgPyB0aGlzLnggKyAyMCA6IHRoaXMueCAtIDIwLFxyXG5cdFx0XHRcdFx0eTogdGhpcy55ICsgMTEsXHJcblx0XHRcdFx0XHQvLyBCdWxsZXQgZGlyZWN0aW9uIChsZWZ0L3JpZ2h0KSBiYXNlZCBvbiBsYXN0IHByZXNzZWQga2V5XHJcblx0XHRcdFx0XHQvLyAoaS5lIGRpcmVjdGlvbiBvZiB0aGUgcGxheWVyKS4gRGVmYXVsdDogZ29lcyByaWdodC5cclxuXHRcdFx0XHRcdGRpcmVjdGlvbjogKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSkgPyAtMSA6IDEsXHJcblx0XHRcdFx0XHR0ZXh0dXJlS2V5OiAncHJvamVjdGlsZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmxhc3RTaG9vdCA9IHRoaXMuc2NlbmUudGltZS5ub3cgKyA1MDA7XHJcblx0XHRcdC8vIFBsYXlpbmcgc291bmQgaGVyZSBlbnN1cmVzIHVzIGl0IGlzIHBsYXllZCBvbmx5IG9uY2UgZXZlcnkgc2hvb3RcclxuXHRcdFx0dGhpcy5zaG9vdFNvdW5kLnBsYXkoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsaXBwaW5nIHRoZSBzcHJpdGUgb24gaXRzIFggYXhpcywgZGVwZW5kaW5nIG9uIHdoaWNoIGRpcmVjdGlvbiB5b3UgZ28uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBoYW5kbGVTcHJpdGVGbGlwcGluZygpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLmxlZnRLZXkpIHtcclxuXHRcdFx0Ly8gQ2hhbmdlZCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyBsZWZ0XHJcblx0XHRcdHRoaXMuZmxpcFggPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLnJpZ2h0S2V5KSB7XHJcblx0XHRcdC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0XHJcblx0XHRcdHRoaXMuZmxpcFggPSBmYWxzZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0XHJcblx0XHRcdHRoaXMuZmxpcFggPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlSnVtcGluZygpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmp1bXBLZXkuaXNEb3duKSB7XHJcblx0XHRcdGlmICh0aGlzLmJvZHkuYmxvY2tlZC5kb3duIHx8IHRoaXMuYm9keS50b3VjaGluZy5kb3duKSB7XHJcblx0XHRcdFx0dGhpcy5zZXRWZWxvY2l0eVkodGhpcy5qdW1wVmVsb2NpdHkpO1xyXG5cdFx0XHRcdHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZSBpZGxpbmcgKGRvaW5nIG5vdGhpbmcpIEFORCBpZGxpbmctc2hvb3RpbmcuXHJcblx0ICogVGhpcyBpbmNsdWRlcyBhbmltYXRpb24gcGxheWluZywgY2hlY2tpbmcga2V5IHByZXNzLCBzZXR0aW5nIHZlbG9jaXR5LFxyXG5cdCAqIGNyZWF0ZSBzaG9vdHMuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBoYW5kbGVJZGxpbmcoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuXHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUlETEVgLCB0cnVlKTtcclxuXHJcblx0XHQvLyBJZGxpbmctU2hvb3RpbmdcclxuXHRcdGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1JRExFX1NIT09UYCwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuc2hvb3QoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZSB3YWxraW5nIEFORCB3YWxraW5nLXNob290aW5nLlxyXG5cdCAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuXHQgKiBjcmVhdGUgc2hvb3RzIGFuZCByZW1lbWJlcmluZyBsYXN0IHByZXNzZWQga2V5LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgaGFuZGxlV2Fsa2luZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fVdBTEtgLCB0cnVlKTtcclxuXHJcblx0XHQvLyBXYWxraW5nIDogZ29pbmcgcmlnaHRcclxuXHRcdGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNldFZlbG9jaXR5WCh0aGlzLnZ4KTtcclxuXHRcdFx0dGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMucmlnaHRLZXk7XHRcclxuXHRcdH1cclxuXHRcdC8vIFdhbGtpbmcgOiBnb2luZyBsZWZ0XHJcblx0XHRpZiAodGhpcy5sZWZ0S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNldFZlbG9jaXR5WCgtdGhpcy52eCk7XHJcblx0XHRcdHRoaXMubGFzdFByZXNzZWRLZXkgPSB0aGlzLmxlZnRLZXk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gV2Fsa2luZy1TaG9vdGluZ1xyXG5cdFx0aWYgKHRoaXMuc2hvb3RLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fVdBTEtfU0hPT1RgLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5zaG9vdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHRleHR1cmVLZXk6IHN0cmluZztcclxuXHRcdGNvbnRyb2xLZXlzOiBvYmplY3Q7XHJcblx0XHRoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuXHR9KSB7XHJcblxyXG5cdFx0c3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuXHRcdHRoaXMuYXBwbHlQaHlzaWNzKCk7XHJcblx0XHR0aGlzLmluaXRTb3VuZHMoKTtcclxuXHRcdHRoaXMuaW5pdFZpdGFscygpO1xyXG5cdFx0dGhpcy5pbml0SGVhbHRoQmFyKHBhcmFtcy5oZWFsdGhCYXIpO1xyXG5cdFx0dGhpcy5pbml0U2hvb3RpbmcoKTtcclxuXHRcdHRoaXMuaW5pdENvbnRyb2xzKHBhcmFtcy5jb250cm9sS2V5cyk7XHJcblxyXG5cdFx0Ly8gUmVzdHJhaW4gdGhlIGJvdW5kaW5nQm94XHJcblx0XHR0aGlzLnNldFNpemUoMjAsIDYwKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLkFMSVZFKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpOiB2b2lkIHtcclxuXHJcblx0XHRpZiAodGhpcy5pc0RlYWQoKSkgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVTLkRFQUQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkFMSVZFKSB7XHJcblx0XHRcdC8vIFRoaXMgaXMgZGV0YWNoZWQgZnJvbSB0aGUgb3RoZXIgYmxvY2sgYmVjYXVzZSB5b3UgY2FuIGRvIGFueXRoaW5nXHJcblx0XHRcdC8vIHdoaWxlIGp1bXBpbmc6IHdhbGsvd2Fsay1zaG9vdCwgaWRsZS9pZGxlLXNob290LiBTbyBpdCBpc24ndCBcclxuXHRcdFx0Ly8gZGVwZW5kYW50IG9mIHdoZXRoZXIgeW91J3JlIHByZXNzaW5nIGxlZnQgb3IgcmlnaHQgb3Igd2hhdGV2ZXIuXHJcblx0XHRcdHRoaXMuaGFuZGxlSnVtcGluZygpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMucmlnaHRLZXkuaXNEb3duIHx8IHRoaXMubGVmdEtleS5pc0Rvd24pIHtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZVdhbGtpbmcoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZUlkbGluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmhhbmRsZVNwcml0ZUZsaXBwaW5nKCk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5IVVJUKSB7XHJcblxyXG5cdFx0XHR0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1ISVRgLCB0cnVlKTtcclxuXHJcblx0XHRcdHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG5cclxuXHRcdFx0Ly8gVGhpcyBsZWFkcyB0byBodXJ0IGFuaW0gYnVnIFxyXG5cdFx0XHR0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRcdGRlbGF5OiAxMDAwLFxyXG5cdFx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5BTElWRSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5ERUFEKSB7XHJcblxyXG5cdFx0XHQvLyBXZSBkb24ndCByZXNldCBzdGF0ZSB0byBBTElWRSBjYXVzZSBpdCdzIGVuZCBvZiB0aGUgZ2FtZVxyXG5cclxuXHRcdFx0dGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9REVBRGAsIHRydWUpO1xyXG5cclxuXHRcdFx0dGhpcy5zZXRWZWxvY2l0eVgoMCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vd24gUGxheWVyIFN0YXRlXCIpO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcblx0cHJpdmF0ZSB2eDogbnVtYmVyO1xyXG5cdHByaXZhdGUgZGlyZWN0aW9uOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgaXNPdXQoKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8IHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHwgdGhpcy54IDwgMCB8fCB0aGlzLnkgPCAwKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0QW5pbWF0aW9ucygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0a2V5OiAnY29sbGlzaW9uRWZmZWN0MScsXHJcblx0XHRcdGZyYW1lczogdGhpcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnY29sbGlzaW9uRWZmZWN0MScsIHtcclxuXHRcdFx0XHRzdGFydDogMCxcclxuXHRcdFx0XHRlbmQ6IDFcclxuXHRcdFx0fSksXHJcblx0XHRcdHJlcGVhdDogMVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuXHRcdHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMudnggPSA3MDA7XHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb247XHJcblx0XHRcclxuXHRcdHRoaXMuaW5pdEFuaW1hdGlvbnMoKTtcclxuXHJcblx0XHR0aGlzLnNldFZlbG9jaXR5WCh0aGlzLmRpcmVjdGlvbiAqIHRoaXMudngpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuaXNPdXQoKSkge1xyXG5cclxuXHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdQcm9qZWN0aWxlIGRlc3Ryb3llZCBjYXVzZSBvdXQgb2Ygd29ybGQgYm91bmRzJyk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBUaWxlbWFwIHtcclxuXHJcblxyXG5cdHByaXZhdGUgbWFwOiBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcDtcclxuXHRwcml2YXRlIHRpbGVzZXQ6IFBoYXNlci5UaWxlbWFwcy5UaWxlc2V0O1xyXG5cdHByaXZhdGUgX21haW5MYXllcjogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllcjtcclxuXHRwcml2YXRlIHN1YkxheWVyOiBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyO1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2V0dGVyIGZvciB0aGUgbGF5ZXIgdGhhdCBjb2xsaWRlczogJ2NvbGxpZGVzJyBzZXQgdG8gdHJ1ZSBpbiBUaWxlZC5cclxuXHQgKi9cclxuXHRnZXQgbWFpbkxheWVyKCk6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21haW5MYXllcjtcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdGlkOiBudW1iZXI7IFxyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLm1hcCA9IHBhcmFtcy5zY2VuZS5tYWtlLnRpbGVtYXAoeyBcclxuXHRcdFx0a2V5OiBgbGV2ZWwke3BhcmFtcy5pZH1gXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnRpbGVzZXQgPSB0aGlzLm1hcC5hZGRUaWxlc2V0SW1hZ2UoXHJcblx0XHRcdGBsZXZlbCR7cGFyYW1zLmlkfS10aWxlc2hlZXRgLCBcclxuXHRcdFx0YGxldmVsJHtwYXJhbXMuaWR9VGlsZXNoZWV0YFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLl9tYWluTGF5ZXIgPSB0aGlzLm1hcC5jcmVhdGVTdGF0aWNMYXllcihcclxuXHRcdFx0J21haW5MYXllcicsIFxyXG5cdFx0XHR0aGlzLnRpbGVzZXQsIDAsIDBcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5fbWFpbkxheWVyLnNldENvbGxpc2lvbkJ5UHJvcGVydHkoeyBcclxuXHRcdFx0Y29sbGlkZXM6IHRydWVcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuc3ViTGF5ZXIgPSB0aGlzLm1hcC5jcmVhdGVTdGF0aWNMYXllcihcclxuXHRcdFx0J3N1YkxheWVyJyxcclxuXHRcdFx0dGhpcy50aWxlc2V0LCAwLCAwXHJcblx0XHQpO1x0XHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi9jaGFyYWN0ZXJcIjtcclxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi9sZXZlbFwiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9ndWlcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcblxyXG5cclxuXHRwcml2YXRlIF9pZDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3VzZXJuYW1lOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfcmF0aW86IG51bWJlcjtcclxuXHRwcml2YXRlIF9hdmF0YXI6IHN0cmluZztcclxuXHRwcml2YXRlIF9zY3JlZW5TaWRlOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfY2hhcmFjdGVySW5zdGFuY2U6IENoYXJhY3RlcjtcclxuXHRwcml2YXRlIF9wbGF5ZXJJbnN0YW5jZTogUGxheWVyO1xyXG5cdHByaXZhdGUgX2xldmVsSW5zdGFuY2U6IExldmVsO1xyXG5cclxuXHRcclxuXHQvKipcclxuXHQgKiBVc2VyJ3MgaWQgZnJvbSBEQi5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5faWQ7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFVzZXIncyB1c2VybmFtZSBmcm9tIERCLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgdXNlcm5hbWUoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl91c2VybmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZXIncyByYXRpbyBmcm9tIERCLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcmF0aW8oKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9yYXRpbztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgc2NyZWVuU2lkZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NjcmVlblNpZGU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGFyYWN0ZXIgdGhlIHVzZXIgaGFzIGNob3NlbiBpbiB0aGUgTWVudS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGNoYXJhY3Rlckluc3RhbmNlKCk6IENoYXJhY3RlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2hhcmFjdGVySW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQbGF5ZXIgY3JlYXRlZCBpbiBHYW1lIFNjZW5lIGJhc2VkIG9uIFVzZXIncyBjaGFyYWN0ZXIgY2hvaWNlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcGxheWVySW5zdGFuY2UoKTogUGxheWVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9wbGF5ZXJJbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExldmVsIHRoZSB1c2VyIGhhcyBjaG9zZW4gaW4gdGhlIE1lbnUsIG1ha2VzIG1vcmUgc2Vuc2Ugd2hlbiBwbGF5aW5nIHNvbG8uXHJcblx0ICovXHJcblx0cHVibGljIGdldCBsZXZlbEluc3RhbmNlKCk6IExldmVsIHtcclxuXHRcdHJldHVybiB0aGlzLl9sZXZlbEluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjaGFyYWN0ZXJJbnN0YW5jZSh2OiBDaGFyYWN0ZXIpIHtcclxuXHRcdHRoaXMuX2NoYXJhY3Rlckluc3RhbmNlID0gdjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcGxheWVySW5zdGFuY2UodjogUGxheWVyKSB7XHJcblx0XHR0aGlzLl9wbGF5ZXJJbnN0YW5jZSA9IHY7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGxldmVsSW5zdGFuY2UodjogTGV2ZWwpIHtcclxuXHRcdHRoaXMuX2xldmVsSW5zdGFuY2UgPSB2O1xyXG5cdH1cclxuXHRcclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IFxyXG5cdFx0aWQ6IG51bWJlcjsgXHJcblx0XHR1c2VybmFtZTogc3RyaW5nOyBcclxuXHRcdHJhdGlvOiBudW1iZXI7XHJcblx0XHRzY3JlZW5TaWRlOiBzdHJpbmc7XHJcblx0fSkge1xyXG5cclxuXHRcdHRoaXMuX2lkID0gcGFyYW1zLmlkO1xyXG5cdFx0dGhpcy5fdXNlcm5hbWUgPSBwYXJhbXMudXNlcm5hbWU7XHJcblx0XHR0aGlzLl9yYXRpbyA9IHBhcmFtcy5yYXRpbztcclxuXHRcdHRoaXMuX3NjcmVlblNpZGUgPSBwYXJhbXMuc2NyZWVuU2lkZTtcclxuXHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gJy4uL29iamVjdHMvbGV2ZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vb2JqZWN0cy91c2VyJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi4vb2JqZWN0cy9jaGFyYWN0ZXInO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tICcuLi9vYmplY3RzL2d1aSc7XHJcbmltcG9ydCB7IHBhcnNlZFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlJztcclxuXHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ0Jvb3QnXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG5cdHByaXZhdGUgbGV2ZWxzOiBBcnJheTxMZXZlbD5cclxuXHRwcml2YXRlIHVzZXJzOiBBcnJheTxVc2VyPjtcclxuXHRwcml2YXRlIGNoYXJhY3RlcnM6IEFycmF5PENoYXJhY3Rlcj47XHJcblxyXG5cdHByaXZhdGUgbG9nbzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdHByaXZhdGUgYnRuOiBQaGFzZXIuR2FtZU9iamVjdHMuRE9NRWxlbWVudDtcclxuXHRwcml2YXRlIGJhY2tncm91bmQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblx0XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoc2NlbmVDb25maWcpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHJcblx0XHR0aGlzLmxldmVscyA9IFtcclxuXHRcdFx0bmV3IExldmVsKHtcclxuXHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRuYW1lOiBcIkNpbWV0aWVyZVwiXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRuZXcgTGV2ZWwoe1xyXG5cdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdG5hbWU6IFwiUHJhaXJpZVwiXHJcblx0XHRcdH0pXHJcblx0XHRdO1xyXG5cdFx0XHJcblx0XHR0aGlzLnVzZXJzID0gW1xyXG5cdFx0XHRuZXcgVXNlcih7XHJcblx0XHRcdFx0aWQ6IHBhcnNlZFN0b3JhZ2UoKT8ubWFpblVzZXI/LmlkIHx8IDAsXHJcblx0XHRcdFx0dXNlcm5hbWU6IHBhcnNlZFN0b3JhZ2UoKT8ubWFpblVzZXI/LnVzZXJuYW1lIHx8ICdGb28xJyxcclxuXHRcdFx0XHRyYXRpbzogcGFyc2VkU3RvcmFnZSgpPy5tYWluVXNlcj8ucmF0aW8gfHwgMCxcclxuXHRcdFx0XHRzY3JlZW5TaWRlOiAnbGVmdCdcclxuXHRcdFx0fSksXHJcblxyXG5cdFx0XHRuZXcgVXNlcih7XHJcblx0XHRcdFx0aWQ6IHBhcnNlZFN0b3JhZ2UoKT8uc2Vjb25kYXJ5VXNlcj8uaWQgfHwgMCxcclxuXHRcdFx0XHR1c2VybmFtZTogcGFyc2VkU3RvcmFnZSgpPy5zZWNvbmRhcnlVc2VyPy51c2VybmFtZSB8fCAnQm9vMicsXHJcblx0XHRcdFx0cmF0aW86IHBhcnNlZFN0b3JhZ2UoKT8uc2Vjb25kYXJ5VXNlcj8ucmF0aW8gfHwgMCxcclxuXHRcdFx0XHRzY3JlZW5TaWRlOiAncmlnaHQnXHJcblx0XHRcdH0pXHJcblx0XHRdO1xyXG5cclxuXHRcdHRoaXMuY2hhcmFjdGVycyA9IFtcclxuXHRcdFx0bmV3IENoYXJhY3Rlcih7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0ZGV0YWlsczogeyBuaWNrbmFtZTogXCJTdGV2aWVcIiB9LFxyXG5cdFx0XHRcdHN0YXRzOiB7fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IENoYXJhY3Rlcih7XHJcblx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0ZGV0YWlsczogeyBuaWNrbmFtZTogXCJDYXJvbGluZVwiIH0sXHJcblx0XHRcdFx0c3RhdHM6IHt9XHJcblx0XHRcdH0pLFxyXG5cdFx0XHRuZXcgQ2hhcmFjdGVyKHtcclxuXHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHRkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIktyaXN0b2ZcIiB9LFxyXG5cdFx0XHRcdHN0YXRzOiB7fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IENoYXJhY3Rlcih7XHJcblx0XHRcdFx0aWQ6IDQsXHJcblx0XHRcdFx0ZGV0YWlsczogeyBuaWNrbmFtZTogXCJLcmlzdHlcIiB9LFxyXG5cdFx0XHRcdHN0YXRzOiB7fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IENoYXJhY3Rlcih7XHJcblx0XHRcdFx0aWQ6IDUsXHJcblx0XHRcdFx0ZGV0YWlsczogeyBuaWNrbmFtZTogXCJPcm9uXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiA2LFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiQWxleGFcIiB9LFxyXG5cdFx0XHRcdHN0YXRzOiB7fVxyXG5cdFx0XHR9KVxyXG5cdFx0XTtcclxuXHJcblx0XHQvLyBVc2luZyB0aGUgc2NlbmUgRGF0YSBNYW5hZ2VyIHRvIHN0b3JlIGRhdGEgb24gYSBzY2VuZSBsZXZlbC5cclxuXHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJywgdGhpcy51c2Vycyk7XHJcblx0XHR0aGlzLmRhdGEuc2V0KCdjaGFyYWN0ZXJzJywgdGhpcy5jaGFyYWN0ZXJzKTtcclxuXHRcdHRoaXMuZGF0YS5zZXQoJ2xldmVscycsIHRoaXMubGV2ZWxzKTtcclxuXHJcblx0fVxyXG5cclxuXHRwcmVsb2FkKCkge1xyXG5cclxuXHRcdHRoaXMubG9hZC5wYWNrKFxyXG5cdFx0XHRcInByZWxvYWRcIixcclxuXHRcdFx0XCJhc3NldHMvcGFjay5qc29uXCIsXHJcblx0XHRcdFwicHJlbG9hZFwiXHJcblx0XHQpO1xyXG5cdFx0XHJcblx0XHQvLyBQcmVsb2FkIGFsbCBjaGFyYWN0ZXJzIGF0bGFzZXMgOiBhIGpzb24gZmlsZSB0aGF0IGFjdHMgYXNcclxuXHRcdC8vIGFzIGEgXCJtYXBcIi9cImxpbmtcIiB0byBhIHBuZyBzcHJpdGVzaGVldC5cclxuXHRcdC8vIFVzZWQgZm9yIGRyYXdpbmcgUExheWVyIHRleHR1cmUgYW5kIHNldCBhbmltYXRpb25zLlxyXG5cdFx0Zm9yIChsZXQgbiA9IDE7IG4gPD0gNjsgbisrKSB7XHJcblx0XHRcdHRoaXMubG9hZC5hdGxhcyhcclxuXHRcdFx0XHRgY2hhcmFjdGVyJHtufWAsXHJcblx0XHRcdFx0YGFzc2V0cy9pbWFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXIke259L2NoYXJhY3RlciR7bn0tc3ByaXRlc2hlZXQucG5nYCxcclxuXHRcdFx0XHRgYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlciR7bn0vY2hhcmFjdGVyJHtufS1hdGxhcy5qc29uYFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5tdXNpY1RoZW1lID0gdGhpcy5zb3VuZC5hZGQoJ21lbnVUaGVtZScpO1xyXG5cdFx0dGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHJcblx0XHR0aGlzLmJhY2tncm91bmQgPSB0aGlzLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMpLzIsXHJcblx0XHRcdCdiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzJ1xyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmxvZ28gPSB0aGlzLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMpLzIuNSxcclxuXHRcdFx0J21haW5Mb2dvJ1xyXG5cdFx0KTtcclxuXHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7XHJcblx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHR4OiB0aGlzLmxvZ28ueCxcclxuXHRcdFx0eTogdGhpcy5sb2dvLnkgKyA4NCxcclxuXHRcdFx0dGV4dDogXCJXZWxjb21lIHRvIHRoZSBmaWdodCAhXCJcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRHdWkubWFpbkJ0bih7IFxyXG5cdFx0XHRzY2VuZTogdGhpcywgXHJcblx0XHRcdHRleHQ6IFwiTWVudVwiLFxyXG5cdFx0XHRzdG9wU291bmRzOiBmYWxzZSxcclxuXHRcdFx0c2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcblx0XHRcdG5ld1NjZW5lS2V5OiAnTWVudScsXHJcblx0XHRcdC8vIFBhc3NpbmcgdGhpcyBzY2VuZSBkYXRhIHRvIHRoZSBkZXN0aW5hdGlvbiBzY2VuZS5cclxuXHRcdFx0c2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKClcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEJvbWIgfSBmcm9tICcuLi9vYmplY3RzL2JvbWInO1xyXG5pbXBvcnQgeyBIdWQgfSBmcm9tICcuLi9vYmplY3RzL2h1ZCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL29iamVjdHMvcGxheWVyJztcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSAnLi4vb2JqZWN0cy9oZWFsdGhCYXInO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gJy4uL29iamVjdHMvbGV2ZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vb2JqZWN0cy91c2VyJztcclxuXHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ0dhbWUnXHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIEdhbWUgU2NlbmUgaXMgd2hlcmUgYWxsIHRoZSBhY3Rpb25zIHRha2VzIHBsYWNlLlxyXG4gKiBBY3RvcnMgc3VjaCBhcyBQbGF5ZXIsIEJvbWJzIGFuZCBCb21iIGFyZSBpbnN0YW5jaWF0ZWQuIFxyXG4gKiBTdGF0aWMgZWxlbWVudHMgc3VjaCBhcyBIVURzIGFuZCBIZWFsdGhCYXJzICh2aWEgUGxheWVyKSBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBMZXZlbCBpcyBjcmVhdGVkIChub3QgaW5zdGFuY2lhdGVkKSwgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHRoYXQgVGlsZW1hcCBpc1xyXG4gKiBkcmF3bi4gQ29sbGlkZXJzIGJldHdlZW4gYWN0b3JzIGFyZSBoYW5kbGVkLiBQbGF5ZXIgYW5pbWF0aW9ucyBhcmUgY3JlYXRlZC5cclxuICogSXQgc2V0cyBhIFNjZW5lIFdpbm5lciB3aGVuIG9uZSBvZiB0aGUgdXNlcnMgUExBWUVSIElOU1RBTkNFUyBpcyBkZWFkIGFuZFxyXG4gKiB0aGVuIHN0YXJ0IHRoZSBuZXcgc2NlbmUgKEdhbWVvdmVyIFNjZW5lKS5cclxuICogSXQgdGFrZXMgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIE1lbnUgU2NlbmUgKGNvbXBvc2VkIG9mIGFuIGFycmF5IG9mIHVzZXJzKSxcclxuICogYXZhaWxhYmxlIGhlcmUgaW4gdGhlIGluaXQoKSBldCBjcmVhdGUoKSBjYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRcclxuXHRwcml2YXRlIHBsYXllcjE6IFBsYXllcjtcclxuXHRwcml2YXRlIHBsYXllcjI6IFBsYXllcjtcclxuXHRwcml2YXRlIGh1ZDE6IEh1ZDtcclxuXHRwcml2YXRlIGh1ZDI6IEh1ZDtcclxuXHRwcml2YXRlIHRpbGVtYXA6IExldmVsW1widGlsZW1hcFwiXTtcclxuXHRwcml2YXRlIGJvbWJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblx0cHJpdmF0ZSBib21iQ3JlYXRpb25FdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuXHRwcml2YXRlIG5ld1NjZW5lVGltZWRFdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuXHRwcml2YXRlIHdpbm5lcjogVXNlcjtcclxuXHJcblxyXG5cdHByaXZhdGUgc2V0Q29sbGlkZXJzKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5ib21icyxcclxuXHRcdFx0dGhpcy50aWxlbWFwLm1haW5MYXllclxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMuYm9tYnMsXHJcblx0XHRcdHRoaXMucGxheWVyMSxcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5odXJ0KCk7XHJcblx0XHRcdFx0dGhpcy5ib21icy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5ib21icyxcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIyLmh1cnQoKTtcclxuXHRcdFx0XHR0aGlzLmJvbWJzLmdldEZpcnN0QWxpdmUoKS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHR0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG5cdFx0XHR0aGlzLnBsYXllcjEsXHJcblx0XHRcdHRoaXMucGxheWVyMlxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdFt0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMl0sIFxyXG5cdFx0XHR0aGlzLnRpbGVtYXAubWFpbkxheWVyXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLFxyXG5cdFx0XHR0aGlzLnBsYXllcjIucHJvamVjdGlsZXMsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEuaHVydCgpO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMi5wcm9qZWN0aWxlcy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLFxyXG5cdFx0XHR0aGlzLnBsYXllcjEucHJvamVjdGlsZXMsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIuaHVydCgpO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoc2NlbmVDb25maWcpO1xyXG5cdH1cclxuXHJcblxyXG5cdGluaXQobWVudVNjZW5lRGF0YSkge1xyXG5cclxuXHRcdGlmIChtZW51U2NlbmVEYXRhLnVzZXJzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5kYXRhLnNldCgndXNlcnMnLCBtZW51U2NlbmVEYXRhLnVzZXJzKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gQW5pbWF0aW9ucyBjcmVhdGlvblxyXG5cdFx0Zm9yIChjb25zdCB1c2VyIG9mIHRoaXMuZGF0YS5nZXQoJ3VzZXJzJykpIHtcclxuXHJcblx0XHRcdGxldCB0ayA9IHVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGV4dHVyZUtleTtcclxuXHJcblx0XHRcdHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0XHRrZXk6IGAke3RrfVdBTEtgLFxyXG5cdFx0XHRcdGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuXHRcdFx0XHRcdHByZWZpeDogJ3dhbGstc2lkZS1hcm1lZCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogNCxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDJcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmcmFtZVJhdGU6IDEwLFxyXG5cdFx0XHRcdHJlcGVhdDogLTFcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0XHRrZXk6IGAke3RrfVdBTEtfU0hPT1RgLFxyXG5cdFx0XHRcdGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuXHRcdFx0XHRcdHByZWZpeDogJ3dhbGstc2lkZS1zaG9vdCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogNCxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDJcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRyZXBlYXQ6IC0xXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31JRExFYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICdpZGxlLWZyb250LWFybWVkJyxcclxuXHRcdFx0XHRcdHN0YXJ0OiAxLFxyXG5cdFx0XHRcdFx0ZW5kOiA0LFxyXG5cdFx0XHRcdFx0emVyb1BhZDogMlxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGZyYW1lUmF0ZTogMTAsXHJcblx0XHRcdFx0cmVwZWF0OiAtMVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRcdGtleTogYCR7dGt9SURMRV9TSE9PVGAsXHJcblx0XHRcdFx0ZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG5cdFx0XHRcdFx0cHJlZml4OiAnaWRsZS1mcm9udC1zaG9vdCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogMSxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDJcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRyZXBlYXQ6IC0xXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31ISVRgLFxyXG5cdFx0XHRcdGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuXHRcdFx0XHRcdHByZWZpeDogJ2hpdCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogMSxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDIsXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0cmVwZWF0OiAxXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31ERUFEYCxcclxuXHRcdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcblx0XHRcdFx0XHRwcmVmaXg6ICdkZWFkJyxcclxuXHRcdFx0XHRcdHN0YXJ0OiAxLFxyXG5cdFx0XHRcdFx0ZW5kOiAxLFxyXG5cdFx0XHRcdFx0emVyb1BhZDogMixcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRyZXBlYXQ6IDFcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5sZXZlbEluc3RhbmNlLmNyZWF0ZSh0aGlzKTtcclxuXHJcblx0XHR0aGlzLnRpbGVtYXAgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmxldmVsSW5zdGFuY2UudGlsZW1hcDtcclxuXHJcblx0XHR0aGlzLmJvbWJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG5cdFx0XHRydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoaXMuYm9tYkNyZWF0aW9uRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRkZWxheTogMjAwMCxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmJvbWJzLmFkZChcclxuXHRcdFx0XHRcdG5ldyBCb21iKHtcclxuXHRcdFx0XHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHRcdFx0XHR4OiBQaGFzZXIuTWF0aC5CZXR3ZWVuKDUwLCBnZXRHYW1lV2lkdGgodGhpcykgLSA1MCksXHJcblx0XHRcdFx0XHRcdHk6IDAsXHJcblx0XHRcdFx0XHRcdHRleHR1cmVLZXk6ICdib21iJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYWxsYmFja1Njb3BlOiB0aGlzXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IDMwMCxcclxuXHRcdFx0eTogMzAwLFxyXG5cdFx0XHR0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcblx0XHRcdGNvbnRyb2xLZXlzOiB7XHJcblx0XHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuXHRcdFx0XHRsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCxcclxuXHRcdFx0XHRqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcblx0XHRcdFx0c2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWFsdGhCYXI6IG5ldyBIZWFsdGhCYXIoe1xyXG5cdFx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHRcdHg6IDYwLFxyXG5cdFx0XHRcdHk6IDQwXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IDkwMCxcclxuXHRcdFx0eTogMzAwLFxyXG5cdFx0XHR0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcblx0XHRcdGNvbnRyb2xLZXlzOiB7XHJcblx0XHRcdFx0cmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxyXG5cdFx0XHRcdGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG5cdFx0XHRcdGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG5cdFx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0VcclxuXHRcdFx0fSxcclxuXHRcdFx0aGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuXHRcdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0XHR4OiBnZXRHYW1lV2lkdGgodGhpcyktMTYyLFxyXG5cdFx0XHRcdHk6IDQwXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmh1ZDEgPSBuZXcgSHVkKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHVzZXI6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuaHVkMiA9IG5ldyBIdWQoe1xyXG5cdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0dXNlcjogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zZXRDb2xsaWRlcnMoKTtcclxuXHJcblx0XHQvLyBUaGlzIGlzIHdoZXJlIHdlIGhhdmUgdXNlcjwtLT5wbGF5ZXIgY29uY29yZGFuY2VcclxuXHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0ucGxheWVySW5zdGFuY2UgPSB0aGlzLnBsYXllcjE7XHJcblx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIyO1xyXG5cclxuXHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJywgdGhpcy5kYXRhLnZhbHVlcy51c2Vycyk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIxLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5wbGF5ZXIyLnVwZGF0ZSgpO1xyXG5cclxuXHRcdC8vIFdpbm5lciBoYW5kbGluZ1xyXG5cdFx0Ly8gRW50ZXIgd2lubmVyIGhhbmRsaW5nIG1vZGUgaWYgb25lIG9mIHRoZSBwbGF5ZXIgaXMgZGVhZFxyXG5cdFx0aWYgKHRoaXMucGxheWVyMS5pc0RlYWQoKSB8fCB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHJcblx0XHRcdC8vIE1ha2UgcGxheWVycyBpbnZpY2libGUgd2hpbGUgd2FpdGluZyBmb3IgdGhlIG5leHQgc2NlbmUgdG8gc3RhcnRcclxuXHRcdFx0Ly8gVGhpcyB3YXkgd2UgZG9uJ3QgaGF2ZSB0byBwYXVzZSBwaHlzaWNzIGJ1dCB0aGUgd2lubmVyIGlzIG5vdFxyXG5cdFx0XHQvLyBraWxsZWQgYnkgdGhlIGJvbWJzIHRoYXQgYXJlIHN0aWxsIGZhbGxpbmcuXHJcblx0XHRcdHRoaXMucGxheWVyMS5tYWtlQnVsbGV0UHJvb2YoKTtcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLm1ha2VCdWxsZXRQcm9vZigpO1xyXG5cclxuXHRcdFx0Ly8gRGVjaWRpbmcgd2hpY2ggb25lIGlzIHRoZSB3aW5uZXIgKHRoZSBvbmUgbm90IGRlYWQpXHJcblx0XHRcdGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgJiYgIXRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cdFx0XHRcdC8vIFdpbm5lcnMgYXJlIHVzZXJzIG5vdCBwbGF5ZXJzXHJcblx0XHRcdFx0dGhpcy53aW5uZXIgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnBsYXllcjEuaXNEZWFkKCkgJiYgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcblx0XHRcdFx0dGhpcy53aW5uZXIgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxheWVyMi5pc0RlYWQoKSAmJiB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHRcdFx0XHQvLyBOdWxsaW5nIHRoZSB3aW5uZXIgaWYgdGhlcmUncyBubyB3aW5uZXIgYXQgYWxsXHJcblx0XHRcdFx0Ly8gVHlwaWNhbGx5IHRoaXMgc2hvdWxkbid0IGV2ZXIgaGFwcGVuIGJ1dCB3aG8ga25vd3MuLi5cclxuXHRcdFx0XHQvLyBDaGVjayBpbiBuZXh0IHNjZW5lIGlmIHdpbm5lciBpcyB0cnV0aHksIHByaW50aW5nIGFsdCB0ZXh0XHJcblx0XHRcdFx0Ly8gaWYgbm90IChsaWtlIGlmIG51bGwpLlxyXG5cdFx0XHRcdHRoaXMud2lubmVyID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5kYXRhLnNldCgnd2lubmVyJywgdGhpcy53aW5uZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gMyBzZWNvbmRzIGRlbGF5IGJlZm9yZSBsYXVuY2hpbmcgdGhlIG5leHQgc2NlbmVcclxuXHRcdFx0dGhpcy5uZXdTY2VuZVRpbWVkRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRcdGRlbGF5OiAzMDAwLFxyXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHQvL3RoaXMuc291bmQuc3RvcEFsbCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnR2FtZW92ZXInLCB0aGlzLmRhdGEuZ2V0QWxsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvZ3VpJztcclxuaW1wb3J0IHsgcGFyc2VkU3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UnO1xyXG5cclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG5cdGFjdGl2ZTogZmFsc2UsXHJcblx0dmlzaWJsZTogZmFsc2UsXHJcblx0a2V5OiAnR2FtZW92ZXInXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVvdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuXHRwcml2YXRlIG1haW5NZXNzYWdlOiBzdHJpbmc7XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxpbmdTdG9yYWdlKCkge1xyXG5cdFx0aWYgKHBhcnNlZFN0b3JhZ2UoKSkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgcGFyc2VkVXNlcnMgPSBwYXJzZWRTdG9yYWdlKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5kYXRhLnZhbHVlcy53aW5uZXIuaWQgPT09IHBhcnNlZFVzZXJzLm1haW5Vc2VyLmlkKSB7XHJcblxyXG5cdFx0XHRcdHBhcnNlZFVzZXJzPy5tYWluVXNlcj8ubWF0Y2hzPy5wdXNoKHt3aW46IHRydWV9KTtcclxuXHRcdFx0XHRwYXJzZWRVc2Vycz8uc2Vjb25kYXJ5VXNlcj8ubWF0Y2hzPy5wdXNoKHt3aW46IGZhbHNlfSk7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YS52YWx1ZXMud2lubmVyLmlkID09PSBwYXJzZWRVc2Vycy5zZWNvbmRhcnlVc2VyLmlkKSB7XHJcblxyXG5cdFx0XHRcdHBhcnNlZFVzZXJzPy5zZWNvbmRhcnlVc2VyPy5tYXRjaHM/LnB1c2goe3dpbjogdHJ1ZX0pO1xyXG5cdFx0XHRcdHBhcnNlZFVzZXJzPy5tYWluVXNlcj8ubWF0Y2hzPy5wdXNoKHt3aW46IGZhbHNlfSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBTZXJpYWxpemUgYW5kIHNldCBpbiBzdG9yYWdlIHRoZSBuZXdseSB1cGRhdGVkIHVzZXJzIG9iamVjdHMgOlxyXG5cdFx0XHQvLyB3aXRoIHRoZWlyIGNvcnJlc3BvbmRpbmcgbWF0Y2hzIHB1c2hlZCBlbnRyaWVzXHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2FmaWdodCcsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFVzZXJzKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdChnYW1lU2NlbmVEYXRhKSB7XHJcblx0XHRcclxuXHRcdGlmIChnYW1lU2NlbmVEYXRhLndpbm5lcikge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5kYXRhLnNldCgnd2lubmVyJywgZ2FtZVNjZW5lRGF0YS53aW5uZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5tYWluTWVzc2FnZSA9IGAke3RoaXMuZGF0YS52YWx1ZXMud2lubmVyLnVzZXJuYW1lfSByZW1wb3J0ZSBsYSBwYXJ0aWUgIWA7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmhhbmRsaW5nU3RvcmFnZSgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHR0aGlzLm1haW5NZXNzYWdlID0gXCJPdXBzIG9uIGRpcmFpdCBxdSdpbCBuJ3kgYWkgcGFzIGRlIGdhZ25hbnQgIVwiO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0Z2V0R2FtZUhlaWdodCh0aGlzKS8yLCBcclxuXHRcdFx0J2JhY2tncm91bmRGb3JHVUlTY2VuZXMnXHJcblx0XHQpO1xyXG5cclxuXHRcdEd1aS50aXRsZSh7IHNjZW5lOiB0aGlzLCB0ZXh0OiBcIkZpbiBEZSBQYXJ0aWVcIiB9KTtcclxuXHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IFxyXG5cdFx0XHRzY2VuZTogdGhpcywgXHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzKS8yLCBcclxuXHRcdFx0eTogMjAwLFxyXG5cdFx0XHR0ZXh0OiB0aGlzLm1haW5NZXNzYWdlXHJcblx0XHR9KTtcclxuXHJcblx0XHRHdWkubWFpbkJ0bih7XHJcblx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHR0ZXh0OiBcIlJFSk9VRVJcIixcclxuXHRcdFx0c3RvcFNvdW5kczogZmFsc2UsXHJcblx0XHRcdHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRuZXdTY2VuZUtleTogJ01lbnUnXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC1zY2VuZSc7XHJcbmltcG9ydCB7IE1lbnVTY2VuZSB9IGZyb20gJy4vbWVudS1zY2VuZSc7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XHJcbmltcG9ydCB7IEdhbWVvdmVyU2NlbmUgfSBmcm9tICcuL2dhbWVvdmVyLXNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuXHRCb290U2NlbmUsXHJcblx0TWVudVNjZW5lLFxyXG5cdEdhbWVTY2VuZSxcclxuXHRHYW1lb3ZlclNjZW5lXHJcbl07IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvZ3VpJztcclxuXHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ01lbnUnXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG5cclxuXHRwcml2YXRlIGxldmVsVGh1bWI6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIGNoYXJhY3RlclRodW1iczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkltYWdlPjtcclxuXHJcblxyXG5cdHByaXZhdGUgZHJhd0JhY2tncm91bmQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMpLzIsXHJcblx0XHRcdCdiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzJ1xyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFRodW1ibmFpbHMoZGF0YSk6IHZvaWQge1xyXG5cdFx0Ly8gSW5pdCB0aGUgbGV2ZWwgdGh1bWJuYWlsIG9uIHRoZSAxc3QgbGV2ZWwgdGh1bWJuYWlsIChpbmRleCAwKVxyXG5cdFx0dGhpcy5sZXZlbFRodW1iID0gdGhpcy5hZGQuaW1hZ2UoMjAwLCAzMDAsIGRhdGEudmFsdWVzLmxldmVsc1swXS50aHVtYm5haWxLZXkpO1xyXG5cclxuXHRcdC8vIEluaXQgdGhlIDIgY2hhcmFjdGVycyB0aHVtYm5haWxzIHdpdGggdGhlIDFzdCBjaGFyYWN0ZXIgdGh1bWJuYWlsLlxyXG5cdFx0dGhpcy5jaGFyYWN0ZXJUaHVtYnMgPSBbXHJcblx0XHRcdHRoaXMuYWRkLmltYWdlKDY1MCwgMzAwLCBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdLnRodW1ibmFpbEtleSksXHJcblx0XHRcdHRoaXMuYWRkLmltYWdlKDg1MCwgMzAwLCBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdLnRodW1ibmFpbEtleSlcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByaW50VGl0bGVzKCk6IHZvaWQge1xyXG5cdFx0R3VpLnRpdGxlKHsgc2NlbmU6IHRoaXMsIHRleHQ6IFwiTUVOVVwiIH0pO1xyXG5cdFx0R3VpLnNlY3Rpb25UaXRsZSh7IHNjZW5lOiB0aGlzLCB4OiAyMDAsIHk6IDEzMCwgdGV4dDogXCJUZXJyYWluXCIgfSk7XHJcblx0XHRHdWkuc2VjdGlvblRpdGxlKHsgc2NlbmU6IHRoaXMsIHg6IDc1MCwgeTogMTMwLCB0ZXh0OiBcIlBlcnNvbm5hZ2VzXCIgfSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByaW50VGV4dHMoKTogdm9pZCB7XHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IHNjZW5lOiB0aGlzLCB4OiA2NTAsIHk6IDIxMCwgdGV4dDogXCJKb3VldXIgMVwiIH0pO1xyXG5cdFx0R3VpLmN1c3RvbVRleHQoeyBzY2VuZTogdGhpcywgeDogODUwLCB5OiAyMTAsIHRleHQ6IFwiSm91ZXVyIDJcIiB9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFVzZXJzQ2hvaWNlcyhkYXRhKTogdm9pZCB7XHJcblx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgZGF0YS52YWx1ZXMudXNlcnMpIHtcclxuXHRcdFx0dXNlci5sZXZlbEluc3RhbmNlID0gZGF0YS52YWx1ZXMubGV2ZWxzWzBdO1xyXG5cdFx0XHR1c2VyLmNoYXJhY3Rlckluc3RhbmNlID0gZGF0YS52YWx1ZXMuY2hhcmFjdGVyc1swXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcdFx0XHJcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRpbml0KGJvb3RTY2VuZURhdGEpIHtcclxuXHJcblx0XHRpZiAoYm9vdFNjZW5lRGF0YS51c2VycyAhPT0gdW5kZWZpbmVkICYmIFxyXG5cdFx0Ym9vdFNjZW5lRGF0YS5jaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQgJiYgXHJcblx0XHRib290U2NlbmVEYXRhLmxldmVscyAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsYm9vdFNjZW5lRGF0YS51c2Vycyk7XHJcblx0XHRcdHRoaXMuZGF0YS5zZXQoJ2NoYXJhY3RlcnMnLCBib290U2NlbmVEYXRhLmNoYXJhY3RlcnMpO1xyXG5cdFx0XHR0aGlzLmRhdGEuc2V0KCdsZXZlbHMnLCBib290U2NlbmVEYXRhLmxldmVscyk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgZ2V0dGluZyB1c2VycywgY2hhcmFjdGVycyBhbmQgbGV2ZWxzIGRhdGEgZnJvbSBCb290IFNjZW5lXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5pdFVzZXJzQ2hvaWNlcyh0aGlzLmRhdGEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NlbmUncyBjcmVhdGUgY2FsbGJhY2suXHJcblx0ICogQHBhcmFtIGRhdGEgRGF0YSBvYmplY3QgZnJvbSB0aGUgQm9vdCBTY2VuZSB0aGF0IGJlbG9uZ3MgdG8gdGhlIERhdGEgTWFuYWdlci5cclxuXHQgKiBIZXJlIHRoaXMgZGF0YSB3aWxsIGJlIG1vZGlmaWVkOiBjaGFyYWN0ZXJzIChlbGVtZW50cyBvZiBkYXRhLmNoYXJhY3RlcnMpIFxyXG5cdCAqIGFuZCBsZXZlbHMgKGVsZW1lbnRzIG9mIGRhdGEubGV2ZWxzKSBpbnN0YW5jZXMgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgXHJcblx0ICogdXNlcnMgaW5zdGFuY2VzIChkYXRhLnVzZXJzKS5cclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcblx0XHRcclxuXHRcdHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuXHRcdHRoaXMuaW5pdFRodW1ibmFpbHModGhpcy5kYXRhKTtcclxuXHRcdHRoaXMucHJpbnRUaXRsZXMoKTtcclxuXHRcdHRoaXMucHJpbnRUZXh0cygpO1xyXG5cclxuXHRcdC8vIFNsaWRlIGJ1dHRvbiBuwrAxLiBUaGlzIGlzIHdoZXJlIFVzZXIgMSAmIDIgY2hvb3NlIHRoZWlyIGxldmVsLiBcclxuXHRcdC8vIE1vZGlmaWVzIHRoZSBsZXZlbCB0aHVtYm5haWwgdGV4dHVyZSAod2l0aCB0ZXh0dXJlIGtleXMpIG9uIGNsaWNrLlxyXG5cdFx0R3VpLnNsaWRlQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0eDogMjAwLCBcclxuXHRcdFx0eTogNDUwLCBcclxuXHRcdFx0dGV4dDogXCJTdWl2YW50XCIsXHJcblx0XHRcdGltZzogdGhpcy5sZXZlbFRodW1iLFxyXG5cdFx0XHR0ZXh0dXJlS2V5czogdGhpcy5kYXRhLnZhbHVlcy5sZXZlbHMubWFwKGxldmVsID0+IGxldmVsLnRodW1ibmFpbEtleSksXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBsZXZlbCBvZiB0aGlzLmRhdGEudmFsdWVzLmxldmVscykge1xyXG5cdFx0XHRcdFx0aWYgKGxldmVsLnRodW1ibmFpbEtleSA9PT0gdGhpcy5sZXZlbFRodW1iLnRleHR1cmUua2V5KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0ubGV2ZWxJbnN0YW5jZSA9IGxldmVsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmxldmVsSW5zdGFuY2UgPSBsZXZlbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdFxyXG5cdFx0Ly8gU2xpZGUgYnV0dG9uIG7CsDIuIFRoaXMgaXMgd2hlcmUgVXNlciAxIGNob29zZSBpdHMgY2hhcmFjdGVyLiBcclxuXHRcdC8vIE1vZGlmaWVzIHRoZSB0ZXh0dXJlIG9mIHRoZSBjaGFyYWN0ZXIgdGh1bWJuYWlsIG7CsDEgb24gY2xpY2suXHJcblx0XHRHdWkuc2xpZGVCdG4oeyBcclxuXHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHR4OiA2NTAsIFxyXG5cdFx0XHR5OiAzNzAsIFxyXG5cdFx0XHR0ZXh0OiBcIlN1aXZhbnRcIixcclxuXHRcdFx0aW1nOiB0aGlzLmNoYXJhY3RlclRodW1ic1swXSxcclxuXHRcdFx0dGV4dHVyZUtleXM6IHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycy5tYXAoYyA9PiBjLnRodW1ibmFpbEtleSksXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBjIG9mIHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycykge1xyXG5cdFx0XHRcdFx0aWYgKGMudGh1bWJuYWlsS2V5ID09PSB0aGlzLmNoYXJhY3RlclRodW1ic1swXS50ZXh0dXJlLmtleSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmNoYXJhY3Rlckluc3RhbmNlID0gYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFNsaWRlIGJ1dHRvbiBuwrAzLiBUaGlzIGlzIHdoZXJlIFVzZXIgMiBjaG9vc2UgaXRzIGNoYXJhY3Rlci4gXHJcblx0XHQvLyBNb2RpZmllcyB0aGUgdGV4dHVyZSBvZiB0aGUgY2hhcmFjdGVyIHRodW1ibmFpbCBuwrAyIG9uIGNsaWNrLlxyXG5cdFx0R3VpLnNsaWRlQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0eDogODUwLCBcclxuXHRcdFx0eTogMzcwLCBcclxuXHRcdFx0dGV4dDogXCJTdWl2YW50XCIsXHJcblx0XHRcdGltZzogdGhpcy5jaGFyYWN0ZXJUaHVtYnNbMV0sXHJcblx0XHRcdHRleHR1cmVLZXlzOiB0aGlzLmRhdGEudmFsdWVzLmNoYXJhY3RlcnMubWFwKGMgPT4gYy50aHVtYm5haWxLZXkpLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdGZvciAoY29uc3QgYyBvZiB0aGlzLmRhdGEudmFsdWVzLmNoYXJhY3RlcnMpIHtcclxuXHRcdFx0XHRcdGlmIChjLnRodW1ibmFpbEtleSA9PT0gdGhpcy5jaGFyYWN0ZXJUaHVtYnNbMV0udGV4dHVyZS5rZXkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXS5jaGFyYWN0ZXJJbnN0YW5jZSA9IGM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0Ly8gU2V0IHRoZSBNT0RJRklFRCB1c2VycyBkYXRhIGZyb20gdGhlIGJvb3Qgc2NlbmUgdG8gdGhpcyBhY3R1YWwgc2NlbmUuXHJcblx0XHQvLyBNb2RpZmllZCBiZWNhdXNlIGxldmVsIGFuZCBjaGFyYWN0ZXJzIGluc3RhbmNlcyBoYXMgYmVlbiBsaW5rZWQgdG9cclxuXHRcdC8vIGVhY2ggdXNlcnMgdGhhbmtzIHRvIHRoZSBzbGlkZSBidXR0b25zIGNhbGxiYWNrcyBhbmQgdGhlIHRodW1ibmFpbHMuXHJcblx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsIHRoaXMuZGF0YS52YWx1ZXMudXNlcnMpO1xyXG5cclxuXHJcblx0XHRHdWkubWFpbkJ0bih7XHJcblx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHR0ZXh0OiBcIlNUQVJUXCIsXHJcblx0XHRcdHN0b3BTb3VuZHM6IHRydWUsXHJcblx0XHRcdHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG5cdFx0XHRuZXdTY2VuZUtleTogJ0dhbWUnLFxyXG5cdFx0XHQvLyBTZW5kaW5nIHRoaXMgc2NlbmUncyBkYXRhICg9IHVzZXJzKSB0byB0aGUgR2FtZSBTY2VuZS5cclxuXHRcdFx0c2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKClcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlZFN0b3JhZ2UoKSB7XHJcblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob2FmaWdodCcpKSB7XHJcblx0XHRjb25zdCBoZiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob2FmaWdodCcpO1xyXG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShoZik7XHJcblx0XHRyZXR1cm4gcGFyc2VkO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9