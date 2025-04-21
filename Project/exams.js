document.addEventListener("DOMContentLoaded", () => {
    const scheduleData = [
      { class: "Class 12", subject: "Chemistry", date: "April 20, 2025" },
      { class: "Class 11", subject: "Physics", date: "April 20, 2025" },
      { class: "Class 10", subject: "Science", date: "April 20, 2025" },
      { class: "Class 9", subject: "English", date: "April 20, 2025" },
      { class: "Class 8", subject: "Math", date: "April 20, 2025" },
      { class: "Class 7", subject: "Hindi", date: "April 20, 2025" },
      { class: "Class 6", subject: "Math", date: "April 20, 2025" },
      { class: "Class 5", subject: "English", date: "April 20, 2025" },
    ];
  
    const toppersData = {
      "Class 12": ["Abhishek Dhari 🥇", "Deep Kushwaha 🥈", "Abhay Rawat 🥉"],
      "Class 11": ["Chesta Sharma 🥇", "Arjun Verma 🥈", "Tina Roy 🥉"],
      "Class 10": ["Pragati Shukla 🥇", "Nisha Sen 🥈", "Raghav Tiwari 🥉"],
      "Class 9": ["Rahul Mishra 🥇", "Devika Yadav 🥈", "Kunal Singh 🥉"],
      "Class 8": ["Ajay Singh 🥇", "Veer Yadav 🥈", "Nainshi Gupta 🥉"],
      "Class 7": ["Kirti Pal 🥇", "Nisha Sen 🥈", "Janvi Singh 🥉"],
      "Class 6": ["Rohit Paul 🥇", "Vaishnavi Mishra 🥈", "Dev Gupta 🥉"],
      "Class 5": ["Riya Singh 🥇", "Nishant Kushwaha 🥈", "Palak Shukla 🥉"],
    };
  
    const scheduleSection = document.querySelector(".schedule-section");
    const toppersSection = document.querySelector(".toppers-section");
  
    // Create exam schedule table
    let table = `<table class="exam-table">
      <thead>
        <tr><th>Class</th><th>Subject</th><th>Exam Date</th></tr>
      </thead>
      <tbody>`;
    scheduleData.forEach(item => {
      table += `<tr>
        <td>${item.class}</td>
        <td>${item.subject}</td>
        <td>${item.date}</td>
      </tr>`;
    });
    table += `</tbody></table>`;
    scheduleSection.innerHTML = table;
  
    // Create toppers list
    Object.keys(toppersData).forEach(cls => {
      const card = document.createElement("div");
      card.classList.add("toppers-card");
  
      card.innerHTML = `
        <h3>${cls}</h3>
        <ul>
          ${toppersData[cls].map(s => `<li>${s}</li>`).join("")}
        </ul>
      `;
  
      toppersSection.appendChild(card);
    });
  });
  