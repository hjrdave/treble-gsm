/*
interface for reducer actions
*/

export default interface IReducerActions{
    'updateSubscribeID': () => object,
    [key: string]: any | undefined
}