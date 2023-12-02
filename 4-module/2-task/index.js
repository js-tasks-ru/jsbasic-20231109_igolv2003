function makeDiagonalRed(table) {
  // ваш код...;
  for (let i = 0; i < table.rows.length; i++){
    let element = table.rows[i].cells[i];
    element.style.backgroundColor = 'red';
  }
}
