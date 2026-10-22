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

document.querySelectorAll('.answers button').forEach(button => {
  button.addEventListener('click', () => {
    const feedback = document.querySelector('.feedback');
    document.querySelectorAll('.answers button').forEach(item => {
      item.disabled = true;
      if (item.dataset.correct === 'true') item.classList.add('correct');
    });
    if (button.dataset.correct === 'true') {
      feedback.innerHTML = '<b>Chính xác!</b> Mỗi Mg từ 0 lên +2 nên nhường 2e; 2Mg nhường 4e.';
    } else {
      button.classList.add('wrong');
      feedback.innerHTML = '<b>Gần đúng rồi.</b> Mỗi Mg nhường 2e, vì có 2 nguyên tử Mg nên tổng là 4e.';
    }
  });
});

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
