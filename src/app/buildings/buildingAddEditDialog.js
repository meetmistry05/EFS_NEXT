'use client'
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from "react-redux";
import { setShowBuilding } from "@/redux/slices/building/building.slice";
import TextBoxComponent from "../components/shared/sharedUI/textBox.component";
import FMDropdown from "../components/shared/Dropdowns/facilityManagerDorpdown";
import RepresentativeDropdown from "../components/shared/Dropdowns/representativeDropdown";
import ProfileDropdown from "../components/shared/Dropdowns/profileDropdown";
import DropdownList from "../components/shared/sharedUI/dropDownList.component";
import TextAreaBoxComponent from "../components/shared/sharedUI/textAreaBox.component";
import Image from 'next/image';
import { Button } from "primereact/button";

const BuildingAddEdit = ({selectedBuilding = null}) => {
    const reduxState = useSelector((state) => state?.building);
    const dispatch = useDispatch();


    return (
        <>
        <Dialog 
        header={`${selectedBuilding ? 'Update' : 'Add'} Building`} 
        visible={reduxState.showBuilding} style={{ width: '50vw' }} onHide={() => dispatch(setShowBuilding(false))}>
                <div className="pt-3">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-4 text-center">
                        <Image
                            src={require('../assets/img/associate.png')}
                            alt='associate pic'
                            style={{objectFit: 'contain'}}
                        />
                        </div>
                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label className="required">Building Reference:</label>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"B..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label className="required">Building Name:</label>
                                    <TextBoxComponent
                                        type="text"
                                        value=""
                                        placeholder={"B..."}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                <label className="required">Profile:</label>
                                <ProfileDropdown selectedProfile={null} />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label className="required">Facility Manager:</label>
                                    <FMDropdown selectedFM={null} />
                                </div>
                                <div className="col-lg-6 mb-3">
                                <label className="required">Representative:</label>
                                <RepresentativeDropdown selectedRepresentative={null} />
                                </div>
                                <div className="col-lg-6 mb-3">
                                <label className="required">Test Regime:</label>
                                <DropdownList options={[]} placeholder='Select' />
                                </div>
                                <div className="col-lg-12 mb-3">
                                <label className="">Address:</label>
                                <TextAreaBoxComponent />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Button type="button" className="btn btn-primary" label="Save" />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );

}

export default BuildingAddEdit;