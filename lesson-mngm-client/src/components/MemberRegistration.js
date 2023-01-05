import { useState, useRef } from 'react';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';

const MemberRegistration = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const locationNow = useLocation();

    const nameInput = useRef();

    const [state, setState] = useState({
        userName: "",
        userGender: 1,
        userPhoneNumber: "",
        userNumber: 0,
        memJob: ""
    });

    const userValueState = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async() => {
        if (state.userName.length < 2 && state.userName.length >= 1) {
            nameInput.current.focus();
            alert("이름은 두글자 이상입니다!");
          return;
        } else if(state.userName.length === 0) {
            nameInput.current.focus();
            return;
        }
        
        await axios.post(
            '/usermngm/insert', 
            {
                name: state.userName,
                gender: state.userGender,
                phoneNumber: state.userPhoneNumber,
                userNumber: state.userNumber,
                positionId: 1,
                shopId: 1,
                job: state.memJob
            }
        );
        alert("저장 성공!");
      };

    if (locationNow.pathname !== '/membermngm') return null;

    return (
        <>
            <div className="col-sm-auto col-12 mt-4 mt-sm-0">
                <div className="hstack gap-2 justify-content-sm-end">
                    <button onClick={handleShow} className="btn btn-sm btn-primary">
                        <span className="pe-2">
                            <i className="bi bi-plus-square-dotted"></i>
                        </span>
                        <span>등록</span>
                    </button>
                    <button href="#modalExport" className="btn btn-sm btn-neutral border-base" data-bs-toggle="modal">
                        <span className="pe-2">
                        <i className="bi bi-people-fill"></i>
                        </span>
                        <span>삭제</span>
                    </button>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end' className="offcanvas-end w-full w-lg-1/3">
                <div className="offcanvas-header border-bottom py-5 bg-surface-secondary">
                    <h5 className="offcanvas-title">회원등록</h5>
                    <button onClick={handleClose} className="btn-close text-reset text-xs"></button>
                </div>
                <div className="offcanvas-body vstack gap-5">
                    <div className="col-md">
                        <label className="form-label">* 이름</label> 
                        <input type="text"className="form-control" name="userName" placeholder="이름을 입력해주세요." 
                            onChange={userValueState} ref={nameInput} value={state.userName}/>
                    </div>
                    <div>
                        <label className="form-label">* 성별</label> 
                        <div className="vstack gap-4">
                            <div className="d-flex gap-3">
                                <input className="form-check-input flex-shrink-0 text-lg"type="radio" name="userGender" value={1} 
                                    onClick={userValueState} defaultChecked />
                                <div className="pt-1 form-checked-content">
                                    <h6 className="mb-1 lh-relaxed">남성</h6>
                                </div>	
                                <input className="form-check-input flex-shrink-0 text-lg"type="radio" name="userGender" value={2} 
                                    onClick={userValueState} />
                                <div className="pt-1 form-checked-content">
                                    <h6 className="mb-1 lh-relaxed">여성</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="form-label" htmlFor="name">* 핸드폰 번호</label>
                        <input type="text" className="form-control" name="userPhoneNumber" placeholder="핸드폰 번호를 입력해주세요."
                            ref={nameInput} value={state.userPhoneNumber} onChange={userValueState} maxLength="13"/>
                    </div>
                    <div>
                        <label className="form-label">회원번호</label> 
                        <input type="text"className="form-control" name="userNumber" value={state.userNumber = state.userPhoneNumber.substring(9)} onChange={userValueState} readOnly/>
                    </div>
                    <div>
                        <label className="form-label">직장정보</label> 
                        <input type="text"className="form-control" name="memJob"
                            onChange={userValueState} value={state.memJob} />
                    </div>
                    <div>
                        <label className="form-label">유입경로</label> 
                        <input type="text"className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">추천인</label> 
                        <input type="text"className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">메모사항</label>
                        <textarea className="form-control"rows="2" />
                    </div>
                    <div>
                        <label className="form-label text-danger">*은 필수 입력 사항입니다.</label>
                    </div>
                </div>
                <div className="modal-footer py-2 bg-surface-secondary">
                    <button type="button" onClick={handleClose} className="btn btn-sm btn-neutral" data-bs-dismiss="offcanvas">취소</button>
                    <button type="button" onClick={handleSubmit} className="btn btn-sm btn-primary">등록</button>
                </div>
            </Offcanvas>
        </>
    );
}

export default MemberRegistration;