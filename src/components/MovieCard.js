import React from 'react'


function MovieCard(props) {
    return (
        <div className="moviecard">            
            <img className='poster' src ={props.img}/>
            <p>{props.title}</p>
            <span>{props.count}</span>
            <p className='year'>{props.year}</p>
        </div>
    )
}

export default MovieCard
