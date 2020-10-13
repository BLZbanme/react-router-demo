import React from "react"

const UCenter = (props) => {
    console.log(props);
    //http://localhost:3000/#/mine/ucenter/1001
    return (
        <div>
            Hello UCenter: {props.match.params.id}
        </div>
    )
}

export default UCenter;