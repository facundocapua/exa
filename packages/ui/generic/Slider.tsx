'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '../lib/utils'
import Price from './Price'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [currentValue, setCurrentValue] = React.useState(props.defaultValue ?? [props.min, props.max])
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      onValueChange={setCurrentValue}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-neutral-200 dark:bg-primary-900/50">
        <SliderPrimitive.Range className="absolute h-full bg-primary-700 dark:bg-primary-700" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary-700 dark:border-primary-500 bg-primary-700 dark:bg-primary-500 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer group">
        <Price amount={Number(currentValue[0])} className="absolute -top-8 text-primary-100 text-xs -left-5 rounded bg-primary-700 px-2 py-1.5 hidden group-hover:block" />
      </SliderPrimitive.Thumb>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary-700 dark:border-primary-500 bg-primary-700 dark:bg-primary-500 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer group">
        <Price amount={Number(currentValue[1])} className="absolute -top-8 text-primary-100 text-xs -left-5 rounded bg-primary-700 px-2 py-1.5 hidden group-hover:block" />
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
