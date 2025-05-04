import { getSneakersSlider, getSneakersSlug } from "@/entities";
import { SneakersVariantSelection } from "@/features";

import {
  Container,
  SectionTitles,
  GenderCorrect,
  ShowErrors,
  SliderBanners,
} from "@/shared";

type SneakerSlug = {
  params: {
    slug: string;
  };
};

export default async function Sneaker({ params }: SneakerSlug) {
  const { slug } = await params;
  const { sneakerBySlug, error: sneakersSlugError } = await getSneakersSlug(
    slug
  );
  const { sneakerSlider, error: sneakersSliderError } = await getSneakersSlider(
    slug
  );

  if (!sneakerBySlug || sneakersSlugError) {
    return (
      <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="p-[299px] flex justify-center items-center">
            <ShowErrors error={"Упс... товар не найден!"} />
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

          <SneakersVariantSelection sneaker={sneakerBySlug} />

          {/* Отзывы */}
          {/* <ReviewSlider
            review={collectionData[0]}
            showError={collectionError}
          /> */}
        </Container>
      </section>
    </>
  );
}
