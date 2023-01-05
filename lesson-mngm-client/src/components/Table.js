import {Link} from 'react-router-dom';
import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect, useAsyncDebounce } from "react-table";
import React from 'react';

export const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
            <Link to="" className="btn btn-sm btn-square btn-neutral">
                <i ref={resolvedRef} {...rest} className="bi bi-pencil"></i>
            </Link>
        </>
      )
    }
  )

  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
    return (
      <>
        <form style={{float:'right'}}className="form-inline ms-auto me-4 d-none d-md-flex">
            <div className="input-group input-group-sm input-group-inline">
                <span className="input-group-text pe-2"> 
                    <i className="bi bi-search"></i>
                </span> 
                <input type="email" className="form-control" placeholder="Search" aria-label="Search" value={value || ""}
                    onChange={e => { setValue(e.target.value); onChange(e.target.value);}}/>
            </div>
        </form>
      </>
    )
  }

const Tables = ({columns,data}) => {

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        state,
        page,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data, initialState: { pageSize: 2 } }, useGlobalFilter, useSortBy, usePagination,useRowSelect,
        hooks => {
            hooks.allColumns.push(columns => [
              ...columns,{
                id: 'selection',
                disableResizing: true,
                minWidth: 35,
                width: 35,
                maxWidth: 35,
                // Cell: ({ row }) => (
                //   <div>
                //     <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                //   </div>
                // ),
              },
            ])
            hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
              const selectionGroupHeader = headerGroups[0].headers[0]
              selectionGroupHeader.canResize = false
            })
          });
    return (
      <>
        <div className="card">                
          <div className="card-header border-bottom">
              <h6 className="mb-0">
                  Show <select className="form-select form-select-sm" style={{width: 'auto' , height: 'auto' , display: 'inline'}} 
                      value={pageSize} onChange={e => { setPageSize(Number(e.target.value)) }} >
                      {[2, 3, 4, 5].map(pageSize => ( <option key={pageSize} value={pageSize}> {pageSize}</option> ))}
                      
                      <option value={pageCount * pageSize}>All</option>
                  </select> entries
                  <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}globalFilter={state.globalFilter}setGlobalFilter={setGlobalFilter}/>
              </h6>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-nowrap table-sm" {...getTableProps()}>
              <thead className="table-light">
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th scope="col" {...column.getHeaderProps((column.getSortByToggleProps()))}>{column.render("Header")}
                      <span>
                      {column.isSorted ? (column.isSortedDesc ? " ⬇︎" : " ⬆︎") : ""}
                    </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row,i) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                          <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        ))}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="card-footer border-0 py-5">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>{' '}
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
              </button>{' '}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
              </button>{' '}
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </button>{' '}
              <span>
              　Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
              <span>
                　 Go to page:{' '}
                <input
                  type="number" className='form-control'
                  defaultValue={pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                  }}
                  style={{ width: '80px', height: '20px' , display:'inline-block' }}
                />
              </span>{' '}
              <span style={{float:'right'}} className="text-muted text-sm">Showing {pageSize} items {pageCount * pageSize} results found</span>
            </div>
          </div>
        </div>
      </>
    );

};
export default Tables;