webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(369);

	var _reactRedux = __webpack_require__(516);

	var _reactDnd = __webpack_require__(895);

	var _reactDndHtml5Backend = __webpack_require__(1014);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _set_shaper = __webpack_require__(1045);

	var _set_shaper2 = _interopRequireDefault(_set_shaper);

	var _actions = __webpack_require__(542);

	var _reduxJsonApi = __webpack_require__(546);

	var _selectors = __webpack_require__(1065);

	var _store = __webpack_require__(885);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Don't want to cache any of our requests
	$.ajaxSetup({ cache: false });

	// Load the sets up front
	_store2.default.dispatch((0, _reduxJsonApi.readEndpoint)('sets'));

	_store2.default.dispatch(setUserEmail(Aker.userEmail));

	setInterval(function () {
	  var selected = _store2.default.getState().selected;

	  for (var position in selected) {
	    if (selected[position]) _store2.default.dispatch((0, _actions.fetchSetAndMaterials)(selected[position]));
	  }
	}, 10000);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    set: (0, _selectors.getSelectedTop)(state),
	    resource: (0, _selectors.getSelectedBottom)(state),
	    user_set_ids: (0, _selectors.getUserSets)(state)
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(329)))

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DragDropContext = __webpack_require__(896);

	Object.defineProperty(exports, 'DragDropContext', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropContext).default;
	  }
	});

	var _DragDropContextProvider = __webpack_require__(990);

	Object.defineProperty(exports, 'DragDropContextProvider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropContextProvider).default;
	  }
	});

	var _DragLayer = __webpack_require__(991);

	Object.defineProperty(exports, 'DragLayer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragLayer).default;
	  }
	});

	var _DragSource = __webpack_require__(994);

	Object.defineProperty(exports, 'DragSource', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragSource).default;
	  }
	});

	var _DropTarget = __webpack_require__(1009);

	Object.defineProperty(exports, 'DropTarget', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropTarget).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 896:
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

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(518);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _dndCore = __webpack_require__(897);

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _hoistNonReactStatics = __webpack_require__(540);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _checkDecoratorArguments = __webpack_require__(989);

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
	          (0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can ' + 'not be a stateless component.');
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
	              return _this2.child = child;
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

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DragDropManager = __webpack_require__(898);

	Object.defineProperty(exports, 'DragDropManager', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropManager).default;
	  }
	});

	var _DragSource = __webpack_require__(986);

	Object.defineProperty(exports, 'DragSource', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragSource).default;
	  }
	});

	var _DropTarget = __webpack_require__(987);

	Object.defineProperty(exports, 'DropTarget', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropTarget).default;
	  }
	});

	var _createTestBackend = __webpack_require__(988);

	Object.defineProperty(exports, 'createTestBackend', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createTestBackend).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createStore = __webpack_require__(526);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _reducers = __webpack_require__(899);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _dragDrop = __webpack_require__(901);

	var dragDropActions = _interopRequireWildcard(_dragDrop);

	var _DragDropMonitor = __webpack_require__(981);

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

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reduce;

	var _dragOffset = __webpack_require__(900);

	var _dragOffset2 = _interopRequireDefault(_dragOffset);

	var _dragOperation = __webpack_require__(905);

	var _dragOperation2 = _interopRequireDefault(_dragOperation);

	var _refCount = __webpack_require__(966);

	var _refCount2 = _interopRequireDefault(_refCount);

	var _dirtyHandlerIds = __webpack_require__(967);

	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

	var _stateId = __webpack_require__(980);

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

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

	var _dragDrop = __webpack_require__(901);

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

/***/ 901:
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

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(902);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isObject = __webpack_require__(903);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _matchesType = __webpack_require__(904);

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

/***/ 902:
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

/***/ 903:
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

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = matchesType;

	var _isArray = __webpack_require__(902);

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

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = dragOperation;

	var _without = __webpack_require__(906);

	var _without2 = _interopRequireDefault(_without);

	var _dragDrop = __webpack_require__(901);

	var _registry = __webpack_require__(965);

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

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(907),
	    baseRest = __webpack_require__(953),
	    isArrayLikeObject = __webpack_require__(962);

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

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(908),
	    arrayIncludes = __webpack_require__(944),
	    arrayIncludesWith = __webpack_require__(949),
	    arrayMap = __webpack_require__(950),
	    baseUnary = __webpack_require__(951),
	    cacheHas = __webpack_require__(952);

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
	        computed = iteratee ? iteratee(value) : value;

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

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(909),
	    setCacheAdd = __webpack_require__(942),
	    setCacheHas = __webpack_require__(943);

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
	      length = values ? values.length : 0;

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

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(910),
	    mapCacheDelete = __webpack_require__(936),
	    mapCacheGet = __webpack_require__(939),
	    mapCacheHas = __webpack_require__(940),
	    mapCacheSet = __webpack_require__(941);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

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

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(911),
	    ListCache = __webpack_require__(927),
	    Map = __webpack_require__(935);

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

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(912),
	    hashDelete = __webpack_require__(923),
	    hashGet = __webpack_require__(924),
	    hashHas = __webpack_require__(925),
	    hashSet = __webpack_require__(926);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

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

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(913);

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

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(914);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(915),
	    getValue = __webpack_require__(922);

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

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(916),
	    isMasked = __webpack_require__(917),
	    isObject = __webpack_require__(903),
	    toSource = __webpack_require__(921);

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

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(903);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

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
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(918);

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

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(919);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(920);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),

/***/ 920:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 921:
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
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

/***/ 922:
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

/***/ 923:
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

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(913);

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

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(913);

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
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(913);

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

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(928),
	    listCacheDelete = __webpack_require__(929),
	    listCacheGet = __webpack_require__(932),
	    listCacheHas = __webpack_require__(933),
	    listCacheSet = __webpack_require__(934);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

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

/***/ 928:
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

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(930);

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

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(931);

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

/***/ 931:
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

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(930);

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

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(930);

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

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(930);

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

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(914),
	    root = __webpack_require__(919);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(937);

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

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(938);

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

/***/ 938:
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

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(937);

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

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(937);

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

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(937);

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

/***/ 942:
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

/***/ 943:
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

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(945);

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
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(946),
	    baseIsNaN = __webpack_require__(947),
	    strictIndexOf = __webpack_require__(948);

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

/***/ 946:
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

/***/ 947:
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

/***/ 948:
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

/***/ 949:
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
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ }),

/***/ 950:
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
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),

/***/ 951:
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

/***/ 952:
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

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(954),
	    overRest = __webpack_require__(955),
	    setToString = __webpack_require__(957);

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

/***/ 954:
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

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(956);

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

/***/ 956:
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

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(958),
	    shortOut = __webpack_require__(961);

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

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(959),
	    identity = __webpack_require__(954),
	    nativeDefineProperty = __webpack_require__(960);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !nativeDefineProperty ? identity : function(func, string) {
	  return nativeDefineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),

/***/ 959:
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

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(914);

	/* Built-in method references that are verified to be native. */
	var nativeDefineProperty = getNative(Object, 'defineProperty');

	module.exports = nativeDefineProperty;


/***/ }),

/***/ 961:
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500,
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

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(963),
	    isObjectLike = __webpack_require__(530);

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

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(916),
	    isLength = __webpack_require__(964);

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

/***/ 964:
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

/***/ 965:
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

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = refCount;

	var _registry = __webpack_require__(965);

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

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = dirtyHandlerIds;
	exports.areDirty = areDirty;

	var _xor = __webpack_require__(968);

	var _xor2 = _interopRequireDefault(_xor);

	var _intersection = __webpack_require__(977);

	var _intersection2 = _interopRequireDefault(_intersection);

	var _dragDrop = __webpack_require__(901);

	var _registry = __webpack_require__(965);

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

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(969),
	    baseRest = __webpack_require__(953),
	    baseXor = __webpack_require__(970),
	    isArrayLikeObject = __webpack_require__(962);

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

/***/ 969:
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
	      length = array ? array.length : 0,
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

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(971),
	    baseDifference = __webpack_require__(907),
	    baseUniq = __webpack_require__(972);

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
	  var index = -1,
	      length = arrays.length;

	  while (++index < length) {
	    var result = result
	      ? arrayPush(
	          baseDifference(result, arrays[index], iteratee, comparator),
	          baseDifference(arrays[index], result, iteratee, comparator)
	        )
	      : arrays[index];
	  }
	  return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
	}

	module.exports = baseXor;


/***/ }),

/***/ 971:
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

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(908),
	    arrayIncludes = __webpack_require__(944),
	    arrayIncludesWith = __webpack_require__(949),
	    cacheHas = __webpack_require__(952),
	    createSet = __webpack_require__(973),
	    setToArray = __webpack_require__(976);

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

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(974),
	    noop = __webpack_require__(975),
	    setToArray = __webpack_require__(976);

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

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(914),
	    root = __webpack_require__(919);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),

/***/ 975:
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

/***/ 976:
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

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(950),
	    baseIntersection = __webpack_require__(978),
	    baseRest = __webpack_require__(953),
	    castArrayLikeObject = __webpack_require__(979);

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

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(908),
	    arrayIncludes = __webpack_require__(944),
	    arrayIncludesWith = __webpack_require__(949),
	    arrayMap = __webpack_require__(950),
	    baseUnary = __webpack_require__(951),
	    cacheHas = __webpack_require__(952);

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

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(962);

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

/***/ 980:
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

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(902);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _matchesType = __webpack_require__(904);

	var _matchesType2 = _interopRequireDefault(_matchesType);

	var _HandlerRegistry = __webpack_require__(982);

	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

	var _dragOffset = __webpack_require__(900);

	var _dirtyHandlerIds = __webpack_require__(967);

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

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(902);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _asap = __webpack_require__(983);

	var _asap2 = _interopRequireDefault(_asap);

	var _registry = __webpack_require__(965);

	var _getNextUniqueId = __webpack_require__(985);

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

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(984);
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

/***/ 984:
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

/***/ 985:
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

/***/ 986:
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

/***/ 987:
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

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createBackend;

	var _noop = __webpack_require__(975);

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

/***/ 989:
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
	        console.error( // eslint-disable-line no-console
	        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
	        return;
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(332);

	var _propTypes = __webpack_require__(518);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _DragDropContext = __webpack_require__(896);

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

	    var _this = _possibleConstructorReturn(this, (DragDropContextProvider.__proto__ || Object.getPrototypeOf(DragDropContextProvider)).call(this, props, context));

	    _this.backend = (0, _DragDropContext.unpackBackendForEs5Users)(props.backend);
	    return _this;
	  }

	  _createClass(DragDropContextProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var _this2 = this;

	      /**
	       * This property determines which window global to use for creating the DragDropManager.
	       * If a window has been injected explicitly via props, that is used first. If it is available
	       * as a context value, then use that, otherwise use the browser global.
	       */
	      var getWindow = function getWindow() {
	        if (_this2.props && _this2.props.window) {
	          return _this2.props.window;
	        } else if (_this2.context && _this2.context.window) {
	          return _this2.context.window;
	        } else if (typeof window !== 'undefined') {
	          return window;
	        }
	        return undefined;
	      };

	      return (0, _DragDropContext.createChildContext)(this.backend, { window: getWindow() });
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
	  window: _propTypes2.default.object }, _class.defaultProps = {
	  window: undefined
	}, _class.childContextTypes = _DragDropContext.CHILD_CONTEXT_TYPES, _class.displayName = 'DragDropContextProvider', _class.contextTypes = {
	  window: _propTypes2.default.object
	}, _temp);
	exports.default = DragDropContextProvider;

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = DragLayer;

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(518);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _hoistNonReactStatics = __webpack_require__(540);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _isPlainObject = __webpack_require__(527);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _shallowEqual = __webpack_require__(992);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _shallowEqualScalar = __webpack_require__(993);

	var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

	var _checkDecoratorArguments = __webpack_require__(989);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function DragLayer(collect) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  _checkDecoratorArguments2.default.apply(undefined, ['DragLayer', 'collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
	  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
	  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);

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
	          (0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can ' + 'not be a stateless component.');
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
	              return _this2.child = child;
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

/***/ 992:
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

/***/ 993:
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

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DragSource;

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(527);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _checkDecoratorArguments = __webpack_require__(989);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	var _decorateHandler = __webpack_require__(995);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerSource = __webpack_require__(1001);

	var _registerSource2 = _interopRequireDefault(_registerSource);

	var _createSourceFactory = __webpack_require__(1002);

	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

	var _createSourceMonitor = __webpack_require__(1003);

	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

	var _createSourceConnector = __webpack_require__(1004);

	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

	var _isValidType = __webpack_require__(1008);

	var _isValidType2 = _interopRequireDefault(_isValidType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DragSource(type, spec, collect) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  _checkDecoratorArguments2.default.apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
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

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = decorateHandler;

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(518);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _disposables = __webpack_require__(996);

	var _isPlainObject = __webpack_require__(527);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _hoistNonReactStatics = __webpack_require__(540);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _shallowEqual = __webpack_require__(992);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _shallowEqualScalar = __webpack_require__(993);

	var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	          ref: this.handleChildRef
	        }));
	      }
	    }]);

	    return DragDropContainer;
	  }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = containerDisplayName + '(' + displayName + ')', _class.contextTypes = {
	    dragDropManager: _propTypes2.default.object.isRequired
	  }, _temp);


	  return (0, _hoistNonReactStatics2.default)(DragDropContainer, DecoratedComponent);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;

	var _isDisposable2 = __webpack_require__(997);

	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);

	exports.isDisposable = _isDisposable3['default'];

	var _Disposable2 = __webpack_require__(998);

	var _Disposable3 = _interopRequireWildcard(_Disposable2);

	exports.Disposable = _Disposable3['default'];

	var _CompositeDisposable2 = __webpack_require__(999);

	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);

	exports.CompositeDisposable = _CompositeDisposable3['default'];

	var _SerialDisposable2 = __webpack_require__(1000);

	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);

	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isDisposable;

	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}

	module.exports = exports['default'];

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.__esModule = true;
	var noop = function noop() {};

	/**
	 * The basic disposable.
	 */

	var Disposable = (function () {
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

	  _createClass(Disposable, null, [{
	    key: "empty",
	    enumerable: true,
	    value: { dispose: noop }
	  }]);

	  return Disposable;
	})();

	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(997);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

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

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(997);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

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
	    var value = arguments[0] === undefined ? null : arguments[0];

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

/***/ 1001:
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

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createSourceFactory;

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(527);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createSourceMonitor;

	var _invariant = __webpack_require__(541);

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

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSourceConnector;

	var _wrapConnectorHooks = __webpack_require__(1005);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(1007);

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

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = wrapConnectorHooks;

	var _react = __webpack_require__(332);

	var _cloneWithRef = __webpack_require__(1006);

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

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cloneWithRef;

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(332);

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

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = areOptionsEqual;

	var _shallowEqual = __webpack_require__(992);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function areOptionsEqual(nextOptions, currentOptions) {
	  if (currentOptions === nextOptions) {
	    return true;
	  }

	  return currentOptions !== null && nextOptions !== null && (0, _shallowEqual2.default)(currentOptions, nextOptions);
	}

/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	       value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isValidType;

	var _isArray = __webpack_require__(902);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidType(type, allowArray) {
	       return typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' || allowArray && (0, _isArray2.default)(type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}

/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DropTarget;

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(527);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _checkDecoratorArguments = __webpack_require__(989);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	var _decorateHandler = __webpack_require__(995);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerTarget = __webpack_require__(1010);

	var _registerTarget2 = _interopRequireDefault(_registerTarget);

	var _createTargetFactory = __webpack_require__(1011);

	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

	var _createTargetMonitor = __webpack_require__(1012);

	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

	var _createTargetConnector = __webpack_require__(1013);

	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

	var _isValidType = __webpack_require__(1008);

	var _isValidType2 = _interopRequireDefault(_isValidType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DropTarget(type, spec, collect) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  _checkDecoratorArguments2.default.apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
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

/***/ 1010:
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

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createTargetFactory;

	var _invariant = __webpack_require__(541);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(527);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createTargetMonitor;

	var _invariant = __webpack_require__(541);

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

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTargetConnector;

	var _wrapConnectorHooks = __webpack_require__(1005);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(1007);

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

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getEmptyImage = exports.NativeTypes = undefined;
	exports.default = createHTML5Backend;

	var _HTML5Backend = __webpack_require__(1015);

	var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

	var _getEmptyImage = __webpack_require__(1044);

	var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

	var _NativeTypes = __webpack_require__(1043);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.NativeTypes = NativeTypes;
	exports.getEmptyImage = _getEmptyImage2.default;
	function createHTML5Backend(manager) {
	  return new _HTML5Backend2.default(manager);
	}

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _defaults = __webpack_require__(1016);

	var _defaults2 = _interopRequireDefault(_defaults);

	var _shallowEqual = __webpack_require__(1032);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _EnterLeaveCounter = __webpack_require__(1033);

	var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

	var _BrowserDetector = __webpack_require__(1038);

	var _OffsetUtils = __webpack_require__(1040);

	var _NativeDragSources = __webpack_require__(1042);

	var _NativeTypes = __webpack_require__(1043);

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
	  }

	  _createClass(HTML5Backend, [{
	    key: 'setup',
	    value: function setup() {
	      if (this.window === undefined) {
	        return;
	      }

	      if (this.window.__isReactDndBackendSetUp) {
	        // eslint-disable-line no-underscore-dangle
	        throw new Error('Cannot have two HTML5 backends at the same time.');
	      }
	      this.window.__isReactDndBackendSetUp = true; // eslint-disable-line no-underscore-dangle
	      this.addEventListeners(this.window);
	    }
	  }, {
	    key: 'teardown',
	    value: function teardown() {
	      if (this.window === undefined) {
	        return;
	      }

	      this.window.__isReactDndBackendSetUp = false; // eslint-disable-line no-underscore-dangle
	      this.removeEventListeners(this.window);
	      this.clearCurrentDragSourceNode();
	      if (this.asyncEndDragFrameId) {
	        this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
	      }
	    }
	  }, {
	    key: 'addEventListeners',
	    value: function addEventListeners(target) {
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
	    key: 'endDragIfSourceWasRemovedFromDOM',
	    value: function endDragIfSourceWasRemovedFromDOM() {
	      var node = this.currentDragSourceNode;
	      if (document.body.contains(node)) {
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
	              anchorY = _getCurrentSourcePrev.anchorY;

	          var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
	          var dragPreviewOffset = (0, _OffsetUtils.getDragPreviewOffset)(sourceNode, dragPreview, clientOffset, anchorPoint);
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

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(956),
	    assignInDefaults = __webpack_require__(1017),
	    assignInWith = __webpack_require__(1018),
	    baseRest = __webpack_require__(953);

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
	  args.push(undefined, assignInDefaults);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(931);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function assignInDefaults(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = assignInDefaults;


/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(1019),
	    createAssigner = __webpack_require__(1022),
	    keysIn = __webpack_require__(1025);

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

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(1020),
	    baseAssignValue = __webpack_require__(1021);

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

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(1021),
	    eq = __webpack_require__(931);

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

/***/ 1021:
/***/ (function(module, exports) {

	/** Built-in value references. */
	var defineProperty = Object.defineProperty;

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

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(953),
	    isIterateeCall = __webpack_require__(1023);

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

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(931),
	    isArrayLike = __webpack_require__(963),
	    isIndex = __webpack_require__(1024),
	    isObject = __webpack_require__(903);

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

/***/ 1024:
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

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(1026),
	    baseKeysIn = __webpack_require__(1029),
	    isArrayLike = __webpack_require__(963);

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

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(1027),
	    isArguments = __webpack_require__(1028),
	    isArray = __webpack_require__(902),
	    isIndex = __webpack_require__(1024);

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
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),

/***/ 1027:
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

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(962);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

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
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(903),
	    isPrototype = __webpack_require__(1030),
	    nativeKeysIn = __webpack_require__(1031);

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

/***/ 1030:
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

/***/ 1031:
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

/***/ 1032:
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

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _union = __webpack_require__(1034);

	var _union2 = _interopRequireDefault(_union);

	var _without = __webpack_require__(906);

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

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(1035),
	    baseRest = __webpack_require__(953),
	    baseUniq = __webpack_require__(972),
	    isArrayLikeObject = __webpack_require__(962);

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

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(971),
	    isFlattenable = __webpack_require__(1036);

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

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(1037),
	    isArguments = __webpack_require__(1028),
	    isArray = __webpack_require__(902);

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

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(919);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isSafari = exports.isFirefox = undefined;

	var _memoize = __webpack_require__(1039);

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

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(909);

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
	 * method interface of `delete`, `get`, `has`, and `set`.
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
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
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

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getNodeClientOffset = getNodeClientOffset;
	exports.getEventClientOffset = getEventClientOffset;
	exports.getDragPreviewOffset = getDragPreviewOffset;

	var _BrowserDetector = __webpack_require__(1038);

	var _MonotonicInterpolant = __webpack_require__(1041);

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

	function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
	  // The browsers will use the image intrinsic size under different conditions.
	  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
	  var isImage = dragPreview.nodeName === 'IMG' && ((0, _BrowserDetector.isFirefox)() || !document.documentElement.contains(dragPreview));
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


	  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
	  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

	  // Work around @2x coordinate discrepancies in browsers
	  if ((0, _BrowserDetector.isSafari)() && isImage) {
	    dragPreviewHeight /= window.devicePixelRatio;
	    dragPreviewWidth /= window.devicePixelRatio;
	  }

	  // Interpolate coordinates depending on anchor point
	  // If you know a simpler way to do this, let me know
	  var interpolantX = new _MonotonicInterpolant2.default([0, 0.5, 1], [
	  // Dock to the left
	  offsetFromDragPreview.x,
	  // Align at the center
	  offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
	  // Dock to the right
	  offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
	  var interpolantY = new _MonotonicInterpolant2.default([0, 0.5, 1], [
	  // Dock to the top
	  offsetFromDragPreview.y,
	  // Align at the center
	  offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
	  // Dock to the bottom
	  offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
	  var x = interpolantX.interpolate(anchorX);
	  var y = interpolantY.interpolate(anchorY);

	  // Work around Safari 8 positioning bug
	  if ((0, _BrowserDetector.isSafari)() && isImage) {
	    // We'll have to wait for @3x to see if this is entirely correct
	    y += (window.devicePixelRatio - 1) * dragPreviewHeight;
	  }

	  return { x: x, y: y };
	}

/***/ }),

/***/ 1041:
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

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nativeTypesConfig;

	exports.createNativeDragSource = createNativeDragSource;
	exports.matchNativeItemType = matchNativeItemType;

	var _NativeTypes = __webpack_require__(1043);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
	  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
	    return resultSoFar || dataTransfer.getData(typeToTry);
	  }, null);

	  return result != null ? // eslint-disable-line eqeqeq
	  result : defaultValue;
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
	        console.warn( // eslint-disable-line no-console
	        'Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
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

/***/ 1043:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FILE = exports.FILE = '__NATIVE_FILE__';
	var URL = exports.URL = '__NATIVE_URL__';
	var TEXT = exports.TEXT = '__NATIVE_TEXT__';

/***/ }),

/***/ 1044:
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

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _ReactCSSTransitionGroup = __webpack_require__(1046);

	var _ReactCSSTransitionGroup2 = _interopRequireDefault(_ReactCSSTransitionGroup);

	var _selectable_set_table = __webpack_require__(1059);

	var _selectable_set_table2 = _interopRequireDefault(_selectable_set_table);

	var _droppable_selected_set = __webpack_require__(1061);

	var _droppable_selected_set2 = _interopRequireDefault(_droppable_selected_set);

	var _locked_selected_set = __webpack_require__(1067);

	var _locked_selected_set2 = _interopRequireDefault(_locked_selected_set);

	var _panel = __webpack_require__(768);

	var _set_panel = __webpack_require__(1068);

	var _set_panel2 = _interopRequireDefault(_set_panel);

	var _bottom_set_panel = __webpack_require__(1069);

	var _bottom_set_panel2 = _interopRequireDefault(_bottom_set_panel);

	var _add_set_form = __webpack_require__(1073);

	var _add_set_form2 = _interopRequireDefault(_add_set_form);

	var _font_awesome = __webpack_require__(767);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	var _user_message = __webpack_require__(884);

	var _user_message2 = _interopRequireDefault(_user_message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SetShaper = function SetShaper(_ref) {
	  var set = _ref.set,
	      resource = _ref.resource,
	      user_set_ids = _ref.user_set_ids;


	  var setName = set.attributes.name;
	  var resourceName = resource.attributes.name;
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

	  if (resource.attributes.locked) {
	    resourceName = _react2.default.createElement(
	      'span',
	      null,
	      resourceName,
	      ' ',
	      icon
	    );
	  }

	  return _react2.default.createElement(
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
	          "Set Browser"
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
	            { style: { height: '280px', overflowY: 'scroll' } },
	            _react2.default.createElement(
	              'ul',
	              { className: 'nav nav-tabs', role: 'tablist' },
	              _react2.default.createElement(
	                'li',
	                { role: 'presentation', className: 'active' },
	                _react2.default.createElement(
	                  'a',
	                  { href: '#mySets', 'aria-controls': 'mySets', role: 'tab', 'data-toggle': 'tab' },
	                  'My Sets'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { role: 'presentation' },
	                _react2.default.createElement(
	                  'a',
	                  { href: '#allSets', 'aria-controls': 'allSets', role: 'tab', 'data-toggle': 'tab' },
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
	                _react2.default.createElement(_selectable_set_table2.default, { selectionType: 'top', setIdList: user_set_ids, hideOwner: true })
	              ),
	              _react2.default.createElement(
	                'div',
	                { role: 'tabpanel', className: 'tab-pane', id: 'allSets' },
	                _react2.default.createElement(_selectable_set_table2.default, { selectionType: 'top' })
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
	          _ReactCSSTransitionGroup2.default,
	          { transitionName: 'content', transitionEnterTimeout: 500, transitionLeave: false },
	          _react2.default.createElement(_set_panel2.default, { set: set, title: setName })
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
	            { style: { height: '320px', overflowY: 'scroll' } },
	            _react2.default.createElement(
	              'ul',
	              { className: 'nav nav-tabs', role: 'tablist' },
	              _react2.default.createElement(
	                'li',
	                { role: 'presentation', className: 'active' },
	                _react2.default.createElement(
	                  'a',
	                  { href: '#mySetsBottom', 'aria-controls': 'mySets', role: 'tab', 'data-toggle': 'tab' },
	                  'My Sets'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { role: 'presentation' },
	                _react2.default.createElement(
	                  'a',
	                  { href: '#sets', 'aria-controls': 'sets', role: 'tab', 'data-toggle': 'tab' },
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
	                _react2.default.createElement(_selectable_set_table2.default, { selectionType: 'bottom', setIdList: user_set_ids, hideOwner: true })
	              ),
	              _react2.default.createElement(
	                'div',
	                { role: 'tabpanel', className: 'tab-pane', id: 'sets' },
	                _react2.default.createElement(_selectable_set_table2.default, { selectionType: 'bottom' })
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
	          _react2.default.createElement(_bottom_set_panel2.default, { resource: resource, title: resourceName })
	        )
	      )
	    )
	  );
	};

	SetShaper.defaultProps = {
	  set: { attributes: { name: '' } },
	  resource: { attributes: { name: '' } }
	};

	exports.default = SetShaper;

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(335);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(333);
	var propTypesFactory = __webpack_require__(360);
	var PropTypes = propTypesFactory(React.isValidElement);

	var ReactTransitionGroup = __webpack_require__(1047);
	var ReactCSSTransitionGroupChild = __webpack_require__(1050);

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

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(335);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(333);
	var ReactTransitionChildMapping = __webpack_require__(1048);

	var propTypesFactory = __webpack_require__(360);
	var PropTypes = propTypesFactory(React.isValidElement);

	var emptyFunction = __webpack_require__(340);

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

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var flattenChildren = __webpack_require__(1049);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var KeyEscapeUtils = __webpack_require__(352);
	var traverseAllChildren = __webpack_require__(350);
	var warning = __webpack_require__(339);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(355);
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
	        ReactComponentTreeHook = __webpack_require__(355);
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(333);
	var ReactAddonsDOMDependencies = __webpack_require__(1051);

	var propTypesFactory = __webpack_require__(360);
	var PropTypes = propTypesFactory(React.isValidElement);

	var CSSCore = __webpack_require__(1057);
	var ReactTransitionEvents = __webpack_require__(1058);

	var onlyChild = __webpack_require__(368);

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

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactDOM = __webpack_require__(370);

	exports.getReactDOM = function () {
	  return ReactDOM;
	};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPerf;
	  var ReactTestUtils;

	  exports.getReactPerf = function () {
	    if (!ReactPerf) {
	      ReactPerf = __webpack_require__(1052);
	    }
	    return ReactPerf;
	  };

	  exports.getReactTestUtils = function () {
	    if (!ReactTestUtils) {
	      ReactTestUtils = __webpack_require__(1054);
	    }
	    return ReactTestUtils;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(335);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var ReactDebugTool = __webpack_require__(400);
	var lowPriorityWarning = __webpack_require__(1053);
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1053:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(372),
	    _assign = __webpack_require__(335);

	var EventConstants = __webpack_require__(1055);
	var EventPluginHub = __webpack_require__(379);
	var EventPluginRegistry = __webpack_require__(380);
	var EventPropagators = __webpack_require__(378);
	var React = __webpack_require__(333);
	var ReactDOM = __webpack_require__(370);
	var ReactDOMComponentTree = __webpack_require__(371);
	var ReactBrowserEventEmitter = __webpack_require__(443);
	var ReactInstanceMap = __webpack_require__(454);
	var ReactUpdates = __webpack_require__(393);
	var SyntheticEvent = __webpack_require__(390);
	var ReactShallowRenderer = __webpack_require__(1056);

	var findDOMNode = __webpack_require__(510);
	var invariant = __webpack_require__(343);
	var warning = __webpack_require__(339);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1055:
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
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

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(372),
	    _assign = __webpack_require__(335);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var React = __webpack_require__(333);
	var ReactCompositeComponent = __webpack_require__(457);
	var ReactDefaultBatchingStrategy = __webpack_require__(478);
	var ReactReconciler = __webpack_require__(396);
	var ReactReconcileTransaction = __webpack_require__(483);
	var ReactUpdates = __webpack_require__(393);

	var emptyObject = __webpack_require__(342);
	var getNextDebugID = __webpack_require__(465);
	var invariant = __webpack_require__(343);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1057:
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

	var invariant = __webpack_require__(343);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(334)))

/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(385);

	var getVendorPrefixedEventName = __webpack_require__(445);

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

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(516);

	var _index = __webpack_require__(542);

	var _reduxJsonApi = __webpack_require__(546);

	var _set_table = __webpack_require__(1060);

	var _set_table2 = _interopRequireDefault(_set_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(_ref, _ref2) {
	  var api = _ref.api,
	      selected = _ref.selected;
	  var setIdList = _ref2.setIdList,
	      selectionType = _ref2.selectionType;

	  var sets = api.sets.data;
	  if (Array.isArray(setIdList)) {
	    sets = sets.filter(function (s) {
	      return setIdList.includes(s.id);
	    });
	  } else {
	    sets = sets.slice();
	  }
	  sets.sort(function (a, b) {
	    return a.attributes.created_at.localeCompare(b.attributes.created_at);
	  });

	  return {
	    sets: sets,
	    selected_set: selected[selectionType]
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref3) {
	  var selectionType = _ref3.selectionType;

	  return {
	    onSetClick: function onSetClick(setId) {
	      dispatch((0, _index.select)(setId, selectionType));
	      dispatch((0, _index.fetchSetAndMaterials)(setId));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_set_table2.default);

/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(716);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _font_awesome = __webpack_require__(767);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SetTable = function SetTable(_ref) {
	  var sets = _ref.sets,
	      selected_set = _ref.selected_set,
	      onSetClick = _ref.onSetClick,
	      hideOwner = _ref.hideOwner;

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
	      sets.map(function (set, index) {
	        return _react2.default.createElement(SetRow, { set: set, selected: set.id == selected_set, onClick: onSetClick, key: index, hideOwner: hideOwner });
	      })
	    )
	  );
	};

	SetTable.defaultProps = {
	  selected_set: undefined
	};

	exports.default = SetTable;


	var SetRow = function SetRow(_ref2) {
	  var set = _ref2.set,
	      selected = _ref2.selected,
	      _onClick = _ref2.onClick,
	      hideOwner = _ref2.hideOwner;

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

	  return _react2.default.createElement(
	    'tr',
	    { className: trClass, style: { cursor: 'pointer' }, onClick: function onClick() {
	        return _onClick(set.id);
	      } },
	    _react2.default.createElement(
	      'td',
	      null,
	      set.attributes.name,
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

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(516);

	var _reactDnd = __webpack_require__(895);

	var _biomaterial_table = __webpack_require__(1062);

	var _droppable = __webpack_require__(1063);

	var _droppable2 = _interopRequireDefault(_droppable);

	var _item_types = __webpack_require__(1064);

	var _reduxJsonApi = __webpack_require__(546);

	var _index = __webpack_require__(542);

	var _index2 = __webpack_require__(1065);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var DroppableBiomaterialTable = (0, _droppable2.default)(_biomaterial_table.BiomaterialTable);

	var setTarget = {
	  drop: function drop(props, monitor, component) {
	    var dispatch = props.dispatch,
	        set = props.set;

	    var _monitor$getItem = monitor.getItem(),
	        biomaterial = _monitor$getItem.biomaterial,
	        selected = _monitor$getItem.selected;

	    if (!set.id) return;

	    var current_biomaterials = [];
	    var new_biomaterials = [];

	    var bm_mapper = function bm_mapper(bm) {
	      return { type: 'materials', id: bm.id };
	    };

	    if (set.relationships.materials.data) {
	      current_biomaterials = set.relationships.materials.data.map(bm_mapper);
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
	          data: [].concat(_toConsumableArray(current_biomaterials), _toConsumableArray(new_biomaterials))
	        }
	      }
	    };

	    return dispatch((0, _reduxJsonApi.updateEntity)(entity)).then(function () {
	      return dispatch((0, _index.clearSelection)());
	    }).then(function () {
	      return dispatch((0, _reduxJsonApi.readEndpoint)('sets/' + set.id + '?include=materials'));
	    });
	  }
	};

	function dropCollect(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget(),
	    isOver: monitor.isOver()
	  };
	}

	DroppableBiomaterialTable = (0, _reactDnd.DropTarget)(_item_types.ItemTypes.BIOMATERIAL, setTarget, dropCollect)(DroppableBiomaterialTable);

	DroppableBiomaterialTable = (0, _reactRedux.connect)()(DroppableBiomaterialTable);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    biomaterials: (0, _index2.getSelectedTopMaterials)(state),
	    materials: state.materials,
	    removeable: true
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onRemove: function onRemove(biomaterial) {
	      var set = ownProps.set;


	      var bm_filter = function bm_filter(bm) {
	        return bm.id != biomaterial.id;
	      };

	      var entity = {
	        type: set.type,
	        id: set.id,
	        relationships: {
	          materials: {
	            data: set.relationships.materials.data.filter(bm_filter)
	          }
	        }
	      };

	      dispatch((0, _reduxJsonApi.updateEntity)(entity)).then(function () {
	        return dispatch((0, _reduxJsonApi.readEndpoint)('sets/' + set.id + '?include=materials'));
	      });
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DroppableBiomaterialTable);

/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BiomaterialTable = exports.BiomaterialTableRow = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(716);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _font_awesome = __webpack_require__(767);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var BiomaterialTableRow = exports.BiomaterialTableRow = _react2.default.createClass({
	  displayName: 'BiomaterialTableRow',
	  getDefaultProps: function getDefaultProps() {
	    return {
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
	  },
	  render: function render() {
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
	});

	var BiomaterialTable = _react2.default.createClass({
	  displayName: 'BiomaterialTable',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      decorators: {
	        row: BiomaterialTableRow
	      }
	    };
	  },
	  render: function render() {
	    var _props2 = this.props,
	        decorators = _props2.decorators,
	        biomaterials = _props2.biomaterials,
	        materials = _props2.materials,
	        rest = _objectWithoutProperties(_props2, ['decorators', 'biomaterials', 'materials']);

	    var tableClass = (0, _classnames2.default)({
	      table: true,
	      'table-striped': true
	    });

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
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tbody',
	        null,
	        biomaterials.map(function (biomaterial, index) {
	          if (biomaterial.id in materials) {
	            biomaterial = materials[biomaterial.id];
	          }

	          return _react2.default.createElement(decorators.row, _extends({ key: index, index: index, biomaterial: biomaterial }, rest));
	        })
	      )
	    );
	  }
	});
	exports.BiomaterialTable = BiomaterialTable;

/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(369);

	var _classnames = __webpack_require__(716);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	exports.default = function (WrappedComponent) {

	  return _react2.default.createClass({
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

/***/ 1064:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ItemTypes = exports.ItemTypes = {
	  BIOMATERIAL: 'biomaterial'
	};

/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUserSets = exports.getSelectedBottomMaterials = exports.getSelectedTopMaterials = exports.getSelectedBottom = exports.getSelectedTop = undefined;

	var _reselect = __webpack_require__(1066);

	var _jwtDecode = __webpack_require__(543);

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
	var getSelectedTopMaterials = exports.getSelectedTopMaterials = (0, _reselect.createSelector)(getSelectedTop, getBiomaterials, findResourceRelationshipFactory('materials'));

	var getSelectedBottomMaterials = exports.getSelectedBottomMaterials = (0, _reselect.createSelector)(getSelectedBottom, getBiomaterials, findResourceRelationshipFactory('materials'));

	var getUserSets = exports.getUserSets = (0, _reselect.createSelector)(getUserEmail, getSets, function (email, sets) {
	  return sets.reduce(function (memo, set) {
	    if (set.attributes.owner_id === null) {
	      return memo;
	    }
	    if (set.attributes.owner_id === email) memo.push(set.id);
	    return memo;
	  }, []);
	});

/***/ }),

/***/ 1066:
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

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(516);

	var _biomaterial_table = __webpack_require__(1062);

	var _index = __webpack_require__(1065);

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

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _panel = __webpack_require__(768);

	var _locked_selected_set = __webpack_require__(1067);

	var _locked_selected_set2 = _interopRequireDefault(_locked_selected_set);

	var _droppable_selected_set = __webpack_require__(1061);

	var _droppable_selected_set2 = _interopRequireDefault(_droppable_selected_set);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SetPanel = function SetPanel(props) {
	  var set = props.set;
	  var title = props.title;
	  if (!set || !set.id) {
	    return _react2.default.createElement(
	      _panel.Panel,
	      { key: 'set-' },
	      _react2.default.createElement(_panel.Heading, { title: 'No set selected' })
	    );
	  }
	  return _react2.default.createElement(
	    _panel.Panel,
	    { key: 'set-' + set.id },
	    _react2.default.createElement(_panel.Heading, { title: title }),
	    _react2.default.createElement(
	      _panel.Body,
	      { style: { height: '424px', overflowY: 'scroll' } },
	      set.attributes.locked ? _react2.default.createElement(_locked_selected_set2.default, { set: set }) : _react2.default.createElement(_droppable_selected_set2.default, { set: set })
	    )
	  );
	};

	exports.default = SetPanel;

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _panel = __webpack_require__(768);

	var _draggable_selected_collection = __webpack_require__(1070);

	var _draggable_selected_collection2 = _interopRequireDefault(_draggable_selected_collection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BottomSetPanel = function BottomSetPanel(props) {
	  var resource = props.resource;
	  var title = props.title;
	  if (!resource || !resource.id) {
	    return _react2.default.createElement(
	      _panel.Panel,
	      { key: 'collection-' },
	      _react2.default.createElement(_panel.Heading, { title: 'No set selected' })
	    );
	  }

	  return _react2.default.createElement(
	    _panel.Panel,
	    { key: 'collection-' + resource.id },
	    _react2.default.createElement(_panel.Heading, { title: title }),
	    _react2.default.createElement(
	      _panel.Body,
	      { style: { height: '424px', overflowY: 'scroll' } },
	      _react2.default.createElement(_draggable_selected_collection2.default, null)
	    )
	  );
	};

	exports.default = BottomSetPanel;

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(516);

	var _reactDnd = __webpack_require__(895);

	var _index = __webpack_require__(542);

	var _reactOnclickoutside = __webpack_require__(1071);

	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

	var _draggable = __webpack_require__(1072);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _item_types = __webpack_require__(1064);

	var _index2 = __webpack_require__(1065);

	var _biomaterial_table = __webpack_require__(1062);

	var _font_awesome = __webpack_require__(767);

	var _font_awesome2 = _interopRequireDefault(_font_awesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

	var Wrapper = (0, _reactOnclickoutside2.default)(_react2.default.createClass({
	  displayName: 'Wrapper',
	  onClick: function onClick(biomaterial, index, evt) {
	    var _props = this.props,
	        dispatch = _props.dispatch,
	        biomaterials = _props.biomaterials;


	    dispatch((0, _index.storeItems)(biomaterials));

	    if (evt.metaKey) {
	      dispatch((0, _index.toggleItem)(index));
	    } else if (evt.shiftKey) {
	      dispatch((0, _index.shiftSelectItems)(index));
	    } else {
	      dispatch((0, _index.selectItem)(index));
	    }
	  },
	  handleClickOutside: function handleClickOutside() {
	    var dispatch = this.props.dispatch;

	    dispatch((0, _index.clearSelection)());
	  },
	  render: function render() {
	    var _props2 = this.props,
	        dispatch = _props2.dispatch,
	        rest = _objectWithoutProperties(_props2, ['dispatch']);

	    return _react2.default.createElement(_biomaterial_table.BiomaterialTable, _extends({ onClick: this.onClick }, rest));
	  }
	}));

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Wrapper);

/***/ }),

/***/ 1071:
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
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(332),__webpack_require__(369),__webpack_require__(766)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDom, createReactClass) {
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

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(369);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	exports.default = function (WrappedComponent, getPreviewNode) {

	  return _react2.default.createClass({
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

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(332);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(516);

	var _reduxJsonApi = __webpack_require__(546);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddSetForm = function AddSetForm(_ref) {
	  var dispatch = _ref.dispatch;

	  var input = void 0;

	  return _react2.default.createElement(
	    'form',
	    { onSubmit: function onSubmit(e) {

	        e.preventDefault();
	        if (!input.value) return;

	        var set = {
	          type: 'sets',
	          attributes: {
	            name: input.value.trim()
	          }
	        };

	        dispatch((0, _reduxJsonApi.createEntity)(set));
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

});