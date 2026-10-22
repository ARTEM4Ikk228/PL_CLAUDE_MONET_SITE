'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Головна' },
  { href: '/menu', label: 'Меню' },
  { href: '/about', label: 'Про нас' },
  { href: '/events', label: 'Події' },
  { href: '/contacts', label: 'Контакти' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">Claude monet</Link>
        <nav aria-label="Головна навігація">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? 'page' : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
