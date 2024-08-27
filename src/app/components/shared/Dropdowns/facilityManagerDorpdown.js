'use client'

const { useState, useEffect } = require("react")
const { default: DropdownList } = require("../sharedUI/dropDownList.component");
const { useSelector, useDispatch } = require("react-redux");

const FMDropdown = ({
    selectedFM = null, 
    disabled = false, 
    showClear=false, 
    isMultiSelect = false, 
    onChange 
}) => {

    const reduxState = useSelector((state) => state?.profile);
    
    const [facilityManagers, setFacilityManagers] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [])

    return <DropdownList 
    dataKey='_id' 
    value={selectedFM} 
    options={facilityManagers}
    optionLabel='name' 
    optionValue='_id' 
    onChange={onChange}
    disabled={disabled}
    filter={true}
    showClear={showClear}
    placeholder={'Select Facility Manager'}
    />
}

export default FMDropdown;