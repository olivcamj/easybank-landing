import Button from './Button'
import desktop from '../assets/images/hero-desktop.svg'
import mobile from '../assets/images/hero-mobile.svg'
import mockup from '../assets/images/image-mockups.png'

const Hero = () => {
    return (
        <section className="flex flex-col-reverse gap-4 bg-neutral-50 lg:grid lg:grid-cols-2 lg:place-items-center">
            <div className="max-w-lg px-4 py-5 text-center md:text-left">
                <h1 className="mx-auto mb-4 max-w-9/10 text-[40px]/[48px] font-light text-[#2d314d] lg:mx-0 lg:text-[56px]/[64px]">
                    Next generation digital banking
                </h1>
                <p className="mx-auto mb-6 w-full max-w-9/10 text-[15px]/[25px] font-normal tracking-tighter text-[#9597A5] lg:mx-0 lg:max-w-[447px] lg:text-lg/[28px]">
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </p>
                <Button />
            </div>
            <div className="relative mt-12 h-[305px] w-full self-stretch lg:mt-0 lg:h-[600px]">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={desktop} />
                    <img
                        src={mobile}
                        alt="Decorative background"
                        className="h-full w-full object-cover"
                    />
                </picture>
                <img
                    src={mockup}
                    alt=""
                    aria-hidden="true"
                    className="absolute -top-32 z-10 object-contain lg:-right-20"
                />
            </div>
        </section>
    )
}

export default Hero
