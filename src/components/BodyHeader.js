const BodyHeader = ({title,firstFilterText,SecondFilterText}) => {
   return <header>
   <div className="container-fluid">
     <div className="border-bottom pt-6">
       <div className="row align-items-center">
         <div className="col-sm col-12">
           {/* <!-- Title --> */}
           <h1 className="h2 ls-tight">
            {title}
           </h1>
         </div>
         {/* <!-- Actions --> */}
         <div className="col-sm-auto col-12 mt-4 mt-sm-0">
           <div className="hstack gap-2 justify-content-sm-end">
            <button href="#offcanvasCreate" className="btn btn-sm btn-primary" data-bs-toggle="offcanvas">
                <span className="pe-2">
                  <i className="bi bi-plus-square-dotted"></i>
                </span>
                <span>등록</span>
              </button>
             <button href="#modalExport" className="btn btn-sm btn-neutral border-base" data-bs-toggle="modal">
               <span className="pe-2">
                 <i className="bi bi-people-fill"></i>
               </span>
               <span>삭제</span>
             </button>
           </div>
         </div>
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
}

export default BodyHeader;