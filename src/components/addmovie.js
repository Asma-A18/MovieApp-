import React, { Component } from "react";
import {Button, Modal} from 'react-bootstrap'



class Addmovie extends Component {
    state={
        show:false
    }
  handleShow = () =>{
        this.setState({
            show: !this.state.show
    })};


  render() {
    return (
      <>
        <Button variant="primary" className='addmovie-btn' onClick={this.handleShow}>
          +
        </Button>
        <Modal show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h1 style={{color : "black"}} >Add a Movie</h1>

          <form >
            <input name="title"    onChange={this.props.handlename}  type="text" placeholder="Movie name..." />
            <input name="img"  onChange={this.props.handlename} type="text" placeholder="Image URL ..." />
            <input name="rating"   onChange={this.props.handlename} type="text" placeholder="Rating..." />
            <input name="year"   onChange={this.props.handlename} type="text" placeholder="Year..." /></form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary"  onClick={(e) => { e.preventDefault(); this.props.addmovie(this.props.title , this.props.year , this.props.img , this.props.rating)}} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Addmovie