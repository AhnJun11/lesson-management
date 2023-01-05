import BodyHeader from './../components/BodyHeader';
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import Tables from '../components/Table';

const Curriculummngm = () => {
    const columns = useMemo(
        () => [
            {
                accessor: "id",
                Header: "No"
            },
            {
                accessor: "name",
                Header: "커리큘럼 명"
            },
            {
                accessor: "total",
                Header: "회차 수"
            },
            {
                accessor: "period",
                Header: "기간"
            },
            {
                accessor: "createAt",
                Header: "등록일"
                
            },
            {
                accessor: "activation",
                Header: "사용여부"
            }
        ],
        []
    );
    const [data, setDatas] = useState([]);
    const datas = async() => {
            const res = await axios.get('/curriculummngm');
            res.data.map((forData) => {
                forData.usingState === 1 ? forData.usingState="활성화": forData.usingState="비활성화"
            });  
            setDatas(res.data);            
    };
    useEffect(() => {
        datas();
    },[]);
    return (
        <>
            <BodyHeader title={'커리큘럼 관리'}/>
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid vstack gap-6">
                    <Tables columns={columns} data={data}/>  	
                </div>
            </main>
        </>
    );
};

export default Curriculummngm;