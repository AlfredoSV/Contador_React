import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 1 };
  }

  Contar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  Limpiar = () => {
    this.setState({ contador: 1 });
  };

  render() {
    return (
      <div className="App">
        <h1 className="titleApp">{this.state.contador}</h1>
        <button className="btn" onClick={this.Contar}>
          Contar
        </button>
        <button className="btn" onClick={this.Limpiar}>
          Limpiar
        </button>
      </div>
    );
  }
}
