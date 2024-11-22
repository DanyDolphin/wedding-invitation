// Next
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

// React
import { FC, MouseEventHandler, PropsWithChildren } from 'react'

// Utils
import classNames from 'classnames'

interface SectionProps extends PropsWithChildren {
  backgroundImage?: StaticImport
  className?: string
  onClick?: Function
}

const Section: FC<SectionProps> = ({
  children,
  backgroundImage,
  className,
  onClick,
}) => {
  return (
    <section className="relative">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="background"
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}
      <div
        className={classNames(className, 'z-10')}
        onClick={onClick as MouseEventHandler}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
