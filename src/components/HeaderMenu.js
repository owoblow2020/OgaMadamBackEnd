import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/* Main Header */}
                <header className="main-header">
                    {/* Logo */}
                    <a href="index2.html" className="logo">
                        {/* mini logo for sidebar mini 50x50 pixels */}
                        <span className="logo-mini"><b>A</b>LT</span>
                        {/* logo for regular state and mobile devices */}
                        <span className="logo-lg"><b>Admin</b>LTE</span>
                    </a>
                    {/* Header Navbar */}
                    <nav className="navbar navbar-static-top" role="navigation">
                        {/* Sidebar toggle button*/}
                        <Link to="" className="sidebar-toggle" data-toggle="push-menu" role="button" >

                            <span className="sr-only">Toggle navigation</span>
                        </Link>
                        {/* Navbar Right Menu */}
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                {/* Messages: style can be found in dropdown.less*/}
                                <li className="dropdown messages-menu">
                                    {/* Menu toggle button */}
                                    <Link to="" className="dropdown-toggle" data-toggle="dropdown" >

                                        <i className="fa fa-envelope-o" />
                                        <span className="label label-success">4</span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="header">You have 4 messages</li>
                                        <li>
                                            {/* inner menu: contains the messages */}
                                            <ul className="menu">
                                                <li>{/* start message */}
                                                    <Link to="">
                                                        <div className="pull-left">
                                                            {/* User Image */}
                                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User pic" />
                                                        </div>
                                                        {/* Message title and timestamp */}
                                                        <h4>
                                                            Support Team
                                                            <small><i className="fa fa-clock-o" /> 5 mins</small>
                                                        </h4>
                                                        {/* The message */}
                                                        <p>Why not buy a new awesome theme?</p>
                                                    </Link>
                                                </li>
                                                {/* end message */}
                                            </ul>
                                            {/* /.menu */}
                                        </li>
                                        <li className="footer"><Link to="">See All Messages</Link></li>
                                    </ul>
                                </li>
                                {/* /.messages-menu */}


                                {/* User Account Menu */}
                                <li className="dropdown user user-menu">
                                    {/* Menu Toggle Button */}
                                    <Link to="" className="dropdown-toggle" data-toggle="dropdown">
                        
                                        {/* The user image in the navbar*/}
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User pic" />
                                        {/* hidden-xs hides the username on small devices so only the image appears. */}
                                        <span className="hidden-xs">Alexander Pierce</span>
                                        </Link>
                                    <ul className="dropdown-menu">
                                        {/* The user image in the menu */}
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User pic" />
                                            <p>
                                                Alexander Pierce - Web Developer
                                                <small>Member since Nov. 2012</small>
                                            </p>
                                        </li>
                                        {/* Menu Body */}
                                        <li className="user-body">

                                            {/* /.row */}
                                        </li>
                                        {/* Menu Footer*/}
                                        <li className="user-footer">
                                            <div className="pull-left">
                                            <Link to="" className="btn btn-default btn-flat">
                                              Profile</Link>
                                            </div>
                                            <div className="pull-right">
                                                <Link to="" className="btn btn-default btn-flat">Sign out</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderMenu;