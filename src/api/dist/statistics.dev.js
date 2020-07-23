"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

//信息统计API
function getData(data) {
  return service.get('/p1/statistic-data');
}