import { ObjectType } from "./types/object.type";
/**
 * - Input        : obj (Object)
 * - Output       : camelCase (string)
 */
export default function stringifyBackward(obj: ObjectType): string {
  const str = Object.keys(obj)
    .reverse()
    .map((key) => key.toLowerCase().split("").reverse().join(""))
    .map((key) => key.charAt(0).toUpperCase() + key.slice(1))
    .join("");
  return str.charAt(0).toLocaleLowerCase() + str.slice(1);
}
