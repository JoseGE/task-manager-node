
require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer');


console.clear();

const main = async () => {
    console.log("Hola Mundo");
    let opt = '';
    do {
        opt = await inquirerMenu();
        if (opt !== '0') await pause();
    } while (opt !== '0');

}

main();