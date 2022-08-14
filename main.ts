import blog from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "WhyK Log",
  author: "WhyK",
  description: "型安全と玄米茶が好きなWhyKのブログです。フロントエンド周りについて書いたりします。",
  avatar: "./windchime2.jpg",
  avatarClass: "full",
  links: [
    {
      title: "Twitter",
      url: "https://twitter.com/windchime_yk",
      target: "_blank",
    },
    {
      title: "GitHub",
      url: "https://github.com/windchime-yk",
      target: "_blank",
    },
  ],
});
