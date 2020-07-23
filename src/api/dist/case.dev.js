"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubjectList = getSubjectList;

//病例数据API
function getSubjectList(page) {
  return service.get("/subjects/brief-info?page-num=" + page * 1);
}