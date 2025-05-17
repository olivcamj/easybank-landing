import Pinterest from '../assets/images/icon-pinterest.svg'
import Facebook from '../assets/images/icon-facebook.svg'
import Instagram from '../assets/images/icon-instagram.svg'
import X from '../assets/images/icon-twitter.svg'
import Youtube from '../assets/images/icon-youtube.svg'
import Logo from '../assets/images/logo.svg'
import Button from './Button'

const Footer = () => {
    return (
        <footer className="grid place-items-center bg-(--accent) grid-cols-3">
            <div>
                <img src={Logo} alt="Easybank" className="h-8" />
                <section className="m-4 flex h-auto w-[188px] cursor-pointer gap-1.5 p-2 md:m-0 md:mt-[35px] md:w-[154px]">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                        tabIndex={0}
                        className="group"
                    >
                        <img
                            src={Facebook}
                            alt=""
                            className="group-hover:text-(--highlightdd)"
                        />
                    </a>
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our YouTube channel"
                        tabIndex={0}
                    >
                        <img src={Youtube} alt="" />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Twitter page"
                        tabIndex={0}
                    >
                        <img src={X} alt="" />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Pinterest page"
                        tabIndex={0}
                    >
                        <img src={Pinterest} alt="" />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Instagram profile"
                        tabIndex={0}
                    >
                        <img src={Instagram} alt="" />
                    </a>
                </section>
            </div>
            <nav className="tracking-tightest grid cursor-pointer gap-2 text-center font-normal group-hover:text-(--highlight) md:grid-cols-2 md:text-left">
                <ul>
                    <li className="max-w-[80] hover:text-(--highlight)">
                        About Us
                    </li>
                    <li className="max-w-[80] hover:text-(--highlight)">
                        Contact
                    </li>
                    <li className="max-w-[80] hover:text-(--highlight)">
                        Blog
                    </li>
                    {/* </ul> */}
                    {/* TODO Should I be seperating these to columns using CSS , because it feels like 
                    I should be honestly.             
            */}
                    {/* <ul> */}
                    <li className="max-w-[80] hover:text-(--highlight)">
                        Careers
                    </li>
                    <li className="max-w-[80] hover:text-(--highlight)">
                        Support
                    </li>
                    <li className="max-w-[80] hover:text-(--highlight)">
                        Privacy Policy
                    </li>
                </ul>
            </nav>
            <div className="flex flex-col items-center gap-2">
                <Button />
                <p className="tracking-tightest text-DEFAULT text-center text-[15px] font-normal text-gray-400">
                    © Easybank. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
