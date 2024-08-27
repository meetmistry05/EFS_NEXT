"use client";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextBoxComponent from "../components/shared/sharedUI/textBox.component";
import { labelConstants } from "../utilities/constants/combine.constant";
import DropdownList from "../components/shared/sharedUI/dropDownList.component";
import BuildingDropdown from "../components/shared/Dropdowns/buildingsDropdown";
import JobTypeDropdown from "../components/shared/Dropdowns/jobTypeDropdown";
import { Calendar } from "primereact/calendar";
import BuildingAddEdit from "../buildings/buildingAddEditDialog";
import { setShowBuilding } from "@/redux/slices/building/building.slice";


export const JobAddEdit = ({ id = '' }) => {
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state?.job);

    const [selectedBuilding, setSelectedBuilding] = useState(null);


    useEffect(() => {
    }, [])

    useEffect(() => {

    }, [reduxState?.error, reduxState?.isSuccess]);

    const addBuilding = () => {
dispatch(setShowBuilding(true))
    }

    return (
        <>
        <BuildingAddEdit />
            <div className="row">
                <div className="col-lg-6">
                    <div className='card'>
                        <div className='card-header'>
                            <div className='table-header justify-content-between'>
                                <>{id ? labelConstants.UPDATE : labelConstants.ADD} Job
                                </>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Job Reference</lable>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Customer PO Reference</lable>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Job Type</lable>
                                    <JobTypeDropdown selectedJobType={null}/>
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Certificate Reference</lable>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Assign Operative</lable>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Assign Lead Operative</lable>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Inspection Date</lable>
                                    <Calendar value='' showButtonBar className="w-100" placeholder="Inspection Date" showIcon />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Working Hours</lable>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Job Start Date</lable>
                                    <Calendar value='' showButtonBar className="w-100" placeholder="Job Start Date" showIcon />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Job End Date</lable>
                                    <Calendar value='' showButtonBar className="w-100" placeholder="Job End Date" showIcon />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label>Note</label>
                                    <InputTextarea value={''} rows={5} cols={30} className="form-control" />
                                </div>
                                <div className="col-lg-12 text-end">
                                    <Button type="button" className="btn btn-primary" label="Create Job" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-lg-11 col-xl-9 mb-3">
                                    <lable className="form-label required">Assign Building</lable>
                                    <BuildingDropdown selectedBuilding={selectedBuilding} onChange={setSelectedBuilding} />
                                </div>
                                <div className="col-lg-11 col-xl-3 text-end col-borer">
                                    <Button 
                                    type="button" 
                                    className="btn btn-primary col-12" 
                                    label="Add Building" 
                                    onClick={addBuilding}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <lable className="form-label">Building Ref.</lable>
                            <TextBoxComponent
                                type="text"
                                value=""
                                placeholder={"PPM..."}
                                disabled
                            />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <lable className="form-label">Building</lable>
                            <TextBoxComponent
                                type="text"
                                value=""
                                placeholder={"Building"}
                                disabled
                            />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <lable className="form-label">Address</lable>
                            <TextBoxComponent
                                type="text"
                                value=""
                                placeholder={"Address"}
                                disabled
                            />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <lable className="form-label">Profile</lable>
                            <TextBoxComponent
                                type="text"
                                value=""
                                placeholder={"Profile"}
                                disabled
                            />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <lable className="form-label">Facility Manager</lable>
                            <TextBoxComponent
                                type="text"
                                value=""
                                placeholder={"Facility Manager"}
                                disabled
                            />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <lable className="form-label">Representative</lable>
                            <TextBoxComponent
                                type="text"
                                value=""
                                placeholder={"Representative"}
                                disabled
                            />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <lable className="form-label">Test Regime</lable>
                            <TextBoxComponent
                                type="text"
                                value=""
                                placeholder={"Test Regime"}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
