import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { GiNightSleep } from 'react-icons/gi';
import { FaInfoCircle } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">My Dreams</Link>
          <GiNightSleep />
        </li>
        <li>
          <Link href="/about">About</Link>
          <FaInfoCircle />
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
