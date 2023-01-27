/**
 * This is the new API for TrebleGSM V5
 * */
import React from 'react';
import Provider from './Provider';

export default class TrebleGSM {
    public Store: (props: React.ComponentProps<any>) => JSX.Element;
    public Provider: (props: React.ComponentProps<any>) => JSX.Element;
    public useStore: () => void;

    public constructor() {

        const Context = React.createContext([]);

        this.Store = (props) => <><p>This is a Store</p> </>;
        this.Provider = (props: { children: JSX.Element | JSX.Element[] }) => (
            <>
                <Provider Context={Context as any} reducer={[]} initialState={this.Store}>
                    {props.children}
                </Provider>
            </>
        );
        this.useStore = () => null;
    }
}