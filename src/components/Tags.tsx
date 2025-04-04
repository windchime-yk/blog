import { Badge } from "flowbite-react";

interface ComponentProps {
  tags: string[];
}

export default function Component({ tags }: ComponentProps) {
  return (
    <ul className="flex gap-1">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge href={`/tags/${tag}`}>{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}
