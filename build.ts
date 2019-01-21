import * as fs from 'fs';
import * as marked from 'marked';
import * as program from 'commander';
import {findIndex} from 'lodash';

interface RowItem {
    id:string;
    title:string;
    url:string;
    difficulty:string;
    have_md:boolean;
}
function insert_to_table(token:any, item:RowItem):RowItem[]{
    const cells: RowItem[] = token.cells.map((row:string[]) => {
        const title = row[1].match(/\[.*\]/)[0];
        const url = row[1].match(/\(https.*\)/)[0];
        return {
            id:row[0],
            title:title.substring(1, title.length - 1),
            url:url.substring(1, url.length - 1),
            difficulty:row[3],
            have_md:/md/.test(row[2]),
        };
    });

    if (findIndex(cells, (row) => {
        return row.id == item.id;
    }) !== -1) {
        console.log('this item had insert');
        return cells;
    }
    cells.push(item);
    cells.sort((item1, item2) => {
        return parseInt(item1.id) - parseInt(item2.id);
    })
    return cells;
}

program.option('-i, --id <id>','The leetcode No', (id) => {
    const readMe = fs.readFileSync('./README.md').toString();
    const tokens = marked.lexer(readMe);
    const table_token = tokens[3];
    const item:RowItem = require('./src/' + id + '/index.js');
    const table_data = insert_to_table(table_token, item);
    const md_table_str = table_data.reduce((res, cur) => {
        let row = `|${cur.id}|[${cur.title}](${cur.url})|[link](/src/${cur.id}/index.js)|${cur.difficulty}|\n`;
        if (cur.have_md) {
            row = `|${cur.id}|[${cur.title}](${cur.url})|[link](/src/${cur.id}/index.md)|${cur.difficulty}|\n`;
        }
        return res + row;
    }, '');
    const md_tempalte = fs.readFileSync('./README_TEMPLATE.md').toString();
    let new_readme_str = md_tempalte.replace('[table_data]', md_table_str);
    new_readme_str = new_readme_str.replace('[total]', table_data.length.toString());
    fs.writeFile('./README.md', new_readme_str, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('saved success')
    });
});

program.parse(process.argv);
