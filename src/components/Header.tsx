import { useState } from 'react'
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
        <header className="absolute top-0 right-0 z-12 flex h-[64px] w-full items-center justify-between bg-[#fff] px-[20px] md:justify-start md:gap-10 md:px-[55px]">
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
                <nav className="absolute inset-10 top-44 z-12 m-auto flex h-[260px] w-80 flex-col items-center justify-center gap-[1em] rounded-[4px] border-transparent bg-[#fff] p-[30px] text-center md:hidden">
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
        </header>
    )
}

export default Header
