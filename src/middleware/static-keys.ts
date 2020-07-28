/*
    A middleware that assignes static keys to Store object lists
    - Feature.key must be set to true to activate this.
    - Assigns the property trebleKey with a index value
*/

const staticKeys = (dispatchValue: { [key: string]: any }[]) => {
  //add list key
  let arrayObjectsWithTrebleKey = dispatchValue?.map(
    (stateItem: any, index: number) => {
      return { ...stateItem, trebleKey: index };
    }
  );
  return arrayObjectsWithTrebleKey;
};

export default staticKeys;
