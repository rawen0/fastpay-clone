import AppBody from "@/components/app-body";
import AppHeader from "@/components/app-header";
import StickyNav from "@/components/stiky-navigation";

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="min-h-screen">
        <AppBody />
        <StickyNav />
      </main>
    </>
  );
}
