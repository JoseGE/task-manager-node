require('colors');
const TaskModel = require("./taskModel");
class TasksModel {
    _list = {}

    constructor() {
        this._list = {};
    }

    get listArray() {
        const list = [];

        Object.keys(this._list).forEach(key => {
            list.push(this._list[key]);
        })

        return list;
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

    loadtaskFromDB(tasks = []) {
        for (const task of tasks) {
            this._list[task.id] = task;
        }
    }

    createTask(description = '') {
        const task = new TaskModel(description);
        this._list[task.id] = task;
    }

    showList() {
        let index = 1;

        for (const task of this.listArray) {
            const idx = `${index++}`.green;
            const { description, completedDate } = task;
            const state = (completedDate) ? 'COMPLETADA'.green : 'PENDIENTE'.red;
            console.log(`${idx} ${description} :: ${state}`);
        }
        // console.log(this._list);
    }

    showListPendingTask() {
        let index = 1;
        for (const task of this.listArray) {
            const { description, completedDate } = task;
            const state = (completedDate) ? 'COMPLETADA'.green : 'PENDIENTE'.red;

            if (!completedDate) {
                const idx = `${index++}`.green;
                console.log(`${idx} ${description} :: ${state}`);
            }
        }
    }
    showListCompletedTask() {
        let index = 1;
        for (const task of this.listArray) {
            const { description, completedDate } = task;
            const state = (completedDate) ? 'COMPLETADA'.green : 'PENDIENTE'.red;

            if (completedDate) {
                const idx = `${index++}`.green;
                console.log(`${idx} ${description} :: ${completedDate}`);
            }
        }
    }

    toggleState(taskId = []) {
        taskId.forEach(id => {
            const task = this._list[id];
            if (!task.completedDate) {
                task.completedDate = new Date().toISOString();
            }
        });

        this.listArray.forEach(task => {
            if (!taskId.includes(task.id)) {
                this._list[task.id].completedDate = null;
            }
        });
    }
}
module.exports = TasksModel;