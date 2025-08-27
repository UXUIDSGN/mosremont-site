const projects = [
  { title: "Квартира в центре", img: "/portfolio1.jpg" },
  { title: "Офис премиум класса", img: "/portfolio2.jpg" },
  { title: "Таунхаус на Рублевке", img: "/portfolio3.jpg" },
  { title: "Студия дизайна", img: "/portfolio4.jpg" },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Наши работы</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover"/>
              <h4 className="text-lg font-semibold p-4">{p.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
