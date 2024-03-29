export default function SkeletonLineItem () {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="flex w-[64px] h-[64px] p-4 bg-gray-200 animate-pulse rounded-lg" />
        <div className="min-w-0 flex-auto">
          <div className="w-32 h-4 bg-gray-200 animate-pulse" />
          <div className="w-32 h-4 bg-gray-200 animate-pulse" />
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <div className="w-12 h-6 bg-gray-200 animate-pulse" />
        <div className="w-12 h-6 bg-gray-200 animate-pulse" />
      </div>
    </li>
  )
}
