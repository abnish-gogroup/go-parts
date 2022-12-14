import React, {useEffect} from 'react';
import '../../../stylesheets/uploadPartsFile.scss';

function UploadPartsFile(){

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

  const handlePartsChecker=()=>{
    window.history.pushState({}, '', '/parts-checker');
    window.location.reload();
  }


  return (
    <div className="upload_part_list_cont">
    <div className="upload_partlist_text_cont">
      <div className="fs_30">Angebotsauswahl</div>
    </div>
    <div className="upload_btn_cont">
      <div className="form-group file-area" id="file_area">
        <input type="file" name="images" id="file_images" required="required" multiple="multiple" onChange={handleFileNameChange} />
        <div className="file-dummy" id="file_dummy">
          <div className="default" id="upload_file_text">Hier klicken um ein Dokument hochzuladen</div>
        </div>
      </div>
      <div className="tac">
        <button className="parts_upload_btn cp" type="submit" onClick={handlePartsChecker}>Parts Checker</button>
        <div className="calculation_text">Laden Sie hier Ihr Gutachten oder die Schadenskalkulation hoch</div>
      </div>
    </div>
  </div>
  )
}

export default UploadPartsFile;
