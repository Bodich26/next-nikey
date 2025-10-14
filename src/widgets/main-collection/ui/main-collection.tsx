import { getActiveCollection } from "@/entities/main-collection";
import { Container, ShowErrors } from "@/shared";
import { MainCollectionView } from "./main-collection-view";

export const MainCollection = async () => {
  const { collectionData, error: collectionError } =
    await getActiveCollection();
  return (
    <section className="bg-[url('/bg-main.jpg')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="pt-20 pb-[100px] sm:pb-[175px]">
          {collectionError ? (
            <ShowErrors error={collectionError} type={"full"} />
          ) : (
            <MainCollectionView collection={collectionData[0]} />
          )}
        </div>
      </Container>
    </section>
  );
};
