import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link className="cursor-pointer" href="/">
      <Image src="/logo.svg" alt="Logo Principal" width={78} height={28} />
    </Link>
  )
}

export default Logo
