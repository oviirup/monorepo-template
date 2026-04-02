import { SITE_URL } from "@/app";

/** Returns the canonical url to given path and params */
export function canonical(input: string, trailingSlash = false) {
  if (/^https?:\/\//.test(input)) return input;
  const [path, params] = input.split("?");
  const url = new URL(SITE_URL);
  // make sure the path is valid and defined
  if (!path?.trim()) throw new TypeError(`Invalid url path: ${input}`);
  // add pathname and apply trailing slash if needed
  if (trailingSlash) url.pathname = path.endsWith("/") ? path : `${path}/`;
  else url.pathname = path.endsWith("/") ? path.slice(0, -1) : path;
  // add search params if any
  if (params && params.length > 0) url.search = params;
  return url.toString();
}
