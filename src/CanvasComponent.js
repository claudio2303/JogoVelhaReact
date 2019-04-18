import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CanvasComponent extends Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}
ReactDOM.render(<CanvasComponent/>, document.getElementById('container'));