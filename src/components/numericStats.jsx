import React from 'react';

class NumericStats extends React.Component {
    render(){
        return(
            <div className = {'container'}>
                <header style = {headerStyle}>What's happening in New York, NY</header>
                <ul id = "numeric-info" className={'d-flex justify-content-between row align-items-center'} style={{borderRadius:'4px',padding:'30px',textAlign:'center'}}>
                    <li className = {'col-6 col-md-auto'}>
                        <a className = {'text-decoration-none col-6 col-md-auto'} href = "/apartments">
                            <p className = {'paintitblack'} style={{fontSize:'28px'}}>9864</p>
                            <p style = {{color:'#757575',fontSize:'16px'}}>Homes for sale</p>
                        </a>
                    </li>
                    <li className = {'col-6 col-md-auto'}>
                        <a className = {'text-decoration-none'} href = "/apartments">
                            <p className = {'paintitblack'} style = {{fontSize:'28px'}}>883</p>
                            <p style = {{color:'#757575',fontSize:'16px'}}>Open houses</p>
                        </a>
                    </li>
                    <li className = {'col-6 col-md-auto'}>
                        <a className = {'text-decoration-none'} href="/apartments">
                            <p className = {'paintitblack'} style={{fontSize:'28px'}}>6960</p>
                            <p style = {{color:'#757575',fontSize:'16px'}}>Recently sold</p>
                        </a>
                    </li>
                    <li className = {'col-6 col-md-auto'}>
                        <a className = {'text-decoration-none'} href="/apartments">
                            <p className = {'paintitblack'} style={{fontSize:'28px'}}>18</p>
                            <p style = {{color:'#757575',fontSize:'16px'}}>Foreclosures</p>
                        </a>
                    </li>
                    <li className = {'col-12 col-md-auto'}>
                        <a className = {'text-decoration-none'} href="/apartments">
                            <p className = {'paintitblack'} style={{fontSize:'28px'}}>947</p>
                            <p style = {{color:'#757575',fontSize:'16px'}}>Price reduced</p>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default NumericStats;

const headerStyle = {margin:'20px 0',fontSize:'24px',textAlign:'left'};
