import React,{Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null, };
    }

    static getDerivedStateFromError(error){
        return { error : true}
    }

    componentDidCatch(error,errorInfo){
        this.setState({
            error:error,
            errorInfo:errorInfo.componentStack
        })
    }
    render() {
        if(this.state.error){
            return(
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo}
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