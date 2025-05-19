import { getCatalogSlider, SneakersFilterList } from "@/features";

import { Container, SectionTitles, SliderBanners } from "@/shared";

export default async function Catalog() {
  const { catalogSlider, error: catalogSliderError } = await getCatalogSlider();

  return (
    <>
      <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="pt-20 pb-[100px] sm:pb-[138px]">
            <SliderBanners
              slide={catalogSlider}
              showError={catalogSliderError}
            />
          </div>
        </Container>
      </section>
      <section className="mt-20 margins-xs">
        <Container>
          <SectionTitles title={"Sneakers"} as={"h3"} align={"center"} />
          <SneakersFilterList />
        </Container>
      </section>
    </>
  );
}
