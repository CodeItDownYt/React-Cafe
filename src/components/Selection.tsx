import { selections } from "../data";

const Selection = () => {
	return (
		<div className="w-full flex lg:flex-row flex-col items-center gap-5 lg:mt-[200px] mt-[100px] px-5">
			{selections.map((item) => (
				<div
					key={item.title}
					className="flex flex-col gap-2 w-full items-center justify-center"
				>
					<img
						src={item.image}
						alt={item.title}
						className="w-full"
					/>
					<span className="font-Bebas text-[44px] text-text tracking-wide">{item.title}</span>
				</div>
			))}
		</div>
	);
};

export default Selection;
