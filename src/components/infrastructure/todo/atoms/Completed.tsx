import React from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { completeTodo } from '../../../app/redux/features/todo.slice'
import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks'

const ButtonComplete = ({id, position}:any) => {
  const dispatch = useAppDispatch()
  const todo = useAppSelector((state) => state.todo.sections)
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    if(position === todo.length){
      setActive(true)
    }
  },[position, todo.length])

  const handleComplete = () => {
    if(position === todo.length){
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
