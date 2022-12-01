import BodyHeader from './../components/BodyHeader';
import Table from './../components/Table';

const Accountingmngm = () => {
    return (
        <div>
        <BodyHeader title={'회계관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
        <Table />
        </div>
    );
};

export default Accountingmngm;