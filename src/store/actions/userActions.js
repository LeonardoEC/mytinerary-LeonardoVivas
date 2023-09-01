import { createAction } from "@reduxjs/toolkit";

export const user_photo = createAction(
    'user_phoro',
    (obj) => {

        console.log(obj.photo)
        return {
            payload: {
                photo: obj.photo
            }
        }
    }
)