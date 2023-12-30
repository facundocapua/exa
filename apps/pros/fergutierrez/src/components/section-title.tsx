export default function SectionTitle ({ children }: { children: string }) {
  return (
    <div className="pb-6 mb-6 border-b border-gray-300 dark:border-gray-500 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-gray-600">{children}</h1>
    </div>
  )
}
