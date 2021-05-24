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

    createTask(description = '') {
        const task = new TaskModel(description);
        this._list[task.id] = task;
    }

}
module.exports = TasksModel;