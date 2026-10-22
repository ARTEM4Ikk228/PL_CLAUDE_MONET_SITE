import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { info } from '@/lib/data';

export const metadata = {
  title: 'Події та банкети',
  description: 'Банкети, дні народження, приватні вечері та дегустації вин у ресторані Claude monet, Полтава.',
};

const events = [
  { t: 'Банкети та дні народження', d: 'Окрема зона в залі, авторське меню під ваш бюджет, торт від нашого кондитера.' },
  { t: 'Приватні вечері', d: 'Камерні вечори для невеликої компанії: сет із п’яти страв і підбір вин.' },
  { t: 'Дегустації вин', d: 'Раз на місяць запрошуємо на вечір із винами та легкими закусками. Анонси — в Instagram.' },
  { t: 'Бізнес-обіди', d: 'Швидке обслуговування, окремий столик для переговорів і рахунок для компанії.' },
];

export default function EventsPage() {
  return (
    <>
      <PageHead
        title="Події та банкети"
        lead="Зробимо свято, зустріч або вечерю такою, якою ви її уявляєте."
      />
      <section className="section wrap">
        <ul className="events">
          {events.map((e) => (
            <li key={e.t}>
              <h3>{e.t}</h3>
              <p>{e.d}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="section tint">
        <div className="wrap cta">
          <h2>Розкажіть про вашу подію</h2>
          <p className="muted">
            Напишіть або зателефонуйте — узгодимо дату, кількість гостей і меню.
          </p>
          <div className="actions">
            <a href={info.phoneHref} className="btn">{info.phone}</a>
            <a href={`mailto:${info.email}`} className="btn ghost">{info.email}</a>
          </div>
          <p><Link href="/menu" className="textlink">Переглянути меню</Link></p>
        </div>
      </section>
    </>
  );
}
