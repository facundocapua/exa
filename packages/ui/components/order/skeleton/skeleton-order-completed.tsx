import SkeletonOrderCompletedHeader from './skeleton-order-completed-header'
import SkeletonOrderInformation from './skeleton-order-information'
import SkeletonOrderItems from './skeleton-order-items'

export default function SkeletonOrderCompleted () {
  return (
    <div className="bg-gray-50 py-6 min-h-[calc(100vh-64px)] animate-pulse">
      <div className="content-container flex justify-center">
        <div className="max-w-4xl h-full bg-white w-full p-10">
          <SkeletonOrderCompletedHeader />

          <SkeletonOrderItems />

          <SkeletonOrderInformation />
        </div>
      </div>
    </div>
  )
}
