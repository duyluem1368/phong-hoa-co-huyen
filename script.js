const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

document.querySelectorAll('.grade-filter button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.grade-filter .active').classList.remove('active');
    button.classList.add('active');
    const grade = button.dataset.grade;
    document.querySelectorAll('.course-card').forEach(card => {
      card.classList.toggle('hidden', grade !== 'all' && card.dataset.grade !== grade);
    });
  });
});

const quizBank = {
  atomic: { title: 'Cấu tạo nguyên tử', tip: 'Số electron của nguyên tử trung hòa bằng số proton.', questions: [
    {q:'Nguyên tử X có 11 proton. Nguyên tử trung hòa X có bao nhiêu electron?',a:['10','11','12','22'],c:1,e:'Nguyên tử trung hòa có số electron bằng số proton, nên X có 11 electron.'},
    {q:'Các nguyên tố trong cùng một nhóm A có điểm chung nào?',a:['Cùng số lớp electron','Cùng số neutron','Cùng số electron hóa trị','Cùng nguyên tử khối'],c:2,e:'Các nguyên tố cùng nhóm A có cùng số electron hóa trị nên tính chất gần giống nhau.'},
    {q:'Trong một chu kì, khi điện tích hạt nhân tăng dần, bán kính nguyên tử nhìn chung biến đổi thế nào?',a:['Tăng dần','Giảm dần','Không đổi','Tăng rồi giảm'],c:1,e:'Lực hút hạt nhân lên electron tăng làm bán kính nguyên tử nhìn chung giảm dần.'}
  ]},
  redox: { title: 'Oxi hóa – khử', tip: 'Xác định số oxi hóa trước khi đếm electron.', questions: [
    {q:'Trong phản ứng 2Mg + O₂ → 2MgO, hai nguyên tử Mg nhường tổng cộng bao nhiêu electron?',a:['2 electron','4 electron','1 electron','8 electron'],c:1,e:'Mỗi Mg từ 0 lên +2 nên nhường 2e; 2Mg nhường tổng cộng 4e.'},
    {q:'Chất khử là chất có đặc điểm nào?',a:['Nhận electron','Nhường electron','Không đổi số oxi hóa','Chỉ chứa oxygen'],c:1,e:'Chất khử nhường electron và bản thân bị oxi hóa.'},
    {q:'Số oxi hóa của sulfur trong H₂SO₄ là bao nhiêu?',a:['+4','−2','+6','0'],c:2,e:'2(+1) + S + 4(−2) = 0, suy ra S = +6.'}
  ]},
  equilibrium: { title: 'Cân bằng hóa học', tip: 'Hệ cân bằng sẽ chuyển dịch theo chiều làm giảm tác động bên ngoài.', questions: [
    {q:'Với N₂ + 3H₂ ⇌ 2NH₃ là phản ứng tỏa nhiệt, tăng nhiệt độ làm cân bằng chuyển dịch theo chiều nào?',a:['Chiều thuận','Chiều nghịch','Không đổi','Dừng phản ứng'],c:1,e:'Tăng nhiệt độ làm cân bằng chuyển theo chiều thu nhiệt, tức chiều nghịch.'},
    {q:'Chất xúc tác ảnh hưởng thế nào đến trạng thái cân bằng?',a:['Dịch sang phải','Dịch sang trái','Không làm chuyển dịch cân bằng','Tăng hằng số cân bằng'],c:2,e:'Xúc tác làm cả hai chiều nhanh hơn như nhau, nên không làm chuyển dịch cân bằng.'},
    {q:'Tăng áp suất làm cân bằng khí chuyển về phía nào?',a:['Nhiều mol khí hơn','Ít mol khí hơn','Luôn sang phải','Luôn sang trái'],c:1,e:'Hệ chuyển về phía có tổng số mol khí nhỏ hơn để làm giảm áp suất.'}
  ]},
  organic: { title: 'Hóa học hữu cơ', tip: 'Nhận diện nhóm chức trước khi dự đoán tính chất.', questions: [
    {q:'Công thức tổng quát của alkane mạch hở là gì?',a:['CₙH₂ₙ','CₙH₂ₙ₊₂','CₙH₂ₙ₋₂','CₙH₂ₙ₊₁OH'],c:1,e:'Alkane no, mạch hở có công thức chung CₙH₂ₙ₊₂.'},
    {q:'Chất nào làm mất màu dung dịch bromine ở điều kiện thường?',a:['CH₄','C₂H₆','C₂H₄','C₆H₆'],c:2,e:'C₂H₄ có liên kết đôi C=C và tham gia phản ứng cộng Br₂.'},
    {q:'Nhóm chức đặc trưng của alcohol là gì?',a:['–CHO','–COOH','–OH','–COO–'],c:2,e:'Alcohol có nhóm hydroxy –OH liên kết với nguyên tử carbon no.'}
  ]},
  ester: { title: 'Ester – Lipid', tip: 'Ester đơn chức thường có nhóm –COO– nối hai gốc hydrocarbon.', questions: [
    {q:'Sản phẩm của phản ứng ester hóa giữa CH₃COOH và C₂H₅OH là gì?',a:['CH₃COOC₂H₅ và H₂O','C₂H₅COOCH₃','CH₃CHO và H₂O','CH₃COONa'],c:0,e:'Axit acetic và ethanol tạo ethyl acetate CH₃COOC₂H₅ cùng nước.'},
    {q:'Phản ứng thủy phân ester trong môi trường kiềm còn gọi là gì?',a:['Hydrogen hóa','Xà phòng hóa','Ester hóa','Trùng hợp'],c:1,e:'Thủy phân ester bằng kiềm tạo muối carboxylate và alcohol, gọi là xà phòng hóa.'},
    {q:'Chất béo là triester của glycerol với chất nào?',a:['Axit vô cơ','Axit béo','Alcohol đơn chức','Amino acid'],c:1,e:'Chất béo là triester của glycerol và các axit béo.'}
  ]},
  electrolysis: { title: 'Điện phân', tip: 'Cation về cathode nhận electron; anion về anode nhường electron.', questions: [
    {q:'Trong bình điện phân, quá trình khử xảy ra ở điện cực nào?',a:['Anode','Cathode','Cả hai điện cực','Cầu muối'],c:1,e:'Cathode là nơi cation nhận electron, tức xảy ra quá trình khử.'},
    {q:'Điện phân nóng chảy NaCl, sản phẩm ở cathode là gì?',a:['Cl₂','NaOH','Na','H₂'],c:2,e:'Na⁺ nhận electron tại cathode: Na⁺ + e → Na.'},
    {q:'Điện phân dung dịch CuSO₄ với điện cực trơ, ion nào bị khử ưu tiên ở cathode?',a:['H⁺','SO₄²⁻','Cu²⁺','OH⁻'],c:2,e:'Cu²⁺ nhận electron ưu tiên, tạo kim loại Cu bám lên cathode.'}
  ]}
};

let activeQuiz = 'redox';
let questionIndex = 0;
let correctCount = 0;
let answered = false;

function renderQuiz() {
  const quiz = quizBank[activeQuiz];
  const item = quiz.questions[questionIndex];
  const card = document.querySelector('.quiz-card');
  card.classList.remove('finished');
  document.querySelector('#quiz-topic-title').textContent = quiz.title;
  document.querySelector('#quiz-tip').textContent = `💡 Mẹo: ${quiz.tip}`;
  document.querySelector('#quiz-counter').textContent = `CÂU ${questionIndex + 1} / ${quiz.questions.length}`;
  document.querySelector('#quiz-live-score').textContent = `${correctCount}/${quiz.questions.length} câu đúng`;
  document.querySelector('.quiz-progress span').style.width = `${((questionIndex + 1) / quiz.questions.length) * 100}%`;
  document.querySelector('#quiz-question').textContent = item.q;
  const answers = document.querySelector('#quiz-answers');
  answers.innerHTML = '';
  item.a.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span>${answer}`;
    button.addEventListener('click', () => answerQuestion(index, button));
    answers.appendChild(button);
  });
  document.querySelector('.feedback').innerHTML = '';
  document.querySelector('#quiz-next').classList.remove('show');
  answered = false;
}

function answerQuestion(selected, button) {
  if (answered) return;
  answered = true;
  const item = quizBank[activeQuiz].questions[questionIndex];
  document.querySelectorAll('#quiz-answers button').forEach((answer, index) => {
    answer.disabled = true;
    if (index === item.c) answer.classList.add('correct');
  });
  if (selected === item.c) correctCount += 1;
  else button.classList.add('wrong');
  document.querySelector('#quiz-live-score').textContent = `${correctCount}/${quizBank[activeQuiz].questions.length} câu đúng`;
  document.querySelector('.feedback').innerHTML = `<b>${selected === item.c ? 'Chính xác!' : 'Chưa đúng.'}</b> ${item.e}`;
  const next = document.querySelector('#quiz-next');
  next.textContent = questionIndex === quizBank[activeQuiz].questions.length - 1 ? 'Xem tổng điểm →' : 'Câu tiếp theo →';
  next.classList.add('show');
}

function showQuizResult() {
  const quiz = quizBank[activeQuiz];
  const score = Math.round((correctCount / quiz.questions.length) * 10 * 10) / 10;
  const percent = Math.round((correctCount / quiz.questions.length) * 100);
  const card = document.querySelector('.quiz-card');
  card.classList.add('finished');
  card.innerHTML = `<div class="score-summary"><span class="eyebrow">HOÀN THÀNH CHUYÊN ĐỀ</span><h3>${quiz.title}</h3><div class="score-ring" style="--score-angle:${percent * 3.6}deg"><strong>${score}/10</strong></div><p>Em trả lời đúng <b>${correctCount}/${quiz.questions.length}</b> câu (${percent}%).</p><button class="quiz-next show" id="quiz-restart" type="button">↻ Làm lại chuyên đề</button></div>`;
  document.querySelector('#quiz-restart').addEventListener('click', startQuiz);
}

function startQuiz(topic = activeQuiz) {
  activeQuiz = typeof topic === 'string' && quizBank[topic] ? topic : activeQuiz;
  questionIndex = 0; correctCount = 0;
  const card = document.querySelector('.quiz-card');
  card.innerHTML = '<div class="quiz-top"><span id="quiz-counter"></span><span class="points" id="quiz-live-score"></span></div><div class="quiz-progress"><span></span></div><h3 id="quiz-question"></h3><div class="answers" id="quiz-answers"></div><div class="feedback" aria-live="polite"></div><button class="quiz-next" id="quiz-next" type="button">Câu tiếp theo →</button>';
  document.querySelector('#quiz-next').addEventListener('click', nextQuestion);
  renderQuiz();
}

function nextQuestion() {
  if (!answered) return;
  if (questionIndex < quizBank[activeQuiz].questions.length - 1) { questionIndex += 1; renderQuiz(); }
  else showQuizResult();
}

document.querySelector('#quiz-next').addEventListener('click', nextQuestion);
document.querySelectorAll('[data-topic]').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('.course-card').forEach(card => card.classList.remove('topic-active'));
  link.closest('.course-card').classList.add('topic-active');
  startQuiz(link.dataset.topic);
}));
renderQuiz();

document.querySelector('#register-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = new FormData(event.target).get('name').trim();
  document.querySelector('.form-status').textContent = `Cảm ơn ${name}! Cô sẽ liên hệ tư vấn sớm nhé.`;
  event.target.reset();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
