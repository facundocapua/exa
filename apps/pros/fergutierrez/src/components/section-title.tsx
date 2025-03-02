export default function SectionTitle ({ children }: { children: string }) {
  return (
    <div className="pt-12 pb-6 mb-6 border-b border-neutral-600 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-black">{children}</h1>
    </div>
  )
}
