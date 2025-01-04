import HeaderNavlinks from "../headerNavlinks/HeaderNavlinks";
import NavbarNavlinks from "../navbarNavlinks/NavbarNavlinks";

function NavLinks({ variant }) {
  return (
    <div>
      {variant === "header" && <HeaderNavlinks />}
      {variant === "navbar" && <NavbarNavlinks />}
    </div>
  );
}

export default NavLinks;
