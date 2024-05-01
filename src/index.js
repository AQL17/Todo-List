import './style.css';
import { projectArray , addproject} from './Project';
import { addtask } from './Todo';
import Manager from './Manager.js'

addproject('Pink');
addproject('red');

addtask('hell' , 'test' , 1 , 7 , 1)
addtask('hell' , 'test' , 1 , 7 , 1)
addtask('hell' , 'test' , 1 , 7 , 0)

Manager.showprojects();

console.log(projectArray[0].gettask());
console.log(projectArray[1].gettask());




