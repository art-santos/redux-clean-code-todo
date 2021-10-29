import React from "react";
import { FiTrash } from "react-icons/fi";
import { useAppDispatch } from "../../../app/redux/hooks";
import { deleteTodo } from "../../../app/redux/features/todo.slice";
import { IButton } from "../../../domain/interfaces/interfaces-atoms";

/*
  So, that's the small trash button that's going to be shown on the left side of the component.
  Basically he uses a dispatch to pass the item's id to the reducer, and then the reducer will remove it using a filter.
*/

const ButtonDelete: React.FC<IButton> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [active, setActive] = React.useState(false);

  const handleDelete = async () => {
    setActive(!active);
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <>
      <FiTrash
        onClick={() => handleDelete()}
        color={active ? "#ff0000" : "#000000"}
        fontSize={"21px"}
      />
    </>
  );
};

export default ButtonDelete;
