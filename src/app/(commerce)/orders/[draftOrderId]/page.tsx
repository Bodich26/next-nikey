import { PlaceOrderForm } from "@/processes";
import { Container, HeroSectionInfo, SectionTitles } from "@/shared";

type SneakerSlug = {
  params: Promise<{
    draftOrderId: string;
  }>;
};

export default async function Orders({ params }: SneakerSlug) {
  const { draftOrderId } = await params;
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
          <PlaceOrderForm draftOrderId={draftOrderId} />
        </Container>
      </section>
    </>
  );
}
