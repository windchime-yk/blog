import { Navbar, NavbarBrand, NavbarLink } from "flowbite-react";
import { FaRss } from "react-icons/fa6";
import { SITE_TITLE } from "consts";

export default function Component() {
  return (
    <Navbar className="py-5">
      <NavbarBrand href="/" className="text-2xl font-bold">
        {SITE_TITLE}
      </NavbarBrand>
      <ul>
        <li>
          <NavbarLink className="border-0" href="/rss.xml">
            <FaRss className="text-2xl" title="RSSのリンク" />
          </NavbarLink>
        </li>
      </ul>
    </Navbar>
  );
}
