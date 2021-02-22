const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const getNote = require('./notes');
const { demandOption } = require('yargs');
yargs.command({
    command: 'add',
    describe: "Not ekleme komutu",
    builder: {
        title: {
            describe: "Eklenecek not başlığıdır. String (yazı tipi) olmalıdır.",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Eklenecek not içeriğidir. String (yazı tipi) olmalıdır.",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        console.log("Not eklendi.")
        console.log(`Not başlığı: ${argv.title}`)
        console.log(`Not içeriği: ${argv.body}`)
    }
});
yargs.command({
    command: "remove",
    describe: "Not silme komutu",
    handler: function() {
        console.log("Not silindi.")
    }
});
yargs.command({
    command: "list",
    describe: "Not listeleme komutu",
    handler: function() {
        console.log("Not listelendi.")
    }
});
yargs.command({
    command: "read",
    describe: "Not okuma komutu",
    handler: function() {
        console.log("Not okuma.")
    }
});

var deneme = yargs.argv[0];