"use client";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
const HeaderAuth = () => {
  const session = useSession();
  let authContent: React.ReactNode;
  if(session.status === "loading"){
    authContent = null;
  } else if (session?.data?.user) {
    authContent = (
      <div>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session.data.user.image || ""} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={actions.signOut}>
                <Button type="submit"> Sign Out</Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
};

export default HeaderAuth;
