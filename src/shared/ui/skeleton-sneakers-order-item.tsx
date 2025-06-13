export const SkeletonSneakersOrderItem = () => {
  return (
    <div className="w-full relative rounded-lg border border-indigo-300 p-4 flex gap-4 max-lg:flex-col animate-pulse">
      {/* Кнопка удаления */}
      <div className="absolute top-4 right-4 h-6 w-6 bg-indigo-100 rounded-full"></div>

      {/* Изображение */}
      <div className="relative w-full min-w-[20%] h-[150px] bg-indigo-100 rounded-lg flex items-center justify-center">
        <svg
          className="w-10 h-10 text-indigo-200"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      {/* Детали товара */}
      <div className="flex flex-col flex-wrap gap-3 w-full">
        {/* Бренд */}
        <div className="flex justify-between">
          <div className="h-4 w-20 bg-indigo-100 rounded"></div>
          <div className="h-4 w-12 bg-indigo-100 rounded"></div>
        </div>

        {/* Модель */}
        <div className="flex justify-between">
          <div className="h-4 w-16 bg-indigo-100 rounded"></div>
          <div className="h-4 w-24 bg-indigo-100 rounded"></div>
        </div>

        {/* Размер */}
        <div className="flex justify-between">
          <div className="h-4 w-16 bg-indigo-100 rounded"></div>
          <div className="h-4 w-8 bg-indigo-100 rounded"></div>
        </div>

        {/* Цвет */}
        <div className="flex justify-between">
          <div className="h-4 w-16 bg-indigo-100 rounded"></div>
          <div className="h-4 w-20 bg-indigo-100 rounded"></div>
        </div>

        {/* Количество */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-20 bg-indigo-100 rounded"></div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-100 rounded"></div>
            <div className="h-4 w-4 bg-indigo-100 rounded"></div>
            <div className="h-8 w-8 bg-indigo-100 rounded"></div>
          </div>
        </div>

        {/* Цена */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-12 bg-indigo-100 rounded"></div>
          <div className="h-6 w-16 bg-indigo-100 rounded"></div>
        </div>
      </div>
    </div>
  );
};
