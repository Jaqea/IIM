import * as caseCrfApi from '../api/caseCrf'
import { firstUpperCase, objToArr, objNum } from '../util/index'


//post所有
export function postAllServe(self, phyIdentity, data) {
    data.caseReportFormVO.subject_id = phyIdentity
    let crfAll = {
        caseReportFormVO: data.caseReportFormVO,
        crfDemographicInfoVO: data.crfDemographicInfoVO,
        crfImmuneInfoVO: {
            ana: data.crfImmuneInfoVO.arr[0].checked,
            ena_dsdna: data.crfImmuneInfoVO.arr[1].checked,
            ena_ssa: data.crfImmuneInfoVO.arr[2].checked,
            ena_ssb: data.crfImmuneInfoVO.arr[3].checked,
            ena_scl_70: data.crfImmuneInfoVO.arr[4].checked,
            ena_sm: data.crfImmuneInfoVO.arr[5].checked,
            ena_ui_rnp: data.crfImmuneInfoVO.arr[6].checked,
            rf: data.crfImmuneInfoVO.arr[31].checked,
            ccp: data.crfImmuneInfoVO.arr[32].checked,
            aca: data.crfImmuneInfoVO.arr[33].checked,
            anca_pr_3: data.crfImmuneInfoVO.arr[7].checked,
            anca_el: data.crfImmuneInfoVO.arr[8].checked,
            anca_mpo: data.crfImmuneInfoVO.arr[9].checked,
            anca_cat: data.crfImmuneInfoVO.arr[10].checked,
            anca_lf: data.crfImmuneInfoVO.arr[11].checked,
            anca_bpi: data.crfImmuneInfoVO.arr[12].checked,
            coombs: data.crfImmuneInfoVO.arr[34].checked,
            ama: data.crfImmuneInfoVO.arr[13].checked,
            lkm: data.crfImmuneInfoVO.arr[14].checked,
            lc_1: data.crfImmuneInfoVO.arr[15].checked,
            sla: data.crfImmuneInfoVO.arr[16].checked,
            sma: data.crfImmuneInfoVO.arr[17].checked,
            mda_5: data.crfImmuneInfoVO.arr[18].checked,
            srp: data.crfImmuneInfoVO.arr[19].checked,
            jo_1: data.crfImmuneInfoVO.arr[20].checked,
            mi_2: data.crfImmuneInfoVO.arr[21].checked,
            pl_7: data.crfImmuneInfoVO.arr[22].checked,
            pl_12: data.crfImmuneInfoVO.arr[23].checked,
            ej: data.crfImmuneInfoVO.arr[24].checked,
            ku: data.crfImmuneInfoVO.arr[25].checked,
            ro_52: data.crfImmuneInfoVO.arr[26].checked,
            pm_scl75: data.crfImmuneInfoVO.arr[27].checked,
            pm_scl100: data.crfImmuneInfoVO.arr[28].checked,
            tif1_y: data.crfImmuneInfoVO.arr[29].checked,
            nxp_2: data.crfImmuneInfoVO.arr[30].checked,
            igg: data.crfImmuneInfoVO.arr[35].value,
            iga: data.crfImmuneInfoVO.arr[36].value,
            igm: data.crfImmuneInfoVO.arr[37].value,
            ige: data.crfImmuneInfoVO.arr[38].value,
            cd3: data.crfImmuneInfoVO.arr[39].value,
            cd4: data.crfImmuneInfoVO.arr[40].value,
            cd8: data.crfImmuneInfoVO.arr[41].value,
            cd4_cd8: data.crfImmuneInfoVO.arr[42].value,
            c3: data.crfImmuneInfoVO.arr[43].value,
            c4: data.crfImmuneInfoVO.arr[44].value,
            esr: data.crfImmuneInfoVO.arr[45].value,
            crp: data.crfImmuneInfoVO.arr[46].value,
            tnf_a: data.crfImmuneInfoVO.arr[47].value,
            il_6: data.crfImmuneInfoVO.arr[48].value,
            nk: data.crfImmuneInfoVO.arr[49].value
        },
        crfCheckUpVO: data.crfCheckUpVO,
        crfMuscleInfoVO: {
            emg: data.crfMuscleInfoVO.arr[0].value,
            mf_var: data.crfMuscleInfoVO.arr[1].checked,
            mf_nec: data.crfMuscleInfoVO.arr[2].checked,
            lym_inf: data.crfMuscleInfoVO.arr[3].checked,
            li_site: data.crfMuscleInfoVO.arr[4].checked,
            sar_ihc: data.crfMuscleInfoVO.arr[5].checked,
            per_atr: data.crfMuscleInfoVO.arr[6].checked,
            enz_act: data.crfMuscleInfoVO.arr[7].value,
            spe_stain: data.crfMuscleInfoVO.arr[8].value,
            patho_diag: data.crfMuscleInfoVO.arr[9].value
        },
        crfRespiratoryInfoVO: {
            cough_eval: data.crfRespiratoryInfoVO.arr[0].value,
            dysp_eval: data.crfRespiratoryInfoVO.arr[1].value,
            is_ild: data.crfRespiratoryInfoVO.arr[2].value,
            is_pneu: data.crfRespiratoryInfoVO.arr[3].value,
            ild_grade: data.crfRespiratoryInfoVO.arr[4].value,
            pf_eval: data.crfRespiratoryInfoVO.arr[5].value,
            r_tumor_marker: data.crfRespiratoryInfoVO.arr[6].value,
            cct_result: data.crfRespiratoryInfoVO.arr[7].value,
            is_ild_treat: data.crfRespiratoryInfoVO.arr[8].checked,
            ild_treatmetn: JSON.stringify({
                药物类别: data.crfRespiratoryInfoVO.arr[9].checked,
                商品名: data.crfRespiratoryInfoVO.arr[10].checked,
                用法: data.crfRespiratoryInfoVO.arr[11].value,
                单次剂量: data.crfRespiratoryInfoVO.arr[12].value,
                "次/天": data.crfRespiratoryInfoVO.arr[13].value,
                疗程: data.crfRespiratoryInfoVO.arr[14].value,
                依从性: data.crfRespiratoryInfoVO.arr[15].value
            }),
            is_pah: data.crfRespiratoryInfoVO.arr[16].checked,
            pap: data.crfRespiratoryInfoVO.arr[17].value,
            is_pah_treat: data.crfRespiratoryInfoVO.arr[18].checked,
            pah_treatment: JSON.stringify({
                名称: data.crfRespiratoryInfoVO.arr[19].checked,
                用法: data.crfRespiratoryInfoVO.arr[20].value,
                单次剂量: data.crfRespiratoryInfoVO.arr[21].value,
                "次/天": data.crfRespiratoryInfoVO.arr[22].value,
                疗程: data.crfRespiratoryInfoVO.arr[23].value,
                依从性: data.crfRespiratoryInfoVO.arr[24].value
            })
        },
        crfCirculatoryInfoVO: {
            cf_grade: data.crfCirculatoryInfoVO.arr[0].value,
            lv: data.crfCirculatoryInfoVO.arr[1].value,
            la: data.crfCirculatoryInfoVO.arr[2].value,
            rv: data.crfCirculatoryInfoVO.arr[3].value,
            ra: data.crfCirculatoryInfoVO.arr[4].value,
            ivs: data.crfCirculatoryInfoVO.arr[5].value,
            lvpw: data.crfCirculatoryInfoVO.arr[6].value,
            aao: data.crfCirculatoryInfoVO.arr[7].value,
            mpa: data.crfCirculatoryInfoVO.arr[8].value,
            emv: data.crfCirculatoryInfoVO.arr[9].value,
            amv: data.crfCirculatoryInfoVO.arr[10].value,
            av: data.crfCirculatoryInfoVO.arr[11].value,
            pv: data.crfCirculatoryInfoVO.arr[12].value,
            em: data.crfCirculatoryInfoVO.arr[13].value,
            am: data.crfCirculatoryInfoVO.arr[14].value,
            emv_em: data.crfCirculatoryInfoVO.arr[15].value,
            edd: data.crfCirculatoryInfoVO.arr[16].value,
            esd: data.crfCirculatoryInfoVO.arr[17].value,
            edv: data.crfCirculatoryInfoVO.arr[18].value,
            esv: data.crfCirculatoryInfoVO.arr[19].value,
            sv: data.crfCirculatoryInfoVO.arr[20].value,
            ef: data.crfCirculatoryInfoVO.arr[21].value,
            fs: data.crfCirculatoryInfoVO.arr[22].value,
            usg_diag: data.crfCirculatoryInfoVO.arr[23].value,
            dcg_data: data.crfCirculatoryInfoVO.arr[24].value,
            dcg_diag: data.crfCirculatoryInfoVO.arr[25].value,
            c_mri_diag: data.crfCirculatoryInfoVO.arr[26].value,
            ck_mb: data.crfCirculatoryInfoVO.arr[27].value,
            troponin: data.crfCirculatoryInfoVO.arr[28].value,
            myoglobin: data.crfCirculatoryInfoVO.arr[29].value,
            bnp: data.crfCirculatoryInfoVO.arr[30].value,
            chol: data.crfCirculatoryInfoVO.arr[31].value,
            hdl: data.crfCirculatoryInfoVO.arr[32].value,
            ldl: data.crfCirculatoryInfoVO.arr[33].value,
            tg: data.crfCirculatoryInfoVO.arr[34].value
        },
        digestiveInfoVO: {
            ds_us_diag: data.digestiveInfoVO.arr[0].value,
            ds_ctmir_diag: data.digestiveInfoVO.arr[1].value,
            alt: data.digestiveInfoVO.arr[2].value,
            ast: data.digestiveInfoVO.arr[3].value,
            tbil: data.digestiveInfoVO.arr[4].value,
            dbil: data.digestiveInfoVO.arr[5].value,
            ibil: data.digestiveInfoVO.arr[6].value,
            ck: data.digestiveInfoVO.arr[7].value,
            ldh: data.digestiveInfoVO.arr[8].value,
            hbdh: data.digestiveInfoVO.arr[9].value,
            d_tumor_marker: data.digestiveInfoVO.arr[10].value
        },
        crfUrinaryInfoVO: {
            u_usctmir_diag: data.crfUrinaryInfoVO.arr[0].value,
            crea: data.crfUrinaryInfoVO.arr[1].value,
            bun: data.crfUrinaryInfoVO.arr[2].value,
            ua: data.crfUrinaryInfoVO.arr[3].value,
            d_tumor_marker: data.crfUrinaryInfoVO.arr[4].value
        },
        crfBloodInfoVO: {
            spep: data.crfBloodInfoVO.arr[0].value,
            ife: data.crfBloodInfoVO.arr[1].value,
            nkc_act: data.crfBloodInfoVO.arr[2].value,
            il_2r: data.crfBloodInfoVO.arr[3].value,
            fer: data.crfBloodInfoVO.arr[4].value,
            pt: data.crfBloodInfoVO.arr[5].value,
            aptt: data.crfBloodInfoVO.arr[6].value,
            inr: data.crfBloodInfoVO.arr[7].value,
            fib: data.crfBloodInfoVO.arr[8].value,
            d_dimer: data.crfBloodInfoVO.arr[9].value,
            fdp: data.crfBloodInfoVO.arr[10].value,
            hgb: data.crfBloodInfoVO.arr[11].value,
            plt: data.crfBloodInfoVO.arr[12].value,
            wbc: data.crfBloodInfoVO.arr[13].value,
            neu: data.crfBloodInfoVO.arr[14].value,
            lym: data.crfBloodInfoVO.arr[15].value,
            bms_diag: data.crfBloodInfoVO.arr[16].value,
            bmb_diag: data.crfBloodInfoVO.arr[17].value,
            pb_diag: data.crfBloodInfoVO.arr[18].value
        },
        crfVirusIndexVO: {
            eb_dna: data.crfVirusIndexVO.arr[0].value,
            eb_ab: data.crfVirusIndexVO.arr[1].value,
            cmv_dna: data.crfVirusIndexVO.arr[2].value,
            cmv_ab: data.crfVirusIndexVO.arr[3].value,
            hsv_ab: data.crfVirusIndexVO.arr[4].value,
            other_virus: data.crfVirusIndexVO.arr[5].value
        },
        crfOtherInfoVO: {
            mdaat: data.crfOtherInfoVO.arr[0].value,
            mdi: data.crfOtherInfoVO.arr[1].value
        },
        subSort: {
            criteria_1: data.subSort.subSort1[0].checked,
            criteria_2: data.subSort.subSort1[1].checked,
            criteria_3: data.subSort.subSort1[2].checked,
            criteria_4: data.subSort.subSort1[3].checked,
            criteria_5: data.subSort.subSort1[4].checked,
            criteria_6: data.subSort.subSort2[0].checked,
            criteria_7: data.subSort.subSort1[5].checked,
            criteria_8: data.subSort.subSort1[6].checked,
            criteria_9: data.subSort.subSort1[7].checked,
            criteria_10: data.subSort.subSort1[8].checked,
            criteria_11: data.subSort.subSort1[9].checked,
            criteria_12: data.subSort.subSort1[10].checked,
            criteria_13: data.subSort.subSort1[11].checked,
            criteria_14: data.subSort.subSort2[1].checked
        }
    }
    let data_new = {}
    for (let key in data)
        if (key != 'subSort')
            data_new[key] = crfAll[key]
    caseCrfApi['postcrfAll'](phyIdentity, data_new).then(res => {
        let result = res.data
        if (result.code == 200) {
            caseCrfApi['postsubSort'](phyIdentity, crfAll.subSort).then(res => {
                let result = res.data
                if (result.code == 200)
                    self.$message({
                        showClose: true,
                        message: "录入成功！"
                    })
                else
                    caseCrfApi['patchsubSort'](phyIdentity, crfAll.subSort).then(res => {
                        let result = res.data
                        if (result.code == 200)
                            self.$message({
                                showClose: true,
                                message: "录入成功！"
                            })
                    }).catch(error => {
                        console.log(error)
                    })
            }).catch(error => {
                console.log(error)
            })
        }
    }).catch(error => {
        console.log(error)
    })
}
//patch所有
export function patchAllServe(self, phyIdentity, phyTimes, data) {
    data.caseReportFormVO.subject_id = phyIdentity
    let crfAll = {
        caseReportFormVO: data.caseReportFormVO,
        crfDemographicInfoVO: data.crfDemographicInfoVO,
        crfImmuneInfoVO: {
            ana: data.crfImmuneInfoVO.arr[0].checked,
            ena_dsdna: data.crfImmuneInfoVO.arr[1].checked,
            ena_ssa: data.crfImmuneInfoVO.arr[2].checked,
            ena_ssb: data.crfImmuneInfoVO.arr[3].checked,
            ena_scl_70: data.crfImmuneInfoVO.arr[4].checked,
            ena_sm: data.crfImmuneInfoVO.arr[5].checked,
            ena_ui_rnp: data.crfImmuneInfoVO.arr[6].checked,
            rf: data.crfImmuneInfoVO.arr[31].checked,
            ccp: data.crfImmuneInfoVO.arr[32].checked,
            aca: data.crfImmuneInfoVO.arr[33].checked,
            anca_pr_3: data.crfImmuneInfoVO.arr[7].checked,
            anca_el: data.crfImmuneInfoVO.arr[8].checked,
            anca_mpo: data.crfImmuneInfoVO.arr[9].checked,
            anca_cat: data.crfImmuneInfoVO.arr[10].checked,
            anca_lf: data.crfImmuneInfoVO.arr[11].checked,
            anca_bpi: data.crfImmuneInfoVO.arr[12].checked,
            coombs: data.crfImmuneInfoVO.arr[34].checked,
            ama: data.crfImmuneInfoVO.arr[13].checked,
            lkm: data.crfImmuneInfoVO.arr[14].checked,
            lc_1: data.crfImmuneInfoVO.arr[15].checked,
            sla: data.crfImmuneInfoVO.arr[16].checked,
            sma: data.crfImmuneInfoVO.arr[17].checked,
            mda_5: data.crfImmuneInfoVO.arr[18].checked,
            srp: data.crfImmuneInfoVO.arr[19].checked,
            jo_1: data.crfImmuneInfoVO.arr[20].checked,
            mi_2: data.crfImmuneInfoVO.arr[21].checked,
            pl_7: data.crfImmuneInfoVO.arr[22].checked,
            pl_12: data.crfImmuneInfoVO.arr[23].checked,
            ej: data.crfImmuneInfoVO.arr[24].checked,
            ku: data.crfImmuneInfoVO.arr[25].checked,
            ro_52: data.crfImmuneInfoVO.arr[26].checked,
            pm_scl75: data.crfImmuneInfoVO.arr[27].checked,
            pm_scl100: data.crfImmuneInfoVO.arr[28].checked,
            tif1_y: data.crfImmuneInfoVO.arr[29].checked,
            nxp_2: data.crfImmuneInfoVO.arr[30].checked,
            igg: data.crfImmuneInfoVO.arr[35].value,
            iga: data.crfImmuneInfoVO.arr[36].value,
            igm: data.crfImmuneInfoVO.arr[37].value,
            ige: data.crfImmuneInfoVO.arr[38].value,
            cd3: data.crfImmuneInfoVO.arr[39].value,
            cd4: data.crfImmuneInfoVO.arr[40].value,
            cd8: data.crfImmuneInfoVO.arr[41].value,
            cd4_cd8: data.crfImmuneInfoVO.arr[42].value,
            c3: data.crfImmuneInfoVO.arr[43].value,
            c4: data.crfImmuneInfoVO.arr[44].value,
            esr: data.crfImmuneInfoVO.arr[45].value,
            crp: data.crfImmuneInfoVO.arr[46].value,
            tnf_a: data.crfImmuneInfoVO.arr[47].value,
            il_6: data.crfImmuneInfoVO.arr[48].value,
            nk: data.crfImmuneInfoVO.arr[49].value
        },
        crfCheckUpVO: data.crfCheckUpVO,
        crfMuscleInfoVO: {
            emg: data.crfMuscleInfoVO.arr[0].value,
            mf_var: data.crfMuscleInfoVO.arr[1].checked,
            mf_nec: data.crfMuscleInfoVO.arr[2].checked,
            lym_inf: data.crfMuscleInfoVO.arr[3].checked,
            li_site: data.crfMuscleInfoVO.arr[4].checked,
            sar_ihc: data.crfMuscleInfoVO.arr[5].checked,
            per_atr: data.crfMuscleInfoVO.arr[6].checked,
            enz_act: data.crfMuscleInfoVO.arr[7].value,
            spe_stain: data.crfMuscleInfoVO.arr[8].value,
            patho_diag: data.crfMuscleInfoVO.arr[9].value
        },
        crfRespiratoryInfoVO: {
            cough_eval: data.crfRespiratoryInfoVO.arr[0].value,
            dysp_eval: data.crfRespiratoryInfoVO.arr[1].value,
            is_ild: data.crfRespiratoryInfoVO.arr[2].value,
            is_pneu: data.crfRespiratoryInfoVO.arr[3].value,
            ild_grade: data.crfRespiratoryInfoVO.arr[4].value,
            pf_eval: data.crfRespiratoryInfoVO.arr[5].value,
            r_tumor_marker: data.crfRespiratoryInfoVO.arr[6].value,
            cct_result: data.crfRespiratoryInfoVO.arr[7].value,
            is_ild_treat: data.crfRespiratoryInfoVO.arr[8].checked,
            ild_treatmetn: JSON.stringify({
                药物类别: data.crfRespiratoryInfoVO.arr[9].checked,
                商品名: data.crfRespiratoryInfoVO.arr[10].checked,
                用法: data.crfRespiratoryInfoVO.arr[11].value,
                单次剂量: data.crfRespiratoryInfoVO.arr[12].value,
                "次/天": data.crfRespiratoryInfoVO.arr[13].value,
                疗程: data.crfRespiratoryInfoVO.arr[14].value,
                依从性: data.crfRespiratoryInfoVO.arr[15].value
            }),
            is_pah: data.crfRespiratoryInfoVO.arr[16].checked,
            pap: data.crfRespiratoryInfoVO.arr[17].value,
            is_pah_treat: data.crfRespiratoryInfoVO.arr[18].checked,
            pah_treatment: JSON.stringify({
                名称: data.crfRespiratoryInfoVO.arr[19].checked,
                用法: data.crfRespiratoryInfoVO.arr[20].value,
                单次剂量: data.crfRespiratoryInfoVO.arr[21].value,
                "次/天": data.crfRespiratoryInfoVO.arr[22].value,
                疗程: data.crfRespiratoryInfoVO.arr[23].value,
                依从性: data.crfRespiratoryInfoVO.arr[24].value
            })
        },
        crfCirculatoryInfoVO: {
            cf_grade: data.crfCirculatoryInfoVO.arr[0].value,
            lv: data.crfCirculatoryInfoVO.arr[1].value,
            la: data.crfCirculatoryInfoVO.arr[2].value,
            rv: data.crfCirculatoryInfoVO.arr[3].value,
            ra: data.crfCirculatoryInfoVO.arr[4].value,
            ivs: data.crfCirculatoryInfoVO.arr[5].value,
            lvpw: data.crfCirculatoryInfoVO.arr[6].value,
            aao: data.crfCirculatoryInfoVO.arr[7].value,
            mpa: data.crfCirculatoryInfoVO.arr[8].value,
            emv: data.crfCirculatoryInfoVO.arr[9].value,
            amv: data.crfCirculatoryInfoVO.arr[10].value,
            av: data.crfCirculatoryInfoVO.arr[11].value,
            pv: data.crfCirculatoryInfoVO.arr[12].value,
            em: data.crfCirculatoryInfoVO.arr[13].value,
            am: data.crfCirculatoryInfoVO.arr[14].value,
            emv_em: data.crfCirculatoryInfoVO.arr[15].value,
            edd: data.crfCirculatoryInfoVO.arr[16].value,
            esd: data.crfCirculatoryInfoVO.arr[17].value,
            edv: data.crfCirculatoryInfoVO.arr[18].value,
            esv: data.crfCirculatoryInfoVO.arr[19].value,
            sv: data.crfCirculatoryInfoVO.arr[20].value,
            ef: data.crfCirculatoryInfoVO.arr[21].value,
            fs: data.crfCirculatoryInfoVO.arr[22].value,
            usg_diag: data.crfCirculatoryInfoVO.arr[23].value,
            dcg_data: data.crfCirculatoryInfoVO.arr[24].value,
            dcg_diag: data.crfCirculatoryInfoVO.arr[25].value,
            c_mri_diag: data.crfCirculatoryInfoVO.arr[26].value,
            ck_mb: data.crfCirculatoryInfoVO.arr[27].value,
            troponin: data.crfCirculatoryInfoVO.arr[28].value,
            myoglobin: data.crfCirculatoryInfoVO.arr[29].value,
            bnp: data.crfCirculatoryInfoVO.arr[30].value,
            chol: data.crfCirculatoryInfoVO.arr[31].value,
            hdl: data.crfCirculatoryInfoVO.arr[32].value,
            ldl: data.crfCirculatoryInfoVO.arr[33].value,
            tg: data.crfCirculatoryInfoVO.arr[34].value
        },
        digestiveInfoVO: {
            ds_us_diag: data.digestiveInfoVO.arr[0].value,
            ds_ctmir_diag: data.digestiveInfoVO.arr[1].value,
            alt: data.digestiveInfoVO.arr[2].value,
            ast: data.digestiveInfoVO.arr[3].value,
            tbil: data.digestiveInfoVO.arr[4].value,
            dbil: data.digestiveInfoVO.arr[5].value,
            ibil: data.digestiveInfoVO.arr[6].value,
            ck: data.digestiveInfoVO.arr[7].value,
            ldh: data.digestiveInfoVO.arr[8].value,
            hbdh: data.digestiveInfoVO.arr[9].value,
            d_tumor_marker: data.digestiveInfoVO.arr[10].value
        },
        crfUrinaryInfoVO: {
            u_usctmir_diag: data.crfUrinaryInfoVO.arr[0].value,
            crea: data.crfUrinaryInfoVO.arr[1].value,
            bun: data.crfUrinaryInfoVO.arr[2].value,
            ua: data.crfUrinaryInfoVO.arr[3].value,
            d_tumor_marker: data.crfUrinaryInfoVO.arr[4].value
        },
        crfBloodInfoVO: {
            spep: data.crfBloodInfoVO.arr[0].value,
            ife: data.crfBloodInfoVO.arr[1].value,
            nkc_act: data.crfBloodInfoVO.arr[2].value,
            il_2r: data.crfBloodInfoVO.arr[3].value,
            fer: data.crfBloodInfoVO.arr[4].value,
            pt: data.crfBloodInfoVO.arr[5].value,
            aptt: data.crfBloodInfoVO.arr[6].value,
            inr: data.crfBloodInfoVO.arr[7].value,
            fib: data.crfBloodInfoVO.arr[8].value,
            d_dimer: data.crfBloodInfoVO.arr[9].value,
            fdp: data.crfBloodInfoVO.arr[10].value,
            hgb: data.crfBloodInfoVO.arr[11].value,
            plt: data.crfBloodInfoVO.arr[12].value,
            wbc: data.crfBloodInfoVO.arr[13].value,
            neu: data.crfBloodInfoVO.arr[14].value,
            lym: data.crfBloodInfoVO.arr[15].value,
            bms_diag: data.crfBloodInfoVO.arr[16].value,
            bmb_diag: data.crfBloodInfoVO.arr[17].value,
            pb_diag: data.crfBloodInfoVO.arr[18].value
        },
        crfVirusIndexVO: {
            eb_dna: data.crfVirusIndexVO.arr[0].value,
            eb_ab: data.crfVirusIndexVO.arr[1].value,
            cmv_dna: data.crfVirusIndexVO.arr[2].value,
            cmv_ab: data.crfVirusIndexVO.arr[3].value,
            hsv_ab: data.crfVirusIndexVO.arr[4].value,
            other_virus: data.crfVirusIndexVO.arr[5].value
        },
        crfOtherInfoVO: {
            mdaat: data.crfOtherInfoVO.arr[0].value,
            mdi: data.crfOtherInfoVO.arr[1].value
        },
        subSort: {
            criteria_1: data.subSort.subSort1[0].checked,
            criteria_2: data.subSort.subSort1[1].checked,
            criteria_3: data.subSort.subSort1[2].checked,
            criteria_4: data.subSort.subSort1[3].checked,
            criteria_5: data.subSort.subSort1[4].checked,
            criteria_6: data.subSort.subSort2[0].checked,
            criteria_7: data.subSort.subSort1[5].checked,
            criteria_8: data.subSort.subSort1[6].checked,
            criteria_9: data.subSort.subSort1[7].checked,
            criteria_10: data.subSort.subSort1[8].checked,
            criteria_11: data.subSort.subSort1[9].checked,
            criteria_12: data.subSort.subSort1[10].checked,
            criteria_13: data.subSort.subSort1[11].checked,
            criteria_14: data.subSort.subSort2[1].checked
        }
    }
    let data_new = {}
    for (let key in data)
        if (key != 'subSort')
            data_new[key] = crfAll[key]
    caseCrfApi['patchcrfAll'](phyIdentity, phyTimes, data_new).then(res => {
        let result = res.data
        if (result.code == 200) {
            caseCrfApi['postsubSort'](phyIdentity, crfAll.subSort).then(res => {
                let result = res.data
                if (result.code == 200)
                    self.$message({
                        showClose: true,
                        message: "更改成功！"
                    })
                else
                    caseCrfApi['patchsubSort'](phyIdentity, crfAll.subSort).then(res => {
                        let result = res.data
                        if (result.code == 200)
                            self.$message({
                                showClose: true,
                                message: "更改成功！"
                            })
                    }).catch(error => {
                        console.log(error)
                    })
            }).catch(error => {
                console.log(error)
            })
        }
    }).catch(error => {
        console.log(error)
    })
}



//封装单个post服务
export function postServe(self, activeName, phyIdentity, phyTimes, data) {
    let data_new = ''
    switch (activeName) {
        case 'crfSubject':
            data_new = data
            break
        case 'crfDemograph':
            data_new = data
            break
        case 'subBehavior':
            let arr = data.arr
            data_new = {
                has_mw: arr[0].checked,
                mw_site: arr[0].value,
                has_mp: arr[1].checked,
                mp_site: arr[1].value,
                has_js: arr[2].checked,
                js_site: arr[2].value,
                has_rash: arr[3].checked,
                has_hs: arr[4].checked,
                has_gs: arr[5].checked,
                has_vts: arr[6].checked,
                has_ss: arr[7].checked,
                has_mh: arr[8].checked,
                has_pe: arr[9].checked,
                has_dysp: arr[10].checked,
                has_tuss: arr[11].checked,
                has_cough: arr[12].checked,
                sputum_color: arr[12].value,
                has_cd: arr[18].checked,
                has_bh: arr[19].checked,
                is_exhausted: arr[20].checked,
                has_at: arr[21].checked,
                has_cp: arr[13].checked,
                chest_pd: arr[13].value,
                has_syn: arr[14].checked,
                syn_duration: arr[14].value,
                has_ama: arr[22].checked,
                has_ap: arr[15].checked,
                ap_site: arr[15].value,
                has_diar: arr[16].checked,
                diar_freq: arr[16].value,
                has_nau: arr[34].checked,
                vomit_freq: arr[34].value,
                has_us: arr[23].checked,
                has_oli: arr[24].checked,
                has_anu: arr[25].checked,
                has_cs: arr[26].checked,
                has_ps: arr[27].checked,
                has_dysop: arr[28].checked,
                has_dysac: arr[29].checked,
                has_dysg: arr[30].checked,
                has_dysos: arr[31].checked,
                has_dysar: arr[32].checked,
                has_ga: arr[17].checked,
                gait_ac: arr[17].value,
                has_fever: arr[36].checked,
                max_temp: arr[36].value,
                fever_dura: arr[36].days,
                has_wl: arr[35].checked,
                lost_weight: arr[35].value,
                has_ce: arr[33].checked,
                other_symp: arr[37].value
            }
            break
        case 'subSort':
            data_new = {
                criteria_1: data.subSort1[0].checked,
                criteria_2: data.subSort1[1].checked,
                criteria_3: data.subSort1[2].checked,
                criteria_4: data.subSort1[3].checked,
                criteria_5: data.subSort1[4].checked,
                criteria_6: data.subSort2[0].checked,
                criteria_7: data.subSort1[5].checked,
                criteria_8: data.subSort1[6].checked,
                criteria_9: data.subSort1[7].checked,
                criteria_10: data.subSort1[8].checked,
                criteria_11: data.subSort1[9].checked,
                criteria_12: data.subSort1[10].checked,
                criteria_13: data.subSort1[11].checked,
                criteria_14: data.subSort2[1].checked
            }
            break
        default:
            break
    }
    caseCrfApi['post' + activeName](phyIdentity, phyTimes, data_new).then(res => {
        let result = res.data
        if (result.code == 200) {
            let data = result.data
            self.$message({
                showClose: true,
                message: "录入成功！"
            })
        }
    }).catch(error => {
        console.log(error)
    })
}

// 封装单个patch服务
export function patchServe(self, activeName, phyIdentity, phyTimes, data) {
    if (activeName != 'crfSubject') {
        let data_new = ''
        switch (activeName) {
            case 'crfDemograph':
                data_new = data
                break
            case 'crfDemograp1h':
                for (let key in data)
                    subSituation[key] = data[key]
                let local_treatment = JSON.stringify(data.local_treatment)
                let wch_treatment = JSON.stringify(data.wch_treatment)
                subSituation.local_treatment = local_treatment
                subSituation.wch_treatment = wch_treatment
                data_new = subSituation
                break
            case 'subBehavior':
                let arr = data.arr
                data_new = {
                    has_mw: arr[0].checked,
                    mw_site: arr[0].value,
                    has_mp: arr[1].checked,
                    mp_site: arr[1].value,
                    has_js: arr[2].checked,
                    js_site: arr[2].value,
                    has_rash: arr[3].checked,
                    has_hs: arr[4].checked,
                    has_gs: arr[5].checked,
                    has_vts: arr[6].checked,
                    has_ss: arr[7].checked,
                    has_mh: arr[8].checked,
                    has_pe: arr[9].checked,
                    has_dysp: arr[10].checked,
                    has_tuss: arr[11].checked,
                    has_cough: arr[12].checked,
                    sputum_color: arr[12].value,
                    has_cd: arr[18].checked,
                    has_bh: arr[19].checked,
                    is_exhausted: arr[20].checked,
                    has_at: arr[21].checked,
                    has_cp: arr[13].checked,
                    chest_pd: arr[13].value,
                    has_syn: arr[14].checked,
                    syn_duration: arr[14].value,
                    has_ama: arr[22].checked,
                    has_ap: arr[15].checked,
                    ap_site: arr[15].value,
                    has_diar: arr[16].checked,
                    diar_freq: arr[16].value,
                    has_nau: arr[34].checked,
                    vomit_freq: arr[34].value,
                    has_us: arr[23].checked,
                    has_oli: arr[24].checked,
                    has_anu: arr[25].checked,
                    has_cs: arr[26].checked,
                    has_ps: arr[27].checked,
                    has_dysop: arr[28].checked,
                    has_dysac: arr[29].checked,
                    has_dysg: arr[30].checked,
                    has_dysos: arr[31].checked,
                    has_dysar: arr[32].checked,
                    has_ga: arr[17].checked,
                    gait_ac: arr[17].value,
                    has_fever: arr[36].checked,
                    max_temp: arr[36].value,
                    fever_dura: arr[36].days,
                    has_wl: arr[35].checked,
                    lost_weight: arr[35].value,
                    has_ce: arr[33].checked,
                    other_symp: arr[37].value
                }
                break
            case 'subSort':
                data_new = {
                    criteria_1: data.subSort1[0].checked,
                    criteria_2: data.subSort1[1].checked,
                    criteria_3: data.subSort1[2].checked,
                    criteria_4: data.subSort1[3].checked,
                    criteria_5: data.subSort1[4].checked,
                    criteria_6: data.subSort2[0].checked,
                    criteria_7: data.subSort1[5].checked,
                    criteria_8: data.subSort1[6].checked,
                    criteria_9: data.subSort1[7].checked,
                    criteria_10: data.subSort1[8].checked,
                    criteria_11: data.subSort1[9].checked,
                    criteria_12: data.subSort1[10].checked,
                    criteria_13: data.subSort1[11].checked,
                    criteria_14: data.subSort2[1].checked
                }
                break
            default:
                break
        }
        caseCrfApi['post' + activeName](phyIdentity, phyTimes, data_new).then(res => {
            let result = res.data
            if (result.code == 200) {
                let data = result.data
                self.$message({
                    showClose: true,
                    message: "录入成功！"
                })
            } else {
                caseCrfApi['patch' + activeName](phyIdentity, phyTimes, data_new).then(res => {
                    let result = res.data
                    if (result.code == 200) {
                        self.$message({
                            showClose: true,
                            message: "修改成功！"
                        })
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }).catch(error => {
            console.log(error)
        })
    } else {
        data.subject_id = phyIdentity
        data.worker_id = self.$store.state.global.user.id
        caseCrfApi['patch' + activeName](data).then(res => {
            let result = res.data
            if (result.code == 200) {
                self.$message({
                    showClose: true,
                    message: "修改成功！"
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

//get服务

//所有信息
export function getcrfAllServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfAll(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {}
    }).catch(error => {
        console.log(error)
    })
}

//基本信息
export function getcrfSubjectServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfSubject(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfSubject = that.$form.default.caseCrf.default.crfSubject
            for (let key in crfSubject)
                crfSubject[key] = result.data[key]
        }
    }).catch(error => {
        console.log(error)
    })
}

//人口学信息
export function getcrfDemographServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfDemograph(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfDemograph = that.$form.default.caseCrf.default.crfDemograph
            for (let key in crfDemograph)
                crfDemograph[key] = result.data[key]
        }
    }).catch(error => {
        console.log(error)
    })
}

//一般情况和查体情况
export function getcrfCheckServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfCheck(phyIdentity, phyTimes).then(res => {
        let result = res.data
            // console.log(result)
        if (result.code == 200) {}
    }).catch(error => {
        console.log(error)
    })
}

//免疫系统
export function getcrfImmServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfImm(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfImm = that.$form.default.caseCrf.default.crfImm
            crfImm.arr[0].checked = result.data.ana;
            crfImm.arr[1].checked = result.data.ena_dsdna;
            crfImm.arr[2].checked = result.data.ena_ssa;
            crfImm.arr[3].checked = result.data.ena_ssb;
            crfImm.arr[4].checked = result.data.ena_scl_70;
            crfImm.arr[5].checked = result.data.ena_sm;
            crfImm.arr[6].checked = result.data.ena_ui_rnp;
            crfImm.arr[31].checked = result.data.rf;
            crfImm.arr[32].checked = result.data.ccp;
            crfImm.arr[33].checked = result.data.aca;
            crfImm.arr[7].checked = result.data.anca_pr_3;
            crfImm.arr[8].checked = result.data.anca_el;
            crfImm.arr[9].checked = result.data.anca_mpo;
            crfImm.arr[10].checked = result.data.anca_cat;
            crfImm.arr[11].checked = result.data.anca_lf;
            crfImm.arr[12].checked = result.data.anca_bpi;
            crfImm.arr[34].checked = result.data.coombs;
            crfImm.arr[13].checked = result.data.ama;
            crfImm.arr[14].checked = result.data.lkm;
            crfImm.arr[15].checked = result.data.lc_1;
            crfImm.arr[16].checked = result.data.sla;
            crfImm.arr[17].checked = result.data.sma;
            crfImm.arr[18].checked = result.data.mda_5;
            crfImm.arr[19].checked = result.data.srp;
            crfImm.arr[20].checked = result.data.jo_1;
            crfImm.arr[21].checked = result.data.mi_2;
            crfImm.arr[22].checked = result.data.pl_7;
            crfImm.arr[23].checked = result.data.pl_12;
            crfImm.arr[24].checked = result.data.ej;
            crfImm.arr[25].checked = result.data.ku;
            crfImm.arr[26].checked = result.data.ro_52;
            crfImm.arr[27].checked = result.data.pm_scl75;
            crfImm.arr[28].checked = result.data.pm_scl100;
            crfImm.arr[29].checked = result.data.tif1_y;
            crfImm.arr[30].checked = result.data.nxp_2;
            crfImm.arr[35].value = result.data.igg;
            crfImm.arr[36].value = result.data.iga;
            crfImm.arr[37].value = result.data.igm;
            crfImm.arr[38].value = result.data.ige;
            crfImm.arr[39].value = result.data.cd3;
            crfImm.arr[40].value = result.data.cd4;
            crfImm.arr[41].value = result.data.cd8;
            crfImm.arr[42].value = result.data.cd4_cd8;
            crfImm.arr[43].value = result.data.c3;
            crfImm.arr[44].value = result.data.c4;
            crfImm.arr[45].value = result.data.esr;
            crfImm.arr[46].value = result.data.crp;
            crfImm.arr[47].value = result.data.tnf_a;
            crfImm.arr[48].value = result.data.il_6;
            crfImm.arr[49].value = result.data.nk;
        }
    }).catch(error => {
        console.log(error)
    })
}


//肌肉组织

export function getcrfTissueServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfTissue(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfTissue = that.$form.default.caseCrf.default.crfTissue
            crfTissue.arr[0].value = result.data.emg;
            crfTissue.arr[1].checked = result.data.mf_var;
            crfTissue.arr[2].checked = result.data.mf_nec;
            crfTissue.arr[3].checked = result.data.lym_inf;
            crfTissue.arr[4].checked = result.data.li_site;
            crfTissue.arr[5].checked = result.data.sar_ihc;
            crfTissue.arr[6].checked = result.data.per_atr;
            crfTissue.arr[7].value = result.data.enz_act;
            crfTissue.arr[8].value = result.data.spe_stain;
            crfTissue.arr[9].value = result.data.patho_diag;
        }
    }).catch(error => {
        console.log(error)
    })
}


//呼吸系统

export function getcrfBreathServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfBreath(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfBreath = that.$form.default.caseCrf.default.crfBreath
            crfBreath.arr[0].value = result.data.cough_eval;
            crfBreath.arr[1].value = result.data.dysp_eval;
            crfBreath.arr[2].value = result.data.is_ild;
            crfBreath.arr[3].value = result.data.is_pneu;
            crfBreath.arr[4].value = result.data.ild_grade;
            crfBreath.arr[5].value = result.data.pf_eval;
            crfBreath.arr[6].value = result.data.r_tumor_marker;
            crfBreath.arr[7].value = result.data.cct_result;
            crfBreath.arr[8].checked = result.data.is_ild_treat;
            crfBreath.arr[9].checked = JSON.parse(result.data.ild_treatmetn)["药物类别"];
            crfBreath.arr[10].checked = JSON.parse(result.data.ild_treatmetn)["商品名"];
            crfBreath.arr[11].value = JSON.parse(result.data.ild_treatmetn)["用法"];
            crfBreath.arr[12].value = JSON.parse(result.data.ild_treatmetn)["单次剂量"];
            crfBreath.arr[13].value = JSON.parse(result.data.ild_treatmetn)["次/天"];
            crfBreath.arr[14].value = JSON.parse(result.data.ild_treatmetn)["疗程"];
            crfBreath.arr[15].value = JSON.parse(result.data.ild_treatmetn)["依从性"];
            crfBreath.arr[16].checked = result.data.is_pah;
            crfBreath.arr[17].value = result.data.pap;
            crfBreath.arr[18].checked = result.data.is_pah_treat;
            crfBreath.arr[19].checked = JSON.parse(result.data.pah_treatment)["名称"];
            crfBreath.arr[20].value = JSON.parse(result.data.pah_treatment)["用法"];
            crfBreath.arr[21].value = JSON.parse(result.data.pah_treatment)["单次剂量"];
            crfBreath.arr[22].value = JSON.parse(result.data.pah_treatment)["次/天"];
            crfBreath.arr[23].value = JSON.parse(result.data.pah_treatment)["疗程"];
            crfBreath.arr[24].value = JSON.parse(result.data.pah_treatment)["依从性"];
        }
    }).catch(error => {
        console.log(error)
    })
}


//循环系统
export function getcrfCycleServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfCycle(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfCycle = that.$form.default.caseCrf.default.crfCycle
            let list = objToArr(result.data)
            list.shift(0)
            for (let i = 0; i < list.length; i++)
                crfCycle.arr[i].value = list[i]
        }
    }).catch(error => {
        console.log(error)
    })
}


//消化系统
export function getcrfDigestServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfDigest(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfDigest = that.$form.default.caseCrf.default.crfDigest
            let list = objToArr(result.data)
            list.shift(0)
            for (let i = 0; i < list.length; i++)
                crfDigest.arr[i].value = list[i]
        }
    }).catch(error => {
        console.log(error)
    })
}


//泌尿系统
export function getcrfUrinaryServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfUrinary(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfUrinary = that.$form.default.caseCrf.default.crfUrinary
            let list = objToArr(result.data)
            list.shift(0)
            for (let i = 0; i < list.length; i++)
                crfUrinary.arr[i].value = list[i]
        }
    }).catch(error => {
        console.log(error)
    })
}


//血液系统
export function getcrfBloodServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfBlood(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfBlood = that.$form.default.caseCrf.default.crfBlood
            let list = objToArr(result.data)
            list.shift(0)
            for (let i = 0; i < list.length; i++)
                crfBlood.arr[i].value = list[i]
        }
    }).catch(error => {
        console.log(error)
    })
}


//病毒感染
export function getcrfVirusServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfVirus(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfVirus = that.$form.default.caseCrf.default.crfVirus
            let list = objToArr(result.data)
            list.shift(0)
            for (let i = 0; i < list.length; i++)
                crfVirus.arr[i].value = list[i]
        }
    }).catch(error => {
        console.log(error)
    })
}


//肌炎评分
export function getcrfTisScoreServe(phyIdentity, phyTimes, that) {
    caseCrfApi.getcrfTisScore(phyIdentity, phyTimes).then(res => {
        let result = res.data
        if (result.code == 200) {
            let crfTisScore = that.$form.default.caseCrf.default.crfTisScore
            let list = objToArr(result.data)
            list.shift(0)
            for (let i = 0; i < list.length; i++)
                crfTisScore.arr[i].value = list[i]
        }
    }).catch(error => {
        console.log(error)
    })
}

//受试者分类信息
export function getsubSortServe(phyIdentity, that) {
    caseCrfApi.getsubSort(phyIdentity).then(res => {
        let result = res.data
        if (result.code == 200) {
            let subSort = that.$form.default.caseCrf.default.subSort
            subSort.subSort1[0].checked = result.data.criteria_1;
            subSort.subSort1[1].checked = result.data.criteria_2;
            subSort.subSort1[2].checked = result.data.criteria_3;
            subSort.subSort1[3].checked = result.data.criteria_4;
            subSort.subSort1[4].checked = result.data.criteria_5;
            subSort.subSort2[0].checked = result.data.criteria_6;
            subSort.subSort1[5].checked = result.data.criteria_7;
            subSort.subSort1[6].checked = result.data.criteria_8;
            subSort.subSort1[7].checked = result.data.criteria_9;
            subSort.subSort1[8].checked = result.data.criteria_10;
            subSort.subSort1[9].checked = result.data.criteria_11;
            subSort.subSort1[10].checked = result.data.criteria_12;
            subSort.subSort1[11].checked = result.data.criteria_13;
            subSort.subSort2[1].checked = result.data.criteria_14;
        }
    }).catch(error => {
        console.log(error)
    })
}