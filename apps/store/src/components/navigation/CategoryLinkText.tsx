import { Category } from "api";
import Image from "next/image";
import Link from "next/link";

type Props = {
  category: Category
  customLabel?: string
  onClick: () => void
}

// <Link key={category.name} href={`/${category.slug}`} className="group relative transition-all duration-400 ease-in-out flex flex-col items-center" onClick={onClick}>
//       <h4 className="mt-4 block font-medium text-gray-500 group-hover:text-gray-800 transition-all duration-400">{customLabel || category.name}</h4>
//       <div className="w-full h-0.5 bg-gray-200 flex justify-center">
//         <div className="w-0 h-full group-hover:w-full transition-all bg-gray-800 duration-400 ease-in"></div>
//       </div>
//     </Link>

export default function CategoryLinkText ({ category, customLabel, onClick }: Props) {
  return (
    <Link key={category.name} href={`/${category.slug}`} className="group relative transition-all duration-400 ease-in-out flex flex-col basis-1/5" onClick={onClick}>
      <h4 className="mt-4 block text-base font-medium text-gray-500 group-hover:text-gray-800 transition-all duration-400">{customLabel || category.name}</h4>
      <div className="w-full h-0.5 bg-gray-200 flex justify-center">
        <div className="w-0 h-full group-hover:w-full transition-all bg-gray-800 duration-400 ease-in"></div>
      </div>
    </Link>
  )
}