import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section wrap cta">
      <h1>Сторінку не знайдено</h1>
      <p className="muted">Можливо, адресу введено з помилкою. Поверніться на головну або в меню.</p>
      <div className="actions">
        <Link href="/" className="btn">На головну</Link>
        <Link href="/menu" className="btn ghost">Меню</Link>
      </div>
    </section>
  );
}
