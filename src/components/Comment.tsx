import comma from "../assets/images/comma.svg";
const Comment = () => {
	return (
		<div className="w-full lg:px-[310px] px-5 flex items-center justify-center gap-9 lg:my-[100px]">
			<img
				src={comma}
				alt="comma"
			/>
			<div className="flex flex-col gap-3">
				<p className="font-Source text-[26px] text-secondary font-light italic max-w-[750px]">
					"I absolutely love the cozy ambiance of this cafe! The warm lighting, comfortable
					seating, and charming decor make it the perfect place to unwind. And the coffee?
					Simply divine! Every sip of their artisanal brews is a treat for the taste buds.
					Highly recommended!"
				</p>
				<span className="font-Source text-lg text-secondary font-semibold">Sarah Anderson</span>
			</div>
		</div>
	);
};

export default Comment;
