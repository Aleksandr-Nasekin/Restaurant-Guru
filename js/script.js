"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
document.addEventListener("DOMContentLoaded", function () {
  new WOW({
    offset: 80
  }).init();
  var language = document.querySelector('.header-language'),
    languageActive = document.querySelector('.header-language__active'),
    languageDropdown = document.querySelector('.header-language__dropdown'),
    languageLinks = document.getElementsByClassName('header-language__link'),
    close = document.querySelector('.header-language .close'),
    languageList = document.getElementById('language-list');
  languageActive.addEventListener('click', function (e) {
    language.classList.add('active');
  });
  document.addEventListener('click', function (e) {
    if (e.target != languageDropdown && !e.target.closest('.header-language')) {
      language.classList.remove('active');
    }
  });
  close.addEventListener('click', function () {
    language.classList.remove('active');
  });
  var _iterator = _createForOfIteratorHelper(languageLinks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener('click', function (event) {
        event.preventDefault();
        language.classList.remove('active');
        var hrefValue = this.getAttribute('id');
        if (languageActive) {
          languageActive.className = "header-language__active ".concat(hrefValue);
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  ;
  languageList.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === "A") {
      var clickedLanguage = e.target.textContent;
      var clickedId = e.target.id;
      e.target.textContent = languageActive.textContent;
      e.target.id = languageActive.getAttribute("id");
      languageActive.textContent = clickedLanguage;
      languageActive.id = clickedId;
    }
  });
  var swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      390: {
        slidesPerView: 1.04,
        spaceBetween: 5
      },
      490: {
        slidesPerView: 1.2,
        spaceBetween: 5
      },
      590: {
        slidesPerView: 1.5,
        spaceBetween: 5,
        navigation: false
      },
      790: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      890: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3.3,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 3.7,
        spaceBetween: 10
      }
    }
  });
});