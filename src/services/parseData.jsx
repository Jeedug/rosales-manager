export default function parseData(data) {
  const rows = data.trim().split('],').map(row => row.replace(/[\[\]]/g, '').trim());
  return rows.map(row => {
    if (row.startsWith('{')) {
      const columns = row.split('},').map(col => col.replace(/[{}]/g, '').trim());
      return columns.map(col => {
        const parts = col.split(',');
        const title = parts[0].split(':')[1].trim();
        const paragraphs = parts.slice(1).map(paragraph => {
          const textMatch = paragraph.match(/Text\((\w+)\)/);
          const text = paragraph.includes('Text(') ? 'Text' : paragraph.split(':')[1].trim();
          const status = textMatch ? textMatch[1] : '';
          return { text, status };
        });
        return { title, paragraphs };
      });
    } else {
      const textMatch = row.match(/Text\((\w+)\)/);
      const text = row.includes('Text(') ? 'Text' : row.split(':')[1].trim();
      const status = textMatch ? textMatch[1] : '';
      return { text, status };
    }
  });
}