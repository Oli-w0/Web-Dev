//1.a
let myTasks:Array<string>=[];
//1.b
function addTask(task:string):number
{
    myTasks.push(task);
    console.log(task + "has been added to the task");
    return myTasks.length;
}
function listTasks():void
{
    for(let i = 0; i < myTasks.length; i++)
    {
        console.log(myTasks[i]);
    }
}
//1.c
function deleteTask(task:string):number
{
    let index = myTasks.indexOf(task);
    if(index === -1) {
        console.log("Task not found");
    }else
    {
        myTasks.splice(index, 1);
        console.log("Task deleted");
    }
    return myTasks.length;
}
addTask("Work");
addTask("Alice");
listTasks();
deleteTask("Alice");
deleteTask("Jeff");