import service from "@configs/interceptor"

interface IDataDetail {
  name: string
  detail: string
}

export interface Datum extends IDataDetail {
  material_type_id: number
  material_id_smartcontract?: number
  model_id?: number
  image: string
  is_active: boolean
  name_type: string
  type: string
  createdAt: Date
  current_time: Date
  id: string
}

export interface Info {}

export interface RootObject {
  status: boolean
  data: Datum[]
  info: Info
}

// new Promise
export const getMaterialTypes = async () => {
  return await service
    .get<RootObject>("/market-place/materials")
    .then((_res) => ({
      status: true,
      data: _res.data.data,
      message: "",
      isActive: false
    })) // statusCode -> 200
    .catch((_err) => ({
      // statusCode -> 400, 401...
      status: false,
      data: null,
      message: "get data failed",
      isActive: false
    }))
}

export const getBuildingTypes = async (data: {
  email: string
  password: string
}) => {
  // market-place/building
  const _data = {
    email: data.email,
    password: data.password
  }

  return await service
    .post<RootObject>("/market-place/materials", {
      ..._data
    })
    .then((_res) => ({
      status: true,
      data: _res.data.data,
      message: "",
      isActive: false
    })) // statusCode -> 200
    .catch((_err) => ({
      // statusCode -> 400, 401...
      status: false,
      data: null,
      message: "get data failed",
      isActive: false
    }))
}
