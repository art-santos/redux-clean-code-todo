import React from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { completeTodo } from '../../../app/redux/features/todo.slice'
import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks'
import { IButton } from '../../../domain/interfaces/interfaces-atoms'

const ButtonComplete: React.FC<IButton> = ({id, position}) => {
  const dispatch = useAppDispatch()
  const todo = useAppSelector((state) => state.todo)
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    if(position === todo.sections.length){
      setActive(true)
    }
  },[position, todo])

  const handleComplete = () => {
    if(position === todo.sections.length){
      setActive(true)
    }else{
      setActive(!active)
      dispatch(completeTodo({id: id}))
    }
  }

  return (
    <>
      <FiCheckSquare 
      onClick = {() => {handleComplete()}}
      color={active ? '#005eff' : '#000000'}
      fontSize={'21px'}
      />
    </>
  )
}

export default ButtonComplete
