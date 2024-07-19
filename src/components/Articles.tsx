import { articles } from "../data";
import Button from "./Button";

const Articles = () => {
	return (
		<div className="w-full lg:px-[310px] px-5 flex items-center justify-center mt-[50px]">
			<div className="flex flex-col items-center justify-center">
				<span className="uppercase text-[104px] tracking-wide font-Bebas text-text lg:text-left text-center">
					new articles
				</span>
				<p className="font-Source text-lg font-light text-secondary max-w-[500px] lg:text-left text-center">
					Blandit enim pretium purus morbi non tincidunt auctor eu molestie. Vitae eu nullam
					tincidunt accumsan.
				</p>
				<div className="flex flex-col gap-3 border-t border-border mt-16 pt-3">
					{articles.map((article) => (
						<div
							className="flex lg:flex-row flex-col items-center gap-5 border-b border-border pb-3"
							key={article.category}
						>
							<img
								src={article.image}
								alt={article.description}
							/>
							<div className="flex flex-col">
								<span className="font-Source text-lg text-secondary lg:text-left text-center">
									{article.category}
								</span>
								<span className="font-Source text-[26px] text-secondary lg:text-left text-center">
									{article.description}
								</span>
							</div>
						</div>
					))}
				</div>
				<Button className="mt-16">news articles</Button>
			</div>
		</div>
	);
};

export default Articles;
