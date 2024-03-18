"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Excel = require('exceljs');
function openExcelFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const workbook = new Excel.Workbook();
        yield workbook.xlsx.readFile('path/to/your/excel-file.xlsx');
        const worksheet = workbook.getWorksheet(1); // assuming you want to read from the first worksheet
        const data = worksheet.getRows();
        for (const row of data) {
            console.log(row.values);
        }
    });
}
openExcelFile();
