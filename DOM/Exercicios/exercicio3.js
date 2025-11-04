const rows = document.querySelector('table').rows;

for (let i = 0; i < rows.length; i++) {
  const celda = rows[i].cells[i];
  celda.style.backgroundColor = 'red';
}
