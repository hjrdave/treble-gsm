/*
Interface for Treble Reducer
*/

export default interface IReducer {
  (
    state: {
      [key: string]: any,
      subscribeID: number
    },
    action: {
      type: string,
      [key: string]: any,
      options?: {
        disableMiddleware?: boolean,
        limit?: number
      }
    }
  ): {
    [key: string]: any
  }
}