import React, { Component } from 'react';

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
     event.preventDefault();
     const imageLink= event.target.elements.link.value;
     const description= event.target.elements.description.value;
     const post ={
         id: Number(new Date()),
         imageLink:imageLink,
         description:description
     }
     if(description && imageLink){
         this.props.onAddPhoto(post)
     }
    }
    render() {
        return (
            <div>
                <h1>Photowall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                        autoComplete="off"
                          name="link"
                            placeholder="Link" />
                        <input type="text"
                         autoComplete="off"
                          name="description"
                            placeholder="Description" />
                    <button className="pst-button">POST</button>
                    </form>
                </div>
               
            </div>
        );
    }
}

export default AddPhoto;