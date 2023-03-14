import "./body.scss"


const Body = () => {
 
  return (
    <div className="body flex direction-row justify-between">
      <div className="body-title">
        <h1>Зарабатывайте больше<br/>
          <span className="gradient-text"> с WELBEX</span>
        </h1>
        <p>Развиваем и контролируем<br/>продажи за вас</p>
      </div>
      <div className="body-advantages">
        <p>
          Вместе с <span className="gradient-text">БЕСПЛАТНОЙ<br/> КОНСУЛЬТАЦИЕЙ</span>  мы дарим:
        </p>
        <div className="body-elements-box flex direction-row justify-end">

          <div className="body__element">
            <h2>
              <span className="gradient-line">— </span>Виджеты
            </h2>
            <span>
              30 готовых<br />
              решений
            </span>
          </div>

          <div className="body__element">
            <h2>
              <span className="gradient-line">— </span>Dashboard
            </h2>
            <span>
              с показателями<br />
              вашего бизнеса
            </span>
          </div>

          <div className="body__element">
            <h2>
              <span className="gradient-line">— </span>Skype Аудит
            </h2>
            <span>
              отдела продажи<br />
              и CRM системы
            </span>
          </div>

          <div className="body__element">
            <h2>
              <span className="gradient-line">— </span>35 дней
            </h2>
            <span>
              использования<br />
              CRM
            </span>
          </div>
          
        </div>

        <button className="body__button">
          Получить консультацию
        </button>
      </div>
    </div>
  );
}

export {Body};
