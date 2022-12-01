import BodyHeader from './../components/BodyHeader';
import Table from './../components/Table';

const Curriculummngm = () => {
    return (
        <div>
            <BodyHeader title={'커리큘럼 관리'} firstFilterText={'만료예정'} SecondFilterText={'개시 전'}/>
            <Table />
        </div>
    );
};

export default Curriculummngm;