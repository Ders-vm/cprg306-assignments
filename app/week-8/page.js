"use client";
import { useEffect} from "react";
import Link from "next/link"; // Import Link from "next/link"
import { useUserAuth } from "./_utils/auth-context";
import HomeButton from "../Components/home";

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
        <HomeButton/>
        <h1>Welcome {user.displayName}</h1>
        <Link href="/week-8/shopping-list">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Shopping List
        </button>
        </Link>
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600" onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <HomeButton/>
      <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600" onClick={handleSignInWithGitHub}>Login with GitHub</button>
    </div>
  );
}

export default Page;
