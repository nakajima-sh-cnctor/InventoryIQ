import type { Product } from '~/interfaces/ProductInterFace'
import { isValidData } from '~/utils/isValidData'

const API_PATH = 'https://sheets.googleapis.com/v4/spreadsheets'

// 商品情報シートからデータを取得
export const getProducts = async (): Promise<Product[]> => {
  const config = useRuntimeConfig()
  const response = await fetch(`${API_PATH}/${config.public.googleSheetId}/values/商品情報?key=${config.public.googleSheetApiKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return dataFormat(data)
}

// データの形式をProduct型に変換
const dataFormat = (data: unknown): Product[] => {
  if (!isValidData(data)) {
    throw new Error('Invalid data format')
  }
  return data.values.slice(1).map((item: string[]) => ({
    id: item[0],
    name: item[1],
    category: item[2],
    roast: item[3],
    volume: parseInt(item[4], 10),
    feature: item[5],
    price: parseFloat(item[6].replace('¥', '').replace(',', '')),
    registrationDate: item[7],
  }))
}
