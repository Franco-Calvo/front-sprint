import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./Author/reducer";
import checkReducer from "./CheckAuthor/reducer";
import mangasReducer from "./MangasAuthor/reducer";
import alertReducer from "./Alert/reducer";
import textReducer from "./Text/reducer";
import eventReducer from "./Events/reducer";
import checksReducer from "./Checks/reducer";
import mangaReducer from './Manga/reducer';


export const store = configureStore({
  reducer: {
    alert: alertReducer,
    checkboxAuthor: checkReducer,
    Author: authorReducer,
    MangasAuthor: mangasReducer,
    text: textReducer,
    events: eventReducer,
    checks: checksReducer,
    mangas: mangaReducer,
  
  },
});