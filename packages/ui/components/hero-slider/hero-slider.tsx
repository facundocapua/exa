'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import useSwipe from './useSwipe'
import BackButton from './BackButton'
import ForwardButton from './ForwardButton'
import Link from 'next/link'
import type { Slide } from 'api'
import clsx from 'clsx'
import HeroSlide from './hero-slide'

type Props = {
  slides: Array<Slide>
}

export default function HeroSlider ({ slides }: Props) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (activeSlide < slides.length - 1) {
          setActiveSlide((prev) => prev + 1)
        } else {
          setActiveSlide(0)
        }
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [activeSlide, isPlaying, slides.length])

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (activeSlide < slides.length - 1) {
        setActiveSlide((prev) => prev + 1)
      } else {
        setActiveSlide(0)
      }
    } else if (direction === 'right') {
      if (activeSlide > 0) {
        setActiveSlide((prev) => prev - 1)
      } else {
        setActiveSlide(slides.length - 1)
      }
    }
  }

  const { handleTouchStart, handleTouchEnd } = useSwipe(
    handleSwipe,
    setIsPlaying
  )

  const handleBack = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1)
    } else {
      setActiveSlide(slides.length - 1)
    }
    setIsPlaying(false)
  }
  const handleNext = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1)
    } else {
      setActiveSlide(0)
    }
    setIsPlaying(false)
  }

  return (
    <section className="relative overflow-hidden">
      <div
        style={{ transform: `translate3d(${-activeSlide * 100}%, 0, 0)` }}
        className="duration-700 ease-in-out whitespace-nowrap"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <HeroSlide
            key={index}
            slide={slide}
            priority={index === 0}
          />
        ))}
      </div>

      <div className="absolute z-10 flex -translate-x-1/2 bottom-0 left-1/2">
        {slides.map((_, index) => {
          return (
            <button
              key={index}
              type="button"
              disabled={activeSlide === index}
              className="p-5"
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => {
                setActiveSlide(index)
                setIsPlaying(false)
              }}
            >
              <span className={clsx(
                'w-3 h-3 block rounded-full shadow border-none transition-all duration-100 ease-in-out hover:scale-110',
                { 'bg-gray-200': activeSlide === index },
                { 'bg-gray-400': activeSlide !== index }
              )}></span>
            </button>
          )
        })}
      </div>

      <BackButton onClick={handleBack} />
      <ForwardButton onClick={handleNext} />

    </section>
  )
}
