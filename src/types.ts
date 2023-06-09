export type Product = {
  id?: number
  name: string
  amount: number
  orderId?: number
};

export type User = {
  id?: number
  username: string
  classe: string
  level: number
  password: string
};

export type Order = {
  id?: number
  userId: number
  productsIds: Array<number>
};