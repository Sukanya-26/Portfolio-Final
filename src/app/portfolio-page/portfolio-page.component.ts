import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css'
})
export class PortfolioPageComponent {
  projectData = [
    {
      id:1,
      projectName: 'Simon Game',
       projectNumber: '1', projectDescription: 'This is a fun visual game' ,
       projectTech:'HTML CSS JS',
       projectLink:"/www.google.com",
       projectSummary:"Pattern remenbering game",
    },
    { id:2,projectName: 'Library Management System', projectNumber: '2', projectDescription: 'This is management system for libraries' ,projectTech:'SQL',projectLink:"/www.google.com", projectSummary:"This also calculates fine and other data is handled",},
    { id:3,projectName: 'Dice Game', projectNumber: '3', projectDescription: 'This is a game of randomness' ,projectTech:'React',projectLink:"/www.google.com", projectSummary:"2 player game based on randomness and luck",},
];
  constructor(private titleService: Title){
    this.titleService.setTitle("Suaknya's portfolio");
  }

}
