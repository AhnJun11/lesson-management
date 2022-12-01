import {Link} from 'react-router-dom';

const Table = () => {

    return (
        // <!-- Main -->
			<div className="container-fluid">
			<main className="py-6 bg-surface-secondary">
				{/* <!-- Offcanvas --> */}
				<div className="offcanvas offcanvas-end w-full w-lg-1/3"
					data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
					id="offcanvasCreate" aria-labelledby="offcanvasCreateLabel">
					<div
						className="offcanvas-header border-bottom py-5 bg-surface-secondary">
						<h5 className="offcanvas-title" id="offcanvasCreateLabel">회원등록</h5>
						<button type="button" className="btn-close text-reset text-xs"
							data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
							<label className="form-label">성별</label> 
							<div className="vstack gap-4">
								<div className="d-flex gap-3">
									<input className="form-check-input flex-shrink-0 text-lg"
										type="radio" name="projecy-privacy" checked />
									<div className="pt-1 form-checked-content">
										<h6 className="mb-1 lh-relaxed">남성</h6>
									</div>	
									<input className="form-check-input flex-shrink-0 text-lg"
										type="radio" name="projecy-privacy" />
									<div className="pt-1 form-checked-content">
										<h6 className="mb-1 lh-relaxed">여성</h6>
									</div>
									
								</div>
							</div>
						</div>
						<div className="row gx-4">
								<div className="col-md-7">
									<label className="form-label">이메일 주소</label> 
									<input type="text" className="form-control" />
							</div>
							<div className="col-md-1" style={{'margin-top':'42px'}}><span >@</span></div>
							<div className="col-md-4">
								<label className="form-label">　</label>
								<select className="form-select">
									<option>직접입력</option>
									<option>naver.com</option>
									<option>gmail.com</option>
									<option>hanmail.com</option>
								</select>
							</div>
						</div>
						<div>
							<label className="form-label">생년월일</label> 
							<input type="text"className="form-control" />
						</div>
						<div>
							<label className="form-label">주소</label> 
							<input type="text"className="form-control" />
						</div>
						<div>
							<label className="form-label">직장정보</label> 
							<input type="text"className="form-control" />
						</div>
						<div className="row gx-4">
							<div className="col-md-12">
								<label className="form-label">유입경로</label> 
								<select className="form-select">
									<option>전체</option>
								</select>
							</div>
						</div>
						<div>
							<label className="form-label">추천인</label> 
							<select className="form-select">
								<option>전체</option>
							</select>
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
										<span className="input-group-text pe-2"> <i
											className="bi bi-calendar"></i>
										</span> <input type="text" className="form-control"
											placeholder="Select date" data-input />
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div>
									<label className="form-label">　</label>
									<div className="input-group input-group-inline datepicker">
										<span className="input-group-text pe-2"> <i
											className="bi bi-calendar"></i>
										</span> <input type="text" className="form-control"
											placeholder="Select date" data-input />
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
							<textarea className="form-control"
								placeholder="Project description ..." rows="2"></textarea>
						</div>
					</div>
					<div className="modal-footer py-2 bg-surface-secondary">
						<button type="button" className="btn btn-sm btn-neutral"
							data-bs-dismiss="offcanvas">Close</button>
						<button type="button" className="btn btn-sm btn-primary">Save</button>
					</div>
				</div>
				{/* <!-- Modal --> */}
				<div className="modal fade" id="modalExport" tabindex="-1"
					aria-labelledby="modalExport" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content shadow-3">
							<div className="modal-header">
								<div
									className="icon icon-shape rounded-3 bg-soft-primary text-primary text-lg me-4">
									<i className="bi bi-globe"></i>
								</div>
								<div>
									<h5 className="mb-1">Share to web</h5>
									<small className="d-block text-xs text-muted">Publish and
										share link with anyone</small>
								</div>
								<div className="ms-auto">
									<div className="form-check form-switch me-n2">
										<input className="form-check-input" type="checkbox"
											id="flexSwitchCheckChecked" checked /> <label
											className="form-check-label" for="flexSwitchCheckChecked"></label>
									</div>
								</div>
							</div>
							<div className="modal-body">
								{/* <!-- Text --> */}
								<div className="d-flex align-items-center mb-5">
									<div>
										<p className="text-sm">
											Anyone with this link <span className="font-bold text-heading">can
												view</span>
										</p>
									</div>
									<div className="ms-auto">
										<Link to="#" className="text-sm font-semibold">Settings</Link>
									</div>
								</div>
								{/* <!-- Form group --> */}
								<div>
									<div className="input-group input-group-inline">
										<input type="email" className="form-control"
											placeholder="username"
											value="https://webpixels.io/your-amazing-link"/> <span
											className="input-group-text"> <i className="bi bi-clipboard"></i>
										</span>
									</div>
									<span className="mt-2 valid-feedback">Looks good!</span>
								</div>
							</div>
							<div className="modal-footer">
								<div className="me-auto">
									<Link to="#" className="text-sm font-semibold"><i
										className="bi bi-clipboard me-2"></i>Copy link</Link>
								</div>
								<button type="button" className="btn btn-sm btn-neutral"
									data-bs-dismiss="modal">Close</button>
								<button type="button" className="btn btn-sm btn-success">Share
									file</button>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Container --> */}
				<div className="container-fluid" >
					<div className="card" style={{'margin-left': '-20px'}}>
						<div className="card-header border-bottom">
							<h6 className="mb-0">
								Show <select className="form-select form-select-sm"
									style={{width: 'auto' , height: 'auto' , display: 'inline'}}>
									<option className="dropdown-item" data-bs-toggle="tab" value="10">10</option>
									<option className="dropdown-item" data-bs-toggle="tab" value="20">20</option>
									<option className="dropdown-item" data-bs-toggle="tab" value="30">30</option>
								</select> entries
								{/* <!-- Form --> */}
								<form style={{float:'right'}}className="form-inline ms-auto me-4 d-none d-md-flex">
									<div className="input-group input-group-sm input-group-inline">
										<span className="input-group-text pe-2"> <i
											className="bi bi-search"></i>
										</span> <input type="email" className="form-control" placeholder="Search"
											aria-label="Search"/>
									</div>
								</form>
							</h6>
						</div>
						<div className="table-responsive">
							<table className="table table-hover table-nowrap table-sm">
								<thead className="table-light">
									<tr>
										<th scope="col">No</th>
										<th scope="col">구분</th>
										<th scope="col">회원명(회원번호)</th>
										<th scope="col">성별</th>
										<th scope="col">레슨권정보</th>
										<th scope="col">최근 레슨일</th>
										<th scope="col">담당프로</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>입문</td>
										<td><Link to="/member/memberDetail">아무개(0001)</Link></td>
										<td>남성</td>
										<td>기간 :2022.01.24 ~ 2022.04.23<br/> 횟수 :30회 중 잔여 24회
											<div className="d-flex align-items-center justify-content-center">
												<span className="me-2 ">38%</span>
												<div className="progress" style={{width: '100px'}}>
													<div className="progress-bar bg-warning" role="progressbar"
														aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"
														style={{width: '38%'}}></div>
												</div>
											</div>
										</td>
										<td>2022-02-17</td>
										<td>가나다</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="card-footer border-0 py-5">
                			<span class="text-muted text-sm">Showing 10 items out of 250 results found</span>
              			</div>
					</div>
				</div>
			</main>
			</div>
    );

};

export default Table;