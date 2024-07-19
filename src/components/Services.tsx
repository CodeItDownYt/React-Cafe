import { services } from "../data";

const Services = () => {
	return (
		<div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between lg:px-[310px] px-5 mt-[100px]">
			{services.map((item) => (
				<div
					key={item.title}
					className="flex flex-col items-center justify-center"
				>
					<img
						src={item.icon}
						alt={item.title}
					/>
					<span className="fount-Source text-secondary text-[28px] text-center mt-3">
						{item.title}
					</span>
					<p className="text-center font-Source text-secondary font-light max-w-[310px] mt-1">
						{item.description}
					</p>
				</div>
			))}
		</div>
	);
};

export default Services;
