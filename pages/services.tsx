import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Наши услуги</h1>
        <Services />
      </main>
      <Footer />
    </>
  );
}
