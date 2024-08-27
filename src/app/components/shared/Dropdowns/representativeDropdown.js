'use client'

const { useState, useEffect } = require("react")
const { default: DropdownList } = require("../sharedUI/dropDownList.component");
const { useSelector, useDispatch } = require("react-redux");

const RepresentativeDropdown = ({
    selectedRepresentative = null, 
    disabled = false, 
    showClear=false, 
    isMultiSelect = false, 
    onChange 
}) => {

    const reduxState = useSelector((state) => state?.profile);
    
    const [representatives, setRepresentatives] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [])

    return <DropdownList 
    dataKey='_id' 
    value={selectedRepresentative} 
    options={representatives}
    optionLabel='name' 
    optionValue='_id' 
    onChange={onChange}
    disabled={disabled}
    filter={true}
    showClear={showClear}
    placeholder={'Select Representative'}
    />
}

export default RepresentativeDropdown;