import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    const [hello, setHello] = useState('')
    const loginIdInput = useRef();
    const loginPwdInput = useRef();

    const [state, setState] = useState({
        loginId: "",
        loginPwd: ""
    });

    const loginValueState = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
      };

      const loginSubmit = () => {
        // if (state.loginId.length < 6) {
        //   loginIdInput.current.focus();
        //   return;
        // }
    
        // if (state.loginPwd.length < 8) {
        //   loginPwdInput.current.focus();
        //   return;
        // }


                axios.get('/api/hellos')
                .then(response => setHello(response.data))
                .catch(error => console.log(error))
                navigate('/membermngm');
      };

    return <div>
        <div className="px-5 py-5 p-lg-0 h-screen bg-surface-secondary d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-6 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                    <div className="row">
                        <div className="col-lg-10 col-md-9 col-xl-7 mx-auto">
                            {/* <form> */}
                                <div className="mb-5">
                                    <label className="form-label" for="email">ID</label>
                                    <input ref={loginIdInput} type="text" className="form-control" id="id" name="loginId" placeholder="ID" value={state.loginId} onChange={loginValueState}/>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <label className="form-label" for="password">Password</label>
                                        </div>
                                    </div>
                                    <input ref={loginPwdInput} type="password" className="form-control" id="password" name="loginPwd" placeholder="Password" value={state.loginPwd} onChange={loginValueState} autocomplete="current-password" />
                                </div>
                                <div className="mb-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="check_example" id="check-remind-me" />
                                        <label className="form-check-label" for="check-remind-me">
                                            ????????? ??????
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-primary w-full" onClick={loginSubmit} >?????????</button>
                                    <br/><br/>
                                    <div className="mb-2">
                                        <a href="/loginPage/idPwdFind" className="text-sm text-muted text-primary-hover">????????? ??????</a> | 
                                        <a href="/loginPage/idPwdFind" className="text-sm text-muted text-primary-hover"> ???????????? ??????</a> 
                                        <Link to="/joinMembership" style={{float: 'right'}} className="text-sm text-muted text-primary-hover">????????????</Link>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default Login;