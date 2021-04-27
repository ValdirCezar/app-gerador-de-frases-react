import React, { Component } from 'react';
import logo from './assets/image.svg'
import './App.css'

import Button from '@material-ui/core/Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.gerarFrase = this.gerarFrase.bind(this);

    this.frases = [
      'Quando chover, busque pelo arco-íris. Quando escurecer, busque pelas estrelas.',
      'Seja o piloto de suas histórias e voe o mais alto que conseguir.',
      'Nenhum mar calmo torna um marinheiro especialista em navegação.',
      'Quem tem luz própria jamais ficará na escuridão.',
      'Quanto mais fortes forem suas provações, maiores serão suas vitórias.',
      'Se você não vivenciar a tristeza, não saberá reconhecer quando a felicidade chegar.']
  }

  gerarFrase() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render() {
    return (
      <div className="app">
        <img src={logo} className="img" />
        <MyButton nome="Abrir biscoito" acaoBtn={this.gerarFrase} />
        <h3 className="frase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class MyButton extends Component {
  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" className="btn" onClick={this.props.acaoBtn}>{this.props.nome}</Button>
      </div>
    )
  }
}

export default App;