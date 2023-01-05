import {Link} from 'react-router-dom';
import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinMembership = () => {

    let navigate = useNavigate();

    const nameInput = useRef();
    
    const [ firStyle, setfirStyle ] = useState({display: 'block'})
    const [ secStyle, setsecStyle ] = useState({display: 'none'})
    const [ thStyle, setthStyle ] = useState({display: 'none'})
    const [ pwdStyle, setpwdStyle] = useState({display: 'none'})
    const [ idChange, setidChange ] = useState(0)
    const [ pwdChange, setpwdChange ] = useState(0)

    const [state, setState] = useState({
        userName: "",
        userPhoneNumber: "",
        loginId: "",
        loginPwd: "",
        loginPwdCheck: ""
    });

    const userValueState = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async() => {
        const response = await axios.post(
            '/usermngm/info', 
            {
                name: state.userName,
                phoneNumber: state.userPhoneNumber
            }
        )
        if(response.data === 1){
            setsecStyle({display: 'none'})
            setthStyle({display: 'block'})
        }else{
            alert("등록되지 않은 회원입니다.");
        }
    };

    const idvalidation = async() => {
    const response = await axios.get(
        '/usermngm/idCheck', 
        { params:{ 
            loginId: state.loginId}
        }
    )
    if(response.data === 1){
        alert("사용 가능한 아이디 입니다.");
        setidChange(1);
    }else{
        alert("중복된 아이디 입니다.");
    }
    };

    const idCheck = () => {
        setidChange(0);
    };

    const pwdCheck = () => {
        if(state.loginPwd !== state.loginPwdCheck){
            setpwdStyle({display: 'block'})
            setpwdChange(0);
        }else {
            setpwdStyle({display: 'none'})
            setpwdChange(1);
        }
    };

    const userRegister = async() => {
        if(idChange !== 1){
            alert("아이디 중복 확인을 진행 해주세요!");
        }else{
            if(pwdChange !== 1){
                alert("비밀번호가 일치하지 않습니다.");
            }else{
                if(state.loginPwd.length !== 0){
                    const response = await axios.post(
                        '/usermngm/register', 
                        {
                            name: state.userName,
                            phoneNumber: state.userPhoneNumber,
                            loginId: state.loginId,
                            loginPwd: state.loginPwd
                        }
                    )
                    console.log(response.status);
                        if(response.status === 200 ){
                            alert("가입성공");
                            navigate('/');
                        }else{
                            alert("가입실패");
                        }
                    
                }else{
                    alert("비밀번호를 입력해주세요.")
                }
                
            }
            
        }
        
    };
    


    return (
        <div>
        <div className="px-5 py-5 p-lg-0 h-screen bg-surface-secondary d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center">
            <div className="col-12 col-md-9 col-lg-6 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                <div className="row">
                <div className="col-lg-10 col-md-9 col-xl-7 mx-auto">
                    <div style={firStyle}>
                        <div className="mb-5">
                            <label className="form-label">제3자 동의서</label>
                            <textarea className="form-control"rows="2" />
                            <div className="row">
                                <div className='col-lg-3'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="check_example" id="check-remind-me" />
                                        <label className="form-check-label font-semibold text-muted" htmlFor="check-remind-me">
                                        동의합니다.
                                        </label>
                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="check_example" id="check-remind-me2" />
                                        <label className="form-check-label font-semibold text-muted" htmlFor="check-remind-me2">
                                        동의하지 않습니다.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="form-label">제3자 동의서</label>
                            <textarea className="form-control"rows="2" />
                            <div className="row">
                                <div className='col-lg-3'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="check_example" id="check-remind-me" />
                                        <label className="form-check-label font-semibold text-muted" htmlFor="check-remind-me">
                                        동의합니다.
                                        </label>
                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="check_example" id="check-remind-me2" />
                                        <label className="form-check-label font-semibold text-muted" htmlFor="check-remind-me2">
                                        동의하지 않습니다.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div><div className="mb-5">
                            <label className="form-label">제3자 동의서</label>
                            <textarea className="form-control"rows="2" />
                            <div className="row">
                                <div className='col-lg-3'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="check_example" id="check-remind-me" />
                                        <label className="form-check-label font-semibold text-muted" htmlFor="check-remind-me">
                                        동의합니다.
                                        </label>
                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="check_example" id="check-remind-me2" />
                                        <label className="form-check-label font-semibold text-muted" htmlFor="check-remind-me2">
                                        동의하지 않습니다.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <Link to="/" className="btn btn-light" style={{width: "48%"}}>
                                이전
                            </Link>
                            <button onClick={() => {
                                setfirStyle({display: 'none'})
                                setsecStyle({display: 'block'})
                                }} className="btn btn-primary" style={{width: "48%", marginLeft:"10px"}}>
                                다음
                            </button>
                        </div>
                    </div>



                    <div style={secStyle}>
                        <div className="mb-5" >
                            <label className="form-label" htmlFor="name">이름</label>
                            <input type="text" className="form-control" name="userName" placeholder="이름을 입력해주세요." 
                                onChange={userValueState} ref={nameInput} value={state.userName} />
                        </div>
                        <div className="mb-5">
                            <label className="form-label" htmlFor="name">핸드폰 번호</label>
                            <input type="text" className="form-control" name="userPhoneNumber" placeholder="핸드폰 번호를 입력해주세요." 
                                value={state.userPhoneNumber} onChange={userValueState} maxLength="13" />
                        </div>

                        <div className="mb-5">
                            <button  onClick={() => {
                                setfirStyle({display: 'block'})
                                setsecStyle({display: 'none'})
                                }} className="btn btn-light" style={{width: "48%"}}>
                                이전
                            </button>
                            <button onClick={handleSubmit} className="btn btn-primary" style={{width: "48%", marginLeft:"10px"}}>
                                인증하기
                            </button>
                        </div>
                    </div>





                    <div style={thStyle}>
                    <div className="row gx-4 mb-5">
                        <div className="col-xl-9 col-8">
                            <label className="form-label" htmlFor="name">아이디</label>
                            <input type="text" className="form-control" name="loginId" placeholder="아이디를 입력해주세요." 
                                onChange={userValueState} onKeyUp={idCheck} value={state.loginId} />
                        </div>
                        <div className="col-xl-3 col-4">
                        <button className="btn btn-primary" onClick={idvalidation} style={{marginTop: "32px"}}>중복 확인</button>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="form-label" htmlFor="password">비밀번호</label>
                        <input type="password" className="form-control" name="loginPwd" placeholder="패스워드를 입력해주세요." autoComplete="current-password" 
                            onChange={userValueState} onKeyUp={pwdCheck} value={state.loginPwd}/>
                    </div>
                    <div className="mb-5">
                        <label className="form-label" htmlFor="password">비밀번호 확인</label>
                        <input type="password" className="form-control" name="loginPwdCheck" placeholder="패스워드를 입력해주세요." autoComplete="current-password" 
                            onChange={userValueState} onKeyUp={pwdCheck} value={state.loginPwdCheck} />
                        <p className="text-danger" style={pwdStyle}>비밀번호가 일치하지 않습니다.</p>
                    </div>
                    <div className="mb-5">
                    <button  onClick={() => {
                                setsecStyle({display: 'block'})
                                setthStyle({display: 'none'})
                                }} className="btn btn-light" style={{width: "48%"}}>
                                이전
                            </button>
                        <button onClick={userRegister} className="btn btn-primary" style={{width: "48%", marginLeft:"10px"}}>
                            가입하기
                        </button>
                    </div>
                    </div>
















                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
  );
};

export default JoinMembership;