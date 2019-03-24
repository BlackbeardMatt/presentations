import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateNonsenseChatService } from './services/corporate-nonsense-chat.service';
import { CorporateNonsenseService } from './services/corporate-nonsense.service';
import { CorporateCardComponent } from './components/corporate-card/corporate-card.component';
import { MaterialModule } from '../material.module';
import { NonsenseCardComponent } from './components/nonsense-card/nonsense-card.component';
import { CorporateNonsenseRxjsService } from './services/corporate-nonsense-rxjs.service';

const declarations = [
    CorporateCardComponent,
    NonsenseCardComponent,
];

const providers = [
    CorporateNonsenseChatService,
    CorporateNonsenseService,
    CorporateNonsenseRxjsService
];

@NgModule(({
    imports: [CommonModule, MaterialModule],
    declarations: declarations,
    exports: [ ...declarations ]
}))
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: providers
        };
    }
}
