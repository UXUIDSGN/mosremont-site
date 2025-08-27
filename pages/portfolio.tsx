import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Наши работы</h1>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
