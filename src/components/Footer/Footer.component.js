import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
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
          <Link to="https://www.facebook.com/DailyChoppins-461094991028290/?modal=admin_todo_tour" target="_blank" title="Facebook">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/dailychoppinss" target="_blank" title="Twitter">
          {/* to be added in */}
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/dailychoppinss" target="_blank" title="Instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </Link>
        </li>
        <li>
          <Link to="https://t.me/dailychoppins" target="_blank" title="Telegram">
            <FontAwesomeIcon icon={['fab', 'telegram']} />
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default Footer;
