import { Section, SectionTitle } from "./styles";
import { getInitialTodos } from "../../../app/redux/features/todo.slice";
import { useAppDispatch } from "../../../app/redux/hooks";
import TodoFactory from "../utils/TodoFactory";
import { ITodoSection } from "../../../domain/interfaces/interfaces-organisms";

/*that's going to be the section responsible for organizing the todos in different sections
inside that we can see a title section and the todo factory.
*/

const TodoSection: React.FC<ITodoSection> = ({ section, value }) => {
  const dispatch = useAppDispatch();
  dispatch(getInitialTodos());
  //This is going to be responsible for setting the initial todos, or not to. It's going to trigger getInitialTodos from the reducer.
  return (
    <>
      <Section>
        <SectionTitle>{section}</SectionTitle>
        <TodoFactory value={value} />
      </Section>
    </>
  );
};

export default TodoSection;
