export function tsStringLiteral(item: unknown) {
  return `"${item}"`;
}

export function tsUnion(arr: unknown[]) {
  return arr.join(" | ");
}

export function tsStringUnion(arr: unknown[]) {
  return tsUnion(arr
    .map(tsStringLiteral));
}
