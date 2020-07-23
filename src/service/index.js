import * as loginServe from './login'

import { getStatistics } from 'service/statistics'

import * as caseServe from './case'

import * as caseBasicServe from './caseBasic'

import * as caseCrfServe from './caseCrf'

import * as dataExportServe from './dataExport'

import * as manageServe from './manage'


export default {
    loginServe,
    getStatistics,
    caseServe,
    caseBasicServe,
    caseCrfServe,
    dataExportServe,
    manageServe,
}