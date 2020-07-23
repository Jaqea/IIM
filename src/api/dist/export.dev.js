"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postExport = postExport;

//导出数据API
function postExport(excel) {
  return service.post("/p1/excel/crf", excel, {
    responseType: "blob"
  });
}