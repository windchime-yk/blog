---
title: ブログを作り直した
description: 基本的にZennを更新していますが、こちらも更新したいですね。
publish_date: "2024/04/11"
tags: [diary, blog_dev]
---

改めまして、WhyK（ワイケー）と言います。

今回は表題の通り、ブログの作り直しの話です。  
[Nuxt2](https://v2.nuxt.com/ja/)を[Netlify](https://www.netlify.com)に載せて最初のブログをリリースしたのですが、その後に[Deno](https://deno.com)にハマり倒して[公式のブログテンプレート](https://github.com/denoland/deno_blog)で作り直し、[Deno Deploy](https://deno.com/deploy)に載せ替えました。  
しかし最近になって、「ブログにSSRはなくてもよいのでは……？」という気持ちになり、[Flowbite React](https://flowbite-react.com)も使える[Astro](https://astro.build)で作り直し、愛用中の[Cloudflare](https://www.cloudflare.com/ja-jp/)にまた載せ替えました。現在はSSGです。

Astroの採用理由は先述の通りFlowbite Reactが使えることと、コンテンツサイトのためのフレームワークだからです。  
ReactやVueなど様々なライブラリやフレームワークを混成させることができるので、既存の知見が活かしやすいです。

以前と変わらず雑多にやっていく予定ですが、技術記事は[Zenn](https://zenn.dev/windchime_yk)で書いているし、雑多な記事は[しずかなインターネット](https://sizu.me/whyk)に書いているので、書くことがないかもしれません。  
それでも、この2つに載せにくいような何かはあると思うので、「そのときは活用していきたいね」くらいの温度感です。  
どうぞよろしくお願いします。
