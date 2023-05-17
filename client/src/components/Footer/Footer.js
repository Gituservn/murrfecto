import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import "../Navbar/Navbar.scss";

import logo from "../../assets/footer/logo.svg";
import email from "../../assets/footer/envelope.svg";
import phone from "../../assets/footer/phone.svg";
import facebook from "../../assets/footer/facebook.svg";
import insta from "../../assets/footer/insta.svg";
import { scrollToTop } from "../../helpers/scrollToTop";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className="footer_container">
        <div className={"footer_info_wrapper"}>
          <div>
            <Link to={"/"} className={"footer_logo-link"} onClick={scrollToTop}>
              <img src={logo} alt="murrfecto logo" width={197} height={82} />
            </Link>

            <a id={"donation_footer"} className={"footer_donation"} href={"#"}>
              Нагодуй кота
            </a>
          </div>

          <nav className={"footer_nav"}>
            <a className={"footer_link"} href={"#"}>
              Про притулок
            </a>
            <Link to="/tails" className={"footer_link"} onClick={scrollToTop}>
              Наші хвости
            </Link>
          </nav>

          <address className="footer_address">
            <h2 className={"contacts_title"}>Контакти</h2>
            <ul>
              <li>
                <a className={"info_link"} href="tel:+380636286630">
                  <img
                    className={"contacts_icon"}
                    src={phone}
                    alt="phone icon"
                  />
                  <span>+38 063 628 6630</span>
                </a>
              </li>
              <li>
                <a className={"info_link"} href="tel:+380675681788">
                  <img
                    className={"contacts_icon"}
                    src={phone}
                    alt="phone icon"
                  />
                  <span>+38 067 568 1788</span>
                </a>
              </li>
              <li>
                <a className={"info_link"} href="mailto:info@example.com">
                  <img
                    className={"contacts_icon"}
                    src={email}
                    alt="email icon"
                  />
                  info@murrfecto.site
                </a>
              </li>
            </ul>
          </address>

          <div className={"footer_documents-wrapper"}>
            <a className={"footer_link"} href="#" target="_blank">
              Політика конфіденційності
            </a>
            <a
              className={"footer_link"}
              href="#"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              Правила поведінки на сайті
            </a>
          </div>
          <ul className={"social_list"}>
            <li className={"social_link"}>
              <a
                href="https://www.instagramm.com/"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <img src={insta} alt="instagramm" width={48} height={48} />
              </a>
            </li>
            <li className={"social_link"}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <img
                  src={facebook}
                  alt="facebook icon"
                  width={48}
                  height={48}
                />
              </a>
            </li>
          </ul>
        </div>
        <p className="footer_copyrights">
          Розробка BazaTraineeUkraine 2023 &#169; Всі права захищені.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
