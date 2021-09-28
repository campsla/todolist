import React, { Component } from "react";
import Todo from "./todo";
import AddTodo from "./addtodo";
import swal from "sweetalert";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.myData = 0;
  }

  //Estado del componente al iniciar
  state = {
    addTodoValue: "",
    todos: [
      {
        id: 1,
        value: "todo 1",
        isDone: false,
      },
      {
        id: 2,
        value: "todo 2",
        isDone: true,
      },
      {
        id: 3,
        value: "todo 3",
        isDone: false,
      },
    ],
  };

  //Método para obtener la fecha
  getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  //método llamado desde el componente Todo
  handleDelete = (todo) => {
    const todos = this.state.todos.filter((t) => {
      return t.id !== todo;
    });
    this.setState({ todos });
  };

  handleDone = (todo) => {
    const todos = [...this.state.todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    this.setState({ todos });
  };

  //método llamado desde el componente Todo
  addNewTodo = (value) => {
    if (value) {
      const todos = [...this.state.todos];
      //mirar aca lo del repeitdo
      todos.map((t) => {
        if (t.value.toLowerCase() === value.trim().toLowerCase()) {
          swal("El Todo ingresado ya existe, vuelva a ingresar otro");
          this.myData = 1;
        }
        return t;
      });

      if (this.myData === 1) {
        console.log("Entra aca");
        this.myData = 0;
      } else {
        todos.push({
          id: this.getTime(),
          value: value.trim(),
          isDone: false,
        });
        this.setState({ addTodoValue: "", todos });
      }
    } else {
      console.log("Please Add Todo Text");
    }
  };

  render() {
    return (
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <td colSpan="4" className="text-center">
              <AddTodo
                infAddTodo={this.addNewTodo}
                addTodoValue={this.state.addTodoValue}
              />
            </td>
          </tr>
          {this.state.todos.map((todo, index) => (
            <tr key={todo.id}>
              <Todo
                index={index + 1}
                todo={todo}
                infDelete={this.handleDelete}
                infDoneDone={this.handleDone}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Todos;
