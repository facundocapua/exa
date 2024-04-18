const BannerSkeleton = () => {
  return (
    <div className="w-full md:w-auto aspect-square bg-neutral-300 animate-pulse">
      <div className="w-[600px]"></div>
    </div>
  )
}
export const FeaturedBannersBigSkeleton = () => {
  return (
    <div className="flex justify-evenly my-6 gap-4 flex-wrap mx-4 md:mx-0">
      <BannerSkeleton/>
      <BannerSkeleton/>
      <BannerSkeleton/>
    </div>
  )
}

export default FeaturedBannersBigSkeleton
