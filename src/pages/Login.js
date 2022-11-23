
const Login = () => {
    return <div>
        <div class="px-5 py-5 p-lg-0 h-screen bg-surface-secondary d-flex flex-column justify-content-center">
            <div class="d-flex justify-content-center">
                <div class="col-12 col-md-9 col-lg-6 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                    <div class="row">
                        <div class="col-lg-10 col-md-9 col-xl-7 mx-auto">
                            <form>
                                <div class="mb-5">
                                    <label class="form-label" for="email">ID</label>
                                    <input type="email" class="form-control" id="email" placeholder="Your email address" />
                                </div>
                                <div class="mb-5">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <label class="form-label" for="password">Password</label>
                                        </div>
                                    </div>
                                    <input type="password" class="form-control" id="password" placeholder="Password" autocomplete="current-password" />
                                </div>
                                <div class="mb-5">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="check_example" id="check-remind-me" />
                                        <label class="form-check-label" for="check-remind-me">
                                            아이디 저장
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button class="btn btn-primary w-full">로그인</button>
                                    <br/><br/>
                                    <div class="mb-2">
                                        <a href="/loginPage/idPwdFind" class="text-sm text-muted text-primary-hover">아이디 찾기</a> | 
                                        <a href="/loginPage/idPwdFind" class="text-sm text-muted text-primary-hover">비밀번호 찾기</a> 
                                        <a href="/loginPage/joinMembershipAgreement" class="text-sm text-muted text-primary-hover">회원가입</a>
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