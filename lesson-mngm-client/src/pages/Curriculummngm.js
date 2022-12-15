import BodyHeader from './../components/BodyHeader';
import Table from './../components/Table';

const Curriculummngm = () => {
    return (
        <div>
            <BodyHeader title={'커리큘럼 관리'}/>
            <main className="py-6 bg-surface-secondary">
                {/* <!-- Container --> */}
                <div className="container-fluid">
                    <div className="vstack gap-6">
                        {/* <!-- Filters --> */}
                        <div className="d-flex flex-column flex-md-row gap-3 ">
                            <div className="d-flex gap-3">
                                {/* <!-- Search --> */}
                                <div className="input-group input-group-sm input-group-inline">
                                    <span className="input-group-text pe-2"> <i
                                        className="bi bi-search"></i>
                                    </span> <input type="text" className="form-control" placeholder="Search"aria-label="Search" />
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
                                                <th scope="col">No</th>
                                                <th scope="col">커리큘럼 명</th>
                                                <th scope="col">회차 수</th>
                                                <th scope="col">기간</th>
                                                <th scope="col">적용 상품</th>
                                                <th scope="col">등록일</th>
                                                <th scope="col">사용여부</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>입문자 전용 레슨 프로그램</td>
                                                <td>27</td>
                                                <td>3개월</td>
                                                <td>★(신)17시 이전 입문자(BP-17E)</td>
                                                <td>2022-07-03(일)</td>
                                                <td>
                                                    <div className="form-check form-switch me-n2">
                                                        <input style={{width:'50px', 'margin-left':'10px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                                                    </div>
                                                </td>
                                                <td><a href="#modalExport" className="btn btn-sm btn-neutral border-base" data-bs-toggle="modal"><span>수정</span>
                                                    </a>
                                                </td>
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
};

export default Curriculummngm;