import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        //Actualización del estado del componente local
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Borrar valor existente en la entrada
        document.getElementById("todoValue").value = "";
        //Actualización del estado del componente local
        this.setState({value:""});
    }

    addTodo = () => {
        //Llamar a la referencia del método en el componente Todos
        this.props.infAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (

            <div className="input-group input-group-sm  mb-3">
                <input type="text" className="form-control" id="todoValue" placeholder="Insert ToDo..." onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-primary" type="button" id="button-addon2">Add New ToDo</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;