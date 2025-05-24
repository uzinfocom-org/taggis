import Head from 'next/head'

import Page from '@components/page'
import Link from '@components/link'
import styles from './error.module.css'

const Error = ({ status }) => {
  return (
    <Page title={status || 'Error'}>
      <Head>
        <title>404 — Uzinfocom</title>
      </Head>

      {status === 404 ? (
        <>
          <h1>Page not found.</h1>

          <p>
            <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
              <p>Life is too short to get 404 errors. </p>

              <footer>
                <Link external href="https://github.com/orzklv">
                  — Orzklv, <cite>Uzinfocom Open Source</cite>
                </Link>
              </footer>
            </blockquote>
          </p>
        </>
      ) : (
        <section className={styles.section}>
          <span>{status || '?'}</span>
          <p>Error occurred.</p>
        </section>
      )}
    </Page>
  )
}

export default Error
