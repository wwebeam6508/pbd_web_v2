
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <>
            <Head>
                <link rel="canonical" href='https://pbdsupply.com/contact' />
            </Head>
            <div className={styles.realbody}>
                Contact
            </div>
        </>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
  }
