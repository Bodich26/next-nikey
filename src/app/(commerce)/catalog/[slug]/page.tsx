import { getActiveCollection, TopBannersSlider } from "@/features";
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
            <div className="flex flex-col gap-8 w-[58%] min-w-0 max-md:w-[100%]">
              {/* Блок с большим изображением */}
              <div className="relative w-full aspect-[780/563] rounded-lg">
                <Image
                  className="rounded-lg object-cover"
                  fill
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c8f4e62a-c5e3-4134-bda9-e188023e0e47/AIR+MAX+PLUS+DRIFT.png"
                  alt="Nike Air 90"
                />
                <Image
                  src="/logo-nike.svg"
                  alt="Nike Logo"
                  width={70}
                  height={25}
                  className="absolute left-4 top-4 invert"
                  priority
                />
              </div>

              {/* Галерея */}
              <div className="max-md:overflow-x-auto">
                <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(137px,_1fr))] max-md:flex max-md:flex-nowrap max-md:min-w-max">
                  {[...Array(5)].map((_, i) => (
                    <Button
                      key={i}
                      className="relative max-md:w-[137px] h-[153px] overflow-hidden rounded-lg cursor-pointer"
                    >
                      <Image
                        className="rounded-lg object-cover"
                        fill
                        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef8c266c-5edb-4161-bd67-161c72ae9547/AIR+MAX+PLUS+DRIFT.png"
                        alt="Nike Air 90"
                      />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[42%] min-w-0 rounded-lg border border-indigo-300 p-4 max-md:w-[100%] flex justify-between flex-col gap-8">
              <div className="flex justify-between items-center text-xl font-medium text-indigo-900 ">
                <Link href="/" className="flex items-center gap-3">
                  <MoveLeft /> back
                </Link>
                <span className=" inline-flex items-center gap-1">
                  <Eye /> 112
                </span>
              </div>
              <div className="flex justify-between items-start text-indigo-900 capitalize gap-1 flex-col">
                <h3 className="text-5xl font-bold">Air Max Plus Drift</h3>
                <p className="text-xl font-medium">Men’s Shoes</p>

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

              <div className="flex justify-between items-start text-indigo-900 capitalize gap-2 flex-col">
                <p className="text-xl font-bold">Sizes</p>
                <div className="flex flex-wrap gap-2">
                  {[...Array(10)].map((_, i) => (
                    <Button
                      key={i}
                      outline
                      className="uppercase w-[45px] h-[45px] cursor-pointer transition-colors duration-300 gap-2  border-1 border-indigo-700 text-indigo-700"
                      size="lg"
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="w-full flex justify-between gap-8 items-center">
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
