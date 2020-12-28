# Stardew Valley zh-TW（🚧開發中）
這裡是星露谷繁體中文語言包
## 下載
https://github.com/gnehs/Stardew-Valley_zh-TW/archive/%E8%B9%A6%E8%B9%A6.zip

- 目前適用星露谷版本 `1.15.1`
- 需要 SMAPI 與 ContentPatcher
- 下載並解壓縮後放到 `/Mods` 目錄即可
- 在非 Windows 系統上你可能需要 libgdiplus 才能正常運作
    - macOS: `brew install mono-libgdiplus`
## 貢獻指南
- 各個資料夾內都有相關 `README.md` 可供查閱
### 協助翻譯
#### 文本
- 請修改 `/Strings` 裡的檔案而不是 `content.json`
- 請按照 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines) 進行修改
#### 圖片
- 直接修改即可
### 關於 `content.json`
- 使用 `generateContent.js` 來產生 `content.json`
- 必須先安裝 [Node.js](https://nodejs.org/)
- 步驟：
    - `cd <path>`
    - `node generateContent.js` 
## 特別感謝
- [@coin3x](https://github.com/coin3x) 提供技術支援
- 部分圖片素材取自 [【討論】星露谷物語v1.4文本、介面和地圖繁體中文化 - 巴哈姆特](https://forum.gamer.com.tw/C.php?bsn=20774&snA=1660&tnum=29)
