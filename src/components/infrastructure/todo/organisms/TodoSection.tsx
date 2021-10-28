import { Section, SectionTitle } from './styles'
import { getInitialTodos } from '../../../app/redux/features/todo.slice'
import { useAppDispatch } from '../../../app/redux/hooks'
import TodoFactory from '../utils/TodoFactory'
import { ITodoSection } from '../../../domain/interfaces/interfaces-organisms'

const TodoSection: React.FC<ITodoSection> = ({section, value}) => {
    const dispatch = useAppDispatch()
    dispatch(getInitialTodos())
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
