const EmployBanner = ({count}) => {
    return (
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
                                        <span className="text-sm text-muted text-primary-hover d-block font-semibold">Members</span>
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
                                        <span className="text-sm text-muted text-primary-hover d-block font-semibold">{count.pointCount} Members</span>
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
                                        <span className="text-sm text-muted text-primary-hover d-block font-semibold">{count.manCount} Members</span>
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
                                        <span className="text-sm text-muted text-primary-hover d-block font-semibold">{count.proCount} Members</span>
                                    </div>
                                </div>
                                <h6 className="h4 font-semibold mt-5 mb-2">레슨프로</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default EmployBanner;