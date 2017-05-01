import './app.scss';

import {mdModule, mdDialogModule, mdDialog, ngmodule, component, browserPlatform, browserModule, appProdMode, browserAnimationModule, mdButton} from 'ng2es6helper';
console.log(mdDialog);
const componentProp = { 
    selector: 'app', 
    template: `
        <button md-button (click)="openDialog()">Open dialog</button>
    `,
    service: [[mdDialog]]
};

const appComponent = component(
    componentProp,
    class appComponent {
        constructor(mdDialog) {
            this.dialog = mdDialog;
        }

        openDialog() {
            debugger
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
    providers: [mdDialog],
    entryComponents: [appComponent]
};

const appmainModule = ngmodule(appModuleProp, 
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
        mdDialogModule,
        mdModule
    ],
    entryComponents: [DialogComponent],
    bootstrap: [ appComponent ]
};

const mainModule = ngmodule(moduleProp, 
    class mainModule {
        constructor() {

        }
    }
);


document.addEventListener('DOMContentLoaded', function() {
  browserPlatform().bootstrapModule(mainModule);
});