const services = [
  { title: "Косметический ремонт", desc: "Быстрое обновление вашего жилья под ключ" },
  { title: "Евроремонт", desc: "Современные материалы и премиальный дизайн" },
  { title: "Дизайн интерьера", desc: "Создаем уникальные проекты для вашего комфорта" },
  { title: "Ремонт офисов", desc: "Функциональные и стильные рабочие пространства" }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Наши услуги</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-6 bg-light rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2">{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
