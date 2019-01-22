"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var marked = require("marked");
var program = require("commander");
var lodash_1 = require("lodash");
function insert_to_table(token, item) {
    var cells = token.cells.map(function (row) {
        var title = row[1].match(/\[.*\]/)[0];
        var url = row[1].match(/\(https.*\)/)[0];
        return {
            id: row[0],
            title: title.substring(1, title.length - 1),
            url: url.substring(1, url.length - 1),
            difficulty: row[3],
            have_md: /md/.test(row[2]),
        };
    });
    if (lodash_1.findIndex(cells, function (row) {
        return row.id == item.id;
    }) !== -1) {
        console.log('this item had insert');
        return cells;
    }
    cells.push(item);
    cells.sort(function (item1, item2) {
        return parseInt(item1.id) - parseInt(item2.id);
    });
    return cells;
}
program.option('-i, --id <id>', 'The leetcode No', function (id) {
    var readMe = fs.readFileSync('./README.md').toString();
    var tokens = marked.lexer(readMe);
    var table_token = tokens[3];
    var item = require('./src/' + id + '/index.js');
    var table_data = insert_to_table(table_token, item);
    var md_table_str = table_data.reduce(function (res, cur) {
        var row = "|" + cur.id + "|[" + cur.title + "](" + cur.url + ")|[link](/src/" + cur.id + "/index.js)|" + cur.difficulty + "|\n";
        if (cur.have_md) {
            row = "|" + cur.id + "|[" + cur.title + "](" + cur.url + ")|[link](/src/" + cur.id + "/index.md)|" + cur.difficulty + "|\n";
        }
        return res + row;
    }, '');
    var md_tempalte = fs.readFileSync('./README_TEMPLATE.md').toString();
    var new_readme_str = md_tempalte.replace('[table_data]', md_table_str);
    new_readme_str = new_readme_str.replace('[total]', table_data.length.toString());
    fs.writeFile('./README.md', new_readme_str, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('saved success');
    });
});
program.parse(process.argv);
//# sourceMappingURL=build.js.map