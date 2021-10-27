import { Section, SectionTitle } from '../../../../styles'
import TodoFactory from '../utils/TodoFactory'

const TodoSection = ({section, value}:any) => {
    return (
        <>
        <Section>
            <SectionTitle>{section}</SectionTitle>
            <TodoFactory value={value}/>
        </Section>
        </>
    )
}

export default TodoSection
