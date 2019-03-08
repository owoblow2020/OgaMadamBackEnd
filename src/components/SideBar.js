import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/* Left side column. contains the logo and sidebar */}
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User pics" />
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                {/* Status */}
                                <Link to=""><i className="fa fa-circle text-success" /> Online</Link>
                            </div>
                        </div>
                        {/* search form (Optional) */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                        {/* /.search form */}
                        {/* Sidebar Menu */}
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">HEADER</li>
                            {/* Optionally, you can add icons to the links */}
                            <li className="active"><Link to=""><i class="fa fa-dashboard"></i> <span>Dashboard</span></Link></li>
                            <li className="treeview">
                                <Link to=""><i className="fa fa-universal-access" /> <span>ACL</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="">Link in level 2</Link></li>
                                    <li><Link to="">Link in level 2</Link></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <Link to=""><i className="fa fa-money" /> <span>Transactions</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="">Link in level 2</Link></li>
                                    <li><Link to="">Link in level 2</Link></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <Link to=""><i className="fa fa-building-o" /> <span>Employee's</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="">Link in level 2</Link></li>
                                    <li><Link to="">Link in level 2</Link></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <Link to=""><i className="fa fa-briefcase" /> <span>Employers</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="">Link in level 2</Link></li>
                                    <li><Link to="">Link in level 2</Link></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <Link to=""><i className="fa fa-envelope" /> <span>Notification</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="">Link in level 2</Link></li>
                                    <li><Link to="">Link in level 2</Link></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <Link to=""><i className="fa fa-user" /> <span>Profile Management</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="">Link in level 2</Link></li>
                                    <li><Link to="">Link in level 2</Link></li>
                                </ul>
                            </li>
                            <li><Link to=""><i className="fa fa-sign-out" /> <span>Logout</span></Link></li>
                        </ul>
                        {/* /.sidebar-menu */}
                    </section>
                    {/* /.sidebar */}
                </aside>
            </div>
        );
    }
}

export default SideBar;