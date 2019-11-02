import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  filesToUpload: Array<File>;

  constructor() {
    this.filesToUpload = [];
  }

  upload(username) {
    this.makeFileRequest("http://localhost:8181/image/add?username="+username, [], this.filesToUpload).then((result) => {
      console.log(result);
    }, (error) => {
      console.error(error);
    });
  }

  modify(username) {
    console.log(this.filesToUpload);
    if (this.filesToUpload!=null) {
      this.makeFileRequest("http://localhost:8181/image/update/image?username=" + username, [], this.filesToUpload).then((result) => {
        console.log(result);
      }, (error) => {
        console.error(error);
      });
    }
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            console.log("image upload successful!");
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      // xhr.setRequestHeader("Authorization", "Bearer "+localStorage.getItem("token"));
      xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken") );
      xhr.send(formData);
    });
  }
}
