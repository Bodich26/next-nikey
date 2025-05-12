"use client";
import dynamic from "next/dynamic";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/shared";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { useScrollHeader } from "../model/use-scroll-header";
import { UserDropdown } from "@/entities";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const FavoritesDrawer = dynamic(
  () => import("@/features").then((m) => m.FavoritesDrawer),
  { ssr: false, loading: () => <Heart /> }
);
const CartDrawer = dynamic(
  () => import("@/features").then((m) => m.CartDrawer),
  { ssr: false, loading: () => <ShoppingCart /> }
);
const SearchDrawer = dynamic(
  () => import("@/features").then((m) => m.SearchDrawer),
  { ssr: false, loading: () => <Search /> }
);

export const Header = () => {
  const scrolled = useScrollHeader();

  return (
    <header
      className={clsx(
        "max-md:pt-0 max-md:bg-indigo-900  pt-9 fixed w-full z-30 transition-colors duration-300",
        scrolled && "bg-indigo-900 !pt-6 !pb-6 max-md:!pt-0 max-md:!pb-0"
      )}
    >
      <Container>
        <Navbar
          fluid
          rounded
          theme={{
            root: {
              base: "lg:!bg-transparent md:!bg-transparent lg:p-0 md:p-0 max-md:py-4 max-md:px-4 dark:border-transparent max-md:dark:bg-indigo-900",
              rounded: {
                on: "rounded",
                off: "",
              },
              bordered: {
                on: "border",
                off: "",
              },
              inner: {
                base: "mx-auto flex flex-wrap items-center justify-between",
                fluid: {
                  on: "",
                  off: "container",
                },
              },
            },
            brand: {
              base: "flex items-center",
            },
            collapse: {
              base: "w-full md:block md:w-auto",
              list: "mt-4 flex items-center max-md:items-stretch flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
              hidden: {
                on: "hidden",
                off: "",
              },
            },
            link: {
              base: "block py-2 pl-3 pr-4 md:p-0 text-lg font-normal leading-none",
              active: {
                on: "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white",
                off: "border-b !border-indigo-50/50 text-indigo-50 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-indigo-50 dark:hover:bg-indigo-50 dark:hover:text-indigo-50 md:dark:hover:bg-transparent md:dark:hover:text-indigo-50",
              },
              disabled: {
                on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                off: "",
              },
            },
            toggle: {
              base: "inline-flex items-center rounded-lg p-2 text-sm text-indigo-50 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-indigo-50 dark:hover:bg-indigo-50 dark:focus:ring-indigo-50",
              icon: "h-6 w-6 shrink-0",
              title: "sr-only",
            },
          }}
        >
          <NavbarBrand as={Link} href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={0}
              height={0}
              className="max-w-[9rem] w-full h-auto"
            />
          </NavbarBrand>

          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#">New</NavbarLink>
            <NavbarLink as={Link} href="#">
              Men
            </NavbarLink>
            <NavbarLink href="#">Women</NavbarLink>
            <NavbarLink href="#">Kids</NavbarLink>
            <NavbarLink href="#">About us</NavbarLink>
            <div className="lg:ml-16 flex items-center gap-5 max-md:justify-end max-md:mt-7">
              <SearchDrawer />
              <FavoritesDrawer />
              <CartDrawer />
              <UserDropdown />
            </div>
          </NavbarCollapse>
        </Navbar>
      </Container>
    </header>
  );
};
