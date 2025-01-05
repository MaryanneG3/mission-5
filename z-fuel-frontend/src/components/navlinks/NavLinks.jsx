import HeaderNavlinks from "../headerNavlinks/HeaderNavlinks";
import NavbarNavlinks from "../navbarNavlinks/NavbarNavlinks";

function NavLinks({ variant }) {
  return (
    <div>
      {variant === "header" && <HeaderNavlinks />}
      {variant !== "header" && <NavbarNavlinks variant={variant} />}
    </div>
  );
}

export default NavLinks;
