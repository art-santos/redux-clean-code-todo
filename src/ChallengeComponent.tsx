import InputTodo from "./components/infrastructure/todo/atoms/InputTodo";
import SectionFactory from "./components/infrastructure/todo/utils/SectionFactory";

/*Alright, so here i've added a factory that's going to produce the sections and a input, 
responsible for creating todos*/

export function ChallengeComponent() {
  return (
    <>
      <SectionFactory />
      <InputTodo />
    </>
  );
}
