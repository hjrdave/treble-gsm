export default interface IWithTreble {
    (Component: React.ComponentClass | React.FunctionComponent,
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
      }): React.ComponentClass | React.FunctionComponent | undefined
  }