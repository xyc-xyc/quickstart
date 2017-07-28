import { Component , Input } from '@angular/core';
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
<my-btn label-text="{{label1}}" (click)="mybtnclk()"></my-btn>
`,
    providers: [NodeService]
})
export class AppComponent {

    constructor(private nodeService: NodeService) { }

    add() {
        let newrow: TreeNode = <TreeNode>{
            data: {
                name: "Test",
                size: "15kb",
                type: "Document"
            }
        };

        this.files.push(newrow)
    }

    delete() {
        this.files.pop()
    }

    label1 : String = "click to change";

    mybtnclk() {
        this.label1 = "changed!!!";
    }

    files: TreeNode[];

    ngOnInit() {
        this.nodeService.getFilesystem().subscribe(f => this.files = f);
    }

}
