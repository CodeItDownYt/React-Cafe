import aboutImage from "../assets/images/aboutImage.png";
import Button from "./Button";

const About = () => {
	return (
		<div className="w-full flex items-center lg:flex-row flex-col lg:px-[310px] px-5 mt-[200px]">
			<img
				src={aboutImage}
				alt="aboutImage"
			/>
			<div className="flex flex-col lg:items-start items-center">
				<span className="uppercase text-text font-Bebas text-[100px] tracking-wide">
					about us
				</span>
				<p className="text-lg font-Source font-light text-secondary lg:max-w-[650px] max-w-[95%] lg:text-left text-justify">
					Welcome to Kofee Cafe, where we strive to provide a memorable coffee experience in a
					cozy and inviting atmosphere. At Kofee Cafe, we are passionate about serving
					artisanal coffee that delights the senses. Our expert baristas skillfully craft each
					cup, ensuring the perfect balance of flavors and aromas. Whether you're a coffee
					aficionado or a casual coffee lover, our diverse coffee selection, including classics
					like cappuccinos and lattes.
				</p>
				<Button className="mt-10">about us</Button>
			</div>
		</div>
	);
};

export default About;
