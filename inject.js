
console.log("asdasd")

const buttons = {
    "Student Center":["Student Center"],
    "Class Search":["Class Search"],
    "Enrollment":["View My Assignments","Enrollment Dates","My Weekly Schedule","View My Exam Schedule","View My Class Attendance"],
    "Program Enrollment":["My Progression Report","My Course Planner","My Planned Enrollments","My Confirmed Enrollments"],
    "Academic Records":["My Course History","My Advisors"],
    "Work&Study":["My Profile","Application Status","Work History"],
    "Dormitory":["Requests"],
}
const links = {
    "Class Search":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_SS_CATALOG.HC_CLASS_SEARCH&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "View My Assignments":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SS_LAM_STD_GR_LST.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ENROLLMENT.HC_SS_LAM_STD_GR_LST_GBL1&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "Enrollment Dates":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_APPT.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ENROLLMENT.HC_SSR_SSENRL_APPT&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "My Weekly Schedule":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_SCHD_W.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ENROLLMENT.HC_SSR_SSENRL_SCHD_W_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "View My Exam Schedule":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_EXAM_L.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ENROLLMENT.HC_SSR_SSENRL_EXAM_L_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "View My Class Attendance":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/KU_CA_MENU.KU_CA_SSS_STATS.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ENROLLMENT.KU_CA_SSS_STATS_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "Account Inquiry":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSF_SS_ACCT_SUMM.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_FINANCES.HC_SF_ACCT_SUMM_SS_GBL1&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "Student Center":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HC_SSS_STUDENT_CENTER&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "My Course History":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSS_MY_CRSEHIST.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ACADEMIC_RECORDS.HC_SSS_MY_CRSEHIST_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "My Advisors":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.SSR_SSADVR.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_ACADEMIC_RECORDS.HC_SSR_SSADVR_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "My Progression Report":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SSR_PROG_ENRL_SS.SSR_PGTR_DE_CMP.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_PE_STUDENT.HC_SSR_PGTR_DE_CMP&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "My Course Planner":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SSR_PROG_ENRL_SS.SSS_PE_SS_PLNR.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_PE_STUDENT.HC_SSS_PE_SS_PLNR_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "My Planned Enrollments":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SSR_PROG_ENRL_SS.SSR_APT_SCHD_BLDR.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_PE_STUDENT.HC_SSR_APT_SCHD_BLDR_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "My Confirmed Enrollments":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SSR_PROG_ENRL_SS.SSR_SS_MY_CLASSES.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_PE_STUDENT.HC_SSR_SS_MY_CLASSES&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "My Profile":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/KU_WS_MNG.KU_WS_SS_PROFILE.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.KU_WORK_STUDY.KU_WS_SS_PROFILE&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "Application Status":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/KU_WS_MNG.KU_WS_SS_A_STATUS.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.KU_WORK_STUDY.KU_WS_SS_A_STATUS&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "Work History":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/KU_WS_MNG.KU_WS_SS_WRK_HRS.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.KU_WORK_STUDY.KU_WS_SS_WRK_HRS&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
    "Requests":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SSR_RS_SELFSERV_MGMT.SSS_RS_STDNT_REQ.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCSR_REQUEST_MGMT.HC_SSS_RS_STDNT_REQ_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder",
}

let logo = document.getElementById("kuhdrlogo")
logo.addEventListener("click",()=>{
    window.location.replace("https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/h/?tab=DEFAULT");
})
logo.style.cursor = "pointer";

let x = Object.keys(buttons).length;
x = 85/x;

const button_width = `${x}%`;

const button_color = "whitesmoke"
const button_hover_color = "rgb(238, 238, 238)"
const button_text_color = "rgba(171,91,26,1)"
const button_hover_text_color = "rgba(171,91,26,1)"




let parent = document.body.children.item(1).firstElementChild
let bar = document.createElement("div")



//make bar
bar.style.height = "36px";
bar.style.backgroundColor = "snow";
bar.style.borderRadius = "4px";
bar.style.display = "flex";
bar.style.justifyContent = "space-evenly";
bar.style.overflowY = "visible";


for(i in buttons){
let buttonM = document.createElement("div")
buttonM.style.display = "flex";
buttonM.style.width = button_width;
buttonM.style.height = "fit-content";
buttonM.style.alignContent = "center";
buttonM.style.justifyContent = "center";
buttonM.style.flexDirection = "column";
// buttonM.style.paddingLeft = "2px";
// buttonM.style.paddingRight = "2px";
// buttonM.style.backgroundColor =  "red";
buttonM.style.overflow ="hidden";
let button = document.createElement("div")
button.style.width = "95%";
button.style.display = "flex";
button.style.flexDirection = "column";
button.style.borderWidth = "2px";
button.style.borderColor = "black";
button.style.borderStyle = "solid";
// button.style.paddingLeft = "10px";
// button.style.paddingRight = "10px";
button.innerText = i;
button.style.backgroundColor = button_color
button.style.color = button_text_color
button.style.borderRadius = "2px";
button.style.height = "fit-content";
button.style.minHeight = "32px";
button.style.zIndex = "99"
button.style.marginTop = "2px";
button.style.alignContent = "center";
button.style.justifyContent = "center";
button.style.alignSelf = "center";
button.style.justifySelf = "center";
// button.style.marginBottom = "2px";
button.style.textAlign = "center";
buttonM.appendChild(button)
buttonM.addEventListener("mouseenter",()=>{
let ls = buttons[buttonM.innerText];
for(j in buttons[buttonM.innerText]){
    let sbut = document.createElement("div")
    sbut.style.width = "95%";
    sbut.style.color = button_text_color
    // sbut.style.paddingLeft = "10px";
    // sbut.style.paddingRight = "10px";

    sbut.style.borderWidth = "2px";
    sbut.style.borderColor = "black";
    sbut.style.borderStyle = "solid";

    sbut.style.paddingTop = "3px";
    sbut.style.paddingBottom = "3px";
    sbut.style.alignSelf = "center";
    sbut.style.justifySelf = "center";
    console.log(ls,j)
    sbut.innerText = ls[j];
    sbut.style.backgroundColor = button_color
    sbut.style.borderRadius = "2px";
    sbut.style.height = "80%";
    sbut.style.marginTop = "0px";
    sbut.style.marginBottom = "0px";
    sbut.style.textAlign = "center"
    sbut.style.zIndex = "9000"
    sbut.style.position = "relative";
    sbut.style.cursor = "pointer";
    sbut.className =`sil_${button.innerText}`;
    sbut.id = "sil";

    sbut.addEventListener("mouseenter",()=>{
        sbut.style.backgroundColor = button_hover_color;
        sbut.style.color = button_hover_text_color;
    })
    sbut.addEventListener("mouseleave",()=>{
        sbut.style.backgroundColor = button_color;
        sbut.style.color = button_text_color;
    })


    let abut = document.createElement("div")
    abut.style.height = "3px";
    abut.style.width = "100%";
    abut.style.zIndex = "8999"
    abut.id = "silL";

    sbut.addEventListener("click",()=>{
        window.location.replace(links[sbut.innerText]);
    })
    buttonM.appendChild(abut);
    buttonM.appendChild(sbut);
    

}
})

buttonM.addEventListener("mouseleave",()=>{
    // console.log(document.getElementsByName(`sil_${button.innerText}`))
    let element = document.getElementById("sil");
    // console.log(element,"sil")
    while (element != null){
        // console.log(element,"sil")
        element.remove()
        element = document.getElementById("sil");    
    }
    let element2 = document.getElementById("silL");
    // console.log(element,"sil")
    while (element2 != null){
        // console.log(element,"sil")
        element2.remove()
        element2 = document.getElementById("silL");    
    }
})


bar.appendChild(buttonM);
}
//

let rim = document.getElementById("ptifrmcontent")
if(rim != null){
rim.parentElement.insertBefore(bar,rim.previousSibling)
}else{
parent.insertBefore(bar,parent.lastElementChild)
}





