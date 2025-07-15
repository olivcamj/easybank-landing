import { useState } from 'react'
import Button from './Button'
import Logo from '../assets/images/logo.svg'
import { TfiClose } from 'react-icons/tfi'
import { VscMenu } from 'react-icons/vsc'

const Header = () => {
    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
    ]

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className="absolute top-0 right-0 z-12 flex h-[64px] w-full items-center justify-between bg-[#fff] px-[20px] md:gap-10 md:px-[55px]">
            <img src={Logo} alt="Easybank" />
            <div
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className="text-[#2d314d] md:hidden"
            >
                {isOpen ? (
                    <TfiClose className="h-[19px] w-[18px]" />
                ) : (
                    <VscMenu className="h-[11px] w-[24px]" />
                )}
            </div>

            {isOpen && (
                <nav className="absolute inset-0 top-55 m-auto flex h-[260px] w-11/12 flex-col items-center justify-center gap-[1em] rounded-sm border-transparent bg-[#fff] p-[30px] text-center shadow-[0_131px_90px_100px_rgba(45,49,77,0.5)] md:hidden">
                    {navLinks.map((item) => {
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        )
                    })}
                </nav>
            )}

            <nav className="hidden gap-6 md:flex">
                {navLinks.map((item) => (
                    <a key={item.href} href={item.href}>
                        {item.label}{' '}
                    </a>
                ))}
            </nav>
            <div className="m-0 hidden md:flex">
                <Button />
            </div>
        </header>
    )
}

export default Header
