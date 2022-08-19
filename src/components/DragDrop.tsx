import { useState } from "react";


export default function DropzoneField() {
    const [fileList, setFilelist] = useState<object[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);

    const dragOver = (e: any) => {
        e.preventDefault();
        setHover(true);
    }

    const dragEnter = (e: any) => {
        e.preventDefault();
        setHover(true);
    }

    const dragLeave = (e: any) => {
        e.preventDefault();
        setHover(false);
    }

    const fileDrop = (e: any) => {
        setHover(false);
        e.preventDefault();
        const files = e.dataTransfer.files;
        // console.log("files check -->", files)
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
        // console.log("file type --- >", files?.[0]?.type);
        // console.log("test file true false -->", validExtensions.includes(files?.[0]?.type));
        if (!validExtensions.includes(files?.[0]?.type)) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        };
        setFilelist([...fileList, files[0]]);
    };


    const fileRemove = (file: any) => {
        // console.log("fileList --- ",file)
        let updatedList = [...fileList];
        // console.log("updatedList",updatedList)
        let Contact: number = fileList.indexOf(file);
        updatedList.splice(Contact, 1);

        // console.log("Contact", Contact)

        setFilelist(updatedList);
    };

    return (
        <>
            <div className='main-div'>
                {error &&
                    <div style={{ display: "flex", padding: "1rem", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#ffbabc", borderRadius: "0.4rem" }}>
                        {/* <p style={{color:"red"}}> Invalid File Extension or File type is missing. </p> */}
                        <span style={{ color: "red" }}> Something went wrong, </span>
                        <span style={{ color: "red", marginTop: "0.5rem" }}> Please retry.</span>
                    </div>
                }
                <div className="container-dropzone">
                    <div className="drop-container"
                        // style={ hover ? "#e6f1fb" : "white"}
                        style={{ background: `${hover ? "#e6f1fb" : "white"}` }}
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}
                    >
                        <div className="drop-message">
                            Drag &#38; Drop files here
                        </div>

                    </div>
                </div>
                {/* {console.log("arr length",fileList.length)} */}
                <div className='main-img-class'>
                    {fileList.length > 0 && fileList.map((item: any, i: any) => {
                        return <div className="cls" key={i}>


                            <img className='img' src={URL.createObjectURL(item)} />
                            <div className='del' onClick={() => fileRemove(item)}>Delete</div>


                        </div>
                    })}
                </div>
            </div>

            <style>
                {`
        .main-div{
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
        }
          .main-img-class{
            display: grid;
            grid-template-columns: auto auto auto auto;
            margin-left: 1rem;
          }
          .img{
            height: 5rem;
            width: 5rem;
          }
          .cls{
            height: auto;
            width: auto;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-top: 1.5rem;
            margin-right: 1rem;
          }
          .container-dropzone{
            margin-top: 5rem;
            width: 20rem;
          }
          .drop-container{
            display: flex;
            height: 6rem;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 2px dashed #4aa1f3;
            margin:0px;
            border-radius: 0.4rem;
          }
          .del{
            cursor: pointer;
            color: red;
          }
          `}
            </style>
        </>
    );
}