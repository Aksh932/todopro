
import './App.css';
import Card from './page/Card';

import { useState, useEffect } from 'react';



const App = () => {
  const[todo, setTodo]=useState([])
  const[name,setName]=useState('')
  const[lastname,setLastName]=useState('')

  useEffect(()=>{
    const data=localStorage.getItem("data")
    if(data){
      setTodo(JSON.parse(data))
    }
  },[])

  const addHp=()=>{
   
    let add={
      id: Math.random(),
        name: name,
        lastname:lastname,
        color: "",
        isCompleted: false,
        isDeleted: false
    }
    todo.push(add)
    setTodo([...todo])
    setName(null)
    setLastName(null)
    localStorage.setItem("data",JSON.stringify(todo))
    
   
  }  


  const completedHp=(id)=>{
    const todofind=todo.find((e)=>e.id===id);
      todofind.isCompleted=true
      setTodo([...todo])   
      localStorage.setItem("data",JSON.stringify(todo))
  }
  const deleteHp=(id)=>{
      const todofind=todo.find(e=>e.id===id);
      todofind.isDeleted=true
      setTodo([...todo])
      localStorage.setItem("data",JSON.stringify(todo))
  }


  const UpdateColor = (id, color) => {
    const todofind = todo.find(e => e.id === id); // finds the element with id 
    todofind.color = color // changes are made which are reflected automatically
    setTodo([...todo]) //updating the current state
    localStorage.setItem("data", JSON.stringify(todo)) //updating local storage with state
  }

  return (  
    <div className="App">
        <div className='add-containar'>
          <input type="text" placeholder='Enter Name'  onChange={(data)=>setName(data.target.value)} /><br />
          <input type="text" placeholder='Enter Lastname'  onChange={(data)=>setLastName(data.target.value)} /><br />
          <button onClick={addHp} >Add</button>
        </div>

        <div className='data-containar'>
          <h2>data</h2>
          <div className='data-in'>
            {
              todo.map((e)=>{
                if(!e.isCompleted){
                  return(
                    <div>
                      {
                        !e.isDeleted && <Card id={e.id} name={e.name} lastname={e.lastname} completedHp={completedHp} updateColor={UpdateColor} isCompleted={e.isCompleted} deleteHp={deleteHp}/>
                      }
                    </div>
                  )
                }
                else
                {
                  return <></>
                }
              })
            }
          </div>
        </div>

        <div>
          <h2>completed</h2>
            <div className='data-com-in'>
            {
                todo.map((e) => {
                  if(e.isCompleted){

                   return (
                   <div>
                     {
                        !e.isDeleted && <Card key={e.id} id={e.id} name={e.name} lastname={e.lastname} deleteHp={deleteHp}/> 
                     }
                   </div>
                   )
                  } 
                  else {
                    return null
                  }  
                })
              
              }
              
            </div>
        </div>


    </div> 
    
    

    );

}
 
export default App;
