import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

//   @Output() modalClosed = new EventEmitter<void>();

//   projectData = [
//     {
//       id:1,
//       projectName: 'Simon Game',
//        projectNumber: '1', projectDescription: 'This is a fun visual game' ,
//        projectTech:'HTML CSS JS',
//        projectLink:"/www.google.com",
//        projectSummary:"Pattern remenbering game",
//     },
//     { id:2,projectName: 'Library Management System', projectNumber: '2', projectDescription: 'This is management system for libraries' ,projectTech:'SQL',projectLink:"/www.google.com", projectSummary:"This also calculates fine and other data is handled",},
//     { id:3,projectName: 'Dice Game', projectNumber: '3', projectDescription: 'This is a game of randomness' ,projectTech:'React',projectLink:"/www.google.com", projectSummary:"2 player game based on randomness and luck",},
// ];
//   closeModal() {
//     this.modalClosed.emit(); // Emit event to indicate the modal should close
//   }

@Output() modalClosed = new EventEmitter<void>();
projectData = [
  {
    id: 1,
    projectName: 'Simon Game',
    projectDescription: 'This is a fun visual game',
    projectTech: 'HTML, CSS, JS',
    projectLink: "https://www.google.com",
    projectSummary: "Pattern remembering game",
  },
  {
    id: 2,
    projectName: 'Library Management System',
    projectDescription: 'This is a management system for libraries',
    projectTech: 'SQL',
    projectLink: "https://www.google.com",
    projectSummary: "Calculates fines and manages library data.",
  },
  {
    id: 3,
    projectName: 'Dice Game',
    projectDescription: 'This is a game of randomness',
    projectTech: 'React',
    projectLink: "https://www.google.com",
    projectSummary: "2 player game based on randomness and luck.",
  },
];


// selectedProject: any = null;
// isModalVisible = false;

// openModal(project: any) {
//   this.selectedProject = project;
//   this.isModalVisible = true;
// }

// closeModal() {
//   this.isModalVisible = false;
//   this.selectedProject = null;
//   this.modalClosed.emit(); // Emit event to indicate the modal should close
//}

selectedProject: any = null;
  isModalVisible = false;

  openModal(project: any) {
    this.selectedProject = project;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.selectedProject = null;
    this.modalClosed.emit(); // Emit event to indicate the modal should close
  }
}

