import BodyHeader from './../components/BodyHeader';
import ApexChart from '../components/ApexChart';
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import Tables from '../components/Table';
const Accountingmngm = () => {

  const columns = useMemo(
    () => [
        {
            accessor: "id",
            Header: "No"
        },
        {
            accessor: "lessonName",
            Header: "판매일시"
        },
        {
            accessor: "total",
            Header: "회원명"
        },
        {
            accessor: "period",
            Header: "연락처"
        },
        {
            accessor: "createAt",
            Header: "판매번호"
            
        },
        {
            accessor: "ㅂ",
            Header: "판매상품"
        },
        {
            accessor: "ㅈ",
            Header: "판매가"
        },
        {
            accessor: "ㄷ",
            Header: "결제분류"
        },
        {
            accessor: "ㄱ",
            Header: "결제수단"
        },
        {
            accessor: "s",
            Header: "미수결제"
        },
        {
            accessor: "q",
            Header: "환불수단"
        },
        {
            accessor: "w",
            Header: "환불지급액"
        },
        {
            accessor: "e",
            Header: "판매담당자"
        },
        {
            accessor: "r",
            Header: "메모"
        },
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
        <>
        <BodyHeader title={'회계관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
        <div className="container-fluid vstack gap-6">
            <div className="row align-items-center">
              <div className="col-sm-12 col-12">
              <div style={{marginTop:'20px', float:'left'}}>
            <select className="form-select form-select-sm" style={{width: 'auto', height: 'auto', display: 'inline'}}>
				<option className="dropdown-item" data-bs-toggle="tab" value="10">전체</option>
				<option className="dropdown-item" data-bs-toggle="tab" value="20">이용권별</option>
				<option className="dropdown-item" data-bs-toggle="tab" value="30">담당프로별</option>
			</select>
			<select className="form-select form-select-sm" style={{width: 'auto', height: 'auto', display: 'inline'}}>
				<option className="dropdown-item" data-bs-toggle="tab" value="10">일일 매출</option>
				<option className="dropdown-item" data-bs-toggle="tab" value="20">주간 매출</option>
				<option className="dropdown-item" data-bs-toggle="tab" value="22">월간 매출</option>
				<option className="dropdown-item" data-bs-toggle="tab" value="23">연간 매출</option>
				<option className="dropdown-item" data-bs-toggle="tab" value="20">기간 설정</option>
			</select>
			<div style={{width:'300px', float:'right', marginLeft:'50px'}} className="input-group input-group-inline datepicker">
            	<span className="input-group-text pe-2">
                	<i className="bi bi-calendar"></i>
                </span>
                <input type="text" className="form-control" placeholder="Select date" data-input />
            </div>
			</div>
			</div>
            </div>
          {/* <!-- Filters --> */}
            <div className="d-flex gap-3 order-1 order-md-2">
            </div>
          {/* <!-- Chart --> */}
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <h5 className="mb-0">Work Performance</h5>
            </div>
            <div className="px-4 scrollable-x">
              <div id="chart-users" data-height="340" style={{minWidth: '780px'}}>
                <ApexChart/>
              </div>
            </div>
          </div>
          {/* <!-- Card stats --> */}
          <div className="row g-6">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>판매금액</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="h3 d-block mb-0">100,000,000원</span>
                        </div>
                      </div>
                      <div style={{marginTop:'5px'}}>
	                      <span className="badge badge-xs badge-pill bg-soft-success text-success">
	                            <i className="bi bi-arrow-up"></i>
	                            20%
	                      </span>
	                      <span className=" text-sm text-muted">지난달 대비</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>결제금액</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="h3 d-block mb-0">100,000,000원</span>
                        </div>
                      </div>
                      <div style={{marginTop:'5px'}}>
	                      <span className="badge badge-xs badge-pill bg-soft-success text-success">
	                            <i className="bi bi-arrow-up"></i>
	                            20%
	                      </span>
	                      <span className=" text-sm text-muted">지난달 대비</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>평균 결제금액</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="h3 d-block mb-0">0원</span>
                        </div>
                      </div>
                      <div style={{marginTop:'5px'}}>
	                      <span className="badge badge-xs badge-pill bg-soft-success text-success">
	                            <i className="bi bi-arrow-up"></i>
	                            43%
	                      </span>
	                      <span className=" text-sm text-muted">지난달 대비</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>환불금액</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="h3 d-block mb-0">0원</span>
                        </div>
                      </div>
                      <div style={{marginTop:'5px'}}>
	                      <span className="badge badge-xs badge-pill bg-soft-success text-success">
	                            <i className="bi bi-arrow-up"></i>
	                            17%
	                      </span>
	                      <span className=" text-sm text-muted">지난달 대비</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tables columns={columns} data={data}/>
        </div>

        </>
    );
};

export default Accountingmngm;