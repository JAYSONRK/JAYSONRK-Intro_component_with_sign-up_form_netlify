import React from "react";
import { useFormik } from 'formik';
import error from "./icon-error.svg";

const validate = values => {
    const errors = {};
    if (!values.fname) {
      errors.fname = 'First Name cannot be empty';
 
    } 
    if (!values.lname) {
    errors.lname = 'Last Name cannot be empty';
    }
    if (!values.email) {
      errors.email = 'Last Name cannot be empty';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Looks like this is not an email';
    }
    if (!values.password) {
        errors.password = 'Password cannot be empty';
        }
    return errors;
 
  };

const Info = () => {
        const formik = useFormik({
          initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
          },
          validate,
          onSubmit: values => {
            alert("sub");
          },
        });
    
    return (
        <>
            <div className="info">
                <div className='plan'>
                    <p><span>Try it free 7 days</span>&nbsp;then $20/mo. thereafter</p>
                </div>
                <div className="form">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="inputvalue">
                          {formik.errors.fname && <span><img src={error} alt="error/"/></span>}
                          <input type="text" placeholder="First Name" id="fname" name="fname" value={formik.values.fname} onChange={formik.handleChange}/>
                          {formik.errors.fname ? <div className="red">{formik.errors.fname}</div> : null}
                        </div>
                        <div className="inputvalue">
                          {formik.errors.lname && <span><img src={error} alt="error/"/></span>}
                          <input type="text" placeholder="Last Name" id="lname" name="lname" value={formik.values.lname} onChange={formik.handleChange}/>
                          {formik.errors.lname ? <div className="red">{formik.errors.lname}</div> : null}
                        </div>
                        <div className="inputvalue">
                          {formik.errors.email && <span><img src={error} alt="error/"/></span>}
                          <input type="email" className={`${formik.errors.email && 'danger'}`} placeholder="Email address" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                          {formik.errors.email ? <div className="red">{formik.errors.email}</div> : null}
                        </div>
                        <div className="inputvalue">
                          {formik.errors.password && <span><img src={error} alt="error/"/></span>}
                          <input type="password" placeholder="Password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
                          {formik.errors.password ? <div className="red">{formik.errors.password}</div> : null}
                        </div>
                        <button type="submit">Claim your free trial </button>
                    </form>
                    <p> By clicking the button, you are agreeing to our <a href="https://www.google.com/">Terms and Services</a></p>
                </div>
            </div>
        </>
    )
}

export default Info;

