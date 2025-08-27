import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-6">О нашей компании</h1>
        <p className="text-lg leading-relaxed mb-4">
          MosRemont — команда профессионалов с 10-летним опытом ремонта премиум-класса в Москве. 
          Мы создаем уникальные интерьеры, учитывая все ваши пожелания.
        </p>
        <p className="text-lg leading-relaxed">
          Наши мастера работают только с качественными материалами и современными технологиями, 
          чтобы каждый проект выглядел роскошно и служил долго.
        </p>
      </main>
      <Footer />
    </>
  );
}
