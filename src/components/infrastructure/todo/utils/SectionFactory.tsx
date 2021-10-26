import TodoSection from "../organisms/TodoSection";

const sections = [
    'To Do',
    'In Progress',
    'Done',
];

const SectionFactory = () => {
    return (
        <>
        {sections.map((section, index) => (
            <TodoSection key={index} value={index+1} section={section} />
        ))}
        </>
    )
}

export default SectionFactory
