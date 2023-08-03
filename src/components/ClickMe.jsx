import React, { useState } from 'react'

const ClickMe = () => {

    const [characters, setCharacters] = useState('');
    const [counter, setCounter] = useState(0);

    const handleChange = (e) => {
        setCharacters(e.target.value)
    }

    //console.log(characters.length)


    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter + characters.length)
        setCharacters('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={characters} onChange={handleChange}/>
                <input type='submit' />
                {counter}
            </form>
        </div>
    )
}

export default ClickMe