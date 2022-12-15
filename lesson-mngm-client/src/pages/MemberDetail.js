import {Link} from 'react-router-dom';
import BodyHeader from '../components/BodyHeader';

const MemberDetail = () => {

    return (
        <div>
            <BodyHeader title={'회원관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    <div className="vstack gap-6">
                        <div className="d-flex flex-column flex-md-row gap-3 ">
                            <div className="d-flex gap-3">
                                <div className="input-group input-group-sm input-group-inline">
                                    <span className="input-group-text pe-2"> <i
                                        className="bi bi-search"></i>
                                    </span> 
                                    <input type="text" className="form-control" placeholder="Search" aria-label="Search"/>
                                </div>
                            </div>
                            <h6 style={{'margin-top': '10px'}}>현재 진행중인 회차 :</h6>
                            <div style={{'margin-top': '5px'}}>
                                <span className="badge rounded-pill bg-soft-primary text-primary">1회차</span>
                            </div>
                        </div>
                        <div className="row g-6">
                            <div className="col-xl-3 col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            {/* <div style={{float: 'left', 'margin-right': '15px', width: '40px', height: '40px'}} className="avatar avatar-sm bg-warning rounded-circle text-white">
                                                <img alt="..." src="/img/people/img-profile.jpg" />
                                            </div> */}
                                            <p className="h5 text-sm">이름 : <span>가나다</span></p>
                                            <p className="h5 text-sm">연락처 : <span>010-1111-1111</span></p>
                                            <p className="h5 text-sm">ID : <span>abc1234</span></p>
                                        </div>
                                        <p className="text-sm">회원 등록일 : <span>2022년 01월 22일</span> </p>
                                        <p className="text-sm">최종 만료일 : <span>2022년 01월 22일</span> </p>
                                        <p className="text-sm">최근 레슨일 : <span>2022년 01월 22일</span> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">[입문자 종일 3개월]<span className="badge rounded-pill bg-soft-primary text-primary">이용중</span></h4>
                                        <p className="text-sm">등록일 : 2022-07-03 (일)<br/> 기간 : 2022-07-04(월) ~ 2022.10.03(토)<br/> 횟수 : 30회 중 잔여 24회
                                            <div className="d-flex align-items-left justify-content-left">
                                                <h6>진도율 :</h6>
                                                <div className="progress"style={{width: '100px', 'margin-top': '5px', 'margin-left': '5px'}}>
                                                    <div className="progress-bar bg-warning" role="progressbar"aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"style={{width: '38%'}}>
                                                    </div>
                                                </div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">센터 메모사항</h4>
                                        <p className="text-sm">메모사항 입니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-3">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="mb-3">프로 메모사항</h4>
                                        <p className="text-sm">메모사항 입니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header border-bottom">
                                    <h3 className="mb-0">레슨 커리큘럼<a style={{float: 'right', display:'none'}} href="#modalExport"
                                    className="btn btn-sm btn-neutral border-base"
                                    data-bs-toggle="modal"><span>저장</span>
                                </a></h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">회차</th>
                                                <th scope="col">날짜</th>
                                                <th scope="col">레슨 내용</th>
                                                <th scope="col">상태</th>
                                                <th scope="col">담당프로</th>
                                                <th scope="col">프로 코멘트</th>
                                                <th scope="col">사진</th>
                                                <th scope="col">동영상</th>
                                                <th scope="col">발송여부</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>2022-01-01</td>
                                                <td>아이언7</td>
                                                <td>진행완료</td>
                                                <td>아이오 프로</td>
                                                <td>잘했어요</td>
                                                <td>사진</td>
                                                <td>동영상</td>
                                                <td>발송</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

}

export default MemberDetail;