import { getSneakersSlug } from "@/entities";
import { SneakersVariantSelection } from "@/features";

import {
  Container,
  SectionTitles,
  GenderCorrect,
  ShowErrors,
  SkeletonBannerSlider,
} from "@/shared";
import { BannerSlider } from "@/widgets/banner-slider";
import { ReviewSkeleton, ReviewSneaker } from "@/widgets/review-sneaker";
import { Suspense } from "react";

type SneakerSlug = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Sneaker({ params }: SneakerSlug) {
  const { slug } = await params;
  const {
    sneakerBySlug,
    rating,
    error: sneakersSlugError,
  } = await getSneakersSlug(slug);

  if (!sneakerBySlug || sneakersSlugError) {
    return (
      <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="p-[299px] flex justify-center items-center">
            <ShowErrors type="full" error="Упс... товар не найден!" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Banner Slider */}
      <Suspense fallback={<SkeletonBannerSlider />}>
        <BannerSlider slug={slug} variant="sneakers" />
      </Suspense>

      <section className="mt-20 margins-xs">
        <Container>
          <SectionTitles
            title={
              <GenderCorrect gender={sneakerBySlug.gender} type="titles" />
            }
            types="sneakers"
            as="h2"
            align="center"
          />

          {/* Кроссовок */}
          <SneakersVariantSelection sneaker={sneakerBySlug} rating={rating} />

          {/* Отзывы */}
          <Suspense fallback={<ReviewSkeleton />}>
            <ReviewSneaker slug={slug} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
