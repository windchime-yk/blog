---
title: 'Scoopを使ってWindows開発環境を整える'
description: 'パッケージマネージャーにすべて丸投げして、楽して開発環境を整える話です'
date: '2020/12/06'
---

WhyKです。この記事はDropboxを漁ってたら見つけたので、少しリライトして載せておきます。確か2018年に書いたものですが、今もそんなに変わってないと思うので（Scoopのインストールコマンドは変わっていたので書き換えました）

さて、今回はScoopという便利なパッケージマネージャーを使って開発環境を整備します。Macでいう、Homebrewの立ち位置にあるソフトウェアのことです。  
ちなみに、自分はChocolateyとPowerShellのパッケージマネージャーは使ったことないので、比較するコンテンツは皆無です。あしからず。

## 導入の経緯
※ ただの個人的経緯なので飛ばしてOKです

前々から、Scoopという便利なパッケージマネージャーがあることは聞いていました。しかし自分は、「Nodistだけあれば充分だなー。Node.jsしか使わないし」と思って導入を先送りにしていました。  
そうこうしているうちにScoopのことなどすっかり忘れてたんですが、最近になってPythonやGolangなどを利用する機会があり、そこでexeファイルをダウンロードする面倒な工程を踏むのに疲れていました。Golangなんて、GOPATH通すのに2日かかりましたからね。2回目の環境構築はそれで挫折しましたし。  
環境構築で挫折するなんて真っ平御免だー！  
そう思っていた折に、batというCLIのREADMEを読んでたら「Scoopでインストールしてね！（意訳）」って書かれてたんですよ。そこでScoopを思い出して、「パッケージマネージャーに環境構築を全てぶん投げればいいのでは？」というすごく簡単な結論に行き着いて、Scoopによる開発環境の再構築に着手しました。

### 自分の現環境で、Scoopを使って入れたもの
- bat（ファイルの中身を表示するcatの強化版）
- blender（フリーの3D制作ソフト）
- FiraCode（モノスペースなコーディング向けフォント）
- git（おなじみバージョン管理ツール）
- heroku-cli（PaaSであるHerokuのCLI）
- ngrok（localhostを外部公開するツール）
- nodejs-lts（おなじみJavaScriptランタイム）
- openssh（SSHプロトコルのソフトウェア）
- plantuml（ダイアグラム書くためのツール）
- python（機械学習でおなじみ動的型付けプログラミング言語）
- source-han-code-jp（プログラミング向けの日本語フォント）
- sudo（MacでおなじみsudoをWindowsでやるためのツール）
- touch（MacでおなじみtouchをWindowsでやるためのツール）
- yarn（Node.jsの依存関係管理ツール）

記事を書いた当時はFlutterとGolang入れてたんですが、しばらく触ってなかったので落としました。Pythonは確かNode GYP関係で入れっぱにしてます。

また、後述しますが、バケットというものを追加することでfirefoxとかvscodeが入れられます。

ということで、今回はnodejs-ltsをインストールすることを目標に、作業を進めていきます！٩( 'ω' )و

## Scoopのインストール
まずは、Scoopをインストールします。[公式サイト](https://scoop.sh/)にも書いてあるんですが、PowerShellに下記のコードをコピペしてください。
``` powershell
> Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
```
もしエラーが出たら、
``` powershell
> Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```
を入れれば無事にインストールされるかと思います。`scoop -v`と入れてバージョン情報が表示されればインストール成功です。

## ScoopでNode.js(LTS)をインストール
次に、今のScoopの環境にnodejs-ltsがあるかを確認します。
``` powershell
> scoop search nodejs-lts
```
とPowerShellに入れてください。
おそらく、

``` powershell
> scoop search nodejs-lts
'main' bucket:
    nodejs-lts (12.19.0)
```
となると思います。

これが終わったら、次にNode.jsのインストールをしていきます。  
インストールは簡単。

``` powershell
> scoop install nodejs-lts
```
しばらくすると緑色で「インストール成功！（意訳）」と表示されますので、
``` powershell
> node -v
```
と入力してみてください。これでバージョン情報が出たら終了です！ お疲れ様でした！

## おまけ
### その他のコマンド
#### アンインストールする
``` powershell
> scoop uninstall パッケージ名
```
#### 更新する
``` powershell
> scoop update
```
すべて更新するときは、`*`をつけます（私はだいたいこれで済ませてます）
``` powershell
> scoop update *
```
#### インストールしたものをリストで出す
``` powershell
> scoop list
```

### インストールできる種類を増やす
インストールするものは『バケット』というまとまりになっていて、ユーザーがバケットを増やすこともできます。  
デフォルトでは`main`というバケットが入っており、さらに公式で`extras`というバケットも用意されています。

正直、だいたいのソフトはこの2つに入っているのですが、それでも足りない場合は、GitHubで`scoop-bucket`というトピックを検索すれば他の人が作ったバケットを探すことができます。それでもなければ、自作しましょう。

#### 既存のバケットを入手する

#### バケットを自作する

### コマンドを短くしてみる
scoopには`scoop alias`というコマンドが存在します。このコマンドによってinstallコマンドやsearchコマンドを自分好みに短くすることができます。

追加方法は簡単。
``` powershell
> scoop alias add 使いたいコマンド名 そのコマンドを入れたら動作するコマンド 追加したコマンドの説明
```
と入れれば、すぐに使うことができます。

例えば、自分がscoop install～をscoop i～にしたいとします。  
そうした場合、PowerShellに
``` powershell
> scoop alias add i 'scoop install $args[0]' 'Install an app'
```
と入れることで、scoop iでもscoop installと同等の機能を受けられるようになるのです。

### インストールで『SSL certificate problem～』と出て失敗したら
たとえば、scoopでインストールしたものを一括で更新したいと思ったときに
``` powershell
fatal: unable to access 'https://github.com/lukesampson/scoop/': SSL certificate problem: self signed certificate in certificate chain
```
と出た場合。  
原因はKasperskyです。Kasperskyが強制的にHTTPSで通信させようとすることで起こるエラーだとか。  
ともかく、Kasperskyユーザーはアップデートなどでこのエラーメッセージが出た場合、一度KasperskyをオフにしてからPowerShellを再起動させ、改めて同じコマンドを入れてみてください。

Kasperskyが入っている自分のPCでエラーが起き、調べたところKasperskyだと言う方が大多数なのでそのような結論を出していますが、もしかしたら他のウィルス対策ソフトでも同様のことが起きるかもしれません。そのときは同様に対処していただければと思います。

以上！  
ここまでお読みくださった方、ありがとうございましたー！