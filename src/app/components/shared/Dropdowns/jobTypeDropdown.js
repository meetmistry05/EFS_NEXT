'use client'

const { useState, useEffect } = require("react")
const { default: DropdownList } = require("../sharedUI/dropDownList.component");

const JobTypeDropdown = ({
    selectedJobType = null, 
    disabled = false, 
    showClear=false, 
    onChange 
}) => {

    const jobTypes = [
        {name: 'AFDS', value: 'AFDS'},
        {name: 'Remedial', value: 'Remedial'},
    ]

    return <DropdownList 
    dataKey='value' 
    value={selectedJobType} 
    options={jobTypes}
    optionLabel='name' 
    optionValue='value' 
    onChange={onChange}
    disabled={disabled}
    showClear={showClear}
    placeholder={'Select Job Type'}
    />
}

export default JobTypeDropdown;