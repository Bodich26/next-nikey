import {
  getPopularSneakers,
  SneakersItem,
  SneakersWithVariants,
} from "@/entities";
import {
  CollectionSlider,
  PromoBanner,
  getActiveCollection,
  getBlogs,
  BlogItem,
} from "@/features";
import { Container, SectionTitles, ShowErrors } from "@/shared";
import { Footer, Header } from "@/widgets";
import { Blog } from "@prisma/client";
import { ArrowRightIcon } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { activeCollection } = await getActiveCollection();
  const { popularSneakersData, error: popularSneakersError } =
    await getPopularSneakers();
  const { blogsData, error: blogError } = await getBlogs();

  return (
    <div className="flex flex-col relative">
      <Header />
      <main className="flex-1">
        <section className="bg-[url('/bg-main.jpg')] bg-cover bg-center bg-no-repeat">
          <Container>
            <div className="pt-20 pb-[175px]">
              <CollectionSlider collection={activeCollection[0]} />
            </div>
          </Container>
        </section>
        <section className="mt-20">
          <Container>
            <SectionTitles title="Popular sneakers" as="h2" align="center" />
            <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] mt-8">
              {popularSneakersData.map((item: SneakersWithVariants) => (
                <SneakersItem key={item.id} sneaker={item} />
              ))}
            </div>
            {popularSneakersError && (
              <ShowErrors error={popularSneakersError} />
            )}
          </Container>
        </section>
        <PromoBanner />
        <section className="mt-20">
          <Container>
            <SectionTitles title="New Design 2025" as="h3" align="left" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 gap-4 md:gap-6 lg:gap-8 mt-8 lg:h-[690px]">
              <div className=" lg:col-span-2 lg:row-span-2">
                <Image
                  src="/gallery/gallery-1.jpg"
                  className="object-cover rounded-lg w-full h-full max-w-full"
                  alt="Gallery-1"
                  width={420}
                  height={0}
                />
              </div>
              <div className="  lg:col-start-1 lg:row-start-3 lg:row-span-2">
                <Image
                  src="/gallery/gallery-2.jpg"
                  className="object-cover rounded-lg w-full h-full max-w-full"
                  alt="Gallery-2"
                  width={420}
                  height={0}
                />
              </div>
              <div className=" lg:col-start-2 lg:row-start-3 lg:row-span-2">
                <Image
                  src="/gallery/gallery-3.jpg"
                  className="object-cover rounded-lg w-full h-full max-w-full"
                  alt="Gallery-3"
                  width={420}
                  height={0}
                />
              </div>
              <div className=" lg:col-start-3 lg:row-start-1">
                <Image
                  src="/gallery/gallery-4.jpg"
                  className="object-cover rounded-lg w-full h-full max-w-full"
                  alt="Gallery-4"
                  width={420}
                  height={0}
                />
              </div>
              <div className=" lg:col-start-3 lg:row-start-2 lg:row-span-3">
                <Image
                  src="/gallery/gallery-5.jpg"
                  className="object-cover rounded-lg w-full h-full max-w-full"
                  alt="Gallery-5"
                  width={420}
                  height={0}
                />
              </div>
              <div className="  lg:col-start-4 lg:row-start-1 lg:row-span-2 ">
                <Image
                  src="/gallery/gallery-6.jpg"
                  className="object-cover rounded-lg w-full h-full max-w-full"
                  alt="Gallery-6"
                  width={420}
                  height={0}
                />
              </div>
              <div className=" md:col-span-3 lg:col-span-1 lg:col-start-4 lg:row-start-3 lg:row-span-2">
                <Image
                  src="/gallery/gallery-7.jpg"
                  className="object-cover rounded-lg w-full h-full max-w-full"
                  alt="Gallery-7"
                  width={420}
                  height={0}
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="mt-20">
          <Container>
            <SectionTitles title="Nike Blogs" as="h3" align="center" />
            <div
              className="grid gap-8 mt-8 
                grid-cols-1 
                sm:grid-cols-1 
                lg:grid-cols-3"
            >
              {blogsData.map((item: Blog) => (
                <BlogItem key={item.id} blog={item} />
              ))}
            </div>
            {blogError && <ShowErrors error={blogError} />}
            <Link
              className="border-b border-transparent inline-flex items-center gap-2 mt-4 capitalize text-indigo-600 font-bold text-base hover:border-b-1 hover:border-indigo-600 transition-colors duration-300"
              href="/blogs"
            >
              See more blogs
              <ArrowRightIcon width={24} height={24} />
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
