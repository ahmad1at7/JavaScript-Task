const searchFunction=()=>{
    let filter=document.getElementById('search').value.toUpperCase();

    let myTable =document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td= tr[i].getElementsByTagName('td')[3];

        if(td){
           let textvalue =td.textContent || td.innerHTML;

           if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
           }else{
                tr[i].style.display="none";   
           }
        }
    }
}
//Sort Table
function sortTableByColumn(table, column, asc =true){

        const dirModifier= asc ? 1:-1;
            const tBody=table.tBodies[0];
            const rows =Array.from(tBody.querySelectorAll("tr"));

            const sortedRows=rows.sort((a , b) =>{
                const aColText =a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
                const bColText =b.querySelector(`td:nth-child(${column + 1})`).textContent.trim(); 

                return aColText>bColText ? (1 * dirModifier):(-1 * dirModifier);
         
            });
            //REmove all existing tr from table
            while(tBody.firstChild){
                tBody.removeChild(tBody.firstChild); 
            }

            tBody.append(...sortedRows);

            //r
            table.querySelectorAll('th').forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
            table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc",asc);
            table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc",!asc);
}
document.querySelectorAll(".table-sortable th").forEach(headerCell =>{
        headerCell.addEventListener("click" , ()=>{
            const tableElement = headerCell.parentElement.parentElement.parentElement;
            const headerIndex=Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
            const currentIsAscending= headerCell.classList.contains("th-sort-asc");

            sortTableByColumn(tableElement, headerIndex, !currentIsAscending); 

        })
})

//Add product


document.addEventListener("DOMContentLoaded", function() {
    const addProductBtn = document.querySelector('.btn.btn-primary[data-bs-toggle="modal"]');
    const productTableBody = document.querySelector('#myTable tbody');
    const form = document.getElementById('myForm');

    addProductBtn.addEventListener('click', function() {
        clearForm(); // Clear the form fields when the modal is opened
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const id = document.getElementById('ID').value;
        const vendor = document.getElementById('vendor').value;
        const name = document.getElementById('name').value;
        const title = document.getElementById('ptitle').value;
        const description = document.getElementById('description').value;
        const stock = document.getElementById('stock').value;
        const buyingPrice = document.getElementById('bprice').value;
        const salePrice = document.getElementById('pprice').value;
        const quantity = document.getElementById('quantity').value;
        const type = document.getElementById('ptype').value;
        const shippingRates = document.getElementById('rates').value;
        const refillLimit = document.getElementById('limit').value;
        const location = document.getElementById('location').value;

        if (id && vendor && name && title && description && stock && buyingPrice && salePrice && quantity && type && shippingRates && refillLimit && location) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="checkbox"></td>
                <td>${id}</td>
                <td><img src="vendor images/profile.png">${vendor}</td>
                <td><p class="product">${name}</p></td>
                <td><p>${title}</p></td>
                <td><p>${description}</p></td>
                <td>${stock}</td>
                <td>$${buyingPrice}</td>
                <td><strong>$${salePrice}</strong></td>
                <td>${quantity}</td>
                <td>${type}</td>
                <td>$${shippingRates}</td>
                <td>${refillLimit}</td>
                <td>${location}</td>
                <td>
                    <button class="btn1"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn2"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            `;
            productTableBody.appendChild(newRow);
            
            // Close the modal after adding the product
            const modal = document.getElementById('userForm');
            const modalBootstrap = bootstrap.Modal.getInstance(modal);
            modalBootstrap.hide();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Function to clear form fields
    function clearForm() {
        form.reset();
    }
});

