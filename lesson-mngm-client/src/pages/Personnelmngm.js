import Table from '../components/Table';
import BodyHeader from './../components/BodyHeader';

const Personnelmngm = () => {
    return (
        <div>
        <BodyHeader title={'인사관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
        <Table />
        </div>
    );
};

export default Personnelmngm;