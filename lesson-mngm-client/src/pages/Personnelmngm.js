import BodyHeader from './../components/BodyHeader';
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import Tables from '../components/Table';
import EmployBanner from '../components/EmployBanner';
import {Link} from 'react-router-dom';

const Personnelmngm = () => {

    const columns = useMemo(
        () => [
            {
                accessor: "id",
                Header: "No"
            },
            {
                accessor: "position",
                Header: "직급"
            },
            {
                accessor: "name",
                Header: "이름"
            },
            {
                accessor: "gender",
                Header: "성별"
            },
            {
                accessor: "phoneNumber",
                Header: "휴대폰 번호"
                
            },
            {
                accessor: "createAt",
                Header: "입사일"
            },
            // {
            //     accessor: "resignationDate",
            //     Header: "퇴사일"
            // }
        ],
        []
    );
    const [data, setDatas] = useState([]);
    const [count, setCount] = useState([]);
    const datas = async() => {
        let proCount = 0;
        let manCount = 0;
        let pointCount = 0;
        const res = await axios.get('/personnelmngm/list');
        res.data.map((forData) => {
            forData.gender === 1 ? forData.gender="남자" : forData.gender="여자"
            if(forData.position === 3){
                forData.position=<Link to="" className="btn btn-sm btn-square btn-neutral">
                프로
                </Link>
                proCount++;
            }else if(forData.position === 2) {
                forData.position="매니저"
                manCount++;
            }else {
                forData.position="점장"
                pointCount++;
            }
        });
        setCount({proCount,manCount,pointCount});
        setDatas(res.data);
        
    };
    useEffect(() => {
        datas();
    },[]);
    return (
        <div>
            <BodyHeader title={'인사관리'} firstFilterText={'재직'} SecondFilterText={'퇴사'}/>
            <main className="py-6 bg-surface-secondary">
					<div className="container-fluid vstack gap-6">
                        <EmployBanner count={count}/>
                        <Tables columns={columns} data={data}/>
                    </div>
            </main>
        </div>
    );
};

export default Personnelmngm;