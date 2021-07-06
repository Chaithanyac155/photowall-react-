import React, { Component } from 'react';
import Photo from './Photo';
import { Link} from 'react-router-dom';
import Main from './Main';
import AddPhoto from './AddPhoto';

class PhotowallPage extends Component {
    render() {
        return (
          
            <div>
                <Link to="/AddPhoto" className="addIcon"></Link>
            <div className="photoGrid">
                {this.props.posts
                .sort(function(x,y) {
                    return y.id - x.id
                })
                .map((post,id) => 
                <Photo key={id} post={post} handleRemove={this.props.handleRemove} />)}
            </div>
            </div>
              
        );
    }
}

export default PhotowallPage;