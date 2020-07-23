import * as caseApi from '../api/case'

export function getSubjectListServe(page, that) {
    caseApi.getSubjectList(page).then(res => {
        let result = res.data
        if (result.code == 200) {
            let data = result.data
            that.subjectList = data
        }
    }).catch(error => {
        console.log(error)
    })
}