"use client";
import { Spinner } from "flowbite-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export const HydrationWrapper = ({ children }: Props) => {
  const [isHydrated, setIsHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="flex items-center justify-center h-screen bg-[url('/bg-main.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="fixed inset-0 z-50 bg-black/55 flex items-center justify-center">
          <div className="flex justify-between items-center gap-4 flex-col">
            <Spinner color="default" size="xl" />
            <span className="text-white font-bold tracking-widest uppercase text-2xl">
              Just a sec...
            </span>
          </div>
        </div>
      </section>
    );
  }

  return <>{children}</>;
};
