// Code for the page component that uses the useUserAuth hook to access the user object and the gitHubSignIn and firebaseSignOut functions. 

"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import {HomeButton} from "../Components/home";

function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignInWithGitHub = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  useEffect(() => {
    if (user) {
      console.log("User is authenticated:", user);
    } else {
      console.log("User is not authenticated");
    }
  }, [user]);

  if (user) {
    return (
      <div>
        <h1>Welcome {user.displayName}</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleSignInWithGitHub}>Login with GitHub</button>
    </div>
  );
}

export default Page;
