'use client';

import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../reducers/AuthSlice';
import PwgnsSlice from '../reducers/PwgnsSlice';
import BlueConnectsSlice from '../reducers/BlueConnectsSlice';
import PlanSlice from '../reducers/PlanSlice'
import CoinSlice from '../reducers/CoinSlice'
import ProfileSlice from '../reducers/ProfileSlice'
import SearchHistroySlice from '../reducers/SearchHistroySlice'

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        pwg: PwgnsSlice,
        blueConnects: BlueConnectsSlice,
        planst: PlanSlice,
        coinData: CoinSlice,
        profile: ProfileSlice,
        his: SearchHistroySlice
    },
    devTools: process.env.NODE_ENV,
});

export default store;
