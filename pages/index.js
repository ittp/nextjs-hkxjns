import Head from 'next/head';
import {
  Form,
  Grid,
  Button,
  IconButton,
  ButtonGroup,
  ButtonToolbar,
  Panel,
  Card,
  Drawer,
  Col,
  Row,
  PanelGroup,
  Placeholder,
  Loader,
  Timeline,
} from 'rsuite';
import { useState, useEffect, Component } from 'react';
// let fetchData = async (ctx) => {
//   return await axios('/api/hello');
// };

import _ from 'lodash';
let PanelItem = (data) => {
  // data.getPrototypeOf();
  data.map((i) => <Panel {...i} />);
};
let adta = [
  { time: '16:28', message: 'Stop' },
  {
    time: '16:27:41',
    message: 'Your order starts processing',
  },
];

// let TLI = Object.entries(adta).map((item, key) => (
//   <Timeline.Item>{item.time}</Timeline.Item>
// ));

// const Time = () => {
//   return <Timeline children={[1, 2, 3]}></Timeline>;
// };

const staticAdmin = (
  <li class="dropdown">
    <a href="adm_index.php">Администрирование</a>
    <ul class="dropdown-menu">
      <li>
        <a href="cartridge_adm.php">Замена картриджа</a>
      </li>
      <li>
        <a href="technology_adm.php">Любой технический ИТ вопрос</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="equipment_adm.php">Оборудование</a>
      </li>
      <li>
        <a href="cartridges_adm.php">Картриджи</a>
      </li>
      <li>
        <a href="equipment_cartridge_adm.php">
          Сопоставление Картридж-Устройство
        </a>
      </li>
      <li>
        <a href="types_adm.php">Типы оборудования</a>
      </li>
      <li>
        <a href="vendor_adm.php">Вендоры оборудования</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="rooms_adm.php">Помещения</a>
      </li>
      <li>
        <a href="buildings_adm.php">Здания</a>
      </li>
      <li>
        <a href="executors_adm.php">Исполнители</a>
      </li>
      <li>
        <a href="statuses_adm.php">Статусы</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="organizations_adm.php">Организации</a>
      </li>
      <li>
        <a href="people_adm.php">Люди</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="ext_adm.php">Внешние системы</a>
      </li>
    </ul>
  </li>
);
const Home = (children) => {
  let controllers = {
    admin: {
      cartridge_adm: () => '',
      technology_adm: () => '', // ticket
      equipment_adm: () => '', // devices.equipment
      cartridges_adm: () => '', // devices.equipment.cartridges
      equipment_cartridge_adm: () => '',
      types_adm: () => '', // devices.types
      vendor_adm: () => '', // devices.vendors
      rooms_adm: () => {}, // ogranization.rooms
      buildings_adm: () => {}, // ogranization.locations
      executors_adm: () => {}, // organization.roles
    },
  };

  return (
    <>
      <nav>
        <li class="dropdown">
          <a href="adm_index.php">Администрирование</a>
          <ul class="dropdown-menu">
            <li>
              <a href="cartridge_adm.php">Замена картриджа</a>
            </li>
            <li>
              <a href="technology_adm.php">Любой технический ИТ вопрос</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="equipment_adm.php">Оборудование</a>
            </li>
            <li>
              <a href="cartridges_adm.php">Картриджи</a>
            </li>
            <li>
              <a href="equipment_cartridge_adm.php">
                Сопоставление Картридж-Устройство
              </a>
            </li>
            <li>
              <a href="types_adm.php">Типы оборудования</a>
            </li>
            <li>
              <a href="vendor_adm.php">Вендоры оборудования</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="rooms_adm.php">Помещения</a>
            </li>
            <li>
              <a href="buildings_adm.php">Здания</a>
            </li>
            <li>
              <a href="executors_adm.php">Исполнители</a>
            </li>
            <li>
              <a href="statuses_adm.php">Статусы</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="organizations_adm.php">Организации</a>
            </li>
            <li>
              <a href="people_adm.php">Люди</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="ext_adm.php">Внешние системы</a>
            </li>
          </ul>
        </li>
      </nav>
      <PanelGroup accordion bordered>
        {Array.from(['1', '2', '3']).map((item, key) => (
          <Panel title={item} children={item} key={key} />
        ))}
      </PanelGroup>
    </>
  );
};

module.exports = Home;
