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
        enableMiddleware?: boolean,
        append?: boolean,
        limit?: number
      }
    }
  ): {
    [key: string]: any
  }
}