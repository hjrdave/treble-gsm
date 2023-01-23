/**
 * This is the new API for TrebleGSM V5
 * */
import React from 'react';

export default class TrebleGSM {
    public Store: (props: React.ComponentProps<any>) => JSX.Element;
    public Provider: (props: React.ComponentProps<any>) => JSX.Element;
    public useStore: () => void;

    public constructor() {

        const Context = React.createContext(null);

        this.Store = (props) => <>{props.children} </>;
        this.Provider = (props: { children: JSX.Element | JSX.Element[] }) => (
            <>{/*Provider comp*/}</>
        );
        this.useStore = () => null;
    }
}