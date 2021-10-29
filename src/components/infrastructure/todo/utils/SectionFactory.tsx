import { SectionContainer } from "../organisms/styles";
import { useAppSelector } from "../../../app/redux/hooks";
import TodoSection from "../organisms/TodoSection";


/*
  This component is going to be used to create the sections for the todo list.
*/

const SectionFactory = () => {
  const sections = useAppSelector((state) => state.todo.sections);

  return (
    <>
      <SectionContainer>
        {sections &&
          sections.map((section, index) => (
            <TodoSection key={index} value={index + 1} section={section} />
          ))}
      </SectionContainer>
    </>
  );
};

export default SectionFactory;
