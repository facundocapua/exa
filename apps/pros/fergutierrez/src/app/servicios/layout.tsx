type Props = {
    children: React.ReactNode;
}

export default function ServicesLayout ({ children }: Props) {
  return (
    <main className="w-full px-4 mb-4 mt-4">
      {children}
    </main>
  )
}
