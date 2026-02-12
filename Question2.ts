interface Interface{
    tasks:string[];

    addTask(task:string):number;
    listTasks():void;
    deleteTask(task:string):number;


}

class Question  implements Interface {

    tasks: string[] = [];

    addTask(task: string): number {
        this.tasks.push(task);
        console.log(task + " has been added");
        return this.tasks.length;
    }

    listTasks(): void {
        this.tasks.forEach(task => console.log(task));
    }

    deleteTask(task: string): number {
        let index = this.tasks.indexOf(task);

        if (index === -1) {
            console.log("Task not found");
        } else {
            this.tasks.splice(index, 1);
            console.log(task + " has been deleted");
        }

        return this.tasks.length;
    }

}
let tasks = new Question();

tasks.addTask("Work");
tasks.addTask("Alice");
tasks.listTasks();
tasks.deleteTask("Alice");
tasks.deleteTask("Geoff");
