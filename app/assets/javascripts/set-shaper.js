webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(366);

	var _reactRedux = __webpack_require__(513);

	var _reactDnd = __webpack_require__(925);

	var _reactDndHtml5Backend = __webpack_require__(1047);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _set_shaper = __webpack_require__(1079);

	var _set_shaper2 = _interopRequireDefault(_set_shaper);

	var _actions = __webpack_require__(545);

	var _selectors = __webpack_require__(1135);

	var _store = __webpack_require__(915);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_store2.default.dispatch((0, _actions.setUserEmail)(Aker.userEmail));

	setInterval(function () {
	  var state = _store2.default.getState();
	  var selected = state.selected;

	  if (selected['top']) {
	    var pageNumber = (0, _selectors.getSelectedTopPage)(state);
	    if (pageNumber) {
	      _store2.default.dispatch((0, _actions.fetchSetAndMaterials)(selected['top'], pageNumber, 25));
	    }
	  }
	  if (selected['bottom']) {
	    var _pageNumber = (0, _selectors.getSelectedBottomPage)(state);
	    if (_pageNumber) {
	      _store2.default.dispatch((0, _actions.fetchSetAndMaterials)(selected['bottom'], _pageNumber, 25));
	    }
	  }
	}, 10000);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    selectedTopSet: (0, _selectors.getSelectedTop)(state),
	    selectedBottomSet: (0, _selectors.getSelectedBottom)(state),
	    userEmail: state.userEmail,
	    sets: state.api.sets.data,
	    userSets: (0, _selectors.getUserSets)(state)
	  };
	};

	// Make the App "smart"
	var SetShaperApp = (0, _reactRedux.connect)(mapStateToProps)(_set_shaper2.default);

	// Give it the drag and drop context
	// https://gaearon.github.io/react-dnd/docs-drag-drop-context.html
	SetShaperApp = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(SetShaperApp);

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(SetShaperApp, null)
	), document.getElementById('application'));

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DragDropContext = __webpack_require__(926);

	Object.defineProperty(exports, 'DragDropContext', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropContext).default;
	  }
	});

	var _DragDropContextProvider = __webpack_require__(1023);

	Object.defineProperty(exports, 'DragDropContextProvider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropContextProvider).default;
	  }
	});

	var _DragLayer = __webpack_require__(1024);

	Object.defineProperty(exports, 'DragLayer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragLayer).default;
	  }
	});

	var _DragSource = __webpack_require__(1027);

	Object.defineProperty(exports, 'DragSource', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragSource).default;
	  }
	});

	var _DropTarget = __webpack_require__(1042);

	Object.defineProperty(exports, 'DropTarget', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropTarget).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 926 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.unpackBackendForEs5Users = exports.createChildContext = exports.CHILD_CONTEXT_TYPES = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = DragDropContext;

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _dndCore = __webpack_require__(927);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _hoistNonReactStatics = __webpack_require__(1021);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _checkDecoratorArguments = __webpack_require__(1022);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CHILD_CONTEXT_TYPES = exports.CHILD_CONTEXT_TYPES = {
		dragDropManager: _propTypes2.default.object.isRequired
	};

	var createChildContext = exports.createChildContext = function createChildContext(backend, context) {
		return {
			dragDropManager: new _dndCore.DragDropManager(backend, context)
		};
	};

	var unpackBackendForEs5Users = exports.unpackBackendForEs5Users = function unpackBackendForEs5Users(backendOrModule) {
		// Auto-detect ES6 default export for people still using ES5
		var backend = backendOrModule;
		if ((typeof backend === 'undefined' ? 'undefined' : _typeof(backend)) === 'object' && typeof backend.default === 'function') {
			backend = backend.default;
		}
		(0, _invariant2.default)(typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html');
		return backend;
	};

	function DragDropContext(backendOrModule) {
		_checkDecoratorArguments2.default.apply(undefined, ['DragDropContext', 'backend'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params

		var backend = unpackBackendForEs5Users(backendOrModule);
		var childContext = createChildContext(backend);

		return function decorateContext(DecoratedComponent) {
			var _class, _temp;

			var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

			var DragDropContextContainer = (_temp = _class = function (_Component) {
				_inherits(DragDropContextContainer, _Component);

				function DragDropContextContainer() {
					_classCallCheck(this, DragDropContextContainer);

					return _possibleConstructorReturn(this, (DragDropContextContainer.__proto__ || Object.getPrototypeOf(DragDropContextContainer)).apply(this, arguments));
				}

				_createClass(DragDropContextContainer, [{
					key: 'getDecoratedComponentInstance',
					value: function getDecoratedComponentInstance() {
						(0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can not be a stateless component.');
						return this.child;
					}
				}, {
					key: 'getManager',
					value: function getManager() {
						return childContext.dragDropManager;
					}
				}, {
					key: 'getChildContext',
					value: function getChildContext() {
						return childContext;
					}
				}, {
					key: 'render',
					value: function render() {
						var _this2 = this;

						return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, {
							ref: function ref(child) {
								_this2.child = child;
							}
						}));
					}
				}]);

				return DragDropContextContainer;
			}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragDropContext(' + displayName + ')', _class.childContextTypes = CHILD_CONTEXT_TYPES, _temp);


			return (0, _hoistNonReactStatics2.default)(DragDropContextContainer, DecoratedComponent);
		};
	}

/***/ }),
/* 927 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DragDropManager = __webpack_require__(928);

	Object.defineProperty(exports, 'DragDropManager', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropManager).default;
	  }
	});

	var _DragSource = __webpack_require__(1018);

	Object.defineProperty(exports, 'DragSource', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragSource).default;
	  }
	});

	var _DropTarget = __webpack_require__(1019);

	Object.defineProperty(exports, 'DropTarget', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropTarget).default;
	  }
	});

	var _createTestBackend = __webpack_require__(1020);

	Object.defineProperty(exports, 'createTestBackend', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createTestBackend).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 928 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createStore = __webpack_require__(523);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _reducers = __webpack_require__(929);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _dragDrop = __webpack_require__(931);

	var dragDropActions = _interopRequireWildcard(_dragDrop);

	var _DragDropMonitor = __webpack_require__(1013);

	var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragDropManager = function () {
		function DragDropManager(createBackend) {
			var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, DragDropManager);

			var store = (0, _createStore2.default)(_reducers2.default);
			this.context = context;
			this.store = store;
			this.monitor = new _DragDropMonitor2.default(store);
			this.registry = this.monitor.registry;
			this.backend = createBackend(this);

			store.subscribe(this.handleRefCountChange.bind(this));
		}

		_createClass(DragDropManager, [{
			key: 'handleRefCountChange',
			value: function handleRefCountChange() {
				var shouldSetUp = this.store.getState().refCount > 0;
				if (shouldSetUp && !this.isSetUp) {
					this.backend.setup();
					this.isSetUp = true;
				} else if (!shouldSetUp && this.isSetUp) {
					this.backend.teardown();
					this.isSetUp = false;
				}
			}
		}, {
			key: 'getContext',
			value: function getContext() {
				return this.context;
			}
		}, {
			key: 'getMonitor',
			value: function getMonitor() {
				return this.monitor;
			}
		}, {
			key: 'getBackend',
			value: function getBackend() {
				return this.backend;
			}
		}, {
			key: 'getRegistry',
			value: function getRegistry() {
				return this.registry;
			}
		}, {
			key: 'getActions',
			value: function getActions() {
				var manager = this;
				var dispatch = this.store.dispatch;


				function bindActionCreator(actionCreator) {
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						var action = actionCreator.apply(manager, args);
						if (typeof action !== 'undefined') {
							dispatch(action);
						}
					};
				}

				return Object.keys(dragDropActions).filter(function (key) {
					return typeof dragDropActions[key] === 'function';
				}).reduce(function (boundActions, key) {
					var action = dragDropActions[key];
					boundActions[key] = bindActionCreator(action); // eslint-disable-line no-param-reassign
					return boundActions;
				}, {});
			}
		}]);

		return DragDropManager;
	}();

	exports.default = DragDropManager;

/***/ }),
/* 929 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = reduce;

	var _dragOffset = __webpack_require__(930);

	var _dragOffset2 = _interopRequireDefault(_dragOffset);

	var _dragOperation = __webpack_require__(935);

	var _dragOperation2 = _interopRequireDefault(_dragOperation);

	var _refCount = __webpack_require__(994);

	var _refCount2 = _interopRequireDefault(_refCount);

	var _dirtyHandlerIds = __webpack_require__(995);

	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

	var _stateId = __webpack_require__(1012);

	var _stateId2 = _interopRequireDefault(_stateId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function reduce() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var action = arguments[1];

		return {
			dirtyHandlerIds: (0, _dirtyHandlerIds2.default)(state.dirtyHandlerIds, action, state.dragOperation),
			dragOffset: (0, _dragOffset2.default)(state.dragOffset, action),
			refCount: (0, _refCount2.default)(state.refCount, action),
			dragOperation: (0, _dragOperation2.default)(state.dragOperation, action),
			stateId: (0, _stateId2.default)(state.stateId)
		};
	}

/***/ }),
/* 930 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

	var _dragDrop = __webpack_require__(931);

	var initialState = {
		initialSourceClientOffset: null,
		initialClientOffset: null,
		clientOffset: null
	};

	function areOffsetsEqual(offsetA, offsetB) {
		if (offsetA === offsetB) {
			return true;
		}
		return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
	}

	function dragOffset() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case _dragDrop.BEGIN_DRAG:
				return {
					initialSourceClientOffset: action.sourceClientOffset,
					initialClientOffset: action.clientOffset,
					clientOffset: action.clientOffset
				};
			case _dragDrop.HOVER:
				if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
					return state;
				}
				return _extends({}, state, {
					clientOffset: action.clientOffset
				});
			case _dragDrop.END_DRAG:
			case _dragDrop.DROP:
				return initialState;
			default:
				return state;
		}
	}

	function getSourceClientOffset(state) {
		var clientOffset = state.clientOffset,
		    initialClientOffset = state.initialClientOffset,
		    initialSourceClientOffset = state.initialSourceClientOffset;

		if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
			return null;
		}
		return {
			x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
			y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
		};
	}

	function getDifferenceFromInitialOffset(state) {
		var clientOffset = state.clientOffset,
		    initialClientOffset = state.initialClientOffset;

		if (!clientOffset || !initialClientOffset) {
			return null;
		}
		return {
			x: clientOffset.x - initialClientOffset.x,
			y: clientOffset.y - initialClientOffset.y
		};
	}

/***/ }),
/* 931 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.END_DRAG = exports.DROP = exports.HOVER = exports.PUBLISH_DRAG_SOURCE = exports.BEGIN_DRAG = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.beginDrag = beginDrag;
	exports.publishDragSource = publishDragSource;
	exports.hover = hover;
	exports.drop = drop;
	exports.endDrag = endDrag;

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(932);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isObject = __webpack_require__(933);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _matchesType = __webpack_require__(934);

	var _matchesType2 = _interopRequireDefault(_matchesType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BEGIN_DRAG = exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
	var PUBLISH_DRAG_SOURCE = exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
	var HOVER = exports.HOVER = 'dnd-core/HOVER';
	var DROP = exports.DROP = 'dnd-core/DROP';
	var END_DRAG = exports.END_DRAG = 'dnd-core/END_DRAG';

	function beginDrag(sourceIds) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { publishSource: true, clientOffset: null };
		var publishSource = options.publishSource,
		    clientOffset = options.clientOffset,
		    getSourceClientOffset = options.getSourceClientOffset;

		(0, _invariant2.default)((0, _isArray2.default)(sourceIds), 'Expected sourceIds to be an array.');

		var monitor = this.getMonitor();
		var registry = this.getRegistry();
		(0, _invariant2.default)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

		for (var i = 0; i < sourceIds.length; i++) {
			(0, _invariant2.default)(registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
		}

		var sourceId = null;
		for (var _i = sourceIds.length - 1; _i >= 0; _i--) {
			if (monitor.canDragSource(sourceIds[_i])) {
				sourceId = sourceIds[_i];
				break;
			}
		}
		if (sourceId === null) {
			return;
		}

		var sourceClientOffset = null;
		if (clientOffset) {
			(0, _invariant2.default)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
			sourceClientOffset = getSourceClientOffset(sourceId);
		}

		var source = registry.getSource(sourceId);
		var item = source.beginDrag(monitor, sourceId);
		(0, _invariant2.default)((0, _isObject2.default)(item), 'Item must be an object.');

		registry.pinSource(sourceId);

		var itemType = registry.getSourceType(sourceId);
		return {
			type: BEGIN_DRAG,
			itemType: itemType,
			item: item,
			sourceId: sourceId,
			clientOffset: clientOffset,
			sourceClientOffset: sourceClientOffset,
			isSourcePublic: publishSource
		};
	}

	function publishDragSource() {
		var monitor = this.getMonitor();
		if (!monitor.isDragging()) {
			return;
		}

		return { type: PUBLISH_DRAG_SOURCE };
	}

	function hover(targetIdsArg) {
		var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		    _ref$clientOffset = _ref.clientOffset,
		    clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;

		(0, _invariant2.default)((0, _isArray2.default)(targetIdsArg), 'Expected targetIds to be an array.');
		var targetIds = targetIdsArg.slice(0);

		var monitor = this.getMonitor();
		var registry = this.getRegistry();
		(0, _invariant2.default)(monitor.isDragging(), 'Cannot call hover while not dragging.');
		(0, _invariant2.default)(!monitor.didDrop(), 'Cannot call hover after drop.');

		// First check invariants.
		for (var i = 0; i < targetIds.length; i++) {
			var targetId = targetIds[i];
			(0, _invariant2.default)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

			var target = registry.getTarget(targetId);
			(0, _invariant2.default)(target, 'Expected targetIds to be registered.');
		}

		var draggedItemType = monitor.getItemType();

		// Remove those targetIds that don't match the targetType.  This
		// fixes shallow isOver which would only be non-shallow because of
		// non-matching targets.
		for (var _i2 = targetIds.length - 1; _i2 >= 0; _i2--) {
			var _targetId = targetIds[_i2];
			var targetType = registry.getTargetType(_targetId);
			if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
				targetIds.splice(_i2, 1);
			}
		}

		// Finally call hover on all matching targets.
		for (var _i3 = 0; _i3 < targetIds.length; _i3++) {
			var _targetId2 = targetIds[_i3];
			var _target = registry.getTarget(_targetId2);
			_target.hover(monitor, _targetId2);
		}

		return {
			type: HOVER,
			targetIds: targetIds,
			clientOffset: clientOffset
		};
	}

	function drop() {
		var _this = this;

		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var monitor = this.getMonitor();
		var registry = this.getRegistry();
		(0, _invariant2.default)(monitor.isDragging(), 'Cannot call drop while not dragging.');
		(0, _invariant2.default)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

		var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

		targetIds.reverse();
		targetIds.forEach(function (targetId, index) {
			var target = registry.getTarget(targetId);

			var dropResult = target.drop(monitor, targetId);
			(0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isObject2.default)(dropResult), 'Drop result must either be an object or undefined.');
			if (typeof dropResult === 'undefined') {
				dropResult = index === 0 ? {} : monitor.getDropResult();
			}

			_this.store.dispatch({
				type: DROP,
				dropResult: _extends({}, options, dropResult)
			});
		});
	}

	function endDrag() {
		var monitor = this.getMonitor();
		var registry = this.getRegistry();
		(0, _invariant2.default)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');

		var sourceId = monitor.getSourceId();
		var source = registry.getSource(sourceId, true);
		source.endDrag(monitor, sourceId);

		registry.unpinSource();

		return { type: END_DRAG };
	}

/***/ }),
/* 932 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 933 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 934 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = matchesType;

	var _isArray = __webpack_require__(932);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function matchesType(targetType, draggedItemType) {
		if ((0, _isArray2.default)(targetType)) {
			return targetType.some(function (t) {
				return t === draggedItemType;
			});
		} else {
			return targetType === draggedItemType;
		}
	}

/***/ }),
/* 935 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = dragOperation;

	var _without = __webpack_require__(936);

	var _without2 = _interopRequireDefault(_without);

	var _dragDrop = __webpack_require__(931);

	var _registry = __webpack_require__(993);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
		itemType: null,
		item: null,
		sourceId: null,
		targetIds: [],
		dropResult: null,
		didDrop: false,
		isSourcePublic: null
	};

	function dragOperation() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case _dragDrop.BEGIN_DRAG:
				return _extends({}, state, {
					itemType: action.itemType,
					item: action.item,
					sourceId: action.sourceId,
					isSourcePublic: action.isSourcePublic,
					dropResult: null,
					didDrop: false
				});
			case _dragDrop.PUBLISH_DRAG_SOURCE:
				return _extends({}, state, {
					isSourcePublic: true
				});
			case _dragDrop.HOVER:
				return _extends({}, state, {
					targetIds: action.targetIds
				});
			case _registry.REMOVE_TARGET:
				if (state.targetIds.indexOf(action.targetId) === -1) {
					return state;
				}
				return _extends({}, state, {
					targetIds: (0, _without2.default)(state.targetIds, action.targetId)
				});
			case _dragDrop.DROP:
				return _extends({}, state, {
					dropResult: action.dropResult,
					didDrop: true,
					targetIds: []
				});
			case _dragDrop.END_DRAG:
				return _extends({}, state, {
					itemType: null,
					item: null,
					sourceId: null,
					dropResult: null,
					didDrop: false,
					isSourcePublic: null,
					targetIds: []
				});
			default:
				return state;
		}
	}

/***/ }),
/* 936 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(937),
	    baseRest = __webpack_require__(981),
	    isArrayLikeObject = __webpack_require__(990);

	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});

	module.exports = without;


/***/ }),
/* 937 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(938),
	    arrayIncludes = __webpack_require__(972),
	    arrayIncludesWith = __webpack_require__(977),
	    arrayMap = __webpack_require__(978),
	    baseUnary = __webpack_require__(979),
	    cacheHas = __webpack_require__(980);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ }),
/* 938 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(939),
	    setCacheAdd = __webpack_require__(970),
	    setCacheHas = __webpack_require__(971);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 939 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(940),
	    mapCacheDelete = __webpack_require__(964),
	    mapCacheGet = __webpack_require__(967),
	    mapCacheHas = __webpack_require__(968),
	    mapCacheSet = __webpack_require__(969);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 940 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(941),
	    ListCache = __webpack_require__(955),
	    Map = __webpack_require__(963);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 941 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(942),
	    hashDelete = __webpack_require__(951),
	    hashGet = __webpack_require__(952),
	    hashHas = __webpack_require__(953),
	    hashSet = __webpack_require__(954);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 942 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(943);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 943 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(944);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 944 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(945),
	    getValue = __webpack_require__(950);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 945 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(946),
	    isMasked = __webpack_require__(947),
	    isObject = __webpack_require__(933),
	    toSource = __webpack_require__(949);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 946 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(525),
	    isObject = __webpack_require__(933);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 947 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(948);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 948 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(527);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 949 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 950 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 951 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 952 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(943);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 953 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(943);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 954 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(943);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 955 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(956),
	    listCacheDelete = __webpack_require__(957),
	    listCacheGet = __webpack_require__(960),
	    listCacheHas = __webpack_require__(961),
	    listCacheSet = __webpack_require__(962);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 956 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 957 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(958);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 958 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(959);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 959 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 960 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(958);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 961 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(958);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 962 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(958);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 963 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(944),
	    root = __webpack_require__(527);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 964 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(965);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 965 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(966);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 966 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 967 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(965);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 968 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(965);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 969 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(965);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 970 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 971 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 972 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(973);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ }),
/* 973 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(974),
	    baseIsNaN = __webpack_require__(975),
	    strictIndexOf = __webpack_require__(976);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ }),
/* 974 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ }),
/* 975 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ }),
/* 976 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ }),
/* 977 */
/***/ (function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ }),
/* 978 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 979 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 980 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 981 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(982),
	    overRest = __webpack_require__(983),
	    setToString = __webpack_require__(985);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 982 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 983 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(984);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 984 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 985 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(986),
	    shortOut = __webpack_require__(989);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 986 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(987),
	    defineProperty = __webpack_require__(988),
	    identity = __webpack_require__(982);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 987 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 988 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(944);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 989 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 990 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(991),
	    isObjectLike = __webpack_require__(533);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ }),
/* 991 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(946),
	    isLength = __webpack_require__(992);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 992 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 993 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.addSource = addSource;
	exports.addTarget = addTarget;
	exports.removeSource = removeSource;
	exports.removeTarget = removeTarget;
	var ADD_SOURCE = exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
	var ADD_TARGET = exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
	var REMOVE_SOURCE = exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
	var REMOVE_TARGET = exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

	function addSource(sourceId) {
		return {
			type: ADD_SOURCE,
			sourceId: sourceId
		};
	}

	function addTarget(targetId) {
		return {
			type: ADD_TARGET,
			targetId: targetId
		};
	}

	function removeSource(sourceId) {
		return {
			type: REMOVE_SOURCE,
			sourceId: sourceId
		};
	}

	function removeTarget(targetId) {
		return {
			type: REMOVE_TARGET,
			targetId: targetId
		};
	}

/***/ }),
/* 994 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = refCount;

	var _registry = __webpack_require__(993);

	function refCount() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var action = arguments[1];

		switch (action.type) {
			case _registry.ADD_SOURCE:
			case _registry.ADD_TARGET:
				return state + 1;
			case _registry.REMOVE_SOURCE:
			case _registry.REMOVE_TARGET:
				return state - 1;
			default:
				return state;
		}
	}

/***/ }),
/* 995 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = dirtyHandlerIds;
	exports.areDirty = areDirty;

	var _xor = __webpack_require__(996);

	var _xor2 = _interopRequireDefault(_xor);

	var _intersection = __webpack_require__(1009);

	var _intersection2 = _interopRequireDefault(_intersection);

	var _dragDrop = __webpack_require__(931);

	var _registry = __webpack_require__(993);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NONE = [];
	var ALL = [];

	function dirtyHandlerIds() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
		var action = arguments[1];
		var dragOperation = arguments[2];

		switch (action.type) {
			case _dragDrop.HOVER:
				break;
			case _registry.ADD_SOURCE:
			case _registry.ADD_TARGET:
			case _registry.REMOVE_TARGET:
			case _registry.REMOVE_SOURCE:
				return NONE;
			case _dragDrop.BEGIN_DRAG:
			case _dragDrop.PUBLISH_DRAG_SOURCE:
			case _dragDrop.END_DRAG:
			case _dragDrop.DROP:
			default:
				return ALL;
		}

		var targetIds = action.targetIds;
		var prevTargetIds = dragOperation.targetIds;

		var result = (0, _xor2.default)(targetIds, prevTargetIds);

		var didChange = false;
		if (result.length === 0) {
			for (var i = 0; i < targetIds.length; i++) {
				if (targetIds[i] !== prevTargetIds[i]) {
					didChange = true;
					break;
				}
			}
		} else {
			didChange = true;
		}

		if (!didChange) {
			return NONE;
		}

		var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
		var innermostTargetId = targetIds[targetIds.length - 1];

		if (prevInnermostTargetId !== innermostTargetId) {
			if (prevInnermostTargetId) {
				result.push(prevInnermostTargetId);
			}
			if (innermostTargetId) {
				result.push(innermostTargetId);
			}
		}

		return result;
	}

	function areDirty(state, handlerIds) {
		if (state === NONE) {
			return false;
		}

		if (state === ALL || typeof handlerIds === 'undefined') {
			return true;
		}

		return (0, _intersection2.default)(handlerIds, state).length > 0;
	}

/***/ }),
/* 996 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(997),
	    baseRest = __webpack_require__(981),
	    baseXor = __webpack_require__(998),
	    isArrayLikeObject = __webpack_require__(990);

	/**
	 * Creates an array of unique values that is the
	 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the given arrays. The order of result values is determined by the order
	 * they occur in the arrays.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.without
	 * @example
	 *
	 * _.xor([2, 1], [2, 3]);
	 * // => [1, 3]
	 */
	var xor = baseRest(function(arrays) {
	  return baseXor(arrayFilter(arrays, isArrayLikeObject));
	});

	module.exports = xor;


/***/ }),
/* 997 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 998 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(937),
	    baseFlatten = __webpack_require__(999),
	    baseUniq = __webpack_require__(1004);

	/**
	 * The base implementation of methods like `_.xor`, without support for
	 * iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of values.
	 */
	function baseXor(arrays, iteratee, comparator) {
	  var length = arrays.length;
	  if (length < 2) {
	    return length ? baseUniq(arrays[0]) : [];
	  }
	  var index = -1,
	      result = Array(length);

	  while (++index < length) {
	    var array = arrays[index],
	        othIndex = -1;

	    while (++othIndex < length) {
	      if (othIndex != index) {
	        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
	      }
	    }
	  }
	  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
	}

	module.exports = baseXor;


/***/ }),
/* 999 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(1000),
	    isFlattenable = __webpack_require__(1001);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ }),
/* 1000 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 1001 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(526),
	    isArguments = __webpack_require__(1002),
	    isArray = __webpack_require__(932);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ }),
/* 1002 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(1003),
	    isObjectLike = __webpack_require__(533);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 1003 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(525),
	    isObjectLike = __webpack_require__(533);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 1004 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(938),
	    arrayIncludes = __webpack_require__(972),
	    arrayIncludesWith = __webpack_require__(977),
	    cacheHas = __webpack_require__(980),
	    createSet = __webpack_require__(1005),
	    setToArray = __webpack_require__(1008);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ }),
/* 1005 */
/***/ (function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(1006),
	    noop = __webpack_require__(1007),
	    setToArray = __webpack_require__(1008);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ }),
/* 1006 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(944),
	    root = __webpack_require__(527);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 1007 */
/***/ (function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ }),
/* 1008 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 1009 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(978),
	    baseIntersection = __webpack_require__(1010),
	    baseRest = __webpack_require__(981),
	    castArrayLikeObject = __webpack_require__(1011);

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */
	var intersection = baseRest(function(arrays) {
	  var mapped = arrayMap(arrays, castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});

	module.exports = intersection;


/***/ }),
/* 1010 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(938),
	    arrayIncludes = __webpack_require__(972),
	    arrayIncludesWith = __webpack_require__(977),
	    arrayMap = __webpack_require__(978),
	    baseUnary = __webpack_require__(979),
	    cacheHas = __webpack_require__(980);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith : arrayIncludes,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];

	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap(array, baseUnary(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];

	  var index = -1,
	      seen = caches[0];

	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseIntersection;


/***/ }),
/* 1011 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(990);

	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject(value) {
	  return isArrayLikeObject(value) ? value : [];
	}

	module.exports = castArrayLikeObject;


/***/ }),
/* 1012 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = stateId;
	function stateId() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		return state + 1;
	}

/***/ }),
/* 1013 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(932);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _matchesType = __webpack_require__(934);

	var _matchesType2 = _interopRequireDefault(_matchesType);

	var _HandlerRegistry = __webpack_require__(1014);

	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

	var _dragOffset = __webpack_require__(930);

	var _dirtyHandlerIds = __webpack_require__(995);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragDropMonitor = function () {
		function DragDropMonitor(store) {
			_classCallCheck(this, DragDropMonitor);

			this.store = store;
			this.registry = new _HandlerRegistry2.default(store);
		}

		_createClass(DragDropMonitor, [{
			key: 'subscribeToStateChange',
			value: function subscribeToStateChange(listener) {
				var _this = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var handlerIds = options.handlerIds;

				(0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');
				(0, _invariant2.default)(typeof handlerIds === 'undefined' || (0, _isArray2.default)(handlerIds), 'handlerIds, when specified, must be an array of strings.');

				var prevStateId = this.store.getState().stateId;
				var handleChange = function handleChange() {
					var state = _this.store.getState();
					var currentStateId = state.stateId;
					try {
						var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, _dirtyHandlerIds.areDirty)(state.dirtyHandlerIds, handlerIds);

						if (!canSkipListener) {
							listener();
						}
					} finally {
						prevStateId = currentStateId;
					}
				};

				return this.store.subscribe(handleChange);
			}
		}, {
			key: 'subscribeToOffsetChange',
			value: function subscribeToOffsetChange(listener) {
				var _this2 = this;

				(0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');

				var previousState = this.store.getState().dragOffset;
				var handleChange = function handleChange() {
					var nextState = _this2.store.getState().dragOffset;
					if (nextState === previousState) {
						return;
					}

					previousState = nextState;
					listener();
				};

				return this.store.subscribe(handleChange);
			}
		}, {
			key: 'canDragSource',
			value: function canDragSource(sourceId) {
				var source = this.registry.getSource(sourceId);
				(0, _invariant2.default)(source, 'Expected to find a valid source.');

				if (this.isDragging()) {
					return false;
				}

				return source.canDrag(this, sourceId);
			}
		}, {
			key: 'canDropOnTarget',
			value: function canDropOnTarget(targetId) {
				var target = this.registry.getTarget(targetId);
				(0, _invariant2.default)(target, 'Expected to find a valid target.');

				if (!this.isDragging() || this.didDrop()) {
					return false;
				}

				var targetType = this.registry.getTargetType(targetId);
				var draggedItemType = this.getItemType();
				return (0, _matchesType2.default)(targetType, draggedItemType) && target.canDrop(this, targetId);
			}
		}, {
			key: 'isDragging',
			value: function isDragging() {
				return Boolean(this.getItemType());
			}
		}, {
			key: 'isDraggingSource',
			value: function isDraggingSource(sourceId) {
				var source = this.registry.getSource(sourceId, true);
				(0, _invariant2.default)(source, 'Expected to find a valid source.');

				if (!this.isDragging() || !this.isSourcePublic()) {
					return false;
				}

				var sourceType = this.registry.getSourceType(sourceId);
				var draggedItemType = this.getItemType();
				if (sourceType !== draggedItemType) {
					return false;
				}

				return source.isDragging(this, sourceId);
			}
		}, {
			key: 'isOverTarget',
			value: function isOverTarget(targetId) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shallow: false };
				var shallow = options.shallow;

				if (!this.isDragging()) {
					return false;
				}

				var targetType = this.registry.getTargetType(targetId);
				var draggedItemType = this.getItemType();
				if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
					return false;
				}

				var targetIds = this.getTargetIds();
				if (!targetIds.length) {
					return false;
				}

				var index = targetIds.indexOf(targetId);
				if (shallow) {
					return index === targetIds.length - 1;
				} else {
					return index > -1;
				}
			}
		}, {
			key: 'getItemType',
			value: function getItemType() {
				return this.store.getState().dragOperation.itemType;
			}
		}, {
			key: 'getItem',
			value: function getItem() {
				return this.store.getState().dragOperation.item;
			}
		}, {
			key: 'getSourceId',
			value: function getSourceId() {
				return this.store.getState().dragOperation.sourceId;
			}
		}, {
			key: 'getTargetIds',
			value: function getTargetIds() {
				return this.store.getState().dragOperation.targetIds;
			}
		}, {
			key: 'getDropResult',
			value: function getDropResult() {
				return this.store.getState().dragOperation.dropResult;
			}
		}, {
			key: 'didDrop',
			value: function didDrop() {
				return this.store.getState().dragOperation.didDrop;
			}
		}, {
			key: 'isSourcePublic',
			value: function isSourcePublic() {
				return this.store.getState().dragOperation.isSourcePublic;
			}
		}, {
			key: 'getInitialClientOffset',
			value: function getInitialClientOffset() {
				return this.store.getState().dragOffset.initialClientOffset;
			}
		}, {
			key: 'getInitialSourceClientOffset',
			value: function getInitialSourceClientOffset() {
				return this.store.getState().dragOffset.initialSourceClientOffset;
			}
		}, {
			key: 'getClientOffset',
			value: function getClientOffset() {
				return this.store.getState().dragOffset.clientOffset;
			}
		}, {
			key: 'getSourceClientOffset',
			value: function getSourceClientOffset() {
				return (0, _dragOffset.getSourceClientOffset)(this.store.getState().dragOffset);
			}
		}, {
			key: 'getDifferenceFromInitialOffset',
			value: function getDifferenceFromInitialOffset() {
				return (0, _dragOffset.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
			}
		}]);

		return DragDropMonitor;
	}();

	exports.default = DragDropMonitor;

/***/ }),
/* 1014 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(932);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _asap = __webpack_require__(1015);

	var _asap2 = _interopRequireDefault(_asap);

	var _registry = __webpack_require__(993);

	var _getNextUniqueId = __webpack_require__(1017);

	var _getNextUniqueId2 = _interopRequireDefault(_getNextUniqueId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HandlerRoles = {
		SOURCE: 'SOURCE',
		TARGET: 'TARGET'
	};

	function validateSourceContract(source) {
		(0, _invariant2.default)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
		(0, _invariant2.default)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
		(0, _invariant2.default)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
	}

	function validateTargetContract(target) {
		(0, _invariant2.default)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
		(0, _invariant2.default)(typeof target.hover === 'function', 'Expected hover to be a function.');
		(0, _invariant2.default)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
	}

	function validateType(type, allowArray) {
		if (allowArray && (0, _isArray2.default)(type)) {
			type.forEach(function (t) {
				return validateType(t, false);
			});
			return;
		}

		(0, _invariant2.default)(typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
	}

	function getNextHandlerId(role) {
		var id = (0, _getNextUniqueId2.default)().toString();
		switch (role) {
			case HandlerRoles.SOURCE:
				return 'S' + id;
			case HandlerRoles.TARGET:
				return 'T' + id;
			default:
				(0, _invariant2.default)(false, 'Unknown role: ' + role);
		}
	}

	function parseRoleFromHandlerId(handlerId) {
		switch (handlerId[0]) {
			case 'S':
				return HandlerRoles.SOURCE;
			case 'T':
				return HandlerRoles.TARGET;
			default:
				(0, _invariant2.default)(false, 'Cannot parse handler ID: ' + handlerId);
		}
	}

	var HandlerRegistry = function () {
		function HandlerRegistry(store) {
			_classCallCheck(this, HandlerRegistry);

			this.store = store;

			this.types = {};
			this.handlers = {};

			this.pinnedSourceId = null;
			this.pinnedSource = null;
		}

		_createClass(HandlerRegistry, [{
			key: 'addSource',
			value: function addSource(type, source) {
				validateType(type);
				validateSourceContract(source);

				var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
				this.store.dispatch((0, _registry.addSource)(sourceId));
				return sourceId;
			}
		}, {
			key: 'addTarget',
			value: function addTarget(type, target) {
				validateType(type, true);
				validateTargetContract(target);

				var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
				this.store.dispatch((0, _registry.addTarget)(targetId));
				return targetId;
			}
		}, {
			key: 'addHandler',
			value: function addHandler(role, type, handler) {
				var id = getNextHandlerId(role);
				this.types[id] = type;
				this.handlers[id] = handler;

				return id;
			}
		}, {
			key: 'containsHandler',
			value: function containsHandler(handler) {
				var _this = this;

				return Object.keys(this.handlers).some(function (key) {
					return _this.handlers[key] === handler;
				});
			}
		}, {
			key: 'getSource',
			value: function getSource(sourceId, includePinned) {
				(0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');

				var isPinned = includePinned && sourceId === this.pinnedSourceId;
				var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

				return source;
			}
		}, {
			key: 'getTarget',
			value: function getTarget(targetId) {
				(0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
				return this.handlers[targetId];
			}
		}, {
			key: 'getSourceType',
			value: function getSourceType(sourceId) {
				(0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');
				return this.types[sourceId];
			}
		}, {
			key: 'getTargetType',
			value: function getTargetType(targetId) {
				(0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
				return this.types[targetId];
			}
		}, {
			key: 'isSourceId',
			value: function isSourceId(handlerId) {
				var role = parseRoleFromHandlerId(handlerId);
				return role === HandlerRoles.SOURCE;
			}
		}, {
			key: 'isTargetId',
			value: function isTargetId(handlerId) {
				var role = parseRoleFromHandlerId(handlerId);
				return role === HandlerRoles.TARGET;
			}
		}, {
			key: 'removeSource',
			value: function removeSource(sourceId) {
				var _this2 = this;

				(0, _invariant2.default)(this.getSource(sourceId), 'Expected an existing source.');
				this.store.dispatch((0, _registry.removeSource)(sourceId));

				(0, _asap2.default)(function () {
					delete _this2.handlers[sourceId];
					delete _this2.types[sourceId];
				});
			}
		}, {
			key: 'removeTarget',
			value: function removeTarget(targetId) {
				var _this3 = this;

				(0, _invariant2.default)(this.getTarget(targetId), 'Expected an existing target.');
				this.store.dispatch((0, _registry.removeTarget)(targetId));

				(0, _asap2.default)(function () {
					delete _this3.handlers[targetId];
					delete _this3.types[targetId];
				});
			}
		}, {
			key: 'pinSource',
			value: function pinSource(sourceId) {
				var source = this.getSource(sourceId);
				(0, _invariant2.default)(source, 'Expected an existing source.');

				this.pinnedSourceId = sourceId;
				this.pinnedSource = source;
			}
		}, {
			key: 'unpinSource',
			value: function unpinSource() {
				(0, _invariant2.default)(this.pinnedSource, 'No source is pinned at the time.');

				this.pinnedSourceId = null;
				this.pinnedSource = null;
			}
		}]);

		return HandlerRegistry;
	}();

	exports.default = HandlerRegistry;

/***/ }),
/* 1015 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(1016);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ }),
/* 1016 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1017 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = getNextUniqueId;
	var nextUniqueId = 0;

	function getNextUniqueId() {
		return nextUniqueId++;
	}

/***/ }),
/* 1018 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragSource = function () {
		function DragSource() {
			_classCallCheck(this, DragSource);
		}

		_createClass(DragSource, [{
			key: "canDrag",
			value: function canDrag() {
				return true;
			}
		}, {
			key: "isDragging",
			value: function isDragging(monitor, handle) {
				return handle === monitor.getSourceId();
			}
		}, {
			key: "endDrag",
			value: function endDrag() {}
		}]);

		return DragSource;
	}();

	exports.default = DragSource;

/***/ }),
/* 1019 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DropTarget = function () {
		function DropTarget() {
			_classCallCheck(this, DropTarget);
		}

		_createClass(DropTarget, [{
			key: "canDrop",
			value: function canDrop() {
				return true;
			}
		}, {
			key: "hover",
			value: function hover() {}
		}, {
			key: "drop",
			value: function drop() {}
		}]);

		return DropTarget;
	}();

	exports.default = DropTarget;

/***/ }),
/* 1020 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createBackend;

	var _noop = __webpack_require__(1007);

	var _noop2 = _interopRequireDefault(_noop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestBackend = function () {
		function TestBackend(manager) {
			_classCallCheck(this, TestBackend);

			this.actions = manager.getActions();
		}

		_createClass(TestBackend, [{
			key: 'setup',
			value: function setup() {
				this.didCallSetup = true;
			}
		}, {
			key: 'teardown',
			value: function teardown() {
				this.didCallTeardown = true;
			}
		}, {
			key: 'connectDragSource',
			value: function connectDragSource() {
				return _noop2.default;
			}
		}, {
			key: 'connectDragPreview',
			value: function connectDragPreview() {
				return _noop2.default;
			}
		}, {
			key: 'connectDropTarget',
			value: function connectDropTarget() {
				return _noop2.default;
			}
		}, {
			key: 'simulateBeginDrag',
			value: function simulateBeginDrag(sourceIds, options) {
				this.actions.beginDrag(sourceIds, options);
			}
		}, {
			key: 'simulatePublishDragSource',
			value: function simulatePublishDragSource() {
				this.actions.publishDragSource();
			}
		}, {
			key: 'simulateHover',
			value: function simulateHover(targetIds, options) {
				this.actions.hover(targetIds, options);
			}
		}, {
			key: 'simulateDrop',
			value: function simulateDrop() {
				this.actions.drop();
			}
		}, {
			key: 'simulateEndDrag',
			value: function simulateEndDrag() {
				this.actions.endDrag();
			}
		}]);

		return TestBackend;
	}();

	function createBackend(manager) {
		return new TestBackend(manager);
	}

/***/ }),
/* 1021 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	};


/***/ }),
/* 1022 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = checkDecoratorArguments;
	function checkDecoratorArguments(functionName, signature) {
		if (process.env.NODE_ENV !== 'production') {
			for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i += 1) {
				var arg = arguments.length <= i + 2 ? undefined : arguments[i + 2];
				if (arg && arg.prototype && arg.prototype.render) {
					// eslint-disable-next-line no-console
					console.error('You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
					return;
				}
			}
		}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1023 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(330);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _DragDropContext = __webpack_require__(926);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * This class is a React-Component based version of the DragDropContext.
	 * This is an alternative to decorating an application component with an ES7 decorator.
	 */
	var DragDropContextProvider = (_temp = _class = function (_Component) {
		_inherits(DragDropContextProvider, _Component);

		function DragDropContextProvider(props, context) {
			_classCallCheck(this, DragDropContextProvider);

			/**
	     * This property determines which window global to use for creating the DragDropManager.
	     * If a window has been injected explicitly via props, that is used first. If it is available
	     * as a context value, then use that, otherwise use the browser global.
	     */
			var _this = _possibleConstructorReturn(this, (DragDropContextProvider.__proto__ || Object.getPrototypeOf(DragDropContextProvider)).call(this, props, context));

			var getWindow = function getWindow() {
				if (props && props.window) {
					return props.window;
				} else if (context && context.window) {
					return context.window;
				} else if (typeof window !== 'undefined') {
					return window;
				}
				return undefined;
			};

			_this.backend = (0, _DragDropContext.unpackBackendForEs5Users)(props.backend);
			_this.childContext = (0, _DragDropContext.createChildContext)(_this.backend, {
				window: getWindow()
			});
			return _this;
		}

		_createClass(DragDropContextProvider, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (nextProps.backend !== this.props.backend || nextProps.window !== this.props.window) {
					throw new Error('DragDropContextProvider backend and window props must not change.');
				}
			}
		}, {
			key: 'getChildContext',
			value: function getChildContext() {
				return this.childContext;
			}
		}, {
			key: 'render',
			value: function render() {
				return _react.Children.only(this.props.children);
			}
		}]);

		return DragDropContextProvider;
	}(_react.Component), _class.propTypes = {
		backend: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
		children: _propTypes2.default.element.isRequired,
		window: _propTypes2.default.object // eslint-disable-line react/forbid-prop-types
	}, _class.defaultProps = {
		window: undefined
	}, _class.childContextTypes = _DragDropContext.CHILD_CONTEXT_TYPES, _class.displayName = 'DragDropContextProvider', _class.contextTypes = {
		window: _propTypes2.default.object
	}, _temp);
	exports.default = DragDropContextProvider;

/***/ }),
/* 1024 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = DragLayer;

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _hoistNonReactStatics = __webpack_require__(1021);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _isPlainObject = __webpack_require__(524);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _shallowEqual = __webpack_require__(1025);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _shallowEqualScalar = __webpack_require__(1026);

	var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

	var _checkDecoratorArguments = __webpack_require__(1022);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function DragLayer(collect) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_checkDecoratorArguments2.default.apply(undefined, ['DragLayer', 'collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
		(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
		(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' + 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);

		return function decorateLayer(DecoratedComponent) {
			var _class, _temp;

			var _options$arePropsEqua = options.arePropsEqual,
			    arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

			var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

			var DragLayerContainer = (_temp = _class = function (_Component) {
				_inherits(DragLayerContainer, _Component);

				_createClass(DragLayerContainer, [{
					key: 'getDecoratedComponentInstance',
					value: function getDecoratedComponentInstance() {
						(0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can not be a stateless component.');
						return this.child;
					}
				}, {
					key: 'shouldComponentUpdate',
					value: function shouldComponentUpdate(nextProps, nextState) {
						return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
					}
				}]);

				function DragLayerContainer(props, context) {
					_classCallCheck(this, DragLayerContainer);

					var _this = _possibleConstructorReturn(this, (DragLayerContainer.__proto__ || Object.getPrototypeOf(DragLayerContainer)).call(this, props));

					_this.handleChange = _this.handleChange.bind(_this);

					_this.manager = context.dragDropManager;
					(0, _invariant2.default)(_typeof(_this.manager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

					_this.state = _this.getCurrentState();
					return _this;
				}

				_createClass(DragLayerContainer, [{
					key: 'componentDidMount',
					value: function componentDidMount() {
						this.isCurrentlyMounted = true;

						var monitor = this.manager.getMonitor();
						this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
						this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

						this.handleChange();
					}
				}, {
					key: 'componentWillUnmount',
					value: function componentWillUnmount() {
						this.isCurrentlyMounted = false;

						this.unsubscribeFromOffsetChange();
						this.unsubscribeFromStateChange();
					}
				}, {
					key: 'handleChange',
					value: function handleChange() {
						if (!this.isCurrentlyMounted) {
							return;
						}

						var nextState = this.getCurrentState();
						if (!(0, _shallowEqual2.default)(nextState, this.state)) {
							this.setState(nextState);
						}
					}
				}, {
					key: 'getCurrentState',
					value: function getCurrentState() {
						var monitor = this.manager.getMonitor();
						return collect(monitor);
					}
				}, {
					key: 'render',
					value: function render() {
						var _this2 = this;

						return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
							ref: function ref(child) {
								_this2.child = child;
							}
						}));
					}
				}]);

				return DragLayerContainer;
			}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragLayer(' + displayName + ')', _class.contextTypes = {
				dragDropManager: _propTypes2.default.object.isRequired
			}, _temp);


			return (0, _hoistNonReactStatics2.default)(DragLayerContainer, DecoratedComponent);
		};
	}

/***/ }),
/* 1025 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
		if (objA === objB) {
			return true;
		}

		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);

		if (keysA.length !== keysB.length) {
			return false;
		}

		// Test for A's keys different from B.
		var hasOwn = Object.prototype.hasOwnProperty;
		for (var i = 0; i < keysA.length; i += 1) {
			if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
				return false;
			}

			var valA = objA[keysA[i]];
			var valB = objB[keysA[i]];

			if (valA !== valB) {
				return false;
			}
		}

		return true;
	}

/***/ }),
/* 1026 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = shallowEqualScalar;
	function shallowEqualScalar(objA, objB) {
		if (objA === objB) {
			return true;
		}

		if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
			return false;
		}

		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);

		if (keysA.length !== keysB.length) {
			return false;
		}

		// Test for A's keys different from B.
		var hasOwn = Object.prototype.hasOwnProperty;
		for (var i = 0; i < keysA.length; i += 1) {
			if (!hasOwn.call(objB, keysA[i])) {
				return false;
			}

			var valA = objA[keysA[i]];
			var valB = objB[keysA[i]];

			if (valA !== valB || (typeof valA === 'undefined' ? 'undefined' : _typeof(valA)) === 'object' || (typeof valB === 'undefined' ? 'undefined' : _typeof(valB)) === 'object') {
				return false;
			}
		}

		return true;
	}

/***/ }),
/* 1027 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = DragSource;

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(524);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _checkDecoratorArguments = __webpack_require__(1022);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	var _decorateHandler = __webpack_require__(1028);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerSource = __webpack_require__(1034);

	var _registerSource2 = _interopRequireDefault(_registerSource);

	var _createSourceFactory = __webpack_require__(1035);

	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

	var _createSourceMonitor = __webpack_require__(1036);

	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

	var _createSourceConnector = __webpack_require__(1037);

	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

	var _isValidType = __webpack_require__(1041);

	var _isValidType2 = _interopRequireDefault(_isValidType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DragSource(type, spec, collect) {
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		_checkDecoratorArguments2.default.apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments)));
		var getType = type;
		if (typeof type !== 'function') {
			(0, _invariant2.default)((0, _isValidType2.default)(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
			getType = function getType() {
				return type;
			};
		}
		(0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
		var createSource = (0, _createSourceFactory2.default)(spec);
		(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
		(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);

		return function decorateSource(DecoratedComponent) {
			return (0, _decorateHandler2.default)({
				connectBackend: function connectBackend(backend, sourceId) {
					return backend.connectDragSource(sourceId);
				},
				containerDisplayName: 'DragSource',
				createHandler: createSource,
				registerHandler: _registerSource2.default,
				createMonitor: _createSourceMonitor2.default,
				createConnector: _createSourceConnector2.default,
				DecoratedComponent: DecoratedComponent,
				getType: getType,
				collect: collect,
				options: options
			});
		};
	}

/***/ }),
/* 1028 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = decorateHandler;

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _disposables = __webpack_require__(1029);

	var _isPlainObject = __webpack_require__(524);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _hoistNonReactStatics = __webpack_require__(1021);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _shallowEqual = __webpack_require__(1025);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _shallowEqualScalar = __webpack_require__(1026);

	var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isClassComponent = function isClassComponent(Comp) {
		return Boolean(Comp && Comp.prototype && typeof Comp.prototype.render === 'function');
	};

	function decorateHandler(_ref) {
		var _class, _temp;

		var DecoratedComponent = _ref.DecoratedComponent,
		    createHandler = _ref.createHandler,
		    createMonitor = _ref.createMonitor,
		    createConnector = _ref.createConnector,
		    registerHandler = _ref.registerHandler,
		    containerDisplayName = _ref.containerDisplayName,
		    getType = _ref.getType,
		    collect = _ref.collect,
		    options = _ref.options;
		var _options$arePropsEqua = options.arePropsEqual,
		    arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

		var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

		var DragDropContainer = (_temp = _class = function (_Component) {
			_inherits(DragDropContainer, _Component);

			_createClass(DragDropContainer, [{
				key: 'getHandlerId',
				value: function getHandlerId() {
					return this.handlerId;
				}
			}, {
				key: 'getDecoratedComponentInstance',
				value: function getDecoratedComponentInstance() {
					return this.decoratedComponentInstance;
				}
			}, {
				key: 'shouldComponentUpdate',
				value: function shouldComponentUpdate(nextProps, nextState) {
					return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
				}
			}]);

			function DragDropContainer(props, context) {
				_classCallCheck(this, DragDropContainer);

				var _this = _possibleConstructorReturn(this, (DragDropContainer.__proto__ || Object.getPrototypeOf(DragDropContainer)).call(this, props, context));

				_this.handleChange = _this.handleChange.bind(_this);
				_this.handleChildRef = _this.handleChildRef.bind(_this);

				(0, _invariant2.default)(_typeof(_this.context.dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

				_this.manager = _this.context.dragDropManager;
				_this.handlerMonitor = createMonitor(_this.manager);
				_this.handlerConnector = createConnector(_this.manager.getBackend());
				_this.handler = createHandler(_this.handlerMonitor);

				_this.disposable = new _disposables.SerialDisposable();
				_this.receiveProps(props);
				_this.state = _this.getCurrentState();
				_this.dispose();
				return _this;
			}

			_createClass(DragDropContainer, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
					this.isCurrentlyMounted = true;
					this.disposable = new _disposables.SerialDisposable();
					this.currentType = null;
					this.receiveProps(this.props);
					this.handleChange();
				}
			}, {
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(nextProps) {
					if (!arePropsEqual(nextProps, this.props)) {
						this.receiveProps(nextProps);
						this.handleChange();
					}
				}
			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					this.dispose();
					this.isCurrentlyMounted = false;
				}
			}, {
				key: 'receiveProps',
				value: function receiveProps(props) {
					this.handler.receiveProps(props);
					this.receiveType(getType(props));
				}
			}, {
				key: 'receiveType',
				value: function receiveType(type) {
					if (type === this.currentType) {
						return;
					}

					this.currentType = type;

					var _registerHandler = registerHandler(type, this.handler, this.manager),
					    handlerId = _registerHandler.handlerId,
					    unregister = _registerHandler.unregister;

					this.handlerId = handlerId;
					this.handlerMonitor.receiveHandlerId(handlerId);
					this.handlerConnector.receiveHandlerId(handlerId);

					var globalMonitor = this.manager.getMonitor();
					var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

					this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
				}
			}, {
				key: 'handleChange',
				value: function handleChange() {
					if (!this.isCurrentlyMounted) {
						return;
					}

					var nextState = this.getCurrentState();
					if (!(0, _shallowEqual2.default)(nextState, this.state)) {
						this.setState(nextState);
					}
				}
			}, {
				key: 'dispose',
				value: function dispose() {
					this.disposable.dispose();
					this.handlerConnector.receiveHandlerId(null);
				}
			}, {
				key: 'handleChildRef',
				value: function handleChildRef(component) {
					this.decoratedComponentInstance = component;
					this.handler.receiveComponent(component);
				}
			}, {
				key: 'getCurrentState',
				value: function getCurrentState() {
					var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

					if (process.env.NODE_ENV !== 'production') {
						(0, _invariant2.default)((0, _isPlainObject2.default)(nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
					}

					return nextState;
				}
			}, {
				key: 'render',
				value: function render() {
					return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
						ref: isClassComponent(DecoratedComponent) ? this.handleChildRef : null
					}));
				}
			}]);

			return DragDropContainer;
		}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = containerDisplayName + '(' + displayName + ')', _class.contextTypes = {
			dragDropManager: _propTypes2.default.object.isRequired
		}, _temp);


		return (0, _hoistNonReactStatics2.default)(DragDropContainer, DecoratedComponent);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1029 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isDisposable2 = __webpack_require__(1030);

	var _isDisposable3 = _interopRequireDefault(_isDisposable2);

	exports.isDisposable = _isDisposable3['default'];

	var _Disposable2 = __webpack_require__(1031);

	var _Disposable3 = _interopRequireDefault(_Disposable2);

	exports.Disposable = _Disposable3['default'];

	var _CompositeDisposable2 = __webpack_require__(1032);

	var _CompositeDisposable3 = _interopRequireDefault(_CompositeDisposable2);

	exports.CompositeDisposable = _CompositeDisposable3['default'];

	var _SerialDisposable2 = __webpack_require__(1033);

	var _SerialDisposable3 = _interopRequireDefault(_SerialDisposable2);

	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ }),
/* 1030 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isDisposable;

	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}

	module.exports = exports['default'];

/***/ }),
/* 1031 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noop = function noop() {};

	/**
	 * The basic disposable.
	 */

	var Disposable = (function () {
	  _createClass(Disposable, null, [{
	    key: "empty",
	    value: { dispose: noop },
	    enumerable: true
	  }]);

	  function Disposable(action) {
	    _classCallCheck(this, Disposable);

	    this.isDisposed = false;
	    this.action = action || noop;
	  }

	  Disposable.prototype.dispose = function dispose() {
	    if (!this.isDisposed) {
	      this.action.call(null);
	      this.isDisposed = true;
	    }
	  };

	  return Disposable;
	})();

	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ }),
/* 1032 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _isDisposable = __webpack_require__(1030);

	var _isDisposable2 = _interopRequireDefault(_isDisposable);

	/**
	 * Represents a group of disposable resources that are disposed together.
	 */

	var CompositeDisposable = (function () {
	  function CompositeDisposable() {
	    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
	      disposables[_key] = arguments[_key];
	    }

	    _classCallCheck(this, CompositeDisposable);

	    if (Array.isArray(disposables[0]) && disposables.length === 1) {
	      disposables = disposables[0];
	    }

	    for (var i = 0; i < disposables.length; i++) {
	      if (!_isDisposable2['default'](disposables[i])) {
	        throw new Error('Expected a disposable');
	      }
	    }

	    this.disposables = disposables;
	    this.isDisposed = false;
	  }

	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */

	  CompositeDisposable.prototype.add = function add(item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	    }
	  };

	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */

	  CompositeDisposable.prototype.remove = function remove(item) {
	    if (this.isDisposed) {
	      return false;
	    }

	    var index = this.disposables.indexOf(item);
	    if (index === -1) {
	      return false;
	    }

	    this.disposables.splice(index, 1);
	    item.dispose();
	    return true;
	  };

	  /**
	   * Disposes all disposables in the group and removes them from the group.
	   */

	  CompositeDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    var len = this.disposables.length;
	    var currentDisposables = new Array(len);
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i] = this.disposables[i];
	    }

	    this.isDisposed = true;
	    this.disposables = [];
	    this.length = 0;

	    for (var i = 0; i < len; i++) {
	      currentDisposables[i].dispose();
	    }
	  };

	  return CompositeDisposable;
	})();

	exports['default'] = CompositeDisposable;
	module.exports = exports['default'];

/***/ }),
/* 1033 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _isDisposable = __webpack_require__(1030);

	var _isDisposable2 = _interopRequireDefault(_isDisposable);

	var SerialDisposable = (function () {
	  function SerialDisposable() {
	    _classCallCheck(this, SerialDisposable);

	    this.isDisposed = false;
	    this.current = null;
	  }

	  /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */

	  SerialDisposable.prototype.getDisposable = function getDisposable() {
	    return this.current;
	  };

	  /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */

	  SerialDisposable.prototype.setDisposable = function setDisposable() {
	    var value = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (value != null && !_isDisposable2['default'](value)) {
	      throw new Error('Expected either an empty value or a valid disposable');
	    }

	    var isDisposed = this.isDisposed;
	    var previous = undefined;

	    if (!isDisposed) {
	      previous = this.current;
	      this.current = value;
	    }

	    if (previous) {
	      previous.dispose();
	    }

	    if (isDisposed && value) {
	      value.dispose();
	    }
	  };

	  /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */

	  SerialDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    this.isDisposed = true;
	    var previous = this.current;
	    this.current = null;

	    if (previous) {
	      previous.dispose();
	    }
	  };

	  return SerialDisposable;
	})();

	exports['default'] = SerialDisposable;
	module.exports = exports['default'];

/***/ }),
/* 1034 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = registerSource;
	function registerSource(type, source, manager) {
		var registry = manager.getRegistry();
		var sourceId = registry.addSource(type, source);

		function unregisterSource() {
			registry.removeSource(sourceId);
		}

		return {
			handlerId: sourceId,
			unregister: unregisterSource
		};
	}

/***/ }),
/* 1035 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createSourceFactory;

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(524);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
	var REQUIRED_SPEC_METHODS = ['beginDrag'];

	function createSourceFactory(spec) {
		Object.keys(spec).forEach(function (key) {
			(0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
			(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
		});
		REQUIRED_SPEC_METHODS.forEach(function (key) {
			(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
		});

		var Source = function () {
			function Source(monitor) {
				_classCallCheck(this, Source);

				this.monitor = monitor;
				this.props = null;
				this.component = null;
			}

			_createClass(Source, [{
				key: 'receiveProps',
				value: function receiveProps(props) {
					this.props = props;
				}
			}, {
				key: 'receiveComponent',
				value: function receiveComponent(component) {
					this.component = component;
				}
			}, {
				key: 'canDrag',
				value: function canDrag() {
					if (!spec.canDrag) {
						return true;
					}

					return spec.canDrag(this.props, this.monitor);
				}
			}, {
				key: 'isDragging',
				value: function isDragging(globalMonitor, sourceId) {
					if (!spec.isDragging) {
						return sourceId === globalMonitor.getSourceId();
					}

					return spec.isDragging(this.props, this.monitor);
				}
			}, {
				key: 'beginDrag',
				value: function beginDrag() {
					var item = spec.beginDrag(this.props, this.monitor, this.component);
					if (process.env.NODE_ENV !== 'production') {
						(0, _invariant2.default)((0, _isPlainObject2.default)(item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
					}
					return item;
				}
			}, {
				key: 'endDrag',
				value: function endDrag() {
					if (!spec.endDrag) {
						return;
					}

					spec.endDrag(this.props, this.monitor, this.component);
				}
			}]);

			return Source;
		}();

		return function createSource(monitor) {
			return new Source(monitor);
		};
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1036 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createSourceMonitor;

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var isCallingCanDrag = false;
	var isCallingIsDragging = false;

	var SourceMonitor = function () {
		function SourceMonitor(manager) {
			_classCallCheck(this, SourceMonitor);

			this.internalMonitor = manager.getMonitor();
		}

		_createClass(SourceMonitor, [{
			key: 'receiveHandlerId',
			value: function receiveHandlerId(sourceId) {
				this.sourceId = sourceId;
			}
		}, {
			key: 'canDrag',
			value: function canDrag() {
				(0, _invariant2.default)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

				try {
					isCallingCanDrag = true;
					return this.internalMonitor.canDragSource(this.sourceId);
				} finally {
					isCallingCanDrag = false;
				}
			}
		}, {
			key: 'isDragging',
			value: function isDragging() {
				(0, _invariant2.default)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

				try {
					isCallingIsDragging = true;
					return this.internalMonitor.isDraggingSource(this.sourceId);
				} finally {
					isCallingIsDragging = false;
				}
			}
		}, {
			key: 'getItemType',
			value: function getItemType() {
				return this.internalMonitor.getItemType();
			}
		}, {
			key: 'getItem',
			value: function getItem() {
				return this.internalMonitor.getItem();
			}
		}, {
			key: 'getDropResult',
			value: function getDropResult() {
				return this.internalMonitor.getDropResult();
			}
		}, {
			key: 'didDrop',
			value: function didDrop() {
				return this.internalMonitor.didDrop();
			}
		}, {
			key: 'getInitialClientOffset',
			value: function getInitialClientOffset() {
				return this.internalMonitor.getInitialClientOffset();
			}
		}, {
			key: 'getInitialSourceClientOffset',
			value: function getInitialSourceClientOffset() {
				return this.internalMonitor.getInitialSourceClientOffset();
			}
		}, {
			key: 'getSourceClientOffset',
			value: function getSourceClientOffset() {
				return this.internalMonitor.getSourceClientOffset();
			}
		}, {
			key: 'getClientOffset',
			value: function getClientOffset() {
				return this.internalMonitor.getClientOffset();
			}
		}, {
			key: 'getDifferenceFromInitialOffset',
			value: function getDifferenceFromInitialOffset() {
				return this.internalMonitor.getDifferenceFromInitialOffset();
			}
		}]);

		return SourceMonitor;
	}();

	function createSourceMonitor(manager) {
		return new SourceMonitor(manager);
	}

/***/ }),
/* 1037 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = createSourceConnector;

	var _wrapConnectorHooks = __webpack_require__(1038);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(1040);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createSourceConnector(backend) {
		var currentHandlerId = void 0;

		var currentDragSourceNode = void 0;
		var currentDragSourceOptions = void 0;
		var disconnectCurrentDragSource = void 0;

		var currentDragPreviewNode = void 0;
		var currentDragPreviewOptions = void 0;
		var disconnectCurrentDragPreview = void 0;

		function reconnectDragSource() {
			if (disconnectCurrentDragSource) {
				disconnectCurrentDragSource();
				disconnectCurrentDragSource = null;
			}

			if (currentHandlerId && currentDragSourceNode) {
				disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
			}
		}

		function reconnectDragPreview() {
			if (disconnectCurrentDragPreview) {
				disconnectCurrentDragPreview();
				disconnectCurrentDragPreview = null;
			}

			if (currentHandlerId && currentDragPreviewNode) {
				disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
			}
		}

		function receiveHandlerId(handlerId) {
			if (handlerId === currentHandlerId) {
				return;
			}

			currentHandlerId = handlerId;
			reconnectDragSource();
			reconnectDragPreview();
		}

		var hooks = (0, _wrapConnectorHooks2.default)({
			dragSource: function connectDragSource(node, options) {
				if (node === currentDragSourceNode && (0, _areOptionsEqual2.default)(options, currentDragSourceOptions)) {
					return;
				}

				currentDragSourceNode = node;
				currentDragSourceOptions = options;

				reconnectDragSource();
			},

			dragPreview: function connectDragPreview(node, options) {
				if (node === currentDragPreviewNode && (0, _areOptionsEqual2.default)(options, currentDragPreviewOptions)) {
					return;
				}

				currentDragPreviewNode = node;
				currentDragPreviewOptions = options;

				reconnectDragPreview();
			}
		});

		return {
			receiveHandlerId: receiveHandlerId,
			hooks: hooks
		};
	}

/***/ }),
/* 1038 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = wrapConnectorHooks;

	var _react = __webpack_require__(330);

	var _cloneWithRef = __webpack_require__(1039);

	var _cloneWithRef2 = _interopRequireDefault(_cloneWithRef);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function throwIfCompositeComponentElement(element) {
		// Custom components can no longer be wrapped directly in React DnD 2.0
		// so that we don't need to depend on findDOMNode() from react-dom.
		if (typeof element.type === 'string') {
			return;
		}

		var displayName = element.type.displayName || element.type.name || 'the component';

		throw new Error('Only native element nodes can now be passed to React DnD connectors.' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
	}

	function wrapHookToRecognizeElement(hook) {
		return function () {
			var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			// When passed a node, call the hook straight away.
			if (!(0, _react.isValidElement)(elementOrNode)) {
				var node = elementOrNode;
				hook(node, options);
				return undefined;
			}

			// If passed a ReactElement, clone it and attach this function as a ref.
			// This helps us achieve a neat API where user doesn't even know that refs
			// are being used under the hood.
			var element = elementOrNode;
			throwIfCompositeComponentElement(element);

			// When no options are passed, use the hook directly
			var ref = options ? function (node) {
				return hook(node, options);
			} : hook;

			return (0, _cloneWithRef2.default)(element, ref);
		};
	}

	function wrapConnectorHooks(hooks) {
		var wrappedHooks = {};

		Object.keys(hooks).forEach(function (key) {
			var hook = hooks[key];
			var wrappedHook = wrapHookToRecognizeElement(hook);
			wrappedHooks[key] = function () {
				return wrappedHook;
			};
		});

		return wrappedHooks;
	}

/***/ }),
/* 1039 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = cloneWithRef;

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(330);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function cloneWithRef(element, newRef) {
		var previousRef = element.ref;
		(0, _invariant2.default)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

		if (!previousRef) {
			// When there is no ref on the element, use the new ref directly
			return (0, _react.cloneElement)(element, {
				ref: newRef
			});
		}

		return (0, _react.cloneElement)(element, {
			ref: function ref(node) {
				newRef(node);

				if (previousRef) {
					previousRef(node);
				}
			}
		});
	}

/***/ }),
/* 1040 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = areOptionsEqual;

	var _shallowEqual = __webpack_require__(1025);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function areOptionsEqual(nextOptions, currentOptions) {
		if (currentOptions === nextOptions) {
			return true;
		}

		return currentOptions !== null && nextOptions !== null && (0, _shallowEqual2.default)(currentOptions, nextOptions);
	}

/***/ }),
/* 1041 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isValidType;

	var _isArray = __webpack_require__(932);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidType(type, allowArray) {
		return typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' || allowArray && (0, _isArray2.default)(type) && type.every(function (t) {
			return isValidType(t, false);
		});
	}

/***/ }),
/* 1042 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = DropTarget;

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(524);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _checkDecoratorArguments = __webpack_require__(1022);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	var _decorateHandler = __webpack_require__(1028);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerTarget = __webpack_require__(1043);

	var _registerTarget2 = _interopRequireDefault(_registerTarget);

	var _createTargetFactory = __webpack_require__(1044);

	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

	var _createTargetMonitor = __webpack_require__(1045);

	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

	var _createTargetConnector = __webpack_require__(1046);

	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

	var _isValidType = __webpack_require__(1041);

	var _isValidType2 = _interopRequireDefault(_isValidType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DropTarget(type, spec, collect) {
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		_checkDecoratorArguments2.default.apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments)));
		var getType = type;
		if (typeof type !== 'function') {
			(0, _invariant2.default)((0, _isValidType2.default)(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
			getType = function getType() {
				return type;
			};
		}
		(0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
		var createTarget = (0, _createTargetFactory2.default)(spec);
		(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
		(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);

		return function decorateTarget(DecoratedComponent) {
			return (0, _decorateHandler2.default)({
				connectBackend: function connectBackend(backend, targetId) {
					return backend.connectDropTarget(targetId);
				},
				containerDisplayName: 'DropTarget',
				createHandler: createTarget,
				registerHandler: _registerTarget2.default,
				createMonitor: _createTargetMonitor2.default,
				createConnector: _createTargetConnector2.default,
				DecoratedComponent: DecoratedComponent,
				getType: getType,
				collect: collect,
				options: options
			});
		};
	}

/***/ }),
/* 1043 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = registerTarget;
	function registerTarget(type, target, manager) {
		var registry = manager.getRegistry();
		var targetId = registry.addTarget(type, target);

		function unregisterTarget() {
			registry.removeTarget(targetId);
		}

		return {
			handlerId: targetId,
			unregister: unregisterTarget
		};
	}

/***/ }),
/* 1044 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createTargetFactory;

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(524);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

	function createTargetFactory(spec) {
		Object.keys(spec).forEach(function (key) {
			(0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
			(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
		});

		var Target = function () {
			function Target(monitor) {
				_classCallCheck(this, Target);

				this.monitor = monitor;
				this.props = null;
				this.component = null;
			}

			_createClass(Target, [{
				key: 'receiveProps',
				value: function receiveProps(props) {
					this.props = props;
				}
			}, {
				key: 'receiveMonitor',
				value: function receiveMonitor(monitor) {
					this.monitor = monitor;
				}
			}, {
				key: 'receiveComponent',
				value: function receiveComponent(component) {
					this.component = component;
				}
			}, {
				key: 'canDrop',
				value: function canDrop() {
					if (!spec.canDrop) {
						return true;
					}

					return spec.canDrop(this.props, this.monitor);
				}
			}, {
				key: 'hover',
				value: function hover() {
					if (!spec.hover) {
						return;
					}

					spec.hover(this.props, this.monitor, this.component);
				}
			}, {
				key: 'drop',
				value: function drop() {
					if (!spec.drop) {
						return undefined;
					}

					var dropResult = spec.drop(this.props, this.monitor, this.component);
					if (process.env.NODE_ENV !== 'production') {
						(0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isPlainObject2.default)(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', dropResult);
					}
					return dropResult;
				}
			}]);

			return Target;
		}();

		return function createTarget(monitor) {
			return new Target(monitor);
		};
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1045 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createTargetMonitor;

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var isCallingCanDrop = false;

	var TargetMonitor = function () {
		function TargetMonitor(manager) {
			_classCallCheck(this, TargetMonitor);

			this.internalMonitor = manager.getMonitor();
		}

		_createClass(TargetMonitor, [{
			key: 'receiveHandlerId',
			value: function receiveHandlerId(targetId) {
				this.targetId = targetId;
			}
		}, {
			key: 'canDrop',
			value: function canDrop() {
				(0, _invariant2.default)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');

				try {
					isCallingCanDrop = true;
					return this.internalMonitor.canDropOnTarget(this.targetId);
				} finally {
					isCallingCanDrop = false;
				}
			}
		}, {
			key: 'isOver',
			value: function isOver(options) {
				return this.internalMonitor.isOverTarget(this.targetId, options);
			}
		}, {
			key: 'getItemType',
			value: function getItemType() {
				return this.internalMonitor.getItemType();
			}
		}, {
			key: 'getItem',
			value: function getItem() {
				return this.internalMonitor.getItem();
			}
		}, {
			key: 'getDropResult',
			value: function getDropResult() {
				return this.internalMonitor.getDropResult();
			}
		}, {
			key: 'didDrop',
			value: function didDrop() {
				return this.internalMonitor.didDrop();
			}
		}, {
			key: 'getInitialClientOffset',
			value: function getInitialClientOffset() {
				return this.internalMonitor.getInitialClientOffset();
			}
		}, {
			key: 'getInitialSourceClientOffset',
			value: function getInitialSourceClientOffset() {
				return this.internalMonitor.getInitialSourceClientOffset();
			}
		}, {
			key: 'getSourceClientOffset',
			value: function getSourceClientOffset() {
				return this.internalMonitor.getSourceClientOffset();
			}
		}, {
			key: 'getClientOffset',
			value: function getClientOffset() {
				return this.internalMonitor.getClientOffset();
			}
		}, {
			key: 'getDifferenceFromInitialOffset',
			value: function getDifferenceFromInitialOffset() {
				return this.internalMonitor.getDifferenceFromInitialOffset();
			}
		}]);

		return TargetMonitor;
	}();

	function createTargetMonitor(manager) {
		return new TargetMonitor(manager);
	}

/***/ }),
/* 1046 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = createTargetConnector;

	var _wrapConnectorHooks = __webpack_require__(1038);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(1040);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTargetConnector(backend) {
		var currentHandlerId = void 0;

		var currentDropTargetNode = void 0;
		var currentDropTargetOptions = void 0;
		var disconnectCurrentDropTarget = void 0;

		function reconnectDropTarget() {
			if (disconnectCurrentDropTarget) {
				disconnectCurrentDropTarget();
				disconnectCurrentDropTarget = null;
			}

			if (currentHandlerId && currentDropTargetNode) {
				disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
			}
		}

		function receiveHandlerId(handlerId) {
			if (handlerId === currentHandlerId) {
				return;
			}

			currentHandlerId = handlerId;
			reconnectDropTarget();
		}

		var hooks = (0, _wrapConnectorHooks2.default)({
			dropTarget: function connectDropTarget(node, options) {
				if (node === currentDropTargetNode && (0, _areOptionsEqual2.default)(options, currentDropTargetOptions)) {
					return;
				}

				currentDropTargetNode = node;
				currentDropTargetOptions = options;

				reconnectDropTarget();
			}
		});

		return {
			receiveHandlerId: receiveHandlerId,
			hooks: hooks
		};
	}

/***/ }),
/* 1047 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getEmptyImage = exports.NativeTypes = undefined;
	exports.default = createHTML5Backend;

	var _HTML5Backend = __webpack_require__(1048);

	var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

	var _getEmptyImage = __webpack_require__(1078);

	var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

	var _NativeTypes = __webpack_require__(1077);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.NativeTypes = NativeTypes;
	exports.getEmptyImage = _getEmptyImage2.default;
	function createHTML5Backend(manager) {
		return new _HTML5Backend2.default(manager);
	}

/***/ }),
/* 1048 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-underscore-dangle */


	var _defaults = __webpack_require__(1049);

	var _defaults2 = _interopRequireDefault(_defaults);

	var _shallowEqual = __webpack_require__(1069);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _EnterLeaveCounter = __webpack_require__(1070);

	var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

	var _BrowserDetector = __webpack_require__(1072);

	var _OffsetUtils = __webpack_require__(1074);

	var _NativeDragSources = __webpack_require__(1076);

	var _NativeTypes = __webpack_require__(1077);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HTML5Backend = function () {
		function HTML5Backend(manager) {
			_classCallCheck(this, HTML5Backend);

			this.actions = manager.getActions();
			this.monitor = manager.getMonitor();
			this.registry = manager.getRegistry();
			this.context = manager.getContext();

			this.sourcePreviewNodes = {};
			this.sourcePreviewNodeOptions = {};
			this.sourceNodes = {};
			this.sourceNodeOptions = {};
			this.enterLeaveCounter = new _EnterLeaveCounter2.default();

			this.dragStartSourceIds = [];
			this.dropTargetIds = [];
			this.dragEnterTargetIds = [];
			this.currentNativeSource = null;
			this.currentNativeHandle = null;
			this.currentDragSourceNode = null;
			this.currentDragSourceNodeOffset = null;
			this.currentDragSourceNodeOffsetChanged = false;
			this.altKeyPressed = false;

			this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
			this.handleTopDragStart = this.handleTopDragStart.bind(this);
			this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
			this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
			this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
			this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
			this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
			this.handleTopDragOver = this.handleTopDragOver.bind(this);
			this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
			this.handleTopDrop = this.handleTopDrop.bind(this);
			this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
			this.handleSelectStart = this.handleSelectStart.bind(this);
			this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
			this.endDragNativeItem = this.endDragNativeItem.bind(this);
			this.asyncEndDragNativeItem = this.asyncEndDragNativeItem.bind(this);
			this.isNodeInDocument = this.isNodeInDocument.bind(this);
		}

		_createClass(HTML5Backend, [{
			key: 'setup',
			value: function setup() {
				if (this.window === undefined) {
					return;
				}

				if (this.window.__isReactDndBackendSetUp) {
					throw new Error('Cannot have two HTML5 backends at the same time.');
				}
				this.window.__isReactDndBackendSetUp = true;
				this.addEventListeners(this.window);
			}
		}, {
			key: 'teardown',
			value: function teardown() {
				if (this.window === undefined) {
					return;
				}

				this.window.__isReactDndBackendSetUp = false;
				this.removeEventListeners(this.window);
				this.clearCurrentDragSourceNode();
				if (this.asyncEndDragFrameId) {
					this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
				}
			}
		}, {
			key: 'addEventListeners',
			value: function addEventListeners(target) {
				// SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
				if (!target.addEventListener) {
					return;
				}
				target.addEventListener('dragstart', this.handleTopDragStart);
				target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
				target.addEventListener('dragend', this.handleTopDragEndCapture, true);
				target.addEventListener('dragenter', this.handleTopDragEnter);
				target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
				target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
				target.addEventListener('dragover', this.handleTopDragOver);
				target.addEventListener('dragover', this.handleTopDragOverCapture, true);
				target.addEventListener('drop', this.handleTopDrop);
				target.addEventListener('drop', this.handleTopDropCapture, true);
			}
		}, {
			key: 'removeEventListeners',
			value: function removeEventListeners(target) {
				// SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
				if (!target.removeEventListener) {
					return;
				}
				target.removeEventListener('dragstart', this.handleTopDragStart);
				target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
				target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
				target.removeEventListener('dragenter', this.handleTopDragEnter);
				target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
				target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
				target.removeEventListener('dragover', this.handleTopDragOver);
				target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
				target.removeEventListener('drop', this.handleTopDrop);
				target.removeEventListener('drop', this.handleTopDropCapture, true);
			}
		}, {
			key: 'connectDragPreview',
			value: function connectDragPreview(sourceId, node, options) {
				var _this = this;

				this.sourcePreviewNodeOptions[sourceId] = options;
				this.sourcePreviewNodes[sourceId] = node;

				return function () {
					delete _this.sourcePreviewNodes[sourceId];
					delete _this.sourcePreviewNodeOptions[sourceId];
				};
			}
		}, {
			key: 'connectDragSource',
			value: function connectDragSource(sourceId, node, options) {
				var _this2 = this;

				this.sourceNodes[sourceId] = node;
				this.sourceNodeOptions[sourceId] = options;

				var handleDragStart = function handleDragStart(e) {
					return _this2.handleDragStart(e, sourceId);
				};
				var handleSelectStart = function handleSelectStart(e) {
					return _this2.handleSelectStart(e, sourceId);
				};

				node.setAttribute('draggable', true);
				node.addEventListener('dragstart', handleDragStart);
				node.addEventListener('selectstart', handleSelectStart);

				return function () {
					delete _this2.sourceNodes[sourceId];
					delete _this2.sourceNodeOptions[sourceId];

					node.removeEventListener('dragstart', handleDragStart);
					node.removeEventListener('selectstart', handleSelectStart);
					node.setAttribute('draggable', false);
				};
			}
		}, {
			key: 'connectDropTarget',
			value: function connectDropTarget(targetId, node) {
				var _this3 = this;

				var handleDragEnter = function handleDragEnter(e) {
					return _this3.handleDragEnter(e, targetId);
				};
				var handleDragOver = function handleDragOver(e) {
					return _this3.handleDragOver(e, targetId);
				};
				var handleDrop = function handleDrop(e) {
					return _this3.handleDrop(e, targetId);
				};

				node.addEventListener('dragenter', handleDragEnter);
				node.addEventListener('dragover', handleDragOver);
				node.addEventListener('drop', handleDrop);

				return function () {
					node.removeEventListener('dragenter', handleDragEnter);
					node.removeEventListener('dragover', handleDragOver);
					node.removeEventListener('drop', handleDrop);
				};
			}
		}, {
			key: 'getCurrentSourceNodeOptions',
			value: function getCurrentSourceNodeOptions() {
				var sourceId = this.monitor.getSourceId();
				var sourceNodeOptions = this.sourceNodeOptions[sourceId];

				return (0, _defaults2.default)(sourceNodeOptions || {}, {
					dropEffect: this.altKeyPressed ? 'copy' : 'move'
				});
			}
		}, {
			key: 'getCurrentDropEffect',
			value: function getCurrentDropEffect() {
				if (this.isDraggingNativeItem()) {
					// It makes more sense to default to 'copy' for native resources
					return 'copy';
				}

				return this.getCurrentSourceNodeOptions().dropEffect;
			}
		}, {
			key: 'getCurrentSourcePreviewNodeOptions',
			value: function getCurrentSourcePreviewNodeOptions() {
				var sourceId = this.monitor.getSourceId();
				var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

				return (0, _defaults2.default)(sourcePreviewNodeOptions || {}, {
					anchorX: 0.5,
					anchorY: 0.5,
					captureDraggingState: false
				});
			}
		}, {
			key: 'getSourceClientOffset',
			value: function getSourceClientOffset(sourceId) {
				return (0, _OffsetUtils.getNodeClientOffset)(this.sourceNodes[sourceId]);
			}
		}, {
			key: 'isDraggingNativeItem',
			value: function isDraggingNativeItem() {
				var itemType = this.monitor.getItemType();
				return Object.keys(NativeTypes).some(function (key) {
					return NativeTypes[key] === itemType;
				});
			}
		}, {
			key: 'beginDragNativeItem',
			value: function beginDragNativeItem(type) {
				this.clearCurrentDragSourceNode();

				var SourceType = (0, _NativeDragSources.createNativeDragSource)(type);
				this.currentNativeSource = new SourceType();
				this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
				this.actions.beginDrag([this.currentNativeHandle]);

				// On Firefox, if mouseover fires, the drag is over but browser failed to tell us.
				// See https://bugzilla.mozilla.org/show_bug.cgi?id=656164
				// This is not true for other browsers.
				if ((0, _BrowserDetector.isFirefox)()) {
					this.window.addEventListener('mouseover', this.asyncEndDragNativeItem, true);
				}
			}
		}, {
			key: 'asyncEndDragNativeItem',
			value: function asyncEndDragNativeItem() {
				this.asyncEndDragFrameId = this.window.requestAnimationFrame(this.endDragNativeItem);
				if ((0, _BrowserDetector.isFirefox)()) {
					this.window.removeEventListener('mouseover', this.asyncEndDragNativeItem, true);
					this.enterLeaveCounter.reset();
				}
			}
		}, {
			key: 'endDragNativeItem',
			value: function endDragNativeItem() {
				if (!this.isDraggingNativeItem()) {
					return;
				}

				this.actions.endDrag();
				this.registry.removeSource(this.currentNativeHandle);
				this.currentNativeHandle = null;
				this.currentNativeSource = null;
			}
		}, {
			key: 'isNodeInDocument',
			value: function isNodeInDocument(node) {
				// Check the node either in the main document or in the current context
				return document.body.contains(node) || this.window ? this.window.document.body.contains(node) : false;
			}
		}, {
			key: 'endDragIfSourceWasRemovedFromDOM',
			value: function endDragIfSourceWasRemovedFromDOM() {
				var node = this.currentDragSourceNode;
				if (this.isNodeInDocument(node)) {
					return;
				}

				if (this.clearCurrentDragSourceNode()) {
					this.actions.endDrag();
				}
			}
		}, {
			key: 'setCurrentDragSourceNode',
			value: function setCurrentDragSourceNode(node) {
				this.clearCurrentDragSourceNode();
				this.currentDragSourceNode = node;
				this.currentDragSourceNodeOffset = (0, _OffsetUtils.getNodeClientOffset)(node);
				this.currentDragSourceNodeOffsetChanged = false;

				// Receiving a mouse event in the middle of a dragging operation
				// means it has ended and the drag source node disappeared from DOM,
				// so the browser didn't dispatch the dragend event.
				this.window.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
			}
		}, {
			key: 'clearCurrentDragSourceNode',
			value: function clearCurrentDragSourceNode() {
				if (this.currentDragSourceNode) {
					this.currentDragSourceNode = null;
					this.currentDragSourceNodeOffset = null;
					this.currentDragSourceNodeOffsetChanged = false;
					this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
					return true;
				}

				return false;
			}
		}, {
			key: 'checkIfCurrentDragSourceRectChanged',
			value: function checkIfCurrentDragSourceRectChanged() {
				var node = this.currentDragSourceNode;
				if (!node) {
					return false;
				}

				if (this.currentDragSourceNodeOffsetChanged) {
					return true;
				}

				this.currentDragSourceNodeOffsetChanged = !(0, _shallowEqual2.default)((0, _OffsetUtils.getNodeClientOffset)(node), this.currentDragSourceNodeOffset);

				return this.currentDragSourceNodeOffsetChanged;
			}
		}, {
			key: 'handleTopDragStartCapture',
			value: function handleTopDragStartCapture() {
				this.clearCurrentDragSourceNode();
				this.dragStartSourceIds = [];
			}
		}, {
			key: 'handleDragStart',
			value: function handleDragStart(e, sourceId) {
				this.dragStartSourceIds.unshift(sourceId);
			}
		}, {
			key: 'handleTopDragStart',
			value: function handleTopDragStart(e) {
				var _this4 = this;

				var dragStartSourceIds = this.dragStartSourceIds;

				this.dragStartSourceIds = null;

				var clientOffset = (0, _OffsetUtils.getEventClientOffset)(e);

				// Avoid crashing if we missed a drop event or our previous drag died
				if (this.monitor.isDragging()) {
					this.actions.endDrag();
				}

				// Don't publish the source just yet (see why below)
				this.actions.beginDrag(dragStartSourceIds, {
					publishSource: false,
					getSourceClientOffset: this.getSourceClientOffset,
					clientOffset: clientOffset
				});

				var dataTransfer = e.dataTransfer;

				var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

				if (this.monitor.isDragging()) {
					if (typeof dataTransfer.setDragImage === 'function') {
						// Use custom drag image if user specifies it.
						// If child drag source refuses drag but parent agrees,
						// use parent's node as drag image. Neither works in IE though.
						var sourceId = this.monitor.getSourceId();
						var sourceNode = this.sourceNodes[sourceId];
						var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

						var _getCurrentSourcePrev = this.getCurrentSourcePreviewNodeOptions(),
						    anchorX = _getCurrentSourcePrev.anchorX,
						    anchorY = _getCurrentSourcePrev.anchorY,
						    offsetX = _getCurrentSourcePrev.offsetX,
						    offsetY = _getCurrentSourcePrev.offsetY;

						var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
						var offsetPoint = { offsetX: offsetX, offsetY: offsetY };
						var dragPreviewOffset = (0, _OffsetUtils.getDragPreviewOffset)(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);

						dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
					}

					try {
						// Firefox won't drag without setting data
						dataTransfer.setData('application/json', {});
					} catch (err) {}
					// IE doesn't support MIME types in setData


					// Store drag source node so we can check whether
					// it is removed from DOM and trigger endDrag manually.
					this.setCurrentDragSourceNode(e.target);

					// Now we are ready to publish the drag source.. or are we not?

					var _getCurrentSourcePrev2 = this.getCurrentSourcePreviewNodeOptions(),
					    captureDraggingState = _getCurrentSourcePrev2.captureDraggingState;

					if (!captureDraggingState) {
						// Usually we want to publish it in the next tick so that browser
						// is able to screenshot the current (not yet dragging) state.
						//
						// It also neatly avoids a situation where render() returns null
						// in the same tick for the source element, and browser freaks out.
						setTimeout(function () {
							return _this4.actions.publishDragSource();
						});
					} else {
						// In some cases the user may want to override this behavior, e.g.
						// to work around IE not supporting custom drag previews.
						//
						// When using a custom drag layer, the only way to prevent
						// the default drag preview from drawing in IE is to screenshot
						// the dragging state in which the node itself has zero opacity
						// and height. In this case, though, returning null from render()
						// will abruptly end the dragging, which is not obvious.
						//
						// This is the reason such behavior is strictly opt-in.
						this.actions.publishDragSource();
					}
				} else if (nativeType) {
					// A native item (such as URL) dragged from inside the document
					this.beginDragNativeItem(nativeType);
				} else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
					// Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
					// Just let it drag. It's a native type (URL or text) and will be picked up in
					// dragenter handler.
					return; // eslint-disable-line no-useless-return
				} else {
					// If by this time no drag source reacted, tell browser not to drag.
					e.preventDefault();
				}
			}
		}, {
			key: 'handleTopDragEndCapture',
			value: function handleTopDragEndCapture() {
				if (this.clearCurrentDragSourceNode()) {
					// Firefox can dispatch this event in an infinite loop
					// if dragend handler does something like showing an alert.
					// Only proceed if we have not handled it already.
					this.actions.endDrag();
				}
			}
		}, {
			key: 'handleTopDragEnterCapture',
			value: function handleTopDragEnterCapture(e) {
				this.dragEnterTargetIds = [];

				var isFirstEnter = this.enterLeaveCounter.enter(e.target);
				if (!isFirstEnter || this.monitor.isDragging()) {
					return;
				}

				var dataTransfer = e.dataTransfer;

				var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

				if (nativeType) {
					// A native item (such as file or URL) dragged from outside the document
					this.beginDragNativeItem(nativeType);
				}
			}
		}, {
			key: 'handleDragEnter',
			value: function handleDragEnter(e, targetId) {
				this.dragEnterTargetIds.unshift(targetId);
			}
		}, {
			key: 'handleTopDragEnter',
			value: function handleTopDragEnter(e) {
				var _this5 = this;

				var dragEnterTargetIds = this.dragEnterTargetIds;

				this.dragEnterTargetIds = [];

				if (!this.monitor.isDragging()) {
					// This is probably a native item type we don't understand.
					return;
				}

				this.altKeyPressed = e.altKey;

				if (!(0, _BrowserDetector.isFirefox)()) {
					// Don't emit hover in `dragenter` on Firefox due to an edge case.
					// If the target changes position as the result of `dragenter`, Firefox
					// will still happily dispatch `dragover` despite target being no longer
					// there. The easy solution is to only fire `hover` in `dragover` on FF.
					this.actions.hover(dragEnterTargetIds, {
						clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
					});
				}

				var canDrop = dragEnterTargetIds.some(function (targetId) {
					return _this5.monitor.canDropOnTarget(targetId);
				});

				if (canDrop) {
					// IE requires this to fire dragover events
					e.preventDefault();
					e.dataTransfer.dropEffect = this.getCurrentDropEffect();
				}
			}
		}, {
			key: 'handleTopDragOverCapture',
			value: function handleTopDragOverCapture() {
				this.dragOverTargetIds = [];
			}
		}, {
			key: 'handleDragOver',
			value: function handleDragOver(e, targetId) {
				this.dragOverTargetIds.unshift(targetId);
			}
		}, {
			key: 'handleTopDragOver',
			value: function handleTopDragOver(e) {
				var _this6 = this;

				var dragOverTargetIds = this.dragOverTargetIds;

				this.dragOverTargetIds = [];

				if (!this.monitor.isDragging()) {
					// This is probably a native item type we don't understand.
					// Prevent default "drop and blow away the whole document" action.
					e.preventDefault();
					e.dataTransfer.dropEffect = 'none';
					return;
				}

				this.altKeyPressed = e.altKey;

				this.actions.hover(dragOverTargetIds, {
					clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
				});

				var canDrop = dragOverTargetIds.some(function (targetId) {
					return _this6.monitor.canDropOnTarget(targetId);
				});

				if (canDrop) {
					// Show user-specified drop effect.
					e.preventDefault();
					e.dataTransfer.dropEffect = this.getCurrentDropEffect();
				} else if (this.isDraggingNativeItem()) {
					// Don't show a nice cursor but still prevent default
					// "drop and blow away the whole document" action.
					e.preventDefault();
					e.dataTransfer.dropEffect = 'none';
				} else if (this.checkIfCurrentDragSourceRectChanged()) {
					// Prevent animating to incorrect position.
					// Drop effect must be other than 'none' to prevent animation.
					e.preventDefault();
					e.dataTransfer.dropEffect = 'move';
				}
			}
		}, {
			key: 'handleTopDragLeaveCapture',
			value: function handleTopDragLeaveCapture(e) {
				if (this.isDraggingNativeItem()) {
					e.preventDefault();
				}

				var isLastLeave = this.enterLeaveCounter.leave(e.target);
				if (!isLastLeave) {
					return;
				}

				if (this.isDraggingNativeItem()) {
					this.endDragNativeItem();
				}
			}
		}, {
			key: 'handleTopDropCapture',
			value: function handleTopDropCapture(e) {
				this.dropTargetIds = [];
				e.preventDefault();

				if (this.isDraggingNativeItem()) {
					this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
				}

				this.enterLeaveCounter.reset();
			}
		}, {
			key: 'handleDrop',
			value: function handleDrop(e, targetId) {
				this.dropTargetIds.unshift(targetId);
			}
		}, {
			key: 'handleTopDrop',
			value: function handleTopDrop(e) {
				var dropTargetIds = this.dropTargetIds;

				this.dropTargetIds = [];

				this.actions.hover(dropTargetIds, {
					clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
				});
				this.actions.drop({ dropEffect: this.getCurrentDropEffect() });

				if (this.isDraggingNativeItem()) {
					this.endDragNativeItem();
				} else {
					this.endDragIfSourceWasRemovedFromDOM();
				}
			}
		}, {
			key: 'handleSelectStart',
			value: function handleSelectStart(e) {
				var target = e.target;

				// Only IE requires us to explicitly say
				// we want drag drop operation to start

				if (typeof target.dragDrop !== 'function') {
					return;
				}

				// Inputs and textareas should be selectable
				if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
					return;
				}

				// For other targets, ask IE
				// to enable drag and drop
				e.preventDefault();
				target.dragDrop();
			}
		}, {
			key: 'window',
			get: function get() {
				if (this.context && this.context.window) {
					return this.context.window;
				} else if (typeof window !== 'undefined') {
					return window;
				}
				return undefined;
			}
		}]);

		return HTML5Backend;
	}();

	exports.default = HTML5Backend;

/***/ }),
/* 1049 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(984),
	    assignInWith = __webpack_require__(1050),
	    baseRest = __webpack_require__(981),
	    customDefaultsAssignIn = __webpack_require__(1068);

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, customDefaultsAssignIn);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ }),
/* 1050 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(1051),
	    createAssigner = __webpack_require__(1054),
	    keysIn = __webpack_require__(1057);

	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});

	module.exports = assignInWith;


/***/ }),
/* 1051 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(1052),
	    baseAssignValue = __webpack_require__(1053);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 1052 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(1053),
	    eq = __webpack_require__(959);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 1053 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(988);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 1054 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(981),
	    isIterateeCall = __webpack_require__(1055);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 1055 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(959),
	    isArrayLike = __webpack_require__(991),
	    isIndex = __webpack_require__(1056),
	    isObject = __webpack_require__(933);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 1056 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 1057 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(1058),
	    baseKeysIn = __webpack_require__(1065),
	    isArrayLike = __webpack_require__(991);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ }),
/* 1058 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(1059),
	    isArguments = __webpack_require__(1002),
	    isArray = __webpack_require__(932),
	    isBuffer = __webpack_require__(1060),
	    isIndex = __webpack_require__(1056),
	    isTypedArray = __webpack_require__(1062);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 1059 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 1060 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(527),
	    stubFalse = __webpack_require__(1061);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(536)(module)))

/***/ }),
/* 1061 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 1062 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(1063),
	    baseUnary = __webpack_require__(979),
	    nodeUtil = __webpack_require__(1064);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 1063 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(525),
	    isLength = __webpack_require__(992),
	    isObjectLike = __webpack_require__(533);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 1064 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(528);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(536)(module)))

/***/ }),
/* 1065 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(933),
	    isPrototype = __webpack_require__(1066),
	    nativeKeysIn = __webpack_require__(1067);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ }),
/* 1066 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 1067 */
/***/ (function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ }),
/* 1068 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(959);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	 * of source objects to the destination object for all destination properties
	 * that resolve to `undefined`.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function customDefaultsAssignIn(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = customDefaultsAssignIn;


/***/ }),
/* 1069 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
		if (objA === objB) {
			return true;
		}

		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);

		if (keysA.length !== keysB.length) {
			return false;
		}

		// Test for A's keys different from B.
		var hasOwn = Object.prototype.hasOwnProperty;
		for (var i = 0; i < keysA.length; i += 1) {
			if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
				return false;
			}

			var valA = objA[keysA[i]];
			var valB = objB[keysA[i]];

			if (valA !== valB) {
				return false;
			}
		}

		return true;
	}

/***/ }),
/* 1070 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _union = __webpack_require__(1071);

	var _union2 = _interopRequireDefault(_union);

	var _without = __webpack_require__(936);

	var _without2 = _interopRequireDefault(_without);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EnterLeaveCounter = function () {
		function EnterLeaveCounter() {
			_classCallCheck(this, EnterLeaveCounter);

			this.entered = [];
		}

		_createClass(EnterLeaveCounter, [{
			key: 'enter',
			value: function enter(enteringNode) {
				var previousLength = this.entered.length;

				var isNodeEntered = function isNodeEntered(node) {
					return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
				};

				this.entered = (0, _union2.default)(this.entered.filter(isNodeEntered), [enteringNode]);

				return previousLength === 0 && this.entered.length > 0;
			}
		}, {
			key: 'leave',
			value: function leave(leavingNode) {
				var previousLength = this.entered.length;

				this.entered = (0, _without2.default)(this.entered.filter(function (node) {
					return document.documentElement.contains(node);
				}), leavingNode);

				return previousLength > 0 && this.entered.length === 0;
			}
		}, {
			key: 'reset',
			value: function reset() {
				this.entered = [];
			}
		}]);

		return EnterLeaveCounter;
	}();

	exports.default = EnterLeaveCounter;

/***/ }),
/* 1071 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(999),
	    baseRest = __webpack_require__(981),
	    baseUniq = __webpack_require__(1004),
	    isArrayLikeObject = __webpack_require__(990);

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */
	var union = baseRest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

	module.exports = union;


/***/ }),
/* 1072 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isSafari = exports.isFirefox = undefined;

	var _memoize = __webpack_require__(1073);

	var _memoize2 = _interopRequireDefault(_memoize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isFirefox = exports.isFirefox = (0, _memoize2.default)(function () {
	  return (/firefox/i.test(navigator.userAgent)
	  );
	});
	var isSafari = exports.isSafari = (0, _memoize2.default)(function () {
	  return Boolean(window.safari);
	});

/***/ }),
/* 1073 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(939);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 1074 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getNodeClientOffset = getNodeClientOffset;
	exports.getEventClientOffset = getEventClientOffset;
	exports.getDragPreviewOffset = getDragPreviewOffset;

	var _BrowserDetector = __webpack_require__(1072);

	var _MonotonicInterpolant = __webpack_require__(1075);

	var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint
	   no-mixed-operators: off
	*/
	var ELEMENT_NODE = 1;

	function getNodeClientOffset(node) {
		var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

		if (!el) {
			return null;
		}

		var _el$getBoundingClient = el.getBoundingClientRect(),
		    top = _el$getBoundingClient.top,
		    left = _el$getBoundingClient.left;

		return { x: left, y: top };
	}

	function getEventClientOffset(e) {
		return {
			x: e.clientX,
			y: e.clientY
		};
	}

	function isImageNode(node) {
		return node.nodeName === 'IMG' && ((0, _BrowserDetector.isFirefox)() || !document.documentElement.contains(node));
	}

	function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
		var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
		var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

		// Work around @2x coordinate discrepancies in browsers
		if ((0, _BrowserDetector.isSafari)() && isImage) {
			dragPreviewHeight /= window.devicePixelRatio;
			dragPreviewWidth /= window.devicePixelRatio;
		}
		return { dragPreviewWidth: dragPreviewWidth, dragPreviewHeight: dragPreviewHeight };
	}

	function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
		// The browsers will use the image intrinsic size under different conditions.
		// Firefox only cares if it's an image, but WebKit also wants it to be detached.
		var isImage = isImageNode(dragPreview);
		var dragPreviewNode = isImage ? sourceNode : dragPreview;
		var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
		var offsetFromDragPreview = {
			x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
			y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
		};
		var sourceWidth = sourceNode.offsetWidth,
		    sourceHeight = sourceNode.offsetHeight;
		var anchorX = anchorPoint.anchorX,
		    anchorY = anchorPoint.anchorY;

		var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
		    dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
		    dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;

		var calculateYOffset = function calculateYOffset() {
			var interpolantY = new _MonotonicInterpolant2.default([0, 0.5, 1], [
			// Dock to the top
			offsetFromDragPreview.y,
			// Align at the center
			offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
			// Dock to the bottom
			offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
			var y = interpolantY.interpolate(anchorY);
			// Work around Safari 8 positioning bug
			if ((0, _BrowserDetector.isSafari)() && isImage) {
				// We'll have to wait for @3x to see if this is entirely correct
				y += (window.devicePixelRatio - 1) * dragPreviewHeight;
			}
			return y;
		};

		var calculateXOffset = function calculateXOffset() {
			// Interpolate coordinates depending on anchor point
			// If you know a simpler way to do this, let me know
			var interpolantX = new _MonotonicInterpolant2.default([0, 0.5, 1], [
			// Dock to the left
			offsetFromDragPreview.x,
			// Align at the center
			offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
			// Dock to the right
			offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
			return interpolantX.interpolate(anchorX);
		};

		// Force offsets if specified in the options.
		var offsetX = offsetPoint.offsetX,
		    offsetY = offsetPoint.offsetY;

		var isManualOffsetX = offsetX === 0 || offsetX;
		var isManualOffsetY = offsetY === 0 || offsetY;
		return {
			x: isManualOffsetX ? offsetX : calculateXOffset(),
			y: isManualOffsetY ? offsetY : calculateYOffset()
		};
	}

/***/ }),
/* 1075 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* eslint
	   no-plusplus: off,
	   no-mixed-operators: off
	*/
	var MonotonicInterpolant = function () {
		function MonotonicInterpolant(xs, ys) {
			_classCallCheck(this, MonotonicInterpolant);

			var length = xs.length;

			// Rearrange xs and ys so that xs is sorted
			var indexes = [];
			for (var i = 0; i < length; i++) {
				indexes.push(i);
			}
			indexes.sort(function (a, b) {
				return xs[a] < xs[b] ? -1 : 1;
			});

			// Get consecutive differences and slopes
			var dys = [];
			var dxs = [];
			var ms = [];
			var dx = void 0;
			var dy = void 0;
			for (var _i = 0; _i < length - 1; _i++) {
				dx = xs[_i + 1] - xs[_i];
				dy = ys[_i + 1] - ys[_i];
				dxs.push(dx);
				dys.push(dy);
				ms.push(dy / dx);
			}

			// Get degree-1 coefficients
			var c1s = [ms[0]];
			for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
				var _m = ms[_i2];
				var mNext = ms[_i2 + 1];
				if (_m * mNext <= 0) {
					c1s.push(0);
				} else {
					dx = dxs[_i2];
					var dxNext = dxs[_i2 + 1];
					var common = dx + dxNext;
					c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
				}
			}
			c1s.push(ms[ms.length - 1]);

			// Get degree-2 and degree-3 coefficients
			var c2s = [];
			var c3s = [];
			var m = void 0;
			for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
				m = ms[_i3];
				var c1 = c1s[_i3];
				var invDx = 1 / dxs[_i3];
				var _common = c1 + c1s[_i3 + 1] - m - m;
				c2s.push((m - c1 - _common) * invDx);
				c3s.push(_common * invDx * invDx);
			}

			this.xs = xs;
			this.ys = ys;
			this.c1s = c1s;
			this.c2s = c2s;
			this.c3s = c3s;
		}

		_createClass(MonotonicInterpolant, [{
			key: "interpolate",
			value: function interpolate(x) {
				var xs = this.xs,
				    ys = this.ys,
				    c1s = this.c1s,
				    c2s = this.c2s,
				    c3s = this.c3s;

				// The rightmost point in the dataset should give an exact result

				var i = xs.length - 1;
				if (x === xs[i]) {
					return ys[i];
				}

				// Search for the interval x is in, returning the corresponding y if x is one of the original xs
				var low = 0;
				var high = c3s.length - 1;
				var mid = void 0;
				while (low <= high) {
					mid = Math.floor(0.5 * (low + high));
					var xHere = xs[mid];
					if (xHere < x) {
						low = mid + 1;
					} else if (xHere > x) {
						high = mid - 1;
					} else {
						return ys[mid];
					}
				}
				i = Math.max(0, high);

				// Interpolate
				var diff = x - xs[i];
				var diffSq = diff * diff;
				return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
			}
		}]);

		return MonotonicInterpolant;
	}();

	exports.default = MonotonicInterpolant;

/***/ }),
/* 1076 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nativeTypesConfig;

	exports.createNativeDragSource = createNativeDragSource;
	exports.matchNativeItemType = matchNativeItemType;

	var _NativeTypes = __webpack_require__(1077);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
		var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
			return resultSoFar || dataTransfer.getData(typeToTry);
		}, null);

		return result != null // eslint-disable-line eqeqeq
		? result : defaultValue;
	}

	var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
		exposeProperty: 'files',
		matchesTypes: ['Files'],
		getData: function getData(dataTransfer) {
			return Array.prototype.slice.call(dataTransfer.files);
		}
	}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
		exposeProperty: 'urls',
		matchesTypes: ['Url', 'text/uri-list'],
		getData: function getData(dataTransfer, matchesTypes) {
			return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
		}
	}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
		exposeProperty: 'text',
		matchesTypes: ['Text', 'text/plain'],
		getData: function getData(dataTransfer, matchesTypes) {
			return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
		}
	}), _nativeTypesConfig);

	function createNativeDragSource(type) {
		var _nativeTypesConfig$ty = nativeTypesConfig[type],
		    exposeProperty = _nativeTypesConfig$ty.exposeProperty,
		    matchesTypes = _nativeTypesConfig$ty.matchesTypes,
		    getData = _nativeTypesConfig$ty.getData;


		return function () {
			function NativeDragSource() {
				var _item, _mutatorMap;

				_classCallCheck(this, NativeDragSource);

				this.item = (_item = {}, _mutatorMap = {}, _mutatorMap[exposeProperty] = _mutatorMap[exposeProperty] || {}, _mutatorMap[exposeProperty].get = function () {
					// eslint-disable-next-line no-console
					console.warn('Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
					return null;
				}, _defineEnumerableProperties(_item, _mutatorMap), _item);
			}

			_createClass(NativeDragSource, [{
				key: 'mutateItemByReadingDataTransfer',
				value: function mutateItemByReadingDataTransfer(dataTransfer) {
					delete this.item[exposeProperty];
					this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
				}
			}, {
				key: 'canDrag',
				value: function canDrag() {
					return true;
				}
			}, {
				key: 'beginDrag',
				value: function beginDrag() {
					return this.item;
				}
			}, {
				key: 'isDragging',
				value: function isDragging(monitor, handle) {
					return handle === monitor.getSourceId();
				}
			}, {
				key: 'endDrag',
				value: function endDrag() {}
			}]);

			return NativeDragSource;
		}();
	}

	function matchNativeItemType(dataTransfer) {
		var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

		return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
			var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

			return matchesTypes.some(function (t) {
				return dataTransferTypes.indexOf(t) > -1;
			});
		})[0] || null;
	}

/***/ }),
/* 1077 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FILE = exports.FILE = '__NATIVE_FILE__';
	var URL = exports.URL = '__NATIVE_URL__';
	var TEXT = exports.TEXT = '__NATIVE_TEXT__';

/***/ }),
/* 1078 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = getEmptyImage;
	var emptyImage = void 0;
	function getEmptyImage() {
		if (!emptyImage) {
			emptyImage = new Image();
			emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
		}

		return emptyImage;
	}

/***/ }),
/* 1079 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(1080);

	var _ReactCSSTransitionGroup = __webpack_require__(1116);

	var _ReactCSSTransitionGroup2 = _interopRequireDefault(_ReactCSSTransitionGroup);

	var _selectable_set_table = __webpack_require__(1129);

	var _selectable_set_table2 = _interopRequireDefault(_selectable_set_table);

	var _droppable_selected_set = __webpack_require__(1131);

	var _droppable_selected_set2 = _interopRequireDefault(_droppable_selected_set);

	var _panel = __webpack_require__(798);

	var _set_panel = __webpack_require__(1137);

	var _set_panel2 = _interopRequireDefault(_set_panel);

	var _bottom_set_panel = __webpack_require__(1142);

	var _bottom_set_panel2 = _interopRequireDefault(_bottom_set_panel);

	var _add_set_form = __webpack_require__(1146);

	var _add_set_form2 = _interopRequireDefault(_add_set_form);

	var _font_awesome = __webpack_require__(797);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	var _user_message = __webpack_require__(914);

	var _user_message2 = _interopRequireDefault(_user_message);

	var _reduxJsonApi = __webpack_require__(549);

	var _utils = __webpack_require__(908);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SetShaper = function (_React$Component) {
	  _inherits(SetShaper, _React$Component);

	  function SetShaper(props) {
	    _classCallCheck(this, SetShaper);

	    var _this = _possibleConstructorReturn(this, (SetShaper.__proto__ || Object.getPrototypeOf(SetShaper)).call(this, props));

	    _this.state = {
	      topTabNumber: 0, // Which tab is open at the top
	      bottomTabNumber: 0, // Which tab is open at the bottom
	      userSetsPageNumber: 1, // Which page to fetch next for a User's Sets
	      setsPageNumber: 1, // Which page to fetch next for all Sets
	      fetching: false // Are we fetching?
	    };

	    _this.fetchNextUserSets = _this.fetchNextUserSets.bind(_this);
	    _this.fetchNextSets = _this.fetchNextSets.bind(_this);
	    _this.onScroll = _this.onScroll.bind(_this);
	    _this.setTabNumber = _this.setTabNumber.bind(_this);
	    return _this;
	  }

	  _createClass(SetShaper, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetchNextUserSets();
	      this.fetchNextSets();
	    }
	  }, {
	    key: 'fetchNextUserSets',
	    value: function fetchNextUserSets() {
	      this.fetchNextPage({
	        pageAttr: 'userSetsPageNumber',
	        action: (0, _reduxJsonApi.readEndpoint)('/sets?sort=-created_at&page[number]=' + this.state.userSetsPageNumber + '&filter[owner_id]=' + this.props.userEmail)
	      });
	    }
	  }, {
	    key: 'fetchNextSets',
	    value: function fetchNextSets() {
	      this.fetchNextPage({
	        pageAttr: 'setsPageNumber',
	        action: (0, _reduxJsonApi.readEndpoint)('/sets?sort=-created_at&page[number]=' + this.state.setsPageNumber)
	      });
	    }

	    // { pageAttr: 'String', action: ReduxAction }

	  }, {
	    key: 'fetchNextPage',
	    value: function fetchNextPage(_ref) {
	      var _this2 = this;

	      var pageAttr = _ref.pageAttr,
	          action = _ref.action;

	      // Page number is null when there's no next page so just ignore
	      if (this.state[pageAttr] == null || this.state.fetching) return;

	      this.setState({ fetching: true });

	      return this.props.dispatch(action).then(function (res) {
	        _this2.setState(function (prevState) {
	          var _ref2;

	          return _ref2 = {}, _defineProperty(_ref2, pageAttr, !!res.body.links.next ? prevState[pageAttr] + 1 : null), _defineProperty(_ref2, 'fetching', false), _ref2;
	        });
	      });
	    }

	    // The "Infinite" scroll

	  }, {
	    key: 'onScroll',
	    value: function onScroll(e, location) {
	      // Get the necessary attributes of the target element (Body)
	      var _e$target = e.target,
	          scrollTop = _e$target.scrollTop,
	          clientHeight = _e$target.clientHeight,
	          scrollHeight = _e$target.scrollHeight;

	      // Once we get (pretty much) to the bottom of the div

	      if (scrollTop + clientHeight >= scrollHeight - 25) {
	        // Either fetch a page of User Sets or All Sets depending on which tab is in which location
	        this.state[location + 'TabNumber'] == 0 ? this.fetchNextUserSets() : this.fetchNextSets();
	      }
	    }
	  }, {
	    key: 'setTabNumber',
	    value: function setTabNumber(location, number) {
	      this.setState(_defineProperty({}, location + 'TabNumber', number));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          selectedTopSet = _props.selectedTopSet,
	          selectedBottomSet = _props.selectedBottomSet,
	          sets = _props.sets,
	          userSets = _props.userSets;


	      var basename = '/simple';

	      if (typeof RELATIVE_URL_ROOT != 'undefined') {
	        basename = RELATIVE_URL_ROOT + basename;
	      }

	      return _react2.default.createElement(
	        _reactRouterDom.BrowserRouter,
	        { basename: basename },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-12' },
	              _react2.default.createElement(
	                'h1',
	                null,
	                'Set Browser'
	              )
	            )
	          ),
	          _react2.default.createElement(_user_message2.default, null),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-3' },
	              _react2.default.createElement(
	                _panel.Panel,
	                null,
	                _react2.default.createElement(_panel.Heading, { title: 'Sets' }),
	                _react2.default.createElement(
	                  _panel.Body,
	                  { onScroll: (0, _utils.debounce)(function (e) {
	                      return _this3.onScroll(e, 'top');
	                    }, true), style: { height: '280px', overflowY: 'scroll' } },
	                  _react2.default.createElement(
	                    'ul',
	                    { className: 'nav nav-tabs', role: 'tablist' },
	                    _react2.default.createElement(
	                      'li',
	                      { role: 'presentation', className: 'active' },
	                      _react2.default.createElement(
	                        'a',
	                        { onClick: function onClick(e) {
	                            return _this3.setTabNumber('top', 0);
	                          }, href: '#mySets', 'aria-controls': 'mySets', role: 'tab', 'data-toggle': 'tab' },
	                        'My Sets'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      { role: 'presentation' },
	                      _react2.default.createElement(
	                        'a',
	                        { onClick: function onClick(e) {
	                            return _this3.setTabNumber('top', 1);
	                          }, href: '#allSets', 'aria-controls': 'allSets', role: 'tab', 'data-toggle': 'tab' },
	                        'All Sets'
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'tab-content' },
	                    _react2.default.createElement(
	                      'div',
	                      { role: 'tabpanel', className: 'tab-pane active', id: 'mySets' },
	                      _react2.default.createElement(_selectable_set_table2.default, {
	                        sets: userSets,
	                        selectionType: 'top',
	                        hideOwner: true,
	                        addLink: true,
	                        fetching: this.state.fetching
	                      })
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { role: 'tabpanel', className: 'tab-pane', id: 'allSets' },
	                      _react2.default.createElement(_selectable_set_table2.default, {
	                        sets: sets,
	                        selectionType: 'top',
	                        addLink: true,
	                        fetching: this.state.fetching
	                      })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  _panel.Footer,
	                  null,
	                  _react2.default.createElement(_add_set_form2.default, null)
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-9' },
	              _react2.default.createElement(
	                _reactRouterDom.Switch,
	                null,
	                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/sets/:set_uuid', component: _set_panel2.default }),
	                _react2.default.createElement(_reactRouterDom.Route, { component: _set_panel.SetPanelComponent })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-3' },
	              _react2.default.createElement(
	                _panel.Panel,
	                null,
	                _react2.default.createElement(
	                  _panel.Body,
	                  { onScroll: (0, _utils.debounce)(function (e) {
	                      return _this3.onScroll(e, 'bottom');
	                    }, true), style: { height: '320px', overflowY: 'scroll' } },
	                  _react2.default.createElement(
	                    'ul',
	                    { className: 'nav nav-tabs', role: 'tablist' },
	                    _react2.default.createElement(
	                      'li',
	                      { role: 'presentation', className: 'active' },
	                      _react2.default.createElement(
	                        'a',
	                        { onClick: function onClick(e) {
	                            return _this3.setTabNumber('bottom', 0);
	                          }, href: '#mySetsBottom', 'aria-controls': 'mySets', role: 'tab', 'data-toggle': 'tab' },
	                        'My Sets'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      { role: 'presentation' },
	                      _react2.default.createElement(
	                        'a',
	                        { onClick: function onClick(e) {
	                            return _this3.setTabNumber('bottom', 1);
	                          }, href: '#sets', 'aria-controls': 'sets', role: 'tab', 'data-toggle': 'tab' },
	                        'All Sets'
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'tab-content' },
	                    _react2.default.createElement(
	                      'div',
	                      { role: 'tabpanel', className: 'tab-pane active', id: 'mySetsBottom' },
	                      _react2.default.createElement(_selectable_set_table2.default, {
	                        sets: userSets,
	                        selectionType: 'bottom',
	                        hideOwner: true,
	                        addLink: false,
	                        fetching: this.state.fetching
	                      })
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { role: 'tabpanel', className: 'tab-pane', id: 'sets' },
	                      _react2.default.createElement(_selectable_set_table2.default, {
	                        sets: sets,
	                        selectionType: 'bottom',
	                        addLink: false,
	                        fetching: this.state.fetching
	                      })
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-9' },
	              _react2.default.createElement(
	                _ReactCSSTransitionGroup2.default,
	                { transitionName: 'content', transitionEnterTimeout: 500, transitionLeave: false },
	                _react2.default.createElement(_bottom_set_panel2.default, { set: selectedBottomSet })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return SetShaper;
	}(_react2.default.Component);

	;

	SetShaper.defaultProps = {
	  selectedTopSet: { attributes: { name: '' } },
	  selectedBottomSet: { attributes: { name: '' } },
	  sets: [],
	  userSets: []
	};

	exports.default = SetShaper;

/***/ }),
/* 1080 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

	var _BrowserRouter2 = __webpack_require__(1081);

	var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

	var _HashRouter2 = __webpack_require__(1091);

	var _HashRouter3 = _interopRequireDefault(_HashRouter2);

	var _Link2 = __webpack_require__(1093);

	var _Link3 = _interopRequireDefault(_Link2);

	var _MemoryRouter2 = __webpack_require__(1094);

	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

	var _NavLink2 = __webpack_require__(1097);

	var _NavLink3 = _interopRequireDefault(_NavLink2);

	var _Prompt2 = __webpack_require__(1103);

	var _Prompt3 = _interopRequireDefault(_Prompt2);

	var _Redirect2 = __webpack_require__(1105);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(1098);

	var _Route3 = _interopRequireDefault(_Route2);

	var _Router2 = __webpack_require__(1089);

	var _Router3 = _interopRequireDefault(_Router2);

	var _StaticRouter2 = __webpack_require__(1108);

	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

	var _Switch2 = __webpack_require__(1110);

	var _Switch3 = _interopRequireDefault(_Switch2);

	var _matchPath2 = __webpack_require__(1112);

	var _matchPath3 = _interopRequireDefault(_matchPath2);

	var _withRouter2 = __webpack_require__(1113);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BrowserRouter = _BrowserRouter3.default;
	exports.HashRouter = _HashRouter3.default;
	exports.Link = _Link3.default;
	exports.MemoryRouter = _MemoryRouter3.default;
	exports.NavLink = _NavLink3.default;
	exports.Prompt = _Prompt3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	exports.Router = _Router3.default;
	exports.StaticRouter = _StaticRouter3.default;
	exports.Switch = _Switch3.default;
	exports.matchPath = _matchPath3.default;
	exports.withRouter = _withRouter3.default;

/***/ }),
/* 1081 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createBrowserHistory = __webpack_require__(1082);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _Router = __webpack_require__(1089);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */
	var BrowserRouter = function (_React$Component) {
	  _inherits(BrowserRouter, _React$Component);

	  function BrowserRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, BrowserRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createBrowserHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
	  };

	  BrowserRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return BrowserRouter;
	}(_react2.default.Component);

	BrowserRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  forceRefresh: _propTypes2.default.bool,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = BrowserRouter;

/***/ }),
/* 1082 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(1083);

	var _PathUtils = __webpack_require__(1086);

	var _createTransitionManager = __webpack_require__(1087);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(1088);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var getHistoryState = function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	};

	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

	  var globalHistory = window.history;
	  var canUseHistory = (0, _DOMUtils.supportsHistory)();
	  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

	  var _props$forceRefresh = props.forceRefresh,
	      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
	      _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var getDOMLocation = function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;


	    var path = pathname + search + hash;

	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

	    return (0, _LocationUtils.createLocation)(path, state, key);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var handlePopState = function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

	    handlePop(getDOMLocation(event.state));
	  };

	  var handleHashChange = function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  };

	  var forceNextPop = false;

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allKeys.indexOf(fromLocation.key);

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key];

	  // Public interface

	  var createHref = function createHref(location) {
	    return basename + (0, _PathUtils.createPath)(location);
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.pushState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	          nextKeys.push(location.key);
	          allKeys = nextKeys;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

	        window.location.href = href;
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.replaceState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);

	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

	        window.location.replace(href);
	      }
	    });
	  };

	  var go = function go(n) {
	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createBrowserHistory;

/***/ }),
/* 1083 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _resolvePathname = __webpack_require__(1084);

	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

	var _valueEqual = __webpack_require__(1085);

	var _valueEqual2 = _interopRequireDefault(_valueEqual);

	var _PathUtils = __webpack_require__(1086);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, _PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};

/***/ }),
/* 1084 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	}

	// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }

	  list.pop();
	}

	// This implementation is based heavily on node's url.parse
	function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	}

	exports.default = resolvePathname;
	module.exports = exports['default'];

/***/ }),
/* 1085 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function valueEqual(a, b) {
	  if (a === b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return valueEqual(item, b[index]);
	    });
	  }

	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (aType !== bType) return false;

	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);

	    if (aKeys.length !== bKeys.length) return false;

	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	}

	exports.default = valueEqual;
	module.exports = exports['default'];

/***/ }),
/* 1086 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};

	var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
	  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
	};

	var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	};

	var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;


	  var path = pathname || '/';

	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

	  return path;
	};

/***/ }),
/* 1087 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;

	  var setPrompt = function setPrompt(nextPrompt) {
	    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

	    prompt = nextPrompt;

	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };

	  var listeners = [];

	  var appendListener = function appendListener(fn) {
	    var isActive = true;

	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };

	    listeners.push(listener);

	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};

	exports.default = createTransitionManager;

/***/ }),
/* 1088 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};

/***/ }),
/* 1089 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Router = __webpack_require__(1090);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1090 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for putting history on context.
	 */
	var Router = function (_React$Component) {
	  _inherits(Router, _React$Component);

	  function Router() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Router);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props.history.location.pathname)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Router.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        history: this.props.history,
	        route: {
	          location: this.props.history.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Router.prototype.computeMatch = function computeMatch(pathname) {
	    return {
	      path: '/',
	      url: '/',
	      params: {},
	      isExact: pathname === '/'
	    };
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    var _props = this.props,
	        children = _props.children,
	        history = _props.history;


	    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');

	    // Do this here so we can setState when a <Redirect> changes the
	    // location in componentWillMount. This happens e.g. when doing
	    // server rendering using a <StaticRouter>.
	    this.unlisten = history.listen(function () {
	      _this2.setState({
	        match: _this2.computeMatch(history.location.pathname)
	      });
	    });
	  };

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unlisten();
	  };

	  Router.prototype.render = function render() {
	    var children = this.props.children;

	    return children ? _react2.default.Children.only(children) : null;
	  };

	  return Router;
	}(_react2.default.Component);

	Router.propTypes = {
	  history: _propTypes2.default.object.isRequired,
	  children: _propTypes2.default.node
	};
	Router.contextTypes = {
	  router: _propTypes2.default.object
	};
	Router.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Router;

/***/ }),
/* 1091 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createHashHistory = __webpack_require__(1092);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _Router = __webpack_require__(1089);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */
	var HashRouter = function (_React$Component) {
	  _inherits(HashRouter, _React$Component);

	  function HashRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, HashRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createHashHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  HashRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
	  };

	  HashRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return HashRouter;
	}(_react2.default.Component);

	HashRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  getUserConfirmation: _propTypes2.default.func,
	  hashType: _propTypes2.default.oneOf(['hashbang', 'noslash', 'slash']),
	  children: _propTypes2.default.node
	};
	exports.default = HashRouter;

/***/ }),
/* 1092 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(1083);

	var _PathUtils = __webpack_require__(1086);

	var _createTransitionManager = __webpack_require__(1087);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(1088);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: _PathUtils.stripLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  },
	  slash: {
	    encodePath: _PathUtils.addLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  }
	};

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var createHashHistory = function createHashHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

	  var globalHistory = window.history;
	  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$hashType = props.hashType,
	      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;


	  var getDOMLocation = function getDOMLocation() {
	    var path = decodePath(getHashPath());

	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

	    return (0, _LocationUtils.createLocation)(path);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var forceNextPop = false;
	  var ignorePath = null;

	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;

	      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;

	      handlePop(location);
	    }
	  };

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  // Ensure the hash is encoded properly before doing anything else.
	  var path = getHashPath();
	  var encodedPath = encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  var initialLocation = getDOMLocation();
	  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

	  // Public interface

	  var createHref = function createHref(location) {
	    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);

	        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	        nextPaths.push(path);
	        allPaths = nextPaths;

	        setState({ action: action, location: location });
	      } else {
	        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

	        setState();
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

	      if (prevIndex !== -1) allPaths[prevIndex] = path;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createHashHistory;

/***/ }),
/* 1093 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isModifiedEvent = function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	};

	/**
	 * The public API for rendering a history-aware <a>.
	 */

	var Link = function (_React$Component) {
	  _inherits(Link, _React$Component);

	  function Link() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Link);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (_this.props.onClick) _this.props.onClick(event);

	      if (!event.defaultPrevented && // onClick prevented default
	      event.button === 0 && // ignore right clicks
	      !_this.props.target && // let browser handle "target=_blank" etc.
	      !isModifiedEvent(event) // ignore clicks with modifier keys
	      ) {
	          event.preventDefault();

	          var history = _this.context.router.history;
	          var _this$props = _this.props,
	              replace = _this$props.replace,
	              to = _this$props.to;


	          if (replace) {
	            history.replace(to);
	          } else {
	            history.push(to);
	          }
	        }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Link.prototype.render = function render() {
	    var _props = this.props,
	        replace = _props.replace,
	        to = _props.to,
	        innerRef = _props.innerRef,
	        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

	    (0, _invariant2.default)(this.context.router, 'You should not use <Link> outside a <Router>');

	    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
	  };

	  return Link;
	}(_react2.default.Component);

	Link.propTypes = {
	  onClick: _propTypes2.default.func,
	  target: _propTypes2.default.string,
	  replace: _propTypes2.default.bool,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
	  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
	};
	Link.defaultProps = {
	  replace: false
	};
	Link.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired,
	      createHref: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Link;

/***/ }),
/* 1094 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _MemoryRouter = __webpack_require__(1095);

	var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1095 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createMemoryHistory = __webpack_require__(1096);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _Router = __webpack_require__(1090);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that stores location in memory.
	 */
	var MemoryRouter = function (_React$Component) {
	  _inherits(MemoryRouter, _React$Component);

	  function MemoryRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, MemoryRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createMemoryHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
	  };

	  MemoryRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return MemoryRouter;
	}(_react2.default.Component);

	MemoryRouter.propTypes = {
	  initialEntries: _propTypes2.default.array,
	  initialIndex: _propTypes2.default.number,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = MemoryRouter;

/***/ }),
/* 1096 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(1086);

	var _LocationUtils = __webpack_require__(1083);

	var _createTransitionManager = __webpack_require__(1087);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clamp = function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	};

	/**
	 * Creates a history object that stores locations in memory.
	 */
	var createMemoryHistory = function createMemoryHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getUserConfirmation = props.getUserConfirmation,
	      _props$initialEntries = props.initialEntries,
	      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
	      _props$initialIndex = props.initialIndex,
	      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = history.entries.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
	  });

	  // Public interface

	  var createHref = _PathUtils.createPath;

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;

	      var nextEntries = history.entries.slice(0);
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      history.entries[history.index] = location;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

	    var action = 'POP';
	    var location = history.entries[nextIndex];

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var canGo = function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  };

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return transitionManager.setPrompt(prompt);
	  };

	  var listen = function listen(listener) {
	    return transitionManager.appendListener(listener);
	  };

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createMemoryHistory;

/***/ }),
/* 1097 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Route = __webpack_require__(1098);

	var _Route2 = _interopRequireDefault(_Route);

	var _Link = __webpack_require__(1093);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */
	var NavLink = function NavLink(_ref) {
	  var to = _ref.to,
	      exact = _ref.exact,
	      strict = _ref.strict,
	      location = _ref.location,
	      activeClassName = _ref.activeClassName,
	      className = _ref.className,
	      activeStyle = _ref.activeStyle,
	      style = _ref.style,
	      getIsActive = _ref.isActive,
	      ariaCurrent = _ref.ariaCurrent,
	      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

	  return _react2.default.createElement(_Route2.default, {
	    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
	    exact: exact,
	    strict: strict,
	    location: location,
	    children: function children(_ref2) {
	      var location = _ref2.location,
	          match = _ref2.match;

	      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

	      return _react2.default.createElement(_Link2.default, _extends({
	        to: to,
	        className: isActive ? [className, activeClassName].filter(function (i) {
	          return i;
	        }).join(' ') : className,
	        style: isActive ? _extends({}, style, activeStyle) : style,
	        'aria-current': isActive && ariaCurrent
	      }, rest));
	    }
	  });
	};

	NavLink.propTypes = {
	  to: _Link2.default.propTypes.to,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  location: _propTypes2.default.object,
	  activeClassName: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  activeStyle: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  isActive: _propTypes2.default.func,
	  ariaCurrent: _propTypes2.default.oneOf(['page', 'step', 'location', 'true'])
	};

	NavLink.defaultProps = {
	  activeClassName: 'active',
	  ariaCurrent: 'true'
	};

	exports.default = NavLink;

/***/ }),
/* 1098 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Route = __webpack_require__(1099);

	var _Route2 = _interopRequireDefault(_Route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1099 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _matchPath = __webpack_require__(1100);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isEmptyChildren = function isEmptyChildren(children) {
	  return _react2.default.Children.count(children) === 0;
	};

	/**
	 * The public API for matching a single path and rendering.
	 */

	var Route = function (_React$Component) {
	  _inherits(Route, _React$Component);

	  function Route() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Route);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props, _this.context.router)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Route.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        route: {
	          location: this.props.location || this.context.router.route.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Route.prototype.computeMatch = function computeMatch(_ref, router) {
	    var computedMatch = _ref.computedMatch,
	        location = _ref.location,
	        path = _ref.path,
	        strict = _ref.strict,
	        exact = _ref.exact,
	        sensitive = _ref.sensitive;

	    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

	    (0, _invariant2.default)(router, 'You should not use <Route> or withRouter() outside a <Router>');

	    var route = router.route;

	    var pathname = (location || route.location).pathname;

	    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
	  };

	  Route.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

	    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

	    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
	  };

	  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

	    this.setState({
	      match: this.computeMatch(nextProps, nextContext.router)
	    });
	  };

	  Route.prototype.render = function render() {
	    var match = this.state.match;
	    var _props = this.props,
	        children = _props.children,
	        component = _props.component,
	        render = _props.render;
	    var _context$router = this.context.router,
	        history = _context$router.history,
	        route = _context$router.route,
	        staticContext = _context$router.staticContext;

	    var location = this.props.location || route.location;
	    var props = { match: match, location: location, history: history, staticContext: staticContext };

	    return component ? // component prop gets first priority, only called if there's a match
	    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
	    match ? render(props) : null : children ? // children come last, always called
	    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? _react2.default.Children.only(children) : null : null;
	  };

	  return Route;
	}(_react2.default.Component);

	Route.propTypes = {
	  computedMatch: _propTypes2.default.object, // private, from <Switch>
	  path: _propTypes2.default.string,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  sensitive: _propTypes2.default.bool,
	  component: _propTypes2.default.func,
	  render: _propTypes2.default.func,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
	  location: _propTypes2.default.object
	};
	Route.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.object.isRequired,
	    route: _propTypes2.default.object.isRequired,
	    staticContext: _propTypes2.default.object
	  })
	};
	Route.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Route;

/***/ }),
/* 1100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _pathToRegexp = __webpack_require__(1101);

	var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var patternCache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;

	var compilePath = function compilePath(pattern, options) {
	  var cacheKey = '' + options.end + options.strict + options.sensitive;
	  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

	  if (cache[pattern]) return cache[pattern];

	  var keys = [];
	  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
	  var compiledPattern = { re: re, keys: keys };

	  if (cacheCount < cacheLimit) {
	    cache[pattern] = compiledPattern;
	    cacheCount++;
	  }

	  return compiledPattern;
	};

	/**
	 * Public API for matching a URL pathname to a path pattern.
	 */
	var matchPath = function matchPath(pathname) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (typeof options === 'string') options = { path: options };

	  var _options = options,
	      _options$path = _options.path,
	      path = _options$path === undefined ? '/' : _options$path,
	      _options$exact = _options.exact,
	      exact = _options$exact === undefined ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === undefined ? false : _options$strict,
	      _options$sensitive = _options.sensitive,
	      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

	  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
	      re = _compilePath.re,
	      keys = _compilePath.keys;

	  var match = re.exec(pathname);

	  if (!match) return null;

	  var url = match[0],
	      values = match.slice(1);

	  var isExact = pathname === url;

	  if (exact && !isExact) return null;

	  return {
	    path: path, // the path pattern used to match
	    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
	    isExact: isExact, // whether or not we matched exactly
	    params: keys.reduce(function (memo, key, index) {
	      memo[key.name] = values[index];
	      return memo;
	    }, {})
	  };
	};

	exports.default = matchPath;

/***/ }),
/* 1101 */
/***/ (function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(1102)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      keys.push(token)

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ }),
/* 1102 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 1103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Prompt = __webpack_require__(1104);

	var _Prompt2 = _interopRequireDefault(_Prompt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for prompting the user before navigating away
	 * from a screen with a component.
	 */
	var Prompt = function (_React$Component) {
	  _inherits(Prompt, _React$Component);

	  function Prompt() {
	    _classCallCheck(this, Prompt);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Prompt.prototype.enable = function enable(message) {
	    if (this.unblock) this.unblock();

	    this.unblock = this.context.router.history.block(message);
	  };

	  Prompt.prototype.disable = function disable() {
	    if (this.unblock) {
	      this.unblock();
	      this.unblock = null;
	    }
	  };

	  Prompt.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Prompt> outside a <Router>');

	    if (this.props.when) this.enable(this.props.message);
	  };

	  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.when) {
	      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
	    } else {
	      this.disable();
	    }
	  };

	  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.disable();
	  };

	  Prompt.prototype.render = function render() {
	    return null;
	  };

	  return Prompt;
	}(_react2.default.Component);

	Prompt.propTypes = {
	  when: _propTypes2.default.bool,
	  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
	};
	Prompt.defaultProps = {
	  when: true
	};
	Prompt.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      block: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Prompt;

/***/ }),
/* 1105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Redirect = __webpack_require__(1106);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _history = __webpack_require__(1107);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for updating the location programmatically
	 * with a component.
	 */
	var Redirect = function (_React$Component) {
	  _inherits(Redirect, _React$Component);

	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Redirect.prototype.isStatic = function isStatic() {
	    return this.context.router && this.context.router.staticContext;
	  };

	  Redirect.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Redirect> outside a <Router>');

	    if (this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidMount = function componentDidMount() {
	    if (!this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var prevTo = (0, _history.createLocation)(prevProps.to);
	    var nextTo = (0, _history.createLocation)(this.props.to);

	    if ((0, _history.locationsAreEqual)(prevTo, nextTo)) {
	      (0, _warning2.default)(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
	      return;
	    }

	    this.perform();
	  };

	  Redirect.prototype.perform = function perform() {
	    var history = this.context.router.history;
	    var _props = this.props,
	        push = _props.push,
	        to = _props.to;


	    if (push) {
	      history.push(to);
	    } else {
	      history.replace(to);
	    }
	  };

	  Redirect.prototype.render = function render() {
	    return null;
	  };

	  return Redirect;
	}(_react2.default.Component);

	Redirect.propTypes = {
	  push: _propTypes2.default.bool,
	  from: _propTypes2.default.string,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};
	Redirect.defaultProps = {
	  push: false
	};
	Redirect.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired
	    }).isRequired,
	    staticContext: _propTypes2.default.object
	  }).isRequired
	};
	exports.default = Redirect;

/***/ }),
/* 1107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

	var _LocationUtils = __webpack_require__(1083);

	Object.defineProperty(exports, 'createLocation', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.createLocation;
	  }
	});
	Object.defineProperty(exports, 'locationsAreEqual', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.locationsAreEqual;
	  }
	});

	var _PathUtils = __webpack_require__(1086);

	Object.defineProperty(exports, 'parsePath', {
	  enumerable: true,
	  get: function get() {
	    return _PathUtils.parsePath;
	  }
	});
	Object.defineProperty(exports, 'createPath', {
	  enumerable: true,
	  get: function get() {
	    return _PathUtils.createPath;
	  }
	});

	var _createBrowserHistory2 = __webpack_require__(1082);

	var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

	var _createHashHistory2 = __webpack_require__(1092);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	var _createMemoryHistory2 = __webpack_require__(1096);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createBrowserHistory = _createBrowserHistory3.default;
	exports.createHashHistory = _createHashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),
/* 1108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _StaticRouter = __webpack_require__(1109);

	var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _PathUtils = __webpack_require__(1086);

	var _Router = __webpack_require__(1090);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var normalizeLocation = function normalizeLocation(object) {
	  var _object$pathname = object.pathname,
	      pathname = _object$pathname === undefined ? '/' : _object$pathname,
	      _object$search = object.search,
	      search = _object$search === undefined ? '' : _object$search,
	      _object$hash = object.hash,
	      hash = _object$hash === undefined ? '' : _object$hash;


	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var addBasename = function addBasename(basename, location) {
	  if (!basename) return location;

	  return _extends({}, location, {
	    pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
	  });
	};

	var stripBasename = function stripBasename(basename, location) {
	  if (!basename) return location;

	  var base = (0, _PathUtils.addLeadingSlash)(basename);

	  if (location.pathname.indexOf(base) !== 0) return location;

	  return _extends({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	};

	var createLocation = function createLocation(location) {
	  return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
	};

	var createURL = function createURL(location) {
	  return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
	};

	var staticHandler = function staticHandler(methodName) {
	  return function () {
	    (0, _invariant2.default)(false, 'You cannot %s with <StaticRouter>', methodName);
	  };
	};

	var noop = function noop() {};

	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */

	var StaticRouter = function (_React$Component) {
	  _inherits(StaticRouter, _React$Component);

	  function StaticRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, StaticRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
	      return (0, _PathUtils.addLeadingSlash)(_this.props.basename + createURL(path));
	    }, _this.handlePush = function (location) {
	      var _this$props = _this.props,
	          basename = _this$props.basename,
	          context = _this$props.context;

	      context.action = 'PUSH';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleReplace = function (location) {
	      var _this$props2 = _this.props,
	          basename = _this$props2.basename,
	          context = _this$props2.context;

	      context.action = 'REPLACE';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleListen = function () {
	      return noop;
	    }, _this.handleBlock = function () {
	      return noop;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  StaticRouter.prototype.getChildContext = function getChildContext() {
	    return {
	      router: {
	        staticContext: this.props.context
	      }
	    };
	  };

	  StaticRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
	  };

	  StaticRouter.prototype.render = function render() {
	    var _props = this.props,
	        basename = _props.basename,
	        context = _props.context,
	        location = _props.location,
	        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

	    var history = {
	      createHref: this.createHref,
	      action: 'POP',
	      location: stripBasename(basename, createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler('go'),
	      goBack: staticHandler('goBack'),
	      goForward: staticHandler('goForward'),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };

	    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
	  };

	  return StaticRouter;
	}(_react2.default.Component);

	StaticRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  context: _propTypes2.default.object.isRequired,
	  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};
	StaticRouter.defaultProps = {
	  basename: '',
	  location: '/'
	};
	StaticRouter.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = StaticRouter;

/***/ }),
/* 1110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Switch = __webpack_require__(1111);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(720);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(544);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _matchPath = __webpack_require__(1100);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for rendering the first <Route> that matches.
	 */
	var Switch = function (_React$Component) {
	  _inherits(Switch, _React$Component);

	  function Switch() {
	    _classCallCheck(this, Switch);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Switch.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Switch> outside a <Router>');
	  };

	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };

	  Switch.prototype.render = function render() {
	    var route = this.context.router.route;
	    var children = this.props.children;

	    var location = this.props.location || route.location;

	    var match = void 0,
	        child = void 0;
	    _react2.default.Children.forEach(children, function (element) {
	      if (!_react2.default.isValidElement(element)) return;

	      var _element$props = element.props,
	          pathProp = _element$props.path,
	          exact = _element$props.exact,
	          strict = _element$props.strict,
	          sensitive = _element$props.sensitive,
	          from = _element$props.from;

	      var path = pathProp || from;

	      if (match == null) {
	        child = element;
	        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
	      }
	    });

	    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
	  };

	  return Switch;
	}(_react2.default.Component);

	Switch.contextTypes = {
	  router: _propTypes2.default.shape({
	    route: _propTypes2.default.object.isRequired
	  }).isRequired
	};
	Switch.propTypes = {
	  children: _propTypes2.default.node,
	  location: _propTypes2.default.object
	};
	exports.default = Switch;

/***/ }),
/* 1112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _matchPath = __webpack_require__(1100);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _withRouter = __webpack_require__(1114);

	var _withRouter2 = _interopRequireDefault(_withRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 1114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _hoistNonReactStatics = __webpack_require__(1115);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _Route = __webpack_require__(1099);

	var _Route2 = _interopRequireDefault(_Route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A public higher-order component to access the imperative API
	 */
	var withRouter = function withRouter(Component) {
	  var C = function C(props) {
	    var wrappedComponentRef = props.wrappedComponentRef,
	        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

	    return _react2.default.createElement(_Route2.default, { render: function render(routeComponentProps) {
	        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
	      } });
	  };

	  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
	  C.WrappedComponent = Component;
	  C.propTypes = {
	    wrappedComponentRef: _propTypes2.default.func
	  };

	  return (0, _hoistNonReactStatics2.default)(C, Component);
	};

	exports.default = withRouter;

/***/ }),
/* 1115 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	};


/***/ }),
/* 1116 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(333);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(331);
	var propTypesFactory = __webpack_require__(358);
	var PropTypes = propTypesFactory(React.isValidElement);

	var ReactTransitionGroup = __webpack_require__(1117);
	var ReactCSSTransitionGroupChild = __webpack_require__(1120);

	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + " wasn't supplied to ReactCSSTransitionGroup: " + "this can cause unreliable animations and won't be supported in " + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	      }
	    }
	  };
	}

	/**
	 * An easy way to perform CSS transitions and animations when a React component
	 * enters or leaves the DOM.
	 * See https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup
	 */

	var ReactCSSTransitionGroup = function (_React$Component) {
	  _inherits(ReactCSSTransitionGroup, _React$Component);

	  function ReactCSSTransitionGroup() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, ReactCSSTransitionGroup);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
	      // We need to provide this childFactory so that
	      // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	      // leave while it is leaving.
	      return React.createElement(ReactCSSTransitionGroupChild, {
	        name: _this.props.transitionName,
	        appear: _this.props.transitionAppear,
	        enter: _this.props.transitionEnter,
	        leave: _this.props.transitionLeave,
	        appearTimeout: _this.props.transitionAppearTimeout,
	        enterTimeout: _this.props.transitionEnterTimeout,
	        leaveTimeout: _this.props.transitionLeaveTimeout
	      }, child);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  ReactCSSTransitionGroup.prototype.render = function render() {
	    return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
	  };

	  return ReactCSSTransitionGroup;
	}(React.Component);

	ReactCSSTransitionGroup.displayName = 'ReactCSSTransitionGroup';
	ReactCSSTransitionGroup.propTypes = {
	  transitionName: ReactCSSTransitionGroupChild.propTypes.name,

	  transitionAppear: PropTypes.bool,
	  transitionEnter: PropTypes.bool,
	  transitionLeave: PropTypes.bool,
	  transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	  transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	  transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	};
	ReactCSSTransitionGroup.defaultProps = {
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionLeave: true
	};


	module.exports = ReactCSSTransitionGroup;

/***/ }),
/* 1117 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(333);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(331);
	var ReactTransitionChildMapping = __webpack_require__(1118);

	var propTypesFactory = __webpack_require__(358);
	var PropTypes = propTypesFactory(React.isValidElement);

	var emptyFunction = __webpack_require__(338);

	/**
	 * A basis for animations. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */

	var ReactTransitionGroup = function (_React$Component) {
	  _inherits(ReactTransitionGroup, _React$Component);

	  function ReactTransitionGroup() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, ReactTransitionGroup);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      // TODO: can we get useful debug information to show at this point?
	      children: ReactTransitionChildMapping.getChildMapping(_this.props.children)
	    }, _this.performAppear = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;

	      var component = _this.refs[key];

	      if (component.componentWillAppear) {
	        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
	      } else {
	        _this._handleDoneAppearing(key);
	      }
	    }, _this._handleDoneAppearing = function (key) {
	      var component = _this.refs[key];
	      if (component.componentDidAppear) {
	        component.componentDidAppear();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully appeared. Remove it.
	        _this.performLeave(key);
	      }
	    }, _this.performEnter = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;

	      var component = _this.refs[key];

	      if (component.componentWillEnter) {
	        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
	      } else {
	        _this._handleDoneEntering(key);
	      }
	    }, _this._handleDoneEntering = function (key) {
	      var component = _this.refs[key];
	      if (component.componentDidEnter) {
	        component.componentDidEnter();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully entered. Remove it.
	        _this.performLeave(key);
	      }
	    }, _this.performLeave = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;

	      var component = _this.refs[key];
	      if (component.componentWillLeave) {
	        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
	      } else {
	        // Note that this is somewhat dangerous b/c it calls setState()
	        // again, effectively mutating the component before all the work
	        // is done.
	        _this._handleDoneLeaving(key);
	      }
	    }, _this._handleDoneLeaving = function (key) {
	      var component = _this.refs[key];

	      if (component.componentDidLeave) {
	        component.componentDidLeave();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

	      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	        // This entered again before it fully left. Add it again.
	        _this.performEnter(key);
	      } else {
	        _this.setState(function (state) {
	          var newChildren = _assign({}, state.children);
	          delete newChildren[key];
	          return { children: newChildren };
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  ReactTransitionGroup.prototype.componentWillMount = function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  };

	  ReactTransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  };

	  ReactTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  };

	  ReactTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };

	  ReactTransitionGroup.prototype.render = function render() {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), {
	          ref: key,
	          key: key
	        }));
	      }
	    }

	    // Do not forward ReactTransitionGroup props to primitive DOM nodes
	    var props = _assign({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;

	    return React.createElement(this.props.component, props, childrenToRender);
	  };

	  return ReactTransitionGroup;
	}(React.Component);

	ReactTransitionGroup.displayName = 'ReactTransitionGroup';
	ReactTransitionGroup.propTypes = {
	  component: PropTypes.any,
	  childFactory: PropTypes.func
	};
	ReactTransitionGroup.defaultProps = {
	  component: 'span',
	  childFactory: emptyFunction.thatReturnsArgument
	};


	module.exports = ReactTransitionGroup;

/***/ }),
/* 1118 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var flattenChildren = __webpack_require__(1119);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @param {number=} selfDebugID Optional debugID of the current internal instance.
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children, selfDebugID) {
	    if (!children) {
	      return children;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      return flattenChildren(children, selfDebugID);
	    }

	    return flattenChildren(children);
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1119 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var KeyEscapeUtils = __webpack_require__(350);
	var traverseAllChildren = __webpack_require__(348);
	var warning = __webpack_require__(337);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(353);
	}

	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 * @param {number=} selfDebugID Optional debugID of the current internal instance.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
	  // We found a component instance.
	  if (traverseContext && typeof traverseContext === 'object') {
	    var result = traverseContext;
	    var keyUnique = result[name] === undefined;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!ReactComponentTreeHook) {
	        ReactComponentTreeHook = __webpack_require__(353);
	      }
	      if (!keyUnique) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
	      }
	    }
	    if (keyUnique && child != null) {
	      result[name] = child;
	    }
	  }
	}

	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children, selfDebugID) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};

	  if (process.env.NODE_ENV !== 'production') {
	    traverseAllChildren(children, function (traverseContext, child, name) {
	      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
	    }, result);
	  } else {
	    traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  }
	  return result;
	}

	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1120 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(331);
	var ReactAddonsDOMDependencies = __webpack_require__(1121);

	var propTypesFactory = __webpack_require__(358);
	var PropTypes = propTypesFactory(React.isValidElement);

	var CSSCore = __webpack_require__(1127);
	var ReactTransitionEvents = __webpack_require__(1128);

	var onlyChild = __webpack_require__(365);

	var TICK = 17;

	var ReactCSSTransitionGroupChild = function (_React$Component) {
	  _inherits(ReactCSSTransitionGroupChild, _React$Component);

	  function ReactCSSTransitionGroupChild() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, ReactCSSTransitionGroupChild);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._isMounted = false, _this.transition = function (animationType, finishCallback, userSpecifiedDelay) {
	      var node = ReactAddonsDOMDependencies.getReactDOM().findDOMNode(_this);

	      if (!node) {
	        if (finishCallback) {
	          finishCallback();
	        }
	        return;
	      }

	      var className = _this.props.name[animationType] || _this.props.name + '-' + animationType;
	      var activeClassName = _this.props.name[animationType + 'Active'] || className + '-active';
	      var timeout = null;

	      var endListener = function (e) {
	        if (e && e.target !== node) {
	          return;
	        }

	        clearTimeout(timeout);

	        CSSCore.removeClass(node, className);
	        CSSCore.removeClass(node, activeClassName);

	        ReactTransitionEvents.removeEndEventListener(node, endListener);

	        // Usually this optional callback is used for informing an owner of
	        // a leave animation and telling it to remove the child.
	        if (finishCallback) {
	          finishCallback();
	        }
	      };

	      CSSCore.addClass(node, className);

	      // Need to do this to actually trigger a transition.
	      _this.queueClassAndNode(activeClassName, node);

	      // If the user specified a timeout delay.
	      if (userSpecifiedDelay) {
	        // Clean-up the animation after the specified delay
	        timeout = setTimeout(endListener, userSpecifiedDelay);
	        _this.transitionTimeouts.push(timeout);
	      } else {
	        // DEPRECATED: this listener will be removed in a future version of react
	        ReactTransitionEvents.addEndEventListener(node, endListener);
	      }
	    }, _this.queueClassAndNode = function (className, node) {
	      _this.classNameAndNodeQueue.push({
	        className: className,
	        node: node
	      });

	      if (!_this.timeout) {
	        _this.timeout = setTimeout(_this.flushClassNameAndNodeQueue, TICK);
	      }
	    }, _this.flushClassNameAndNodeQueue = function () {
	      if (_this._isMounted) {
	        _this.classNameAndNodeQueue.forEach(function (obj) {
	          CSSCore.addClass(obj.node, obj.className);
	        });
	      }
	      _this.classNameAndNodeQueue.length = 0;
	      _this.timeout = null;
	    }, _this.componentWillAppear = function (done) {
	      if (_this.props.appear) {
	        _this.transition('appear', done, _this.props.appearTimeout);
	      } else {
	        done();
	      }
	    }, _this.componentWillEnter = function (done) {
	      if (_this.props.enter) {
	        _this.transition('enter', done, _this.props.enterTimeout);
	      } else {
	        done();
	      }
	    }, _this.componentWillLeave = function (done) {
	      if (_this.props.leave) {
	        _this.transition('leave', done, _this.props.leaveTimeout);
	      } else {
	        done();
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  ReactCSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  };

	  ReactCSSTransitionGroupChild.prototype.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	  };

	  ReactCSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;

	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });

	    this.classNameAndNodeQueue.length = 0;
	  };

	  ReactCSSTransitionGroupChild.prototype.render = function render() {
	    return onlyChild(this.props.children);
	  };

	  return ReactCSSTransitionGroupChild;
	}(React.Component);

	ReactCSSTransitionGroupChild.propTypes = {
	  name: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
	    enter: PropTypes.string,
	    leave: PropTypes.string,
	    active: PropTypes.string
	  }), PropTypes.shape({
	    enter: PropTypes.string,
	    enterActive: PropTypes.string,
	    leave: PropTypes.string,
	    leaveActive: PropTypes.string,
	    appear: PropTypes.string,
	    appearActive: PropTypes.string
	  })]).isRequired,

	  // Once we require timeouts to be specified, we can remove the
	  // boolean flags (appear etc.) and just accept a number
	  // or a bool for the timeout flags (appearTimeout etc.)
	  appear: PropTypes.bool,
	  enter: PropTypes.bool,
	  leave: PropTypes.bool,
	  appearTimeout: PropTypes.number,
	  enterTimeout: PropTypes.number,
	  leaveTimeout: PropTypes.number
	};


	module.exports = ReactCSSTransitionGroupChild;

/***/ }),
/* 1121 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var ReactDOM = __webpack_require__(367);

	exports.getReactDOM = function () {
	  return ReactDOM;
	};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPerf;
	  var ReactTestUtils;

	  exports.getReactPerf = function () {
	    if (!ReactPerf) {
	      ReactPerf = __webpack_require__(1122);
	    }
	    return ReactPerf;
	  };

	  exports.getReactTestUtils = function () {
	    if (!ReactTestUtils) {
	      ReactTestUtils = __webpack_require__(1124);
	    }
	    return ReactTestUtils;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1122 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(333);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var ReactDebugTool = __webpack_require__(397);
	var lowPriorityWarning = __webpack_require__(1123);
	var alreadyWarned = false;

	function roundFloat(val) {
	  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

	  var n = Math.pow(10, base);
	  return Math.floor(val * n) / n;
	}

	// Flow type definition of console.table is too strict right now, see
	// https://github.com/facebook/flow/pull/2353 for updates
	function consoleTable(table) {
	  console.table(table);
	}

	function warnInProduction() {
	  if (alreadyWarned) {
	    return;
	  }
	  alreadyWarned = true;
	  if (typeof console !== 'undefined') {
	    console.error('ReactPerf is not supported in the production builds of React. ' + 'To collect measurements, please use the development build of React instead.');
	  }
	}

	function getLastMeasurements() {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }

	  return ReactDebugTool.getFlushHistory();
	}

	function getExclusive() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();

	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }

	  var aggregatedStats = {};
	  var affectedIDs = {};

	  function updateAggregatedStats(treeSnapshot, instanceID, timerType, applyUpdate) {
	    var displayName = treeSnapshot[instanceID].displayName;

	    var key = displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        counts: {},
	        durations: {},
	        totalDuration: 0
	      };
	    }
	    if (!stats.durations[timerType]) {
	      stats.durations[timerType] = 0;
	    }
	    if (!stats.counts[timerType]) {
	      stats.counts[timerType] = 0;
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }

	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot;

	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;

	      updateAggregatedStats(treeSnapshot, instanceID, timerType, function (stats) {
	        stats.totalDuration += duration;
	        stats.durations[timerType] += duration;
	        stats.counts[timerType]++;
	      });
	    });
	  });

	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.totalDuration - a.totalDuration;
	  });
	}

	function getInclusive() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();

	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }

	  var aggregatedStats = {};
	  var affectedIDs = {};

	  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {
	    var _treeSnapshot$instanc = treeSnapshot[instanceID],
	        displayName = _treeSnapshot$instanc.displayName,
	        ownerID = _treeSnapshot$instanc.ownerID;

	    var owner = treeSnapshot[ownerID];
	    var key = (owner ? owner.displayName + ' > ' : '') + displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        inclusiveRenderDuration: 0,
	        renderCount: 0
	      };
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }

	  var isCompositeByID = {};
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements;

	    measurements.forEach(function (measurement) {
	      var instanceID = measurement.instanceID,
	          timerType = measurement.timerType;

	      if (timerType !== 'render') {
	        return;
	      }
	      isCompositeByID[instanceID] = true;
	    });
	  });

	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot;

	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;

	      if (timerType !== 'render') {
	        return;
	      }
	      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {
	        stats.renderCount++;
	      });
	      var nextParentID = instanceID;
	      while (nextParentID) {
	        // As we traverse parents, only count inclusive time towards composites.
	        // We know something is a composite if its render() was called.
	        if (isCompositeByID[nextParentID]) {
	          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {
	            stats.inclusiveRenderDuration += duration;
	          });
	        }
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });
	  });

	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;
	  });
	}

	function getWasted() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();

	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }

	  var aggregatedStats = {};
	  var affectedIDs = {};

	  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {
	    var _treeSnapshot$instanc2 = treeSnapshot[instanceID],
	        displayName = _treeSnapshot$instanc2.displayName,
	        ownerID = _treeSnapshot$instanc2.ownerID;

	    var owner = treeSnapshot[ownerID];
	    var key = (owner ? owner.displayName + ' > ' : '') + displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        inclusiveRenderDuration: 0,
	        renderCount: 0
	      };
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }

	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot,
	        operations = flush.operations;

	    var isDefinitelyNotWastedByID = {};

	    // Find host components associated with an operation in this batch.
	    // Mark all components in their parent tree as definitely not wasted.
	    operations.forEach(function (operation) {
	      var instanceID = operation.instanceID;

	      var nextParentID = instanceID;
	      while (nextParentID) {
	        isDefinitelyNotWastedByID[nextParentID] = true;
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });

	    // Find composite components that rendered in this batch.
	    // These are potential candidates for being wasted renders.
	    var renderedCompositeIDs = {};
	    measurements.forEach(function (measurement) {
	      var instanceID = measurement.instanceID,
	          timerType = measurement.timerType;

	      if (timerType !== 'render') {
	        return;
	      }
	      renderedCompositeIDs[instanceID] = true;
	    });

	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;

	      if (timerType !== 'render') {
	        return;
	      }

	      // If there was a DOM update below this component, or it has just been
	      // mounted, its render() is not considered wasted.
	      var updateCount = treeSnapshot[instanceID].updateCount;

	      if (isDefinitelyNotWastedByID[instanceID] || updateCount === 0) {
	        return;
	      }

	      // We consider this render() wasted.
	      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {
	        stats.renderCount++;
	      });

	      var nextParentID = instanceID;
	      while (nextParentID) {
	        // Any parents rendered during this batch are considered wasted
	        // unless we previously marked them as dirty.
	        var isWasted = renderedCompositeIDs[nextParentID] && !isDefinitelyNotWastedByID[nextParentID];
	        if (isWasted) {
	          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {
	            stats.inclusiveRenderDuration += duration;
	          });
	        }
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });
	  });

	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;
	  });
	}

	function getOperations() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();

	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }

	  var stats = [];
	  flushHistory.forEach(function (flush, flushIndex) {
	    var operations = flush.operations,
	        treeSnapshot = flush.treeSnapshot;

	    operations.forEach(function (operation) {
	      var instanceID = operation.instanceID,
	          type = operation.type,
	          payload = operation.payload;
	      var _treeSnapshot$instanc3 = treeSnapshot[instanceID],
	          displayName = _treeSnapshot$instanc3.displayName,
	          ownerID = _treeSnapshot$instanc3.ownerID;

	      var owner = treeSnapshot[ownerID];
	      var key = (owner ? owner.displayName + ' > ' : '') + displayName;

	      stats.push({
	        flushIndex: flushIndex,
	        instanceID: instanceID,
	        key: key,
	        type: type,
	        ownerID: ownerID,
	        payload: payload
	      });
	    });
	  });
	  return stats;
	}

	function printExclusive(flushHistory) {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }

	  var stats = getExclusive(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        totalDuration = item.totalDuration;

	    var renderCount = item.counts.render || 0;
	    var renderDuration = item.durations.render || 0;
	    return {
	      Component: key,
	      'Total time (ms)': roundFloat(totalDuration),
	      'Instance count': instanceCount,
	      'Total render time (ms)': roundFloat(renderDuration),
	      'Average render time (ms)': renderCount ? roundFloat(renderDuration / renderCount) : undefined,
	      'Render count': renderCount,
	      'Total lifecycle time (ms)': roundFloat(totalDuration - renderDuration)
	    };
	  });
	  consoleTable(table);
	}

	function printInclusive(flushHistory) {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }

	  var stats = getInclusive(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        inclusiveRenderDuration = item.inclusiveRenderDuration,
	        renderCount = item.renderCount;

	    return {
	      'Owner > Component': key,
	      'Inclusive render time (ms)': roundFloat(inclusiveRenderDuration),
	      'Instance count': instanceCount,
	      'Render count': renderCount
	    };
	  });
	  consoleTable(table);
	}

	function printWasted(flushHistory) {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }

	  var stats = getWasted(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        inclusiveRenderDuration = item.inclusiveRenderDuration,
	        renderCount = item.renderCount;

	    return {
	      'Owner > Component': key,
	      'Inclusive wasted time (ms)': roundFloat(inclusiveRenderDuration),
	      'Instance count': instanceCount,
	      'Render count': renderCount
	    };
	  });
	  consoleTable(table);
	}

	function printOperations(flushHistory) {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }

	  var stats = getOperations(flushHistory);
	  var table = stats.map(function (stat) {
	    return {
	      'Owner > Node': stat.key,
	      Operation: stat.type,
	      Payload: typeof stat.payload === 'object' ? JSON.stringify(stat.payload) : stat.payload,
	      'Flush index': stat.flushIndex,
	      'Owner Component ID': stat.ownerID,
	      'DOM Component ID': stat.instanceID
	    };
	  });
	  consoleTable(table);
	}

	var warnedAboutPrintDOM = false;
	function printDOM(measurements) {
	  lowPriorityWarning(warnedAboutPrintDOM, '`ReactPerf.printDOM(...)` is deprecated. Use ' + '`ReactPerf.printOperations(...)` instead.');
	  warnedAboutPrintDOM = true;
	  return printOperations(measurements);
	}

	var warnedAboutGetMeasurementsSummaryMap = false;
	function getMeasurementsSummaryMap(measurements) {
	  lowPriorityWarning(warnedAboutGetMeasurementsSummaryMap, '`ReactPerf.getMeasurementsSummaryMap(...)` is deprecated. Use ' + '`ReactPerf.getWasted(...)` instead.');
	  warnedAboutGetMeasurementsSummaryMap = true;
	  return getWasted(measurements);
	}

	function start() {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }

	  ReactDebugTool.beginProfiling();
	}

	function stop() {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }

	  ReactDebugTool.endProfiling();
	}

	function isRunning() {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return false;
	  }

	  return ReactDebugTool.isProfiling();
	}

	var ReactPerfAnalysis = {
	  getLastMeasurements: getLastMeasurements,
	  getExclusive: getExclusive,
	  getInclusive: getInclusive,
	  getWasted: getWasted,
	  getOperations: getOperations,
	  printExclusive: printExclusive,
	  printInclusive: printInclusive,
	  printWasted: printWasted,
	  printOperations: printOperations,
	  start: start,
	  stop: stop,
	  isRunning: isRunning,
	  // Deprecated:
	  printDOM: printDOM,
	  getMeasurementsSummaryMap: getMeasurementsSummaryMap
	};

	module.exports = ReactPerfAnalysis;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1123 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = lowPriorityWarning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1124 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(369),
	    _assign = __webpack_require__(333);

	var EventConstants = __webpack_require__(1125);
	var EventPluginHub = __webpack_require__(376);
	var EventPluginRegistry = __webpack_require__(377);
	var EventPropagators = __webpack_require__(375);
	var React = __webpack_require__(331);
	var ReactDOM = __webpack_require__(367);
	var ReactDOMComponentTree = __webpack_require__(368);
	var ReactBrowserEventEmitter = __webpack_require__(440);
	var ReactInstanceMap = __webpack_require__(451);
	var ReactUpdates = __webpack_require__(390);
	var SyntheticEvent = __webpack_require__(387);
	var ReactShallowRenderer = __webpack_require__(1126);

	var findDOMNode = __webpack_require__(507);
	var invariant = __webpack_require__(341);
	var warning = __webpack_require__(337);

	var topLevelTypes = EventConstants.topLevelTypes;

	function Event(suffix) {}

	// In react 16+ shallowRenderer will not be accessible via ReactTestUtils.createRenderer()
	// Instead it will be available via react-test-renderer/shallow
	// Maintain backwards compat for 15.5.0 release, but warn about using the deprecated method
	var hasWarnedAboutCreateRenderer = false;
	function createRendererWithWarning() {
	  process.env.NODE_ENV !== 'production' ? warning(hasWarnedAboutCreateRenderer, 'Shallow renderer has been moved to react-test-renderer/shallow. ' + 'Update references to remove this warning.') : void 0;
	  hasWarnedAboutCreateRenderer = true;

	  return new ReactShallowRenderer();
	}

	/**
	 * @class ReactTestUtils
	 */

	function findAllInRenderedTreeInternal(inst, test) {
	  if (!inst || !inst.getPublicInstance) {
	    return [];
	  }
	  var publicInst = inst.getPublicInstance();
	  var ret = test(publicInst) ? [publicInst] : [];
	  var currentElement = inst._currentElement;
	  if (ReactTestUtils.isDOMComponent(publicInst)) {
	    var renderedChildren = inst._renderedChildren;
	    var key;
	    for (key in renderedChildren) {
	      if (!renderedChildren.hasOwnProperty(key)) {
	        continue;
	      }
	      ret = ret.concat(findAllInRenderedTreeInternal(renderedChildren[key], test));
	    }
	  } else if (React.isValidElement(currentElement) && typeof currentElement.type === 'function') {
	    ret = ret.concat(findAllInRenderedTreeInternal(inst._renderedComponent, test));
	  }
	  return ret;
	}

	/**
	 * Utilities for making it easy to test React components.
	 *
	 * See https://facebook.github.io/react/docs/test-utils.html
	 *
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function (element) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return ReactDOM.render(element, div);
	  },

	  isElement: function (element) {
	    return React.isValidElement(element);
	  },

	  isElementOfType: function (inst, convenienceConstructor) {
	    return React.isValidElement(inst) && inst.type === convenienceConstructor;
	  },

	  isDOMComponent: function (inst) {
	    return !!(inst && inst.nodeType === 1 && inst.tagName);
	  },

	  isDOMComponentElement: function (inst) {
	    return !!(inst && React.isValidElement(inst) && !!inst.tagName);
	  },

	  isCompositeComponent: function (inst) {
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      // Accessing inst.setState warns; just return false as that'll be what
	      // this returns when we have DOM nodes as refs directly
	      return false;
	    }
	    return inst != null && typeof inst.render === 'function' && typeof inst.setState === 'function';
	  },

	  isCompositeComponentWithType: function (inst, type) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return false;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;

	    return constructor === type;
	  },

	  isCompositeComponentElement: function (inst) {
	    if (!React.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return typeof prototype.render === 'function' && typeof prototype.setState === 'function';
	  },

	  isCompositeComponentElementWithType: function (inst, type) {
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;

	    return !!(ReactTestUtils.isCompositeComponentElement(inst) && constructor === type);
	  },

	  getRenderedChildOfCompositeComponent: function (inst) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return null;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    return internalInstance._renderedComponent.getPublicInstance();
	  },

	  findAllInRenderedTree: function (inst, test) {
	    if (!inst) {
	      return [];
	    }
	    !ReactTestUtils.isCompositeComponent(inst) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findAllInRenderedTree(...): instance must be a composite component') : _prodInvariant('10') : void 0;
	    return findAllInRenderedTreeInternal(ReactInstanceMap.get(inst), test);
	  },

	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function (root, classNames) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      if (ReactTestUtils.isDOMComponent(inst)) {
	        var className = inst.className;
	        if (typeof className !== 'string') {
	          // SVG, probably.
	          className = inst.getAttribute('class') || '';
	        }
	        var classList = className.split(/\s+/);

	        if (!Array.isArray(classNames)) {
	          !(classNames !== undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.') : _prodInvariant('11') : void 0;
	          classNames = classNames.split(/\s+/);
	        }
	        return classNames.every(function (name) {
	          return classList.indexOf(name) !== -1;
	        });
	      }
	      return false;
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function (root, className) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for class:' + className);
	    }
	    return all[0];
	  },

	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function (root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isDOMComponent(inst) && inst.tagName.toUpperCase() === tagName.toUpperCase();
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function (root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for tag:' + tagName);
	    }
	    return all[0];
	  },

	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function (root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isCompositeComponentWithType(inst, componentType);
	    });
	  },

	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function (root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(root, componentType);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for componentType:' + componentType);
	    }
	    return all[0];
	  },

	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function (module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || 'div';

	    module.prototype.render.mockImplementation(function () {
	      return React.createElement(mockTagName, null, this.props.children);
	    });

	    return this;
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on an `Element` node.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function (topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    fakeNativeEvent.simulated = true;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(topLevelType, fakeNativeEvent);
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on the `ReactDOMComponent` `comp`.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`.
	   * @param {!ReactDOMComponent} comp
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function (topLevelType, comp, fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(topLevelType, findDOMNode(comp), fakeNativeEvent);
	  },

	  nativeTouchData: function (x, y) {
	    return {
	      touches: [{ pageX: x, pageY: y }]
	    };
	  },

	  createRenderer: createRendererWithWarning,

	  Simulate: null,
	  SimulateNative: {}
	};

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function (domComponentOrNode, eventData) {
	    var node;
	    !!React.isValidElement(domComponentOrNode) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'TestUtils.Simulate expects a component instance and not a ReactElement.TestUtils.Simulate will not work if you are using shallow rendering.') : _prodInvariant('14') : void 0;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = findDOMNode(domComponentOrNode);
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }

	    var dispatchConfig = EventPluginRegistry.eventNameDispatchConfigs[eventType];

	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    fakeNativeEvent.type = eventType.toLowerCase();

	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(dispatchConfig, ReactDOMComponentTree.getInstanceFromNode(node), fakeNativeEvent, node);
	    // Since we aren't using pooling, always persist the event. This will make
	    // sure it's marked and won't warn when setting additional properties.
	    event.persist();
	    _assign(event, eventData);

	    if (dispatchConfig.phasedRegistrationNames) {
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	    } else {
	      EventPropagators.accumulateDirectDispatches(event);
	    }

	    ReactUpdates.batchedUpdates(function () {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue(true);
	    });
	  };
	}

	function buildSimulators() {
	  ReactTestUtils.Simulate = {};

	  var eventType;
	  for (eventType in EventPluginRegistry.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element|ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}

	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function () {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function () {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};

	buildSimulators();

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */

	function makeNativeSimulator(eventType) {
	  return function (domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    _assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(eventType, domComponentOrNode, fakeNativeEvent);
	    } else if (domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(eventType, domComponentOrNode, fakeNativeEvent);
	    }
	  };
	}

	Object.keys(topLevelTypes).forEach(function (eventType) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ? eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element|ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] = makeNativeSimulator(eventType);
	});

	module.exports = ReactTestUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1125 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = {
	  topAbort: null,
	  topAnimationEnd: null,
	  topAnimationIteration: null,
	  topAnimationStart: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topInvalid: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topTransitionEnd: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	};

	var EventConstants = {
	  topLevelTypes: topLevelTypes
	};

	module.exports = EventConstants;

/***/ }),
/* 1126 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(369),
	    _assign = __webpack_require__(333);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var React = __webpack_require__(331);
	var ReactCompositeComponent = __webpack_require__(454);
	var ReactDefaultBatchingStrategy = __webpack_require__(475);
	var ReactReconciler = __webpack_require__(393);
	var ReactReconcileTransaction = __webpack_require__(480);
	var ReactUpdates = __webpack_require__(390);

	var emptyObject = __webpack_require__(340);
	var getNextDebugID = __webpack_require__(462);
	var invariant = __webpack_require__(341);

	function injectDefaults() {
	  ReactUpdates.injection.injectReconcileTransaction(ReactReconcileTransaction);
	  ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	}

	var NoopInternalComponent = function () {
	  function NoopInternalComponent(element) {
	    _classCallCheck(this, NoopInternalComponent);

	    this._renderedOutput = element;
	    this._currentElement = element;

	    if (process.env.NODE_ENV !== 'production') {
	      this._debugID = getNextDebugID();
	    }
	  }

	  NoopInternalComponent.prototype.mountComponent = function mountComponent() {};

	  NoopInternalComponent.prototype.receiveComponent = function receiveComponent(element) {
	    this._renderedOutput = element;
	    this._currentElement = element;
	  };

	  NoopInternalComponent.prototype.unmountComponent = function unmountComponent() {};

	  NoopInternalComponent.prototype.getHostNode = function getHostNode() {
	    return undefined;
	  };

	  NoopInternalComponent.prototype.getPublicInstance = function getPublicInstance() {
	    return null;
	  };

	  return NoopInternalComponent;
	}();

	var ShallowComponentWrapper = function (element) {
	  // TODO: Consolidate with instantiateReactComponent
	  if (process.env.NODE_ENV !== 'production') {
	    this._debugID = getNextDebugID();
	  }

	  this.construct(element);
	};
	_assign(ShallowComponentWrapper.prototype, ReactCompositeComponent, {
	  _constructComponent: ReactCompositeComponent._constructComponentWithoutOwner,
	  _instantiateReactComponent: function (element) {
	    return new NoopInternalComponent(element);
	  },
	  _replaceNodeWithMarkup: function () {},
	  _renderValidatedComponent: ReactCompositeComponent._renderValidatedComponentWithoutOwnerOrContext
	});

	function _batchedRender(renderer, element, context) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(true);
	  renderer._render(element, transaction, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}

	var ReactShallowRenderer = function () {
	  function ReactShallowRenderer() {
	    _classCallCheck(this, ReactShallowRenderer);

	    this._instance = null;
	  }

	  ReactShallowRenderer.prototype.getMountedInstance = function getMountedInstance() {
	    return this._instance ? this._instance._instance : null;
	  };

	  ReactShallowRenderer.prototype.render = function render(element, context) {
	    // Ensure we've done the default injections. This might not be true in the
	    // case of a simple test that only requires React and the TestUtils in
	    // conjunction with an inline-requires transform.
	    injectDefaults();

	    !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Invalid component element.%s', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : _prodInvariant('12', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : void 0;
	    !(typeof element.type !== 'string') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Shallow rendering works only with custom components, not primitives (%s). Instead of calling `.render(el)` and inspecting the rendered output, look at `el.props` directly instead.', element.type) : _prodInvariant('13', element.type) : void 0;

	    if (!context) {
	      context = emptyObject;
	    }
	    ReactUpdates.batchedUpdates(_batchedRender, this, element, context);

	    return this.getRenderOutput();
	  };

	  ReactShallowRenderer.prototype.getRenderOutput = function getRenderOutput() {
	    return this._instance && this._instance._renderedComponent && this._instance._renderedComponent._renderedOutput || null;
	  };

	  ReactShallowRenderer.prototype.unmount = function unmount() {
	    if (this._instance) {
	      ReactReconciler.unmountComponent(this._instance, false);
	    }
	  };

	  ReactShallowRenderer.prototype.unstable_batchedUpdates = function unstable_batchedUpdates(callback, bookkeeping) {
	    // This is used by Enzyme for fake-simulating events in shallow mode.
	    injectDefaults();
	    return ReactUpdates.batchedUpdates(callback, bookkeeping);
	  };

	  ReactShallowRenderer.prototype._render = function _render(element, transaction, context) {
	    if (this._instance) {
	      ReactReconciler.receiveComponent(this._instance, element, transaction, context);
	    } else {
	      var instance = new ShallowComponentWrapper(element);
	      ReactReconciler.mountComponent(instance, transaction, null, null, context, 0);
	      this._instance = instance;
	    }
	  };

	  return ReactShallowRenderer;
	}();

	ReactShallowRenderer.createRenderer = function () {
	  return new ReactShallowRenderer();
	};

	module.exports = ReactShallowRenderer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1127 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var invariant = __webpack_require__(341);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	/* Slow implementation for browsers that don't natively support .matches() */
	function matchesSelector_SLOW(element, selector) {
	  var root = element;
	  while (root.parentNode) {
	    root = root.parentNode;
	  }

	  var all = root.querySelectorAll(selector);
	  return Array.prototype.indexOf.call(all, element) !== -1;
	}

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to check the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },

	  /**
	   * Tests whether the element matches the selector specified
	   *
	   * @param {DOMNode|DOMWindow} element the element that we are querying
	   * @param {string} selector the CSS selector
	   * @return {boolean} true if the element matches the selector, false if not
	   */
	  matchesSelector: function matchesSelector(element, selector) {
	    var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
	      return matchesSelector_SLOW(element, s);
	    };
	    return matchesImpl.call(element, selector);
	  }

	};

	module.exports = CSSCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(332)))

/***/ }),
/* 1128 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(382);

	var getVendorPrefixedEventName = __webpack_require__(442);

	var endEvents = [];

	function detectEvents() {
	  var animEnd = getVendorPrefixedEventName('animationend');
	  var transEnd = getVendorPrefixedEventName('transitionend');

	  if (animEnd) {
	    endEvents.push(animEnd);
	  }

	  if (transEnd) {
	    endEvents.push(transEnd);
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;

/***/ }),
/* 1129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(513);

	var _index = __webpack_require__(545);

	var _set_table = __webpack_require__(1130);

	var _set_table2 = _interopRequireDefault(_set_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state, _ref) {
	  var sets = _ref.sets,
	      selectionType = _ref.selectionType;

	  // Make a copy so we don't mutate the store
	  var setsCopy = sets.slice();

	  // Sort by created_at DESC
	  setsCopy.sort(function (a, b) {
	    return b.attributes.created_at.localeCompare(a.attributes.created_at);
	  });

	  return {
	    sets: setsCopy,
	    selectedSet: state.selected[selectionType]
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
	  var selectionType = _ref2.selectionType;

	  return {
	    onSetClick: function onSetClick(setId) {
	      dispatch((0, _index.select)(setId, selectionType));
	      dispatch((0, _index.fetchFirstPageSetAndMaterials)(setId));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_set_table2.default);

/***/ }),
/* 1130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(1080);

	var _classnames = __webpack_require__(746);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _font_awesome = __webpack_require__(797);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SetTable = function SetTable(_ref) {
	  var sets = _ref.sets,
	      selectedSet = _ref.selectedSet,
	      onSetClick = _ref.onSetClick,
	      hideOwner = _ref.hideOwner,
	      addLink = _ref.addLink,
	      fetching = _ref.fetching;

	  if (sets.length == 0) {
	    return _react2.default.createElement(
	      'p',
	      { className: 'text-center' },
	      'No sets found.'
	    );
	  }

	  var rows = sets.map(function (set, index) {
	    return _react2.default.createElement(SetRow, { set: set, selected: set.id == selectedSet, onClick: onSetClick, key: index, hideOwner: hideOwner, addLink: addLink });
	  });

	  // Show a spinning icon if more Sets are being fetched
	  if (fetching) {
	    rows.push(_react2.default.createElement(
	      'tr',
	      { key: 'loading' },
	      _react2.default.createElement(
	        'td',
	        { colSpan: hideOwner ? 3 : 4 },
	        _react2.default.createElement(_font_awesome2.default, { icon: 'spinner fa-spin', size: 'lg' })
	      )
	    ));
	  }

	  return _react2.default.createElement(
	    'table',
	    { className: 'table table-striped table-hover' },
	    _react2.default.createElement(
	      'thead',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'th',
	          null,
	          'Name'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Created'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Size'
	        ),
	        !hideOwner && _react2.default.createElement(
	          'th',
	          null,
	          'Owner'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'tbody',
	      null,
	      rows
	    )
	  );
	};

	SetTable.defaultProps = {
	  sets: [],
	  selectedSet: undefined,
	  addLink: false
	};

	exports.default = SetTable;


	var SetRow = function SetRow(_ref2) {
	  var set = _ref2.set,
	      selected = _ref2.selected,
	      _onClick = _ref2.onClick,
	      hideOwner = _ref2.hideOwner,
	      addLink = _ref2.addLink;

	  var trClass = (0, _classnames2.default)({
	    info: selected
	  });

	  var ownerCell = void 0;
	  if (!hideOwner) {
	    if (set.attributes.owner_id) {
	      ownerCell = _react2.default.createElement(
	        'td',
	        null,
	        set.attributes.owner_id
	      );
	    } else {
	      ownerCell = _react2.default.createElement(
	        'td',
	        null,
	        _react2.default.createElement(
	          'i',
	          null,
	          'Not set'
	        )
	      );
	    }
	  }

	  var setNameLink = set.attributes.name;
	  if (addLink) {
	    setNameLink = _react2.default.createElement(
	      _reactRouterDom.Link,
	      { to: '/sets/' + set.id },
	      setNameLink
	    );
	  } else {
	    setNameLink = _react2.default.createElement(
	      'a',
	      { href: '#', onClick: function onClick(e) {
	          e.preventDefault();_onClick(set.id);
	        } },
	      setNameLink
	    );
	  }

	  return _react2.default.createElement(
	    'tr',
	    { className: trClass },
	    _react2.default.createElement(
	      'td',
	      null,
	      setNameLink,
	      ' ',
	      set.attributes.locked && _react2.default.createElement(_font_awesome2.default, { icon: 'lock', style: { "color": "#e61c1c" } })
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      new Date(set.attributes.created_at).toDateString()
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      set.meta.size
	    ),
	    !hideOwner && ownerCell
	  );
	};

/***/ }),
/* 1131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(513);

	var _reactDnd = __webpack_require__(925);

	var _biomaterial_table = __webpack_require__(1132);

	var _droppable = __webpack_require__(1133);

	var _droppable2 = _interopRequireDefault(_droppable);

	var _item_types = __webpack_require__(1134);

	var _reduxJsonApi = __webpack_require__(549);

	var _index = __webpack_require__(545);

	var _index2 = __webpack_require__(1135);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var DroppableBiomaterialTable = (0, _droppable2.default)(_biomaterial_table.BiomaterialTable);
	var setTarget = {
	  drop: function drop(props, monitor, component) {
	    var dispatch = props.dispatch,
	        set = props.set,
	        materials = props.materials;

	    var _monitor$getItem = monitor.getItem(),
	        biomaterial = _monitor$getItem.biomaterial,
	        selected = _monitor$getItem.selected;

	    if (!set.id) return;

	    var current_biomaterials = [];
	    var new_biomaterials = [];

	    var bm_mapper = function bm_mapper(bm) {
	      return { type: 'materials', id: bm.id };
	    };

	    if (materials[set.id].instances) {
	      current_biomaterials = Object.values(materials[set.id].instances).map(bm_mapper);
	    }

	    // If there are selected biomaterials, add them
	    // even if user isn't dragging one of them
	    if (selected.length > 0) {
	      new_biomaterials = selected.map(bm_mapper);
	      // other wise add the one being dragged
	    } else {
	      new_biomaterials = [biomaterial].map(bm_mapper);
	    }

	    var entity = {
	      type: set.type,
	      id: set.id,
	      relationships: {
	        materials: {
	          data: [].concat(_toConsumableArray(new_biomaterials))
	        }
	      }
	    };
	    dispatch((0, _index.appendMaterialsToSet)(new_biomaterials, set)).then(function () {
	      return dispatch((0, _index.clearSelection)());
	    }).then(function () {
	      return dispatch((0, _index.fetchFirstPageSetAndMaterials)(set.id));
	    });
	    return;
	  }
	};

	function dropCollect(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget(),
	    isOver: monitor.isOver()
	  };
	}

	DroppableBiomaterialTable = (0, _reactDnd.DropTarget)(_item_types.ItemTypes.BIOMATERIAL, setTarget, dropCollect)(DroppableBiomaterialTable);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    biomaterials: (0, _index2.getSelectedTopMaterials)(state),
	    materials: state.materials,
	    removeable: true
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    dispatch: dispatch,
	    onRemove: function onRemove(biomaterial) {
	      var set = ownProps.set;

	      return dispatch((0, _index.deleteMaterialFromSet)(biomaterial, set)).then(function () {
	        return dispatch((0, _index.fetchFirstPageSetAndMaterials)(set.id));
	      });
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DroppableBiomaterialTable);

/***/ }),
/* 1132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BiomaterialTable = exports.BiomaterialTableRow = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(746);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _font_awesome = __webpack_require__(797);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BiomaterialTableRow = exports.BiomaterialTableRow = function (_Component) {
	  _inherits(BiomaterialTableRow, _Component);

	  function BiomaterialTableRow() {
	    _classCallCheck(this, BiomaterialTableRow);

	    return _possibleConstructorReturn(this, (BiomaterialTableRow.__proto__ || Object.getPrototypeOf(BiomaterialTableRow)).apply(this, arguments));
	  }

	  _createClass(BiomaterialTableRow, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          biomaterial = _props.biomaterial,
	          _onClick = _props.onClick,
	          removeable = _props.removeable,
	          onRemove = _props.onRemove,
	          index = _props.index,
	          selected = _props.selected;


	      var removeableTd = void 0;

	      if (removeable) {
	        removeableTd = _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(_font_awesome2.default, { style: { cursor: 'pointer' }, onClick: function onClick(e) {
	              return onRemove(biomaterial);
	            }, icon: 'times' })
	        );
	      }

	      var trClass = (0, _classnames2.default)({
	        info: selected.find(function (bm) {
	          return bm.id == biomaterial.id;
	        })
	      });

	      var style = biomaterial.available == false ? { opacity: 0.5 } : {};

	      return _react2.default.createElement(
	        'tr',
	        { className: trClass, style: style, onClick: function onClick(e) {
	            return _onClick(biomaterial, index, e);
	          } },
	        _react2.default.createElement(
	          'td',
	          null,
	          biomaterial.scientific_name
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          biomaterial.gender
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          biomaterial.phenotype
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          biomaterial.supplier_name
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          biomaterial.donor_id
	        ),
	        removeableTd
	      );
	    }
	  }]);

	  return BiomaterialTableRow;
	}(_react.Component);

	BiomaterialTableRow.defaultProps = {
	  onClick: function onClick() {},
	  removeable: false,
	  selected: [],
	  biomaterial: {
	    id: '',
	    scientific_name: '',
	    gender: '',
	    phenotype: '',
	    supplier_name: '',
	    donor_id: ''
	  }
	};

	var BiomaterialTable = exports.BiomaterialTable = function (_Component2) {
	  _inherits(BiomaterialTable, _Component2);

	  function BiomaterialTable() {
	    _classCallCheck(this, BiomaterialTable);

	    return _possibleConstructorReturn(this, (BiomaterialTable.__proto__ || Object.getPrototypeOf(BiomaterialTable)).apply(this, arguments));
	  }

	  _createClass(BiomaterialTable, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          decorators = _props2.decorators,
	          biomaterials = _props2.biomaterials,
	          materials = _props2.materials,
	          rest = _objectWithoutProperties(_props2, ['decorators', 'biomaterials', 'materials']);

	      var tableClass = (0, _classnames2.default)({
	        table: true,
	        'table-striped': true
	      });
	      var instances = Object.values(biomaterials || {});
	      return _react2.default.createElement(
	        'table',
	        { className: tableClass },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              null,
	              'Scientific Name'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Gender'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Phenotype'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Supplier Name'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Donor ID'
	            ),
	            rest['removeable'] && _react2.default.createElement('th', null)
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          instances.map(function (biomaterial, index) {
	            return _react2.default.createElement(decorators.row, _extends({ key: index, index: index, biomaterial: biomaterial }, rest));
	          })
	        )
	      );
	    }
	  }]);

	  return BiomaterialTable;
	}(_react.Component);

	BiomaterialTable.defaultProps = {
	  decorators: {
	    row: BiomaterialTableRow
	  }
	};

/***/ }),
/* 1133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass = __webpack_require__(796);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _reactDom = __webpack_require__(366);

	var _classnames = __webpack_require__(746);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	exports.default = function (WrappedComponent) {
	  return (0, _createReactClass2.default)({
	    render: function render() {
	      var _props = this.props,
	          connectDropTarget = _props.connectDropTarget,
	          isOver = _props.isOver,
	          rest = _objectWithoutProperties(_props, ['connectDropTarget', 'isOver']);

	      return _react2.default.createElement(
	        'div',
	        { style: { opacity: isOver ? 0.5 : 1 } },
	        _react2.default.createElement(WrappedComponent, _extends({}, rest, {
	          ref: function ref(instance) {
	            return connectDropTarget((0, _reactDom.findDOMNode)(instance));
	          } }))
	      );
	    }
	  });
	};

/***/ }),
/* 1134 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ItemTypes = exports.ItemTypes = {
	  BIOMATERIAL: 'biomaterial'
	};

/***/ }),
/* 1135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUserSets = exports.getSelectedBottomUrl = exports.getSelectedTopUrl = exports.getSelectedBottomPage = exports.getSelectedTopPage = exports.getSelectedBottomLinks = exports.getSelectedTopLinks = exports.getSelectedBottomMaterials = exports.getSelectedTopMaterials = exports.getSelectedBottomSetMaterials = exports.getSelectedTopSetMaterials = exports.getSelectedBottom = exports.getSelectedTop = undefined;

	var _reselect = __webpack_require__(1136);

	var _jwtDecode = __webpack_require__(546);

	var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var nullResource = { id: '', type: '', attributes: {}, links: {}, relationships: {} };

	// API
	var getApi = function getApi(state) {
	  return state.api;
	};

	var getApiData = function getApiData(type) {
	  return function (state) {
	    return state.api[type].data;
	  };
	};
	var getSets = getApiData('sets');
	var getBiomaterials = getApiData('materials');

	var getUserEmail = function getUserEmail(state) {
	  return state.userEmail;
	};

	// Selected
	var getSelectedId = function getSelectedId(key) {
	  return function (state) {
	    return state.selected[key];
	  };
	};
	var getSelectedMaterials = function getSelectedMaterials(key, state) {
	  return function (state) {
	    return state.materials[key];
	  };
	};
	var getSelectedTopId = getSelectedId('top');
	var getSelectedBottomId = getSelectedId('bottom');

	/*******************************************************************************
	  Factories
	*******************************************************************************/

	// Give it a relationshipType and it'll return a function
	// that will find all the relations for a resource (or collection of resources)
	var findResourceRelationshipFactory = function findResourceRelationshipFactory(relationshipType) {
	  return function (resources, relatedResources) {
	    // If we don't have a resource, just return an array
	    if (!resources) {
	      return [];
	    }

	    // Resource could either be an individual resource, or a collection of them
	    if (!Array.isArray(resources)) {
	      resources = [resources];
	    }

	    return resources.reduce(function (memo, resource) {
	      // If resource doesn't have the specified relation,
	      // OR that relation doesn't have data, just return the memo
	      if (!resource.relationships[relationshipType] || !resource.relationships[relationshipType].data) {
	        return memo;
	      }

	      // In JSONAPI a resource identifier object is one that identifies an individual object
	      // It must have a type and an id
	      // http://jsonapi.org/format/#document-resource-identifier-objects
	      memo.push.apply(memo, _toConsumableArray(resource.relationships[relationshipType].data.map(function (resourceIdentifier) {
	        return relatedResources.find(function (relatedEntity) {
	          return relatedEntity.id == resourceIdentifier.id;
	        });
	      })));

	      return memo;
	    }, []);
	  };
	};

	var findResourceByIdFactory = function findResourceByIdFactory() {
	  return function (resource_id, resources) {
	    return resources.find(function (resource) {
	      return resource.id == resource_id;
	    });
	  };
	};

	var findResourceFactory = function findResourceFactory() {
	  return function (resourceIdentifier, resources) {
	    if (!resources[resourceIdentifier.type]) return nullResource;
	    return resources[resourceIdentifier.type].data.find(function (resource) {
	      return resource.id == resourceIdentifier.id;
	    });
	  };
	};

	/*******************************************************************************
	  Selectors
	*******************************************************************************/

	// getSelected Selectors
	var getSelectedTop = exports.getSelectedTop = (0, _reselect.createSelector)(getSelectedTopId, getSets, findResourceByIdFactory());

	var getSelectedBottom = exports.getSelectedBottom = (0, _reselect.createSelector)(getSelectedBottomId, getSets, findResourceByIdFactory());

	// selected{Resource}Biomaterials Selectors
	var getSelectedTopSetMaterials = exports.getSelectedTopSetMaterials = (0, _reselect.createSelector)(function (state) {
	  return state.materials;
	}, getSelectedTop, function (materials, set) {
	  if (set && set.id in materials) {
	    return materials[set.id];
	  }
	  return {};
	});

	var getSelectedBottomSetMaterials = exports.getSelectedBottomSetMaterials = (0, _reselect.createSelector)(function (state) {
	  return state.materials;
	}, getSelectedBottom, function (materials, set) {
	  if (set && set.id in materials) {
	    return materials[set.id];
	  }
	  return {};
	});

	var getSelectedTopMaterials = exports.getSelectedTopMaterials = function getSelectedTopMaterials(state) {
	  return getSelectedTopSetMaterials(state).instances;
	};
	var getSelectedBottomMaterials = exports.getSelectedBottomMaterials = function getSelectedBottomMaterials(state) {
	  return getSelectedBottomSetMaterials(state).instances;
	};
	var getSelectedTopLinks = exports.getSelectedTopLinks = function getSelectedTopLinks(state) {
	  return getSelectedTopSetMaterials(state).links;
	};
	var getSelectedBottomLinks = exports.getSelectedBottomLinks = function getSelectedBottomLinks(state) {
	  return getSelectedBottomSetMaterials(state).links;
	};
	var getSelectedTopPage = exports.getSelectedTopPage = function getSelectedTopPage(state) {
	  return getSelectedTopSetMaterials(state).page;
	};
	var getSelectedBottomPage = exports.getSelectedBottomPage = function getSelectedBottomPage(state) {
	  return getSelectedBottomSetMaterials(state).page;
	};
	var getSelectedTopUrl = exports.getSelectedTopUrl = function getSelectedTopUrl(state) {
	  return getSelectedTopSetMaterials(state).url;
	};
	var getSelectedBottomUrl = exports.getSelectedBottomUrl = function getSelectedBottomUrl(state) {
	  return getSelectedBottomSetMaterials(state).url;
	};

	// All the loaded sets that belong to the currently logged in user
	var getUserSets = exports.getUserSets = (0, _reselect.createSelector)(getUserEmail, getSets, function (email, sets) {
	  return sets.reduce(function (memo, set) {
	    if (set.attributes.owner_id === null) {
	      return memo;
	    }
	    if (set.attributes.owner_id === email) memo.push(set);
	    return memo;
	  }, []);
	});

/***/ }),
/* 1136 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createStructuredSelector = createStructuredSelector;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function defaultEqualityCheck(a, b) {
	  return a === b;
	}

	function defaultMemoize(func) {
	  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

	  var lastArgs = null;
	  var lastResult = null;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
	      return equalityCheck(value, lastArgs[index]);
	    })) {
	      lastResult = func.apply(undefined, args);
	    }
	    lastArgs = args;
	    return lastResult;
	  };
	}

	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }

	  return dependencies;
	}

	function createSelectorCreator(memoize) {
	  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    memoizeOptions[_key2 - 1] = arguments[_key2];
	  }

	  return function () {
	    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      funcs[_key3] = arguments[_key3];
	    }

	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);

	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      return resultFunc.apply(undefined, arguments);
	    }].concat(memoizeOptions));

	    var selector = function selector(state, props) {
	      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	        args[_key4 - 2] = arguments[_key4];
	      }

	      var params = dependencies.map(function (dependency) {
	        return dependency.apply(undefined, [state, props].concat(args));
	      });
	      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
	    };

	    selector.resultFunc = resultFunc;
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    selector.resetRecomputations = function () {
	      return recomputations = 0;
	    };
	    return selector;
	  };
	}

	var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	      values[_key5] = arguments[_key5];
	    }

	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}

/***/ }),
/* 1137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SetPanelComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(513);

	var _reactRouter = __webpack_require__(1138);

	var _panel = __webpack_require__(798);

	var _locked_selected_set = __webpack_require__(1139);

	var _locked_selected_set2 = _interopRequireDefault(_locked_selected_set);

	var _droppable_selected_set = __webpack_require__(1131);

	var _droppable_selected_set2 = _interopRequireDefault(_droppable_selected_set);

	var _pagination_container = __webpack_require__(1140);

	var _pagination_container2 = _interopRequireDefault(_pagination_container);

	var _index = __webpack_require__(1135);

	var _font_awesome = __webpack_require__(797);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	var _index2 = __webpack_require__(545);

	var _delete_set_button = __webpack_require__(1141);

	var _delete_set_button2 = _interopRequireDefault(_delete_set_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SetPanel = function (_Component) {
	  _inherits(SetPanel, _Component);

	  function SetPanel() {
	    _classCallCheck(this, SetPanel);

	    return _possibleConstructorReturn(this, (SetPanel.__proto__ || Object.getPrototypeOf(SetPanel)).apply(this, arguments));
	  }

	  _createClass(SetPanel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _index2.select)(this.props.match.params.set_uuid, 'top'));
	      this.props.dispatch((0, _index2.fetchFirstPageSetAndMaterials)(this.props.match.params.set_uuid));
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.match.params.set_uuid != prevProps.match.params.set_uuid) {
	        this.props.dispatch((0, _index2.select)(this.props.match.params.set_uuid, 'top'));
	        this.props.dispatch((0, _index2.fetchFirstPageSetAndMaterials)(this.props.match.params.set_uuid));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(SetPanelComponent, this.props);
	    }
	  }]);

	  return SetPanel;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    set: (0, _index.getSelectedTop)(state),
	    user_email: state.userEmail
	  };
	};

	var SetPanelComponent = exports.SetPanelComponent = function SetPanelComponent(_ref) {
	  var set = _ref.set,
	      user_email = _ref.user_email;

	  if (!set || !set.id) {
	    return _react2.default.createElement(
	      _panel.Panel,
	      { key: 'set-' },
	      _react2.default.createElement(_panel.Heading, { title: 'No set selected' })
	    );
	  }

	  var setName = set.attributes.name;

	  // Delete button should only show up for unlocked sets that belong to the logged in user
	  var deleteable = user_email == set.attributes.owner_id && !set.attributes.locked;

	  var icon = _react2.default.createElement(_font_awesome2.default, { icon: 'lock', style: { "color": "#e61c1c" } });

	  if (set.attributes.locked) {
	    setName = _react2.default.createElement(
	      'span',
	      null,
	      setName,
	      ' ',
	      icon
	    );
	  }

	  return _react2.default.createElement(
	    _panel.Panel,
	    { key: 'set-' + set.id },
	    _react2.default.createElement(
	      _panel.Heading,
	      { title: setName },
	      deleteable && _react2.default.createElement(_delete_set_button2.default, { set: set, style: { "float": "right" } })
	    ),
	    _react2.default.createElement(
	      _panel.Body,
	      { style: { height: '334px', overflowY: 'scroll' } },
	      set.attributes.locked ? _react2.default.createElement(_locked_selected_set2.default, { set: set }) : _react2.default.createElement(_droppable_selected_set2.default, { set: set })
	    ),
	    _react2.default.createElement(_pagination_container2.default, { getLinks: _index.getSelectedTopLinks, getUrl: _index.getSelectedTopUrl, getPage: _index.getSelectedTopPage })
	  );
	};

	exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(SetPanel));

/***/ }),
/* 1138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.MemoryRouter = undefined;

	var _MemoryRouter2 = __webpack_require__(1095);

	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

	var _Prompt2 = __webpack_require__(1104);

	var _Prompt3 = _interopRequireDefault(_Prompt2);

	var _Redirect2 = __webpack_require__(1106);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(1099);

	var _Route3 = _interopRequireDefault(_Route2);

	var _Router2 = __webpack_require__(1090);

	var _Router3 = _interopRequireDefault(_Router2);

	var _StaticRouter2 = __webpack_require__(1109);

	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

	var _Switch2 = __webpack_require__(1111);

	var _Switch3 = _interopRequireDefault(_Switch2);

	var _matchPath2 = __webpack_require__(1100);

	var _matchPath3 = _interopRequireDefault(_matchPath2);

	var _withRouter2 = __webpack_require__(1114);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.MemoryRouter = _MemoryRouter3.default;
	exports.Prompt = _Prompt3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	exports.Router = _Router3.default;
	exports.StaticRouter = _StaticRouter3.default;
	exports.Switch = _Switch3.default;
	exports.matchPath = _matchPath3.default;
	exports.withRouter = _withRouter3.default;

/***/ }),
/* 1139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(513);

	var _biomaterial_table = __webpack_require__(1132);

	var _index = __webpack_require__(1135);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    biomaterials: (0, _index.getSelectedTopMaterials)(state),
	    materials: state.materials,
	    removeable: false
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_biomaterial_table.BiomaterialTable);

/***/ }),
/* 1140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(513);

	var _search_results_table = __webpack_require__(909);

	var _index = __webpack_require__(545);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var linksToPaginatorLink = function linksToPaginatorLink(links, url) {
	  if (!links) {
	    return {};
	  }
	  return Object.keys(links).reduce(function (memo, key) {
	    if (!links[key].endsWith(url)) {
	      memo[key] = { page: links[key] };
	    }
	    return memo;
	  }, {});
	};

	var mapStateToProps = function mapStateToProps(state, props) {
	  return {
	    links: linksToPaginatorLink(props.getLinks(state), props.getUrl(state)),
	    page: props.getPage(state)
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
	  var selectionType = _ref.selectionType;

	  return {
	    handleClick: function handleClick(url) {
	      dispatch((0, _index.fetchMaterialsFromSetByUrl)(url));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_search_results_table.PaginationLinks);

/***/ }),
/* 1141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(799);

	var _reactRedux = __webpack_require__(513);

	var _reduxJsonApi = __webpack_require__(549);

	var _index = __webpack_require__(545);

	var _reactRouterDom = __webpack_require__(1080);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DeleteSetButton = function (_Component) {
	  _inherits(DeleteSetButton, _Component);

	  function DeleteSetButton(props) {
	    _classCallCheck(this, DeleteSetButton);

	    var _this = _possibleConstructorReturn(this, (DeleteSetButton.__proto__ || Object.getPrototypeOf(DeleteSetButton)).call(this, props));

	    _this.state = { showModal: false };

	    _this.deleteSet = _this.deleteSet.bind(_this);
	    _this.showModal = _this.showModal.bind(_this);
	    _this.hideModal = _this.hideModal.bind(_this);
	    return _this;
	  }

	  _createClass(DeleteSetButton, [{
	    key: 'deleteSet',
	    value: function deleteSet() {
	      var _props = this.props,
	          set = _props.set,
	          dispatch = _props.dispatch;

	      dispatch((0, _reduxJsonApi.deleteResource)(set));

	      // Doing this just so we don't continue to try and fetch materials for a Set that no longer exists
	      dispatch((0, _index.clearSelected)());
	    }
	  }, {
	    key: 'showModal',
	    value: function showModal() {
	      this.setState({ showModal: true });
	    }
	  }, {
	    key: 'hideModal',
	    value: function hideModal() {
	      this.setState({ showModal: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var modal = _react2.default.createElement(
	        _reactBootstrap.Modal.Dialog,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            'Delete Set'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          'Are you sure you wish to delete ',
	          _react2.default.createElement(
	            'b',
	            null,
	            this.props.set.attributes.name
	          ),
	          '?'
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.hideModal },
	            'Close'
	          ),
	          _react2.default.createElement(
	            _reactRouterDom.Link,
	            { onClick: this.deleteSet, className: 'btn btn-primary', to: '/', replace: true },
	            'Confirm'
	          )
	        )
	      );

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.showModal, className: 'btn btn-xs btn-danger', style: this.props.style },
	          'Delete Set'
	        ),
	        this.state.showModal && modal
	      );
	    }
	  }]);

	  return DeleteSetButton;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)()(DeleteSetButton);

/***/ }),
/* 1142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _panel = __webpack_require__(798);

	var _font_awesome = __webpack_require__(797);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	var _draggable_selected_collection = __webpack_require__(1143);

	var _draggable_selected_collection2 = _interopRequireDefault(_draggable_selected_collection);

	var _pagination_container = __webpack_require__(1140);

	var _pagination_container2 = _interopRequireDefault(_pagination_container);

	var _index = __webpack_require__(1135);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BottomSetPanel = function BottomSetPanel(_ref) {
	  var set = _ref.set;

	  if (!set || !set.id) {
	    return _react2.default.createElement(
	      _panel.Panel,
	      { key: 'bottom-set-' },
	      _react2.default.createElement(_panel.Heading, { title: 'No set selected' })
	    );
	  }

	  var title = set.attributes.name;
	  var icon = _react2.default.createElement(_font_awesome2.default, { icon: 'lock', style: { "color": "#e61c1c" } });

	  if (set.attributes.locked) {
	    title = _react2.default.createElement(
	      'span',
	      null,
	      title,
	      ' ',
	      icon
	    );
	  }

	  return _react2.default.createElement(
	    _panel.Panel,
	    { key: 'bottom-set-' + set.id },
	    _react2.default.createElement(_panel.Heading, { title: title }),
	    _react2.default.createElement(
	      _panel.Body,
	      { style: { height: '231px', overflowY: 'scroll' } },
	      _react2.default.createElement(_draggable_selected_collection2.default, null)
	    ),
	    _react2.default.createElement(_pagination_container2.default, { getLinks: _index.getSelectedBottomLinks, getUrl: _index.getSelectedBottomUrl, getPage: _index.getSelectedBottomPage })
	  );
	};

	exports.default = BottomSetPanel;

/***/ }),
/* 1143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(513);

	var _reactDnd = __webpack_require__(925);

	var _index = __webpack_require__(545);

	var _reactOnclickoutside = __webpack_require__(1144);

	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

	var _draggable = __webpack_require__(1145);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _item_types = __webpack_require__(1134);

	var _index2 = __webpack_require__(1135);

	var _biomaterial_table = __webpack_require__(1132);

	var _font_awesome = __webpack_require__(797);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var draggableBiomaterialTableRow = (0, _draggable2.default)(_biomaterial_table.BiomaterialTableRow, function (connectDragPreview, props) {
	  var img = new Image();

	  if (props.selected.length > 1) {
	    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEHklEQVRYR+2XXUxbZRjHf/RQyLYqLYYhmR/DwPzED6ittHOw0CVkjm0ZShjfF2MLF1uMid4sQSMJF7syZnHJ6i74MDNKTOaQjsCpNy60FKZbsuHmAoFS8SjfU8HRFnN6ToE6tzGoJCacy3P+5//+3ud93ufJE4PyxJ1oEf8KBIMEAkHm5+eZVz/EAIIgEKvR8N5beboTLeLvUdTFy/7yo68/296/M/MFwzOPpaDRzBOv1RAvKB/7pXE+/9YzdvxgvrH+7IWenZkZj0RBN3H8YP5TCwDANvsFt3tvdib6TQLXvFP8ORfEkp5Ik+ihwmYyAxKQbHe43AWWLAwr1Tk9VOSF/G6EAbTAFrvDPVBgeQX9RoE+7zQz/iDZ6Yk0ih4qbaZU4Fdg82mHayAMuhJdkwIg+/nCAHKkN9sdLqlAjUDf8DQzcwpAg9hNlc2cvAjQJe3NzgpFaiU6dUMhvwiA047VGS8btLObql3KhtYBVhUBg07gRzVZzWkPkCvROIL9liySdLHc9Cm3JSPVQKPYTeVykjUaAAcsRvq1Goo6hxgZnma25sVwvbj/bbk3gJHI0BruuIZ2R5dUaDUyqBUodSoA44czaBY9lNtMqwFwSfstRpJ0Ajd9t5nxB8hI3RAuRAvGYQBvGMA3zWh1lAAOWEz0awco6vyAkeEJZmvO0yT2UGF79b8HkCthodXMoNZLqbMuBDB++EuaxV7Kbca1A/BqhxUA3wSj1V+sEsCIXic3t1vMyr0lTU/D3ZIwHIHoAbikAouRBJ3A1Z+DzPoDbN+qpUH0UKUm6x3NSD6CaALssZpJ8XfD10UwFoR3hmgQe6hSc2ptAIKXobVEATjWR4PYS5WaU2sEcAW+KYOxABy9ug6wHoH/SQRK1Eo4dp9KWCJ3Q980Y//ajFxSqA4E5VtQCqMBOHbtXhFwS4VWE4PaIYrFDxkZHmfqyFc0O3spz1vaC+SekRVqx8Wi0o6njmTQ7PRQnrfYju0Ot7THauLR4A9wvgRG/fD2DRqdvVSqfhF14FTrRak418KEZpwdHUfZl7Cdkzk1nGl3cyj/tYVmdKr1O6k4N5sJDezoGGJfgpaTOVs40+7iUH72gu6T1ovSm7kWDEEvsS0WeLwcbPV82u6mWvWLAKhrbrue8/JzenP6k8TFKWPZlf5fONf1/WRt2e6nw3OBontWb07fukTn41zX5cnasjcWdZ+1XX/9pef1mdueQNDCRuBSv0Rr16XJ91W/pQB6IL2uua0jRhAS1JmRYCAwVVu2exfwEzApz5GROnmMjbmbLu3dj5s+ejgp2aqoYD7gj/BbCiCPZ0nyiAY8FNYDt+QRCvgNmAMeRJcIpADyhmLl9f/ptxRA3rRsvkke18MRAG4Df6iLh18vVycvugGIBzTqzxF+fwNUFhaXPuA7IQAAAABJRU5ErkJggg==';
	  } else {
	    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE10lEQVRYR+2Xe0zVZRjHP+/vd26A3ETFcDrwQqRTwuNlIc7mFTWX1+nALFuas380m7mmhuAl7eJyq1biXCUahZJN5WBpm0aaLouZkopXPPOKCEgHzuX3tt+PI6HjIJjMf3z/Oufs7H0+z/d9vs/7vILHvMRjjk9rASzr8vbV+XwaPk1Dk7KBXwiBSVFQVYXFU0dYAXdLkmstQPiyTdvzJg8fMjKhazRSk6iKQBWgKnDKeZMdB49VfPLWq72cTmd5WwCEAj0zthQce3PqGKwm+KusEiQ8GxtB1tYCMmaOGwycBm63BYAJiMnMcVxcMGU0FlVyoqzKiJMUG8HKbYUsT0+NA5yApy0A9D07ZW51XFsw2Q9wuQqhKxDnB0hLjQautyS4/p/W1sATgCcK1CuQ47jW4ILHUYQZWwquLZwy2ugDJ/wAiXof2OYgI31sm7pAfefz3PeTeicsHDewH4qqUXK5CqQkPiacXb8VU1xy+qM182YsBnwtsWJrbRiSmeO4M3vMUKLaBVHn83L+eg16KwyxWugcYebj/J/5JS8nem/+1y3qBa0BUN/dvHN7cmLvFwfFx2E1Cypdbq5W1BqJahJ6RIdy/PwlfjpavHPF7ElTAe+DVGgpgHhtcVZCrwHPnXx5dIpx4wWbFW5U11FR40Eg0TQwmRSe6RLK+h37cZ4tHfbxknkHDXmaWS0FsKzYsuvYKHtin26dOhDZzmKc+8UbNbh9+v5S/4pPSmIiQ7hVWUHegaMnMmZNsAN1/xdALFq/eVKPXvHbpw0bTJ3XQ0SwGUXCqSvVCEUYMDqAZiQr6B8bwcaCQ5ReOP/6uvnp2foJBYJoiQK2rK2OionJdluQLZjoCAv68FFb56Ws3IWiCKQfQCLxadAxzIpF8ZFdWORanjY2CnA9LIC6dNN3axNiuy8aae+L2+MlKkwfdqCqxsPNajfCEKBeAR1ArwUdIikunPxfi/nz7zMfrpwz7e1AtnyQAiErtznuzBw+FIRKh3YWLCZhTD/llZJaN4Ya9wJIvJrEapV0iTKzOrewWVs2B9BgO3v3nmwu2U185xhUBKEWGzN3r6Ky7g6KUAwV7i69Cryal+lx48lOncuR0jL2HPo9oC0DARi2e3pg8slXRjxPofMIxTWnGNV1ICZFYEKQ/uMqQsxBBtC9Y4XEJzVqvC7WJC4kvZ+dD/L2c/nsmSZtGQjAkqnbLql/n/D2Vmb/kcW6AfPRpA+LYqLk9jk2lOQTpFpRGqfvl0GvBY/mNerh+5S1+FxuvtpX1KQtmwJosN2MlGTSji+jb2QcE54ahsSLTTGz9+oR9lw9jFUxGzVw/zI6g5TUam46maP4Ychysh2HKT1XOm/tGy9tbGzLpgBsq74prB4/qL+pc1gk7135krFdBxuBFSmxqmY2XPyWC67rqKL+AAK1Oo/0Ylf7sqTLLGw2D5/uOuBZlpYa3tiWTQG0X5O7t3zO+JFoXokqFKPRGAOkMf8LLALMKij+3+o/+HVoXBL3lcdnu4uY/0KK3hdu3VWtKYCOS7/IzQ8OixzS+OVzv8yimXn2vweTXg31/UGvlX+qbxetnjt9InCzOQD98dEN6ADo74BHtfSbUQ98CahuDkAPGgTYHnJsDwSsi6Hf3XpbbrimH9QJH1X2Aff5F+QIHT9Fx9lTAAAAAElFTkSuQmCC';
	  }

	  img.onload = function () {
	    return connectDragPreview(img);
	  };
	});

	var biomaterialSource = {
	  beginDrag: function beginDrag(props) {
	    return { biomaterial: props.biomaterial, selected: props.selected };
	  }
	};

	function dragCollect(connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    connectDragPreview: connect.dragPreview(),
	    isDragging: monitor.isDragging()
	  };
	}

	draggableBiomaterialTableRow = (0, _reactDnd.DragSource)(_item_types.ItemTypes.BIOMATERIAL, biomaterialSource, dragCollect)(draggableBiomaterialTableRow);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    biomaterials: (0, _index2.getSelectedBottomMaterials)(state),
	    materials: state.materials,
	    decorators: { row: draggableBiomaterialTableRow },
	    selected: state.browser.selected
	  };
	};

	var Wrapper = function (_Component) {
	  _inherits(Wrapper, _Component);

	  function Wrapper(props) {
	    _classCallCheck(this, Wrapper);

	    var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

	    _this.onClick = _this.onClick.bind(_this);
	    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
	    return _this;
	  }

	  _createClass(Wrapper, [{
	    key: 'onClick',
	    value: function onClick(biomaterial, index, evt) {
	      var key = index;
	      var _props = this.props,
	          dispatch = _props.dispatch,
	          biomaterials = _props.biomaterials;


	      dispatch((0, _index.storeItems)(biomaterials));

	      if (evt.metaKey) {
	        dispatch((0, _index.toggleItem)(key));
	      } else if (evt.shiftKey) {
	        dispatch((0, _index.shiftSelectItems)(key));
	      } else {
	        dispatch((0, _index.selectItem)(key));
	      }
	    }
	  }, {
	    key: 'handleClickOutside',
	    value: function handleClickOutside() {
	      var dispatch = this.props.dispatch;

	      dispatch((0, _index.clearSelection)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          dispatch = _props2.dispatch,
	          rest = _objectWithoutProperties(_props2, ['dispatch']);

	      return _react2.default.createElement(_biomaterial_table.BiomaterialTable, _extends({ onClick: this.onClick }, rest));
	    }
	  }]);

	  return Wrapper;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactOnclickoutside2.default)(Wrapper));

/***/ }),
/* 1144 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * A higher-order-component for handling onClickOutside for React components.
	 */
	(function(root) {

	  // administrative
	  var registeredComponents = [];
	  var handlers = [];
	  var IGNORE_CLASS = 'ignore-react-onclickoutside';
	  var DEFAULT_EVENTS = ['mousedown', 'touchstart'];

	  /**
	   * Check whether some DOM node is our Component's node.
	   */
	  var isNodeFound = function(current, componentNode, ignoreClass) {
	    if (current === componentNode) {
	      return true;
	    }
	    // SVG <use/> elements do not technically reside in the rendered DOM, so
	    // they do not have classList directly, but they offer a link to their
	    // corresponding element, which can have classList. This extra check is for
	    // that case.
	    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
	    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
	    if (current.correspondingElement) {
	      return current.correspondingElement.classList.contains(ignoreClass);
	    }
	    return current.classList.contains(ignoreClass);
	  };

	  /**
	   * Try to find our node in a hierarchy of nodes, returning the document
	   * node as highest noode if our node is not found in the path up.
	   */
	  var findHighest = function(current, componentNode, ignoreClass) {
	    if (current === componentNode) {
	      return true;
	    }

	    // If source=local then this event came from 'somewhere'
	    // inside and should be ignored. We could handle this with
	    // a layered approach, too, but that requires going back to
	    // thinking in terms of Dom node nesting, running counter
	    // to React's 'you shouldn't care about the DOM' philosophy.
	    while(current.parentNode) {
	      if (isNodeFound(current, componentNode, ignoreClass)) {
	        return true;
	      }
	      current = current.parentNode;
	    }
	    return current;
	  };

	  /**
	   * Check if the browser scrollbar was clicked
	   */
	  var clickedScrollbar = function(evt) {
	    return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
	  };

	  /**
	   * Generate the event handler that checks whether a clicked DOM node
	   * is inside of, or lives outside of, our Component's node tree.
	   */
	  var generateOutsideCheck = function(componentNode, componentInstance, eventHandler, ignoreClass, excludeScrollbar, preventDefault, stopPropagation) {
	    return function(evt) {
	      if (preventDefault) {
	        evt.preventDefault();
	      }
	      if (stopPropagation) {
	        evt.stopPropagation();
	      }
	      var current = evt.target;
	      if((excludeScrollbar && clickedScrollbar(evt)) || (findHighest(current, componentNode, ignoreClass) !== document)) {
	        return;
	      }
	      eventHandler(evt);
	    };
	  };

	  /**
	   * This function generates the HOC function that you'll use
	   * in order to impart onOutsideClick listening to an
	   * arbitrary component. It gets called at the end of the
	   * bootstrapping code to yield an instance of the
	   * onClickOutsideHOC function defined inside setupHOC().
	   */
	  function setupHOC(root, React, ReactDOM, createReactClass) {

	    // The actual Component-wrapping HOC:
	    return function onClickOutsideHOC(Component, config) {
	      var wrapComponentWithOnClickOutsideHandling = createReactClass({
	        statics: {
	          /**
	           * Access the wrapped Component's class.
	           */
	          getClass: function() {
	            if (Component.getClass) {
	              return Component.getClass();
	            }
	            return Component;
	          }
	        },

	        /**
	         * Access the wrapped Component's instance.
	         */
	        getInstance: function() {
	          return Component.prototype.isReactComponent ? this.refs.instance : this;
	        },

	        // this is given meaning in componentDidMount
	        __outsideClickHandler: function() {},

	        getDefaultProps: function() {
	          return {
	            excludeScrollbar: config && config.excludeScrollbar
	          };
	        },

	        /**
	         * Add click listeners to the current document,
	         * linked to this component's state.
	         */
	        componentDidMount: function() {
	          // If we are in an environment without a DOM such
	          // as shallow rendering or snapshots then we exit
	          // early to prevent any unhandled errors being thrown.
	          if (typeof document === 'undefined' || !document.createElement){
	            return;
	          }

	          var instance = this.getInstance();
	          var clickOutsideHandler;

	          if(config && typeof config.handleClickOutside === 'function') {
	            clickOutsideHandler = config.handleClickOutside(instance);
	            if(typeof clickOutsideHandler !== 'function') {
	              throw new Error('Component lacks a function for processing outside click events specified by the handleClickOutside config option.');
	            }
	          } else if(typeof instance.handleClickOutside === 'function') {
	            if (React.Component.prototype.isPrototypeOf(instance)) {
	              clickOutsideHandler = instance.handleClickOutside.bind(instance);
	            } else {
	              clickOutsideHandler = instance.handleClickOutside;
	            }
	          } else if(typeof instance.props.handleClickOutside === 'function') {
	            clickOutsideHandler = instance.props.handleClickOutside;
	          } else {
	            throw new Error('Component lacks a handleClickOutside(event) function for processing outside click events.');
	          }

	          var componentNode = ReactDOM.findDOMNode(instance);
	          if (componentNode === null) {
	            console.warn('Antipattern warning: there was no DOM node associated with the component that is being wrapped by outsideClick.');
	            console.warn([
	              'This is typically caused by having a component that starts life with a render function that',
	              'returns `null` (due to a state or props value), so that the component \'exist\' in the React',
	              'chain of components, but not in the DOM.\n\nInstead, you need to refactor your code so that the',
	              'decision of whether or not to show your component is handled by the parent, in their render()',
	              'function.\n\nIn code, rather than:\n\n  A{render(){return check? <.../> : null;}\n  B{render(){<A check=... />}\n\nmake sure that you',
	              'use:\n\n  A{render(){return <.../>}\n  B{render(){return <...>{ check ? <A/> : null }<...>}}\n\nThat is:',
	              'the parent is always responsible for deciding whether or not to render any of its children.',
	              'It is not the child\'s responsibility to decide whether a render instruction from above should',
	              'get ignored or not by returning `null`.\n\nWhen any component gets its render() function called,',
	              'that is the signal that it should be rendering its part of the UI. It may in turn decide not to',
	              'render all of *its* children, but it should never return `null` for itself. It is not responsible',
	              'for that decision.'
	            ].join(' '));
	          }

	          var fn = this.__outsideClickHandler = generateOutsideCheck(
	            componentNode,
	            instance,
	            clickOutsideHandler,
	            this.props.outsideClickIgnoreClass || IGNORE_CLASS,
	            this.props.excludeScrollbar, // fallback not needed, prop always exists because of getDefaultProps
	            this.props.preventDefault || false,
	            this.props.stopPropagation || false
	          );

	          var pos = registeredComponents.length;
	          registeredComponents.push(this);
	          handlers[pos] = fn;

	          // If there is a truthy disableOnClickOutside property for this
	          // component, don't immediately start listening for outside events.
	          if (!this.props.disableOnClickOutside) {
	            this.enableOnClickOutside();
	          }
	        },

	        /**
	        * Track for disableOnClickOutside props changes and enable/disable click outside
	        */
	        componentWillReceiveProps: function(nextProps) {
	          if (this.props.disableOnClickOutside && !nextProps.disableOnClickOutside) {
	            this.enableOnClickOutside();
	          } else if (!this.props.disableOnClickOutside && nextProps.disableOnClickOutside) {
	            this.disableOnClickOutside();
	          }
	        },

	        /**
	         * Remove the document's event listeners
	         */
	        componentWillUnmount: function() {
	          this.disableOnClickOutside();
	          this.__outsideClickHandler = false;
	          var pos = registeredComponents.indexOf(this);
	          if( pos>-1) {
	            // clean up so we don't leak memory
	            if (handlers[pos]) { handlers.splice(pos, 1); }
	            registeredComponents.splice(pos, 1);
	          }
	        },

	        /**
	         * Can be called to explicitly enable event listening
	         * for clicks and touches outside of this element.
	         */
	        enableOnClickOutside: function() {
	          var fn = this.__outsideClickHandler;
	          if (typeof document !== 'undefined') {
	            var events = this.props.eventTypes || DEFAULT_EVENTS;
	            if (!events.forEach) {
	              events = [events];
	            }
	            events.forEach(function (eventName) {
	              document.addEventListener(eventName, fn);
	            });
	          }
	        },

	        /**
	         * Can be called to explicitly disable event listening
	         * for clicks and touches outside of this element.
	         */
	        disableOnClickOutside: function() {
	          var fn = this.__outsideClickHandler;
	          if (typeof document !== 'undefined') {
	            var events = this.props.eventTypes || DEFAULT_EVENTS;
	            if (!events.forEach) {
	              events = [events];
	            }
	            events.forEach(function (eventName) {
	              document.removeEventListener(eventName, fn);
	            });
	          }
	        },

	        /**
	         * Pass-through render
	         */
	        render: function() {
	          var passedProps = this.props;
	          var props = {};
	          Object.keys(this.props).forEach(function(key) {
	            if (key !== 'excludeScrollbar') {
	              props[key] = passedProps[key];
	            }
	          });
	          if (Component.prototype.isReactComponent) {
	            props.ref = 'instance';
	          }
	          props.disableOnClickOutside = this.disableOnClickOutside;
	          props.enableOnClickOutside = this.enableOnClickOutside;
	          return React.createElement(Component, props);
	        }
	      });

	      // Add display name for React devtools
	      (function bindWrappedComponentName(c, wrapper) {
	        var componentName = c.displayName || c.name || 'Component';
	        wrapper.displayName = 'OnClickOutside(' + componentName + ')';
	      }(Component, wrapComponentWithOnClickOutsideHandling));

	      return wrapComponentWithOnClickOutsideHandling;
	    };
	  }

	  /**
	   * This function sets up the library in ways that
	   * work with the various modulde loading solutions
	   * used in JavaScript land today.
	   */
	  function setupBinding(root, factory) {
	    if (true) {
	      // AMD. Register as an anonymous module.
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(330),__webpack_require__(366),__webpack_require__(796)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDom, createReactClass) {
	        if (!createReactClass) createReactClass = React.createClass;
	        return factory(root, React, ReactDom, createReactClass);
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	      // Node. Note that this does not work with strict
	      // CommonJS, but only CommonJS-like environments
	      // that support module.exports
	      module.exports = factory(root, require('react'), require('react-dom'), require('create-react-class'));
	    } else {
	      // Browser globals (root is window)
	      var createReactClass = React.createClass ? React.createClass : window.createReactClass;
	      root.onClickOutside = factory(root, React, ReactDOM, createReactClass);
	    }
	  }

	  // Make it all happen
	  setupBinding(root, setupHOC);

	}(this));


/***/ }),
/* 1145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass = __webpack_require__(796);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _reactDom = __webpack_require__(366);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	exports.default = function (WrappedComponent, getPreviewNode) {

	  return (0, _createReactClass2.default)({
	    render: function render() {
	      var _props = this.props,
	          connectDragSource = _props.connectDragSource,
	          connectDragPreview = _props.connectDragPreview,
	          isDragging = _props.isDragging,
	          rest = _objectWithoutProperties(_props, ['connectDragSource', 'connectDragPreview', 'isDragging']);

	      if (typeof getPreviewNode != 'undefined') {
	        getPreviewNode(connectDragPreview, rest);
	      }

	      return _react2.default.createElement(WrappedComponent, _extends({}, rest, {
	        ref: function ref(instance) {
	          return connectDragSource((0, _reactDom.findDOMNode)(instance));
	        } }));
	    }
	  });
	};

/***/ }),
/* 1146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(330);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(513);

	var _index = __webpack_require__(545);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddSetForm = function AddSetForm(_ref) {
	  var dispatch = _ref.dispatch;

	  var input = void 0;

	  return _react2.default.createElement(
	    'form',
	    { onSubmit: function onSubmit(e) {

	        e.preventDefault();
	        if (!input.value) return;

	        dispatch((0, _index.createSetOnly)(input.value.trim()));
	        input.value = '';
	      } },
	    _react2.default.createElement(
	      'div',
	      { className: 'form-group' },
	      _react2.default.createElement(
	        'label',
	        { className: 'sr-only', htmlFor: 'setName' },
	        'Name'
	      ),
	      _react2.default.createElement('input', { ref: function ref(node) {
	          return input = node;
	        }, type: 'text', className: 'form-control', id: 'setName', placeholder: 'Set Name' })
	    ),
	    _react2.default.createElement(
	      'button',
	      { style: { width: '100%' }, type: 'submit', className: 'btn btn-primary' },
	      'Create'
	    )
	  );
	};

	AddSetForm = (0, _reactRedux.connect)()(AddSetForm);

	exports.default = AddSetForm;

/***/ })
]);