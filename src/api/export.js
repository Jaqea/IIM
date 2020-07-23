//导出数据API

export function postExport(excel) {
    return service.post("/p1/excel/crf", excel, {
        responseType: "blob"
    })
}