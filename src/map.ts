export const map = <T> (callback: (T) => void) => (array: any[]) => array.map(callback)

export default map