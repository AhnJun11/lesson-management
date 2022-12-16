import MemberRegistration from './MemberRegistration';

const BodyHeader = ({title,firstFilterText,SecondFilterText}) => {

   return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="border-bottom pt-6">
            <div className="row align-items-center">
              <div className="col-sm col-12">
                {/* <!-- Title --> */}
                <h1 className="h2 ls-tight">
                  {title}
                </h1>
              </div>
                <MemberRegistration />
            </div>
            {/* <!-- Nav --> */}
            <ul className="nav nav-tabs overflow-x border-0">
              <li className="nav-item">
                <button href="#" className="nav-link active">All</button>
              </li>
              <li className="nav-item">
                <button href="#" className="nav-link">{firstFilterText}</button>
              </li>
              <li className="nav-item">
                <button href="#" className="nav-link">{SecondFilterText}</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
   );
 
}

export default BodyHeader;