import { SkeletonBannerSlider } from "@/shared";
import { BannerSlider } from "@/widgets/banner-slider";
import { ReviewSkeleton, ReviewSneaker } from "@/widgets/review-sneaker";
import {
  SkeletonSneakersSection,
  SneakerSection,
} from "@/widgets/sneakers-section";
import { Suspense } from "react";

type SneakerSlug = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Sneaker({ params }: SneakerSlug) {
  const { slug } = await params;

  return (
    <>
      {/* Banner Slider */}
      <Suspense fallback={<SkeletonBannerSlider />}>
        <BannerSlider slug={slug} variant="sneakers" />
      </Suspense>

      <Suspense fallback={<SkeletonSneakersSection />}>
        <SneakerSection slug={slug} />
      </Suspense>

      <Suspense fallback={<ReviewSkeleton />}>
        <ReviewSneaker slug={slug} />
      </Suspense>
    </>
  );
}
