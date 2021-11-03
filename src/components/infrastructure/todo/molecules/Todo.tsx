import React from "react";
import { TodoContainer, Text } from "./styles";
import ButtonLeft from "../atoms/ButtonLeft";
import ButtonRight from "../atoms/ButtonRight";
import ButtomCompleted from "../atoms/Completed";
import ButtonDelete from "../atoms/Delete";
import { ITodoComponent } from "../../../domain/interfaces/interfaces-molecules";

/*
Thats the todo component, the only state he manages is active or not, that are there for visual pourpuses only
When active, delete and completed buttons are visible.
*/


const Todo = ({ value, state }:any) => {
  console.log('--->state', state)
  return (
    <>
      <TodoContainer>
        <div className="display">
        <ButtonDelete id={value.id} />
        </div>
        <ButtonLeft id={value.id} state={state} />
        <Text>{value.title}</Text>
        <ButtonRight id={value.id} state={state} />
        <div className="display">
        <ButtomCompleted id={value.id} state={state} />
        </div>
      </TodoContainer>
    </>
  );
};

export default Todo;
