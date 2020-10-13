import React from "react"
import querystring from "querystring"

export default class Mine extends React.Component {
    constructor(props) {
        super(props);
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
            </div>
        )
    }
}