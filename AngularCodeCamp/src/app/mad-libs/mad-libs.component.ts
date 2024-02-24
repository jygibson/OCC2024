import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mad-libs',
  templateUrl: './mad-libs.component.html',
  styleUrls: ['./mad-libs.component.css']
})
export class MadLibsComponent {

  public madLibs: boolean = false;
  public properNoun: string = "";
  public noun: string = "";
  public adjective: string = "";
  public verb: string ="";
  public number: number = 0;
  constructor(

  ) {

  }

  public submit(){    
    this.madLibs = true;
  }

  public reset(){
    this.madLibs = false;
    this.properNoun = "";
    this.noun = "";
    this.adjective = "";
    this.verb = "";
    this.number = 0;
  }

}
