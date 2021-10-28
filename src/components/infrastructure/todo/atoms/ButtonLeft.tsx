import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "./styles";
import { decrementPosition } from "../../../app/redux/features/todo.slice";
import { useAppDispatch } from "../../../app/redux/hooks";
import { IButton } from "../../../domain/interfaces/interfaces-atoms";

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
