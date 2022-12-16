import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useTable, useSortBy } from "react-table";

const Table = () => {
	const [test,setTest] = useState('');

	const getPosts = async () => {
		const posts = await axios.get(
		  '/tttttt'
		);
		setTest(posts.data);
		console.log(posts.data);
	  };

	const getSends = async () => {
		const sends = await axios.post(
			'/qwer', {test:"hihih"}
		);
		console.log(sends.status);
	}
	  
	  useEffect(() => {
		getPosts();
		getSends();
	  }, []);

	
				// axios.get('/tttttt')
                // .then(response => setTest(response.data))
                // .catch(error => console.log(error))
	// posts.map(post => {post.id})
	//프로그레스 바
	// <div className="d-flex align-items-center justify-content-center">
	// 	<span className="me-2 ">38%</span>
	// 	<div className="progress" style={{width: '100px'}}>
	// 		<div className="progress-bar bg-warning" role="progressbar" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100" style={{width: '38%'}} />
	// 	</div>
	// </div>
    return (
        // <!-- Main -->
			<div className="container-fluid">
				<main className="py-6 bg-surface-secondary">
					{/* <!-- Container --> */}
					<div className="container-fluid" >
						<div className="card" style={{marginLeft: '-20px'}}>
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
											<th scope="col">레슨 기간</th>
											<th scope="col">진도율</th>
											<th scope="col">결석일</th>
											<th scope="col">최근 레슨일</th>
											<th scope="col">담당프로</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>{test}</td>
											<td>아무개(0001)</td>
											<td>남자</td>
											<td>2022.01.24 ~ 2022.04.23</td>
											<td>30회 중 24회</td>
											<td>1일</td>
											<td>2022-02-17</td>
											<td>가나다</td>
											<td>
                                            <Link to="/membermngm/memberDetail" className="btn btn-sm btn-square btn-neutral">
                                            <i className="bi bi-pencil"></i>
                                            </Link>
                                        	</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="card-footer border-0 py-5">
								<span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
							</div>
						</div>
					</div>
				</main>
			</div>
    );

};

export default React.memo(Table);