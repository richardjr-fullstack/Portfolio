import { Inter } from '@next/font/google'
import NavBar from '@/components/NavBar'
import Banner from '@/components/Home'
import IconList from '@/components/Icon'
import About from '@/components/About'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>     
    <Seo/>
      <NavBar/>
      <Banner/>
      <IconList/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}
