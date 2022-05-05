import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
  src: "src",
  dest: "dist",
  server: {
    open: true,
  },
});

site.use(codeHighlight());
site.use(jsx());

site.copy("static", ".");

export default site;
