import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Moviecontainer from './components/moviecontainer';
import Addmovie from './components/addmovie'
import Search from './components/search'
import Stars from './components/Rating'





 class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movielist : [
        {img : 'https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2018/10/schindler2018_poster.jpg?itok=m_oj975n', 
        title : `Schindler's list`, year : '1993', rating:'5', id: Date.now},
        {img : 'https://images-na.ssl-images-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg', 
        title : `Pulp fiction`, year : '1994',rating:'5', id: Date.now},
        {img : 'https://images-na.ssl-images-amazon.com/images/I/51anSP-8iiL.jpg', 
        title : `Leon the professional `, year : '1994', rating:'5', id: Date.now},
        {img : 'https://i.pinimg.com/originals/5f/7d/94/5f7d941cd12e39b15ad99a175e1d4858.jpg', 
        title : `Fight club`, year : '1999', rating:'5', id: Date.now},
        {img : 'https://images-na.ssl-images-amazon.com/images/I/5104HNGW6NL._AC_SY445_.jpg', 
        title : `The shawshank redemption`, year : '1994', rating:5, id: Date.now},
        {img : 'https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg', 
        title : `Avengers: infinity war`, year : '2018', rating:'3', id: Date.now},
        {img : 'https://fr.web.img6.acsta.net/pictures/19/12/12/17/09/3732824.jpg', 
        title : `Birds of prey`, year : '2020', rating:'3', id: Date.now},
        {img : 'https://m.media-amazon.com/images/M/MV5BN2VkMjQwZWMtMzc1NC00ZjJiLWJlNTMtNmRjOTE2ZTJmYzUwXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR7,0,182,268_AL_.jpg', 
        title : `Charlie's angel`, year : '2019', rating:'1', id: Date.now},
        {img : 'https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg', 
        title : `Harry potter`, year : '1999', rating:'5', id: Date.now},
        {img : 'https://uvmbored.com/wp-content/uploads/2018/05/biglebowski-poster-3b44f87f597e68af6da589ba9fe83518.jpg', 
        title : `The big lebowski`, year : '1998', rating:'5', id: Date.now},
        {img : 'https://imgc.allpostersimages.com/img/print/u-g-F8UNIQ0.jpg?w=550&h=550&p=0', 
        title : `Moonlight`, year : '2019', rating:'4', id: Date.now},
        {img : 'https://images-na.ssl-images-amazon.com/images/I/71OL2toesWL._AC_SY679_.jpg', 
        title : `Once upon a time in hollywood`, year : '2019', rating:'4', id: Date.now},
        {img : 'https://i.ebayimg.com/images/g/bQkAAOSw0gVdrg~9/s-l300.jpg', 
        title : `Joker`, year : '2019', rating:'4', id: Date.now},
        {img : 'https://www.mauvais-genres.com/26716/parasite-original-movie-poster-47x63-in-2019-joon-ho-bong-kang-ho-song.jpg', 
        title : `Parasite`, year : '2019', rating:'4', id: Date.now},
      ],

      searchmovie : '',

      movierate: 1,

title :'', 
year : '',
img : '',
rating : ''


    }
  }


 handleinput = (e) => {
this.setState({
  searchmovie: e.target.value
})
}


handlename = (e) => {
  this.setState({
    [e.target.name]:e.target.value
  })

}


addmovie=(title,year,img,rating)=>{
 
  this.setState({
  movielist : this.state.movielist.concat({title:title, year:year,img:img,rating:rating})  })
}

handleChangeRating =(star) =>{
  this.setState({
    movierate: star
  })
}

  render() {

    let filteredmovies = this.state.movielist.filter((movies) =>{
      return (movies.title.toLowerCase().includes(this.state.searchmovie.toLowerCase().trim()) ) && movies.rating >= this.state.movierate
    })
    return (
      <div>
        <Search   handleinput={this.handleinput}/>
        <Stars count={this.state.movierate} handleChangeRating={this.handleChangeRating} rating={(this.state.rating)}/>
        <Moviecontainer filteredmovies={filteredmovies}/>
        <Addmovie handlename={this.handlename} addmovie={this.addmovie} title={this.state.title} img={this.state.img}year={this.state.year}rating={this.state.rating}/>


      </div>
    )
  }
}












export default App;
