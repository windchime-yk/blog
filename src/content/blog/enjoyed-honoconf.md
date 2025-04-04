---
title: Hono Confに参加しました
description: 非常に刺激を受けられる会でした。
publish_date: 2024/06/29
tags: [event_report, hono]
---

去る6月22日に開催されたHono Confに参加してきました。  
Honoは以前から愛用していていて、マルチランタイムであり移行の容易さや学習難度が低いこと、Middlewareが豊富なことで気に入っています。その集まりということで、以前から楽しみにしていました。  
関係ないですが、honoconfってキーボードで入力しやすいですね。

## 最初に
各登壇のボリュームが非常に大きかったので、ザックリとした感想で書いています。  
文意が異なる場合はご指摘ください。

## 各登壇について
### wataryさんの『[Adaptor, Helmet, SSG](https://speakerdeck.com/watany/adaptor-helmet-ssg)』
AWSのコミュニティで活動されていることもあって、AWS LambdaやLambda@edgeのAdaptorについての話が最初にあり、次にHelmetの話を飛ばしてSSGの話がありました。

SSGが閃きから生まれたものだと知って驚きました。マルチプラットフォームを考慮したカスタムファイルシステム実装がされているのは、Denoユーザーとしてありがたかったです。  
SSGのGAに向けて作業をされるという話もあったので、SSGのさらなる発展に期待したいです。

### Monicaさんの『[Third-Party Framework Development with Hono](https://slides.monica-dev.com/hono-conf-2024/#/1)』
Honoコミュニティをサードパーティとして盛り上げる話でした。  
v-tokyo meetupでお会いして少しお話をさせていただいたことがあったので、登壇を楽しみにしていた方です。Hono Storageを開発されている方ですね。

最初はHonoの数多のMiddlewareの紹介があり、改めてHonoのMiddlewareの豊富さを見せつけられました。  
個人的に、`@hono/oauth-providers` はDiscord認証を扱いたい私としては救いの一手になりそうで、早速試しています。ここで知ることができて良かったです。

ExpressからHonoに移行するMiddlewareについての構想も話されていて、非常に興味深かったです。業務でExpressに触れたことがあるので、そういった現場でHonoへの移行提案がしやすくなることを考えると、非常にHonoに資するMiddlewareになりそうだと感じました。  
個人的には最近NestJSの名前をよく聞くので、NestJSからの移行Middlewareはできるのだろうかと思ったのですが、あちらはデコレータで構築されているので難しいですかね……。

### nakasyouさんの『[Can Hono be Wrapper for Cross-Runtime?](https://docs.google.com/presentation/d/e/2PACX-1vQn_sST3TFh7MpouKX5c62ZAFtbeNGAnVrMy_FhdKs7qg1loFw41cV00WdftxOSrg/pub?start=false&loop=false&delayms=3000&slide=id.p1)』

まず、本当に中学生なんだという驚きがありました。Web上だと自称〇〇が溢れ返っているので、失礼な話ですが半信半疑だったんですよね。

WordPressを通してあらゆるサーバーで動くPHPをサーバー汎用言語と称し、あらゆるランタイムで動くJavaScriptを指して『令和のPHP』と呼ぶのは面白かったです。  
JavaScriptランタイムの差異が大きいことが悩ましいのは本当にそうで、Honoを使うとそれが解決できるというのは一人のユーザーとして非常に同意できる話でした。検証していくうちにCloudflare Workersへの移行を迫られたプロジェクトがあり、それがあまりに爆速で移行できた経験があるので、余計にそう感じました。

SSG Helperでのファイルシステム差異吸収をファイルシステムのHelperへと発展させる考えや、JavaScriptでセルフホストされる複数の分散型SNSのコードをHonoで統一する構想など、意欲的かつ面白そうな構想を数々話されていて、今後の活躍も楽しみです。

### Günther Brunnerさんの『[Why Choose Hono? Tech Stack for the Future](https://gunta.github.io/talks/1)』
Günther Brunnerさんが所属されているAI SHIFT社の技術選定と、未来の技術選定についてのお話でした。

未来の技術選定については、テスト容易性やAIとの親和性などで関数型プログラミングが主流になるという考えが興味深かったです。

その中で重要になるのがEffect-TSで、その中にあるZodの強力な代替となるEffect Schemaについてはイベント直前にMiddlewareとしてPRを出していて、スピード感に圧倒されました。  
個人的にEffect-TSは興味がありつつ触っていなかったので、これを機に触ってみたいです。

### sugar-catさんの『[Using Hono in B2B SaaS Application](https://speakerdeck.com/sugarcat7/using-hono-in-b2b-saas-application)』
こちらもAI SHIFT社の方で、APIサーバーをBunとTypeScriptとHonoで構築された話です。

生成AIが絡むので逐次出力のためにSSE helperを活用したり、RAGのためのファイルアップロードに`@hono/zod-openapi` などを活用した話をしてくださいました。  
生成AIが絡んだHonoの本番環境利用について、ユースケースを知ることができたのはありがたかったです。

### INARIさんの『[THE HACKS IN THE HANABI.REST PLAYGROUND](https://hono-conf.hanabi.rest/1)』
Honoで構築された生成AIによるAPI生成サービスの話なのですが、まず全員が学生というのが驚愕でした。  
v0を利用してデザインを作成したり生成AI周りをフル活用したサービスという感じがしていて、実際にデモで生成されたAPIが動いたときは感動しました。

話の中で、HonoはRequestを受け取りResponseを返す関数のように扱えるというのは「確かに」と思いました。以前yusukebeさんも「`() ⇒ Response()` は正義」というような発言されていたこともあり、またパネルディスカッションでWeb標準へのこだわりが話されていたので、そのこだわりのおかげで関数のように扱えるのかなと思うと感謝しかないです。

個人的にTypeScriptエディタの型定義ファイルのバンドルが興味深かったです。  
`esm.sh`の`X-Typescript-Types` からURLを引っ張ってきて、その中から相対パスを引っ張ってきてひたすらループ処理をぶん回して`declare module` でまとめるという泥臭い作業に圧倒されました。

### naporitanさんの『[Event Exhibition with Hono](https://speakerdeck.com/naporin0624/event-exhibition-with-hono)』
椎乃味醂さん率いるStudioGnuが2023年12月20日に展示したメディアアートのMV生成システムの構築についての話でした。  
椎乃味醂さんがそういった集団を構築していたことを初めて聞き、興味を惹かれました。

構成図を見る限りWorkersやTunnelなどCloudflareサービス群を最大活用していて素晴らしかったです。Hono RPCを活用して、仕様の移り変わりの負担を最小限に抑えるという見地も勉強になりました。短い開発期間かつエラーを出せない展示物という性質でありながら、この構成で走りきったというのは本当に尊敬します。

### sushi-chanさんの『[What Hono brought to student organizations?](https://www.docswell.com/s/sushi-chaaaan/5RXLG3-2024-06-22-honoconf)』
電通大のVirtual Live Labで開発された予約システムの話でした。  
Virtual Live Labさんは、音楽的同位体のライブ『KAFUEC』を開催されていたところですね。

サーバーレス破産やプラットフォームの終焉に伴う移行、3年でメンバーが入れ替わる組織として認知負荷を念頭に入れてHonoを採用したことが話され、プラットフォームを選ばないHonoだからこそ学習コストを低くすることができると語られていたことには大いに同意します。

### usualomaさんの『[We can develop a framework](https://speakerdeck.com/usualoma/we-can-develop-a-framework)』
Honoの歴史とHonoコミュニティの在り方のようなお話でした。  
usualomaさんはHonoでRegExpRouterやJSX周りなど多大な貢献をされている方です。

PRがメインの場として、いきなりPRでも良いというのは衝撃でした。また英語でやり取りがされていますが、そこでDeepLなどの翻訳ツールをよく使っていることも話されていて、少し安心しました。  
PRの流れの中で最近JSDocをちゃんと書き始めたとありましたが、もしかしてJSR対応で必要になったからかな～とボンヤリ考えていました。  
年始の挨拶をGitHub上でしているのは面白すぎましたね。

次に%でエンコードされるパスの取り扱いを例に、RFCにはない現実世界での仕様の取り扱われ方を調べる意義が非常に興味深かったです。  
最後にHonoには多くのHelperやMiddlewareがあること、まだマージされていないRouterやMiddlewareの話がありました。こちらのリリースも楽しみにしています。

## パネルディスカッションについて
Honoに求めることや様々な事柄が話されていましたが、いろんな話題を反復横とびしてたのでメモをしそびれた話が多くありました。なので、私が記憶にある内容をザックリと記載します。

- Honoに求めるのはオブザービリティ
  - Golangの差し込みやすいトレーサビリティを見て思った
  - どんな場所でも同じように動くように、どんな場所でも同じように計測してほしい
  - そこはMiddlewareの領分のような気もする
- HonoはWeb標準に対するこだわりが強い
  - Web標準でできないことはできないという姿勢
- HonoのレンダリングでReact以外のLitのような選択肢はあるか
  - HTML Helperで問題ないのであれば、それで良いのでは
  - Honoは最初UI記述にはMustacheしかないとなっていたが、usualomaさんからJSXの提案があった
  - レンダリングにHTMXのような、Honoっぽくかつ画面遷移しないようなものがほしい
    - Hotwireっぽい
    - Honowire？
- Honoがもっと有名になってほしいとコミュニティ側として思っている
  - Honoは病的に過小評価されている、と英語圏で言われた
  - 日本初というのはあまり意識してない
  - State Of JSにはランクインしていたが10位以内には入っていない
  - JSNationのヨーロッパイベントでHonoがノミネートされた
- HonoXのようなメタフレームワークやReactの互換性対応に目が行く
  - RSC対応とか
  - Honoの上でReactか、hono/jsx上で動かすかで変わる
  - Hono上でReact使ってRSCは書けるっちゃ書けるけど低レベルAPIがかなり露出する
  - そこにリソースを割くのもな……という感じ

## 最後に
好きなフレームワークであるHonoについて、深い知見やユースケース、Middlewareを知ることができたのは幸いでした。  
Honoはもちろんのこと、HonoXの発展も楽しみにしておりますし、一人のWebエンジニアとして開発に貢献したいと思いました。  
気は早いですが、次回の開催も楽しみにしています。本当に楽しい会でした。
