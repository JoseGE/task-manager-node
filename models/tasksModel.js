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

    loadtaskFromDB(tasks = []) {
        for (const task of tasks) {
            this._list[task.id] = task;
        }
    }

    createTask(description = '') {
        const task = new TaskModel(description);
        this._list[task.id] = task;
    }

    showList({ completed = 0, pending = 0 }) {
        let index = 1;

        for (const task of this.listArray) {

            const { description, completedDate } = task;
            const state = (completedDate) ? 'COMPLETADA'.green : 'PENDIENTE'.red;
            if (completed) {
                const idx = `${index++}`.green;
                if (completedDate) {
                    console.log(`${idx} ${description} :: ${completedDate}`);
                }
            } else if (pending) {
                const idx = `${index++}`.green;
                if (!completedDate) {
                    console.log(`${idx} ${description} :: ${state}`);
                }
            } else {
                const idx = `${index++}`.green;

                console.log(`${idx} ${description} :: ${state}`);
            }

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

}
module.exports = TasksModel;