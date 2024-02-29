import { useState } from 'react';
import '../styles/modal.css';
import Button from './button';
import DropDownSelect from './dropDownSelect';
import Divider from './divider';
import ToggleSwitch from './toggleSwitch';
import RadioBtnGroup from './radioBtnGroup';
import FileImport from './fileImport';
import { Clock } from '../assets/svgs';
import {
  sampleClientBtns,
  sampleClientList,
  sampleImportList,
  sampleScheduleBtns,
} from '../assets/sampleData';

export interface ModalProps {
  onSubmit?: () => void;
}

const Modal = ({ onSubmit }: ModalProps) => {
  const [openModal, setOpenModal] = useState(true);
  const [toggleState, setToggleState] = useState(false);

  const onFileChange = (files: any) => {
    console.log(files);
  };

  const _toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <div>
        <Button variant="primary" text="Open Modal" onClick={_toggleModal} />
      </div>
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-close-btn">
              <Button variant="close" text="X" onClick={_toggleModal} />
            </div>
            <div className="header-wrapper">
              <h2>Document Upload</h2>
              <Divider />
            </div>
            <div className="content-wrapper">
              <div className="content-inner-wrapper">
                <div className="left-column">
                  <div className="dropdown-wrapper">
                    <DropDownSelect
                      label="Select Import Name:"
                      data={sampleImportList}
                    />
                    <Divider kind="half" />
                  </div>
                  <div className="file-drop-wrapper">
                    <p>
                      <strong>Select a manifest you'd like to import</strong>
                    </p>
                    <FileImport onFileChange={(files) => onFileChange(files)} />
                    <Divider kind="half" />
                  </div>
                  <div className="elapse-dates-wrapper">
                    <p>Elapse Data Checking</p>
                    <p className="elapse-dates-result">No Elapsed Dates!</p>
                    <Divider kind="half" />
                  </div>
                  <div className="tolerance-wrapper">
                    <p>Tolerance Window:</p>
                    <div className="tolerance-inner-wrapper">
                      <div className="toggle-wrapper">
                        <ToggleSwitch
                          onChange={() => setToggleState(!toggleState)}
                        />
                        <p>Toggle {toggleState ? 'ON' : 'OFF'}</p>
                      </div>
                      <Divider orientation="horizontal" color="blue" />
                      <div className="tolerance-level-wrapper">
                        <Clock />
                        <div style={{ width: '100%', textOverflow: 'none' }}>
                          <p>Select Tolerance Level</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-column">
                  <div className="schedule-split-wrapper">
                    <p>Split schedule using social distancing?</p>
                    <RadioBtnGroup
                      id="sampleScheduleBtns"
                      data={sampleScheduleBtns}
                    />
                    <Divider kind="half" />
                  </div>
                  <div className="elapse-dates-wrapper">
                    <p>Location Checking:</p>
                    <p className="elapse-dates-result">All Available!</p>
                    <Divider kind="full" />
                  </div>
                  <div className="client-wrapper">
                    <p>
                      <strong>Client:</strong>
                    </p>
                    <RadioBtnGroup
                      id="sampleClientBtns"
                      data={sampleClientBtns}
                    />
                  </div>
                  <div className="testing-centers-wrapper">
                    <div className="single-testing-center">
                      <p> Testing Center 1</p>
                      <div style={{ width: '50%' }}>
                        <DropDownSelect size="small" data={sampleClientList} />
                      </div>
                      <Clock />
                    </div>
                    <div className="single-testing-center">
                      <p> Testing Center 2</p>
                      <div style={{ width: '50%' }}>
                        <DropDownSelect size="small" data={sampleClientList} />
                      </div>
                      <Clock />
                    </div>
                    <div className="single-testing-center">
                      <p> Testing Center 3</p>
                      <div style={{ width: '50%' }}>
                        <DropDownSelect size="small" data={sampleClientList} />
                      </div>
                      <Clock />
                    </div>
                    <div className="single-testing-center">
                      <p> Testing Center 4</p>
                      <div style={{ width: '50%' }}>
                        <DropDownSelect size="small" data={sampleClientList} />
                      </div>
                      <Clock />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="import-wrapper">
              <p>
                <strong>
                  Data in the import file is correct. Please press Continue to
                  import
                </strong>
              </p>
              <div className="import-btns-wrapper">
                <Button variant="primary" text="Continue Import" />
                <Button
                  onClick={_toggleModal}
                  text="Cancel"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
