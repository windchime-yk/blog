import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

const dateFormat = (date: Date) =>
  Intl.DateTimeFormat("ja-JP", { dateStyle: "medium" }).format(date);

blog({
  title: "WhyK Log",
  author: "WhyK",
  description: "型安全と玄米茶が好きなWhyKのブログです。フロントエンド周りについて書いたりします。",
  dateFormat,
  avatar: "./windchime2.jpg",
  avatarClass: "full",
  lang: "ja",
  favicon: "./windchime2.jpg",
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
