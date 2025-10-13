import { getPopularSneakers, SneakersCatalogItem } from "@/entities/sneakers";
import { Container, SectionTitles, ShowErrors } from "@/shared";

export const PopularSneakers = async () => {
  const { popularSneakers, error: popularSneakersError } =
    await getPopularSneakers();

  return (
    <section className="mt-20 margins-xs">
      <Container>
        <SectionTitles title="Popular sneakers" as="h2" align="center" />
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] mt-8">
          {popularSneakers.map((item) => (
            <SneakersCatalogItem key={item.id} sneaker={item} />
          ))}
        </div>
        {popularSneakersError && (
          <ShowErrors error={popularSneakersError} type="full" />
        )}
      </Container>
    </section>
  );
};
