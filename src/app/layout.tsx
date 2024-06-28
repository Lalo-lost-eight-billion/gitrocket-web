import type { Metadata } from "next";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "GitRocket",
  description: "모든 대소고인들이 주식투자에 관심을 갖는 그날까지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
