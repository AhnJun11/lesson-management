import axios from 'axios';
import { useState, useRef } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';

const EmployeeRegistration = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const locationNow = useLocation();
    

    const nameInput = useRef();

    const [state, setState] = useState({
        EmplName: "",
        EmplGender: 1,
        EmplPhoneNumber: "",
        EmplNumber: 0,
        EmplPosition: 0
    });

    const EmployValueState = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async() => {
        if (state.EmplName.length < 2) {
            nameInput.current.focus();
            alert("이름을 입력해주세요!");
          return;
        }
        
        await axios.post(
            '/personnelmngm/insert', 
            {userName:state.EmplName ,
             gender:state.EmplGender ,
            phoneNumber:state.EmplNumber                                                   }
        );
        alert("저장 성공!");
      };

    if (locationNow.pathname !== '/personnelmngm') return null;
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
                <h5 className="offcanvas-title">직원등록</h5>
                <button onClick={handleClose} className="btn-close text-reset text-xs"></button>
            </div>
            <div className="offcanvas-body vstack gap-5">
                <div className="col-md-12">
                    <label className="form-label">이름</label> 
                    <input type="text"className="form-control" name="EmplName" onChange={EmployValueState} ref={nameInput} value={state.EmplName} />
                </div>
                <div>
                    <label className="form-label">성별</label> 
                    <div className="vstack gap-4">
                        <div className="d-flex gap-3">
                            <input className="form-check-input flex-shrink-0 text-lg"type="radio" name="projecy-privacy" value={state.EmplGender} defaultChecked />
                            <div className="pt-1 form-checked-content">
                                <h6 className="mb-1 lh-relaxed">남성</h6>
                            </div>	
                            <input className="form-check-input flex-shrink-0 text-lg"type="radio" name="projecy-privacy" value={state.EmplGender}/>
                            <div className="pt-1 form-checked-content">
                                <h6 className="mb-1 lh-relaxed">여성</h6>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row gx-3">
                    <div className="col-md-4">
                        <label style={{'float':'left'}} className="form-label">휴대폰 번호</label> 
                        <select className="form-select">
                            <option value="010-">010</option>
                            <option value="011-">011</option>
                            <option value="012-">012</option>
                        </select>		
                    </div>
                    <div className="col-md-4">
                        <label style={{'float':'left'}} className="form-label">　</label> 
                        <input type="number" name="phNum1" maxLength={4} className="form-control" onChange={EmployValueState} 
                            onInput={(e) => {
                                if (e.target.value.length > e.target.maxLength)
                                    e.target.value = e.target.value.slice(0, e.target.maxLength);}}
                        />
                    </div>
                    <div className="col-md-4">
                        <label style={{'float':'left'}} className="form-label">　</label> 
                        <input type="number" name="phNum2" maxLength={4} className="form-control" onChange={EmployValueState}
                            onInput={(e) => {
                                if (e.target.value.length > e.target.maxLength)
                                    e.target.value = e.target.value.slice(0, e.target.maxLength);}}
                        />
                    </div>
                </div>
                <div className="row gx-4">
                    <div className="col-md-12">
                        <label className="form-label">직급</label> 
                        <select className="form-select">
                            <option value={3}>프로</option>
                            <option value={2}>매니저</option>
                            <option value={1}>점장</option>
                        </select>
                    </div>
				</div>
                <div className="row gx-4">
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">입사</label>
                                <div className="input-group input-group-inline datepicker">
                                    <span className="input-group-text pe-2"> 
                                        <i className="bi bi-calendar" />
                                    </span>
                                    <input type="date" className="form-control flatpickr"placeholder="Select date" data-input />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row gx-4">
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">퇴사</label>
                                <div className="input-group input-group-inline datepicker">
                                    <span className="input-group-text pe-2"> 
                                        <i className="bi bi-calendar" />
                                    </span>
                                    <input type="date" className="form-control flatpickr"placeholder="Select date" data-input />
                                </div>
                            </div>
                        </div>
                </div>
                {/*<div>
                    <label className="form-label">재직구분</label> 
                    <div className="vstack gap-4">
                        <div className="d-flex gap-3">
                            <input className="form-check-input flex-shrink-0 text-lg"type="radio" name="projecy-privacy-work" defaultChecked />
                            <div className="pt-1 form-checked-content">
                                <h6 className="mb-1 lh-relaxed">재직</h6>
                            </div>	
                             <input className="form-check-input flex-shrink-0 text-lg" type="radio" name="projecy-privacy-work" />
                            <div className="pt-1 form-checked-content">
                                <h6 className="mb-1 lh-relaxed">퇴사</h6>
                            </div> 
                        </div>
                    </div>
                </div>*/}
            </div>
            <div className="modal-footer py-2 bg-surface-secondary">
                <button type="button" onClick={handleClose} className="btn btn-sm btn-neutral" data-bs-dismiss="offcanvas">취소</button>
                <button type="button" onClick={handleSubmit} className="btn btn-sm btn-primary">등록</button>
            </div>
        </Offcanvas>
    </>);
};

export default EmployeeRegistration;