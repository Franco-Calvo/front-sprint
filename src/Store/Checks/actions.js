import { createAction  } from "@reduxjs/toolkit";

let captureChecks = createAction(
    "captureChecks",
    ({categories}) => {
        console.log(categories)
        return { payload: {
            category: categories
        }}
    }
)

const actions = {captureChecks};
export default actions