import { getActiveCollection } from "@/entities/main-collection";
import { PromoBanner } from "@/features";
import { Container, ShowErrors, SkeletonPopularSneakers } from "@/shared";
import { Footer, Header } from "@/widgets";
import { HeroGallery } from "@/widgets/hero-gallery";
import { MainCollection } from "@/widgets/main-collection";
import { NikeyBlogs } from "@/widgets/nikey-blogs/";
import { PopularSneakers } from "@/widgets/popular-sneakers";
import { Suspense } from "react";

export default async function Home() {
  const { collectionData, error: collectionError } =
    await getActiveCollection();

  return (
    <div className="flex flex-col relative">
      <Header />
      <main className="flex-1">
        {/* Main Collection */}
        <section className="bg-[url('/bg-main.jpg')] bg-cover bg-center bg-no-repeat">
          <Container>
            <div className="pt-20 pb-[100px] sm:pb-[175px]">
              {collectionError ? (
                <ShowErrors error={collectionError} type={"full"} />
              ) : (
                <MainCollection collection={collectionData[0]} />
              )}
            </div>
          </Container>
        </section>

        {/* Popular Sneakers */}
        <Suspense fallback={<SkeletonPopularSneakers />}>
          <PopularSneakers />
        </Suspense>

        {/* Promo Banner */}
        <PromoBanner />

        {/* Main Collection */}
        <HeroGallery />

        {/* Nikey Blog */}
        <Suspense
          fallback={
            <div className="text-center py-20 text-amber-400">
              Loading blog...
            </div>
          }
        >
          <NikeyBlogs />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
