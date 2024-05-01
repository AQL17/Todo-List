import { projectArray } from "./Project";

let todo = function (name , description , priority , dueDate ){
    const getname = () => name;
    const getdescription = () => description;
    const getpriority = () => priority;
    const getdate = () => dueDate;


    return {getname , getdate , getdescription , getpriority}
}

function addtask(name , description , priority , dueDate , id){
    for (let i = 0; i < projectArray.length; i++){
        if (i === id){
        projectArray[i].gettask().push(todo(name , description , priority , dueDate ))
        }
    }
}

export{todo , addtask}

