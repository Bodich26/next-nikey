import { getSneakersSlider, getSneakersSlug } from "@/entities";
import { SelectSize, SneakerGallery } from "@/features";
import { ReviewSlider } from "@/features/review";
import {
  Container,
  SectionTitles,
  GenderCorrect,
  SneakersPrice,
  StarsRating,
  ShowErrors,
  SliderBanners,
} from "@/shared";
import { Button } from "flowbite-react";
import { Eye, Heart, MoveLeft, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

  const firstVariant = sneakerBySlug.variants[0];
  const prices = sneakerBySlug.variants[0].price;
  const discounts = sneakerBySlug.variants[0].discount;
  const galleryImages = firstVariant?.images?.map((img) => img.url) || [];

  return (
    <>
      <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="pt-20 pb-[100px] sm:pb-[121px]">
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

          <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8 mt-8">
            <SneakerGallery images={galleryImages} />

            <div className="w-[42%] min-w-0 rounded-lg border border-indigo-300 p-4 max-md:w-[100%] flex justify-between flex-col max-sm:gap-5 gap-8">
              <div className="flex justify-between items-center text-xl font-medium text-indigo-900 ">
                <Link href="/" className="flex items-center gap-3">
                  <MoveLeft /> back
                </Link>
                <span className=" inline-flex items-center gap-1">
                  <Eye /> {sneakerBySlug.views}
                </span>
              </div>
              <div className="flex justify-between items-start text-indigo-900 capitalize gap-1 flex-col">
                <h3 className="max-sm:text-4xl text-5xl font-bold">
                  {sneakerBySlug.model}
                </h3>
                <p className=" text-xl font-medium">
                  {
                    <GenderCorrect
                      gender={sneakerBySlug.gender}
                      type="normal"
                    />
                  }{" "}
                  Shoes
                </p>

                <div className="mt-1">
                  <StarsRating rating={4} />
                </div>
              </div>

              <div className="flex justify-between items-start text-indigo-900 capitalize gap-1 flex-col">
                <SneakersPrice
                  price={prices}
                  discount={discounts}
                  variant="page"
                />
              </div>

              <div className="flex justify-between items-start text-indigo-900 capitalize gap-2 flex-col">
                <p className="text-xl font-bold">Colors</p>
                <div className="flex flex-wrap gap-2">
                  {sneakerBySlug.variants.map((variant) => (
                    <Button
                      key={variant.id}
                      outline
                      className="relative w-[100px] h-[100px] overflow-hidden rounded-lg cursor-pointer"
                    >
                      <Image
                        className="rounded-lg object-cover"
                        fill
                        src={variant.mainImage}
                        alt="Nike Air 90"
                      />
                    </Button>
                  ))}
                </div>
              </div>

              <SelectSize sizes={[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]} />

              <div className="w-full flex justify-between max-sm:gap-4 gap-8 items-center">
                <Button
                  className="uppercase w-full cursor-pointer transition-colors duration-300 gap-2"
                  size="lg"
                >
                  <ShoppingCart />
                  Add to cart
                </Button>
                <Button
                  className="uppercase w-[53px] cursor-pointer transition-colors duration-300 !p-4"
                  size="lg"
                >
                  <Heart />
                </Button>
              </div>
            </div>
          </div>

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
