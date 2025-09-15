import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_) {
        // odater state så næste render viser fallback UI
        return { hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error("fajl fanget i ErrorBoundary:", error, errorInfo);
    }

    render(){
        if(this.state.hasError) {
            return <h2>noget gik galt. prøv at genindlæse</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary