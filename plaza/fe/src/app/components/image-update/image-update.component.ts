import { Component, OnInit } from '@angular/core';
import { AppConst } from 'src/app/constants/appconst';

@Component({
  selector: 'app-image-update',
  templateUrl: './image-update.component.html',
  styleUrls: ['./image-update.component.css']
})
export class ImageUpdateComponent {
   serverPath: string = AppConst.serverPath;
   username = "admin";

  //   afuConfig = {
  //     uploadAPI: {
  //       url: this.serverPath + "/image/add?username=admin"
  //     }
  // };

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.jpeg",
    maxSize: "1",
    uploadAPI: {
      url: this.serverPath + "/api/image/add?username=" + this.username,
      method: "POST"
    },
    // theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select File',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  }
  constructor() {

  }


}
