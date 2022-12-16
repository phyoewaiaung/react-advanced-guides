import React,{Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null, };
      this.handleClick = this.handleClick.bind(this);
    }

    static getDerivedStateFromError(e,c){
        return {error:e,errorInfo:"This Is Error Information!"}
    }

    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo)
    }

    handleClick = () => {
        this.setState({
            error:null,
            errorInfo:null
        })
        console.clear()
    }
    render() {
        if(this.state.error){
            return(
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo}<br /><br />
                        <button onClick={this.handleClick}>Restart</button>
                    </details>
                </div>
            )
        }
        else{
            return this.props.children;
        }
    }
  }

  export default ErrorBoundary;