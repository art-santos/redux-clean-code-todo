import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { completeTodo } from "../../../app/redux/features/todo.slice";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import { IButton } from "../../../domain/interfaces/interfaces-atoms";

/*
  That's the checkmark that's going to be show at the right side of the todo. It is a little more complex than the delete.
  Basically, he receives the state of the list length and and use it to set himself active.
  It also passes an id as an argument to the reducer for it to know which todo is being completed.
*/

const ButtonComplete: React.FC<IButton> = ({ id, state }) => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) => state.todo);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (state === todo.sections.length) {
      setActive(true);
    }
  }, [state, todo]);

  const handleComplete = () => {
    if (state === todo.sections.length) {
      setActive(true);
    } else {
      setActive(!active);
      dispatch(completeTodo({ id: id }));
    }
  };

  return (
    <>
      <FiCheckSquare
        onClick={() => {
          handleComplete();
        }}
        color={active ? "#005eff" : "#000000"}
        fontSize={"21px"}
      />
    </>
  );
};

export default ButtonComplete;
