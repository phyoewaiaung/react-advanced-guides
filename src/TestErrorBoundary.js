import React from "react";
class TestErrorBoundary extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (){
        this.setState({
            counter:this.state.counter + 1
        })
   }
    render(){
        if(this.state.counter === 6){
            throw new Error ("The counter reach 6, So This error encounter!");
        }
        return (
            <>
                <h2>Learn React Error Boundaries</h2>
                <div className="App"> 
                <p style={{color:"orange",fontWeight:'bold'}}>Error Will Encounter When The Counter Reach 6.</p>
                <b style={{fontSize:"20px"}}>{this.state.counter}</b>
                    <div className='btn'>
                        <button onClick={this.handleClick}>Click</button>
                    </div>
                </div>
            </>
        )
    }
    
}

export default TestErrorBoundary