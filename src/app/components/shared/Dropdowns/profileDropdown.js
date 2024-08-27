'use client'

const { useState, useEffect } = require("react")
const { default: DropdownList } = require("../sharedUI/dropDownList.component");
const { useSelector, useDispatch } = require("react-redux");

const ProfileDropdown = ({
    selectedProfile = null, 
    disabled = false, 
    showClear=false, 
    isMultiSelect = false, 
    onChange 
}) => {

    const reduxState = useSelector((state) => state?.profile);
    
    const [profiles, setProfiles] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [])

    return <DropdownList 
    dataKey='_id' 
    value={selectedProfile} 
    options={profiles}
    optionLabel='name' 
    optionValue='_id' 
    onChange={onChange}
    disabled={disabled}
    filter={true}
    showClear={showClear}
    placeholder={'Select Profile'}
    />
}

export default ProfileDropdown;