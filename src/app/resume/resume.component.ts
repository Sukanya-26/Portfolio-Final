import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private titleService: Title,private renderer: Renderer2){
    this.titleService.setTitle("Suaknya's Resume");
  }
  downloadFile(){
    const link=this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','/public/assets/course-image-1.jpeg');
    link.setAttribute('download','course-image-1.jpeg');
    link.click();
    link.remove();
  }
}
