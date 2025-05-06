"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/shared";
import { NavMenu, FavoritesDrawer } from "@/features";
import { Search } from "lucide-react";
import { useScrollHeader } from "../model/use-scroll-header";
import { CartDrawer } from "@/features/cart";
import { UserDropdown } from "@/entities";

export const Header = () => {
  const scrolled = useScrollHeader();

  return (
    <header
      className={clsx(
        "pt-9 fixed w-full z-30 transition-colors duration-300",
        scrolled && "bg-indigo-900 !pt-6 !pb-6"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={136} height={0} />
          </Link>
          <div className="flex flex-row items-center gap-16">
            <NavMenu />
            <div className="flex items-center gap-6 ">
              <Search />
              <FavoritesDrawer />
              <CartDrawer />
              <UserDropdown />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
