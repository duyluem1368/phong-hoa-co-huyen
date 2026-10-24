const q=(text,options,answer,explain,topic)=>({text,options,answer,explain,topic});
const common=[
q('Cấu hình electron lớp ngoài cùng của nguyên tử chlorine (Z = 17) là', ['3s²3p⁵','3s²3p³','2s²2p⁵','3s²3p⁶'],0,'Cl có cấu hình [Ne]3s²3p⁵.','Nguyên tử'),
q('Chất nào sau đây là chất điện li mạnh?', ['CH₃COOH','C₂H₅OH','HCl','H₂O'],2,'HCl phân li hoàn toàn trong nước.','Dung dịch'),
q('Số oxi hóa của sulfur trong H₂SO₄ là', ['+4','+6','−2','0'],1,'2(+1) + x + 4(−2) = 0 nên x = +6.','Oxi hóa–khử'),
q('Phản ứng nào có sự thay đổi số oxi hóa?', ['HCl + NaOH → NaCl + H₂O','AgNO₃ + NaCl → AgCl + NaNO₃','Fe + CuSO₄ → FeSO₄ + Cu','BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl'],2,'Fe từ 0 lên +2, Cu từ +2 về 0.','Oxi hóa–khử'),
q('Ở 25°C, dung dịch có pH = 3 thì [H⁺] bằng', ['10⁻³ M','3 M','10³ M','10⁻¹¹ M'],0,'[H⁺] = 10⁻ᵖᴴ = 10⁻³ M.','Cân bằng ion'),
q('Chất làm mất màu dung dịch bromine ở điều kiện thường là', ['CH₄','C₂H₄','C₆H₆','C₂H₆'],1,'Liên kết π của ethylene tham gia phản ứng cộng Br₂.','Hydrocarbon'),
q('Ethanol phản ứng với sodium tạo ra khí', ['O₂','CO₂','H₂','N₂'],2,'2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂.','Alcohol'),
q('Monomer dùng điều chế polyethylene là', ['CH₂=CH₂','CH₂=CHCl','CF₂=CF₂','CH₂=CH–CH₃'],0,'Trùng hợp ethylene tạo polyethylene.','Polymer'),
q('Kim loại nào không phản ứng với dung dịch HCl loãng?', ['Zn','Fe','Cu','Mg'],2,'Cu đứng sau H trong dãy hoạt động hóa học.','Kim loại'),
q('Trong pin điện hóa Zn–Cu, tại anode xảy ra', ['Zn → Zn²⁺ + 2e','Cu → Cu²⁺ + 2e','Zn²⁺ + 2e → Zn','Cu²⁺ + 2e → Cu'],0,'Anode là nơi oxi hóa; Zn bị oxi hóa.','Điện hóa'),
q('Thủy phân hoàn toàn ester CH₃COOC₂H₅ trong NaOH thu được', ['CH₃COONa và C₂H₅OH','CH₃COOH và C₂H₅ONa','HCOONa và C₃H₇OH','C₂H₅COONa và CH₃OH'],0,'Phản ứng xà phòng hóa tạo muối acetate và ethanol.','Ester'),
q('Thuốc thử nhận biết ion NH₄⁺ là', ['Dung dịch NaOH, đun nhẹ','Dung dịch HCl','Dung dịch NaCl','Quỳ tím khô'],0,'NH₄⁺ + OH⁻ → NH₃↑ + H₂O; NH₃ làm xanh quỳ ẩm.','Nitrogen')];
const variant={
'2022':[
q('Khí nào là nguyên nhân chính gây mưa acid?', ['CO₂ và O₂','SO₂ và NO₂','N₂ và H₂','CH₄ và NH₃'],1,'SO₂ và NOₓ tạo các acid trong khí quyển.','Môi trường'),
q('Cho 0,10 mol NaOH phản ứng vừa đủ với HCl. Số mol HCl là', ['0,05','0,10','0,20','1,00'],1,'Tỉ lệ HCl : NaOH = 1 : 1.','Tính toán'),
q('Chất béo là triester của glycerol với', ['acid vô cơ','acid béo','alcohol đơn chức','amino acid'],1,'Chất béo là triacylglycerol.','Lipid')],
'2023':[
q('Hiện tượng khi cho Cu vào dung dịch AgNO₃ là', ['Không đổi','Có khí thoát ra','Có Ag bám và dung dịch chuyển xanh','Cu tan, dung dịch mất màu'],2,'Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag.','Kim loại'),
q('Công thức của glucose là', ['C₆H₁₂O₆','C₁₂H₂₂O₁₁','(C₆H₁₀O₅)ₙ','C₂H₄O₂'],0,'Glucose có công thức phân tử C₆H₁₂O₆.','Carbohydrate'),
q('Trong phân tử amino acid, hai nhóm chức đặc trưng là', ['–OH và –CHO','–NH₂ và –COOH','–COO– và –OH','–NH₂ và –OH'],1,'Amino acid chứa đồng thời nhóm amino và carboxyl.','Amino acid')],
'2024':[
q('Ở 25°C và 1 bar, 0,20 mol khí lí tưởng có thể tích gần nhất là', ['4,48 L','4,96 L','22,40 L','24,79 L'],1,'V ≈ 0,20 × 24,79 = 4,958 L.','Tính toán'),
q('Yếu tố không làm chuyển dịch cân bằng N₂ + 3H₂ ⇌ 2NH₃ là', ['Áp suất','Nồng độ','Nhiệt độ','Chất xúc tác'],3,'Xúc tác chỉ làm cân bằng đạt nhanh hơn.','Cân bằng'),
q('Tơ nylon-6,6 thuộc loại', ['Polyamide','Polyester','Polysaccharide','Cao su'],0,'Mạch nylon-6,6 chứa liên kết amide –CO–NH–.','Polymer')],
'2025':[
q('Một mẫu nước có [OH⁻] = 10⁻⁵ M ở 25°C. pH của mẫu là', ['5','7','9','14'],2,'pOH = 5 nên pH = 14 − 5 = 9.','Cân bằng ion'),
q('Vật liệu phù hợp nhất để bảo vệ thân tàu thép bằng phương pháp điện hóa là gắn các tấm', ['Cu','Ag','Zn','Au'],2,'Zn hoạt động mạnh hơn Fe nên bị ăn mòn trước.','Điện hóa'),
q('Cho 5,60 g Fe tác dụng hết với sulfur tạo FeS. Khối lượng FeS thu được là', ['7,20 g','8,80 g','11,20 g','17,60 g'],1,'nFe = 0,10 mol; nFeS = 0,10 mol nên m = 8,80 g.','Tính toán')],
'advanced':[
q('Điện phân CuSO₄ với điện cực trơ, dòng điện 1,93 A trong 1000 s. Khối lượng Cu tối đa bám là (F = 96500 C/mol)', ['0,32 g','0,64 g','1,28 g','3,20 g'],1,'n(e)=It/F=0,02 mol; nCu=0,01 mol; m=0,64 g.','Điện hóa'),
q('Đốt cháy hoàn toàn 0,10 mol alcohol no đơn chức mạch hở thu 0,30 mol CO₂. Công thức alcohol là', ['CH₃OH','C₂H₅OH','C₃H₇OH','C₄H₉OH'],2,'Số mol CO₂/alcohol = số C = 3.','Alcohol'),
q('Peptide X tạo bởi 3 gốc glycine. Khối lượng mol của X là', ['171','189','207','225'],0,'M = 3×75 − 2×18 = 189? Kiểm tra: triglycine C₆H₁₁N₃O₄ có M = 189 g/mol.', 'Peptide')]
};
variant.advanced[2].answer=1;
const meta={
'2022':{year:'ĐỀ 2022',title:'Nền tảng và nhận biết',desc:'Ôn kiến thức cơ bản, tính toán một bước và các phản ứng quen thuộc.',color:'#4d83c5'},
'2023':{year:'ĐỀ 2023',title:'Liên hệ và tổng hợp',desc:'Tăng câu hỏi nối kiến thức vô cơ, hữu cơ với hiện tượng thực nghiệm.',color:'#2fa77d'},
'2024':{year:'ĐỀ 2024',title:'Vận dụng thực tiễn',desc:'Chú trọng hiểu bản chất, dữ kiện thực tế và quy ước mới.',color:'#db913c'},
'2025':{year:'ĐỀ 2025',title:'Định hướng năng lực',desc:'Câu hỏi bám GDPT 2018, đọc dữ kiện và giải quyết vấn đề.',color:'#7657d5'},
'advanced':{year:'NÂNG CAO',title:'Chinh phục 9–10',desc:'Đề tự biên soạn với câu tính toán và suy luận nhiều bước.',color:'#ef7063'}
};
const banks={};Object.keys(meta).forEach(k=>banks[k]=[...common,...variant[k]]);
let currentKey=null,index=0,answers=[],seconds=3000,ticker=null,lastResult=null;
const $=s=>document.querySelector(s),letters=['A','B','C','D'];
function renderCatalog(){const history=JSON.parse(localStorage.getItem('chemExamHistory')||'[]');$('#exam-list').innerHTML=Object.entries(meta).map(([k,m])=>`<article class="exam-card" style="--accent:${m.color}"><span class="year">${m.year}</span><h3>${m.title}</h3><p>${m.desc}</p><div class="facts"><span>◷ 50 phút</span><span>✎ ${banks[k].length} câu</span><span>★ 10 điểm</span></div><button data-start="${k}">Bắt đầu làm bài →</button></article>`).join('');$('#history-list').innerHTML=history.length?history.slice(0,8).map(h=>`<div class="history-row"><span>${h.title}</span><strong>${h.score}/10</strong><span>${h.date}</span></div>`).join(''):'<p class="empty-history">Chưa có lần làm bài nào. Kết quả sẽ được lưu trên thiết bị này.</p>';document.querySelectorAll('[data-start]').forEach(b=>b.onclick=()=>start(b.dataset.start))}
function show(id){['catalog','room','result'].forEach(x=>$('#'+x).classList.toggle('hidden',x!==id));scrollTo({top:0,behavior:'smooth'})}
function start(key){currentKey=key;index=0;answers=Array(banks[key].length).fill(null);seconds=3000;clearInterval(ticker);show('room');$('#exam-label').textContent=meta[key].year;$('#exam-title').textContent=meta[key].title;tick();ticker=setInterval(()=>{seconds--;tick();if(seconds<=0){clearInterval(ticker);finish()}},1000);renderQuestion()}
function tick(){const m=Math.floor(seconds/60),s=seconds%60;$('#timer').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;$('#timer').classList.toggle('warning',seconds<300)}
function renderQuestion(){const bank=banks[currentKey],item=bank[index];$('#question-number').textContent=`CÂU ${index+1} / ${bank.length}`;$('#question-topic').textContent=item.topic;$('#question-text').textContent=item.text;$('#options').innerHTML=item.options.map((o,i)=>`<button class="${answers[index]===i?'selected':''}" data-option="${i}"><span>${letters[i]}</span>${o}</button>`).join('');document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>{answers[index]=+b.dataset.option;renderQuestion()});$('#question-map').innerHTML=bank.map((_,i)=>`<button data-jump="${i}" class="${answers[i]!==null?'done':''} ${i===index?'current':''}">${i+1}</button>`).join('');document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{index=+b.dataset.jump;renderQuestion()});$('#answered-count').textContent=`${answers.filter(a=>a!==null).length}/${bank.length}`;$('#prev').disabled=index===0;$('#next').textContent=index===bank.length-1?'Về câu 1 →':'Câu sau →'}
function finish(){clearInterval(ticker);const bank=banks[currentKey],correct=bank.reduce((n,x,i)=>n+(answers[i]===x.answer),0),score=Math.round(correct/bank.length*100)/10;lastResult={key:currentKey,score,correct};const history=JSON.parse(localStorage.getItem('chemExamHistory')||'[]');history.unshift({title:`${meta[currentKey].year} · ${meta[currentKey].title}`,score:score.toFixed(1),date:new Date().toLocaleString('vi-VN')});localStorage.setItem('chemExamHistory',JSON.stringify(history.slice(0,20)));$('#score').textContent=score.toFixed(1);$('#result-title').textContent=score>=8?'Nền tảng rất tốt!':score>=6.5?'Đang tiến bộ đúng hướng':score>=5?'Đã đạt mức cơ bản':'Cần củng cố lại nền tảng';$('#result-copy').textContent=`Đúng ${correct}/${bank.length} câu · Hoàn thành trong ${Math.floor((3000-seconds)/60)} phút ${((3000-seconds)%60)} giây.`;renderStats(false);show('result')}
function renderStats(showReview){const bank=banks[currentKey],topics={};bank.forEach((x,i)=>{topics[x.topic]??={right:0,total:0};topics[x.topic].total++;if(answers[i]===x.answer)topics[x.topic].right++});$('#topic-stats').innerHTML=Object.entries(topics).map(([t,v])=>`<div class="stat-row"><span>${t}</span><b>${v.right}/${v.total}</b><div class="stat-bar"><i style="width:${v.right/v.total*100}%"></i></div></div>`).join('');$('#review-list').innerHTML=showReview?bank.map((x,i)=>`<article class="review-item"><h4>Câu ${i+1}: ${x.text}</h4><b class="${answers[i]===x.answer?'ok':'bad'}">${answers[i]===x.answer?'✓ Đúng':'✕ '+(answers[i]===null?'Chưa trả lời':`Đã chọn ${letters[answers[i]]}`)} · Đáp án ${letters[x.answer]}</b><p>${x.explain}</p></article>`).join(''):'<p class="empty-history">Bấm “Xem lời giải” để đối chiếu từng câu.</p>'}
$('#prev').onclick=()=>{if(index>0){index--;renderQuestion()}};$('#next').onclick=()=>{index=index===banks[currentKey].length-1?0:index+1;renderQuestion()};$('#submit').onclick=()=>{const missing=answers.filter(a=>a===null).length;if(missing&&!confirm(`Em còn ${missing} câu chưa trả lời. Vẫn nộp bài?`))return;finish()};$('#leave').onclick=()=>{if(confirm('Rời phòng thi? Các đáp án chưa nộp sẽ không được lưu.')){clearInterval(ticker);renderCatalog();show('catalog')}};$('#review').onclick=()=>renderStats(true);$('#retry').onclick=()=>start(lastResult.key);$('#back-catalog').onclick=()=>{renderCatalog();show('catalog')};$('#theme').onclick=()=>{document.body.classList.toggle('dark-mode');localStorage.setItem('chemTheme',document.body.classList.contains('dark-mode')?'dark':'light')};if(localStorage.getItem('chemTheme')==='dark')document.body.classList.add('dark-mode');renderCatalog();
