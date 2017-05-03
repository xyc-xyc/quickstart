import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<p-treeTable [value]="files">
    <p-header>Basic</p-header>
    <p-column field="name" header="Name"></p-column>
    <p-column field="size" header="Size"></p-column>
    <p-column field="type" header="Type"></p-column>
</p-treeTable>
`,
})
export class AppComponent  { 
    count  = 0; 
    clk = () => {
      this.count ++;
    }

    files = 
    [  
        {  
            "data":{  
                "name":"Documents",
                "size":"75kb",
                "type":"Folder"
            },
            "children":[
                {  
                    "data":{  
                        "name":"Work",
                        "size":"55kb",
                        "type":"Folder"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Expenses.doc",
                                "size":"30kb",
                                "type":"Document"
                            }
                        },
                        {  
                            "data":{  
                                "name":"Resume.doc",
                                "size":"25kb",
                                "type":"Resume"
                            }
                        }
                    ]
                },
                {  
                    "data":{  
                        "name":"Home",
                        "size":"20kb",
                        "type":"Folder"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Invoices",
                                "size":"20kb",
                                "type":"Text"
                            }
                        }
                    ]
                }
            ]
        },
        {  
            "data":{  
                "name":"Pictures",
                "size":"150kb",
                "type":"Folder"
            },
            "children":[  
                {  
                    "data":{  
                        "name":"barcelona.jpg",
                        "size":"90kb",
                        "type":"Picture"
                    }
                },
                {  
                    "data":{  
                        "name":"primeui.png",
                        "size":"30kb",
                        "type":"Picture"
                    }
                },
                {  
                    "data":{  
                        "name":"optimus.jpg",
                        "size":"30kb",
                        "type":"Picture"
                    }
                }
            ]
        }
    ]


}
