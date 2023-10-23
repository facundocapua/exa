import Image from "next/image";
import Link from "next/link";

export default async function Logo(){
  return  (
    <Link href="/">
      <Image src="/logo2.png" width={300} height={144} alt="Gonzalo Alonso" />
    </Link>
  )
}