'use client'

// Next
import Image from 'next/image'

// Components
import Section from '@/components/Section'

// Images
import leaf2 from '@images/leaf2.webp'
import leaf3 from '@images/leaf3.webp'
import { useEffect, useState } from 'react'

const WeddingCalendarSection = () => {
  const [calendarLink, setCalendarLink] = useState<string>('')

  const generateGoogleCalendarLink = () => {
    const text = '💌 Boda: Allison y Mario'
    const startDate = '20250215170000Z'
    const endDate = '20250216000000Z'
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${startDate}/${endDate}&details=Detalles en ${encodeURI(
      window.location.href
    )}`
  }

  useEffect(() => {
    setCalendarLink(generateGoogleCalendarLink())
  }, [])

  return (
    <Section className="flex flex-col items-center">
      <Image
        src={leaf2}
        alt="Leaf"
        className="h-48 object-contain rotate-180"
      />
      <h1 className="font-head1 text-center my-10 text-4xl leading-relaxed tracking-wide">
        Allison Pedraza
        <br />
        <span className="font-head3 text-3xl">&</span>
        <br />
        Mario Castillo
      </h1>
      <p className="font-body2 uppercase tracking-widest">
        15 febrero 2025 | 5:00 pm
      </p>
      <hr className="w-1/2" />
      <a
        role="button"
        target="_blank"
        href={calendarLink}
        className="font-body2 mb-10"
      >
        Agregar al calendario
      </a>
      <Image src={leaf3} alt="Leaf" className="h-48 object-contain" />
    </Section>
  )
}

export default WeddingCalendarSection
