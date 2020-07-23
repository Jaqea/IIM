import * as exportApi from '../api/export'


export function postExport(excel) {
    return service.get("/subjects/brief-info?page-num=" + page * 1)
}
export function postExportServe(excel, that) {
    let excel_new = {
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
    }
    exportApi.postExport(excel_new).then(res => {
        if (res.status == 200) {
            let result = res.data
            const name = res.headers["content-disposition"].split(";")[1].split("=")[1];
            const aLink = document.createElement("a");
            let blob = new Blob([result], {
                type: "application/vnd.ms-excel"
            });
            aLink.href = URL.createObjectURL(blob);
            aLink.download = name;
            aLink.click();
            document.body.appendChild(aLink);
            that.$message({
                type: 'success',
                message: '导出成功!'
            })
        } else
            that.$message({
                showClose: true,
                message: "服务器繁忙，请稍后再试",
                type: "error"
            });

    }).catch(error => {
        console.log(error)
    })
}