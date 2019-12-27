export const filter = (callback: () => void) => (array: any[]) => array.filter(callback)

export default filter