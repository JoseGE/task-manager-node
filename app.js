
require('colors');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const TasksModel = require('./models/tasksModel')

console.clear();

const main = async () => {

    let opt = '';
    const tasks = new TasksModel();
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const description = await readInput('Detalle de tarea: ')
                tasks.createTask(description);
                break;
            case '2':
                console.log(tasks._list);
                break;

            default:
                break;

        }
        if (opt !== '0') await pause();
    } while (opt !== '0');

}

main();