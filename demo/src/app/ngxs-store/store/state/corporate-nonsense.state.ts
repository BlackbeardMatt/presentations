import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  AddNonsense,
  GetCorporateNonsense,
  GetSingleNonsense,
  StartCorporateNonsenseStream,
  RemoveNonsense
} from '../actions/corporate-nonsense.actions';
import { Phrase } from 'src/app/shared/models/phrase.model';
import { CorporateNonsenseChatService } from 'src/app/shared/services/corporate-nonsense-chat.service';


export class CorporateNonsenseStateModel {
  nonsense: Phrase[];
  nonsenseStarted: boolean;
}

export const corporateNonsenseStateModelDefault = {
  nonsense: [],
  nonsenseStarted: false
};

@State<CorporateNonsenseStateModel>({
  name: 'corporateNonsenseState',
  defaults: corporateNonsenseStateModelDefault
})
export class CorporateNonsenseState {
  nonsenseStream$: Observable<any>;

  constructor(private nonsenseService: CorporateNonsenseChatService) { }

  @Selector()
  static getNonsense(state: CorporateNonsenseStateModel) {
    return state.nonsense;
  }

  @Action(GetSingleNonsense)
  getSingleNonsense(
    { dispatch }: StateContext<CorporateNonsenseStateModel>
  ) {
    this.nonsenseService.getSingleNonsense().subscribe(
      (phrase: Phrase) => {
        dispatch(new AddNonsense(phrase.phrase));
      },
      (error) => {
        console.log('There was an error');
      }
    );
  }

  @Action(GetCorporateNonsense)
  getCorporateNonsense(
    { getState, dispatch }: StateContext<CorporateNonsenseStateModel>,
    { payload }: GetCorporateNonsense
  ) {
    const state = getState();
    if (!state.nonsenseStarted) {
      dispatch(new StartCorporateNonsenseStream);
    }
    this.nonsenseService.getMultipleNonsense(payload);
  }

  @Action(AddNonsense)
  addNonsense(
    { getState, patchState }: StateContext<CorporateNonsenseStateModel>,
    { payload }: AddNonsense
  ) {
    const state = getState();
    const corporateNonsense = state.nonsense.slice();
    corporateNonsense.push({
      phrase: payload
    });
    patchState({
      nonsense: corporateNonsense
    });
  }

  @Action(RemoveNonsense)
  removeNonsense(
    { getState, patchState }: StateContext<CorporateNonsenseStateModel>,
    { payload }: RemoveNonsense
  ) {
    const state = getState();
    const corporateNonsense = state.nonsense.slice();
    const index = corporateNonsense.findIndex((element: Phrase) => {
      return element.phrase === payload.phrase;
    });
    if (index > -1) {
      corporateNonsense.splice(index, 1);
    }

    patchState({
      nonsense: corporateNonsense
    });
  }

  @Action(StartCorporateNonsenseStream)
  startCorporateNonsenseStream({ getState, patchState, dispatch }: StateContext<CorporateNonsenseStateModel>) {
    this.nonsenseStream$ = this.nonsenseService.getCorporateNonsenseStream();
    this.nonsenseStream$.subscribe((nonsense: string) => {
      dispatch(new AddNonsense(nonsense));
    });
    patchState({
      nonsenseStarted: true
    });
  }
}
