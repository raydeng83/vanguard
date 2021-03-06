import { Component, OnInit } from '@angular/core';
import { AppConst } from 'src/app/constants/appconst';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-image-update',
  templateUrl: './image-update.component.html',
  styleUrls: ['./image-update.component.css']
})
export class ImageUpdateComponent {
   serverPath: string = AppConst.serverPath;
   username = localStorage.getItem('amSessionUsername');

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
  constructor(private helperService: HelperService) {

  }

  postProcessingUpload($event) {
    console.log($event);
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  ngOnInit(): void {
    this.helperService.checkAMSession();

    this.scrollToTop();
  }
}
