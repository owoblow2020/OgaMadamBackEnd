import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>

                <footer className="main-footer">

                    <div className="pull-right hidden-xs">
                        Anything you want
                     </div>

                    <strong>Copyright © 2019 <Link to="">Oga Madam</Link>.</strong> All rights reserved.
                </footer>


            </div>
        );
    }
}

export default Footer;