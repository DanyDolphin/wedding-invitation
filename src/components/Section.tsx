// Next
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

// React
import { FC, PropsWithChildren } from 'react'

// Utils
import classNames from 'classnames'

interface SectionProps extends PropsWithChildren {
  backgroundImage?: StaticImport
  className?: string
}

const Section: FC<SectionProps> = ({
  children,
  backgroundImage,
  className,
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
      <div className={classNames(className, 'z-10')}>{children}</div>
    </section>
  )
}

export default Section
