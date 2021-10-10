import React, { useCallback, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import uploadBox from "../../assets/images/uploadBox.PNG";
import {
  faFileExcel,
  faFileImage,
  faFilePdf,
  faExclamationCircle,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MultipleFileUpload = () => {
  let currentId = 0;

  const getNewId = () => {
    return ++currentId;
  };

  const [files, setFiles] = useState([]);

  console.log("---no---", files.length);

  files.forEach((i) => {
    let bytes = i.file.size;
    i.fileSize = null;
    let decimals = 2;
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const l = Math.floor(Math.log(bytes) / Math.log(k));

    i.fileSize =
      parseFloat((bytes / Math.pow(k, l)).toFixed(dm)) + " " + sizes[l];

    console.log("---fileeee---", i.file.name.length);
    i.iconType = null;

    switch (
      i.file?.name
        ?.toLowerCase()
        .slice(i.file.name.lastIndexOf(".") + 1, i.file.length)
    ) {
      case "xlsx":
        i.iconType = faFileExcel;
        break;

      case "xls":
        i.iconType = faFileExcel;
        break;

      case "pdf":
        i.iconType = faFilePdf;
        break;

      case "png":
        i.iconType = faFileImage;
        break;

      case "jpg":
        i.iconType = faFileImage;
        break;

      case "jpeg":
        i.iconType = faFileImage;
        break;
      default:
        i.iconType = faFilePdf;
        break;
    }
  });

  const handleOnDelete = (selectedFile) => {
    console.log("selectedFile", selectedFile);
    setFiles((e) => e.filter((current) => current.file !== selectedFile));
  };

  const onDrop = useCallback(
    (accFiles, rejFiles) => {
      console.log("accFiles---", accFiles);
      console.log("rejFiles---", rejFiles);

      const mappedAcc = accFiles.map((file) => ({
        file,
        errors: [],
        id: getNewId(),
      }));
      const mappedRej = rejFiles.map((x) => ({ ...x, id: getNewId() }));
      setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
    },
    [files]
  );

  const { open, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: [
      // "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      // "application/vnd.ms-excel",
      ".xls",
      ".xlsx",
    ],
    noClick: true,
    validator: allValidators,
  });

  console.log("acceptedFiles", files);

  const allFilesItems = files.map((i) => {
    // <li key={file.path}>
    //   {file.path} - {file.size} bytes
    // </li>
    return (
      <>
        {i.errors.length ? (
          <ListGroup className="my-3 " key={i.file.path}>
            <ListGroup.Item className="d-flex ">
              <FontAwesomeIcon
                size="2x"
                icon={faExclamationCircle}
                className="align-self-center"
                color="red"
              />{" "}
              <div className="mx-2">
                <h6>{i.file.path} </h6>
                {/* <div> {i.fileSize}</div> */}
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  Uploading was failed
                </div>
              </div>
              <FontAwesomeIcon
                size="lg"
                icon={faTimesCircle}
                className="list-close-btn"
                color="red"
                onClick={() => handleOnDelete(i.file)}
              />
            </ListGroup.Item>
            {i.errors.length &&
              i?.errors.map((el, index) => (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                  key={index}
                >
                  {el?.message}
                </div>
              ))}
          </ListGroup>
        ) : (
          <ListGroup className="my-3 " key={i.file.path}>
            <ListGroup.Item className="d-flex ">
              <FontAwesomeIcon
                size="2x"
                icon={i.iconType}
                className="align-self-center"
              />{" "}
              <div className="mx-2">
                <h6>{i.file.path} </h6>
                <div> {i.fileSize}</div>
                <div
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  File was uploaded
                </div>
              </div>
              <FontAwesomeIcon
                size="lg"
                icon={faTimesCircle}
                className="list-close-btn"
                color="red"
                onClick={() => handleOnDelete(i.file)}
              />
            </ListGroup.Item>
          </ListGroup>
        )}
      </>
    );
  });

  const fileRejectionItems = files.map(({ file, errors }) => (
    // <li key={file.path}>
    //   {file.path} - {file.size} bytes
    //   <ul>
    //     {errors.map((e) => (
    //       <li key={e.code}>{e.message}</li>
    //     ))}
    //   </ul>
    // </li>

    <ListGroup className="my-2 " key={file.path}>
      <ListGroup.Item>
        <div>
          {" "}
          <FontAwesomeIcon size="5x" icon={faFileExcel} />{" "}
          <span>{file.path} </span>{" "}
        </div>
      </ListGroup.Item>
    </ListGroup>
  ));

  return (
    <>
      <section className="container">
        <div {...getRootProps({ className: "drop-zone" })}>
          <input {...getInputProps()} />
          <div className="flex-column text-center my-4">
            <img className="mb-2" src={uploadBox} />

            <p>
              Drag your files (.XLSX) here or{" "}
              <span
                className="blue pointer-event "
                style={{ cursor: "pointer", color: "blue" }}
                onClick={open}
              >
                choose file
              </span>
            </p>
            <em>You can upload up to x files each time.</em>
          </div>
        </div>
        <aside className="my-4">
          <h4>Files Uploaded</h4>
          <h6>
            {files?.length > 1
              ? `${files.length} Files`
              : `${files.length} File`}
          </h6>
          {allFilesItems}
          {/* <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul> */}
        </aside>
      </section>
    </>
  );
};

const maxLength = 20;

const allValidators = (file) => {
  console.log("validator", file);
  if (file.name.length > maxLength) {
    return {
      code: "name-too-large",
      message: `The total name length should be no more than ${maxLength} characters`,
      // message: `Name is larger than ${maxLength} characters`,
    };
  }

  // if (
  //   file.type !=
  //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
  //   file.type != "application/vnd.ms-excel"
  // ) {
  //   return {
  //     code: "file-invalid-type",
  //     message: `File type must be one of .xls, .xlsx `,
  //   };
  // }
  return null;
};

// function CustomValidation(props) {}
