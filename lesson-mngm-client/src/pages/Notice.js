import BodyHeader from './../components/BodyHeader';
import Table from './../components/Table';

const Notice = () => {
    return (
        <div>
            <BodyHeader title={'공지사항'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
            <Table />
        </div>
    );
};

export default Notice;