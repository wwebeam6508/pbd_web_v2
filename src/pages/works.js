
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Works() {
    return (
        <>
            <Head>
                <link rel="canonical" href='https://pbdsupply.com/works' />
            </Head>
            <div className={styles.realbody}>
                Works
            </div>
        </>
    )
}

Works.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
  }
