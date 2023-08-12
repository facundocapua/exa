import { useState } from 'react'

export default function useSwipe (handleSwipe: any, setIsPlaying: any) {
  const [swipe, setSwipe] = useState(0)
  const [swiped, setSwiped] = useState(false)

  const handleTouchStart = (event: any) => {
    setSwipe(event.touches[0].clientX)
    setSwiped(false)
  }

  const handleTouchEnd = (event: any) => {
    setIsPlaying(false)
    if (!swiped) {
      if (event.changedTouches[0].clientX < swipe - 50) {
        handleSwipe('left')
      } else if (event.changedTouches[0].clientX > swipe + 50) {
        handleSwipe('right')
      }
    }
  }

  return {
    handleTouchStart,
    handleTouchEnd
  }
}
