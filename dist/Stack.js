!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Stack=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Stack = (function () {
    function Stack() {
        this.items = [];
        this.poppedLastItem = function (item) {
        };
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        var item = this.items.pop();
        if (this.isEmpty) {
            this.poppedLastItem(item);
        }
        return item;
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Object.defineProperty(Stack.prototype, "size", {
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "isEmpty", {
        get: function () {
            return this.items.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    return Stack;
})();
module.exports = Stack;

},{}]},{},[1])(1)
});