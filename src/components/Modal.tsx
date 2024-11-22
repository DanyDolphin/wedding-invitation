'use client'

// React
import { FC, PropsWithChildren } from 'react'

// Components
import Section from './Section'
import classNames from 'classnames'

interface ModalProps extends PropsWithChildren {
  show: boolean
  onClose: () => void
  className?: string
}

const Modal: FC<ModalProps> = ({ show, onClose, className, children }) => {
  if (!show) {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-opaque z-30"
      onClick={onClose}
    >
      <button
        className="absolute top-10 right-10 text-lg z-40"
        onClick={onClose}
      >
        &times;
      </button>
      <Section
        className={classNames(className, 'bg-primary p-20')}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        {children}
      </Section>
    </div>
  )
}

export default Modal
