const inquirer = require('inquirer');
require('colors');
const menuOptionQuestionsConfig = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tarea completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tarea pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
];


const inquirerMenu = async () => {
    console.clear();
    console.log("==========================".green);
    console.log("  Seleccione una opcion".green);
    console.log("==========================\n".green);
    const { option } = await inquirer.prompt(menuOptionQuestionsConfig)
    return option;
}

const pause = async () => {
    console.log('\n');
    await inquirer.prompt([
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.yellow} para continuar`,

        }
    ])
}

module.exports = {
    inquirerMenu,
    pause
}