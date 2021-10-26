import React from 'react'
import InputTodo from './components/infrastructure/todo/atoms/InputTodo'
import SectionFactory from './components/infrastructure/todo/utils/SectionFactory'

export function ChallengeComponent() {
  return (
    <>
      <SectionFactory />
      <InputTodo />

    </>
  )
}
