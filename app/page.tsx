import Aboutus from '@/Components/Aboutus'
import Explore from '@/Components/Explore'
import Hero from '@/Components/Hero'
import Page from '@/Components/Page'
import Review from '@/Components/Review'
import Steps from '@/Components/Steps'
import HostRent from '@/Components/hostRent'


export default function Home() {
  return (
    <>
      <HostRent />
      <Hero />
      <Steps />
      <Page />
      <Explore />
      <Aboutus />
      <Review />
    </>
  )
}
