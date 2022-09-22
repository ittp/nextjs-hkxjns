import React from 'react';
import Link from 'next/link';
import { Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props;
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

const menu = [
  {
    id: 1,
    title: 'Справочник',
    href: '/phonebook',
  },
];

const Navbar = () => (
  <Nav>
    <Nav.Item as={NavLink} href="/" eventKey="1" icon={<DashboardIcon />}>
      Главная
    </Nav.Item>
    <Nav.Item as={NavLink} href="/portal">
      Справочник
    </Nav.Item>
    <Nav.Item as={NavLink} href="/tickets">
      Заявки
    </Nav.Item>
  </Nav>
);

export default Navbar;
