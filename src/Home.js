import React, {useEffect, useState} from "react";
import Todo from "./Todo";
import {AiOutlinePlus} from 'react-icons/ai';
import {db} from './firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from "firebase/firestore"
import {useNavigate} from "react-router-dom";

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-4 w-full text-xl w-screen`,
    button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
    count: `text-center p-2`,
}

function App() {
    const navigate = useNavigate();

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('');
    console.log(input)
    useEffect(() => {
        const q = query(collection(db, 'todos'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = []
            querySnapshot.forEach((doc) => {
                todosArr.push({...doc.data(), id: doc.id})
            });
            setTodos(todosArr)
        })
        return () => unsubscribe()
    }, [])

    const createTodo = async (e) => {
        e.preventDefault(e)
        if (input === '') {
            alert("please enter a valid value")
            return
        }
        await addDoc(collection(db, 'todos'), {
            text: input,
            completed: false,
        })
        setInput('')
    }
    const deleteTodo =  async (id)=>{
        await deleteDoc(doc(db,'todos',id))
    }

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed
        })
    }

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>Todo App</h3>
                <form onSubmit={createTodo} className={style.form}>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input}
                           placeholder='Add Todo'
                    />
                    <button className={style.button}>
                        <AiOutlinePlus size={30}/>
                    </button>
                </form>
                <ul>
                    {todos.map((todo, index) => (
                        <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
                    ))}

                </ul>
                {todos.length < 1 ? null : <p className={style.count}>You have {todos.length} todos</p>}

            </div>
            <button onClick={()=>navigate("/login")}>Login</button>
        </div>
    );
}

export default App;
