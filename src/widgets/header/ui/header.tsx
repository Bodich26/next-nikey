import Link from "next/link";
import Image from "next/image";
import { Container } from "@/shared";
import { NavMenu } from "@/features";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="pt-9 absolute w-full z-10">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={136} height={0} />
          </Link>
          <div className="flex flex-row items-center gap-16">
            <NavMenu />
            <div className="flex items-center gap-6 ">
              <Search />
              <Heart />
              <ShoppingCart />
              <User />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
