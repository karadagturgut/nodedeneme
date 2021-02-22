const fs = require('fs');
const { string } = require('yargs');
const yargs = require('yargs')

switch (yargs.argv) {
    case "add":
        yargs.command({
            command: "add",
            describe: "Ekleme Metodu",
            fileName: {
                describe: "dosya adı parametresi",
                demandOption: true,
                type: string
            },
            ad: {
                describe: "isim parametresi",
                type: string
            },
            age: {
                describe: "yaş parametresi",
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
    console.log("dosya oluşturuldu.");
} catch (error) {
    console.log(error)
}