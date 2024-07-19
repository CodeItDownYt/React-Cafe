import { gallery } from "../data";

const Gallery = () => {
	return (
		<div className="w-full lg:mt-[200px] mt-[100px] flex items-center gap-5 flex-wrap px-5 lg:mb-[150px] mb-[100px]">
			{gallery.map((item) => (
				<img
					src={item.image}
					alt={item.alt}
					className="lg:w-[296px] lg:h-[296px] w-[47.8%] h-[47.8%]"
				/>
			))}
		</div>
	);
};

export default Gallery;
