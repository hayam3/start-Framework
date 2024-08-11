import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterEvent, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('navbar') nav!:ElementRef;
@HostListener('window:scroll') onScroll(){

 if(scrollY>100){
  this.nav.nativeElement.style.paddingBlock='10px';
 }else{
  this.nav.nativeElement.style.paddingBlock='25px';
 }

 
}


}
