import BodyHeader from './../components/BodyHeader';
import Table from './../components/Table';
import ApexCharts from 'react-apexcharts'
import ApexChart from '../components/ApexChart';

const Accountingmngm = () => {
    return (
        <div>
        <BodyHeader title={'회계관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
        {/* <!-- Main --> */}
      <main className="py-6 bg-surface-secondary">
        <div className="container-fluid vstack gap-6">
            <div className="row align-items-center">
              <div className="col-sm-12 col-12">
              <div style={{'margin-top':'20px', float:'left'}}>
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
			<div style={{width:'300px', float:'right', 'margin-left':'50px'}} className="input-group input-group-inline datepicker">
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
              <div id="chart-users" data-height="340" style={{'min-width': '780px'}}>
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
                      <div style={{'margin-top':'5px'}}>
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
                      <div style={{'margin-top':'5px'}}>
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
                      <div style={{'margin-top':'5px'}}>
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
                      <div style={{'margin-top':'5px'}}>
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
			{/* <!-- Items --> */}
			<div className="row g-6">
				<div className="card">
					<div className="card-header border-bottom">
					</div>
					<div className="table-responsive">
						<table className="table table-hover table-nowrap">
							<thead className="table-light">
								<tr>
									<th scope="col">판매일시</th>
									<th scope="col">회원명</th>
									<th scope="col">연락처</th>
									<th scope="col">판매번호</th>
									<th scope="col">판매상품</th>
									<th scope="col">판매가</th>
									<th scope="col">결제분류</th>
									<th scope="col">결제수단</th>
									<th scope="col">결제금액</th>
									<th scope="col">미수결제</th>
									<th scope="col">환불수단</th>
									<th scope="col">환불지급액</th>
									<th scope="col">판매담당자</th>
									<th scope="col">메모</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>2022-07-03 13:59:59</td>
									<td>홍길동</td>
									<td>010-1111-1111</td>
									<td>1</td>
									<td>3개월 레슨권</td>
									<td>20원</td>
									<td>일시불</td>
									<td>카드</td>
									<td>10</td>
									<td>0</td>
									<td>카드</td>
									<td>0</td>
									<td>이순신</td>
									<td>메모</td>
								</tr>
								<tr>
									<td>2022-07-03 13:59:59</td>
									<td>홍길동</td>
									<td>010-1111-1111</td>
									<td>1</td>
									<td>3개월 레슨권</td>
									<td>20원</td>
									<td>일시불</td>
									<td>카드</td>
									<td>10</td>
									<td>0</td>
									<td>카드</td>
									<td>0</td>
									<td>이순신</td>
									<td>메모</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
        </div>
      </main>
        </div>
    );
};

export default Accountingmngm;