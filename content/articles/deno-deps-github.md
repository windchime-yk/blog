---
title: 'Denoの自作モジュールをGitHubから配信する'
description: 'DenoはURLでのimportが基本なので、そんなこともできちゃいます'
tags: deno,github
---

## はじめに

最近、Deno v1.0.0がリリースされ、話題になっていたので、少し触ってみました。
その中で、自分で作った小さいモジュールをDenoで使おうとしたときにやったことをメモします。

## Denoとは

ザックリと説明しますと、Node.jsの作者さんが、Node.jsに関する10の反省点を踏まえて1から設計し直した新しいJavaScript/TypeScriptランタイムになります。  
以下の動画で、本人による説明がされています。時間がある方は御覧ください。
<contents-youtube content-id="M3BM9TB-8yA">

TypeScriptをデフォルトでサポートし、フラグで許可しない限りネットワークや環境変数のアクセスができないセキュアな仕組みが特徴です。

細かい説明や導入方法については、以下の記事がわかりやすかったので、読んでみてください！  
[Denoとはなにか - 実際につかってみる](https://qiita.com/azukiazusa/items/8238c0c68ed525377883)

## Denoのモジュールについて

Denoのモジュールは、公式が配信する[Standard Library](https://deno.land/std)とユーザーが作成した[Third Party Modules](https://deno.land/x)の2つがあります。  
Third Party Modulesは、公式リポジトリの[database.json](https://github.com/denoland/deno_website2/blob/master/database.json)を編集してプルリク出せば公式サイトから読み込めるようになるのですが、正直ここに載せるまでもないけど使いたい小さな自作モジュールがあったりしませんか？

その場合、GitHubにあげるだけで使えます。

## 本題

まず、使いたいモジュールを自分のリポジトリにプッシュします（ここでは、[私が作った簡単なモジュール](https://github.com/windchime-yk/deno-util)を例に使います）

次に、使いたいTypeScriptファイルまで移動し、そこのURLをコピーしてください。

最後に、そのURLの中にある`blob`を`raw`に書き換え、`import`に利用してください。

```typescript
import { extractObjectValue } from 'https://github.com/windchime-yk/deno-util/raw/master/mod.ts'
```

もし`raw`に書き換えないと、HTMLが読み込まれてエラーを吐きます。

以上の手順で、GitHubからDenoモジュールを読み込むことができます。  
それでは皆様、よいDenoライフを。