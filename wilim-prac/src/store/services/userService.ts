import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/user';

const URL = "";

export const UserService = {
    getUser: createAsyncThunk(
        'user/getUser',
        async (uid: string, thunkApi) => {
            try {
                const data: User = await fetch(URL).then(res => res.json());
                return data;
            } catch(err) {
                console.log(err);
                return;
            }
        }
    )
}