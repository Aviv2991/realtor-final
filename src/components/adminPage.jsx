import React from 'react';

import {Link} from 'react-router-dom';
import {Button,ButtonGroup} from 'react-bootstrap';

class AdminPage extends React.Component {
    render() {
        return (
  
            <div className="d-flex flex-column">
                <h1 className='styledh1' style = {{textAlign:'center',margin:'5% 0'}}>Welcome to Admin Page</h1>
                <ButtonGroup size="lg">
                    <Button><Link style={linkStyle} to='/pending_apartments'>Show me pending requests</Link></Button>
                    <Button><Link style={linkStyle} to='/approved_apartments'>Show me all approved properties</Link></Button>
                    <Button><Link style={linkStyle} to='/removed_apartments'>Show me removed properties</Link></Button>
                </ButtonGroup>
                
                
                
            </div>
        )
    }
}
export default AdminPage;
const linkStyle={color:'white',textDecoration:'none'};