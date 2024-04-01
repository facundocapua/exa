export default function ErrorMessage ({ error }: { error: string | null }) {
  if (!error) return null

  return (
    <div className="text-red-600 text-sm mt-2">
      {error}
    </div>
  )
}
