import Link from 'next/link';
import { info } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="logo">Claude monet</p>
          <p>Ресторан у центрі Полтави</p>
        </div>
        <div>
          <p>{info.address}</p>
          <p><a href={info.phoneHref}>{info.phone}</a></p>
        </div>
        <div>
          {info.hours.map((h) => (
            <p key={h.days}>{h.days}: {h.time}</p>
          ))}
          <p><Link href="/contacts">Як нас знайти</Link></p>
        </div>
      </div>
      <p className="wrap copy">© {new Date().getFullYear()} Claude monet. Усі права захищено.</p>
    </footer>
  );
}
