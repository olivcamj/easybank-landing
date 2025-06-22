import { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import { TfiClose } from 'react-icons/tfi'
import { VscMenu } from 'react-icons/vsc'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className="relative top-0 right-0 z-12 flex h-[64px] w-full items-center justify-between bg-[#fff]">
            <img src={Logo} alt="Easybank" />
            <div
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className="text-[#2D314D]"
            >
                {isOpen ? (
                    <TfiClose className="h-[19px] w-[18px]" />
                ) : (
                    <VscMenu className="h-[11px] w-[24px]" />
                )}
            </div>
        </header>
    )
}

export default Header
