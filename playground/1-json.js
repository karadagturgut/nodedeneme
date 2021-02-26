const fs = require('fs');
const { string } = require('yargs');
const yargs = require('yargs')

switch (yargs.argv) {
    case "add":
        yargs.command({
            command: "add",
            describe: "Adding Note",
            fileName: {
                describe: "file name parameter",
                demandOption: true,
                type: string
            },
            ad: {
                describe: "name parameter",
                type: string
            },
            age: {
                describe: "age parameter",
                type: string
            },
            place: {
                type: string
            }
        })
        break;

    default:
        break;

}
try {
    const file = { name: yargs.argv.ad, age: yargs.argv.age, from: yargs.argv.place }
    fs.writeFileSync(`${yargs.argv.fileName}.json`, JSON.stringify(file));
    console.log("file created.");
} catch (error) {
    console.log(error)
}