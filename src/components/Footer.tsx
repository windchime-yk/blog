import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { FaGithub, FaXTwitter, FaHouse } from "react-icons/fa6";

export default function Component() {
  return (
    <Footer container className="mt-10 rounded-none">
      <FooterCopyright
        className="text-center md:text-left"
        by="WhyK"
        year={new Date().getFullYear()}
      />
      <FooterLinkGroup className="justify-center md:justify-normal mt-4 md:mt-0">
        <FooterLink href="https://whyk.dev" target="_blank">
          <FooterIcon
            icon={FaHouse}
            title="WhyKのポートフォリオサイトのリンク"
          />
        </FooterLink>
        <FooterLink href="https://twitter.com/windchime_yk" target="_blank">
          <FooterIcon
            icon={FaXTwitter}
            title="WhyKのTwitter(現X)のアカウントリンク"
          />
        </FooterLink>
        <FooterLink href="https://github.com/windchime-yk" target="_blank">
          <FooterIcon icon={FaGithub} title="WhyKのGitHubのアカウントリンク" />
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
