import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Dropdown from 'react-bootstrap/Dropdown'; 
import  './App.css'
import App1 from './App1';
  
export default function App() { 
  return ( 
    <div style={{ display: 'block',  
                  width: 700,  
                  padding: 30 }}>
                    <App1 />
        
      <div className='dDown'>
      <Dropdown> 
        <Dropdown.Toggle variant="success"> 
          Open Menu 
        </Dropdown.Toggle> 
        <Dropdown.Menu> 
          <Dropdown.Item href="https://notionpress.com/read/connections-unleashed"> 
            Connection Unleashed
          </Dropdown.Item> 
          <Dropdown.Item href="https://notionpress.com/read/broken-voice"> 
            Broken Voice 
          </Dropdown.Item> 
          <Dropdown.Item href="https://notionpress.com/read/started-living"> 
            Started living
          </Dropdown.Item> 
          <Dropdown.Item href="https://notionpress.com/read/self-made"> 
            Self Made
          </Dropdown.Item>
          <Dropdown.Item href="https://notionpress.com/read/last-hope">
            Last Hope 
          </Dropdown.Item>
        </Dropdown.Menu> 
      </Dropdown> 
      </div>
    </div> 
  ); 
}