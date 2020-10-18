import React from "react"
import querystring from "querystring"
import MineDemo from "./MineDemo"

export default class Mine extends React.Component {

    clickHandle = () => {
        console.log("点击事件", this);
        // this.props.history.push("/")
        this.props.history.replace("/")
    }

    render() {
        console.log(this.props);
        const params = new URLSearchParams(this.props.location.search);
        const value = querystring.parse(this.props.location.search)
        console.log(params.get("name"));
        console.log("value", value);
        return (
            <div>
                Mine
                <button onClick={ this.clickHandle }>回到Home页面</button>
                <MineDemo />
            </div>
        )
    }
}