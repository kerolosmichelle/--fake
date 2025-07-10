  let studentsData = [];

  // Load JSON file
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      studentsData = data;
    })
    .catch(error => {
      console.error("فشل في تحميل البيانات:", error);
    });

  // Search logic
  document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const code = document.getElementById('studentCode').value.trim();
    const resultDiv = document.getElementById('result');

    const student = studentsData.find(s => s.code === code);

    if (student) {
      resultDiv.innerHTML = `
        <div class="result-card mt-4">
          <div class="result-header">
            <i class="fas fa-user-graduate"></i>
            <h4 class="mb-0">نتيجة الطالب</h4>
          </div>
          
          <div class="result-item">
            <strong>الاسم:</strong> ${student.name}
          </div>
          
          <div class="result-item">
            <strong>الألحان:</strong> ${student.al7an} 
            ${student.al7an === "ناجح" ? '<span class="success-badge ms-2"><i class="fas fa-check me-1"></i>ناجح</span>' : 
              '<span class="danger-badge ms-2"><i class="fas fa-times me-1"></i>إعادة</span>'}
          </div>
          
          <div class="result-item">
            <strong>المحفوظات:</strong> ${student.ma7fozat}
            ${student.ma7fozat === "ناجح" ? '<span class="success-badge ms-2"><i class="fas fa-check me-1"></i>ناجح</span>' : 
              '<span class="danger-badge ms-2"><i class="fas fa-times me-1"></i>إعادة</span>'}
          </div>
          
          <div class="result-item">
            <strong>الطقس:</strong> ${student.takkes}
            ${student.takkes === "ناجح" ? '<span class="success-badge ms-2"><i class="fas fa-check me-1"></i>ناجح</span>' : 
              '<span class="danger-badge ms-2"><i class="fas fa-times me-1"></i>إعادة</span>'}
          </div>
          
          <div class="result-item">
            <strong>القبطي:</strong> ${student.el2bty}
            ${student.el2bty === "ناجح" ? '<span class="success-badge ms-2"><i class="fas fa-check me-1"></i>ناجح</span>' : 
              '<span class="danger-badge ms-2"><i class="fas fa-times me-1"></i>إعادة</span>'}
          </div>
        </div>
      `;
    } else {
      resultDiv.innerHTML = `
        <div class="alert alert-danger d-flex align-items-center mt-4" role="alert">
          <i class="fas fa-exclamation-triangle me-2"></i>
          <div>
            لم يتم العثور على الطالب. تأكد من صحة الكود.
          </div>
        </div>
      `;
    }
  });
