// Function to filter professionals based on search input
function filterTable() {
    let input = document.getElementById("search");
    let filter = input.value.toLowerCase();
    let table = document.getElementById("professionals");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0]; // Get name column
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}
