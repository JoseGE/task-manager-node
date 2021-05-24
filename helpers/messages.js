require('colors');

const showMenu = () => {
    return new Promise((resolve) => {
        console.clear()
        console.log("==========================".green);
        console.log("  Seleccione una opcion".green);
        console.log("==========================\n".green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tarea completadas`);
        console.log(`${'4.'.green} Listar tarea pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question('Seleccione una opncion: ', (opt) => {

            readLine.close();
            resolve(opt)
        });
    });
}

const pause = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\nPresione ${'ENTER'.yellow} para continuar`, (opt) => {

            readLine.close();
            resolve()
        });
    });

}

module.exports = {
    showMenu,
    pause
}