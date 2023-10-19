import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NodeModel } from '../node.model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  @Input() node: NodeModel = { name: '', type: 'file', children: [] };

  // removeNode(): void {
  //   // Check if node exists before accessing its properties
  //   // if (this.node) {
  //   //   // Add logic here to remove the node
  //   // }
  // }
  // @Input() node: NodeModel;
  @Output() delete = new EventEmitter<NodeModel>();

  deleteNode(): void {
    // Emit the node to be deleted
    this.delete.emit(this.node);
  }
  // onDeleteNode(node: NodeModel): void {
  //   if (this.rootNode.children) {
  //     const index = this.rootNode.children.indexOf(node);
  //     if (index !== -1) {
  //       this.rootNode.children.splice(index, 1);
  //     }
  //   }
  // }
}
