type Props = {
  attribute: string
  values: string
  generateLink: (attribute: string, value: string) => string
}

export default function GenericFilter ({ attribute, values, generateLink }: Props) {
  return (
    <div className="flex items-center py-2">
      <span className="text-sm font-medium text-neutral-900">{attribute}:</span>
      <span className="ml-2 text-sm text-neutral-700">
        {values.split(',').map((value: string) => (
          <a key={value} href={generateLink(attribute, value)} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 mr-2">
            {value}
          </a>
        ))}
      </span>
    </div>
  )
}
