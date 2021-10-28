import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "./styles";
import { incrementPosition } from "../../../app/redux/features/todo.slice";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import { IButton } from "../../../domain/interfaces/interfaces-atoms";

const ButtonRight: React.FC<IButton> = ({ id, position }) => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) => state.todo);
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    if (position === todo.sections.length) {
      setDisabled(true);
    }
  }, [position, todo]);

  const handleClick = () => {
    dispatch(incrementPosition({ id: id }));
  };
  return (
    <>
      <Button
        side="right"
        disabled={disabled}
        onClick={() => {
          handleClick();
        }}
      >
        <FiArrowRight />
      </Button>
    </>
  );
};

export default ButtonRight;
