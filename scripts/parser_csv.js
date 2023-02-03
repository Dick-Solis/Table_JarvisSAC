export function jsonToCsv(items) {
  const header = Object.keys(items[0]);
  const headerString = header.join(',');
  const parserFormattCsv = [];

  parserFormattCsv.push(headerString.toString());

  for(let item of items) {
    const bodyItems = Object.values(item).join(',');
    parserFormattCsv.push(bodyItems.toString());
  }
  return parserFormattCsv;
}


