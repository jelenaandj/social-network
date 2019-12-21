import React, {useState} from 'react'
import Profile from './Profile'


const Form=(props)=>{
let data=props.data
// console.log(data)

const[name,setName]=useState('')
const[surname,setSurname]=useState('')
const[person, setPerson]=useState('');

const handleNameInput=(e)=>{
    setName(e.target.value)
}

const handleSurnameInput=(e)=>{
    setSurname(e.target.value)
}

const handleButton=(e)=>{
    e.preventDefault();
    setPerson(data.filter(person=>person.firstName===name && person.surname===surname)[0]);
}

   return (
        <div>
            <form>
                <input type='text' id='name' placeholder='Name'onInput={handleNameInput}/>
                <input type='text' id='surname' placeholder='Surname'onInput={handleSurnameInput}/>
                <button type='submit' onClick={handleButton}>Submit</button>
            </form>
                <div>
                    { <Profile person={person} key={person.id} props={data} />}
              
                </div>
        </div>
    )
}

export default Form