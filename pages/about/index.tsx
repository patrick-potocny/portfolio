import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import React, { useContext, useEffect } from "react";

export default function About() {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  );
}
