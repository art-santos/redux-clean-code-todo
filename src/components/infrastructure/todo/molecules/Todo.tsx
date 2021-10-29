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


const Todo: React.FC<ITodoComponent> = ({ value, position }) => {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <TodoContainer
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        {active && <ButtonDelete id={value.id} />}
        <ButtonLeft id={value.id} position={position} />
        <Text>{value.text}</Text>
        <ButtonRight id={value.id} position={position} />
        {active && <ButtomCompleted id={value.id} position={position} />}
      </TodoContainer>
    </>
  );
};

export default Todo;
