const buildCatalogUrl = (params: Record<string, string>) => {
  const query = new URLSearchParams(params).toString();
  return `/catalog?${query}`;
};

export { buildCatalogUrl };
