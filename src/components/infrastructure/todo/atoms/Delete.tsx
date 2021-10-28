import React from 'react'
import { FiTrash } from 'react-icons/fi'
import { useAppDispatch } from '../../../app/redux/hooks'
import { deleteTodo } from '../../../app/redux/features/todo.slice'
import { IButton } from '../../../domain/interfaces/interfaces-atoms'

const ButtonDelete: React.FC <IButton> = ({id}) => {
    const dispatch = useAppDispatch()
    const [active, setActive] = React.useState(false)

    const handleDelete = async () => {
        setActive(!active)
        dispatch(deleteTodo({id: id}))
    }

    return (
        <>
        <FiTrash 
        onClick = {() => handleDelete()}
        color={active ? '#ff0000' : '#000000'}
        fontSize={'21px'}
        />
        </>
    )
}

export default ButtonDelete
