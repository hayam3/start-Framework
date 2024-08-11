import { Component } from '@angular/core';
import { Interface } from 'node:readline';

interface Imges{
  imgSrc:string;
}


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
portfolioList:Imges[]=[
  {imgSrc:'../../assets/imges/poert1.png'},
  {imgSrc:'../../assets/imges/port2.png'},
  {imgSrc:'../../assets/imges/port3.png'},
  {imgSrc:'../../assets/imges/poert1.png'},
  {imgSrc:'../../assets/imges/port2.png'},
  {imgSrc:'../../assets/imges/port3.png'},
]

isClicked:boolean=false;
imgSrc:string="";



open(Src:string){
  this.isClicked=true;
  this.imgSrc=Src;
}

close(){
  this.isClicked=false;
}
}
