import reservation from "../assets/images/reservation.png";
import Button from "./Button";

const Reservation = () => {
	return (
		<div className="w-full flex lg:flex-row flex-col items-center lg:h-[710px] my-[100px]">
			<img
				src={reservation}
				alt="reservation"
				className="lg:w-[50%] w-full h-full"
			/>
			<div className="w-full h-full bg-backgrounds flex items-center justify-center flex-col lg:p-0 p-8">
				<div className="flex flex-col">
					<span className="uppercase text-[104px] tracking-wide font-Bebas text-text">
						reservation
					</span>
					<p className="font-Source text-lg font-light text-secondary max-w-[500px]">
						Blandit enim pretium purus morbi non tincidunt auctor eu molestie. Vitae eu nullam
						tincidunt accumsan.
					</p>
					<div className="flex flex-col gap-3 mt-12">
						<input
							type="text"
							placeholder="No of Person"
							className="border-0 border-b pb-2 border-inputBorder bg-transparent outline-none font-Source text-lg font-light placeholder:text-secondary"
						/>
						<input
							type="text"
							placeholder="Feb 22,2023"
							className="border-0 border-b pb-2 border-inputBorder bg-transparent outline-none font-Source text-lg font-light placeholder:text-secondary"
						/>
						<input
							type="text"
							placeholder="11 am"
							className="border-0 border-b pb-2 border-inputBorder bg-transparent outline-none font-Source text-lg font-light placeholder:text-secondary"
						/>
					</div>
					<Button className="mt-10">find a table</Button>
				</div>
			</div>
		</div>
	);
};

export default Reservation;
