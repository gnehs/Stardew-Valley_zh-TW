# 字體檔
本語言包使用 [open 粉圓](https://justfont.com/huninn/) 字體
## 產生
### `Chinese.xnb` & `Chinese_<n>.xnb`
- 提取字體中可用之文字並輸出至 txt 文件檔（[參考](https://pastebin.pl/view/8bf741c1)）
- 使用 [fontbm](https://github.com/vladimirgamalyan/fontbm) 產出所需的圖片與 fmt 檔案
    ```sh
    fontbm --font-file jf-openhuninn-1.1.ttf --chars-file chrfile.done.txt --data-format xml --texture-width 1024 --texture-height 1024 --font-size 26  --output ChineseTW
    ```
- 使用 [xnbcli](https://github.com/LeonBlade/xnbcli) 解開相關檔案，替換上一步驟產出的檔案後，再打包回去
### `SmallFont.xnb` & `SpriteFont1.xnb`
- 提取字體中可用之文字並輸出至 txt 文件檔（[參考](https://pastebin.pl/view/8bf741c1)
- 使用 [`dotnet-mgcb-editor.3.8.0.1641.nupkg`](https://github.com/MonoGame/MonoGame/releases/tag/v3.8) 編譯字體檔案
    - [font.spritefont 範例](https://pastebin.pl/view/601e33b1)
    - macOS:
    - `cd /dotnet-mgcb-editor.3.8.0.1641/tools/netcoreapp3.1/any`
    - `dotnet mgcb.dll /build:font.spritefont /outputDir:opt`
    - 備註：編譯時間長達一小時左右，且編譯時沒有進度顯示，要有耐心捏。
- 使用 [XNBNode](https://github.com/draivin/XNBNode) 解開原版檔案與你編譯的檔案
    - 你會需要 Windows 來解開檔案
    - xnbcli 會解失敗所以才沒用他
- 將你編譯的檔案裡面 readers 的所有值替換為原版的
- 打包回去，收工！
