// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const icons = {
  essed: '',
  nav: {
    phonebook: '',
  },
};

const nav = {
  items: [
    {
      key: 1,
      title: 'Main',
      url: '#',
      icon: '',
    },
    {
      key: 2,
      title: 'PhoneBook',
      url: '#',
      icon: icons.nav.phonebook,
    },
  ],
};
const apps = {
  organization: {
    calendar: {},
    birthdays: {},
    phonebook: {},
    tickets: {},
    admin: {},
  },
  external: {
    esedd: {},
    pautina: {},
    iis: {},
  },

  links: [
    {
      id: 1,
      key: 'esedd',
      title: 'EСЭДД',
      description: '',
      url: '/apps/esedd',
      icon: 'esedd',
    },
    {
      id: 2,
      key: 'phonebook',
      title: 'PhoneBook',
      description: 'phonebook',
      url: '/apps/phonebook',
      icon: 'phonebook',
    },
  ],
};

const axios = require('axios');
let logo =
  'https://www.gov.spb.ru/static/2/files/logo.2cc00c1e.6826b6aa2472.svg';
export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({ logo, brand, apps, nav });
};
