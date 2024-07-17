import {configureStore} from "@reduxjs/toolkit";
import HomeItemsSlice from "./HomeItemsSlice";
import BagItemsSlice from "./BagItemsSlice";
import LoaderSlice from "./LoaderSlice";

const MyntraStore = configureStore({
    reducer:{
        HomeItems:HomeItemsSlice.reducer,
        BagItems:BagItemsSlice.reducer,
        LoaderState:LoaderSlice.reducer,
    }
});

export default MyntraStore;