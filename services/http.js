import QueryString from "qs";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const serverFetch = async (
  endpoint,
  query,
  cache = { cache: "force-cache" }
) => {
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${QueryString.stringify(query)}`;

  console.log(url);

  try {
    const res = await fetch(`${url}`, cache);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const json = await res.json();
    return json;
  } catch (err) {
    console.error("Error fetching data:", err);
    return { error: true };
  }
};

export { serverFetch };
