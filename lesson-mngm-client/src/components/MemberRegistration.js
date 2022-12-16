import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';

const MemberRegistration = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const locationNow = useLocation();
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
                        <label className="form-label">이름</label> 
                        <input type="text"className="form-control" />
                    </div>
                    <div className="row gx-3">
                        <div className="col-md-4">
                            <label style={{'float':'left'}} className="form-label">휴대폰 번호</label> 
                            <select className="form-select">
                                <option>010</option>
                                <option>011</option>
                                <option>012</option>
                            </select>		
                        </div>
                        <div className="col-md-4">
                            <label style={{'float':'left'}} className="form-label">　</label> 
                            <input type="text" id="phNum1" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <label style={{'float':'left'}} className="form-label">　</label> 
                            <input type="text" id="phNum2" className="form-control" />
                        </div>
                    </div>
                    <div>
                        <label className="form-label">회원번호</label> 
                        <input type="text"className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">직장정보</label> 
                        <input type="text"className="form-control" />
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
                        <label className="form-label">이용권 정보</label> 
                        <select className="form-select">
                            <option>전체</option>
                        </select>
                    </div>
                    <div className="row gx-4">
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">이용권 기간</label>
                                <div className="input-group input-group-inline datepicker">
                                    <span className="input-group-text pe-2"> 
                                        <i className="bi bi-calendar" />
                                    </span>
                                    <input type="text" className="form-control"placeholder="Select date" data-input />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">　</label>
                                <div className="input-group input-group-inline datepicker">
                                    <span className="input-group-text pe-2">
                                        <i className="bi bi-calendar"></i>
                                    </span> 
                                    <input type="text" className="form-control"placeholder="Select date" data-input />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="form-label">담당프로</label> 
                        <select className="form-select">
                            <option>전체</option>
                        </select>
                    </div>
                    <div>
                        <label className="form-label">메모사항</label>
                        <textarea className="form-control"rows="2" />
                    </div>
                </div>
                <div className="modal-footer py-2 bg-surface-secondary">
                    <button type="button" onClick={handleClose} className="btn btn-sm btn-neutral" data-bs-dismiss="offcanvas">취소</button>
                    <button type="button" className="btn btn-sm btn-primary">등록</button>
                </div>
            </Offcanvas>
        </>
    );
}

export default MemberRegistration;