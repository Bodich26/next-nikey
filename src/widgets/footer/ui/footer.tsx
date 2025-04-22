import { Container, FooterMenu } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import { FooterAdvantages } from "../model/footer-advantages";
import {
  FooterCompany,
  FooterShop,
  FooterSupport,
} from "../model/footer-links";
import { FooterSocials } from "../model/footer-socials";

export const Footer = () => {
  return (
    <footer className="bg-[url('/bg-footer.jpg')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="flex justify-between gap-2 mt-8 mb-20">
          {FooterAdvantages.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <item.icon width={32} height={32} />
              <div className="flex flex-col gap-1.5">
                <h4 className="text-xl font-medium leading-none text-indigo-50">
                  {item.title}
                </h4>
                <span className="text-base font-light leading-normal text-indigo-50">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mb-16 gap-2">
          <div className="w-[400px]">
            <Link href="/" className="inline-block">
              <Image src="/logo.svg" alt="logo" width={136} height={0} />
            </Link>
            <p className="text-base leading-normal font-light text-indigo-50 mt-3 mb-9">
              Step into style. Discover the latest Nike sneakers for every step
              of your journey.
            </p>
            <Image
              src="/logo-nike.svg"
              width={183}
              height={66}
              alt="Logo-Nike"
            />
          </div>
          <div className="flex items-start gap-[112px]">
            <FooterMenu title="Shop" items={FooterShop} />
            <FooterMenu title="Support" items={FooterSupport} />
            <FooterMenu title="Company" items={FooterCompany} />
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <p className="text-base font-light leading-normal">
            ©Copyright Bodich 2025
          </p>
          <p className="text-base font-light leading-normal inline-flex items-center gap-3">
            Follow us:
            <span className="inline-flex justify-between items-center gap-4">
              {FooterSocials.map(({ id, link, icon: Icon }) => (
                <Link href={link} target="_blank" key={id}>
                  {Icon && (
                    <Icon
                      width={24}
                      height={24}
                      className="hover-effect-icon"
                    />
                  )}
                </Link>
              ))}
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};
