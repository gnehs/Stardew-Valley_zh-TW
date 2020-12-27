const parseString = require('xml2js').parseString;
const fs = require('fs')
var xml = fs.readFileSync(process.argv[2])
var resultFile =
{
    "header": {
        "target": "w",
        "formatVersion": 5,
        "hidef": true,
        "compressed": 128
    },
    "readers": [
        {
            "type": "Microsoft.Xna.Framework.Content.SpriteFontReader, Microsoft.Xna.Framework.Graphics, Version=4.0.0.0, Culture=neutral, PublicKeyToken=842cf8be1de50553",
            "version": 0
        },
        {
            "type": "Microsoft.Xna.Framework.Content.Texture2DReader, Microsoft.Xna.Framework.Graphics, Version=4.0.0.0, Culture=neutral, PublicKeyToken=842cf8be1de50553",
            "version": 0
        },
        {
            "type": "Microsoft.Xna.Framework.Content.ListReader`1[[Microsoft.Xna.Framework.Rectangle, Microsoft.Xna.Framework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=842cf8be1de50553]]",
            "version": 0
        },
        {
            "type": "Microsoft.Xna.Framework.Content.RectangleReader",
            "version": 0
        },
        {
            "type": "Microsoft.Xna.Framework.Content.ListReader`1[[System.Char, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]",
            "version": 0
        },
        {
            "type": "Microsoft.Xna.Framework.Content.CharReader",
            "version": 0
        },
        {
            "type": "Microsoft.Xna.Framework.Content.ListReader`1[[Microsoft.Xna.Framework.Vector3, Microsoft.Xna.Framework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=842cf8be1de50553]]",
            "version": 0
        },
        {
            "type": "Microsoft.Xna.Framework.Content.Vector3Reader",
            "version": 0
        }
    ],
    "content": {
        "texture": {
            "format": 5,
            "export": "SmallFont.zh-CN.png"
        },
        "glyphs": [],//done
        "cropping": [],//done?
        "characterMap": [],//done
        "verticalLineSpacing": 28,
        "horizontalSpacing": -1,
        "kerning": [],//?
        "defaultCharacter": "*"
    }
}
parseString(xml, function (err, result) {
    console.dir(result.font.chars[0].char);
    for (let { $ } of result.font.chars[0].char) {
        console.log($)
        resultFile.content.characterMap.push(String.fromCharCode($.id))
        resultFile.content.glyphs.push({
            "x": $.x,
            "y": $.y,
            "width": $.width,
            "height": $.height
        })
        /*resultFile.content.cropping.push({
            "x": $.x,
            "y": $.y,
            "width": $.width,
            "height": $.height
        })
        resultFile.content.kerning.push({
            x: $.xoffset,
            y: $.yoffset,
            z: $.xadvance
        })*/
    }
    fs.writeFileSync(process.argv[2] + '.json', JSON.stringify(resultFile))
});
