import React, { useContext, useEffect } from 'react'
import styles from '@/styles/pages/404.module.scss'
import { useRouter } from 'next/router';
import { SeenWelcomeScreenCtx } from '@/context/SeenWelcomePageCtx';

export default function NotFound() {
  const router = useRouter();
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  function backToHomePage() {
    router.push('/');
  }

  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={backToHomePage}>Back to Homepage</button>
    </div>
  )
}