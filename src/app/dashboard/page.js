"use client"
import { faBriefcase, faBuilding, faFile, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import CalendarView from "./calendarView";

const Dashboard = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Logged', 'Assigned', 'Scheduled', 'Signed Off', 'Closed'],
            datasets: [
                {
                    data: [3, 7, 41, 9, 5],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--gray-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--red-400'),
                        documentStyle.getPropertyValue('--gray-400'),
                    ]
                }
            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                },
                datalabels: {
                    color: '#ffffff', // Label color
                    formatter: (value, context) => {
                        const label = context.chart.data.labels[context.dataIndex];
                        return label + '\n' + value; // Display label and value inside the chart
                    },
                    anchor: 'center',
                    align: 'center',
                    font: {
                        weight: 'bold',
                        size: '16'
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    const events = [
        {
            title: 'Meeting with John',
            start: new Date(2024, 7, 20, 10, 0), // Month is 0-indexed
            end: new Date(2024, 7, 20, 12, 0),
        },
        {
            title: 'Conference',
            start: new Date(2024, 7, 21, 9, 0),
            end: new Date(2024, 7, 23, 17, 0),
        },
        {
            title: 'Conference',
            start: new Date(2024, 7, 13, 17, 0),
            end: new Date(2024, 7, 13, 18, 0),
        },
        {
            title: 'Conference',
            start: new Date(2024, 7, 14, 17, 0),
            end: new Date(2024, 7, 14, 18, 0),
        },
    ];

    return (
        <>
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                <FontAwesomeIcon icon={faBriefcase} style={{ height: '2rem', marginTop: '10px' }} className="material-icons opacity-10" />
                            </div>
                            <div className="text-end pt-1">
                                <div className="text-sm ">Total Jobs</div>
                                <h4 className="mb-0 fw-bold">53</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><span className="text-success text-sm fw-bolder">+55% </span>than last week</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-warning shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                <FontAwesomeIcon icon={faBuilding} style={{ height: '2rem', marginTop: '10px' }} className="material-icons opacity-10" />
                            </div>
                            <div className="text-end pt-1">
                                <div className="text-sm ">Total Buildings</div>
                                <h4 className="mb-0 fw-bold">53</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><span className="text-success text-sm fw-bolder">+55% </span>than last week</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-info shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                <FontAwesomeIcon icon={faUserGear} style={{ height: '2rem', marginTop: '10px' }} className="material-icons opacity-10" />
                            </div>
                            <div className="text-end pt-1">
                                <div className="text-sm">Total Operatives</div>
                                <h4 className="mb-0 fw-bold">53</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><span className="text-success text-sm fw-bolder">+55% </span>than last week</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-success shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                <FontAwesomeIcon icon={faFile} style={{ height: '2rem', marginTop: '10px' }} className="material-icons opacity-10" />
                            </div>
                            <div className="text-end pt-1">
                                <div className="text-sm ">Total Reports</div>
                                <h4 className="mb-0 fw-bold">53</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><span className="text-success text-sm fw-bolder">+55% </span>than last week</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-8 mb-3">
                    <div className="card mt-3">
                        <div className="card-body dashboard-subcard">
                            <CalendarView events={events} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="card mt-3">
                        <div className="card-body dashboard-subcard">
                            <h6 class="mb-0 fw-bold text-muted">Jobs Status</h6>
                            <hr />
                            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem d-flex justify-content-center" height="450px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;