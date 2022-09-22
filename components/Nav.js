import { Sidenav, Nav, Grid, Row, Col, Drawer } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import React from 'react';
import Link from 'next/link';

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props;
  return (
    <Nav.Item eventKey="1" icon={<DashboardIcon />}>
      <Link href={href} as={as}>
        <a ref={ref} {...rest} />
      </Link>
    </Nav.Item>
  );
});


const Navbar = () => (
  <Nav>
    <Nav.Item as={NavLink} href="/">
      Home
    </Nav.Item>
    <Nav.Item as={NavLink} href="/portal">
      Portal
    </Nav.Item>
    <Nav.Item as={NavLink} href="/page2" eventKey="1" icon={<DashboardIcon />}>
      Page 2
    </Nav.Item>
  </Nav>
);

const NavigationSidebar = () => (
  <Row>
    <Col>
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Главная
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              Справочник
            </Nav.Item>
            <Nav.Item eventKey="32" icon={<GroupIcon />}>
              Заявки
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Инвентаризация" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Устройства</Nav.Item>
              <Nav.Item eventKey="3-2">Типы устройств</Nav.Item>
              <Nav.Item eventKey="3-3">Производители</Nav.Item>
              <Nav.Item eventKey="3-4">Настройка</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              eventKey="4"
              title="Конфигурация"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1">Организация</Nav.Item>
              <Nav.Item eventKey="4-2">Заявки</Nav.Item>
              <Nav.Item eventKey="4-3">Устройства</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Приложения">
                <Nav.Item eventKey="4-5-1">Добавить</Nav.Item>
                <Nav.Item eventKey="4-5-2">Редактирование</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Col>
  </Row>
);

module.exports = { NavigationSidebar };
