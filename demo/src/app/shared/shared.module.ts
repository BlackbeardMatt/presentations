import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateNonsenseChatService } from './services/corporate-nonsense-chat.service';
import { CorporateNonsenseService } from './services/corporate-nonsense.service';
import { CorporateCardComponent } from './components/corporate-card/corporate-card.component';
import { NonsenseCardComponent } from '../ngxs-store/components/nonsense-card/nonsense-card.component';
import { MaterialModule } from '../material.module';

const declarations = [
    CorporateCardComponent,
    NonsenseCardComponent,
];

const providers = [
    CorporateNonsenseChatService,
    CorporateNonsenseService
];

@NgModule(({
    imports: [CommonModule, MaterialModule],
    declarations: declarations,
    providers: providers,
    exports: [ ...declarations ]
}))
export class SharedModule { }
