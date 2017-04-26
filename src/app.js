import './app.scss';

import { module, component, browserPlatform, browserModule, appProdMode, browserAnimationModule, mdButton} from 'ng2es6helper';

import { MaterialModule, MdDialogModule, MdDialog } from '@angular/material';
console.log(MdDialog);
const componentProp = { 
    selector: 'app', 
    template: `
        <button md-button (click)="openDialog()">Open dialog</button>
    `,
    service: [[MdDialog]]
};

const appComponent = component(
    componentProp,
    class appComponent {
        constructor(mdDialog) {
            this.dialog = mdDialog;
        }

        openDialog() {
            this.dialog.open(DialogComponent);
        }
    }
);

const DialogComponent = component(
    {
        selector: 'mydialog',
        template: `
hi
        `
    },
    class dialogComponent {
        constructor() {
            
        }
    }
);

const appModuleProp = {
    imports: [mdButton],
    declarations: [ appComponent, DialogComponent ],
    exports: [appComponent, DialogComponent],
    providers: [MdDialog],
    entryComponents: [appComponent]
};

const appmainModule = module(appModuleProp, 
    class appmainModule {
        constructor() {

        }
    }
);

const moduleProp = {
    imports: [ 
        browserModule,
        appmainModule,
        browserAnimationModule,
        MdDialogModule,
        MaterialModule
    ],
    entryComponents: [DialogComponent],
    bootstrap: [ appComponent ]
};

const mainModule = module(moduleProp, 
    class mainModule {
        constructor() {

        }
    }
);


document.addEventListener('DOMContentLoaded', function() {
  browserPlatform().bootstrapModule(mainModule);
});