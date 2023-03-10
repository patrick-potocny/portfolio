import Layout from "@/components/Layout";
import React, { useContext, useEffect } from "react";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";

export default function Projects() {
  const { setSeenWelcomePage } =
    useContext(SeenWelcomeScreenCtx);

  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <h1>Projects</h1>
    </Layout>
  );
}
