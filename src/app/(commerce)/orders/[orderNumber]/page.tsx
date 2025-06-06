"use client";

import { SneakersOrderItem } from "@/entities";
import { checkboxPayment, checkboxDelivery } from "@/features/orders";
import {
  checkboxTheme,
  labelTheme,
} from "@/features/orders/model/checkbox-order-list";
import {
  CheckboxGroup,
  Container,
  HeroSectionInfo,
  SectionTitles,
  SneakersPrice,
} from "@/shared";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { CheckCircle2, Locate, Mail, Phone, Tag, User } from "lucide-react";

export default function Orders() {
  return (
    <>
      <HeroSectionInfo
        title={"Secure Checkout – Fast & Easy Delivery"}
        description={
          "Finalize your purchase with confidence. We offer safe payment options and fast nationwide shipping to your door. Your sneakers are just a few clicks away!"
        }
        imageUrl={"/order-image.jpeg"}
      />
      <section className="mt-20 margins-xs">
        <Container>
          <SectionTitles title={"My order"} as={"h3"} align={"center"} />
          <div className="flex justify-between gap-8 mt-8 max-lg:flex-col-reverse">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 border border-indigo-300 p-4 bg-transparent rounded-lg text-indigo-500">
                <h4 className="uppercase text-xl font-medium text-indigo-900">
                  recipient details
                </h4>
                <div>
                  <div className="mb-2">
                    <Label htmlFor="username" className="!text-indigo-700">
                      Your name
                    </Label>
                  </div>
                  <TextInput
                    type="text"
                    id="username"
                    sizing="sm"
                    placeholder="Input your name"
                    required
                    icon={User}
                    theme={{
                      base: "text-indigo-500 dark:text-indigo-500",
                      field: {
                        base: "group !bg-transparent ",
                        icon: {
                          svg: "!text-indigo-500 ",
                        },
                        input: {
                          base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                        },
                      },
                    }}
                  />
                </div>
                <div>
                  <div className="mb-2">
                    <Label htmlFor="tel" className="!text-indigo-700">
                      Phone number
                    </Label>
                  </div>
                  <TextInput
                    type="tel"
                    id="tel"
                    sizing="sm"
                    placeholder="123 4567 890"
                    required
                    icon={Phone}
                    theme={{
                      base: "text-indigo-500 dark:text-indigo-500",
                      field: {
                        base: "group !bg-transparent ",
                        icon: {
                          svg: "!text-indigo-500 ",
                        },
                        input: {
                          base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                        },
                      },
                    }}
                  />
                </div>
                <div>
                  <div className="mb-2">
                    <Label htmlFor="email" className="!text-indigo-700">
                      Email address
                    </Label>
                  </div>
                  <TextInput
                    type="email"
                    id="email"
                    sizing="sm"
                    placeholder="sneakers@gmai.com"
                    required
                    icon={Mail}
                    theme={{
                      base: "text-indigo-500 dark:text-indigo-500",
                      field: {
                        base: "group !bg-transparent ",
                        icon: {
                          svg: "!text-indigo-500 ",
                        },
                        input: {
                          base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="uppercase w-full cursor-pointer transition-colors duration-300"
              >
                <CheckCircle2 className="mr-2" />
                Confirm
              </Button>
            </div>
            <div className="flex flex-[2] h-[700px] flex-col gap-8 max-sm:gap-5">
              <div className="border border-indigo-300 p-4 bg-transparent rounded-lg">
                <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4">
                  Delivery Address
                </h4>
                <div>
                  <Select
                    id="location"
                    required
                    sizing="sm"
                    icon={Locate}
                    theme={{
                      base: "w-full  text-indigo-500 dark:text-indigo-500",
                      field: {
                        icon: {
                          svg: "!text-indigo-500 ",
                        },
                        base: "",
                        select: {
                          base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                        },
                      },
                    }}
                  >
                    <option value="">Select your delivery address</option>
                    <option value="cheap">Cheap ones first</option>
                    <option value="dear">Dear ones first</option>
                  </Select>
                </div>
              </div>
              <div className="border border-indigo-300 p-4 bg-transparent rounded-lg lg:overflow-y-auto max-lg:overflow-y-auto max-lg:h-[400px]">
                <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4">
                  Sneakers
                </h4>
                <div className="flex flex-col gap-8 max-sm:gap-5">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <SneakersOrderItem key={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-[1] flex-col gap-8 max-sm:gap-5">
              <div className="border border-indigo-300 p-4 bg-transparent rounded-lg">
                <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4 ">
                  Payment method
                </h4>
                <div className="flex items-center gap-2">
                  {checkboxPayment.map((group) => (
                    <CheckboxGroup
                      key={group.name}
                      options={group.options}
                      checkboxTheme={checkboxTheme}
                      labelTheme={labelTheme}
                    />
                  ))}
                </div>
              </div>
              <div className="border border-indigo-300 p-4 bg-transparent  rounded-lg">
                <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4">
                  Delivery
                </h4>
                <div className="flex items-center gap-2">
                  {checkboxDelivery.map((group) => (
                    <CheckboxGroup
                      key={group.name}
                      options={group.options}
                      checkboxTheme={checkboxTheme}
                      labelTheme={labelTheme}
                    />
                  ))}
                </div>
              </div>
              <div className="border border-indigo-300 p-4 bg-transparent  rounded-lg flex flex-col gap-4">
                <h4 className="uppercase text-xl font-medium text-indigo-900 ">
                  Totals
                </h4>
                <div>
                  <Select
                    id="location"
                    required
                    sizing="sm"
                    icon={Tag}
                    theme={{
                      base: "w-full  text-indigo-500 dark:text-indigo-500",
                      field: {
                        icon: {
                          svg: "!text-indigo-500 ",
                        },
                        base: "",
                        select: {
                          base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                        },
                      },
                    }}
                  >
                    <option value="">Choose your coupon</option>
                    <option value="discount10%">10% discount coupon</option>
                    <option value="firstOrder20%">
                      20% coupon for first order
                    </option>
                  </Select>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-medium text-lg text-indigo-900 capitalize">
                    Order amount:
                  </p>
                  <SneakersPrice price={100} variant={"main"} discount={0} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
