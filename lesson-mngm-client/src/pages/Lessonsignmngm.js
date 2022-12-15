import BodyHeader from './../components/BodyHeader';
import {Link} from 'react-router-dom';

const LessonSignmngm = () => {
    return (
    <div>
        <BodyHeader title={'레슨사인지 관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
        <main className="py-6 bg-surface-secondary">
            {/* <!-- Container --> */}
            <div className="container-fluid vstack gap-3">
                <div className="card">
                    <div className="px-4 px-md-8">
                        <div className="d-flex align-items-center py-5">
                            {/* <!-- Form --> */}
                            <form className="form-inline me-4 d-none d-md-flex">
                                <div className="input-group input-group-sm input-group-inline">
                                    <span className="input-group-text pe-2"> 
                                        <i className="bi bi-search" />
                                    </span> 
                                    <input type="email" className="form-control" placeholder="Search"aria-label="Search" />
                                </div>
                            </form>
                            <button type="button" onclick="ticketSelect(this.id)" id="passTicket" className="btn btn-sm btn-primary">회원 상세페이지로 이동</button>
                            <div className="hstack gap-3 ms-auto">
                                <Link to="#" className="p-1 text-muted">
                                    <i className="bi bi-calendar-event" />
                                </Link>
                                <Link to="#" className="p-1 text-muted">
                                    <i className="bi bi-three-dots" />
                                </Link>
                            </div>
                        </div>
                        <div className="list-group list-group-flush">
                            <div className="list-group-item py-3">
                                <div className="row gx-4">	
                                    <div className="col-md-1" style={{width:'80px','margin-top':'10px'}}>
                                        <span className="badge rounded-pill bg-soft-primary text-primary" style={{width:'65px'}}>1회차</span>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>전체</option>
                                        </select>
                                    </div>
                                </div>            
                            </div>
                        </div>  
                        <div className="list-group list-group-flush">
                            <div className="list-group-item py-3">
                                <div className="row gx-4">	
                                    <div className="col-md">
                                        <textarea className="form-control" placeholder="코맨트를 입력해주세요." rows="2" />
                                    </div>
                                </div>            
                            </div>
                        </div>
                        <div className="list-group list-group-flush">
                            <div className="list-group-item py-3">
                                <div className="row gx-4">	
                                    <div className="col-md-12">
                                        {/* <!-- File upload --> */}
                                        <div className="rounded bg-primary bg-opacity-10 bg-opacity-20-hover border-2 border-primary border-dashed border-primary-hover position-relative">
                                            <div className="d-flex justify-content-center px-5 py-3">
                                                <label for="file-upload" className="position-absolute w-full h-full top-0 start-0 cursor-pointer">
                                                    <input id="file-upload" name="file-upload" type="file" className="visually-hidden" accept="image/*" capture="camera" />
                                                </label>
                                                <div className="text-center">
                                                    <div className="text-2xl text-primary">
                                                        <i className="bi bi-cloud-upload-fill"></i>
                                                    </div>
                                                    <div className="d-flex text-sm text-primary mt-3">
                                                        <p className="font-semibold">이미지를 업로드해주세요.</p>
                                                    </div>
                                                    <p className="text-xs text-primary">
                                                        PNG, JPG, GIF up to 3MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md" style={{'justify-content' : 'center', display: 'flex' ,'margin-top': '15px'}}>
                                    <button type="button" className="btn btn-sm btn-primary">등록하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
};

export default LessonSignmngm;