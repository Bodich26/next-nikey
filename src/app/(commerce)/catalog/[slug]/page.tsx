import {
  getActiveCollection,
  SelectSize,
  SneakerGallery,
  TopBannersSlider,
} from "@/features";
import { ReviewSlider } from "@/features/review";
import {
  Container,
  SectionTitles,
  GenderCorrect,
  SneakersPrice,
  StarsRating,
} from "@/shared";
import { Button } from "flowbite-react";
import { Eye, Heart, MoveLeft, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Sneaker() {
  const { collectionData, error: collectionError } =
    await getActiveCollection();

  return (
    <>
      <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="pt-20 pb-[100px] sm:pb-[121px]">
            <TopBannersSlider
              collection={collectionData[0]}
              showError={collectionError}
            />
          </div>
        </Container>
      </section>
      <section className="mt-20 margins-xs">
        <Container>
          <SectionTitles
            title={<GenderCorrect gender="Men" type="titles" />}
            types="sneakers"
            as="h2"
            align="center"
          />

          <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8 mt-8">
            <SneakerGallery
              images={[
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/acd29410-53f1-4c85-aea0-3465092e20c2/NIKE+AIR+MAX+PLUS.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cf1a0ea-a07a-4875-9e69-daab353b88ec/NIKE+AIR+MAX+PLUS.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1258a0ef-18b6-409f-8872-0f67e97a7f08/NIKE+AIR+MAX+PLUS.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40010484-da05-4456-9924-7538840d6e35/NIKE+AIR+MAX+PLUS.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/be2c34fc-0ac0-40d9-b45a-3427200ee2ba/NIKE+AIR+MAX+PLUS.png",
              ]}
            />

            <div className="w-[42%] min-w-0 rounded-lg border border-indigo-300 p-4 max-md:w-[100%] flex justify-between flex-col max-sm:gap-5 gap-8">
              <div className="flex justify-between items-center text-xl font-medium text-indigo-900 ">
                <Link href="/" className="flex items-center gap-3">
                  <MoveLeft /> back
                </Link>
                <span className=" inline-flex items-center gap-1">
                  <Eye /> 112
                </span>
              </div>
              <div className="flex justify-between items-start text-indigo-900 capitalize gap-1 flex-col">
                <h3 className="max-sm:text-4xl text-5xl font-bold">
                  Air Max Plus Drift
                </h3>
                <p className=" text-xl font-medium">Men’s Shoes</p>

                <div className="mt-1">
                  <StarsRating rating={4} />
                </div>
              </div>

              <div className="flex justify-between items-start text-indigo-900 capitalize gap-1 flex-col">
                <SneakersPrice price={100} discount={20} variant="page" />
              </div>

              <div className="flex justify-between items-start text-indigo-900 capitalize gap-2 flex-col">
                <p className="text-xl font-bold">Colors</p>
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Button
                      key={i}
                      outline
                      className="relative w-[100px] h-[100px] overflow-hidden rounded-lg cursor-pointer"
                    >
                      <Image
                        className="rounded-lg object-cover"
                        fill
                        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f5e7a93-6b89-41e3-8aee-5068ee6535f9/AIR+MAX+PLUS+DRIFT.png"
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
          <ReviewSlider
            review={collectionData[0]}
            showError={collectionError}
          />
        </Container>
      </section>
    </>
  );
}
