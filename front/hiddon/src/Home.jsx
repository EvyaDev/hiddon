import React from 'react'
import { HOST } from './App'

export default function Home() {

    const newuser = {
        username: 'evya', email: 'evya@gmail.com'
    }

    function add() {
        fetch(`${HOST}/users`, {
            method: 'POST'
            , headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newuser)
        }).catch(err => console.error(err));
    }
    return (
        <div>
            <button onClick={add}>click me</button>
        </div>
    )
}
