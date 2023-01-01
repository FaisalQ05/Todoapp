import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'

const TodoList = ({ item, index, iscomplete, editClicked, markCompleteHandle, deleteHandle, editHandle }) => {
    return (
        <div key={index} className='todoItem'>
            <div className={`todoText ${iscomplete.id.includes(index) ? 'done' : ''}`}>{`${index + 1} - ${item}`}</div>
            <div className='todoBtns'>
                {
                    editClicked ? null : (
                        <>
                            <IconButton onClick={() => markCompleteHandle(index)} aria-label='send' color='success' size="small"><DoneIcon /></IconButton>
                            {
                                iscomplete.id.includes(index) ? null : <IconButton onClick={() => deleteHandle(index)} aria-label='send' color='error' size="small"><DeleteIcon /></IconButton>
                            }
                        </>
                    )

                }
                {
                    iscomplete.id.includes(index) ? null : <IconButton onClick={() => editHandle(index)} aria-label='send' color='primary' size="small"><EditIcon /></IconButton>
                }

            </div>
        </div>
    )
}

export default TodoList