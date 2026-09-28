export default function About() {
  return (
    <div className="page">
      <section className="about-hero">
        <h2>О магазине DotaHub</h2>
        <p>Мы продаём игровые предметы с 1488 года</p>
      </section>

      <section className="about-content">
        <div className="about-block">
          <h3>Наша история</h3>
          <p>
            DotaHub был основан группой крутых перцев для поднятия денег на бизнесе ООО "Тмыв денег"
          </p>
        </div>

        <div className="about-block">
          <h3>Наша задача</h3>
          <p>
            Поднять бабла на лошках
          </p>
        </div>

        <div className="stats">
          <div className="stat">
            <strong>50 000+</strong>
            <span>Недовольных клиентов</span>
          </div>
          <div className="stat">
            <strong>12 000+</strong>
            <span>Предметов в каталоге</span>
          </div>
          <div className="stat">
            <strong>Много лет</strong>
            <span>На рынке</span>
          </div>
          <div className="stat">
            <strong>10/5
            </strong>
            <span>Средний рейтинг</span>
          </div>
        </div>

        <div className="about-block">
          <h3>Контакты</h3>
          <ul className="contacts">
            <li>Email: dotahub@mail.ru</li>
            <li>Discord: dotahub777</li>
            <li>Telegram: @dotahub6767</li>
            <li>Поддержка: не будет</li>
          </ul>
        </div>
      </section>
    </div>
  );
}