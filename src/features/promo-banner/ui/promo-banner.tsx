import { Banner } from "@/shared";
import { Button } from "flowbite-react";

export const PromoBanner = () => {
  return (
    <Banner imgUrl={"/banner-img1.jpg"}>
      <h3 className="uppercase text-4xl font-bold leading-none text-indigo-50">
        Discount on shoes up to 20%
      </h3>
      <p className="text-2xl font-light leading-normal text-indigo-50 mt-5 mb-8">
        Hurry up to get a discount on your first order! Don&apos;t miss out on
        this limited-time offer — shop now at a reduced price!
      </p>
      <Button
        className="uppercase w-[225px] cursor-pointer transition-colors duration-300"
        size="lg"
      >
        CLICK ME Now
      </Button>
    </Banner>
  );
};
