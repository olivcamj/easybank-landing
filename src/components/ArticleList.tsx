import Article from './Article'
import plane from '../assets/images/image-plane.jpg'
import restaurant from '../assets/images/image-restaurant.jpg'
import confetti from '../assets/images/image-confetti.jpg'
import currency from '../assets/images/image-currency.jpg'

const ArticleList = () => {
    const imageMap: { [key: string]: string } = {
        'image-currency.jpg': currency,
        'image-restaurant.jpg': restaurant,
        'image-plane.jpg': plane,
        'image-confetti.jpg': confetti,
    }
    const articles = [
        {
            author: 'Claire Robinson',
            title: 'Receive money in any currency with no fees',
            description:
                'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … ',
            image: 'image-currency.jpg',
        },
        {
            author: 'Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            description:
                'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
            image: 'image-restaurant.jpg',
        },
        {
            author: 'Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            description:
                'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
            image: 'image-plane.jpg',
        },
        {
            author: 'Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            description:
                'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
            image: 'image-confetti.jpg',
        },
    ]
    return (
        <section className="h-[1871px] bg-[#fafafa] p-5 pt-20 md:h-3/4 md:pb-14 lg:h-10/12 ">
            <h2 className="lg:ml- mb-5 text-center font-sans text-[32px] font-light text-[#2D314D] md:mb-8 lg:text-left">
                Latest Articles
            </h2>
            <div className="grid-col m-auto grid content-center justify-center gap-6 md:h-auto md:w-full md:grid-cols-2 lg:flex lg:gap-3 xl:max-w-[1110px]">
                {articles.map((item, index) => {
                    return (
                        <Article
                            key={index}
                            author={item.author}
                            title={item.title}
                            description={item.description}
                            image={imageMap[item.image]}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ArticleList
