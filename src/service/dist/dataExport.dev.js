"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postExport = postExport;
exports.postExportServe = postExportServe;

var exportApi = _interopRequireWildcard(require("../api/export"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function postExport(excel) {
  return service.get("/subjects/brief-info?page-num=" + page * 1);
}

function postExportServe(excel, that) {
  var excel_new = {
    criteria_1: excel.subSort1[0].checked,
    criteria_2: excel.subSort1[1].checked,
    criteria_3: excel.subSort1[2].checked,
    criteria_4: excel.subSort1[3].checked,
    criteria_5: excel.subSort1[4].checked,
    criteria_6: excel.subSort2[0].checked,
    criteria_7: excel.subSort1[5].checked,
    criteria_8: excel.subSort1[6].checked,
    criteria_9: excel.subSort1[7].checked,
    criteria_10: excel.subSort1[8].checked,
    criteria_11: excel.subSort1[9].checked,
    criteria_12: excel.subSort1[10].checked,
    criteria_13: excel.subSort1[11].checked,
    criteria_14: excel.subSort2[1].checked
  };
  exportApi.postExport(excel_new).then(function (res) {
    if (res.status == 200) {
      var result = res.data;
      var name = res.headers["content-disposition"].split(";")[1].split("=")[1];
      var aLink = document.createElement("a");
      var blob = new Blob([result], {
        type: "application/vnd.ms-excel"
      });
      aLink.href = URL.createObjectURL(blob);
      aLink.download = name;
      aLink.click();
      document.body.appendChild(aLink);
      that.$message({
        type: 'success',
        message: '导出成功!'
      });
    } else that.$message({
      showClose: true,
      message: "服务器繁忙，请稍后再试",
      type: "error"
    });
  })["catch"](function (error) {
    console.log(error);
  });
}