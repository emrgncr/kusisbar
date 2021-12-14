
console.log("asdasd")

const buttons = {
    "Class Search":["Class Search"],
    "Enrollment":["View My Assignments","Enrollment Dates","My Weekly Schedule","View My Exam Schedule","View My Class Attendance"],
}
const links = {
    "Class Search":"https://kusis.ku.edu.tr/psp/ps/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HCCC_SS_CATALOG.HC_CLASS_SEARCH&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder"
}

let parent = document.body.children.item(1).firstElementChild
let bar = document.createElement("div")
//make bar
bar.style.height = "30px";
bar.style.backgroundColor = "snow";
bar.style.borderRadius = "4px";
bar.style.display = "flex";
bar.style.justifyContent = "space-evenly";
bar.style.overflowY = "visible";



for(i in buttons){
let buttonM = document.createElement("div")
buttonM.style.display = "flex";
buttonM.style.width = "20%";
buttonM.style.height = "fit-content";
buttonM.style.alignContent = "center";
buttonM.style.flexDirection = "column";
let button = document.createElement("div")
button.style.width = "100%";
button.style.flexDirection = "column";
button.style.paddingLeft = "10px";
button.style.paddingRight = "10px";
button.innerText = i;
button.style.backgroundColor = "blue"
button.style.borderRadius = "3px";
button.style.height = "26px";
button.style.marginTop = "2px";
button.style.marginBottom = "2px";
button.style.textAlign = "center"
buttonM.appendChild(button)
buttonM.addEventListener("mouseenter",()=>{
let ls = buttons[buttonM.innerText];
for(j in buttons[buttonM.innerText]){
    let sbut = document.createElement("div")
    sbut.style.width = "100%";
    sbut.style.paddingLeft = "10px";
    sbut.style.paddingRight = "10px";
    sbut.style.paddingTop = "3px";
    sbut.style.paddingBottom = "3px";
    console.log(ls,j)
    sbut.innerText = ls[j];
    sbut.style.backgroundColor = "blue"
    sbut.style.borderRadius = "3px";
    sbut.style.height = "80%";
    sbut.style.marginTop = "0px";
    sbut.style.marginBottom = "0px";
    sbut.style.textAlign = "center"
    sbut.style.zIndex = "9000"
    sbut.style.position = "relative";
    sbut.style.cursor = "pointer";
    sbut.className =`sil_${button.innerText}`;
    sbut.id = "sil";
    let abut = document.createElement("div")
    abut.style.height = "3px";
    abut.style.width = "100%";
    abut.style.zIndex = "8999"
    abut.id = "silL";

    sbut.addEventListener("click",()=>{
        window.location.replace(links[sbut.innerText]);
    })

    buttonM.appendChild(sbut);
    buttonM.appendChild(abut);

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

parent.insertBefore(bar,parent.lastElementChild)


