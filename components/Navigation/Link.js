import Link from 'next/link';
import { Nav } from 'rsuite';

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props;
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

return () => {
  return (
    <Nav>
      <Nav.Item as={NavLink} href="/">
        Главная
      </Nav.Item>

      <Nav.Item as={NavLink} href="/apps/organization/">
        Справочник
      </Nav.Item>
    </Nav>
  );
};
