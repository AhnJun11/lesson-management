
const Login = () => {
    return <div>
        <div className="px-5 py-5 p-lg-0 h-screen bg-surface-secondary d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-6 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                    <div className="row">
                        <div className="col-lg-10 col-md-9 col-xl-7 mx-auto">
                            <form>
                                <div className="mb-5">
                                    <label className="form-label" for="email">ID</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your email address" />
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <label className="form-label" for="password">Password</label>
                                        </div>
                                    </div>
                                    <input type="password" className="form-control" id="password" placeholder="Password" autocomplete="current-password" />
                                </div>
                                <div className="mb-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="check_example" id="check-remind-me" />
                                        <label className="form-check-label" for="check-remind-me">
                                            아이디 저장
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-primary w-full">로그인</button>
                                    <br/><br/>
                                    <div className="mb-2">
                                        <a href="/loginPage/idPwdFind" className="text-sm text-muted text-primary-hover">아이디 찾기</a> | 
                                        <a href="/loginPage/idPwdFind" className="text-sm text-muted text-primary-hover"> 비밀번호 찾기</a> 
                                        <a href="/loginPage/joinMembershipAgreement" style={{float: 'right'}} className="text-sm text-muted text-primary-hover">회원가입</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default Login;