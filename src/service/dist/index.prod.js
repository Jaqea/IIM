"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var loginServe=_interopRequireWildcard(require("./login")),_statistics=require("service/statistics"),caseServe=_interopRequireWildcard(require("./case")),caseBasicServe=_interopRequireWildcard(require("./caseBasic")),dataExportServe=_interopRequireWildcard(require("./dataExport")),manageServe=_interopRequireWildcard(require("./manage"));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache();if(r&&r.has(e))return r.get(e);var t,i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e){Object.prototype.hasOwnProperty.call(e,o)&&((t=a?Object.getOwnPropertyDescriptor(e,o):null)&&(t.get||t.set)?Object.defineProperty(i,o,t):i[o]=e[o])}return i.default=e,r&&r.set(e,i),i}var _default={loginServe:loginServe,getStatistics:_statistics.getStatistics,caseServe:caseServe,caseBasicServe:caseBasicServe,dataExportServe:dataExportServe,manageServe:manageServe};exports.default=_default;