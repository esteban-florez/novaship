export const connect = (ids: string[]) => {
  return {
    connect: ids.map(id => ({ id })),
  }
}
