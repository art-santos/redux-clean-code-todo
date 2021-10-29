import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "./styles";
import { decrementPosition } from "../../../app/redux/features/todo.slice";
import { useAppDispatch } from "../../../app/redux/hooks";
import { IButton } from "../../../domain/interfaces/interfaces-atoms";

/*
  This button is the responsible for decrementing the position of the todo.
  It's going to receives the position of the todo.
  Different from the right button, we know the position is going to be decremented till it be inactive. It's 1.
  So we do not need to get the state from the store.
*/

const ButtonLeft: React.FC<IButton> = ({ id, position }) => {
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    if (position === 1) {
      setDisabled(true);
    }
  }, [position]);

  const handleClick = () => {
    dispatch(decrementPosition({ id: id }));
  };

  return (
    <>
      <Button
        side="left"
        disabled={disabled}
        onClick={() => {
          handleClick();
        }}
      >
        <FiArrowLeft />
      </Button>
    </>
  );
};

export default ButtonLeft;
