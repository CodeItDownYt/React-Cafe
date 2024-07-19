import papercup from "../assets/images/papercup.svg";
import boiler from "../assets/images/boiler.svg";
import cup from "../assets/images/cup.svg";
import coffee from "../assets/images/coffee.svg";
import cakes from "../assets/images/cakes.png";
import tea from "../assets/images/tea.png";
import Mcoffee from "../assets/images/coffee.png";
import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import f5 from "../assets/images/f5.png";
import f6 from "../assets/images/f6.png";
import f7 from "../assets/images/f7.png";
import f8 from "../assets/images/f8.png";
import f9 from "../assets/images/f9.png";
import f10 from "../assets/images/f10.png";
import f11 from "../assets/images/f11.png";
import f12 from "../assets/images/f12.png";
import l1 from "../assets/images/l1.png";
import l2 from "../assets/images/l2.png";
import l3 from "../assets/images/l3.png";
import l4 from "../assets/images/l4.png";
import l5 from "../assets/images/l5.png";

export const navItems = [
	{ title: "Home", path: "/", active: true },
	{ title: "About", path: "/", active: false },
	{ title: "Services", path: "/", active: false },
	{ title: "Blog", path: "/", active: false },
	{ title: "Contact", path: "/", active: false },
];

export const services = [
	{
		title: "Cozy Ambiance",
		description: "Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.",
		icon: papercup,
	},
	{
		title: "Artisanal Coffee",
		description: "Orci dictumst ellentesque ut sem partu rient purus pulvinar feugiat.",
		icon: boiler,
	},
	{
		title: "Fresh Delights",
		description: "Eugiat orci dictumst ellentesque ut sem purus pulvinar partu rient.",
		icon: cup,
	},
	{
		title: "Friendly Service",
		description: "Eugiat orci dictumst ellentesque ut sem purus pulvinar partu rient.",
		icon: coffee,
	},
];

export const selections = [
	{ title: "pastries", image: cakes },
	{ title: "Tea Selection", image: tea },
	{ title: "Coffee Selection", image: Mcoffee },
];

export const menuItemsLeft = [
	{
		title: "Coffee Selection",
		items: [
			{
				title: "Espresso",
				description: "A strong and concentrated shot of coffee.",
				price: "$2.99",
			},
			{
				title: "Americano",
				description: "A shot of espresso diluted with hot water.",
				price: "$3.49",
			},
			{
				title: "Cappuccino",
				description: "Equal parts of espresso, steamed milk, and foam, topped with cocoa.",
				price: "$3.49",
			},
			{
				title: "Latte",
				description: "Creamy espresso with steamed milk and a thin layer of foam.",
				price: "$4.49",
			},
			{
				title: "Mocha",
				description:
					"A delightful blend of espresso, chocolate, steamed milk, and great amazing whipped cream.",
				price: "$4.99",
			},
			{
				title: "Macadamia Nut Latte",
				description: "A nutty and indulgent latte with a hint of macadamia flavor.",
				price: "$3.99",
			},
		],
	},
	{
		title: "Specialty Drinks",
		items: [
			{
				title: "Vanilla Latte",
				description: "A rich latte with a touch of sweet vanilla flavor.",
				price: "$4.99",
			},
			{
				title: "Cold Brew",
				description: "Smooth and strong coffee brewed slowly in cold water for a bold taste.",
				price: "$3.49",
			},
			{
				title: "Caramel Macchiato",
				description: "Espresso with caramel, steamed milk, and foam.",
				price: "$3.99",
			},
			{
				title: "Hazelnut Frappuccino",
				description: "Creamy espresso with steamed milk and a thin layer of foam.",
				price: "$5.99",
			},
			{
				title: "Matcha Green Tea Latte",
				description: "A creamy and earthy latte made with matcha green tea.",
				price: "$4.99",
			},
		],
	},
];
export const menuItemsRight = [
	{
		title: "Pastries",
		items: [
			{
				title: "Muffin",
				description: "A freshly baked, moist, and flavorful breakfast treat.",
				price: "$3.49",
			},
			{
				title: "Cinnamon Roll",
				description: "A sweet and gooey pastry swirled with cinnamon and icing.",
				price: "$3.99",
			},
			{
				title: "Danish Pastry",
				description: "A light and airy pastry filled with various sweet fillings.",
				price: "$4.49",
			},
			{
				title: "Scone",
				description:
					"A slightly sweet or savory biscuit-like pastry, perfect for a quick bite.",
				price: "$4.49",
			},
		],
	},
	{
		title: "Snacks",
		items: [
			{
				title: "Bagel with Cream Cheese",
				description: "A classic toasted bagel served with a creamy spread.",
				price: "$4.99",
			},
			{
				title: "Granola Bar",
				description: "A wholesome and energy-packed snack for on-the-go.",
				price: "$2.49",
			},
			{
				title: "Fruit Cup",
				description: "A refreshing mix of seasonal fruits, perfect for a light snack.",
				price: "$3.99",
			},
		],
	},
	{
		title: "Extras",
		items: [
			{
				title: "Extra Shot of Espresso",
				description: "Add an extra kick of bold espresso to your drink.",
				price: "$0.49",
			},
			{
				title: "Flavored Syrup",
				description: "Enhance your beverage with a choice of delicious syrups.",
				price: "$0.49",
			},
			{
				title: "Non-Dairy Milk (Almond, Soy, Oat)",
				description: "Indulge in a dollop of creamy and sweet whipped topping.",
				price: "$0.99",
			},
			{
				title: "Chocolate Drizzle",
				description: "Add a delightful touch of chocolate to your drink.",
				price: "$0.99",
			},
		],
	},
];

export const articles = [
	{ category: "Cafe", image: a1, description: "Exploring the Growing Trend and Art of Craft" },
	{ category: "Topics", image: a2, description: "The Science Behind Your Daily Cup of Joy" },
	{ category: "Business", image: a3, description: "A Journey Through Different Brewing Methods" },
];

export const gallery = [
	{ image: f1, alt: "f1" },
	{ image: f2, alt: "f2" },
	{ image: f3, alt: "f3" },
	{ image: f4, alt: "f4" },
	{ image: f5, alt: "f5" },
	{ image: f6, alt: "f6" },
	{ image: f7, alt: "f7" },
	{ image: f8, alt: "f8" },
	{ image: f9, alt: "f9" },
	{ image: f10, alt: "f10" },
	{ image: f11, alt: "f11" },
	{ image: f12, alt: "f12" },
];

export const companies = [
	{image:l1,alt:"l1"},
	{image:l2,alt:"l2"},
	{image:l3,alt:"l3"},
	{image:l4,alt:"l4"},
	{image:l5,alt:"l5"},
];
