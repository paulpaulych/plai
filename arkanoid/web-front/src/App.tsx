import React from "react"
import "./App.css"
import {Player} from "./components/Player"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
	return (
		<div className="App">
			<Player matchUrl="http://localhost:8082/match" gameName="Example arkanoid"/>
			{/*  <header className="App-header">*/}
			{/*    <img src={logo} className="App-logo" alt="logo" />*/}
			{/*    <p>*/}
			{/*      Edit <code>src/App.tsx</code> and save to reload.*/}
			{/*  </p>*/}
			{/*    <a*/}
			{/*    className="App-link"*/}
			{/*    href="https://reactjs.org"*/}
			{/*    target="_blank"*/}
			{/*    rel="noopener noreferrer"*/}
			{/*  >*/}
			{/*      Learn React*/}
			{/*  </a>*/}
			{/*</header>*/}
		</div>
	)
}

export default App
