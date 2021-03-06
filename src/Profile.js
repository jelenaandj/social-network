import React, { useState, useEffect } from 'react'

const Profile=(props)=>{
const{person}=props

// console.log(props.person)
// console.log(props.props)

const[friends,setFriends]=useState([])
const[fof,setFof]=useState([])
const[sugg,setSugg]=useState([])

useEffect(()=>{

    if(person!==''){    
        const friends=props.props.filter(x=>person.friends.includes(x.id))
        setFriends(friends)
        console.log(person)
    }
},[person,props])

console.log(friends)

useEffect(()=>{
    let tempFof=[];
    let tempSugg=[];
    friends.forEach(friend => {
        friend.friends.forEach(fof => {
            let person=props.props.find(x=>x.id===fof);
            if(tempFof.includes(person)){
                if(!tempSugg.includes(person)){
                    tempSugg.push(person);
                }
            }else{
                tempFof.push(person);
            }
        });
    });

    setFof(tempFof);
    setSugg(tempSugg);
},[friends,props.props])

    
    console.log(fof);

    return (
        <div className='profile'>
            
            <p className='personP'>{person.firstName} {person.surname}</p>
            <p>Age: {person.age}</p>
            <p>Gender: {person.gender}</p>
            <hr/>
            <label>Direct friends</label> 
            <div>
                {friends.map(friends=>{return <p key={friends.id} friends={friends}>{friends.firstName} {friends.surname}</p>})}
            </div>
            <hr/>
            <label>Friends of Friends</label>
            <div>                
            {fof.filter(fof=>fof.id !== person.id).map(fof=>{return <p fof={fof} friends={friends} key={fof.id} >{fof.firstName} {fof.surname}</p>})}
            </div>
            <hr/>
            <label>Suggested Friends</label>
            <div>
                {sugg.filter(sugg=>sugg.id !== person.id && !friends.includes(sugg)).map(sugg=>{return <p sugg={sugg} friends={friends} key={sugg.id} >{sugg.firstName} {sugg.surname}</p>})}
            </div>
        </div>
    )
}

export default Profile 