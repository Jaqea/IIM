//病例数据API

export function getSubjectList(page) {
    return service.get("/subjects/brief-info?page-num=" + page * 1)
}