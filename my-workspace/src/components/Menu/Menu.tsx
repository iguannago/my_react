import { Link, useLocation } from 'react-router-dom'; 
import styles from './menu.module.scss'; 

const Menu = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'HelloWorld', path: '/hello-world' },
    { name: 'List', path: '/list' },
  ];

  const renderedItems = menuItems.map((item, index) => (
    <Link
      key={index}
      to={item.path}
      className={`${styles.menuItem} ${
        location.pathname === item.path ? styles.active : ''
      }`}
    >
      {item.name}
    </Link>
  ));

  return <nav className={styles.menu}>{renderedItems}</nav>;
};

export default Menu;
