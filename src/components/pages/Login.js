import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../../actions/Index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btnSubmit: 'Sign In',
      status: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    document.title = "Login | Oga Madam";
  }

  onSubmit(e) {
    e.preventDefault();
    const { password, email } = this.state;
    if (password === '' || email === '') {
      console.log("cant submited");
    }
    this.btn.setAttribute("disabled", "disabled");
    this.setState({ btnSubmit: "Waiting....." })

    this.props.onLogin({ email, password });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillUpdate(prevProps, prevState) {
    const newProps = this.props
    if (prevProps.loginData !== newProps.loginData) {

      if (this.props.loginData.UserType === 'Admin') {
        this.props.history.push('/dashboard');
      }

    }

  }

  render() {

    return (

      <div className="login-box" >
        <div className="login-logo">
          <a href="../../index2.html" style={{ color: "#FFF" }}><b>Admin Page</b></a>
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={this.onSubmit}>
            <div className="form-group has-feedback">
              <input type="email" name="email" onChange={this.onChange} className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input type="password" onChange={this.onChange} name="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-8">
              </div>
              {/* /.col */}
              <div className="col-xs-4">
                <button ref={btn => { this.btn = btn }} type="submit" name="submit" className="btn btn-primary btn-block btn-flat">{this.state.btnSubmit}</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          {/* /.social-auth-links */}
          <Link to="">I forgot my password</Link><br />
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginData: state.LoginReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (loginParam) => {
      dispatch(loginAction(loginParam));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));