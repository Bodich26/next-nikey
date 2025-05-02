import { Footer, Header } from "@/widgets";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col relative ">
      <Header />
      <main className=" flex-1">{children}</main>
      <Footer />
    </div>
  );
}
