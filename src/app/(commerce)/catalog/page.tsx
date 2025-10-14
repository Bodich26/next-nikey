import { SneakersFilterList } from "@/features";
import { Container, SectionTitles, SkeletonBannerSlider } from "@/shared";
import { BannerSlider } from "@/widgets/banner-slider";
import { Suspense } from "react";

export default async function Catalog() {
  return (
    <>
      <Suspense fallback={<SkeletonBannerSlider />}>
        <BannerSlider variant={"catalog"} />
      </Suspense>

      <section className="mt-20 margins-xs">
        <Container>
          <SectionTitles title={"Sneakers"} as={"h3"} align={"center"} />
          <Suspense fallback={<div>Loading filters...</div>}>
            <SneakersFilterList />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
