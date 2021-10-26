import React from 'react'
import { Form, Input, Submit } from '../../../../styles'

const InputTodo = () => {

    const handleSubmit = (e:any) => {
        e.preventDefault()
    }

    return (
        <>
        <Form onSubmit={(e) => {handleSubmit(e)}}>
            <Input />
            <Submit />
        </Form>
        </>
    )
}

export default InputTodo
