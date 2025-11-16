import Navigation from '../src/components/Navigation'
import Hero from '../src/components/Hero'
import Posts from '../src/components/Posts'
import Footer from '../src/components/Footer'
import NewsletterBanner from '../src/components/NewsletterBanner'


export default async function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      
      <main>
        <Posts />
        <NewsletterBanner />
      </main>
      <Footer />
    </>
  )
}
