import {Link} from 'react-router-dom';

const Header = () => {
    return <nav className="navbar navbar-light position-lg-sticky top-lg-0 d-none d-lg-block overlap-10 flex-none bg-white border-bottom px-0 py-3" id="topbar">
        <div className="container-fluid">
        {/* <!-- Form --> */}
        <form className="form-inline ms-auto me-4 d-none d-md-flex">
            <div className="input-group input-group-inline shadow-none">
            <span className="input-group-text border-0 shadow-none ps-0 pe-3">
                <i className="bi bi-search"></i>
            </span>
            <input type="text" className="form-control form-control-flush" placeholder="Search" aria-label="Search" />
            </div>
        </form>
        {/* <!-- Right menu --> */}
        <div className="navbar-user d-none d-sm-block">
            <div className="hstack gap-3 ms-4">
            <div className="dropdown">
                <Link to="#" className="nav-link px-3 text-base text-muted text-opacity-70 text-opacity-100-hover" id="dropdown-notifications" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-bell-fill"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-end px-2" aria-labelledby="dropdown-notifications">
                <div className="dropdown-item d-flex align-items-center">
                    <h6 className="dropdown-header p-0 m-0 font-semibold">Notifications</h6>
                    <Link to="#" className="text-sm font-semibold ms-auto">Clear all</Link>
                </div>
                <div className="dropdown-item py-3 d-flex">
                    <div>
                    <div className="avatar bg-tertiary text-white rounded-circle">
                        RF
                    </div>
                    </div>
                    <div className="flex-fill ms-3">
                    <div className="text-sm lg-snug w-64 text-wrap">
                        <Link to="#" className="font-semibold text-heading text-primary-hover">Robert</Link> sent Link message to <Link to="#" className="font-semibold text-heading text-primary-hover">Webpixels</Link>
                    </div>
                    <span className="text-muted text-xs">30 mins ago</span>
                    </div>
                </div>
                <div className="dropdown-item py-3 d-flex">
                    <div>
                    <img alt="..." src="/img/people/img-1.jpg" className="avatar rounded-circle" />
                    </div>
                    <div className="flex-fill ms-3">
                    <div className="text-sm lg-snug w-64 text-wrap">
                        <Link to="#" className="font-semibold text-heading text-primary-hover">Robert</Link> sent Link message to <Link to="#" className="font-semibold text-heading text-primary-hover">Webpixels</Link>
                    </div>
                    <span className="text-muted text-xs">30 mins ago</span>
                    </div>
                </div>
                <div className="dropdown-item py-3 d-flex">
                    <div>
                    <img alt="..." src="/img/people/img-2.jpg" className="avatar rounded-circle" />
                    </div>
                    <div className="flex-fill ms-3">
                    <div className="text-sm lg-snug w-64 text-wrap">
                        <Link to="#" className="font-semibold text-heading text-primary-hover">Robert</Link> sent Link message to <Link to="#" className="font-semibold text-heading text-primary-hover">Webpixels</Link>
                    </div>
                    <span className="text-muted text-xs">30 mins ago</span>
                    </div>
                </div>
                <div className="dropdown-item py-3 d-flex">
                    <div>
                    <div className="avatar bg-success text-white rounded-circle">
                        KW
                    </div>
                    </div>
                    <div className="flex-fill ms-3">
                    <div className="text-sm lg-snug w-64 text-wrap">
                        <Link to="#" className="font-semibold text-heading text-primary-hover">Robert</Link> sent Link message to <Link to="#" className="font-semibold text-heading text-primary-hover">Webpixels</Link>
                    </div>
                    <span className="text-muted text-xs">30 mins ago</span>
                    </div>
                </div>
                <div className="dropdown-item py-3 d-flex">
                    <div>
                    <img alt="..." src="/img/people/img-4.jpg" className="avatar rounded-circle" />
                    </div>
                    <div className="flex-fill ms-3">
                    <div className="text-sm lg-snug w-64 text-wrap">
                        <Link to="#" className="font-semibold text-heading text-primary-hover">Robert</Link> sent Link message to <Link to="#" className="font-semibold text-heading text-primary-hover">Webpixels</Link>
                    </div>
                    <span className="text-muted text-xs">30 mins ago</span>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item py-2 text-center">
                    <Link to="#" className="font-semibold text-muted text-primary-hover">View all</Link>
                </div>
                </div>
            </div>
            <div className="dropdown">
                <Link className="d-flex align-items-center" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                <div>
                    <div className="avatar avatar-sm bg-warning rounded-circle text-white">
                    <img src={process.env.PUBLIC_URL + `/assets/people/img-profile.jpg`} />
                    </div>
                </div>
                <div className="d-none d-sm-block ms-3">
                    <span className="h6">Tahlia</span>
                </div>
                <div className="d-none d-md-block ms-md-2">
                    <i className="bi bi-chevron-down text-muted text-xs"></i>
                </div>
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                <div className="dropdown-header">
                    <span className="d-block text-sm text-muted mb-1">Signed in as</span>
                    <span className="d-block text-heading font-semibold">Tahlia Mooney</span>
                </div>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                    <i className="bi bi-house me-3"></i>Home
                </Link>
                <Link className="dropdown-item" to="#">
                    <i className="bi bi-pencil me-3"></i>Edit profile
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                    <i className="bi bi-gear me-3"></i>Settings
                </Link>
                <Link className="dropdown-item" to="#">
                    <i className="bi bi-image me-3"></i>Media
                </Link>
                <Link className="dropdown-item" to="#">
                    <i className="bi bi-box-arrow-up me-3"></i>Share
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                    <i className="bi bi-person me-3"></i>Login
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    </nav>
}

export default Header;