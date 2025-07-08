let studentData = [];

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    studentData = data;
  })
  .catch(error => {
    console.error("خطأ في تحميل البيانات:", error);
  });

function searchStudent() {
  const code = document.getElementById('codeInput').value.trim();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "";

  if (!code) {
    resultDiv.innerHTML = "من فضلك أدخل رقم الجلوس.";
    return;
  }

  const student = studentData.find(s => String(s.code) === code);

  if (student) {
    let output = `<p><strong>الاسم:</strong> ${student.name}</p>`;
    output += "<ul>";
    for (let key in student) {
      if (key !== "code" && key !== "name") {
        output += `<li><strong>${key}:</strong> ${student[key]}</li>`;
      }
    }
    output += "</ul>";
    resultDiv.innerHTML = output;
  } else {
    resultDiv.innerHTML = "لم يتم العثور على الطالب.";
  }
}
