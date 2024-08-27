import { JobAddEdit } from "../../jobAddEdit";

const JobEdit = ({ params }) => {

    const { id } = params;
    return <><JobAddEdit id={id} /></>;
};

export default JobEdit;