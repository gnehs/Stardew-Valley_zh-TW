const fs = require('fs')
var result = { "Format": "1.19.0", "Changes": [] }
function parseStrings(d) {
    for (let item of fs.readdirSync(d)) {
        if (item.startsWith('.') || item.endsWith('.md')) continue
        let itemPath = d + '/' + item
        if (fs.lstatSync(itemPath).isDirectory()) {
            parseStrings(itemPath)
        } else {
            // console.log('[LOAD]', itemPath)
            try {
                let Entries = require(itemPath).content;
                if (Array.isArray(Entries)) {
                    Entries = Entries.reduce((acc, curr) => (acc[curr] = null, acc), {});
                }
                result.Changes.push({
                    "Action": "EditData",
                    "Target": itemPath.replace('./Strings/', '').replace('.zh-CN.json', ''),
                    Entries
                })
            } catch (e) {
                console.log('[Failed]', itemPath)
                console.log(e)
            }
        }
    }
    return true
}
parseStrings('./Strings/Characters')
parseStrings('./Strings/Data')
parseStrings('./Strings/Strings')

function parseFonts(d) {
    for (let item of fs.readdirSync(d)) {
        if (item.startsWith('.') || item.endsWith('.md')) continue
        let itemPath = d + '/' + item
        try {
            result.Changes.push({
                "Action": "Load",
                "Target": itemPath.replace('./', '').replace('.xnb', ''),
                "FromFile": itemPath.replace('./', '')
            })
        } catch (e) {
            console.log('[Failed]', itemPath)
        }
    }
    return true
}
parseFonts('./Fonts')

function parseImgs(d) {
    for (let item of fs.readdirSync(d)) {
        if (item.startsWith('.') || item.endsWith('.md')) continue
        let itemPath = d + '/' + item
        if (fs.lstatSync(itemPath).isDirectory()) {
            parseImgs(itemPath)
        } else {
            // console.log('[LOAD]', itemPath)
            try {
                result.Changes.push({
                    "Action": "Load",
                    "Target": itemPath.replace('./Images/', '').replace('.png', ''),
                    "FromFile": itemPath.replace('./', '')
                })
            } catch (e) {
                console.log('[Failed]', itemPath)
                console.log(e)
            }
        }
    }
    return true
}
parseImgs('./Images')

fs.writeFileSync(
    'content.json',
    '// 這個檔案是由程式產生的，請勿直接修改\n' +
    '// 修改翻譯請參考 README.md\n' +
    JSON.stringify(result, null, '    '))