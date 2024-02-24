import { Component } from '@angular/core';
import { setParameters } from '../parameters';
import { MadLibsModel } from '../Model/jsModel';

@Component({
  selector: 'app-js-parameters',
  templateUrl: './js-parameters.component.html',
  styleUrls: ['./js-parameters.component.css']
})
export class JsParametersComponent {

  public showCommp: boolean = false;
  public theModel : MadLibsModel = new MadLibsModel("","","","","", true);
  
  constructor(

    ) {

    }

  public submit(){  
    this.showCommp = true;  
    this.theModel.madLibs = true;
    setParameters(this.theModel);
  }

}
