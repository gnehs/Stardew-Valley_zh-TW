# 字體檔
本語言包使用 [open 粉圓](https://justfont.com/huninn/) 字體
## 產生
### `Chinese.xnb` & `Chinese_<n>.xnb`
1. 提取字體中可用之文字並輸出至 txt 文件檔（[參考](https://pastebin.pl/view/8bf741c1)）
1. 使用 [fontbm](https://github.com/vladimirgamalyan/fontbm) 產出所需的圖片與 fmt 檔案
```sh
fontbm --font-file jf-openhuninn-1.1.ttf --chars-file chrfile.done.txt --data-format xml --texture-width 1024 --texture-height 1024 --font-size 26  --output ChineseTW
```
1. 使用 [xnbcli](https://github.com/LeonBlade/xnbcli) 解開相關檔案，替換上一步驟產出的檔案後，再打包回去
### `SmallFont.xnb` & `SpriteFont1.xnb`
待補充