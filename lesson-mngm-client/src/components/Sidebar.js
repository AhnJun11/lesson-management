import { useState } from 'react';
import {Link , useLocation } from 'react-router-dom';
import {UncontrolledCollapse} from 'reactstrap';


const Sidebar = () => {
    
    const [isOpen , setMenu] = useState({
      firToggle : false,
      SecToggle : false  
    });

    const locationNow = useLocation();


    
    const toggleMenu = (e) => {
      const toggleSwich = e.target.ariaExpanded === "false" ? true : false;

      setMenu({
        ...isOpen,
        [e.target.id]: toggleSwich
      });
    };

    if (locationNow.pathname === '/') return null;
    if (locationNow.pathname === '/joinMembership') return null;
    
    return <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="sidebar">
    <div className="container-fluid">
      {/* <!-- Toggler --> */}
      <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <!-- Brand --> */}
      <Link className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" to="/">
        <img src={process.env.PUBLIC_URL + `/assets/logos/clever-primary.svg`} />
      </Link>
      {/* <!-- User menu (mobile) --> */}
      <div className="navbar-user d-lg-none">
        {/* <!-- Dropdown --> */}
        <div className="dropdown">
          {/* <!-- Toggle --> */}
          <Link to="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="avatar-parent-child">
              <img src={process.env.PUBLIC_URL + `/assets/people/img-profile.jpg`} className="avatar avatar- rounded-circle" />
              <span className="avatar-child avatar-badge bg-success"></span>
            </div>
          </Link>
          {/* <!-- Menu --> */}
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
            <Link to="#" className="dropdown-item">Profile</Link>
            <Link to="#" className="dropdown-item">Settings</Link>
            <Link to="#" className="dropdown-item">Billing</Link>
            <hr className="dropdown-divider"/>
            <Link to="#" className="dropdown-item">Logout</Link>
          </div>
        </div>
      </div>
      {/* <!-- Collapse --> */}
      <div className="collapse navbar-collapse" id="sidebarCollapse">
        {/* <!-- Navigation --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/membermngm"
                      role="button" aria-expanded="false"
                      aria-controls="sidebar-projects"> <i className="bi bi-briefcase"></i>
                          ?????? ??????
              </Link>
          </li>
          {/*<li className="nav-item">
              <Link className="nav-link" to="/accountingmngm"
                      role="button" aria-expanded="false"
                      aria-controls="sidebar-projects"> <i className="bi bi-kanban"></i>
                          ?????? ??????
              </Link>
          </li>
          
           <li className="nav-item">
              <Link className="nav-link" to="/statisticalas"
                      role="button" aria-expanded="false"
                      aria-controls="sidebar-projects"> <i className="bi bi-file-earmark-text"></i>
                          ?????? ??????
              </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="#" id="firToggle" onClick={toggleMenu} data-bs-toggle="collapse" role="button" aria-expanded={isOpen.firToggle} aria-controls="sidebar-integrations">
              <i className="bi bi-terminal"></i> ???????????? ??????
            </Link>
            <UncontrolledCollapse toggler="#firToggle">
              <div className="collapse show" id="sidebar-integrations">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/productmngm" className="nav-link">
                      ????????????
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/curriculummngm" className="nav-link">
                      ???????????? ??????
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/lessonSignmngm" className="nav-link">
                      ??????????????? ??????
                    </Link>
                  </li>
                </ul>
              </div>
            </UncontrolledCollapse>
          </li>
           <li className="nav-item">
              <Link className="nav-link" to="/personnelmngm"
                      role="button" aria-expanded="false"
                      aria-controls="sidebar-projects"> <i className="bi bi-people"></i>
                          ?????? ??????
              </Link>
          </li>
          {/* <li className="nav-item">
              <Link className="nav-link" to="/permissionsmngm"
                      role="button" aria-expanded="false"
                      aria-controls="sidebar-projects"> <i className="bi bi-gear"></i>
                          ?????? ??????
              </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="#sidebar-authentication" id="SecToggle" onClick={toggleMenu} data-bs-toggle="collapse" role="button" aria-expanded={isOpen.SecToggle} aria-controls="sidebar-authentication">
              <i className="bi bi-person-bounding-box"></i> ??????
            </Link>
            <UncontrolledCollapse toggler="#SecToggle">
              <div className="collapse show" id="sidebar-authentication">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/notice" className="nav-link">
                      ????????????
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/history" className="nav-link">
                      ????????????
                    </Link>
                  </li>
                </ul>
              </div>
            </UncontrolledCollapse>
          </li> */}
          <li className="nav-item">
              <Link className="nav-link" to="/"
                      role="button" aria-expanded="false"
                      aria-controls="sidebar-projects"> <i className="bi bi-briefcase"></i>
                          ?????? ?????????
              </Link>
          </li>
        </ul>
        {/* <!-- Divider --> */}
        <hr className="navbar-divider my-4 opacity-70"/>
        {/* <!-- Push content down --> */}
        <div className="mt-auto"></div>
      </div>
    </div>
  </nav>
};

export default Sidebar;