const Excel = require('exceljs');

async function openExcelFile() {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile('path/to/your/excel-file.xlsx');

  const worksheet = workbook.getWorksheet(1); // assuming you want to read from the first worksheet
  const data = worksheet.getRows();

  for (const row of data) {
    console.log(row.values);
  }
}

openExcelFile();