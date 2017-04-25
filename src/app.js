import { module, component, browserPlatform, browserModule, appProdMode, browserAnimationModule, mdButton} from 'ng2es6helper';

const componentProp = { 
    selector: 'app', 
    template: `
<div class="example-container">
  <h3>Normal Buttons</h3>
  <div class="button-row">
    <button md-button>Flat button</button>
    <button md-raised-button>Raised button</button>
    <button md-fab><md-icon>check</md-icon></button>
    <button md-mini-fab><md-icon>check</md-icon></button>
  </div>

  <h3>Link Buttons</h3>
  <div class="example-button-row">
    <a md-button routerLink=".">Flat button</a>
    <a md-raised-button routerLink=".">Raised button</a>
    <a md-fab routerLink="."><md-icon>check</md-icon></a>
    <a md-mini-fab routerLink="."><md-icon>check</md-icon></a>
  </div>
</div>
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
    imports: [mdButton],
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
        appmainModule,
        browserAnimationModule
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
  browserPlatform().bootstrapModule(mainModule);
});