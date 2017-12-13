#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');
var prettyjson = require('prettyjson');

program
    .arguments('<command>')
    .option('-l, --location <location>', 'The failure location')
    .action(function(command) {
        fs.readFile(`${command}.json`, 'utf8', function (err, data) {
            if (err) throw err;
            console.log(JSON.stringify(JSON.parse(data)));
        });
    })
    .parse(process.argv);



