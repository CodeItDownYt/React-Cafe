import About from "./components/About";
import Articles from "./components/Articles";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Selection from "./components/Selection";
import Services from "./components/Services";

const App = () => {
	return (
		<div className="flex flex-col w-full">
			<Navbar />
			<Header />
			<About />
			<Services />
			<Selection />
			<Menu />
			<Reservation />
			<Comment />
			<Articles />
			<Gallery />
			<Footer />
		</div>
	);
};

export default App;
