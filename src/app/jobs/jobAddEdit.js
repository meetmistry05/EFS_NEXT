"use client";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextBoxComponent from "../components/shared/sharedUI/textBox.component";
import { labelConstants } from "../utilities/constants/combine.constant";


export const JobAddEdit = ({ id = '' }) => {
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state?.job);


    useEffect(() => {
    }, [])

    useEffect(() => {

    }, [reduxState?.error, reduxState?.isSuccess]);

    return (
        <>
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
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
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
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
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
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <lable className="form-label required">Job End Date</lable>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
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
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"PPM..."}
                                    />
                                </div>
                                <div className="col-lg-11 col-xl-3 text-end col-borer">
                                    <Button type="button" className="btn btn-primary col-12" label="Add Building" />
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
