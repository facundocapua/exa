'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

export default function ZoomImage ({ image, alt }: {image: string, alt: string}) {
  const [displayZoom, setDisplayZoom] = useState(false)
  const refContainer = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const offsetX = refContainer.current?.offsetLeft ?? 0
    const offsetY = refContainer.current?.offsetTop ?? 0

    const localX = e.clientX - offsetX
    const localY = e.clientY - offsetY

    setMousePosition({ x: localX, y: localY })
  }

  return (
    <>
      <div ref={refContainer}
        className='relative overflow-hidden cursor-zoom-in w-[500px] hidden md:block'
        onMouseEnter={() => setDisplayZoom(true)}
        onMouseLeave={() => setDisplayZoom(false)}
        onMouseMove={handleMouseOver}
      >
        <Image src={image} alt={alt} width={500} height={500} className={clsx(
          'bg-white',
          { 'opacity-0': displayZoom }
        )} />
        {displayZoom && (<div className='w-[1000px] absolute' style={{
          top: -mousePosition.y,
          left: -mousePosition.x
        }}>
          <Image src={image} alt={alt} width={1000} height={1000} className='bg-white ' />
        </div>)}
      </div>

      <div className='relative overflow-hidden cursor-zoom-in w-full block md:hidden'>
        <Image src={image} alt={alt} width={1000} height={1000} className='bg-white' />
      </div>
    </>
  )
}
