import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./views/Home"
import Projects from "./views/Projects";
import type { JSX } from "react";
import Experience from "./views/Experience";
import Contact from "./views/Contact";
import { useFadeTransition } from "./hooks/useFadeTransition";
import About from "./views/About";

function App(): JSX.Element {
	return (
		<div className="h-screen flex flex-col bg-background">
			<BrowserRouter>
				<PagesWithFade />
			</BrowserRouter>
		</div>
  	);
}


function PagesWithFade(): JSX.Element {
	const [transition, toggleTransition, animDelay, goTo] = useFadeTransition();

	return (
		<>
			<Header goTo={goTo}/>
			
			<Routes>
				<Route path="/" element={<Home transition={transition} toggleTransition={toggleTransition} animDelay={animDelay} goTo={goTo}/>}/>
				<Route path="/about" element={<About transition={transition} toggleTransition={toggleTransition} animDelay={animDelay}/>}/>
				<Route path="/projects" element={<Projects transition={transition} toggleTransition={toggleTransition} animDelay={animDelay}/>}/>
				<Route path="/experience" element={<Experience transition={transition} toggleTransition={toggleTransition} animDelay={animDelay}/>} />
				<Route path="/contact" element={<Contact transition={transition} toggleTransition={toggleTransition} animDelay={animDelay}/>} />
			</Routes>

			<Footer />
		</>
	)
}

export default App
