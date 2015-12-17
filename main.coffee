console.log "Coffee loaded"

datatable_stylesheet = """
<link href="http://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css" media="screen" rel="stylesheet">
"""
console.log "stylesheet: #{datatable_stylesheet}"

datatable_js = """
<script src="http://cdn.datatables.net/1.10.10/js/jquery.dataTables.min.js"></script>
"""
console.log "stylesheet: #{datatable_js}"

document.head.insertAdjacentHTML('beforeend', datatable_stylesheet + datatable_js)
console.log "table: #{$('#ddt-table-transactions')}"
$('#ddt-table-transactions').DataTable()
