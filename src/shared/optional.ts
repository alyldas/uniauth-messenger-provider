export function optionalProp<TKey extends string, TValue>(
  key: TKey,
  value: TValue | undefined,
): { readonly [K in TKey]?: TValue } {
  return (value === undefined ? {} : { [key]: value }) as { readonly [K in TKey]?: TValue }
}
