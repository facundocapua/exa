export const ProductImageGallerySkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="aspect-square w-[500px] bg-gray-100"></div>
      <div className="mx-auto mt-6 w-full max-w-2xl block lg:max-w-non">
        <div className="grid grid-cols-4 gap-6 mx-2 md:mx-0" role="tablist" aria-orientation="horizontal">
          <div className="w-[130px] h-[128px] bg-gray-100 rounded-md border-1 border-gray-100"></div>
          <div className="w-[130px] h-[128px] bg-gray-100 rounded-md border-1 border-gray-100"></div>
          <div className="w-[130px] h-[128px] bg-gray-100 rounded-md border-1 border-gray-100"></div>
        </div>
      </div>
    </div>
  )
}