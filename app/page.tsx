import AppBody from "@/components/app-body";
import AppHeader from "@/components/app-header";
import StickyNav from "@/components/stiky-navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AppHeader />
      <AppBody />
      <StickyNav />
    </main>
  );
}
