import { Component, OnInit } from '@angular/core';
import { NodeModel } from './node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootNode: NodeModel = {
    name: 'Root',
    type: 'unset',
    children: []
  };
  isAddRootFolderVisible = true;

  // Function to add a folder to the root node
  addFolderToRoot(): void {
    const folder: NodeModel = {
      name: 'New Folder',
      type: 'folder',
      children: []
    };

    // Ensure rootNode.children is initialized as an array before pushing to it
    this.rootNode.children = this.rootNode.children || [];
    this.rootNode.children.push(folder);
    this.isAddRootFolderVisible = false;
  }
  // onDeleteNode(index: number): void {
  //   if (this.rootNode.children) {
  //     this.rootNode.children.splice(index, 1);
  //   }
  // }
  onDeleteNode(node: NodeModel): void {
    if (this.rootNode.children && this.rootNode.children.length > 0) {
      const index = this.rootNode.children.indexOf(node);
      if (index !== -1) {
        this.rootNode.children.splice(index, 1);
      }
    }
  }
}
// ------------

//   rootNode: NodeModel = {
//     name: 'Root',
//     type: 'folder',
//     children: []
//   };

//   // Function to add a folder or file to the specified parent node
//   addChild(parent: NodeModel, type: 'folder' | 'file'): void {
//     const child: NodeModel = {
//       name: 'New ' + type.charAt(0).toUpperCase() + type.slice(1),
//       type: type,
//       children: []
//     };
//     parent.children = parent.children || [];

//     parent.children.push(child);
//   }
// }
