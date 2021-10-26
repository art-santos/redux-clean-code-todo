import React from 'react'
import { TodoContainer, Text } from '../../../../styles'
import ButtonLeft from '../atoms/ButtonLeft'
import ButtonRight from '../atoms/ButtonRight'

const Todo = ({value}:any) => {
  return (
    <>
    <TodoContainer>
      <ButtonLeft />
      <Text>{value}</Text>
      <ButtonRight />
    </TodoContainer>
    </>
  )
}

export default Todo
