/*
Interface for buildReducer function
*/

export default interface IBuildReducer {
  (
    store: {
      action: string;
      state: {
        [key: string]: any,
      };
      features?: {
        persist?: boolean,
        call?: (state: any) => void,
        check?: (state: any) => boolean,
        process?: (state: any) => any,
        callback?: (state: any) => void
      }
    }[]
  ): any
}