import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { Button } from '../../../../styles';
import { decrementPosition } from '../../../app/redux/features/todo.slice';
import { useAppDispatch } from '../../../app/redux/hooks';

const ButtonLeft = ({id, position}:any) => {
    const dispatch = useAppDispatch();
    const [disabled, setDisabled] = React.useState(false);

    React.useEffect(() => {
        if (position === 1) {
            setDisabled(true);
        }}, [position]);
    
    return (
        <>
        <Button 
        side="left"
        disabled={disabled}
        onClick={() => {dispatch(decrementPosition({id: id}))}}
        >
            <FiArrowLeft />
        </Button>
        </>
    )
}

export default ButtonLeft
