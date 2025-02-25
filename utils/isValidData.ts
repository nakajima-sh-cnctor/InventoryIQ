// データの形式が正しいかを確認
export const isValidData = (data: unknown): data is { values: string[][] } => {
  return typeof data === 'object' && data !== null && 'values' in data
}
