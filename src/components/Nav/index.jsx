import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./style.css"

export default class Nav extends React.Component {

    render() {
        return (
            <div>
                <ul>
					<li>
						<NavLink exact activeClassName="selected" activeStyle={{color: "green"}} to="/">Home页面</NavLink>
						{/* <a href="#/home">Home页面</a> */}
					</li>
					<li>
						<NavLink exact activeClassName="selected" to={{
							pathname: "mine",
							state: {
								flag: "flag"
							}
						}}>Mine页面</NavLink>
						{/* <a href="#/mine">Mine页面</a> */}
					</li>
					<li>
						<NavLink exact activeClassName="selected" to="/mine/ucenter">Ucenter页面</NavLink>
					</li>
				</ul>
            </div>
        )
    }
}