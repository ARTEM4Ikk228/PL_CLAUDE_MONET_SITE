import PageHead from '@/components/PageHead';
import { info } from '@/lib/data';

export const metadata = {
  title: 'Контакти',
  description: 'Адреса, телефон і години роботи ресторану Claude monet у центрі Полтави.',
};

export default function ContactsPage() {
  return (
    <>
      <PageHead title="Контакти" lead="Приходьте або телефонуйте — із задоволенням забронюємо для вас столик." />
      <section className="section wrap contacts">
        <div>
          <h2>Адреса</h2>
          <p>{info.address}</p>
          <p><a className="textlink" href={info.mapLink} target="_blank" rel="noopener noreferrer">Відкрити на карті</a></p>

          <h2>Зв’язок</h2>
          <p>Телефон: <a href={info.phoneHref}>{info.phone}</a></p>
          <p>Email: <a href={`mailto:${info.email}`}>{info.email}</a></p>
          <p>Instagram: <a href={info.instagram} target="_blank" rel="noopener noreferrer">@claudemonet</a></p>

          <h2>Години роботи</h2>
          <dl className="hours-list">
            {info.hours.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="map">
          <iframe
            title="Карта: ресторан Claude monet, Полтава"
            src={info.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
