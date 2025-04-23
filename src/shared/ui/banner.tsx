import Image from "next/image";
import { Container } from "./container";

type Props = {
  imgUrl: string;
  children: React.ReactNode;
};
export const Banner = ({ imgUrl, children }: Props) => {
  return (
    <section className="relative mt-24 bg-[url('/bg-banner.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[460px] lg:w-[660px] xl:w-[860px] min-h-[300px]">
          <Image
            src={imgUrl}
            alt="Left Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#362F78]/40 z-10" />
        </div>

        <div className="flex-1">
          <Container>
            <div className="p-4 max-w-xl">{children}</div>
          </Container>
        </div>
      </div>
    </section>
  );
};
