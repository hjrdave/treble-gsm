/*
  Context Provider
  Provider that consumes Reducer hook and provides state to wrapped children.  
*/
import React, { useReducer } from "react";
import subscribeAPI from "../subscribe";
import storeUtilities from '../utilities';
import { IStoreItem, IModuleData } from '../interfaces';

interface IProvider {
  reducer: any,
  initialState: { [key: string]: any },
  children: JSX.Element[] | JSX.Element,
  scope: any,
  store: IStoreItem[],
  modules: IModuleData[]
}

const Provider = ({ reducer, initialState, children, scope, store, modules }: IProvider) => {
  const Context = scope;
  const [storeItems, dispatch] = useReducer(reducer, initialState);

  //store data that will be made accessible via the useTreble hook
  const trebleHookOutput = [storeItems, subscribeAPI(dispatch, modules), storeUtilities(store)]

  return (
    <>
      <Context.Provider value={trebleHookOutput}>

        {/** Render Module Components */}
        {
          modules?.map((module, index: number) => {
            const RenderComponent: any = module.renderComponent;
            return (
              <React.Fragment key={index}>
                {
                  (RenderComponent) ?
                    <RenderComponent /> : null
                }
              </React.Fragment>
            )
          })
        }

        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
