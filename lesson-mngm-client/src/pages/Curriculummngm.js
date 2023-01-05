import BodyHeader from './../components/BodyHeader';
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import Tables from '../components/Tables';

const Curriculummngm = () => {
    const columns = useMemo(
        () => [
            {
                accessor: "id",
                Header: "No"
            },
            {
                accessor: "lessonName",
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
                accessor: "usingState",
                Header: "사용여부"
            }
        ],
        []
    );
    const [data, setDatas] = useState([]);
    const datas = async() => {
            const res = await axios.get('/curriculummngm');  
            setDatas(res.data);            
    };
    useEffect(() => {
        datas();
    },[]);
    return (
        <>
            <BodyHeader title={'커리큘럼 관리'}/>
            <Tables columns={columns} data={data}/>  			
        </>
    );
};

export default Curriculummngm;