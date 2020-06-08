export default interface IWithTreble {
    (Component: React.ComponentClass | React.FunctionComponent | any,
      options?: {
        reactClass?: boolean,
        store?:
          {
            data: {
                action: string,
                state: {
                    [key: string]: any
                },
                features?: {
                    persist?: boolean
                }
            }[],
            scope?: React.Context<never[]>
        }
      }): any
  }

  //React.ComponentClass | React.FunctionComponent