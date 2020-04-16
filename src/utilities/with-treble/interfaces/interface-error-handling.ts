export default interface IErrorHandling{

    (
        Component: React.ComponentClass | React.FunctionComponent,
        options?: {
          store?:
            {
              data: {
                  action: string,
                  state: {
                      [key: string]: any
                  }
              }[]
          }
        }): void
}