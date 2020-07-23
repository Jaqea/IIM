import { getData } from '../api/statistics'
export function getStatistics(that) {
    getData().then(res => {
        let result = res.data
        if (result.code == 400) {
            that.$message({
                showClose: true,
                message: "权限不足，无法查看统计信息！",
                type: "error"
            });
        } else {
            let data = result.data
            that.dataStatus[0].personNum = data.num_subject;
            that.dataStatus[1].personNum = data.num_crf;
            that.dataStatus[2].personNum = data.num_p1;
            that.dataStatus[3].personNum = data.num_p2;
            that.dataView[0].personNum = data.num_new_subject_today;
            that.dataView[1].personNum = data.num_new_subject_month;
            that.dataView[2].personNum = data.num_new_crf_today;
            that.dataView[3].personNum = data.num_new_crf_month;
        }
    }).catch(error => {
        console.log(error)
    })
}