// Common
import { createListenerMiddleware } from '@reduxjs/toolkit'

// Listeners
import { appListeners } from 'redux/slices/app/appListeners'

// Utils

// Types
import { TAppStartListening } from 'types/redux'

export const listenerMiddleware = createListenerMiddleware({
  // extra: { getCommonData },
})

export const startAppListening =
  listenerMiddleware.startListening as TAppStartListening

const listeners = [...appListeners]

listeners.forEach(listener => {
  startAppListening(listener as never) // TODO: figure out type
})
