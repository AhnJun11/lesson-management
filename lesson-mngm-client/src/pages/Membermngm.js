import BodyHeader from './../components/BodyHeader';
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import Tables from '../components/Table';

const Membermngm = () => {
    const columns = useMemo(
        () => [
            {
                accessor: "id",
                Header: "No"
            },
            {
                accessor: "lessonName",
                Header: "구분"
            },
            {
                accessor: "total",
                Header: "회원명(회원번호)"
            },
            {
                accessor: "period",
                Header: "성별"
            },
            {
                accessor: "createAt",
                Header: "레슨 기간"
                
            },
            {
                accessor: "ㅂ",
                Header: "진도율"
            },
            {
                accessor: "ㅈ",
                Header: "결석일"
            },
            {
                accessor: "ㄷ",
                Header: "최근 레슨일"
            },
            {
                accessor: "ㄱ",
                Header: "담당프로"
            },
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
            <BodyHeader title={'회원관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid vstack gap-6">
                <Tables columns={columns} data={data}/>
                </div>
            </main>
        </>
    );
};

export default Membermngm;