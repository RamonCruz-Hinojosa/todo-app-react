import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      todos: [],
      isClicked: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.text],
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleClick}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.text}
          ></input>
          <button type="submit">Add Todos</button>
        </form>
        <ol>
          {this.state.todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
