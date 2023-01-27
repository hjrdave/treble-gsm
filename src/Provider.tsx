/*
  Context Provider
  Provider that consumes Reducer hook and provides state to wrapped children.  
*/

import React from "react";
interface Props {
    Context: React.Context<any[]>,
    children: JSX.Element[] | JSX.Element,
    reducer: any,
    initialState: { [key: string]: any }
}
export default function Provider({ Context, children, reducer, initialState }: Props) {


    const [state, dispatch] = React.useReducer(reducer, initialState);
    const subscribeData = [state, dispatch];

    return (
        <>
            <Context.Provider value={subscribeData}>
                {children}
            </Context.Provider>
        </>
    )

}