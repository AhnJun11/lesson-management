import BodyHeader from './../components/BodyHeader';
import {Link} from 'react-router-dom';

const Personnelmngm = () => {
    return (
        <div>
            <BodyHeader title={'인사관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
            <main className="py-6 bg-surface-secondary">
                {/* <!-- Offcanvas --> */}
				<div className="offcanvas offcanvas-end w-full w-lg-1/3"
					data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
					id="offcanvasCreate" aria-labelledby="offcanvasCreateLabel">
					<div
						className="offcanvas-header border-bottom py-5 bg-surface-secondary">
						<h5 className="offcanvas-title" id="offcanvasCreateLabel">직원등록</h5>
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
										<label style={{float:'left'}} className="form-label">휴대폰 번호</label> 
										<select className="form-select">
											<option>010</option>
											<option>011</option>
											<option>012</option>
										</select>		
							</div>
							<div className="col-md-4">
								<label style={{float:'left'}} className="form-label">　</label> 
								<input type="text" id="phNum1" className="form-control" />
							</div>
							<div className="col-md-4">
								<label style={{float:'left'}} className="form-label">　</label> 
								<input type="text" id="phNum2" className="form-control" />
							</div>
						</div>
						<div>
							<label className="form-label">성별</label> 
							<div className="vstack gap-4">
								<div className="d-flex gap-3">
									<input className="form-check-input flex-shrink-0 text-lg"type="radio" name="projecy-privacy" checked />
									<div className="pt-1 form-checked-content">
										<h6 className="mb-1 lh-relaxed">남성</h6>
									</div>	
									<input className="form-check-input flex-shrink-0 text-lg"type="radio" name="projecy-privacy" />
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
							<label className="form-label">소개</label>
							<textarea className="form-control"
								placeholder="Project description ..." rows="2"></textarea>
						</div>
						<div>
							<label className="form-label">인사정보</label> 
							<input type="text"className="form-control" />
						</div>
						<div className="row gx-4">
							<div className="col-md-12">
								<label className="form-label">직급</label> 
								<select className="form-select">
									<option>전체</option>
								</select>
							</div>
						</div>
						<div>
							<label className="form-label">권한</label> 
							<select className="form-select">
								<option>전체</option>
							</select>
						</div>
						<div>
							<label className="form-label">재직구분</label> 
							<div className="vstack gap-4">
								<div className="d-flex gap-3">
									<input className="form-check-input flex-shrink-0 text-lg"type="radio" name="projecy-privacy-work" checked />
									<div className="pt-1 form-checked-content">
										<h6 className="mb-1 lh-relaxed">재직중</h6>
									</div>	
									<input className="form-check-input flex-shrink-0 text-lg" type="radio" name="projecy-privacy-work" />
									<div className="pt-1 form-checked-content">
										<h6 className="mb-1 lh-relaxed">퇴사</h6>
									</div>
									
								</div>
							</div>
						</div>
						<div className="row gx-4">
							<div className="col-md-6">
								<div>
									<label className="form-label">입사일</label>
									<div className="input-group input-group-inline datepicker">
										<span className="input-group-text pe-2"> <i
											className="bi bi-calendar"></i>
										</span> <input type="text" className="form-control" placeholder="Select date" data-input />
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div>
									<label className="form-label">퇴사일</label>
									<div className="input-group input-group-inline datepicker">
										<span className="input-group-text pe-2"> <i
											className="bi bi-calendar"></i>
										</span> <input type="text" className="form-control" placeholder="Select date" data-input />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer py-2 bg-surface-secondary">
						<button type="button" className="btn btn-sm btn-neutral"
							data-bs-dismiss="offcanvas">취소</button>
						<button type="button" className="btn btn-sm btn-primary">등록하기</button>
					</div>
				</div>
                {/* <!-- Add users modal --> */}
                <div className="modal fade" id="modalAddUsers" tabindex="-1" aria-labelledby="modalAddUsers" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content shadow-3">
                            <div className="modal-header justify-content-start">
                                <div className="icon icon-shape rounded-3 bg-soft-primary text-primary text-lg me-4">
                                <i className="bi bi-people"></i>
                                </div>
                                <div>
                                <h5 className="mb-1">Add members</h5>
                                <small className="d-block text-xs text-muted">Publish and share link with anyone</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container --> */}
                <div className="container-fluid">
                    <div className="vstack gap-6">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="d-flex align-items-center">
                                    <h5 className="me-auto">Members</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row g-4">
                                    <div className="col-xl-3 col-sm-6">
                                        <div className="card shadow-none border border-primary-hover">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-auto">
                                                        <span className="text-sm text-muted text-primary-hover d-block font-semibold">5 Members</span>
                                                    </div>
                                                </div>
                                                <h6 className="h4 font-semibold mt-5 mb-2">대표 관리자</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6">
                                        <div className="card shadow-none border border-primary-hover">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-auto">
                                                        <span className="text-sm text-muted text-primary-hover d-block font-semibold">15 Members</span>
                                                    </div>
                                                </div>
                                                <h6 className="h4 font-semibold mt-5 mb-2">점장</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6">
                                        <div className="card shadow-none border border-primary-hover">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                            <div className="me-auto">
                                                <span className="text-sm text-muted text-primary-hover d-block font-semibold">3 Members</span>
                                            </div>
                                            </div>
                                            <h6 className="h4 font-semibold mt-5 mb-2">매니저</h6>
                                        </div>
                                        </div>
                                    </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="card shadow-none border border-primary-hover">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                        <div className="me-auto">
                                            <span className="text-sm text-muted text-primary-hover d-block font-semibold">2 Members</span>
                                        </div>
                                        </div>
                                        <h6 className="h4 font-semibold mt-5 mb-2">레슨프로</h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Table --> */}
                        <div className="card">
                            <div className="card-header px-4 py-4 border-top border-bottom d-flex flex-column flex-sm-row gap-3">
                                <div className="scrollable-x">
                                    <div className="btn-group" style={{'min-width': '700px'}}>
                                        <Link to="#" className="btn btn-sm btn-neutral text-primary" aria-current="page">View all <span className="text-muted text-xs">(25)</span></Link>
                                        <Link to="#" className="btn btn-sm btn-neutral">대표 관리자 <span className="text-muted text-xs">(5)</span></Link>
                                        <Link to="#" className="btn btn-sm btn-neutral">점장 <span className="text-muted text-xs">(15)</span></Link>
                                        <Link to="#" className="btn btn-sm btn-neutral">매니저 <span className="text-muted text-xs">(3)</span></Link>
                                        <Link to="#" className="btn btn-sm btn-neutral">레슨프로 <span className="text-muted text-xs">(2)</span></Link>
                                    </div>
                                </div>
                                <div className="ms-auto hstack gap-2">
                                    {/* <!-- Search --> */}
                                    <div className="input-group input-group-sm input-group-inline">
                                        <span className="input-group-text pe-2">
                                            <i className="bi bi-search"></i>
                                        </span>
                                        <input type="email" className="form-control" placeholder="Search" aria-label="Search" />
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover table-nowrap">
                                    <thead className="table-light">
                                        <tr>
                                        <th scope="col">직급</th>
                                        <th scope="col">이름</th>
                                        <th scope="col">성별</th>
                                        <th scope="col">휴대폰 번호</th>
                                        <th scope="col">입사일</th>
                                        <th scope="col">권한</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>대표 관리자</td>
                                        <td>ㄱㄴㄷ</td>
                                        <td>남자</td>
                                        <td>010-1111-1111</td>
                                        <td>2022-01-01</td>
                                        <td>
                                            <div className="dropdown">
                                            <Link to="#" className="font-semibold text-heading text-primary-hover" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                대표관리자<i className="bi bi-chevron-down ms-2 text-xs"></i>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="#">Full access</Link></li>
                                                <li><Link className="dropdown-item" to="#">Can view</Link></li>
                                                <li><Link className="dropdown-item" to="#">Can edit</Link></li>
                                                <li><Link className="dropdown-item" to="#">Can publish</Link></li>
                                            </ul>
                                            </div>
                                        </td>
                                        <td>
                                            <Link to="#" className="btn btn-sm btn-square btn-neutral">
                                            <i className="bi bi-pencil"></i>
                                            </Link>
                                        </td>
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

export default Personnelmngm;