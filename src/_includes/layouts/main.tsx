import { FC, ReactElement } from "react";

const template: FC<{ children: ReactElement }> = ({ children }) => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <link rel="shortcut icon" href="icon.jpg" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      {children}
    </body>
  </html>
);

export default template;
