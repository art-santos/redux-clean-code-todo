import React from 'react'
import { Section, SectionTitle } from '../../../../styles'
import TodoFactory from '../utils/TodoFactory'

const TodoSection = ({section, value}:any) => {
    return (
        <>
        <Section>
            <SectionTitle>{section}</SectionTitle>
            <TodoFactory />
        </Section>
        </>
    )
}

export default TodoSection
