import Link from 'next/link';
import { info } from '@/lib/data';

const day = [
  { t: 'Ранок', h: '9:00 – 12:00', d: 'Сніданки, свіжа випічка й кава. Світло ще холодне й прозоре.' },
  { t: 'День', h: '12:00 – 17:00', d: 'Легкі обіди та салати, домашні лимонади на веранді.' },
  { t: 'Вечір', h: 'з 17:00', d: 'Повне меню, вино, свічки. Зал ставатиме золотим.' },
];

const featured = [
  { n: 'Полтавські галушки', d: 'Класика регіону з печінкою, шкварками та сметанною підливою.', p: '230 ₴' },
  { n: 'Качина грудка', d: 'З вишневим соусом і пюре із селери — наша вечірня візитівка.', p: '410 ₴' },
  { n: 'Водяні лілії', d: 'Мус із білого шоколаду, лаванда та сироп із жасмину.', p: '180 ₴' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="drift" aria-hidden="true"><div className="paint" /></div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="wrap hero-copy">
          <h1>Claude monet</h1>
          <p className="lead">
            Ресторан у центрі Полтави. Кухня, що змінюється разом зі світлом дня —
            як на картинах, які дали нам ім’я.
          </p>
          <div className="actions">
            <Link href="/menu" className="btn">Переглянути меню</Link>
            <a href={info.phoneHref} className="btn ghost">Забронювати: {info.phone}</a>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <h2>Один зал — три світла</h2>
        <p className="muted narrow">
          Клод Моне писав той самий мотив в різний час доби. Ми робимо так само зі столом.
        </p>
        <div className="times">
          {day.map((x) => (
            <article key={x.t}>
              <h3>{x.t}</h3>
              <p className="hours">{x.h}</p>
              <p>{x.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2>Що замовляють найчастіше</h2>
          <ul className="featured">
            {featured.map((f) => (
              <li key={f.n}>
                <div>
                  <h3>{f.n}</h3>
                  <p>{f.d}</p>
                </div>
                <span className="price">{f.p}</span>
              </li>
            ))}
          </ul>
          <p><Link href="/menu" className="textlink">Усе меню</Link></p>
        </div>
      </section>

      <section className="section wrap cta">
        <h2>Столик на вечір?</h2>
        <p className="muted">Бронюйте за телефоном — ми працюємо щодня до пізнього вечора.</p>
        <div className="actions">
          <a href={info.phoneHref} className="btn">Зателефонувати</a>
          <Link href="/contacts" className="btn ghost">Адреса та години</Link>
        </div>
      </section>
    </>
  );
}
