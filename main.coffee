console.log "Coffee loaded"
datatable_stylesheet = """
<link href="http://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css" media="screen" rel="stylesheet">
"""
datatable_js = """
<script src="http://cdn.datatables.net/1.10.10/js/jquery.dataTables.min.js"></script>
"""
document.head.insertAdjacentHTML('beforeend', datatable_stylesheet + datatable_js)
# TODO: pick table
# TODO: run datable on table

$('table')[0].DataTable();
