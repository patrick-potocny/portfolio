import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/components/Layout.module.scss'

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
