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
      
        if(name!==''){
           let filteredData =data.filter(person=>person.firstName===name && person.surname===surname);
           if(filteredData.length!==0){
            setPerson(filteredData[0]);
           }else{
            alert('Error')
           }
        }else{
            alert('Error')
        }  
        e.preventDefault();
    }


   return (
        <div className='form'>
            <form>
                <input type='text' id='name' placeholder='Name'onInput={handleNameInput}/>
                <input type='text' id='surname' placeholder='Surname'onInput={handleSurnameInput}/>
                <button type='submit' id='button' onClick={handleButton}>Submit</button>
            </form>
                <div>
                    { <Profile person={person} key={person.id} props={data} />}
              
                </div>
        </div>
    )
}

export default Form