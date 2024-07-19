import { menuItemsLeft, menuItemsRight } from "../data";

const Menu = () => {
	return (
		<div className="w-full lg:px-[310px] px-5 flex flex-col gap-5 mt-[100px]">
			<div className="flex flex-col lg:items-start items-center">
				<span className="uppercase font-Bebas text-[104px] text-text tracking-wide">
					our menu
				</span>
				<p className="text-secondary font-light text-lg max-w-[430px] lg:text-left text-center">
					Blandit enim pretium purus morbi non tincidunt auctor eu molestie. Vitae eu nullam
					tincidunt accumsan.
				</p>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-start gap-20 mt-8 justify-between">
				<div className="flex flex-col gap-10">
					{menuItemsLeft.map((menuItem) => (
						<div
							className="flex flex-col gap-5"
							key={menuItem.title}
						>
							<span className="font-Bebas text-[44px] text-text tracking-wide">
								{menuItem.title}
							</span>
							{menuItem.items.map((item) => (
								<div
									className="flex flex-col w-full gap-3"
									key={item.title}
								>
									<div className="flex w-full items-center justify-between gap-2 gap-with-dash">
										<div className="font-Source text-[26px] text-secondary font-semibold">
											{item.title}
										</div>
										<span className="font-Source text-[25px] text-secondary">
											{item.price}
										</span>
									</div>
									<p className="font-Source text-lg font-light max-w-[650px]">
										{item.description}
									</p>
								</div>
							))}
						</div>
					))}
				</div>
				<div className="flex flex-col gap-10">
					{menuItemsRight.map((menuItem) => (
						<div
							className="flex flex-col gap-5"
							key={menuItem.title}
						>
							<span className="font-Bebas text-[44px] text-text tracking-wide">
								{menuItem.title}
							</span>
							{menuItem.items.map((item) => (
								<div
									className="flex flex-col w-full gap-3"
									key={item.title}
								>
									<div className="flex w-full items-center justify-between gap-2 gap-with-dash">
										<div className="font-Source text-[26px] text-secondary font-semibold">
											{item.title}
										</div>
										<span className="font-Source text-[25px] text-secondary">
											{item.price}
										</span>
									</div>
									<p className="font-Source text-lg font-light max-w-[650px]">
										{item.description}
									</p>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Menu;
