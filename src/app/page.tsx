import {
  getPopularSneakers,
  SneakersItem,
  SneakersWithVariants,
} from "@/entities";
import { CollectionSlider, PromoBanner, getActiveCollection } from "@/features";
import { Container, SectionTitles } from "@/shared";
import { Footer, Header } from "@/widgets";

export default async function Home() {
  const { activeCollection } = await getActiveCollection();
  const { popularSneakers } = await getPopularSneakers();

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
            <SectionTitles
              title="Popular sneakers"
              as="h2"
              className=""
              align="center"
            />
            <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] mt-8">
              {popularSneakers.map((item: SneakersWithVariants) => (
                <SneakersItem key={item.id} sneaker={item} />
              ))}
            </div>
          </Container>
        </section>
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
}
