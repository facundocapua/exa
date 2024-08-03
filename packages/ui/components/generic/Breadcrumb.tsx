import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = {
  pages: Array<{
    name: string
    url: string
    current?: boolean
  }>
}

export default function Breadcrumb ({ pages }: Props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4" vocab="https://schema.org/" typeof="BreadcrumbList">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page, index) => (
          <li key={page.name} property="itemListElement" typeof="ListItem">
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-300" aria-hidden="true" />
              {page.current
                ? (
                  <>
                    <span className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-200" property='name'>{page.name}</span>
                    <meta property="position" content={String(index + 1)}></meta>
                  </>
                  )
                : (
                  <Link
                    href={page.url}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                    aria-current={page.current ? 'page' : undefined}
                    property="item" typeof="WebPage"
                  >
                    <span property="name">{page.name}</span>
                    <meta property="position" content={String(index + 1)}></meta>
                  </Link>
                  )}

            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
