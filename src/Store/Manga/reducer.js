import { createReducer } from "@reduxjs/toolkit"
import actions from './actions'


const { captureChapter, captureManga, delete_chapter } = actions

const initialstate = {
   manga:[],
   chapter:[],
}

const reducer = createReducer(
    initialstate,
    (builder) => builder
   .addCase(
            captureManga.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    manga: action.payload.manga
                }
                return newState
            }
        )
      .addCase(
            captureChapter.fulfilled,
            (state,action)=>{
                let newState = {
                    ...state,
                    chapter: action.payload.chapter
                }
                return newState
            }
        ) 
        .addCase(
            delete_chapter.fulfilled,
            (state, action) => {
                let newState = {
                    chapter: [],
                    manga: []

                }
                return newState
            }
        )
)
export default reducer  