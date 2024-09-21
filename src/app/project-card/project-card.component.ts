import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  @Input() projectName: string =""
  @Input() projectNumber: string=""
  @Input() projectDescription: string=""
  @Input() projectTech: string=""
  constructor(private componentFactoryResolver: ComponentFactoryResolver){}
  
  loadChild() {
    console.log("Loading child component...");
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    this.container.clear(); // Clear any existing components

    const modalComponentRef = this.container.createComponent(componentFactory);

    // Subscribe to the modalClosed event to clear the modal
    modalComponentRef.instance.modalClosed.subscribe(() => {
      this.container.clear(); // Remove the modal component from the view
    });
  }
}
