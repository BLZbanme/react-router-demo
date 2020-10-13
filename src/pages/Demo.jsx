import React from "react"

const Demo = (props) => {
    console.log(props);
    return (
        <div>
            Demo页面： {props.name}
        </div>
    )
}

export default Demo;