interface IDynamicNames {
  [k: string]: boolean;
}

export const classNames = (
  className: string,
  otherNames: string[] | [] = [],
  dynamicNames: IDynamicNames = {}
): string =>
  [
    className,
    ...otherNames,
    ...Object.keys(dynamicNames)
      .filter((k) => Boolean(dynamicNames[k]))
      .map((k) => dynamicNames[k]),
  ].join(" ");
