import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useUserAuth } from "./_utils/auth-context";

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

  // If user is authenticated, redirect to the desired page
  if (user) {
    return <Redirect to="/shopping-list/Page" />;
  }

  return (
    <div>
      <button onClick={handleSignInWithGitHub}>Login with GitHub</button>
    </div>
  );
}

export default Page;
