'use client'

import { usePathname } from 'next/navigation'
import  Link from 'next/link'

interface Props {
    navLinks: { href: string, name: string }[]
}

const navClassName = "bg-amber-50 p-2 rounded hover:bg-amber-200 ";
export function Navigation({ navLinks }: Props) {
    const pathname = usePathname()

    return (
        <div className="flex gap-2 p-4">
            {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                    <Link
                        className={`${navClassName} ${ isActive ? 'text-blue-400' : 'text-black' }`}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </div>
    )
}
