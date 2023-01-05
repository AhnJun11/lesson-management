import BodyHeader from './../components/BodyHeader';
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import Tables from '../components/Table';

const Productmngm = () => {

    const columns = useMemo(
        () => [
            {
                accessor: "id",
                Header: "No"
            },
            {
                accessor: "lessonName",
                Header: "구분"
            },
            {
                accessor: "total",
                Header: "속성"
            },
            {
                accessor: "period",
                Header: "이용권명"
            },
            {
                accessor: "createAt",
                Header: "이용기간"
                
            },
            {
                accessor: "ㅂ",
                Header: "판매가"
            },
            {
                accessor: "ㅈ",
                Header: "이용횟수"
            },
            {
                accessor: "ㄷ",
                Header: "일일 이용제한"
            },
            {
                accessor: "ㄱ",
                Header: "주간 이용제한"
            },
            {
                accessor: "s",
                Header: "예약 취소권"
            },
            {
                accessor: "q",
                Header: "중지권"
            },
            {
                accessor: "w",
                Header: "최대 예약권"
            }
        ],
        []
        );
        const [data, setDatas] = useState([]);
        const datas = async() => {
                const res = await axios.get('/curriculummngm');  
                setDatas(res.data);            
        };
        useEffect(() => {
            datas();
        },[]);
        
    return (
        <div>
            <BodyHeader title={'상품관리'}/>
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid vstack gap-6">
                    <Tables columns={columns} data={data}/>
                </div>
            </main>
                    {/* <!-- 상품 모달 --> */}
                    {/* <div class="offcanvas offcanvas-end w-full w-lg-1/3"
                        data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
                        id="offcanvasCreate" aria-labelledby="offcanvasCreateLabel">
                        <div
                            class="offcanvas-header border-bottom py-5 bg-surface-secondary">
                            <h5 class="offcanvas-title" id="offcanvasCreateLabel">이용권 등록</h5>
                            <button type="button" class="btn-close text-reset text-xs"
                                data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body vstack gap-5">
                            <div class="col-md">
                                <button type="button" onclick="ticketSelect(this.id)" id="passTicket" class="btn btn-sm btn-primary">이용권 상품 등록</button>
                                <button type="button" onclick="ticketSelect(this.id)" id="lessonTicket" class="btn btn-sm btn-primary">레슨권 상품 등록</button>
                                <button type="button" onclick="ticketSelect(this.id)" id="packageTicket" class="btn btn-sm btn-primary">패키지 상품 등록</button>
                            </div>
                            <div>
                                <label class="form-label">분류</label> 
                                <div class="vstack gap-4">
                                    <div class="d-flex gap-3">
                                        <input class="form-check-input flex-shrink-0 text-lg" type="radio" name="projecy-privacy" checked />
                                        <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">개인레슨</h6>
                                        </div>	
                                        <input class="form-check-input flex-shrink-0 text-lg" type="radio" name="projecy-privacy" />
                                        <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">그룹수업</h6>
                                        </div>
                                        <input class="form-check-input flex-shrink-0 text-lg" type="radio" name="projecy-privacy" />
                                        <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">시설이용</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <label class="form-label" id="ticketName">이용권명</label> 
                                <input type="text"class="form-control" />
                            </div>
                            <div class="col-md">
                                <label class="form-label">이용시간</label> 
                                <input type="text"class="form-control" />
                            </div>
                            <div class="col-md">
                                <label class="form-label">이용횟수</label> 
                                <input type="text"class="form-control" />
                            </div>
                            <div class="col-md">
                                <label class="form-label">판매가</label> 
                                <input type="text"class="form-control" />
                            </div>
                            <div class="row gx-3">
                                <div class="col-md-5">
                                    <label style="float:left;" class="form-label">이용기간</label> 
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-1" style="margin-top:37px;">
                                    <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">개월</h6>
                                    </div>	
                                </div>
                                <div class="col-md-5">
                                    <label style="float:left;" class="form-label">　</label> 
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-1" style="margin-top:37px;">
                                    <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">일</h6>
                                    </div>	
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col-md-5">
                                    <label style="float:left;" class="form-label">일일 이용제한</label> 
                                    <input type="text" class="form-control" placeholder="무제한인 경우 0회 입력" />
                                </div>
                                <div class="col-md-1" style="margin-top:37px;">
                                    <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">회</h6>
                                    </div>	
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col-md-5">
                                    <label style="float:left;" class="form-label">주간 이용제한</label> 
                                    <input type="text" class="form-control" placeholder="무제한인 경우 0회 입력" />
                                </div>
                                <div class="col-md-1" style="margin-top:37px;">
                                    <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">회</h6>
                                    </div>	
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col-md-5">
                                    <label style="float:left;" class="form-label">취소권</label> 
                                    <input type="text" class="form-control" placeholder="무제한인 경우 0회 입력" />
                                </div>
                                <div class="col-md-1" style="margin-top:37px;">
                                    <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">회</h6>
                                    </div>	
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col-md-5">
                                    <label style="float:left;" class="form-label">중지권</label> 
                                    <input type="text" class="form-control" placeholder="무제한인 경우 0회 입력" />
                                </div>
                                <div class="col-md-1" style="margin-top:37px;">
                                    <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">회</h6>
                                    </div>	
                                </div>
                                <div class="col-md-5">
                                    <label style="float:left;" class="form-label">　</label> 
                                    <input type="text" class="form-control" placeholder="무제한인 경우 0일 입력" />
                                </div>
                                <div class="col-md-1" style="margin-top:37px;">
                                    <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">일</h6>
                                    </div>	
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col-md-5">
                                    <label style="float:left;" class="form-label">최대 예약권</label> 
                                    <input type="text" class="form-control" placeholder="무제한인 경우 0회 입력" />
                                </div>
                                <div class="col-md-1" style="margin-top:37px;">
                                    <div class="pt-1 form-checked-content">
                                            <h6 class="mb-1 lh-relaxed">회</h6>
                                    </div>	
                                </div>
                            </div>
                            <div>
                                <label class="form-label" id="ticketDescription">이용권 설명</label>
                                <textarea class="form-control"
                                    placeholder="Project description ..." rows="2"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer py-2 bg-surface-secondary">
                            <button type="button" class="btn btn-sm btn-neutral"
                                data-bs-dismiss="offcanvas">취소</button>
                            <button type="button" class="btn btn-sm btn-primary">등록하기</button>
                        </div>
                    </div> */}
        </div>
    );
};

export default Productmngm;