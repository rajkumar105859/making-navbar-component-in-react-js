import React from 'react'

function DateTime(){
    const name = "Rajkumar"
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    return(
        <React.Fragment>
            <h1>My name is {name}</h1>
            <p>Today date is : {currDate}</p>
            <p>Current Time is : {currTime} </p>
        </React.Fragment>
    )
} 
export  default DateTime