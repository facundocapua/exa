export default function ErrorMessage ({ error }: { error: string }) {
  return (
    <div className="text-red-600 text-sm mt-2">
      {error}
    </div>
  )
}
