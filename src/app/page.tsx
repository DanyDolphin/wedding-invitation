// Next
import { redirect } from 'next/navigation'

// React
import { FC } from 'react'

// Components
import HeroSection from './_sections/HeroSection'
import WeddingCalendarSection from './_sections/WeddingCalendarSection'
import InvitationSection from './_sections/InvitationSection'
import PartiesSection from './_sections/PartiesSection'
import ScheduleSection from './_sections/ScheduleSection'
import LocationSection from './_sections/LocationSection'
import AssistanceSection from './_sections/AssistanceSection'
import GiftTableSection from './_sections/GiftTableSection'
import DressingCodeSection from './_sections/DressingCodeSection'

// Types
import { Page } from '@/types'

// Services
import { getGuest } from '@/services/guest.service'

const Home: FC<Page> = async ({ searchParams }) => {
  const { name = '' } = await searchParams

  const guest = await getGuest(name as string)
  console.log(guest)

  if (!guest) {
    redirect('/not-found?name=' + encodeURIComponent(name as string))
  }

  return (
    <>
      <HeroSection />
      <WeddingCalendarSection />
      <InvitationSection guest={guest} />
      <PartiesSection />
      <ScheduleSection />
      <LocationSection />
      <AssistanceSection guest={guest} />
      <GiftTableSection />
      <DressingCodeSection />
    </>
  )
}

export default Home
