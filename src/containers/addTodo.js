import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

import './style.css'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="adicionar"><br/><br/><br/><br/>
    <br/><br/><br/><br/>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input className="form-control" placeholder="Adicionar tarefa" type="text" ref={(el) => (input = el)} />{" "}
        <button type="submit" className="btn btn-primary "> Adicionar tarefa </button>{" "}
        <br /> <br /> 
      </form>{" "}
    </div>
  );
};

export default connect()(AddTodo);
