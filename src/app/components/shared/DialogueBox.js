import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React from 'react';
import RoleBaseAccess from './roleBaseAccess.component';



const DialogueBox = ({ title, message, state, onClick, handleClose, btnLoading }) => {
  return (
    <>
      <Dialog position='top' header={title} visible={state} onHide={handleClose} draggable={false} className='confirm-dialog'>
        <p className='fs-5 fw-bold'>{message}</p>
        <div className='d-lg-flex justify-content-end align-items-end gap-3'>
          <Button onClick={handleClose} type='button' className='btn btn-primary-bordered mb-3 mb-lg-0'>
            <span className='px-4'>No</span>
          </Button>
          {/* <RoleBaseAccess moduleName={title.split(' ')[0]} isSubmit> */}
            <Button onClick={() => {
              onClick();
              if (!btnLoading) {
                handleClose();
              }
            }} type='button' className='btn btn-primary px-10' label={btnLoading ? 'Please wait...' : 'Yes'} icon={btnLoading && 'pi pi-spin pi-spinner'} />
          {/* </RoleBaseAccess> */}
        </div>
      </Dialog>
    </>
  );
};

export default DialogueBox;
