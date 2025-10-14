import { BannerSlide, fetchBannerData } from "@/features/banners";
import { Container } from "@/shared";

type Props = {
  variant: "catalog" | "sneakers";
  slug?: string;
};
export const BannerSlider = async ({ slug, variant }: Props) => {
  const { slide, error } = await fetchBannerData(variant, slug);

  return (
    <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="pt-20 pb-[100px] sm:pb-[138px]">
          <BannerSlide slide={slide} showError={error} />
        </div>
      </Container>
    </section>
  );
};
