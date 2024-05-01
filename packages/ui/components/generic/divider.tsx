import clsx from 'clsx'

type Props = {
  className?: string
}

export default function Divider ({ className }: Props) {
  return (
    <hr className={clsx(
      'w-full h-[1px] border-t-neutral-200 dark:border-t-neutral-700 my-2',
      className
    )} />
  )
}
