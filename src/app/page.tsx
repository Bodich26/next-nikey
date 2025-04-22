import { CollectionSlider } from "@/features";
import { getActiveCollection } from "@/features/collection-slider";
import { Container } from "@/shared";
import { Footer, Header } from "@/widgets";

export default async function Home() {
  const { activeCollection } = await getActiveCollection();

  return (
    <div className="flex flex-col relative">
      <Header />
      <main className="flex-1">
        <section className="bg-[url('/bg-main.jpg')] bg-cover bg-center bg-no-repeat">
          <Container>
            <div className="pt-20 pb-[175px]">
              <CollectionSlider collection={activeCollection[0]} />
            </div>
          </Container>
        </section>
        <section className="mt-20">
          <Container>
            <h1 className="text-4xl font-bold leading-none uppercase text-center text-indigo-900">
              Popular Sneakers
            </h1>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
