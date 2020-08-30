function convertHTML(str) {
  let entities = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    "'": '&apos;'
  }

  return str
    .replace(/[&><\"\']/g, match => entities[match])

  return str
    .split('')
    .map(char => entities[char] || char)
    .join('');
}

let a = convertHTML("Dolce && Gabbana");
let b = convertHTML("Hamburgers < Pizza < Tacos");
let c = convertHTML("<>");