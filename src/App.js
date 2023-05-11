import './App.css';
import React, { Component } from "react";
import CountersContainer from "./components/counters/countersContainer"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <Navbar/>
        </nav>
        <main class="container-fluid">
          <CountersContainer
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleAdd}
            onDecrement={this.handleSub}
            onDelete={this.handleDelete}
            onCreate={this.handleCreate}
          />
        </main>
        <footer>
          <Footer/>
        </footer>
      </React.Fragment>
    );
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleAdd = value => {
    console.log("Incrementando contador: ", value);
    const counters = [...this.state.counters];
    const index = counters.indexOf(value);
    counters[index] = { ...value };
    counters[index].value++;
    this.setState({ counters });
  };

  handleSub = value => {
    console.log("Decrementando contador: ", value);
    const counters = [...this.state.counters];
    const index = counters.indexOf(value);
    counters[index] = { ...value };
    counters[index].value--;
    this.setState({ counters });
  };

  handleCreate = () => {
    console.log("Adicionando botão");
    const newId = this.state.counters.length+1
    const newCounter = { id: newId, value: 0 }
    const counters = [...this.state.counters];
    counters.push(newCounter)
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Resetando valores dos botões.")
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Deletando botão: ", counterId);
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
}

export default App;
