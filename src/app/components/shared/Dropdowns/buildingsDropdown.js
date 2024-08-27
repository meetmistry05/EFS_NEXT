'use client'

const { useState, useEffect } = require("react")
const { default: DropdownList } = require("../sharedUI/dropDownList.component");
const { useSelector, useDispatch } = require("react-redux");
const { argumentConstants } = require("@/app/utilities/constants/combine.constant");
const { getBuildings } = require("@/redux/slices/building/building.slice");

const BuildingDropdown = ({
    selectedBuilding = null, 
    disabled = false, 
    showClear=false, 
    isMultiSelect = false, 
    onChange 
}) => {

    const reduxState = useSelector((state) => state?.building);
    
    const [buildings, setBuildings] = useState(reduxState?.dropdownBuildings?.length ? reduxState?.dropdownBuildings : [] )
    const dispatch = useDispatch();

    useEffect(() => {
        if(!Array.isArray(buildings) || !buildings?.length){
            let params = {...argumentConstants.buildingArgs, isDropdown: true};
            params.pageLimit = 1000;

            dispatch(getBuildings(params));
        }
    }, [])

    useEffect(() => {
if(buildings?.length !== reduxState?.dropdownBuildings?.length){
    setBuildings(reduxState?.dropdownBuildings);
}
    }, [reduxState.dropdownBuildings])

    return <DropdownList 
    dataKey='_id' 
    value={selectedBuilding} 
    options={buildings}
    optionLabel='name' 
    optionValue='_id' 
    onChange={onChange}
    disabled={disabled}
    filter={true}
    showClear={showClear}
    placeholder={'Select Building'}
    />
}

export default BuildingDropdown;