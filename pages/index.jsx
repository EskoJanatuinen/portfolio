import Head from 'next/head'
import Main from '../components/main'
import About from '../components/about'
import Skills from '../components/skills'
import Footer from '../components/footer'
import Projects from '../components/projects'
import Contact from '../components/contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Esko Janatuinen | Ecommerce Professional</title>
        <meta name="description" content="Esko Janatuinen is an ecommerce professional running and developing a neat and eco-friendly online store." />
        <meta name="keywords" content="Ecommerce, SEO, Digital marketing" />
        <meta name="author" content="Esko Janatuinen" />
        <meta name="google-site-verification" content="Mupd1MaUXyqfW7XoNu_vGbN6dqvO621qRhHUWXdnvJ8" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}