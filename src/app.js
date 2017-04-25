import 'core-js';
import 'zone.js/dist/zone.js';
import 'zone.js/dist/long-stack-trace-zone'

import { module, component, browser, rModule, browserModule } from 'ng2es6helper';

const componentProp = { 
    selector: 'app', 
    template: `
    <h1>HELLOW</h1>
    `
};

const appComponent = component(
    componentProp,
    class appComponent {
        constructor() {

        }
    }
);

const appModuleProp = {
    declarations: [ appComponent ]
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
        appmainModule
    ],
    bootstrap: [ appComponent ]
};

const mainModule = module(moduleProp, 
    class mainModule {
        constructor() {

        }
    }
);


document.addEventListener('DOMContentLoaded', function() {
  browser().bootstrapModule(mainModule);
});