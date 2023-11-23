const searchInput = document.getElementById('searchInput');
const dataTable = document.getElementById('dataTable');
const rows = dataTable.querySelectorAll('tr');

searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();

  rows.forEach(row => {
    const columns = row.querySelectorAll('td');
    let rowContainsSearchText = false;

    columns.forEach(column => {
      if (column.textContent.toLowerCase().includes(searchText)) {
        rowContainsSearchText = true;
      }
    });

    row.style.display = rowContainsSearchText ? '' : 'none';
  });
});
