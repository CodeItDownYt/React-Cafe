interface Props {
	children: string;
	className?: string;
}
const Button = ({ children, className }: Props) => {
	return (
		<button
			className={`${className} outline-none h-[47px] bg-primary rounded-[100px] font-Source text-white text-lg tracking-wider uppercase w-fit px-7`}
		>
			{children}
		</button>
	);
};

export default Button;
