import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">MosRemont</h1>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/about">О нас</Link></li>
            <li><Link href="/services">Услуги</Link></li>
            <li><Link href="/portfolio">Портфолио</Link></li>
            <li><Link href="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
