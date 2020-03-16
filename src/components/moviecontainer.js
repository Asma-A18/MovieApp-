import React, { Component } from 'react'
import Stars from './Rating'
import Moviecard from './MovieCard'

 class Moviecontainer extends Component {
  
  render() {
   const movies =  this.props.filteredmovies.map((el,i)=> { 
      return <div>
 
      <Moviecard title ={el.title} year ={el.year} img ={el.img} key={i}/>
      <Stars count = {el.rating} />
       </div>
      })
    return (
      <div className='container'>
      { movies}
 
      </div>
  
    
    )
  }
}

export default Moviecontainer

 








