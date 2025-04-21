document.addEventListener("DOMContentLoaded", () => {
    const feesData = [
      { name: "Aman Yadav", class: "Class 1", amount: "₹2000", status: "paid", due: "—" },
      { name: "Riya Sharma", class: "Class 2", amount: "₹2500", status: "unpaid", due: "April 25, 2025" },
      { name: "Kabir Khan", class: "Class 3", amount: "₹1800", status: "paid", due: "—" },
      { name: "Sneha Das", class: "Class 1", amount: "₹2000", status: "unpaid", due: "April 22, 2025" }
    ];
  
    const tableContainer = document.querySelector(".fees-table-container");
    const statusFilter = document.getElementById("statusFilter");
  
    function renderTable(filter = "all") {
      const filteredData = filter === "all" ? feesData :
        feesData.filter(item => item.status === filter);
  
      let table = `<table class="fees-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>`;
  
      filteredData.forEach((item, index) => {
        table += `
          <tr>
          <td data-label="Student">${item.name}</td>
          <td data-label="Class">${item.class}</td>
          <td data-label="Amount">${item.amount}</td>
          <td data-label="Status" class="${item.status === "paid" ? "status-paid" : "status-unpaid"}">${item.status.toUpperCase()}</td>
          <td data-label="Due Date">${item.due}</td>
          <td data-label="Action">
            <button class="action-btn edit-btn" onclick="editFees(${index})">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteFees(${index})">Delete</button>
          </td>
          
          </tr>
        `;
      });
  
      table += `</tbody></table>`;
      tableContainer.innerHTML = table;
    }
  
    statusFilter.addEventListener("change", () => {
      renderTable(statusFilter.value);
    });
  
    window.editFees = function(index) {
      const student = feesData[index];
      const newAmount = prompt(`Edit amount for ${student.name}:`, student.amount);
      if (newAmount !== null) {
        student.amount = newAmount;
        renderTable(statusFilter.value);
      }
    };
  
    window.deleteFees = function(index) {
      if (confirm("Are you sure to delete this record?")) {
        feesData.splice(index, 1);
        renderTable(statusFilter.value);
      }
    };
  
    renderTable();
  });
  