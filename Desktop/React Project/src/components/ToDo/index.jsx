import React, { Component } from "react";

import "./ToDo.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  //incorporating local storage
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <React.Fragment>

        <h1 className="todo-title text-center font-weight-bold my-4 ">
          MY TO DO LIST
        </h1>
        <div className="mx-auto w-75">


          <h3 className="text-left w-75  mx-auto mb-0 ">Add an Item...</h3>
          <div className="row  w-75 mx-auto mt-4">
            <div className="col-sm-10 p-0">
              <input
                type="text"
                placeholder="Type item here"
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-sm-2 p-0">
              <button
                className="add-btn btn-floating btn btn-success w-100 h-100"
                onClick={() => this.addItem()}
                disabled={!this.state.newItem.length}
              >
                <i className="material-icons"> + </i>
              </button>
            </div>
          </div>
          <br /> <br />
          <ul className="list-group">
            {this.state.list.map((item) => {
              return (
                <li
                  className="list-group-item rounded m-2 shadow-sm "
                  key={item.id}
                >
                  <div className="row">
                    <div className="col-11">
                      <p className="text-left m-0 p-0 pt-1">{item.value}</p>
                    </div>
                    <div className="col-1">
                      <button
                        className="btn btn-floating  btn-primary h-100 w-100 "
                        onClick={() => this.deleteItem(item.id)}
                      >
                        <i className="material-icons">x</i>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
