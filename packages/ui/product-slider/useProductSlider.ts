import type React from 'react'
import { useEffect, useState } from 'react'
import useSwipe from '../hero-slider/useSwipe'

type Props = {
  slidesPerView?: number
  numberOfSlides: number
}

type Response = {
  activeSlide: number
  isPlaying: boolean
  handleTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void
  handleTouchEnd: (event: React.TouchEvent<HTMLDivElement>) => void
  handleBack: () => void
  handleNext: () => void
}

export default function useProductSlider ({ numberOfSlides }: Props): Response {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (activeSlide < numberOfSlides) {
          setActiveSlide((prev) => prev + 1)
        } else {
          setActiveSlide(0)
        }
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [activeSlide, isPlaying, numberOfSlides])

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (activeSlide < numberOfSlides) {
        setActiveSlide((prev) => prev + 1)
      } else {
        setActiveSlide(0)
      }
    } else if (direction === 'right') {
      if (activeSlide > 0) {
        setActiveSlide((prev) => prev - 1)
      } else {
        setActiveSlide(numberOfSlides)
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
      setActiveSlide(numberOfSlides)
    }
    setIsPlaying(false)
  }
  const handleNext = () => {
    if (activeSlide < numberOfSlides) {
      setActiveSlide(activeSlide + 1)
    } else {
      setActiveSlide(0)
    }
    setIsPlaying(false)
  }

  return { activeSlide, isPlaying, handleTouchStart, handleTouchEnd, handleBack, handleNext }
}
