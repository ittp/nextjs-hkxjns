const MainHeader = () => {
  return <div>Header {props.organization.name} </div>;
};
let configs = {
  organization: {
    name: 'Комитет по транспорту',
    title: 'Портал',
  },
};
module.exports = { MainHeader };
