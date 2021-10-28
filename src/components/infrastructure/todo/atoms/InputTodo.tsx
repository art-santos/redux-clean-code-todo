import React from "react";
import { Form, Input, Submit } from "./styles";
import { addTodo } from "../../../app/redux/features/todo.slice";
import { useAppDispatch } from "../../../app/redux/hooks";

const InputTodo = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
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
