import React from "react"
import { Redirect, Prompt } from "react-router-dom";

export default class Shop extends React.Component {

    state = {
        isLogin: true,
        name: ""
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div>
                {
                    isLogin ?
                    <div>shop</div>
                    : <Redirect to="/"></Redirect>
                }
                <Prompt
                    when={ !!this.state.name }
                    message={ "确定要离开吗？"}
                >

                </Prompt>
                Shop
                <input type="text" value={ this.state.name } onChange={ e => this.setState({name: e.target.value})}></input>
            </div>
        )
    }
}