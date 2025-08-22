import AppBar from "../../components/appbar";
import { HomeContent } from "../../components/home_components/HomeBlocks";
import { ClientOnly } from "../../components/mediaQ";

export default function Home() {

  return (
    <div className="min-h-screen pb-20">
      <main>
        <AppBar />
      </main>

      <ClientOnly>
        <HomeContent />
      </ClientOnly>
    </div>
  );
}
