const yargs = require('yargs');
params = yargs.argv[0];


function command() {
    switch (params) {
        case 'add':
            yargs.command({
                command: 'add',
                describe: "Not ekleme komutu",
                handler: function() {
                    console.log("Not eklendi.")
                }

            });
            break;
        case "remove":
            yargs.command({
                command: "remove",
                describe: "Not silme komutu",
                handler: function() {
                    console.log("Not silindi.")

                }

            });
            break;
        case "list":
            yargs.command({
                command: "list",
                describe: "Not listeleme komutu",
                handler: function() {
                    console.log("Not listelendi.")

                }

            });
            break;
        case 'read':
            yargs.command({
                command: "read",
                describe: "Not okuma komutu",
                handler: function() {
                    console.log("Not okuma.")

                }

            });
            break;
        default:
            break;
    }
    var deneme = yargs.argv;
}

module.exports = command;