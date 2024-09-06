import AppHeader from "@/components/app-header";
import Heading from "./_components/heading";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    page: string[];
  };
}>) {
  return (
    <>
      <AppHeader isHome={params.page.length === 0} />
      {/* if length === 0 then it's home */}
      <main>{children}</main>
    </>
  );
}
