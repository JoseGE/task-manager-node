const { v4: uuidv4 } = require('uuid');
class TaskModel {
    id = '';
    description = '';
    completedDate = null;

    constructor(description) {
        this.id = uuidv4();
        this.description = description;
        this.completedDate = null;
    }
}

module.exports = TaskModel;