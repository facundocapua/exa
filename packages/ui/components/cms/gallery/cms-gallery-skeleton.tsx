import clsx from 'clsx'
import { imagesClasses } from './consts'

export const CmsGallerySkeleton = () => {
  return (
    <div className="grid md:grid-cols-3 md:grid-rows-[350px_350px_350px] gap-4">
      {imagesClasses.map((imageClasses, index) => (
        <div key={index} className={clsx(imageClasses, 'bg-neutral-800 animate-pulse')}></div>
      ))}
    </div>
  )
}

export default CmsGallerySkeleton
