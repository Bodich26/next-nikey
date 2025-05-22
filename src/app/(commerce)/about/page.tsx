import { ContactList } from "@/entities";
import { Banner, Container, HeroSectionInfo, SectionTitles } from "@/shared";

import Image from "next/image";

export default function About() {
  return (
    <>
      <HeroSectionInfo
        title={"Our Sneakers — Style and Comfort Combined"}
        description={
          "We offer sneakers that seamlessly combine style, comfort, and cutting-edge innovation. Whether it's a classic or a new release, each pair is designed with care to ensure your comfort and enhance your unique style with every step you take."
        }
        imageUrl={
          "https://ik.imagekit.io/pfbn9k04m/product-slide5.jpg?updatedAt=1745060622238"
        }
      />
      <section className="mt-20 margins-xs">
        <Container>
          <SectionTitles title={"About Us"} as={"h3"} align={"center"} />
          <div className="flex gap-8 flex-col mt-8">
            <div className="flex justify-between items-center gap-8 max-md:flex-col max-sm:gap-5">
              <div className="relative h-[305px] w-[100%] lg:w-[664px] lg:h-[305px]">
                <Image
                  className=" rounded-lg object-cover"
                  fill
                  src={"/team.jpg"}
                  alt="Poster"
                />
              </div>

              <div className="flex gap-8 flex-col max-w-[50%] max-md:max-w-full max-sm:gap-5 max-sm:text-center">
                <h3 className="w-full uppercase font-bold text-4xl max-sm:text-3xl text-indigo-900 leading-none">
                  We are a team of professionals
                </h3>
                <p className="text-indigo-900 text-xl leading-normal font-light">
                  We offer sneakers that seamlessly combine style, comfort, and
                  cutting-edge innovation. Whether it&apos;s a classic or a new
                  release, each pair is designed with care to ensure your
                  comfort and enhance your unique style with every step you
                  take.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center flex-row-reverse gap-8 max-md:flex-col max-sm:gap-5">
              <div className="relative h-[305px] w-[100%] lg:w-[664px] lg:h-[305px]">
                <Image
                  className=" rounded-lg object-cover"
                  fill
                  src={"/sneaker.jpg"}
                  alt="Poster"
                />
              </div>

              <div className="flex gap-8 flex-col max-w-[50%] max-md:max-w-full max-sm:gap-5 max-sm:text-center">
                <h3 className="w-full uppercase font-bold text-4xl max-sm:text-3xl text-indigo-900 leading-none">
                  Our Mission Style and Comfort
                </h3>
                <p className="text-indigo-900 text-xl leading-normal font-light">
                  Our mission is to make stylish and comfortable sneakers
                  accessible to everyone. We aim for every customer to feel the
                  comfort and confidence with every step they take in our shoes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Banner imgUrl={"/shop.jpg"}>
          <h3 className="uppercase text-3xl sm:text-4xl font-bold leading-none text-indigo-50">
            We are always ready to help you!
          </h3>
          <div className="flex flex-col gap-3 mt-5">
            <ContactList />
          </div>
        </Banner>
      </section>
      <section className="mt-20 margins-xs">
        <Container>
          <SectionTitles title={"Delivery"} as={"h3"} align={"center"} />
          <div className="flex justify-between gap-8 mt-8 max-md:flex-col">
            <div className="flex flex-col justify-between gap-5 basis-[60%] text-indigo-900 max-sm:justify-center">
              <dl className="max-sm:text-center">
                <dt className="text-2xl font-bold mb-2">Order Tracking</dt>
                <dd className="text-xl leading-normal font-light">
                  A tracking number will be sent via email or SMS once your
                  order ships. Follow your sneakers every step of the way!
                </dd>
              </dl>
              <dl className="max-sm:text-center">
                <dt className="text-2xl font-bold mb-2">Secure Packaging</dt>
                <dd className="text-xl leading-normal font-light">
                  Every pair is packed in official branded boxes and
                  extra-protective packaging to ensure they arrive in perfect
                  condition.
                </dd>
              </dl>
              <dl className="max-sm:text-center">
                <dt className="text-2xl font-bold mb-2">Processing Time</dt>
                <dd className="text-xl leading-normal font-light">
                  Orders placed before 1 PM EST Mon–Fri are shipped the same
                  day. Orders after that will be shipped the next business day.
                </dd>
              </dl>
            </div>
            <div className="border-1 border-indigo-300 p-4 basis-[40%] rounded-lg text-indigo-900 grid gap-8 max-sm:grid-cols-1 max-sm:text-center grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] ">
              <div className="flex flex-col">
                <span className="text-2xl font-medium">Standard Shipping</span>
                <p className="text-xl font-light">3–5 business days</p>
                <p className="text-xl font-light">Free</p>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-medium">Expedited Shipping</span>
                <p className="text-xl font-light">2–3 business days</p>
                <p className="text-xl font-light">From $9.99</p>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-medium">Next-Day Shipping</span>
                <p className="text-xl font-light">1 business day</p>
                <p className="text-xl font-light">From $19.99</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
