document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("dataTable");

    // Function to delete a row
    tableBody.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-danger")) {
            event.target.closest("tr").remove();
        }
    });

    // Function to handle edit and save
    tableBody.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-warning")) {
            let row = event.target.closest("tr");
            let cells = row.querySelectorAll("td:not(:last-child)"); // Exclude last column (actions)

            cells.forEach((cell) => {
                let oldValue = cell.innerText;
                cell.innerHTML = `<input type="text" value="${oldValue}" class="form-control form-control-sm">`;
            });

            event.target.innerText = "Save";
            event.target.classList.remove("btn-warning");
            event.target.classList.add("btn-success");
        } 
        else if (event.target.classList.contains("btn-success")) {
            let row = event.target.closest("tr");
            let cells = row.querySelectorAll("td:not(:last-child)");

            cells.forEach((cell) => {
                let input = cell.querySelector("input");
                if (input) {
                    cell.innerText = input.value;
                }
            });

            event.target.innerText = "Edit";
            event.target.classList.remove("btn-success");
            event.target.classList.add("btn-warning");
        }
    });

    // Function to add a new row
    document.querySelector(".btn-success").addEventListener("click", function () {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>New</td>
            <td><input type="text" class="form-control form-control-sm"></td>
            <td><input type="text" class="form-control form-control-sm"></td>
            <td><input type="text" class="form-control form-control-sm"></td>
            <td><input type="text" class="form-control form-control-sm"></td>
            <td><input type="text" class="form-control form-control-sm"></td>
            <td><input type="text" class="form-control form-control-sm"></td>
            <td>
                <button class="btn btn-warning btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Del</button>
            </td>
        `;
        tableBody.appendChild(newRow);
    });

});
