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
    const test = await getApi('https://api.github.com/repos/every-io/demo-issues/issues?state=all');
    setTest(test);
  }
  getTodos();
  },[]);

  React.useEffect(() => {
    console.log(test);
  }, [test])

  console.log(test[0])

  return (
    <>
      {todo.value &&
        todo.value
          .filter((item: ITodo) => item.position === value)
          .sort((a: ITodo, b: ITodo) => {
            return b.date < a.date;
          })
          .map((item: ITodo) => {
            return <Todo key={item.id} value={item} position={value} />;
          })}

          {/* {test.map((item, i) => {
            return(
              <h1>wdwd</h1>
            )
          })} */}
          
    </>
  );
};

export default TodoFactory;
