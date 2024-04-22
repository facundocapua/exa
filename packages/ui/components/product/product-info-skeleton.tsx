export const ProductInfoSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className='block bg-primary-700/20 mb-4 h-[20px] w-32'></div>
      <div className="bg-gray-900/20 dark:bg-gray-100/20 h-[40px] w-64"></div>
      <div className="mt-3">
        <h2 className="sr-only">Información de producto</h2>
        <div className="flex gap-2 mt-6 items-center">
          <div className="bg-gray-600/20 dark:bg-gray-300/20 h-[24px] w-24"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoSkeleton