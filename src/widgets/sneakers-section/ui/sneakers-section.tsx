import { getSneakersSlug } from "@/entities/sneakers";
import { SneakersVariantSelection } from "@/features/sneakers";
import { Container, GenderCorrect, SectionTitles, ShowErrors } from "@/shared";

type Props = {
  slug: string;
};

export const SneakerSection = async ({ slug }: Props) => {
  const { sneakerBySlug, rating, error } = await getSneakersSlug(slug);
  if (!sneakerBySlug || error) {
    return (
      <Container>
        <div className="mt-20 margins-xs flex justify-center items-center">
          <ShowErrors type="full" error="Oops... product not found!" />
        </div>
      </Container>
    );
  }
  return (
    <section className="mt-20 margins-xs">
      <Container>
        <SectionTitles
          title={<GenderCorrect gender={sneakerBySlug.gender} type="titles" />}
          types="sneakers"
          as="h2"
          align="center"
        />

        {/* Кроссовок */}
        <SneakersVariantSelection sneaker={sneakerBySlug} rating={rating} />

        {/* Отзывы */}
      </Container>
    </section>
  );
};
