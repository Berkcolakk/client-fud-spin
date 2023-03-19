import Link from "next/link";
import Image from 'next/image';
const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-52 h-20 mx-auto" priority={true}
            />
        </Link>
    )
}
export default Logo;