import React, { useState } from 'react'
import TodoList from './TodoList';
import FormTodo from './FormTodo';


const TodoApp = () => {

    const [inputText, setInputText] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [iscomplete, setIsComplete] = useState({
        state: false,
        id: []
    })
    const [editClicked, setEditClicked] = useState(false)
    const [editItemId, setEditItemId] = useState(null)

    const InputEvent = (e) => {
        setInputText(e.target.value)

    }
    const submit = (e) => {
        e.preventDefault()
        // console.log("Submit working : ", inputText)
        // console.log(Boolean(inputText))
        if (inputText) {
            setTodoList(p => [...p, inputText])
        }
        else {
            alert("Empty field")
        }

    }

    const deleteHandle = (id) => {
        // console.log(id)
        const updateItems = todoList.filter((value, index) => {
            return id !== index;
        });
        setTodoList(updateItems);
    }
    const editHandle = (id) => {
        // console.log(id)
        let newEditItem = todoList.find((value, index, arr) => {
            return id === index;
        });
        // console.log(newEditItem)
        setInputText(newEditItem)
        setEditClicked(true)
        setEditItemId(id)
    }

    const editItem = () => {
        // console.log("Edit : ", editItemId)
        setTodoList((oldItems) => {
            oldItems[editItemId] = inputText;
            return [...oldItems];
        })
        setInputText("")
        setEditClicked(false)
    }

    const markCompleteHandle = (id) => {

        let isExist = iscomplete.id.includes(id);

        isExist ? setIsComplete(old => {
            const updatedItems = old.id.filter(i => (
                i !== id
            ))
            if (old.id.length == 1) {
                return {
                    state: false,
                    id: []
                }
            }
            return {
                state: true,
                id: updatedItems
            }

        }) : setIsComplete(p => {
            return {
                state: true,
                id: [...p.id, id]
            }
        })

    }

    return (
        <div className='todoApp'>

            <FormTodo
                inputText={inputText}
                InputEvent={InputEvent}
                editClicked={editClicked}
                editItem={editItem}
                submit={submit} />

            {
                todoList.length > 0 ? (<div className='todoList'>
                    {
                        todoList.map((item, index) => (
                            <TodoList key={index} item={item}
                                index={index}
                                iscomplete={iscomplete}
                                editClicked={editClicked}
                                markCompleteHandle={markCompleteHandle}
                                deleteHandle={deleteHandle}
                                editHandle={editHandle} />
                        ))
                    }
                </div>) : (<h2>Todo list is empty</h2>)
            }
        </div>
    )
}

export default TodoApp