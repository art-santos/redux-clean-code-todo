import React from "react";
import { Form, Input, Submit } from "./styles";
import { addTodo } from "../../../app/redux/features/todo.slice";
import { useAppDispatch } from "../../../app/redux/hooks";

/*
  So that's one of the most useful components in the app. It's going to dispatch the input value to the
  redux store. Basically, his only responsability is to pass the input data to the store using dispatch.
  after this, if the value is not empty, it will dispatch the addTodo action. Then, it's value is going to be
  set to an empty string.
*/

const InputTodo = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value !== undefined) {
      dispatch(addTodo({ value: value }));
      setValue("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          required={true}
          value={value}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Submit />
      </Form>
    </>
  );
};

export default InputTodo;
