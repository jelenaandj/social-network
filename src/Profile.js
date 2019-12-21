import React, { useState, useEffect } from 'react'

const Profile=(props)=>{
const{person}=props

// console.log(props.person)
// console.log(props.props)

const[friends,setFriends]=useState([])
const[fof,setFof]=useState([])

useEffect(()=>{

    if(person!==''){    
        const friends=props.props.filter(x=>person.friends.includes(x.id))
        setFriends(friends)
        console.log(person)
    }
},[person,props])

console.log(friends)

useEffect(()=>{
    let temp=[];
    friends.forEach(friend => {
        friend.friends.forEach(fof => {
        temp.push(props.props.find(x=>x.id===fof));
        });
    });

    setFof(temp);
},[friends,props.props])

    
    console.log(fof);
// const fof=props.props.includes(friends.friends)
// console.log(fof)


    return (
        <div>
            
            <p>{person.firstName}</p>
            <p>{person.surname}</p>
            <p>{person.age}</p>
            <p>{person.gender}</p>
            <label>Direct friends</label>
            <div>
                {friends.map(friends=>{return <p key={friends.id} friends={friends}>{friends.firstName} {friends.surname}</p>})}
            </div>
            <label>Friends of Friends</label>
            <div>
                {fof.filter(fof=>fof.id !== person.id).map(fof=>{return <p fof={fof} friends={friends} key={fof.id} >{fof.firstName} {fof.surname}</p>})}
            </div>
        </div>
    )
}

export default Profile 