// import { GetPermissionsByName } from '../../../hooks/usePermissionAcess';
import { debounce } from 'lodash';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import { Skeleton } from 'primereact/skeleton';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { capitalizeFirstLetter } from '@/app/utilities/services/common.service';
import { MultiSelect } from 'primereact/multiselect';
import archive from '../../../assets/icons/ri_archive-fill.svg';

const CustomDataTable = ({
  data,
  columns,
  isLoading,
  isShowPaginator,
  isShowPagSize,
  firstRow,
  rowCount,
  totalRecords,
  onPageChange,
  scrollable,
  className,
  dataKey,
  rowSelect,
  selectionMode,
  scrollHeight,
  dataSortMode,
  onSort,
  isShowClientSidePaginator,
  onGlobalFilterChange,
  filterValue,
  sortOrder,
  sortField,
  isShowActionColumns,
  isShowClearAllFilter,
  onView,
  onEdit,
  onArchive,
  clearFilterValue,
  onDownload,
  isShowCheckBox,
  onSelectionChange,
  selectedData,
  onDelete,
  onRestore,
  filters,
  setFilters
}) => {
  const [dataSource, setDataSource] = useState([]);
  const [emptyMessage, setEmptyMessage] = useState('');

  let user = useSelector((state) => {
    return state.auth.user;
  });

  const permissionData = useSelector((state) => state.auth);
  let moduldePermision = permissionData?.user?.userPersonalPermissions;
  // let permsissions = GetPermissionsByName('Report Library', moduldePermision);

  useEffect(() => {
    setEmptyMessage('Loading...');
  }, []);

  const bodyTemplate = (rowData, key, header) => {
    if (isLoading) {
      return <Skeleton />;
    } else {
      return <>{rowData[`${key}`]}</>;
    }
  };

  const bodyDataTemplate = (rowData, bodyData, header) => {
    if (isLoading) {
      return <Skeleton />;
    } else {
      return <>{bodyData(rowData)}</>;
    }
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className={`d-flex  align-items-center`}>
        {onDownload ? (
          <div className='d-flex flex-row gap-2'>

            <button
              type='button'
              className='btn btn-icon btn-xs btn-danger'
              data-toggle='tooltip'
              title='View Report'
              onClick={() => onDownload && onDownload(rowData)}
            >
              <i className='la la-file-pdf-o' />
            </button>
            {user?.operativeTypeEnum === 3 || user?.operativeTypeEnum === 4 ? (
              ''
            ) : (
              <button
                className='btn btn-icon btn-xs btn-light me-2'
                data-toggle='tooltip'
                title='Remove'
                onClick={() => onArchive && onArchive(rowData._id)}
              >
                <img src={archive} alt='archive' />
              </button>
            )}
          </div>
        ) : (
          <>
            {onView && (
              <button
                className='btn btn-icon btn-xs me-1'
                style={{ backgroundColor: '#FF6600' }}
                data-toggle='tooltip'
                title='view'
                onClick={() => onView && onView(rowData._id)}
              >
                <i className='pi pi-eye'></i>
              </button>
            )}
            {onEdit && (
              <button
                className='btn btn-icon me-1 btn-xs centered-button'
                style={{ backgroundColor: '#FF6600' }}
                data-toggle='tooltip'
                title='Edit'
                onClick={() => onEdit && onEdit(rowData._id)}
              >
                <i className='pi pi-pencil'></i>
              </button>
            )}
            {
              (user?.operativeTypeEnum === 3 || user?.operativeTypeEnum === 4) ?
                '' :
                onArchive &&
                <button
                  data-toggle='tooltip'
                  title='Archive'
                  className='btn btn-icon btn-secondary btn-xs me-2 centered-button'
                  onClick={() => onArchive && onArchive(rowData._id)}
                >
                  <img src={archive} alt='' />
                </button>
            }
            {(user?.operativeTypeEnum === 3 || user?.operativeTypeEnum === 4) ?
              '' : (onDelete && <button
                type='button'
                data-toggle='tooltip'
                title='Delete'
                className='btn btn-xs btn-icon btn-secondary me-2 text-white pi pi-trash'
                onClick={() => onDelete(rowData._id)}
              >
              </button>)
            }
            {onRestore &&
              (
                <button
                  type='button'
                  data-toggle='tooltip'
                  title='Restore'
                  className='btn btn-xs btn-icon btn-primary me-2 text-white pi pi-sync'
                  onClick={() => onRestore(rowData._id)}
                >
                </button>
              )
            }
          </>
        )}
      </div>
    );
  };

  const debouncedSetFilters = useCallback(debounce(setFilters, 1000), [setFilters]);

  const filterTemplate = (options, multiSelect = false, multiselectOptions = []) => {
    let dataFilters = { ...filters };
    if (dataFilters[options.field].value !== options.value) {
      dataFilters[options.field].value = options.value;
      debouncedSetFilters(dataFilters);
    }

    if (multiSelect) {
      return <MultiSelect value={options.value} options={multiselectOptions} onChange={(e) => {
        options.filterCallback(e.value)
      }} optionLabel="name" optionValue='name' placeholder="Select" filter className="p-column-filter" />;
    }
    return (
      <InputText
        value={options.value}
        onChange={(e) => options.filterApplyCallback(e.target.value)}
        placeholder="Search"
        className="p-column-filter"
      />
    );
  };

  const setDynamicDataTableColumns = () => {
    if (columns && columns.length) {
      if (isShowActionColumns) {
        columns = [
          { field: '', header: 'Action', body: actionBodyTemplate, frozen: true },
          ...columns,
        ];
      }
      if (isShowCheckBox) {
        columns = [...columns, { field: '', header: '', selectionMode: 'multiple' }];
      }
      return columns.map((col, index) => {
        if (col.expander) {
          return (
            <Column
              key={index}
              style={col.style}
              field={col.field}
              header={col.header}
              sortable={col.sortable}
              body={col.body}
              selectionMode={col.selectionMode}
              expander={col.expander}
              rowReorder={col.rowReorder}
              frozen={col.frozen}
              className={col.className}
              headerStyle={col.headerStyle}
              bodyStyle={col.bodyStyle}
              filter={col.filter}
              filterElement={(e) => filterTemplate(e, col?.multiSelect, col?.options)}
              showFilterMatchModes={false}
            />
          );
        } else {
          return (
            <Column
              key={index}
              style={col.style}
              field={col.field}
              header={col.header}
              sortable={col.sortable}
              body={
                col.body
                  ? (e) => bodyDataTemplate(e, col.body, col.header)
                  : (e) => bodyTemplate(e, col.field, col.header)
              }
              selectionMode={col.selectionMode}
              expander={col.expander}
              rowReorder={col.rowReorder}
              frozen={col.frozen}
              className={col.className}
              headerStyle={col.headerStyle}
              bodyStyle={col.bodyStyle}
              filter={col.filter}
              filterElement={(e) => filterTemplate(e, col?.multiSelect, col?.options)}
              showFilterMatchModes={false}
            />
          );
        }
      });
    }
  };

  const showPaginator = () => {
    if (isShowPaginator && data?.length > 0) {
      const template = {
        layout:
          'RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport',
        RowsPerPageDropdown: (options) => {
          const dropdownOptions = [
            { label: 10, value: 10 },
            { label: 30, value: 30 },
            { label: 'All', value: totalRecords },
          ];

          return (
            <>
              <Dropdown
                id='PagingDropDown'
                value={rowCount}
                options={dropdownOptions}
                onChange={options.onChange}
              //appendTo={document.body}
              />
            </>
          );
        },
        CurrentPageReport: (options) => {
          return (
            <span
              className='text-muted'
              style={{
                color: 'var(--text-color)',
                userSelect: 'none',
                width: '235px',
                textAlign: 'center',
              }}
            >
              Showing {options.first} - {options.last} of {options.totalRecords} Records
            </span>
          );
        },
      };
      if (isShowPagSize) {
        return (
          <Paginator
            template={template}
            first={firstRow}
            rows={rowCount}
            totalRecords={totalRecords}
            style={{ opacity: '1' }}
            onPageChange={onPageChange}
            className={isLoading ? `custom-paginator p-disabled` : `custom-paginator`}
          ></Paginator>
        );
      } else {
        return (
          <Paginator
            first={firstRow}
            rows={rowCount}
            totalRecords={totalRecords}
            style={{ opacity: '1' }}
            onPageChange={onPageChange}
            className={isLoading ? `custom-paginator p-disabled` : `custom-paginator`}
          ></Paginator>
        );
      }
    }
  };

  const renderHeader = () => {
    return (
      <div className='flex justify-content-between'>
        {isShowClearAllFilter && (
          <Button
            type='button'
            icon='pi pi-filter-slash'
            label='Clear'
            outlined
            onClick={clearFilter}
          />
        )}

        <div className='search-box-container mx-1 my-3'>
          <span
            className={filterValue ? 'p-input-icon-left ' : 'p-input-icon-left '}
          >
            {filterValue ? (
              <i className='pi pi-times' onClick={clearFilterValue && clearFilterValue} />
            ) : (
              <i className='pi pi-search' />
            )}
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText
                value={filterValue}
                onChange={onGlobalFilterChange}
                placeholder='Search...'
                className='ps-8'
              />
            </IconField>
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='commonTableDashboard'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='card'>
              <div className='card-header'>
                <div className='table-header justify-content-between'>
                  <>{capitalizeFirstLetter(window.location.pathname.split('/')[1])} Table
                  </>
                  <div>
                    {onGlobalFilterChange && renderHeader()}
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <DataTable
                  className={`${!scrollable ? 'p-datatable-responsive-commontabledetails' : ''} ${className || 'p-datatable-responsive'
                    }`}
                  dataKey={dataKey}
                  value={data}
                  onRowSelect={rowSelect}
                  //selectionMode={selectionMode}
                  emptyMessage={isLoading ? 'Loading...' : 'No Records Found'}
                  scrollable={true}
                  scrollHeight={scrollHeight ? scrollHeight : '550px'}
                  sortMode={'single'}
                  onSort={onSort}
                  paginator={isShowClientSidePaginator}
                  sortOrder={sortOrder}
                  sortField={sortField}
                  selectionMode={isShowCheckBox ? null : 'checkbox'}
                  selection={selectedData}
                  onSelectionChange={onSelectionChange}
                  filters={filters}
                >
                  {setDynamicDataTableColumns()}
                </DataTable>
                {showPaginator()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDataTable;
