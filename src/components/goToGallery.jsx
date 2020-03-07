import React from 'react';

import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class GoToGallery extends React.Component{
    render(){
        return(
            <form style = {{paddingBottom:'155px'}} action = "">
                <Link to = '/apartments'>
                    <Button variant = "secondary" size = "lg">
                        Show Me All Properties!
                    </Button>
                </Link>
            </form>
        );
    }
}
export default GoToGallery;