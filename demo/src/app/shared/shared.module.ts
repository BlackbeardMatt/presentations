import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateNonsenseChatService } from './services/corporate-nonsense-chat.service';
import { CorporateNonsenseService } from './services/corporate-nonsense.service';

const declarations = [

];

const providers = [
    CorporateNonsenseChatService,
    CorporateNonsenseService
];

@NgModule(({
    imports: [CommonModule],
    declarations: declarations,
    providers: providers,
    exports: [ ...providers, ...declarations ]
}))
export class SharedModule { }
