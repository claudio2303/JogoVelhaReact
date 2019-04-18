import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = { jogada: 9 };
  //  this.state = { Casa: Array(9).fill(null) };
}
  
  componentDidMount() {
    this.updateCanvas(this.returnContext());
    this.posicao(this.returnContext());
    
  }

  returnContext() {
    const ctx = this.refs.canvas.getContext('2d');
    return ctx;
  }

  updateCanvas(ctx) {
    
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(0, 0, 450, 450);
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 450);
    ctx.stroke();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 450);
    ctx.stroke();
    ctx.moveTo(0, 150);
    ctx.lineTo(450, 150);
    ctx.stroke();
    ctx.moveTo(0, 300);
    ctx.lineTo(450, 300);
    ctx.stroke();

  }

  posicao(evento) {
    var tela = document.querySelector('canvas');
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    if (x > 0 && x < 150 && y > 0 && y < 150 ) {
      x = 75;
      y = 75;
      //
      this.desenha(this.returnContext(), x, y );
    }
    if (x > 0 && x < 150 && y > 150 && y < 300 ) {
      x = 75;
      y = 225;
      this.desenha(this.returnContext(), x, y);
    }
    if (x > 0 && x < 150 && y > 300 && y < 450) {
      x = 75;
      y = 375;
      this.desenha(this.returnContext(), x, y);
    }
    if (x > 150 && x < 300 && y > 0 && y < 150) {
      x = 225;
      y = 75;
      this.desenha(this.returnContext(), x, y);
    }
    if (x > 150 && x < 300 && y > 150 && y < 300) {
      x = 225;
      y = 225;
      this.desenha(this.returnContext(), x, y);
    }
    if (x > 150 && x < 300 && y > 300 && y < 450) {
      x = 225;
      y = 375;
      this.desenha(this.returnContext(), x, y);
    }
    if (x > 300 && x < 450 && y > 0 && y < 150) {
      x = 375;
      y = 75;
      this.desenha(this.returnContext(), x, y);
    }
    if (x > 300 && x < 450 && y > 150 && y < 300) {
      x = 375;
      y = 225;
      this.desenha(this.returnContext(), x, y);
    }
    if (x > 300 && x < 450 && y > 300 && y < 450) {
      x = 375;
      y = 375;
      this.desenha(this.returnContext(), x, y);
    }
  }
  
  desenha(ctx, x, y) {
    if (this.state.jogada % 2 === 1 && this.state.jogada > 0) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 60, 0, 2 * 3.14);
        ctx.stroke();
        this.setState({jogada : this.state.jogada - 1});
    } else if (this.state.jogada % 2 === 0 && this.state.jogada > 0) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.moveTo(x - 60, y - 60);
        ctx.lineTo(x + 60, y + 60);
        ctx.moveTo(x + 60, y - 60);
        ctx.lineTo(x - 60, y + 60);
        ctx.stroke();
        this.setState({jogada : this.state.jogada - 1});
    }
}

  // }

  render() {
    return (
      <canvas ref="canvas" width={450} height={450}  onClick={(e) => this.posicao(e, this.returnContext())}/>
    );
  }
}
//ReactDOM.render(<App/>, document.getElementById('container'));
export default App;
