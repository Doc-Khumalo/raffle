import React from 'react';
import './Footer.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  fab,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
);

const Footer = () => {
  return (
    <div className="footerLinkWrapper">
      <ul>
        <li>
          <a href="https://www.facebook.com/DailyChoppins-461094991028290/?modal=admin_todo_tour" target="_blank" title="Facebook">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/DChoppins" target="_blank" title="Twitter">
          {/* to be added in */}
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/daily.choppins/?hl=en" target="_blank" title="Instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li>
        <li>
          <a href="https://t.me/dailychoppins" target="_blank" title="Telegram">
            <FontAwesomeIcon icon={['fab', 'telegram']} />
          </a>
        </li>
      </ul>
      <p id="footer_text">
        DailyChoppins holds free to enter daily raffles in Nigeria that gives out free airtime to all networks.
        Any information submitted may be used for marketing purposes.
      </p>
    </div>
  )
};

export default Footer;
