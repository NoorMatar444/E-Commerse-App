export interface AddressType {
  status: string
  message: string
  data: Daum[]
}

export interface Daum {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}
