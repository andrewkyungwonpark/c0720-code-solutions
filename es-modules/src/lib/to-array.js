export default function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

// the export default function named toArray is being defined, passing in one parameter, value
// on line 2, the isArray method on the Array object is being called, passing in 1 argument - value,
// and that is being compared to...value? result of that expression is being returned
