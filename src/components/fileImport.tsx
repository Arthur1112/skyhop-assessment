// @ts-nocheck
import '../styles/fileImport.css';
import { useRef, useState } from 'react';
import Button from './button';
import { File } from '../assets/svgs';

export interface FileImportProps {
  onFileChange?: (files: any) => void;
}

const FileImport = ({ onFileChange }: FileImportProps) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

  const onDrop = () => wrapperRef.current.classList.remove('dragover');

  const onFileDrop = (e: any) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      onFileChange(updatedList);
    }
  };

  const fileRemove = (file: any) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    onFileChange(updatedList);
  };
  return (
    <div className="drop-file-main-wrapper">
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <File />
          <p>
            Drag & Drop Here Or <strong>Browse</strong>
          </p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      <Button text="Upload Manifest" />
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size / 1000} KB</p>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FileImport;
