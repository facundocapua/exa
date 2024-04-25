const BannerSkeleton = () => {
  return (
    <div className="w-full md:w-auto aspect-square bg-neutral-300 animate-pulse flex-grow"></div>
  )
}
export const FeaturedBannersBigSkeleton = () => {
  return (
    <div className="hidden md:flex justify-evenly my-6 gap-4 mx-4">
      <BannerSkeleton/>
      <BannerSkeleton/>
      <BannerSkeleton/>
    </div>
  )
}

export default FeaturedBannersBigSkeleton
