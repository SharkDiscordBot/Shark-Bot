# しゃーく

しゃーくBot

# しゃーく Backend

しゃーくBotのBackendプログラム

## 前提要件

本プログラムは下記の要件で動作します。

- Nodejs(v18を推奨)
- しゃーくAPIサーバー([repository](https://github.com/SharkDiscordBot/Shark-API))

## 動作確認環境

下記の環境で動作確認を行っています

- MacOS 13.0.1 (Intel)
- Nodejs v18.12.1

## 推奨動作確認

下記の環境での実行を推奨します

- 各Linuxディストリビューション
- MacOS
- WSL2 (Ubuntu)

## SSL(TLS)について

本APIサーバー運用時には暗号化通信を行うことを推奨します。 <br>
証明書はInit-SSL.shを実行することでcertkeysディレクトリに作成されます(Init-SSL.shを使用し証明書を作成される場合、ポート番号及び有効化切り替え以外のSSL設定は変更不要です)

## Licence

[MIT Licence](./LICENCE)

```
MIT Licence

Copyright (c) 2022 purapetino 

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
```