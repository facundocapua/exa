'use client'

import { Brand } from "api";
import clsx from "clsx";
import { useMemo, useState } from "react";

type Props = {
  brands: Array<Brand>
  current: string
  onChange: (letter: string) => void
}

export default function BrandsListNav({brands, current, onChange}: Props) {
  const letters = useMemo(() => {
    const allLetters = {
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'E': 0,
      'F': 0,
      'G': 0,
      'H': 0,
      'I': 0,
      'J': 0,
      'K': 0,
      'L': 0,
      'M': 0,
      'N': 0,
      'O': 0,
      'P': 0,
      'Q': 0,
      'R': 0,
      'S': 0,
      'T': 0,
      'U': 0,
      'V': 0,
      'W': 0,
      'X': 0,
      'Y': 0,
      'Z': 0
    }
    brands.forEach((brand) => {
      const firstLetter = brand.name.charAt(0).toUpperCase() as keyof typeof allLetters
      allLetters[firstLetter] = allLetters[firstLetter] + 1
    })

    return allLetters
  },[brands])

  return (
    <nav className="flex justify-between my-10">
      {Object.keys(letters).map((letter) => (
        <button 
          key={letter} 
          onClick={() => {onChange(letter === current ? '' : letter)}}
          className={clsx(
            'text-sm font-semibold text-neutral-700 border rounded-md transition-all ease-in-out duration-300 px-3 py-2 hover:border-primary-700 hover:bg-primary-700 hover:text-white',
            current === letter ? 'bg-primary-700 border-primary-700 text-white' : 'bg-white border-neutral-400',
            letters[letter as keyof typeof letters] === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
          )}
          disabled={letters[letter as keyof typeof letters] === 0}
        >
          {letter}
        </button>
      ))}
      
    </nav>
  )
}