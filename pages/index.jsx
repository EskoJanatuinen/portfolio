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
        <title>Esko Janatuinen | eCommerce Professional</title>
        <meta name="description" content="Esko Janatuinen is an eCommerce professional running and developing a neat and eco-friendly online store." />
        <meta name="keywords" content="eCommerce, SEO, Digital marketing" />
        <meta name="author" content="Esko Janatuinen" />
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