import { Component, OnInit } from '@angular/core';
import { AppConst } from 'src/app/constants/appconst';

@Component({
  selector: 'app-image-update',
  templateUrl: './image-update.component.html',
  styleUrls: ['./image-update.component.css']
})
export class ImageUpdateComponent{
  private serverPath: string = AppConst.serverPath;

  afuConfig = {
    uploadAPI: {
      url: this.serverPath + "/image/add?username=admin"
    }
};
  constructor (){
   
  }

  
}
