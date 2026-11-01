const classroomCourses={
 foundation:{grade:'LỚP 10',lessons:[{id:'atom',title:'Cấu tạo nguyên tử',description:'Từ proton, neutron, electron đến cách đọc vị trí của nguyên tố trong bảng tuần hoàn.',resource:'knowledge.html?topic=atom'},{id:'redox',title:'Oxi hóa – khử',description:'Nhìn electron chuyển động để hiểu chất oxi hóa, chất khử và cách cân bằng phản ứng.',resource:'index.html#quiz'}]},
 rules:{grade:'LỚP 11',lessons:[{id:'equilibrium',title:'Cân bằng hóa học',description:'Khám phá vì sao một hệ phản ứng không đứng yên mà luôn tự điều chỉnh theo Le Chatelier.',resource:'index.html#quiz'},{id:'organic',title:'Nhập môn Hóa hữu cơ',description:'Nhận diện mạch carbon, nhóm chức và những phản ứng thường gặp trong đời sống.',resource:'knowledge.html?topic=organic'}]},
 application:{grade:'LỚP 12',lessons:[{id:'ester',title:'Ester – Lipid',description:'Từ mùi hương của ester đến chất béo và bài toán xà phòng hóa.',resource:'index.html#quiz'},{id:'electrolysis',title:'Điện phân',description:'Theo dõi ion về đúng điện cực và biến dòng điện thành phản ứng hóa học.',resource:'index.html#quiz'}]}
};
const progressKey='phong-hoa-classroom-progress';
const completed=JSON.parse(localStorage.getItem(progressKey)||'{}');
let activeCourse='foundation',activeLesson=null;
const $=s=>document.querySelector(s);
function allLessons(){return Object.values(classroomCourses).flatMap(c=>c.lessons)}
function renderCourse(){
 const course=classroomCourses[activeCourse];
 $('#lesson-list').innerHTML=course.lessons.map((lesson,i)=>`<button class="lesson-item ${activeLesson===lesson.id?'active':''} ${completed[lesson.id]?'done':''}" data-lesson="${lesson.id}"><small>${course.grade} • BÀI ${i+1}</small><b>${lesson.title}</b></button>`).join('');
 document.querySelectorAll('.lesson-item').forEach(b=>b.addEventListener('click',()=>selectLesson(b.dataset.lesson)));
 updateProgress();
 if(!activeLesson) selectLesson(course.lessons[0].id); else selectLesson(activeLesson);
}
function selectLesson(id){
 const lesson=allLessons().find(x=>x.id===id); if(!lesson)return;
 activeLesson=id; const course=Object.values(classroomCourses).find(c=>c.lessons.some(x=>x.id===id));
 $('#lesson-grade').textContent=`${course.grade} • BÀI HỌC`;$('#lesson-title').textContent=lesson.title;$('#lesson-description').textContent=lesson.description;$('#video-label').textContent=`Video: ${lesson.title}`;$('#lesson-resource').href=lesson.resource;
 $('#complete-lesson').textContent=completed[id]?'Đã hoàn thành ✓':'Đánh dấu đã học ✓';
 document.querySelectorAll('.lesson-item').forEach(b=>b.classList.toggle('active',b.dataset.lesson===id));
}
function updateProgress(){const total=allLessons().length,done=Object.keys(completed).filter(k=>allLessons().some(x=>x.id===k)).length;const pct=Math.round(done/total*100);$('#course-progress').textContent=`${pct}%`;$('#course-progress-bar').style.width=`${pct}%`;$('#course-progress-copy').textContent=`${done}/${total} bài đã hoàn thành`}
document.querySelectorAll('.course-tab').forEach(tab=>tab.addEventListener('click',()=>{activeCourse=tab.dataset.course;activeLesson=null;document.querySelectorAll('.course-tab').forEach(x=>x.classList.remove('active'));tab.classList.add('active');renderCourse()}));
$('#complete-lesson').addEventListener('click',()=>{completed[activeLesson]=true;localStorage.setItem(progressKey,JSON.stringify(completed));selectLesson(activeLesson);renderCourse()});
$('#grade-filter').addEventListener('change',e=>{document.querySelectorAll('.course-tab').forEach(tab=>{const show=e.target.value==='all'||tab.textContent.includes(`Lớp ${e.target.value}`);tab.style.display=show?'block':'none'});});
renderCourse();