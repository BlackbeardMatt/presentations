import { Phrase } from 'src/app/models/phrase.model';

export class StartCorporateNonsenseStream {
    static readonly type = '[Corporate Nonsense] Starting Corporate Nonsense';
}

export class AddNonsense {
    static readonly type = '[Corporate Nonsense] Adding Nonsense';
    constructor(public readonly payload: string) {}
}

export class RemoveNonsense {
    static readonly type = '[Corporate Nonsense] Removing Nonsense';
    constructor(public readonly payload: Phrase) { }
}

export class GetCorporateNonsense {
    static readonly type = '[Corporate Nonsense] Getting Corporate Nonsense';
    constructor(public readonly payload: number) { }
}

export class GetSingleNonsense {
    static readonly type = '[Corporate Nonsense] Getting Single Corporate Nonsense';
}
