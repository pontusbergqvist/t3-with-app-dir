'use client';

import { Providers } from "./providers";
import "~/styles/globals.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default Layout;
