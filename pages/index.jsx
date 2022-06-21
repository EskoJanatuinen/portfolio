import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Esko Janatuinen | eCommerce Professional</title>
        <meta name="description" content="I’m running and developing a neat, eco-friendly and fast-growing online store with my team. I strive to combine all my knowledge in digital sales, UI/UX design, logistics and (last but not least) human behavior to create the best possible customer experience online." />
        <link rel="icon" href="/fav.png" />
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