import { PromoBanner } from "@/features";
import { Footer, Header } from "@/widgets";
import { HeroGallery } from "@/widgets/hero-gallery";
import {
  MainCollection,
  MainCollectionSkeleton,
} from "@/widgets/main-collection";
import { NikeyBlogs, NikeyBlogsSkeleton } from "@/widgets/nikey-blogs";
import {
  PopularSneakers,
  SkeletonPopularSneakers,
} from "@/widgets/popular-sneakers";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <main className="flex-1">
        {/* Main Collection */}
        <Suspense fallback={<MainCollectionSkeleton />}>
          <MainCollection />
        </Suspense>

        {/* Popular Sneakers */}
        <Suspense fallback={<SkeletonPopularSneakers />}>
          <PopularSneakers />
        </Suspense>

        {/* Promo Banner */}
        <PromoBanner />

        {/* Main Collection */}
        <HeroGallery />

        {/* Nikey Blog */}
        <Suspense fallback={<NikeyBlogsSkeleton />}>
          <NikeyBlogs />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
