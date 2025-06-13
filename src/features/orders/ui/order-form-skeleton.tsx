import { SkeletonSneakersOrderItem } from "@/shared";

export const OrderFormSkeleton = () => {
  return (
    <div className="flex justify-between gap-8 mt-8 max-lg:flex-col-reverse animate-pulse">
      {/* Левая колонка - Данные получателя */}
      <div className="flex flex-col w-[275px]">
        <div className="border border-indigo-300 p-4 bg-transparent rounded-lg">
          <div className="h-7 w-40 bg-indigo-100 rounded-lg mb-6"></div>

          <div className="mb-4">
            <div className="h-4 w-24 bg-indigo-100 rounded-lg mb-2"></div>
            <div className="h-10 w-full bg-indigo-100 rounded-lg"></div>
          </div>

          <div className="mb-4">
            <div className="h-4 w-24 bg-indigo-100 rounded-lg mb-2"></div>
            <div className="h-10 w-full bg-indigo-100 rounded-lg"></div>
          </div>

          <div className="mb-4">
            <div className="h-4 w-24 bg-indigo-100 rounded-lg mb-2"></div>
            <div className="h-10 w-full bg-indigo-100 rounded-lg"></div>
          </div>
        </div>
        <div className="h-[48px] w-full bg-indigo-100 rounded-lg mt-6"></div>
      </div>

      {/* Центральная колонка - Адрес и товары */}
      <div className="flex flex-[2] h-[700px] flex-col gap-8 max-sm:gap-5">
        {/* Блок адреса доставки */}
        <div className="border border-indigo-300 p-4 bg-transparent rounded-lg">
          <div className="h-7 w-40 bg-indigo-100 rounded-lg mb-4"></div>
          <div className="h-10 w-full bg-indigo-100 rounded-lg"></div>
        </div>

        {/* Блок товаров */}
        <div className="border border-indigo-300 p-4 bg-transparent rounded-lg lg:overflow-y-auto max-lg:overflow-y-auto max-lg:h-[400px]">
          <div className="h-7 w-32 bg-indigo-100 rounded-lg mb-4"></div>

          <div className="flex flex-col gap-8 max-sm:gap-5">
            {[...Array(3)].map((_, index) => (
              <SkeletonSneakersOrderItem key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Правая колонка - Оплата, доставка, итоги */}
      <div className="flex flex-[1] flex-col gap-8 max-sm:gap-5">
        <div className="border border-indigo-300 p-4 bg-transparent rounded-lg">
          <div className="h-7 w-40 bg-indigo-100 rounded-lg mb-4"></div>
          <div className="flex gap-4">
            <div className="h-5 w-5 bg-indigo-100 rounded-lg"></div>
            <div className="h-5 w-20 bg-indigo-100 rounded-lg"></div>
          </div>
          <div className="flex gap-4 mt-2">
            <div className="h-5 w-5 bg-indigo-100 rounded-lg"></div>
            <div className="h-5 w-20 bg-indigo-100 rounded-lg"></div>
          </div>
        </div>
        <div className="border border-indigo-300 p-4 bg-transparent  rounded-lg">
          <div className="h-7 w-32 bg-indigo-100 rounded-lg mb-4"></div>
          <div className="flex gap-4">
            <div className="h-5 w-5 bg-indigo-100 rounded-lg"></div>
            <div className="h-5 w-24 bg-indigo-100 rounded-lg"></div>
          </div>
          <div className="flex gap-4 mt-2">
            <div className="h-5 w-5 bg-indigo-100 rounded-lg"></div>
            <div className="h-5 w-24 bg-indigo-100 rounded-lg"></div>
          </div>
        </div>
        <div className="border border-indigo-300 p-4 bg-transparent  rounded-lg flex flex-col gap-4">
          <div className="h-7 w-24 bg-indigo-100 rounded-lg mb-4"></div>
          <div className="h-10 w-full bg-indigo-100 rounded-lg mb-4"></div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-32 bg-indigo-100 rounded-lg"></div>
            <div className="h-6 w-16 bg-indigo-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
