export const generateFields = (obj, names) =>
  Object.entries(names).reduce(
    (acc, cur) =>
      acc.concat({
        id: cur[0],
        title: cur[1],
        value: obj[cur[0]],
      }),
    [],
  );
