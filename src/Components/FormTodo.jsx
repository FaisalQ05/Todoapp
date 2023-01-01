import React from 'react'
import { Button, Alert, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EditAttributesRoundedIcon from '@mui/icons-material/EditAttributesRounded';

const FormTodo = ({ inputText, InputEvent, editClicked, editItem, submit }) => {
    return (
        <form className='todoAppFrom'>
            <input value={inputText} onChange={InputEvent} type='text' placeholder='Add Task' />
            {
                editClicked ?
                    <Button onClick={editItem} size='large' variant='contained'
                        startIcon={<EditAttributesRoundedIcon />}>Ok</Button>
                    :
                    <Button onClick={submit} size='large' variant='contained'
                        startIcon={<AddIcon fontSize='inherit' />}>Add</Button>
            }
        </form>
    )
}

export default FormTodo