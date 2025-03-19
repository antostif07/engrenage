import Image from 'next/image'

export default function Logo() {
    return (
        <Image
            src="/logo-engrenage.png"
            height={200} width={200} alt='logo'
            />
    )
}