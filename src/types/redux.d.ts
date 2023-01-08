import { dispatch, appReducer } from 'redux/store'

// Common
import { ListenerEffectAPI, TypedStartListening } from '@reduxjs/toolkit'

export type IRootState = ReturnType<typeof appReducer>

export type TAppDispatch = typeof dispatch

// extra function to pass additional args
export interface IAppExtraArg {
  getCommonData: string
}

export type TAppStartListening = TypedStartListening<IRootState, TAppDispatch>
export type TAppListenerAPI = ListenerEffectAPI<
  IRootState,
  TAppDispatch,
  IAppExtraArg
>
export interface IAppThunkAPI {
  state: IRootState
  extra: IAppExtraArg
}
