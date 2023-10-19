import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NodeModel } from '../node.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {
  //   @Input() node: NodeModel = { name: '', type: 'folder', children: [] };
  //   @Output() addChildEvent: EventEmitter<string> = new EventEmitter<string>();
  //   editing = false;
  //   nodeName: string = '';

  //   toggleEditing(): void {
  //     this.editing = !this.editing;
  //     if (!this.editing) {
  //       this.confirmEdit();
  //     }
  //   }

  //   confirmEdit(): void {
  //     this.node.name = this.nodeName;
  //     this.editing = false;
  //   }

  //   cancelEdit(): void {
  //     this.editing = false;
  //     this.nodeName = this.node.name;
  //   }

  //   addChild(type: string): void {
  //     if (this.nodeName.trim() !== '') {
  //       this.addChildEvent.emit(type);
  //       this.toggleEditing();
  //     }
  //   }

  //   removeNode(): void {
  //     // Remove node logic here
  //   }

  //   toggleAddingChild(): void {
  //     // Add logic to handle adding child nodes here
  //   }
  // }

  // @Input() node: NodeModel;
  @Input() node!: NodeModel;
  addingChild = false;
  childName: string = '';

  toggleAddingChild(): void {
    this.addingChild = !this.addingChild;
  }

  addChild(type: 'file' | 'folder'): void {
    if (!this.node.children) {
      this.node.children = [];
    }

    if (this.childName.trim() === '') {
      return;
    }

    const newNode: NodeModel = {
      name: this.childName.trim(),
      type: type,
      children: []
    };

    this.node.children.push(newNode);
    this.addingChild = false;
    this.childName = '';
  }

  removeNode(): void {
    if (this.node && this.node.parent && this.node.parent.children) {
      const index = this.node.parent.children.indexOf(this.node);
      if (index !== -1) {
        this.node.parent.children.splice(index, 1);
      }
    }
  }
}
