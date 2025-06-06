import { SneakersOrderItem } from "@/entities";

export const SneakersListOrder = () => {
  return (
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
  );
};
