import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction
} from "@reduxjs/toolkit"
import profileReducer from "@stores/slices/profileSlices"
import cartReducer from "@stores/slices/cartSlices"
import countReducer from "@stores/slices/countSlices"
import CryptoJS from "crypto-js"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform
} from "redux-persist"
import storage from "redux-persist/lib/storage"

// const encrypt = createTransform(
//   (inboundState, key) => {
//     if (!inboundState) return inboundState
//     const cryptedText = CryptoJS.AES.encrypt(
//       JSON.stringify(inboundState),
//       process.env.NEXT_PUBLIC_S_KEY
//     )

//     return cryptedText.toString()
//   },
//   (outboundState, key) => {
//     if (!outboundState) return outboundState
//     const bytes = CryptoJS.AES.decrypt(
//       outboundState,
//       process.env.NEXT_PUBLIC_S_KEY
//     )
//     const decrypted = bytes.toString(CryptoJS.enc.Utf8)
//     return JSON.parse(decrypted)
//   }
// )

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["profile"]
  // transforms: [encrypt]
}

const rootReducer = combineReducers({
  profile: profileReducer,
  cart: cartReducer,
  count: countReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

// export const store = configureStore({
//   reducer: { profile: profileReducer, cart: cartReducer, count: countReducer },
//   devTools: process.env.NODE_ENV !== "production"
// })

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store

export const persistor = persistStore(store)
