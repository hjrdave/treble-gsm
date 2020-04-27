/*
interface for reducer actions
*/

export default interface IReducerActions{
    'updateHistory': () => object,
    'updateSubscribeID': () => object,
    [key: string]: any | undefined
}