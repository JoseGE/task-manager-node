
require('colors');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const dataFile = require('./helpers/dataFile');
const TasksModel = require('./models/tasksModel')

console.clear();

const main = async () => {

    let opt = '';
    const tasks = new TasksModel();
    const taskFromDB = dataFile.read();
    if (taskFromDB) {
        tasks.loadtaskFromDB(taskFromDB)
    }
    // await pause();

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const description = await readInput('Detalle de tarea: ')
                tasks.createTask(description);
                break;
            case '2':
                tasks.showList();
                break;
            case '3':
                tasks.showListCompletedTask();
                break;
            case '4':
                tasks.showListPendingTask();
                break;

            default:
                break;

        }
        dataFile.save(tasks.listArray);
        await pause();
    } while (opt !== '0');

}

main();