import React from 'react';
import Home from './pages/Home'
import Mine from './pages/Mine'

import UCenter from "./pages/UCenter"

import {
	// BrowserRouter as Router,
	HashRouter as Router,
	Route, Switch, Redirect
} from "react-router-dom";
import Nav from './components/Nav'
import NotFound from "./pages/NotFound"
import Demo from "./pages/Demo"
import Shop from "./pages/Shop"
import Book from "./pages/Book"
import WEBBook from './pages/WEBBook';
import JavaBook from './pages/JavaBook';

/**
 * HashRouter:锚点链接
 * BrowserRouter: h5新特性 / history.push 如果上线之后，需要后台做一些处理，重定向处理 404bug
 */

 /**
 * /mine/ucenter 包含了/mine
 * 
 */

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component= { Home }></Route>
					<Route exact={true} path="/mine" component= { Mine }></Route>
					<Redirect from="/hellomine" to="/mine"></Redirect>
					<Route strict exact path="/mine/ucenter/:id?" component= { UCenter }></Route>
					{/* <Route path="/demo" render= { () => <div>Hello Demo</div>}></Route> */}
					<Route path="/demo" render= { (props) => <Demo {...props} name="你好"/>}></Route>
					<Route path="/shop" component={ Shop }></Route>
					{/* <Route path="/book" componenet={ Book }></Route> */}
					<Book>
						<Switch>
							<Route path="/book/webbook" component={ WEBBook }></Route>
							<Route path="/book/javabook" component={ JavaBook }></Route>
						</Switch>
					</Book>
					<Route component= {NotFound}></Route>	
				</Switch>
			</Router>
		</div>
	);
}

export default App;
