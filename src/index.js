import './style.css';


function project(name){
    const getname = () => name;
    let todolistArray = [];
    return {todolistArray , getname}
}


function todo(title , description , priority){
    const gettitle = () => title;
    const getdescription = () => description;
    const getpriority = () => priority;
    return {gettitle , getdescription , getpriority}
}


const manager = function (){
    let mainArray = [];

    const getArray = () => mainArray;
    addingProject('life');
    addingProject('life');

    function addingtodo(name , description , priority , pos){
        mainArray[pos].todolistArray.push(todo(name , description , priority))
    }
    addingtodo('work' , 'some work' , 5 , 1);
    addingtodo('work' , 'some work' , 5 , 0);
    addingtodo('health' , 'some work' , 5 , 1);


    function addingProject(name){
        mainArray.push(project(name));  
    }

    return {getArray};
}();

function test(name){
    let main = manager.getArray();
    mainArray.push(project(name));  
}


function display(){
    let main = manager.getArray();
    for(let i = 0; i < main.length; i++){
        console.log(main[i]);
        for(let j = 0; j < main[i].todolistArray.length; j++){
            console.log(main[i].todolistArray[j].gettitle());
        }
    }    
}
display();


