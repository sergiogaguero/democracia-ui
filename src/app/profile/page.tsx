import { getServerSession } from "next-auth";
import Header from "@/components/header.component";
import { authOptions } from "@/lib/auth";
import axios from "axios";
import { useState } from "react";
import Profile from "@/components/Profile";


export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log('user', user)
  return (
    <>
      <Header />
      <Profile user={user}/>
    </>
  );
}
