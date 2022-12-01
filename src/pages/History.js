import BodyHeader from './../components/BodyHeader';
import Table from './../components/Table';

const History = () => {
    return (
        <div>
            <BodyHeader title={'히스토리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
            <Table />
        </div>
    );
};

export default History;