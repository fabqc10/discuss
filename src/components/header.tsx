import Link from "next/link";
import { auth } from "@/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";

const Header = async () => {
  const session = await auth();
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={"/"}>Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? <div>Signed In</div> : <div>Signed Out</div>}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
