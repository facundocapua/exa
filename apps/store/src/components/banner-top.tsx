import { clsx } from 'clsx'

type Props = {
  className?: string
}

export const BannerTop = ({ className }: Props) => {
  return (
    <div className={clsx(
      'w-full flex justify-center items-center text-white text-xs font-semibold bg-black',
      className
    )}>
      <p>Envío gratis a Tandil o compras superiores a $44.999</p>
    </div>
  )
}

export default BannerTop
