import React from "react";
import {reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required
} from "../../utilities/validation/validation";
import { fieldValue } from "../../common/FormControl/FormControl";
import { connect } from "react-redux";
import { login } from "../../redux/reduceAuth";
import { Redirect } from "react-router-dom";
import styles from "../../common/FormControl/FormControl.module.css";

const maxLength30 = maxLengthCreator(30);

const LoginForm = props => {
 
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {fieldValue([required, maxLength30], "email", "input", "Email")}
      </div>
      <div>
        {fieldValue([required, maxLength30],"password","input","Password","password")}
      </div>
      <div>
        {fieldValue(null,"rememberMe","input", null, "checkbox")} remember me
      </div>
      {props.error && <div className={styles.errorText}>{props.error}</div>}
      <div>
        <button>Sign in</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { login })(Login);
