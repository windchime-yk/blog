import { Footer } from "flowbite-react";
import { FaGithub, FaXTwitter, FaHouse } from "react-icons/fa6";

export default function Component() {
  return (
    <Footer container className="mt-10 rounded-none">
      <Footer.Copyright className="text-center md:text-left" by="WhyK" year={new Date().getFullYear()} />
      <Footer.LinkGroup className="justify-center md:justify-normal mt-4 md:mt-0">
        <Footer.Link href="https://whyk.dev" target="_blank">
          <Footer.Icon
            icon={FaHouse}
            title="WhyKのポートフォリオサイトのリンク"
          />
        </Footer.Link>
        <Footer.Link href="https://twitter.com/windchime_yk" target="_blank">
          <Footer.Icon
            icon={FaXTwitter}
            title="WhyKのTwitter(現X)のアカウントリンク"
          />
        </Footer.Link>
        <Footer.Link href="https://github.com/windchime-yk" target="_blank">
          <Footer.Icon icon={FaGithub} title="WhyKのGitHubのアカウントリンク" />
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
