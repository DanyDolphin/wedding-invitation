'use client'

// Next
import Image from 'next/image'

// React
import { useState } from 'react'

// Components
import Section from '@/components/Section'

// Images
import dandelion2 from '@images/dandelion2.png'
import Modal from '@/components/Modal'

const GiftTableSection = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <Section className="flex flex-col items-center">
        <div className="w-96 my-40 relative">
          <Image
            src={dandelion2}
            alt="Dandelion"
            className="absolute object-contain -bottom-10 left-1/2 -translate-x-1/2 -z-10 h-80"
          />
          <h1 className="font-head1 text-3xl uppercase text-center">
            Mesa de regalos
          </h1>
          <hr className="w-full my-8" />
          <a
            role="button"
            className="w-full block font-body2 text-3xl mt-14"
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51566210"
            target="_blank"
          >
            Liverpool
          </a>
          <button
            className="w-full block font-body2 text-3xl mt-14"
            onClick={() => setShow(true)}
          >
            Cuenta Bancaria
          </button>
          <button className="w-full block font-body2 text-3xl mt-14">
            Regalo presencial
          </button>
        </div>
      </Section>
      <Modal show={show} onClose={() => setShow(false)} className="text-center">
        <p className="font-body2 text-md uppercase tracking-widest text-accent">
          Banco
        </p>
        <p className="text-center font-body2 mt-2">BBVA</p>
        <p className="font-body2 text-md uppercase tracking-widest text-accent mt-4">
          Cuenta
        </p>
        <p className="text-center font-body2 mt-2">159 926 9617</p>
        <p className="font-body2 text-md uppercase tracking-widest text-accent mt-4">
          Cuenta Clabe
        </p>
        <p className="text-center font-body2 mt-2">012 180 01599269617 9</p>
        <p className="font-body2 text-md uppercase tracking-widest text-accent mt-4">
          Titular
        </p>
        <p className="text-center font-body2 mt-2">
          Brenda Allison Pedraza Ramiro
        </p>
      </Modal>
    </>
  )
}

export default GiftTableSection
