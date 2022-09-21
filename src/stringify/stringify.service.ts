import { ObjectType } from "./types/object.type";
/**
 * - Input        : obj (Object)
 * - Output       : camelCase (string)
 */
export default function stringify(obj: ObjectType): string {
  const str = Object.keys(obj)
    .map((item) => item.toLowerCase().charAt(0).toUpperCase() + item.slice(1))
    .join("");
  return str.charAt(0).toLowerCase() + str.slice(1);
}
