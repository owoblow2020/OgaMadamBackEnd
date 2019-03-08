import React, { Component } from 'react';
import HeaderMenu from '../HeaderMenu';
import SideBar from '../SideBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="wrapper">

                <HeaderMenu />
                <SideBar />

                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Dashboard<small> Control Panel</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><Link to=""><i className="fa fa-dashboard" /> Level</Link></li>
                            <li className="active">Here</li>
                        </ol>
                    </section>

                    <section className="content container-fluid">
                        {/*-----------------------| Your Page Content Here |------------------------*/}

                        <div className="row">
                            <div className="col-lg-3 col-xs-6">
                                {/* small box */}
                                <div className="small-box bg-aqua">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>New Orders</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <Link to="" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-xs-6">
                                {/* small box */}
                                <div className="small-box bg-green">
                                    <div className="inner">
                                        <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>
                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <Link to="" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-xs-6">
                                {/* small box */}
                                <div className="small-box bg-yellow">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add" />
                                    </div>
                                    <Link to="" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-xs-6">
                                {/* small box */}
                                <div className="small-box bg-red">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph" />
                                    </div>
                                    <Link to="" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                            {/* ./col */}
                        </div>
                    </section>

                </div>
                <Footer />
            </div>

        );
    }
}

export default Dashboard;