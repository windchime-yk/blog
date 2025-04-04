import { Navbar } from "flowbite-react";
import { FaRss } from "react-icons/fa6";
import { SITE_TITLE } from "consts";

export default function Component() {
  return (
    <Navbar className="py-5">
      <Navbar.Brand href="/" className="text-2xl font-bold">
        {SITE_TITLE}
      </Navbar.Brand>
      <ul>
        <li>
          <Navbar.Link className="border-0" href="/rss.xml">
            <FaRss className="text-2xl" title="RSSのリンク" />
          </Navbar.Link>
        </li>
      </ul>
    </Navbar>
  );
}
