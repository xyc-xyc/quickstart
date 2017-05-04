import { Component } from '@angular/core';
import { NodeService } from './service/NodeService';
import { TreeNode } from 'primeng/primeng';

@Component({
    selector: 'my-app',
    template: `
<p-treeTable [value]="files">
    <p-header>Basic</p-header>
    <p-column field="name" header="Name"></p-column>
    <p-column field="size" header="Size"></p-column>
    <p-column field="type" header="Type"></p-column>
</p-treeTable>
<button pButton type="button" label="Add" (click)="add()"></button>
<button pButton type="button" label="Delete" (click)="delete()"></button>

`,
    providers: [NodeService]
})
export class AppComponent {

    constructor(private nodeService: NodeService) { }

    add() {
        let newrow: TreeNode = <TreeNode>{
            data: {
                name: "Score",
                size: "15kb",
                type: "Document"
            }
        };

        this.files.push(newrow)
    }

    delete() {
        this.files.pop()
    }

    files: TreeNode[];

    ngOnInit() {
        this.nodeService.getFilesystem().subscribe(f => this.files = f);
    }

}
