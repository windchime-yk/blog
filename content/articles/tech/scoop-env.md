---
title: 'Scoopを使ってWindows開発環境を整える'
description: 'パッケージマネージャーにすべて丸投げして、楽して開発環境を整える話です'
date: '2020/11/01'
---

WhyKです。この記事はDropboxを漁ってたら見つけたので、供養がてら載せておきます。確か、2018年に出す予定だった記事です。  
今もWindowsでScoopを使って環境構築していますが、そんなに変わってないと思います（Scoopのインストールコマンドは変わっていたので書き換えました）

さて、今回はScoopという便利なパッケージマネージャーを使って開発環境を整備します。Macでいう、Homebrewの立ち位置にあるソフトウェアのことです。  
ちなみに、自分はChocolateyとPowerShellのパッケージマネージャーは使ったことないので、比較するコンテンツは皆無です。あしからず。

## 導入の経緯
前々から、Scoopという便利なパッケージマネージャーがあることは聞いていました。しかし自分は、「Nodistだけあれば充分だなー。Node.jsしか使わないし」と思って導入を先送りにしていました。  
そうこうしているうちにScoopのことなどすっかり忘れてたんですが、最近になってPythonやGolangなどを利用する機会があり、そこでexeファイルをダウンロードする面倒な工程を踏むのに疲れていました。Golangなんて、GOPATH通すのに2日かかりましたからね。2回目の環境構築はそれで挫折しましたし。  
環境構築で挫折するなんて真っ平御免だー！  
そう思っていた折に、batというCLIのREADMEを読んでたら「Scoopでインストールしてね！（意訳）」って書かれてたんですよ。そこでScoopを思い出して、「パッケージマネージャーに環境構築を全てぶん投げればいいのでは？」というすごく簡単な結論に行き着いて、Scoopによる開発環境の再構築に着手しました。

### 自分の現環境で、Scoopを使って入れたもの
* nodejs-lts
* bat
* flutter
* go
* pandoc
* python
* tar

Gitもあるので入れようと思ったんですけど、それは今保留状態です。  
ちなみに、後述しますがextrasバケットを追加することでfirefoxとかhyperとかvscodeとか入れられます。pandocもextrasバケットがないと入れられません。

ということで、今回はnodejs-ltsをインストールすることを目標に作業を進めていきます！٩( 'ω' )و

## Scoopのインストール
まずは、Scoopをインストールします。[公式サイト](https://scoop.sh/)にも書いてあるんですが、PowerShellに下記のコードをコピペしてPowerShellにペーストください。
``` powershell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
```
もしエラーが出たら、
```
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```
を入れれば無事にインストールされるかと思います。`scoop -v`と入れてバージョン情報が表示されればインストール成功です。

## ScoopでNode.js(LTS)をインストール
次に、今のScoopの環境にnodejs-ltsがあるかを確認します。
```
scoop search nodejs-lts
```
とPowerShellに入れてください。
おそらく、

```
PS C:\Users\user> scoop search nodejs-lts
'main' bucket:
    nodejs-lts (8.11.4)
```
となると思います。

これが終わったら、次にNode.jsのインストールをしていきます。  
インストールは簡単。

```
scoop install nodejs-lts
```
しばらくすると緑色で「インストール成功！（意訳）」と表示されますので、
```
node -v
```
と入力してみてください。これでバージョン情報が出たら終了です！ お疲れ様でした！

## おまけ
### その他のコマンド
#### アンインストールする
```
scoop uninstall パッケージ名
```
#### 更新する
```
scoop update
```
#### インストールしたものをリストで出す
```
scoop list
```

### インストールできる種類を増やす

### コマンドを短くしてみる
scoopには`scoop alias`というコマンドが存在します。このコマンドによってinstallコマンドやsearchコマンドを自分好みに短くすることができるのです！  
追加方法は簡単。
```
scoop alias add 使いたいコマンド名 そのコマンドを入れたら動作するコマンド 追加したコマンドの説明
```
と入れれば、すぐに使うことができます。

例えば、自分がscoop install～をscoop i～にしたいとします。  
そうした場合、PowerShellに
```
scoop alias add i 'scoop install $args[0]' 'Install an app'
```
と入れることで、scoop iでもscoop installと同等の機能を受けられるようになるのです。

### インストールで『SSL certificate problem～』と出て失敗したら
たとえば、scoopでインストールしたものを一括で更新したいと思ったときに
```
fatal: unable to access 'https://github.com/lukesampson/scoop/': SSL certificate problem: self signed certificate in certificate chain
```
と出た場合。  
原因はKasperskyです。Kasperskyが強制的にHTTPSで通信させようとすることで起こるエラーだとか。  
ともかく、Kasperskyユーザーはアップデートなどでこのエラーメッセージが出た場合、一度KasperskyをオフにしてからPowerShellを再起動させ、改めて同じコマンドを入れてみてください。

Kasperskyが入っている自分のPCでエラーが起き、調べたところKasperskyだと言う方が大多数なのでそのような結論を出していますが、もしかしたら他のウィルス対策ソフトでも同様のことが起きるかもしれません。そのときは同様に対処していただければと思います。

以上！  
ここまでお読みくださった方、ありがとうございましたー！