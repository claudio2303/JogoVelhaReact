import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jogada: 9,
      Casa: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      Player: 1,
      Casa1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      Ganhei: 0,
      aux: 0
    };

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
  Verifica() {
    setTimeout(() =>{
    if (((this.state.Casa1[0] !== 0 && this.state.Casa1[1] !== 0 && this.state.Casa1[2] !== 0) && (this.state.Casa1[0] === this.state.Casa1[1] && this.state.Casa1[1] === this.state.Casa1[2]))
      || ((this.state.Casa1[6] !== 0 && this.state.Casa1[7] !== 0 && this.state.Casa1[8] !== 0) && (this.state.Casa1[6] === this.state.Casa1[7] && this.state.Casa1[7] === this.state.Casa1[8]))
      || ((this.state.Casa1[3] !== 0 && this.state.Casa1[4] !== 0 && this.state.Casa1[5] !== 0) && (this.state.Casa1[3] === this.state.Casa1[4] && this.state.Casa1[4] === this.state.Casa1[5]))
      || ((this.state.Casa1[0] !== 0 && this.state.Casa1[3] !== 0 && this.state.Casa1[6] !== 0) && (this.state.Casa1[0] === this.state.Casa1[3] && this.state.Casa1[3] === this.state.Casa1[6]))
      || ((this.state.Casa1[1] !== 0 && this.state.Casa1[4] !== 0 && this.state.Casa1[7] !== 0) && (this.state.Casa1[1] === this.state.Casa1[4] && this.state.Casa1[4] === this.state.Casa1[7]))
      || ((this.state.Casa1[2] !== 0 && this.state.Casa1[5] !== 0 && this.state.Casa1[8] !== 0) && (this.state.Casa1[2] === this.state.Casa1[5] && this.state.Casa1[5] === this.state.Casa1[8]))
      || ((this.state.Casa1[0] !== 0 && this.state.Casa1[4] !== 0 && this.state.Casa1[8] !== 0) && (this.state.Casa1[0] === this.state.Casa1[4] && this.state.Casa1[4] === this.state.Casa1[8]))
      || ((this.state.Casa1[2] !== 0 && this.state.Casa1[4] !== 0 && this.state.Casa1[6] !== 0) && (this.state.Casa1[2] === this.state.Casa1[4] && this.state.Casa1[4] === this.state.Casa1[6]))) {
      this.setState({ Ganhei: this.state.Ganhei + 1,
      aux: this.state.aux +1 });
      

    }
    if (this.state.Ganhei === 1) {

      if (this.state.Player === 2) {
        alert("O Bolinha Ganhou");

      }
      if (this.state.Player === 1) {
        alert("O X Ganhou");

      }
    }
    if (this.state.jogada === 0 && this.state.Ganhei === 0) {
      alert("Deu Velha, Começando Novo Jogo");
      window.location.reload();
    }
  }, 20);
  }
  Reseta(){
    window.location.reload();
}

  posicao(evento) {
    var tela = document.querySelector('canvas');
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    var newCasa1 = this.state.Casa1.slice(0);
    var newCasa = this.state.Casa.slice(0);
    if(this.state.Ganhei === 0){
    if (x > 0 && x < 150 && y > 0 && y < 150 && this.state.Casa[0] === 0) {
      x = 75;
      y = 75;

      newCasa1[0] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });

      this.desenha(this.returnContext(), x, y);
      this.Verifica();
      newCasa[0] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });
      
    }
    if (x > 0 && x < 150 && y > 150 && y < 300 && this.state.Casa[1] === 0) {
      x = 75;
      y = 225;
      this.desenha(this.returnContext(), x, y);
      newCasa[1] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });
      this.Verifica();
      newCasa1[1] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });
      
    }
    if (x > 0 && x < 150 && y > 300 && y < 450 && this.state.Casa[2] === 0) {
      x = 75;
      y = 375;
      this.desenha(this.returnContext(), x, y);
      newCasa[2] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });
      this.Verifica();
      newCasa1[2] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });
      
    }
    if (x > 150 && x < 300 && y > 0 && y < 150 && this.state.Casa[3] === 0) {
      x = 225;
      y = 75;
      this.desenha(this.returnContext(), x, y);
      this.Verifica();
      newCasa[3] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });

      newCasa1[3] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });
      
    }
    if (x > 150 && x < 300 && y > 150 && y < 300 && this.state.Casa[4] === 0) {
      x = 225;
      y = 225;
      this.desenha(this.returnContext(), x, y);
      newCasa[4] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });
      this.Verifica();
      newCasa1[4] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });
      
    }
    if (x > 150 && x < 300 && y > 300 && y < 450 && this.state.Casa[5] === 0) {
      x = 225;
      y = 375;
      this.desenha(this.returnContext(), x, y);
      newCasa[5] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });
      this.Verifica();
      newCasa1[5] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });
      
    }
    if (x > 300 && x < 450 && y > 0 && y < 150 && this.state.Casa[6] === 0) {
      x = 375;
      y = 75;
      this.desenha(this.returnContext(), x, y);
      newCasa[6] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });
      this.Verifica();
      newCasa1[6] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });
      
    }
    if (x > 300 && x < 450 && y > 150 && y < 300 && this.state.Casa[7] === 0) {
      x = 375;
      y = 225;
      this.desenha(this.returnContext(), x, y);
      newCasa[7] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });
      this.Verifica();
      newCasa1[7] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });
      
    }
    if (x > 300 && x < 450 && y > 300 && y < 450 && this.state.Casa[8] === 0) {
      x = 375;
      y = 375;
      this.desenha(this.returnContext(), x, y);
      newCasa[8] = 1; //execute the manipulations
      this.setState({ Casa: newCasa });
      this.Verifica();
      newCasa1[8] = this.state.Player; //execute the manipulations
      this.setState({ Casa1: newCasa1 });
     
    }
  }
    else{
      alert("Jogo Finalizado, Começando novo Jogo");
      window.location.reload();
  }

  }

  desenha(ctx, x, y) {
    if (this.state.jogada % 2 === 1 && this.state.jogada > 0) {
      ctx.fillStyle = 'green';
      ctx.beginPath();
      ctx.arc(x, y, 60, 0, 2 * 3.14);
      ctx.stroke();
      this.setState({
        jogada: this.state.jogada - 1,
        Player: this.state.Player + 1
      });

    } else if (this.state.jogada % 2 === 0 && this.state.jogada > 0) {
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.moveTo(x - 60, y - 60);
      ctx.lineTo(x + 60, y + 60);
      ctx.moveTo(x + 60, y - 60);
      ctx.lineTo(x - 60, y + 60);
      ctx.stroke();
      this.setState({
        jogada: this.state.jogada - 1,
        Player: this.state.Player - 1
      });

    }
  }

  // }

  render() {
    return (
      <div><canvas ref="canvas" width={450} height={450} onClick={(e) => this.posicao(e, this.returnContext())} />
        <br></br><button onClick={(e)=>this.Reseta(e)} >Novo Jogo</button></div>
    );
  }
}
//ReactDOM.render(<App/>, document.getElementById('container'));
export default App;
