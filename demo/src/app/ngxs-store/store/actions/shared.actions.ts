export class HttpFailure {
    static readonly type = '[Falure] Http Failure';
    constructor(public readonly payload: { error: string, location: string }) { }
}
