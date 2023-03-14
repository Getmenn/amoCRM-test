import "./footer.scss"
import telegram from "../../assets/telegram.svg"
import viber from "../../assets/viber.svg"
import whatsapp from "../../assets/whatsapp.svg"

const Footer = () => {
 
  return (
    <div className="footer"> {/* flex direction-row justify-between */}
      
      <div className="footer-about">
        <h2>О компании</h2>
        <ul>
          <li>Партнёрская программа</li>
          <li>Вакансии</li>
        </ul>
      </div>

      <div className="footer-menu">
        <h2>Меню</h2>
        <ul>
          <li>Расчёт стоимости</li>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Наши клиенты</li>
        </ul>
      </div>

      <div className="footer-info flex justify-end">
        <ul>
          <li>Кейсы</li>
          <li>Благодарственные письма</li>
          <li>Сертификаты</li>
          <li>Блог на Youtube</li>
          <li>Вопрос / Ответ</li>
        </ul>
      </div>

      <div className="footer-contacts">
        <h2>Контакты</h2>
        <ul>
          <li>+7 555 555-55-55</li>
          <li>
            <img src={telegram} alt="telegram" />
            <img src={viber} alt="viber" />
            <img src={whatsapp} alt="whatsapp" />
          </li>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
        
      </div>

      <div className="footer-policy">
        <span>©WELBEX 2022. Все права защищены.<br/></span>
        <span className="text-underline">Политика конфиденциальности</span>
      </div>
    </div>
  );
}

export {Footer};
