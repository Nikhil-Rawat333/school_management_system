// const studentsData = {
//     class10: [
//       { name: "Aman", gender: "boy", present: true },
//       { name: "Riya", gender: "girl", present: false },
//       { name: "Kabir", gender: "boy", present: true }
//     ],
//     class11: [
//       { name: "Sneha", gender: "girl", present: true },
//       { name: "Arjun", gender: "boy", present: false }
//     ],
//     class12: [
//       { name: "Abhishek Dhari", gender: "boy", present: true },
//       { name: "Abhay Rawat", gender: "boy", present: true },
//       { name: "Nikhil Rawat", gender: "boy", present: true },
//       { name: "Deep Kushwaha", gender: "boy", present: true },
//     ]
//   };

//   const studentsList = document.getElementById("studentsList");
//   const classSelector = document.getElementById("classSelector");

//   function renderStudents(className) {
//     const students = studentsData[className];
//     studentsList.innerHTML = "";

//     students.forEach(student => {
//       const card = document.createElement("div");
//       card.classList.add("student-card");

//       const genderIcon = student.gender === "boy" ? "👦" : "👧";
//       const statusClass = student.present ? "present" : "absent";
//       const statusText = student.present ? "Present" : "Absent";

//       card.innerHTML = `
//         <div class="name">${student.name}</div>
//         <div class="gender">${genderIcon}</div>
//         <div class="status ${statusClass}">${statusText}</div>
//       `;

//       studentsList.appendChild(card);
//     });
//   }

//   classSelector.addEventListener("change", (e) => {
//     renderStudents(e.target.value);
//   });

//   // Initial render
//   renderStudents("class1");



let studentsData = {
    class12: [
        { name: "Abhishek Dhari", gender: "boy", present: true },
        { name: "Abhay Rawat", gender: "boy", present: true },
        { name: "Nikhil Rawat", gender: "boy", present: true },
        { name: "Deep Kushwaha", gender: "boy", present: true },
        { name: "Chesta Sharma", gender: "girl", present: false },
        { name: "Palak Shukla", gender: "girl", present: false },
        { name: "Abhishek Dhari", gender: "boy", present: true },
        { name: "Pragati Shukla", gender: "girl", present: false },
        { name: "Raghav Tiwari", gender: "boy", present: true },
        { name: "Anuj Mishra", gender: "boy", present: false },
    ],
    class1: [
        { name: "Aman", gender: "boy", present: true },
        { name: "Riya", gender: "girl", present: false },
        { name: "Kabir", gender: "boy", present: true }
    ],
    class2: [
        { name: "Sneha", gender: "girl", present: true },
        { name: "Arjun", gender: "boy", present: false }
    ],
    class3: [
        { name: "Rohit", gender: "boy", present: true },
        { name: "Nisha", gender: "girl", present: true }
    ],
    class10: [
        { name: "Aman", gender: "boy", present: true },
        { name: "Riya", gender: "girl", present: false },
        { name: "Kabir", gender: "boy", present: true },
        { name: "Sneha", gender: "girl", present: true },
        { name: "Arjun", gender: "boy", present: false },
        { name: "Sneha", gender: "girl", present: true },
        { name: "Arjun", gender: "boy", present: false }
    ],
    class11: [
        { name: "Sneha", gender: "girl", present: true },
        { name: "Arjun", gender: "boy", present: false },
        { name: "Riya", gender: "girl", present: false },
        { name: "Kabir", gender: "boy", present: true },
        { name: "Aman", gender: "boy", present: true },
        { name: "Riya", gender: "girl", present: false },
        { name: "Kabir", gender: "boy", present: true }
    ],
};

const studentsList = document.getElementById("studentsList");
const classSelector = document.getElementById("classSelector");
const attendanceFilter = document.getElementById("attendanceFilter");

function renderStudents(className, filter = "all") {
    const students = studentsData[className];
    studentsList.innerHTML = "";

    let filtered = students;
    if (filter === "present") filtered = students.filter(s => s.present);
    if (filter === "absent") filtered = students.filter(s => !s.present);

    filtered.forEach((student, index) => {
        const card = document.createElement("div");
        card.classList.add("student-card");

        const genderIcon = student.gender === "boy" ? "👦" : "👧";
        const statusClass = student.present ? "present" : "absent";
        const statusText = student.present ? "Present" : "Absent";

        card.innerHTML = `
        <div class="name">${student.name}</div>
        <div class="gender">${genderIcon}</div>
        <div class="status ${statusClass}">${statusText}</div>
        <button class="edit-btn" onclick="editStudent('${className}', ${index})">Edit</button>
        <button class="delete-btn" onclick="deleteStudent('${className}', ${index})">Delete</button>
      `;

        studentsList.appendChild(card);
    });
}

function editStudent(className, index) {
    const student = studentsData[className][index];
    const newName = prompt("Edit name:", student.name);
    if (newName) {
        student.name = newName;
        renderStudents(classSelector.value, attendanceFilter.value);
    }
}

function deleteStudent(className, index) {
    if (confirm("Are you sure you want to delete this student?")) {
        studentsData[className].splice(index, 1);
        renderStudents(classSelector.value, attendanceFilter.value);
    }
}

classSelector.addEventListener("change", () => {
    renderStudents(classSelector.value, attendanceFilter.value);
});

attendanceFilter.addEventListener("change", () => {
    renderStudents(classSelector.value, attendanceFilter.value);
});

// Initial render
renderStudents("class1");
