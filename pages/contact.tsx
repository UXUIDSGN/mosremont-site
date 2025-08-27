import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-6 text-center">Контакты</h1>
        <p className="text-lg mb-4 text-center">
          Свяжитесь с нами для консультации или заказа ремонта:
        </p>
        <div className="max-w-md mx-auto space-y-4">
          <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
          <p><strong>Email:</strong> info@mosremont.ru</p>
          <p><strong>Адрес:</strong> Москва, ул. Пушкина, 10</p>
        </div>
        <form className="mt-8 max-w-md mx-auto space-y-4">
          <input className="w-full p-3 border rounded" type="text" placeholder="Ваше имя" />
          <input className="w-full p-3 border rounded" type="email" placeholder="Ваш email" />
          <textarea className="w-full p-3 border rounded" placeholder="Сообщение"></textarea>
          <button className="w-full bg-secondary text-primary font-bold p-3 rounded hover:bg-accent transition">
            Отправить
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
