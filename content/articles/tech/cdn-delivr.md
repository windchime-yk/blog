---
title: 'npmパッケージをCDNで配信する方法'
description: '2019年くらいに書いた記事の復刻ですが、今も運用で使ってるので載せました'
date: '2020/11/01'
---

はじめまして。WhyKです。趣味で作りたいものを作ってる人です。  
今回は、npmパッケージを自作したときに、どうやってCDNに配信したかを書こうと思います。   
**※今回、すでにnpmパッケージの環境ができているものに一手間加えてCDN配信をするためのものなので、一からnpmパッケージを作る方は他の方の記事で環境を整えたあとにご覧いただければと思います。**

## 開発に必要不可欠なもの・こと
- babel-preset-transform-remove-export
- package.jsonのCDN向けカスタマイズ

### babel-preset-transform-remove-export
今回の開発では、Babelを使用します。`babel-preset-transform-remove-export`を下記のコマンドでインストールしてください。Babelについては特に制限はありませんが、`@babel/cli`での動作は確認しています。
``` bash
npm i -D babel-preset-transform-remove-export
```
TypeScriptで開発している方は、別途`@babel/preset-typescript`をインストールして`.babelrc`の`presets`に追記してください。

このパッケージで注意してほしいことですが、名前のとおりJavaScriptファイル（またはTypeScriptファイル）からexportを取り除くのですが、export以降を全部取り除いてしまうので、スクリプトの最後に`export FunctionHogehoge`という形にしないと処理もゴッソリ持っていかれてしまいます。
``` javascript
export function hogehoge() {
  // do anything
}
```
はダメですが、
``` javascript
function hogehoge() {
  // do anything
}

export { hogehoge }
```
は問題ありません。

#### npm scriptsを追記
次に、CDNに配信するためのJavaScriptファイルを作成するコマンドを記述します。私はnpm scriptsで記述しました。
``` json
"build:cdn": "babel <コンパイルの対象ファイル> -o <出力ファイル名> --plugins babel-plugin-transform-remove-export"
```
コマンド上で`babel-plugin-transform-remove-export`の指定をしているのは、`.babelrc`がnpm向けでも使われる場合を想定したためです。npm向けで`typescript`パッケージを使う方は`.babelrc`の`plugins`に入れてもいいと思います。  
ちなみに、`build:cdn`という名前になっているのは、npm向けのファイル出力をする`build:npm`と合わせて`npm-run-all`を使って並列実行するためです。あくまで私はそうしているだけなので、コマンドの名前は自由で問題ありません。

### package.jsonのCDN向けカスタマイズ
最後に、CDNに使うファイルをpackage.jsonで指定します。  
今回配信するCDNはunpkgとjsDelivrになります。
``` json
  "main": "<npm向けの出力ファイル>",
  "unpkg": "<CDN向けの出力ファイル>",
  "jsdelivr": "<CDN向けの出力ファイル>",
```
mainは、npmパッケージ本体が使われるときに引き出されるファイルです。その下に記述すれば問題ありません。  
上記を記述した状態で`npm publish`を行なうと、指定のサービスにファイルが提供されます。

## 終わりに
以上が、私がnpmパッケージをCDN配信するために使った2つのことです。  
今回の行程は、新しいパッケージをインストールしてpackage.jsonに追記するだけのものなので、npmパッケージとしてリリースしたあとでも、環境構築の段階でも簡単に入れられるかと思います。

お役に立てば幸いです。