"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  if (session.data?.user) {
    return <div>From Client USER is Sign In</div>;
  }
  return <div>From Client USER is NOT Sign In </div>;
};

export default Profile;
