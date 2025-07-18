interface ArticleProps {
    title: string
    description: string
    author?: string
    image: string
}

const Article: React.FC<ArticleProps> = ({
    title,
    description,
    author,
    image,
}) => {
    return (
        <article className="h-[395px] w-[327px] overflow-hidden rounded-md bg-white md:w-full lg:w-[255px]">
            <div className="h-[200px] w-full">
                <img
                    className="size-full object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="p-[20px] md:p-6">
                <p className="mb-2 font-sans text-[10px]/[18px] tracking-[-0.16px] text-[#9597a5]">
                    By {author}
                </p>
                <h3 className="mb-2 h-[40px] w-[265px] cursor-pointer text-[16px]/[20px] font-light tracking-[-0.29px] text-[#2d314d] hover:text-[#30c88f] md:h-[72px] md:w-[207px]">
                    {title}
                </h3>
                <p className="h-[72px] font-sans text-[13px]/[18px] font-normal tracking-[-0.2] text-[#9597a5]">
                    {description}
                </p>
            </div>
        </article>
    )
}

export default Article
