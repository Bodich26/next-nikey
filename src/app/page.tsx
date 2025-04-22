import { CollectionSlider } from "@/features";
import { getActiveCollection } from "@/features/collection-slider";
import { Container } from "@/shared";
import { Header } from "@/widgets";

export default async function Home() {
  const { activeCollection } = await getActiveCollection();

  return (
    <div className="flex flex-col relative">
      <Header />
      <main className="flex-1">
        <section className="bg-[url('/bg-main.jpg')] bg-cover bg-center h-[113vh]">
          <Container>
            <div className="pt-20">
              <CollectionSlider collection={activeCollection[0]} />
            </div>
          </Container>
        </section>
      </main>
      <footer>
        <Container>fdsf</Container>
      </footer>
    </div>
  );
}
