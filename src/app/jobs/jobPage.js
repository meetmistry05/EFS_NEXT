"use client";
import { getJobs } from '@/redux/slices/job/job.slice';
import { Badge } from 'primereact/badge';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobsDataTable from '../components/shared/DataTable/customDatatable';
import { messageConstants } from '../utilities/constants/combine.constant';


export const JobsPage = () => {
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state?.job);

    const [params, setParams] = useState(
        {
            search: "",
            pageNum: 1,
            pageLimit: 10,
            status: ["Signedoff", "Assigned", "Closed"]
        }
    )
    const [jobs, setJobs] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [firstRow, setFirstRow] = useState(0);
    const [filters, setFilters] = useState({
        global: { value: null },
        refNo: { value: null },
        certificateReference: { value: null },
        buildingName: { value: null },
        clients: { value: null },
        facilityManagerName: { value: null },
        type: { value: null, matchMode: 'contains' },
        operativeName: { value: null },
        jobStatus: { value: null, matchMode: 'contains' }
    });

    const getAllJobs = async () => {
        await dispatch(getJobs(params))
    }

    useEffect(() => {
        getAllJobs();
    }, [])

    useEffect(() => {
        if (reduxState?.error) {
            showToastMessage(messageConstants.ErrorToastSeverity, messageConstants.ErrorMessageTitle, reduxState?.error);
            return;
        }

        if (reduxState?.isSuccess) {
            const results = reduxState.jobs.map((x, i) => {
                return {
                    ...x,
                    serial: i + 1,
                    buildingName: x.building ? x.building.name : '',
                    clients: x.profile ? x.profile.name : '',
                    facilityManagerName: x?.facilityManager ? x?.facilityManager?.name : '',
                    operativeName:
                        x.operatives && x.operatives.length
                            ? x.operatives.map((y) => y.name).join(', ')
                            : '',
                };
            });
            setTotalRecords(reduxState.totalRecords)
            setJobs(results)
        }
    }, [reduxState?.error, reduxState?.isSuccess]);

    const onGlobalFilterChange = (e) => {

    }

    const statusBodyTemplate = (rowData) => {

        let color;

        switch (rowData?.status) {
            case "Closed":
                color = "#073b4c";
                break;
            case "Scheduled":
                color = "#ff6600";
                break;
            case "Assigned":
                color = "#118ab2";
                break;
            case "Logged":
                color = "#ffd166";
                break;
            case "Signedoff":
                color = "darkgreen";
                break;
            default:
                color = "black"; // Default to orange for other cases
                break;
        }
        return <Badge
            className='h-auto py-1'
            style={{
                background: color,
                width: '100%',
                textAlign: 'center',
                textTransform: 'capitalize',
                fontSize: '13px',
                borderRadius: '50px',
                fontWeight: '400'
            }} value={rowData?.status || 'N/A'} />;
    };

    const jobColumns = [
        {
            field: 'refNo',
            header: 'Job Reference',
            filter: true,
            sortable: true,
            style: { minWidth: '170px' },
        },
        {
            field: 'certificateReference',
            header: 'Certificate Reference',
            filter: true,
            sortable: true,
            style: { minWidth: '210px' },
        },
        {
            field: 'buildingName',
            header: 'Building',
            filter: true,
            sortable: true,
            style: { minWidth: '200px' },
        },
        {
            field: 'clients',
            header: 'Profile',
            filter: true,
            sortable: true,
            style: { minWidth: '200px' },
        },
        {
            field: 'facilityManagerName',
            header: 'Facility Manager',
            filter: true,
            sortable: true,
            style: { minWidth: '250px' },
        },
        {
            field: 'type',
            header: 'Job Type',
            filter: true,
            sortable: true,
            multiSelect: true,
            options: [
                { name: 'AFDS' },
                { name: 'Remedial Job' },
            ],
            style: { minWidth: '140px' },
        },
        {
            field: 'operativeName',
            header: 'Operative',
            filter: true,
            sortable: true,
            style: { minWidth: '130px' },
        },
        {
            field: 'jobStatus',
            header: 'Status',
            body: statusBodyTemplate,
            style: { minWidth: '100px' },
        },
    ];

    return (
        <>
            <JobsDataTable
                data={jobs}
                columns={jobColumns}
                filterValue={params.search}
                onGlobalFilterChange={onGlobalFilterChange}
                isShowPaginator
                isShowPagSize
                rowCount={params.pageLimit}
                totalRecords={totalRecords}
                firstRow={firstRow}
                filters={filters}
                setFilters={setFilters}
            />
        </>
    );
}
