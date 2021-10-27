import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Button } from '../../../../styles'
import { incrementPosition } from '../../../app/redux/features/todo.slice'
import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks'

const ButtonRight = ({id, position}:any) => {
  const dispatch = useAppDispatch()
  const todo = useAppSelector((state) => state.todo.sections)
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
      if (position === todo.length) {
          setDisabled(true);
      }}, [position, todo.length]);

  console.log(todo.length)
  console.log(position)

  return (
    <>
      <Button side="right"
      disabled={disabled}
      onClick={() => {dispatch(incrementPosition({id: id}))}}
      >
            <FiArrowRight />
        </Button>
    </>
  )
}

export default ButtonRight
