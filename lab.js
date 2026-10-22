const chemicals = [
  {id:'HCl',name:'Axit hydrochloric',cat:'acid',color:'#e6f6f8'}, {id:'H2SO4',name:'Axit sulfuric loãng',cat:'acid',color:'#e6f6f8'},
  {id:'HNO3',name:'Axit nitric',cat:'acid',color:'#e6f6f8'}, {id:'CH3COOH',name:'Axit acetic',cat:'acid',color:'#e6f6f8'},
  {id:'NaOH',name:'Sodium hydroxide',cat:'base',color:'#eeeafa'}, {id:'KOH',name:'Potassium hydroxide',cat:'base',color:'#eeeafa'},
  {id:'Ca(OH)2',name:'Nước vôi trong',cat:'base',color:'#eeeafa'}, {id:'Ba(OH)2',name:'Barium hydroxide',cat:'base',color:'#eeeafa'},
  {id:'NaCl',name:'Sodium chloride',cat:'salt',color:'#fff3dc'}, {id:'CuSO4',name:'Copper(II) sulfate',cat:'salt',color:'#b9e4f6'},
  {id:'FeCl3',name:'Iron(III) chloride',cat:'salt',color:'#f3d6a3'}, {id:'AgNO3',name:'Silver nitrate',cat:'salt',color:'#fff3dc'},
  {id:'BaCl2',name:'Barium chloride',cat:'salt',color:'#fff3dc'}, {id:'Na2CO3',name:'Sodium carbonate',cat:'salt',color:'#fff3dc'},
  {id:'NaHCO3',name:'Sodium bicarbonate',cat:'salt',color:'#fff3dc'}, {id:'Na2SO4',name:'Sodium sulfate',cat:'salt',color:'#fff3dc'},
  {id:'KI',name:'Potassium iodide',cat:'salt',color:'#fff3dc'}, {id:'Pb(NO3)2',name:'Lead(II) nitrate',cat:'salt',color:'#fff3dc'},
  {id:'FeSO4',name:'Iron(II) sulfate',cat:'salt',color:'#dcebc6'}, {id:'NH4Cl',name:'Ammonium chloride',cat:'salt',color:'#fff3dc'},
  {id:'Fe',name:'Sắt',cat:'metal',color:'#d8dce0'}, {id:'Cu',name:'Đồng',cat:'metal',color:'#e8a56f'},
  {id:'Zn',name:'Kẽm',cat:'metal',color:'#d8dce0'}, {id:'Mg',name:'Magnesium',cat:'metal',color:'#e2e5e6'},
  {id:'Al',name:'Nhôm',cat:'metal',color:'#dfe3e5'}, {id:'O2',name:'Oxygen',cat:'other',color:'#d9f1ff'},
  {id:'CO2',name:'Carbon dioxide',cat:'other',color:'#e8f3f5'}, {id:'Cl2',name:'Chlorine',cat:'other',color:'#dce899'},
  {id:'Br2',name:'Bromine',cat:'other',color:'#bd6c4b'}, {id:'H2O',name:'Nước',cat:'other',color:'#ccebf4'}
];

const R = (a,b,equation,phenomenon,type,explain,color='#cfeef1',condition='normal',danger='') => ({a,b,equation,phenomenon,type,explain,color,condition,danger});
const reactions = [
  R('Fe','CuSO4','Fe + CuSO₄ → FeSO₄ + Cu↓','Đồng màu đỏ nâu bám lên sắt; dung dịch xanh lam nhạt dần.','color','Fe khử Cu²⁺ thành Cu và bị oxi hóa thành Fe²⁺.','#cfe5c7'),
  R('Zn','CuSO4','Zn + CuSO₄ → ZnSO₄ + Cu↓','Đồng đỏ nâu xuất hiện; màu xanh của dung dịch mất dần.','color','Zn đứng trước Cu trong dãy hoạt động hóa học.','#e8f4f5'),
  R('Cu','AgNO3','Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag↓','Tinh thể bạc bám trên đồng; dung dịch chuyển xanh.','precipitate','Cu nhường electron cho Ag⁺.','#70bde4'),
  R('Fe','HCl','Fe + 2HCl → FeCl₂ + H₂↑','Sắt tan dần, có bọt khí không màu thoát ra.','gas','Fe đẩy H⁺ ra khỏi dung dịch axit.','#dbeccf'),
  R('Zn','HCl','Zn + 2HCl → ZnCl₂ + H₂↑','Kẽm tan, sủi bọt khí hydrogen.','gas','Zn bị oxi hóa; H⁺ bị khử thành H₂.'),
  R('Mg','HCl','Mg + 2HCl → MgCl₂ + H₂↑','Magnesium tan nhanh và sủi nhiều bọt khí.','gas','Mg hoạt động mạnh, phản ứng với axit giải phóng H₂.'),
  R('Al','HCl','2Al + 6HCl → 2AlCl₃ + 3H₂↑','Sau khi lớp oxide tan, nhôm tan và thoát khí.','gas','Al đẩy hydrogen khỏi axit.'),
  R('Cu','HCl','Không phản ứng','Không quan sát thấy hiện tượng.','none','Cu đứng sau H trong dãy hoạt động hóa học nên không phản ứng với HCl loãng.'),
  R('AgNO3','NaCl','AgNO₃ + NaCl → AgCl↓ + NaNO₃','Xuất hiện kết tủa trắng AgCl.','precipitate','Ag⁺ kết hợp Cl⁻ tạo chất ít tan AgCl.','#e9edf0'),
  R('BaCl2','Na2SO4','BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl','Xuất hiện kết tủa trắng BaSO₄.','precipitate','Ba²⁺ + SO₄²⁻ → BaSO₄↓.','#f2f1e9'),
  R('Pb(NO3)2','KI','Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃','Xuất hiện kết tủa vàng tươi PbI₂.','precipitate','Pb²⁺ kết hợp I⁻ tạo PbI₂ ít tan.','#f0cd3f','normal','Muối chì độc; chỉ quan sát trong mô phỏng hoặc dưới sự giám sát chuyên môn.'),
  R('CuSO4','NaOH','CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄','Kết tủa xanh lam Cu(OH)₂ xuất hiện.','precipitate','Cu²⁺ + 2OH⁻ → Cu(OH)₂↓.','#64b7e0'),
  R('FeCl3','NaOH','FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl','Kết tủa nâu đỏ Fe(OH)₃ xuất hiện.','precipitate','Fe³⁺ + 3OH⁻ → Fe(OH)₃↓.','#a85f3d'),
  R('FeSO4','NaOH','FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄','Kết tủa trắng xanh, dần hóa nâu ngoài không khí.','precipitate','Fe²⁺ tạo Fe(OH)₂; chất này dễ bị O₂ oxi hóa.','#a8c69b'),
  R('HCl','NaOH','HCl + NaOH → NaCl + H₂O','Dung dịch ấm lên, không có kết tủa hay khí.','heat','H⁺ + OH⁻ → H₂O; đây là phản ứng trung hòa.','#e9eef0'),
  R('H2SO4','KOH','H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O','Dung dịch ấm lên.','heat','Axit phản ứng với bazơ tạo muối và nước.'),
  R('CH3COOH','NaOH','CH₃COOH + NaOH → CH₃COONa + H₂O','Không có hiện tượng nhìn thấy rõ; dung dịch hơi ấm.','heat','Axit yếu được trung hòa bởi bazơ mạnh.'),
  R('HCl','Na2CO3','2HCl + Na₂CO₃ → 2NaCl + CO₂↑ + H₂O','Sủi bọt mạnh do khí CO₂ thoát ra.','gas','CO₃²⁻ nhận H⁺ tạo H₂CO₃ rồi phân hủy.'),
  R('HCl','NaHCO3','HCl + NaHCO₃ → NaCl + CO₂↑ + H₂O','Có bọt khí CO₂ thoát ra.','gas','HCO₃⁻ phản ứng với H⁺ tạo CO₂ và H₂O.'),
  R('H2SO4','Na2CO3','H₂SO₄ + Na₂CO₃ → Na₂SO₄ + CO₂↑ + H₂O','Sủi bọt khí không màu.','gas','Axit tác dụng với muối carbonate giải phóng CO₂.'),
  R('CO2','Ca(OH)2','CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O','Nước vôi trong vẩn đục do kết tủa trắng.','precipitate','Đây là phản ứng thường dùng để nhận biết CO₂.','#f2f1e9'),
  R('NH4Cl','NaOH','NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O','Khí mùi khai thoát ra, làm quỳ tím ẩm hóa xanh.','gas','NH₄⁺ + OH⁻ → NH₃ + H₂O.','#e8f2ef','heat','NH₃ gây kích ứng; không ngửi trực tiếp khí trong thí nghiệm thật.'),
  R('Cl2','KI','Cl₂ + 2KI → 2KCl + I₂','Dung dịch chuyển vàng nâu do iodine tạo thành.','color','Cl₂ oxi hóa I⁻ thành I₂.','#bd864f','normal','Chlorine là khí độc; phản ứng thật chỉ làm trong tủ hút bởi người có chuyên môn.'),
  R('Br2','KI','Br₂ + 2KI → 2KBr + I₂','Màu bromine nhạt dần, iodine màu nâu xuất hiện.','color','Br₂ oxi hóa I⁻ thành I₂.','#a97450','normal','Bromine độc và ăn mòn; chỉ mô phỏng.'),
  R('Fe','Cl2','2Fe + 3Cl₂ → 2FeCl₃','Sắt cháy sáng, tạo khói nâu đỏ.','heat','Fe bị oxi hóa lên +3 trong chlorine.','#c98345','heat','Chlorine độc; không tự thực hiện.'),
  R('Mg','O2','2Mg + O₂ → 2MgO','Magnesium cháy với ánh sáng trắng chói, tạo bột trắng.','heat','Mg nhường electron cho O₂ tạo MgO.','#f7f7f2','burn','Không nhìn trực tiếp ánh sáng magnesium cháy; chỉ thực hiện có giáo viên giám sát.'),
  R('Cu','O2','2Cu + O₂ → 2CuO','Đồng đỏ chuyển thành chất rắn màu đen.','color','Cu bị oxi hóa thành CuO khi đun nóng.','#383b3e','heat'),
  R('Fe','O2','3Fe + 2O₂ → Fe₃O₄','Sắt cháy tóe sáng, tạo chất rắn đen.','heat','Sắt phản ứng với oxygen ở nhiệt độ cao.','#35383a','burn'),
  R('Ca(OH)2','Na2CO3','Ca(OH)₂ + Na₂CO₃ → CaCO₃↓ + 2NaOH','Xuất hiện kết tủa trắng CaCO₃.','precipitate','Ca²⁺ + CO₃²⁻ → CaCO₃↓.','#f2f1e9'),
  R('Ba(OH)2','H2SO4','Ba(OH)₂ + H₂SO₄ → BaSO₄↓ + 2H₂O','Kết tủa trắng xuất hiện, dung dịch ấm lên.','precipitate','Đồng thời xảy ra tạo kết tủa và trung hòa.','#f2f1e9'),
  R('Ba(OH)2','Na2SO4','Ba(OH)₂ + Na₂SO₄ → BaSO₄↓ + 2NaOH','Xuất hiện kết tủa trắng BaSO₄.','precipitate','BaSO₄ rất ít tan trong nước.','#f2f1e9'),
  R('FeCl3','KI','2FeCl₃ + 2KI → 2FeCl₂ + 2KCl + I₂','Dung dịch xuất hiện màu nâu của iodine.','color','Fe³⁺ oxi hóa I⁻ thành I₂ và bị khử thành Fe²⁺.','#a67b43'),
  R('HCl','AgNO3','HCl + AgNO₃ → AgCl↓ + HNO₃','Xuất hiện kết tủa trắng AgCl.','precipitate','Ag⁺ + Cl⁻ → AgCl↓.','#e9edf0'),
  R('H2SO4','BaCl2','H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl','Xuất hiện kết tủa trắng BaSO₄.','precipitate','Phản ứng nhận biết ion sulfate.','#f2f1e9'),
  R('Na2CO3','CuSO4','Na₂CO₃ + CuSO₄ → CuCO₃↓ + Na₂SO₄','Xuất hiện kết tủa xanh lục.','precipitate','Cu²⁺ kết hợp CO₃²⁻ tạo muối ít tan.','#72b89c'),
  R('NaOH','Al','2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑','Nhôm tan dần và có khí thoát ra.','gas','Al có tính lưỡng tính, phản ứng với dung dịch kiềm.','#dceced','normal','Phản ứng tỏa nhiệt và sinh khí dễ cháy; chỉ thực hiện có giáo viên giám sát.'),
  R('H2O','Na2CO3','Na₂CO₃ + H₂O ⇌ NaHCO₃ + NaOH','Không có hiện tượng rõ; dung dịch có môi trường bazơ.','none','Ion CO₃²⁻ thủy phân tạo OH⁻.'),
  R('H2O','CO2','CO₂ + H₂O ⇌ H₂CO₃','CO₂ tan một phần, tạo dung dịch axit yếu.','none','Cân bằng tạo carbonic acid diễn ra thuận nghịch.'),
  R('FeCl3','AgNO3','FeCl₃ + 3AgNO₃ → 3AgCl↓ + Fe(NO₃)₃','Xuất hiện kết tủa trắng AgCl.','precipitate','Ag⁺ phản ứng với Cl⁻ trong dung dịch.','#e9edf0'),
  R('CuSO4','BaCl2','CuSO₄ + BaCl₂ → BaSO₄↓ + CuCl₂','Xuất hiện kết tủa trắng, dung dịch còn màu xanh lục nhạt.','precipitate','Ba²⁺ + SO₄²⁻ → BaSO₄↓.','#dce8d5')
  ,R('HNO3','NaOH','HNO₃ + NaOH → NaNO₃ + H₂O','Dung dịch ấm lên, không có khí hay kết tủa.','heat','H⁺ kết hợp OH⁻ tạo nước; đây là phản ứng trung hòa.','#e9eef0')
];

let chosen=[]; let activeCategory='all';
const grid=document.querySelector('#chemical-grid');
const normalizePair=(a,b)=>[a,b].sort().join('|');

function renderChemicals(query=''){
  const q=query.toLowerCase().trim();
  grid.innerHTML='';
  chemicals.filter(c=>(activeCategory==='all'||c.cat===activeCategory)&&(!q||c.id.toLowerCase().includes(q)||c.name.toLowerCase().includes(q))).forEach(c=>{
    const button=document.createElement('button'); button.className='chemical'+(chosen.includes(c.id)?' selected':'');
    button.dataset.id=c.id; button.innerHTML=`<b>${format(c.id)}</b><small>${c.name}</small>`;
    button.addEventListener('click',()=>choose(c.id)); grid.appendChild(button);
  });
}
function format(text){return text.replace(/(\d+)/g,'<sub>$1</sub>');}
function choose(id){
  if(chosen.includes(id)) chosen=chosen.filter(x=>x!==id); else if(chosen.length<2) chosen.push(id); else chosen=[chosen[1],id];
  updateSlots(); renderChemicals(document.querySelector('#chemical-search').value);
}
function updateSlots(){
  ['a','b'].forEach((key,i)=>{const el=document.querySelector(`#slot-${key} b`);el.innerHTML=chosen[i]?format(chosen[i]):'Chưa chọn';});
  document.querySelector('#run-btn').disabled=chosen.length!==2;
}
function clearLab(){chosen=[];updateSlots();renderChemicals();document.querySelector('#result-panel').innerHTML='<div class="empty-result"><span>⌁</span><h2>Chưa có thí nghiệm</h2><p>Chọn hai chất ở kệ bên trái, sau đó nhấn “Tiến hành phản ứng”.</p></div>';resetVessel();}
function resetVessel(){const v=document.querySelector('#vessel');v.className='reaction-vessel';v.querySelector('.solution').style.background='#cfeef1';document.querySelector('.burner').classList.remove('on');document.querySelector('.experiment-area').classList.remove('reacting','reaction-strong','reaction-color','reaction-none');document.querySelector('#reaction-status').textContent='Sẵn sàng thí nghiệm';}
function runReaction(){
  resetVessel(); const condition=document.querySelector('#condition').value;
  const reaction=reactions.find(r=>normalizePair(r.a,r.b)===normalizePair(...chosen)&&(r.condition===condition||r.condition==='normal'));
  const fallback=reactions.find(r=>normalizePair(r.a,r.b)===normalizePair(...chosen));
  const area=document.querySelector('.experiment-area');
  area.classList.add('reacting'); document.querySelector('#reaction-status').textContent='Đang rót hóa chất…';
  document.querySelector('#run-btn').disabled=true;
  setTimeout(()=>{document.querySelector('#reaction-status').textContent='Đang quan sát phản ứng…';},850);
  setTimeout(()=>showResult(reaction, fallback, condition),1600);
}
function showResult(r,fallback,condition){
  const panel=document.querySelector('#result-panel'); const v=document.querySelector('#vessel');
  const area=document.querySelector('.experiment-area'); area.classList.remove('reacting'); document.querySelector('#run-btn').disabled=false;
  if(!r&&fallback){area.classList.add('reaction-none');document.querySelector('#reaction-status').textContent='Chưa đủ điều kiện phản ứng';panel.innerHTML=`<div class="result-head"><div><span class="eyebrow">CẦN ĐIỀU KIỆN KHÁC</span><h2>Phản ứng chưa xảy ra</h2></div><span class="result-badge none">Đổi điều kiện</span></div><div class="equation">Hãy chọn: ${fallback.condition==='heat'?'Đun nóng':'Đốt cháy trong O₂'}</div><div class="result-item"><small>GỢI Ý</small><p>Điều kiện là một phần quan trọng của phương trình hóa học.</p></div>`;return;}
  if(!r){area.classList.add('reaction-none');document.querySelector('#reaction-status').textContent='Không ghi nhận phản ứng';panel.innerHTML=`<div class="result-head"><div><span class="eyebrow">KẾT QUẢ</span><h2>Không ghi nhận phản ứng</h2></div><span class="result-badge none">Không phản ứng</span></div><div class="equation">${format(chosen[0])} + ${format(chosen[1])} → không phản ứng</div><div class="result-item"><small>GIẢI THÍCH</small><p>Trong điều kiện đã chọn, cặp chất này không có phản ứng thuộc chương trình THPT hoặc chưa có trong thư viện.</p></div>`;return;}
  document.querySelector('#reaction-status').textContent=labelType(r.type);
  v.querySelector('.solution').style.background=r.color;
  if(r.type==='gas')v.classList.add('gas');
  if(r.type==='precipitate')v.classList.add('precipitate');
  if(r.type==='color')area.classList.add('reaction-color');
  if(r.type==='heat'){v.classList.add('heat');area.classList.add('reaction-strong');document.querySelector('.burner').classList.add('on');}
  const warning=r.danger?`<div class="danger-warning"><b>⚠ Cảnh báo an toàn:</b> ${r.danger}</div>`:'';
  panel.innerHTML=`<div class="result-head"><div><span class="eyebrow">KẾT QUẢ THÍ NGHIỆM</span><h2>${r.type==='none'?'Không có phản ứng rõ rệt':'Phản ứng đã xảy ra'}</h2></div><span class="result-badge ${r.type==='none'?'none':''}">${labelType(r.type)}</span></div><div class="equation">${format(r.equation)}</div><div class="result-grid"><div class="result-item"><small>HIỆN TƯỢNG</small><p>${r.phenomenon}</p></div><div class="result-item"><small>BẢN CHẤT</small><p>${r.explain}</p></div><div class="result-item"><small>ĐIỀU KIỆN</small><p>${condition==='heat'?'Đun nóng':condition==='burn'?'Đốt cháy trong oxygen':'Điều kiện thường'}</p></div></div>${warning}`;
  panel.scrollIntoView({behavior:'smooth',block:'center'});
}
function labelType(type){return({gas:'Có khí thoát ra',precipitate:'Tạo kết tủa',color:'Đổi màu',heat:'Tỏa nhiệt / cháy',none:'Không phản ứng'})[type]||'Phản ứng';}

document.querySelector('#reaction-count').textContent=`${reactions.length}`;
document.querySelector('#chemical-search').addEventListener('input',e=>renderChemicals(e.target.value));
document.querySelectorAll('.category-tabs button').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.category-tabs .active').classList.remove('active');b.classList.add('active');activeCategory=b.dataset.category;renderChemicals(document.querySelector('#chemical-search').value);}));
document.querySelector('#clear-btn').addEventListener('click',clearLab); document.querySelector('#run-btn').addEventListener('click',runReaction);
document.querySelectorAll('.challenge-list button').forEach(b=>b.addEventListener('click',()=>{chosen=[b.dataset.a,b.dataset.b];updateSlots();renderChemicals();document.querySelector('.lab-workspace').scrollIntoView({behavior:'smooth'});}));
renderChemicals();
