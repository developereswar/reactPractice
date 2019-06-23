import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
class Sidebar extends Component {


  render() {
    return (
      <div className="sidebar">
        <Nav vertical>
          <NavItem>
            <NavLink href="/">flexGrid</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/list">Event List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/productionevent/create">New Event</NavLink>
          </NavItem>
     <NavItem>
            <NavLink href="/expenses">Expenses</NavLink>
          </NavItem>



        </Nav>

        {/*
            <NavItem>
            <NavLink href="/ospatching">App Infra Details </NavLink>
           </NavItem>
           <NavItem>
            <NavLink href="/productionevent/create">New Event</NavLink>
          </NavItem>
            
             <li className="hiddenmenu">
               <Link to="/viewappentries"> App Infra Details </Link>
             </li> 
            <li className="hiddenmenu">
              <Link to="/ospatching"> OS Patching </Link>
            </li> 
            <li className="hiddenmenu">
              <Link to="/viewcertentries"> View Certificates </Link>
            </li> 
         */}

      </div>
    )
  }
}

export default Sidebar;