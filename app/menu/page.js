import PageHead from '@/components/PageHead';
import { menu } from '@/lib/data';

export const metadata = {
  title: 'Меню',
  description: 'Меню ресторану Claude monet у Полтаві: закуски, основні страви, десерти та напої.',
};

export default function MenuPage() {
  return (
    <>
      <PageHead
        title="Меню"
        lead="Сезонні продукти від місцевих фермерів. Про алергени та вегетаріанські варіанти запитуйте в офіціанта."
      />
      <div className="wrap menu-page">
        <nav className="menu-nav" aria-label="Розділи меню">
          {menu.map((c) => (
            <a key={c.id} href={`#${c.id}`}>{c.title}</a>
          ))}
        </nav>
        {menu.map((c) => (
          <section key={c.id} id={c.id} className="menu-cat">
            <h2>{c.title}</h2>
            <ul>
              {c.items.map((i) => (
                <li key={i.name}>
                  <div className="row">
                    <h3>{i.name}</h3>
                    <span className="leader" aria-hidden="true" />
                    <span className="price">{i.price} ₴</span>
                  </div>
                  <p>{i.desc}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
