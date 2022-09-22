import 'rsuite/dist/rsuite.min.css';
import { Sidenav, Row, Grid } from 'rsuite';

import { MainHeader } from '../components/Header';
const routes = {};
import Navbar from '../components/Navigation/Navbar';
function MyApp({ Component, pageProps }) {
  return (
    <Grid>
      <Navbar />
      <Component props={pageProps} />
    </Grid>
  );
}

export default MyApp;
