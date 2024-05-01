import Manager from './Manager.js'


export const projectArray = [];


let project = function (title){
    let task = [];
    const gettitle = () => title;
    const gettask = () => task;
    return {gettitle , gettask}
}

export function addproject(title){
 projectArray.push(project(title));
}



const proDialog = document.querySelector("dialog")
const proBtn = document.querySelector(".dialog-btn")
const proClsBtn = document.querySelector(".close")
const title = document.querySelector('#title')

proBtn.addEventListener('click' , () => {
    proDialog.showModal();
    console.log('hello')
})

proClsBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    addproject(title.value);
    for(let val of projectArray){
        console.log(val.gettitle())
    }
    Manager.showprojects();
    proDialog.close();
    title.value = "";
})







