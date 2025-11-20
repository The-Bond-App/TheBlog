import Navigation from '../src/components/Navigation'

import Hero from '../src/components/Hero'
import EmotionalWellbeingBlog from '../src/components/EmotionalWellbeingBlog'
import Footer from '../src/components/Footer'
import NewsletterBanner from '../src/components/NewsletterBanner'
import NewFullPage from '../src/components/NewFullPage'
import BundinhaQuentinha from '../src/components/BundinhaQuentinhaManus'

export default async function Home() {
  return (
    <>
      {/*<Navigation />*/}
      <BundinhaQuentinha />
      
      {/*<main className='mb-8'>
        <Hero />
        <EmotionalWellbeingBlog />
      </main>*/}
      <NewsletterBanner />
      <Footer />
    </>
  )
}
