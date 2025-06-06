import { getSneakersSlider, getSneakersSlug } from "@/entities";
import {
  SneakersVariantSelection,
  getSneakersReviews,
  ReviewSlider,
} from "@/features";

import {
  Container,
  SectionTitles,
  GenderCorrect,
  ShowErrors,
  SliderBanners,
} from "@/shared";

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

  const { sneakerSlider, error: sneakersSliderError } = await getSneakersSlider(
    slug
  );

  const { sneakerReviews, error: sneakerReviewsError } =
    await getSneakersReviews(slug);

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
      <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="pt-20 pb-[100px] sm:pb-[138px]">
            <SliderBanners
              slide={sneakerSlider}
              showError={sneakersSliderError}
            />
          </div>
        </Container>
      </section>
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
          {sneakerReviews.length > 0 ? (
            <ReviewSlider
              review={sneakerReviews}
              showError={sneakerReviewsError}
            />
          ) : (
            <ShowErrors
              type="border"
              error="There are no reviews for these sneakers yet."
            />
          )}
        </Container>
      </section>
    </>
  );
}
