import React, {useEffect, useState} from 'react';
import '../../../stylesheets/uploadPartsFile.scss';
import PartsResultLoader from '../../../common/PartsResultsLoader';

function UploadPartsFile(props){
  const { expanded } = props;
  const [ showLoader, setShowLoader ] = useState(false);

  useEffect(()=>{
    handleFileNameChange();
  }, [])
  const handleFileNameChange=()=>{
    const file_images = document.getElementById('file_images');
    const file_rename_text = document.getElementById('upload_file_text');
    file_images.addEventListener('change', function(){
      if(file_images.files.length > 0){
        file_rename_text.innerText = file_images.files[0].name;
      }
      else {
        file_rename_text.innerText = 'Upload a File'
      }
    })
  }

  const handlePartsChecker=async ()=>{
    // const file_images = document.getElementById('file_images');
    // const file_rename_text = document.getElementById('upload_file_text');
    // file_rename_text.innerText = file_images.files[0].name;
    // const fileName = file_images.files[0].name;
    // console.log('filename', fileName);
    // console.log('fileImage', file_images);

    // let res = fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAToX0V7ntnoWyOBHI8Cg7IVZaLcGI49WQ",
    //         {
    //         method: 'POST',
    //         body: JSON.stringify({
    //           requests: [
    //             {
    //               image: {content: document.getElementById('file_images').files[0].base64},
    //               features: [{type: 'TEXT_DETECTION'}],
    //             },
    //           ],
    //         }),
    //       },
    //       )
    setShowLoader(true);

    closeLoaderIn5Seconds()
      // console.log('response', res);
    window.history.pushState({}, '', '/parts-checker');
    window.location.reload();
  }

  const closeLoaderIn5Seconds = () => 
  console.log('closeloader')
  setTimeout(() => {
    // this.props.closeModal();
    setShowLoader(false);
  }, 100000);

console.log('sjhowloader', showLoader);

  return (
    <div className={expanded ? "upload_part_list_cont pd_240" : "upload_part_list_cont pd_140"}>
    <div className="upload_partlist_text_cont">
      <div className="fs_30">Upload Teileliste</div>
    </div>
    <div className="upload_btn_cont">
      <div className="form-group file-area" id="file_area">
        <input type="file" name="images" id="file_images" required="required" multiple="multiple" onChange={handleFileNameChange} />
        <div className="file-dummy" id="file_dummy">
          <div className="default" id="upload_file_text">Hier klicken um ein Dokument hochzuladen</div>
        </div>
      </div>
      <div className="tac">
        <button className="parts_upload_btn cp" type="submit" onClick={handlePartsChecker}>PartsChecker</button>
        <div className="calculation_text">Laden Sie hier Ihr Gutachten oder die Schadenskalkulation hoch</div>
      </div>
    </div>
    { showLoader ? <PartsResultLoader /> : ''}
  </div>
  )
}

export default UploadPartsFile;
