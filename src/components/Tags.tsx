import { Badge } from "flowbite-react";

interface ComponentProps {
  tags: string[];
}

export default function Component({ tags }: ComponentProps) {
  return (
    <ul className="flex gap-1">
      {tags.map((tag) => (
        <li key={tag}>
          <a href={`/tags/${tag}`}>
            <Badge>{tag}</Badge>
          </a>
        </li>
      ))}
    </ul>
  );
}
