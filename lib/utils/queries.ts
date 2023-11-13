const toIdObjects = (ids: string[]) => ids.map(id => ({ id }))

export const connect = (ids: string[]) => {
  return {
    connect: toIdObjects(ids),
  }
}

export const set = (ids: string[]) => {
  return {
    set: toIdObjects(ids),
  }
}
