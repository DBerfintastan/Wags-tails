import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import logo from "../pictures/home.jpg"
function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

  });

  return (
    <center>
      <div className='Login'>
        <Link to="/home">
          <img src={logo}></img>
        </Link>

        <h2>Login, Connect Wallet, Enjoy!</h2>
        <form onSubmit={formik.handleSubmit}>
          <b>E-Mail:</b> <br />
          <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email && formik.touched.email && formik.errors.email}
          <b>Password:</b><br />
          <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
          <label>{formik.errors.password && formik.touched.password && formik.errors.password}</label>
          <b>Confirm Password:</b><br />
          <input type="passwordConfirm" name="passwordConfirm" onChange={formik.handleChange} value={formik.values.passwordConfirm} />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && formik.errors.passwordConfirm}
          <button type="submit" disabled={formik.isSubmitting}> Submit </button>
        </form>
      </div>
    </center>
  );
}

export default Login;
