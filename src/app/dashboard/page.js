"use client"

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
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
            labels: ['Jobs', 'Assets', 'Buildings', 'Operatives', 'Reports'],
            datasets: [
                {
                    data: [65, 212, 106, 17, 213],
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
                <div className="col-lg-3 mb-3">
                    <div className="dasboard-card">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="card dashboard-subcard">
                                <div className="card-body p-2 px-3">
                                    <FontAwesomeIcon icon={faBriefcase} style={{ height: '3rem' }} className="" />
                                </div>
                            </div>

                            <div class="">
                                <h6 class="dashboard-subcard p-2 pe-5 ">Total Jobs <i className="ms-1 pi pi-arrow-right" /></h6>
                            </div>
                            <div class="">
                                <h3 class="dashboard-subcard p-2 ">33</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="dasboard-card">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="card dashboard-subcard">
                                <div className="card-body p-2 px-3">
                                    <FontAwesomeIcon icon={faBriefcase} style={{ height: '3rem' }} className="" />
                                </div>
                            </div>

                            <div class="">
                                <h6 class="dashboard-subcard p-2 pe-5 ">Total Buildings <i className="ms-1 pi pi-arrow-right" /></h6>
                            </div>
                            <div class="">
                                <h3 class="dashboard-subcard p-2 ">33</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="dasboard-card">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="card dashboard-subcard">
                                <div className="card-body p-2 px-3">
                                    <FontAwesomeIcon icon={faBriefcase} style={{ height: '3rem' }} className="" />
                                </div>
                            </div>

                            <div class="">
                                <h6 class="dashboard-subcard p-2 pe-5 ">Total Defects <i className="ms-1 pi pi-arrow-right" /></h6>
                            </div>
                            <div class="">
                                <h3 class="dashboard-subcard p-2 ">33</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-4 mb-3">
                    <div className="card mt-5">
                        <div className="card-body dashboard-subcard">
                            <Chart type="polarArea" data={chartData} options={chartOptions} className="w-full md:w-30rem d-flex justify-content-center" height="450px" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mb-3">
                    <div className="card mt-3">
                        <div className="card-body dashboard-subcard">
                            <CalendarView events={events} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;