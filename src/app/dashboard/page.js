"use client"
import { faBriefcase, faBuilding, faCity, faFile, faTriangleExclamation, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import CalendarView from "./calendarView";

const Dashboard = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = 'gray';
        const textColorSecondary = 'gray';
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Logged',
                    backgroundColor: 'rgb(255, 209, 102)',
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Assigned',
                    backgroundColor: 'rgb(17, 138, 178)',
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Scheduled',
                    backgroundColor: 'rgb(255, 102, 0)',
                    data: [41, 52, 24, 74, 23, 21, 32]
                },
                {
                    type: 'bar',
                    label: 'Signed Off',
                    backgroundColor: 'darkgreen',
                    data: [10, 10, 10, 10, 10, 10, 10]
                },
                {
                    type: 'bar',
                    label: 'Closed',
                    backgroundColor: 'rgb(7, 59, 76)',
                    data: [5, 5, 5, 5, 5, 5, 5]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
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
                <div className="col-lg-2">
                    <div className="col-lg-12  mb-5">
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
                        </div>
                    </div>
                    <div className="col-lg-12  mb-5">
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
                        </div>
                    </div>
                    <div className="col-lg-12  mb-5">
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
                        </div>
                    </div>
                    <div className="col-lg-12  mb-5">
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
                        </div>
                    </div>
                    <div className="col-lg-12  mb-5">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-gray shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <FontAwesomeIcon icon={faCity} style={{ height: '2rem', marginTop: '10px' }} className="material-icons opacity-10" />
                                </div>
                                <div className="text-end pt-1">
                                    <div className="text-sm ">Total Assets</div>
                                    <h4 className="mb-0 fw-bold">53</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-danger shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <FontAwesomeIcon icon={faTriangleExclamation} style={{ height: '2rem', marginTop: '10px' }} className="material-icons opacity-10" />
                                </div>
                                <div className="text-end pt-1">
                                    <div className="text-sm ">Total Defects</div>
                                    <h4 className="mb-0 fw-bold">53</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="row align-items-center">
                        <div className="col-lg-12 mb-4">
                            <div className="card mt-3">
                                <div className="card-body dashboard-subcard">
                                    <CalendarView events={events} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body dashboard-subcard">
                                    <h6 class="mb-0 fw-bold text-muted">Jobs Status</h6>
                                    <Chart type="bar" data={chartData} options={chartOptions} className="w-full md:w-30rem d-flex justify-content-center" height="235px" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;