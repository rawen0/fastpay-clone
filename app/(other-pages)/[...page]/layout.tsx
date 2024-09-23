import AppHeader from "@/components/app-header";
import { GridWrapper } from "./_components/grid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader isHome={false} />
      <main>
        <GridWrapper>{children}</GridWrapper>
      </main>
    </>
  );
}
