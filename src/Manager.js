import { projectArray } from "./Project"


const Manager =  (() => {
    const showprojects = () => {
        const projectMain = document.querySelector('.projects-main')
        projectMain.innerHTML = ""
        const div = document.createElement('div')
        for(let i = 0; i < projectArray.length; i++){
        const button = document.createElement('button');
        button.innerHTML = `${projectArray[i].gettitle()}`
        div.appendChild(button);
        projectMain.appendChild(div)
        }
    }

return {showprojects}
}
)();

export default Manager
console.log('loaded')

