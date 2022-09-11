import React from 'react'

export default function Header(props){
    return (
    <header>
        <p className="heading">Our Tours</p>
        <hr className="hr" />

        {!props.tours && <button className='refresh' onClick={()=>props.refresh()}>Refresh</button>}
    </header>
    )
}