import Image from "next/image"

type Props = {
  label: string
  image?: string
  hexa?: string
}

export default function ProductVariantOption({label, image, hexa}: Props){
  return (
    <div className="w-[40px] h-[40px] overflow-hidden rounded-lg" style={{ backgroundColor: hexa ?? '' }}>
      {image && <Image width={40} height={40} src={image} alt={label} />}
      <span className="sr-only">{label}</span>
    </div>
  )
}