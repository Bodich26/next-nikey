import { Container } from "@/shared";
import { Header } from "@/widgets";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Header />

      <main className="flex-1">
        <section className="bg-[url('/bg-main.jpg')] bg-cover h-screen">
          <Container>
            <div className="pt-32">
              <h1 className="text-indigo-100 text-4xl">Главный экран</h1>
            </div>
          </Container>
        </section>
      </main>

      <footer>
        <Container>fdsf</Container>
      </footer>
    </div>
  );
}
