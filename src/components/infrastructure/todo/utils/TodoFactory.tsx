import React from "react";
import { useAppSelector } from "../../../app/redux/hooks";
import getApi from "../../../data/usecases/get-api";
import { ITodoFactoryProps } from "../../../domain/interfaces/interfaces-organisms";
import { ITodo } from "../../../domain/interfaces/interfaces-todo";
import Todo from "../molecules/Todo";

/*
  This section is going to be responbile for passaging props and redereding the component Todo as many times as the number of todos
  present in the state.
*/


const TodoFactory: React.FC<ITodoFactoryProps> = ({ value }) => {
  const todo: any = useAppSelector((state) => state.todo);
  
  const [test, setTest] = React.useState([]);

  React.useEffect(() => {
  async function getTodos() {
    setTest(test);
  }
  getTodos();
  },[]);

  function trimPosition(value: any) {
    if(typeof value === 'string'){
      if(value == "open"){
        return 1;
      }else{
        return 3;
      }
    }else{
      return value;
    }
  }

  return (
    <>
      {todo &&
        todo.value
          .filter((item: any) => trimPosition(item.state) === value)
          .map((item: any) => {
            return <Todo key={item.id} value={item} position={trimPosition(item.state)} />;
          })}
          
    </>
  );
};

export default TodoFactory;
