import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import React, { useContext, useEffect } from "react";

export default function Contact() {
  const { setSeenWelcomePage } =
    useContext(SeenWelcomeScreenCtx);

  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <h1>COntact</h1>
    </Layout>
  );
}
