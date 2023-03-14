import "./header.scss"
import logo from "../../assets/logo_welbex.svg"
import telegram from "../../assets/telegram.svg"
import viber from "../../assets/viber.svg"
import whatsapp from "../../assets/whatsapp.svg"

const Header = () => {
 
  return (
    <div className="header flex direction-row">
      <div className="header__logo flex">
        <img src={logo} alt="logo" />
        <span>крупный интегратор CRM<br/> в Росcии и ещё 8 странах</span>
      </div>
      <div className="header__nav flex direction-row align-items-start">
        <ul className="flex direction-row">
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li>Сертификаты</li>
        </ul>
      </div>
      <div className="header__number">
        <span>+7 555 555-55-55</span>
      </div>
      <div className="header__social flex direction-row justify-between">
        <img src={telegram} alt="telegram" />
        <img src={viber} alt="viber" />
        <img src={whatsapp} alt="whatsapp" />
      </div>
    </div>
  );
}

export {Header};
