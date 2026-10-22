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

const extraQuizQuestions = {
  atomic: [
    ['Hạt nào quyết định nguyên tố hóa học?',['Electron','Proton','Neutron','Nucleon'],1,'Số proton Z là dấu hiệu đặc trưng của một nguyên tố.'],
    ['Số electron tối đa ở lớp K là bao nhiêu?',['2','8','18','32'],0,'Lớp K có n = 1 nên chứa tối đa 2n² = 2 electron.'],
    ['Nguyên tử có cấu hình 1s²2s²2p⁶3s¹ thuộc chu kì nào?',['1','2','3','4'],2,'Có ba lớp electron nên nguyên tố thuộc chu kì 3.'],
    ['Ion Na⁺ có bao nhiêu electron? Biết Z(Na)=11.',['10','11','12','22'],0,'Na nhường một electron nên Na⁺ còn 10 electron.'],
    ['Hai nguyên tử ³⁵Cl và ³⁷Cl là gì của nhau?',['Đồng vị','Đồng phân','Đồng đẳng','Hai ion'],0,'Chúng cùng số proton nhưng khác số neutron nên là đồng vị.'],
    ['Phân lớp p chứa tối đa bao nhiêu electron?',['2','6','10','14'],1,'Phân lớp p có 3 orbital, mỗi orbital tối đa 2 electron.'],
    ['Nguyên tử có Z=17 có bao nhiêu electron hóa trị?',['1','5','7','17'],2,'Cấu hình ngoài cùng là 3s²3p⁵, có 7 electron hóa trị.'],
    ['Trong cùng một nhóm A, đi từ trên xuống, bán kính nguyên tử thế nào?',['Giảm','Tăng','Không đổi','Tuần hoàn không quy luật'],1,'Số lớp electron tăng nên bán kính nguyên tử tăng.'],
    ['Trong chu kì 3, nguyên tố có độ âm điện lớn nhất là gì?',['Na','Mg','Al','Cl'],3,'Trong một chu kì độ âm điện tăng dần; Cl lớn nhất trong các lựa chọn.'],
    ['Cấu hình electron của Mg²⁺, Z=12, là gì?',['1s²2s²2p⁶','1s²2s²2p⁶3s²','1s²2s²2p⁴','1s²2s²2p⁶3s¹'],0,'Mg mất hai electron 3s nên Mg²⁺ có cấu hình bền 1s²2s²2p⁶.'],
    ['Nguyên tố có cấu hình ngoài cùng 3s²3p⁴ thuộc nhóm nào?',['IIA','IVA','VIA','VIIA'],2,'Có 6 electron hóa trị nên thuộc nhóm VIA (nhóm 16).'],
    ['Orbital nguyên tử chứa tối đa bao nhiêu electron?',['1','2','6','8'],1,'Theo nguyên lý Pauli, một orbital tối đa có 2 electron ngược spin.'],
    ['So sánh bán kính: Na, Na⁺ và Mg²⁺. Thứ tự giảm dần đúng là?',['Na > Na⁺ > Mg²⁺','Mg²⁺ > Na⁺ > Na','Na⁺ > Mg²⁺ > Na','Na > Mg²⁺ > Na⁺'],0,'Na trung hòa có thêm một lớp; Na⁺ và Mg²⁺ đẳng electron nhưng Mg²⁺ có điện tích hạt nhân lớn hơn.'],
    ['Nguyên tử X có tổng 28 hạt, trong đó số hạt mang điện nhiều hơn hạt không mang điện 8. Z của X là?',['8','9','10','12'],1,'2Z + N = 28 và 2Z − N = 8, suy ra 4Z = 36 nên Z = 9.'],
    ['Ion X²⁻ có 18 electron. Số proton của X là?',['16','18','20','14'],0,'Nguyên tử X nhận 2e tạo X²⁻, nên Z + 2 = 18, Z = 16.'],
    ['Số electron độc thân của nguyên tử N, Z=7, ở trạng thái cơ bản là?',['1','2','3','5'],2,'Cấu hình 1s²2s²2p³ có ba electron p phân bố độc thân theo Hund.'],
    ['Nguyên tố X có hai đồng vị 10 và 11 với tỉ lệ tương ứng 20% và 80%. Nguyên tử khối trung bình là?',['10,2','10,5','10,8','11,0'],2,'Ā = 10×0,2 + 11×0,8 = 10,8.']
  ],
  redox: [
    ['Số oxi hóa của oxygen trong hầu hết hợp chất là?',['−2','−1','0','+2'],0,'Trong hầu hết hợp chất, oxygen có số oxi hóa −2.'],
    ['Trong Zn + CuSO₄ → ZnSO₄ + Cu, chất oxi hóa là?',['Zn','Cu²⁺','SO₄²⁻','Cu'],1,'Cu²⁺ nhận electron nên là chất oxi hóa.'],
    ['Quá trình Fe²⁺ → Fe³⁺ + e là quá trình gì?',['Khử','Oxi hóa','Trung hòa','Điện li'],1,'Fe²⁺ nhường electron nên bị oxi hóa.'],
    ['Số oxi hóa của Mn trong KMnO₄ là?',['+2','+4','+6','+7'],3,'(+1) + Mn + 4(−2) = 0 nên Mn = +7.'],
    ['Trong Cl₂ + 2KI → 2KCl + I₂, ion I⁻ đóng vai trò gì?',['Chất oxi hóa','Chất khử','Môi trường','Xúc tác'],1,'I⁻ nhường electron tạo I₂ nên là chất khử.'],
    ['Một nguyên tử Al chuyển thành Al³⁺ đã nhường bao nhiêu electron?',['1','2','3','6'],2,'Al → Al³⁺ + 3e.'],
    ['Số oxi hóa của N trong NH₄⁺ là?',['−3','−1','+3','+5'],0,'N + 4(+1) = +1 nên N = −3.'],
    ['Phản ứng nào không phải phản ứng oxi hóa – khử?',['2Mg + O₂ → 2MgO','HCl + NaOH → NaCl + H₂O','Fe + CuSO₄ → FeSO₄ + Cu','2KClO₃ → 2KCl + 3O₂'],1,'Phản ứng trung hòa không làm thay đổi số oxi hóa.'],
    ['Trong 2FeCl₂ + Cl₂ → 2FeCl₃, tổng số electron Fe²⁺ nhường là?',['1','2','3','4'],1,'Mỗi Fe²⁺ nhường 1e; hai ion nhường tổng cộng 2e.'],
    ['Hệ số của O₂ khi cân bằng CH₄ + O₂ → CO₂ + H₂O là?',['1','2','3','4'],1,'Phương trình cân bằng: CH₄ + 2O₂ → CO₂ + 2H₂O.'],
    ['Trong phản ứng 2KClO₃ → 2KCl + 3O₂, chlorine thay đổi số oxi hóa thế nào?',['+5 xuống −1','−1 lên +5','+7 xuống −1','Không đổi'],0,'Cl trong KClO₃ là +5, trong KCl là −1 nên bị khử.'],
    ['Phản ứng tự oxi hóa – khử là phản ứng nào?',['Cl₂ + 2NaOH → NaCl + NaClO + H₂O','Zn + 2HCl → ZnCl₂ + H₂','CaO + H₂O → Ca(OH)₂','AgNO₃ + NaCl → AgCl + NaNO₃'],0,'Cl₂ vừa bị khử xuống −1 vừa bị oxi hóa lên +1.'],
    ['Trong MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O, HCl đóng vai trò gì?',['Chỉ là axit','Chỉ là chất khử','Vừa tạo môi trường vừa là chất khử','Chất oxi hóa'],2,'Cl⁻ bị oxi hóa thành Cl₂, đồng thời HCl cung cấp môi trường axit.'],
    ['Tỉ lệ Fe²⁺ : MnO₄⁻ trong môi trường axit là?',['1:1','5:1','2:1','1:5'],1,'MnO₄⁻ nhận 5e về Mn²⁺; mỗi Fe²⁺ nhường 1e nên tỉ lệ 5:1.'],
    ['Trong Cr₂O₇²⁻, số oxi hóa của Cr là?',['+3','+4','+6','+7'],2,'2Cr + 7(−2) = −2 nên Cr = +6.'],
    ['Khi cân bằng bằng electron, bước nào phải thực hiện trước?',['Đặt hệ số sản phẩm','Xác định số oxi hóa thay đổi','Cộng nước','Rút gọn hệ số'],1,'Phải xác định nguyên tố thay đổi số oxi hóa để lập quá trình nhường–nhận e.'],
    ['Trong aFe + bHNO₃ → Fe(NO₃)₃ + NO + H₂O, tỉ lệ Fe:NO là?',['1:1','2:1','3:1','1:3'],0,'Fe nhường 3e; N(+5) nhận 3e thành N(+2), nên Fe:NO = 1:1.']
  ],
  equilibrium: [
    ['Cân bằng hóa học là cân bằng gì?',['Tĩnh','Động','Không bền','Chỉ có phản ứng thuận'],1,'Ở cân bằng, hai phản ứng vẫn diễn ra với tốc độ bằng nhau.'],
    ['Tại cân bằng, tốc độ phản ứng thuận và nghịch thế nào?',['Thuận lớn hơn','Nghịch lớn hơn','Bằng nhau','Đều bằng 0'],2,'Cân bằng động có v thuận = v nghịch và đều khác 0.'],
    ['Yếu tố nào không làm chuyển dịch cân bằng?',['Nồng độ','Áp suất','Nhiệt độ','Chất xúc tác'],3,'Xúc tác chỉ giúp hệ đạt cân bằng nhanh hơn.'],
    ['Thêm chất phản ứng vào hệ cân bằng làm hệ thường chuyển dịch theo chiều nào?',['Chiều tạo thêm chất phản ứng','Chiều tiêu thụ chất vừa thêm','Không đổi','Ngừng phản ứng'],1,'Hệ chuyển dịch để làm giảm tác động tăng nồng độ.'],
    ['Giảm áp suất của cân bằng khí làm hệ chuyển về phía nào?',['Ít mol khí','Nhiều mol khí','Không có khí','Luôn sang trái'],1,'Hệ chuyển về phía nhiều mol khí hơn để tăng áp suất.'],
    ['Hằng số cân bằng K chỉ phụ thuộc chủ yếu vào yếu tố nào?',['Nồng độ đầu','Áp suất','Nhiệt độ','Xúc tác'],2,'Với một phản ứng xác định, K chỉ thay đổi khi nhiệt độ thay đổi.'],
    ['Nếu K rất lớn thì ở cân bằng ưu thế thuộc về?',['Chất phản ứng','Sản phẩm','Hai phía bằng nhau','Xúc tác'],1,'K lớn cho biết cân bằng thiên về phía tạo sản phẩm.'],
    ['Với 2SO₂ + O₂ ⇌ 2SO₃, tăng áp suất làm cân bằng dịch theo chiều nào?',['Thuận','Nghịch','Không đổi','Không xác định'],0,'Chiều thuận làm giảm số mol khí từ 3 xuống 2.'],
    ['Với H₂ + I₂ ⇌ 2HI, thay đổi áp suất có làm chuyển dịch cân bằng không?',['Có, sang phải','Có, sang trái','Không','Chỉ khi có xúc tác'],2,'Hai vế có cùng tổng số mol khí nên áp suất không làm chuyển dịch.'],
    ['Lấy bớt NH₃ khỏi N₂ + 3H₂ ⇌ 2NH₃ làm cân bằng dịch thế nào?',['Sang phải','Sang trái','Không đổi','Dừng'],0,'Hệ tạo thêm NH₃ để bù lượng bị lấy đi.'],
    ['Phản ứng thuận thu nhiệt: tăng nhiệt độ làm K biến đổi thế nào?',['Tăng','Giảm','Không đổi','Bằng 0'],0,'Tăng nhiệt độ thuận lợi chiều thu nhiệt nên K tăng.'],
    ['Phản ứng thuận tỏa nhiệt: giảm nhiệt độ làm cân bằng dịch theo chiều nào?',['Thuận','Nghịch','Không đổi','Không xác định'],0,'Giảm nhiệt độ thuận lợi chiều tỏa nhiệt.'],
    ['Thêm khí trơ ở thể tích không đổi vào cân bằng khí lý tưởng có tác động gì?',['Dịch phải','Dịch trái','Không chuyển dịch','Làm K tăng'],2,'Áp suất riêng phần các chất phản ứng không đổi nên cân bằng không dịch chuyển.'],
    ['Với CaCO₃(r) ⇌ CaO(r) + CO₂(k), biểu thức Kc là?',['[CaO][CO₂]/[CaCO₃]','[CO₂]','1/[CO₂]','[CaO][CO₂]'],1,'Nồng độ chất rắn tinh khiết không xuất hiện trong biểu thức K.'],
    ['Nếu Q < K, phản ứng sẽ diễn biến chủ yếu theo chiều nào để đạt cân bằng?',['Thuận','Nghịch','Không đổi','Không xác định'],0,'Q < K nghĩa là còn thiếu sản phẩm, hệ chuyển theo chiều thuận.'],
    ['Nén hệ N₂O₄ ⇌ 2NO₂ ở nhiệt độ không đổi làm màu nâu đỏ biến đổi cuối cùng thế nào?',['Đậm hơn so với ngay trước nén','Nhạt hơn do dịch trái','Mất hoàn toàn','Không đổi'],1,'Nén làm cân bằng dịch về N₂O₄ không màu, nên màu nhạt bớt sau khi tái cân bằng.'],
    ['Với phản ứng ΔH < 0, biện pháp vừa tăng tốc độ vừa tăng hiệu suất cân bằng là?',['Giảm nhiệt độ thật thấp','Tăng nhiệt độ','Dùng xúc tác và chọn nhiệt độ thích hợp','Chỉ dùng xúc tác'],2,'Nhiệt độ thấp tăng hiệu suất nhưng giảm tốc độ; thực tế cần xúc tác và nhiệt độ tối ưu.']
  ],
  organic: [
    ['Hợp chất hữu cơ nhất thiết phải chứa nguyên tố nào?',['O','N','C','H'],2,'Carbon là nguyên tố bắt buộc của hợp chất hữu cơ.'],
    ['Liên kết đặc trưng trong alkene là?',['C–C','C=C','C≡C','O–H'],1,'Alkene chứa một liên kết đôi C=C.'],
    ['Tên của CH₃CH₂CH₃ là?',['Methane','Ethane','Propane','Butane'],2,'Mạch có 3 carbon no nên tên là propane.'],
    ['Phản ứng đặc trưng của alkane là?',['Cộng','Thế','Trùng hợp','Ester hóa'],1,'Alkane thường tham gia phản ứng thế halogen.'],
    ['Chất nào thuộc dãy đồng đẳng của methane?',['C₂H₄','C₂H₂','C₃H₈','C₆H₆'],2,'C₃H₈ thỏa công thức alkane CₙH₂ₙ₊₂.'],
    ['Acetylene có công thức phân tử nào?',['C₂H₂','C₂H₄','C₂H₆','C₃H₄'],0,'Acetylene (ethyne) có công thức C₂H₂.'],
    ['Benzene có công thức phân tử là?',['C₆H₆','C₆H₁₂','C₆H₁₄','C₅H₆'],0,'Benzene là hydrocarbon thơm C₆H₆.'],
    ['Sản phẩm chính khi hydrate hóa ethylene là?',['Methanol','Ethanol','Ethanal','Acetic acid'],1,'CH₂=CH₂ cộng H₂O tạo C₂H₅OH.'],
    ['Ethanol phản ứng với Na giải phóng khí gì?',['O₂','CO₂','H₂','CH₄'],2,'Nhóm –OH của ethanol phản ứng với Na giải phóng H₂.'],
    ['Phenol làm quỳ tím biến màu thế nào?',['Hóa đỏ','Hóa xanh','Không đổi màu','Mất màu'],2,'Phenol là axit rất yếu nên không làm đổi màu quỳ tím.'],
    ['Chất nào cho phản ứng tráng bạc?',['CH₃CHO','C₂H₅OH','CH₃COOH','CH₃OCH₃'],0,'Ethanal có nhóm –CHO nên khử được phức bạc.'],
    ['Oxi hóa không hoàn toàn ethanol bằng CuO, đun nóng, thu được gì?',['Ethanal','Ethene','Acetic acid ngay','Methane'],0,'C₂H₅OH + CuO → CH₃CHO + Cu + H₂O.'],
    ['Số đồng phân cấu tạo alkane của C₅H₁₂ là?',['2','3','4','5'],1,'C₅H₁₂ có n-pentane, isopentane và neopentane.'],
    ['Monomer dùng điều chế polyethylene là?',['CH₂=CH₂','CH≡CH','C₆H₆','CH₂=CHCl'],0,'Ethylene trùng hợp tạo polyethylene.'],
    ['Cho 0,1 mol C₂H₄ cộng vừa đủ Br₂. Số mol Br₂ phản ứng là?',['0,05','0,1','0,2','0,4'],1,'Một mol liên kết đôi cộng một mol Br₂.'],
    ['Đốt cháy hoàn toàn hydrocarbon, nếu nCO₂ = nH₂O thì chất thuộc dãy nào?',['Alkane','Alkene','Alkyne','Arene'],1,'Với CₙH₂ₙ, số mol CO₂ bằng số mol H₂O.'],
    ['Chất C₄H₆ làm mất màu Br₂ và tạo kết tủa với AgNO₃/NH₃ có thể là?',['CH≡C–CH₂–CH₃','CH₃–C≡C–CH₃','CH₂=CH–CH=CH₂','Cyclobutene'],0,'Alkyne đầu mạch có H linh động tạo kết tủa bạc acetylide.']
  ],
  ester: [
    ['Nhóm chức của ester là?',['–COOH','–CHO','–COO–','–OH'],2,'Ester chứa nhóm –COO– giữa hai gốc hydrocarbon.'],
    ['Ester no, đơn chức, mạch hở có công thức chung nào?',['CₙH₂ₙO₂','CₙH₂ₙ₊₂O','CₙH₂ₙ₋₂O₂','CₙH₂ₙO'],0,'Ester no đơn chức mạch hở có công thức CₙH₂ₙO₂, n≥2.'],
    ['Methyl acetate có công thức nào?',['CH₃COOCH₃','HCOOC₂H₅','C₂H₅COOH','CH₃CH₂OH'],0,'Methyl acetate là CH₃COOCH₃.'],
    ['Nhiều ester phân tử nhỏ có đặc điểm gì?',['Mùi thơm','Dẫn điện mạnh','Tan vô hạn trong nước','Là chất rắn ion'],0,'Nhiều ester nhẹ là chất lỏng có mùi thơm.'],
    ['Thủy phân ester trong môi trường axit là phản ứng gì?',['Một chiều','Thuận nghịch','Trùng hợp','Oxi hóa – khử'],1,'Ester hóa và thủy phân axit là hai phản ứng thuận nghịch.'],
    ['Xà phòng hóa CH₃COOC₂H₅ bằng NaOH tạo alcohol nào?',['CH₃OH','C₂H₅OH','C₃H₇OH','Glycerol'],1,'Phần –OC₂H₅ của ester tạo ethanol.'],
    ['Một mol triglyceride cần bao nhiêu mol NaOH để xà phòng hóa hoàn toàn?',['1','2','3','6'],2,'Triglyceride có ba liên kết ester nên cần 3 mol NaOH.'],
    ['Chất béo lỏng ở điều kiện thường thường chứa nhiều gốc axit béo nào?',['No','Không no','Thơm','Vô cơ'],1,'Liên kết đôi làm giảm khả năng xếp khít nên chất béo thường ở thể lỏng.'],
    ['Hydrogen hóa chất béo lỏng nhằm mục đích gì?',['Tạo glycerol','Chuyển gốc không no thành no','Xà phòng hóa','Tạo ester mới'],1,'H₂ cộng vào liên kết đôi, làm chất béo rắn hơn.'],
    ['Xà phòng chủ yếu là muối sodium hoặc potassium của chất nào?',['Axit béo','Axit vô cơ','Alcohol','Amino acid'],0,'Xà phòng là muối Na/K của axit béo mạch dài.'],
    ['Trong nước cứng, xà phòng tạo kết tủa với ion nào?',['Na⁺, K⁺','Ca²⁺, Mg²⁺','Cl⁻, NO₃⁻','H⁺, OH⁻'],1,'Muối calcium và magnesium của axit béo ít tan.'],
    ['Số đồng phân ester của C₃H₆O₂ là?',['1','2','3','4'],1,'Có HCOOC₂H₅ và CH₃COOCH₃.'],
    ['Ester X có CTPT C₄H₈O₂. Xà phòng hóa tạo CH₃OH. Gốc alcohol trong X là?',['–CH₃','–C₂H₅','–C₃H₇','–H'],0,'Alcohol CH₃OH cho biết phần alkoxy của ester là –OCH₃.'],
    ['Thủy phân vinyl acetate CH₃COOCH=CH₂ cuối cùng tạo aldehyde nào?',['HCHO','CH₃CHO','C₂H₅CHO','Không tạo aldehyde'],1,'Vinyl alcohol sinh ra chuyển hóa thành acetaldehyde CH₃CHO.'],
    ['Xà phòng hóa 0,1 mol ethyl acetate cần tối thiểu bao nhiêu mol NaOH?',['0,05','0,1','0,2','0,3'],1,'Ester đơn chức phản ứng với NaOH theo tỉ lệ mol 1:1.'],
    ['Đốt cháy ester no, đơn chức, mạch hở thu được quan hệ nào?',['nCO₂ = nH₂O','nCO₂ > nH₂O','nCO₂ < nH₂O','Không xác định'],0,'Công thức CₙH₂ₙO₂ cho số mol CO₂ bằng H₂O.'],
    ['Xà phòng hóa hoàn toàn 8,8 g ethyl acetate (M=88) cần bao nhiêu mol NaOH?',['0,05','0,10','0,20','1,00'],1,'n ester = 8,8/88 = 0,10 mol; tỉ lệ với NaOH là 1:1.']
  ],
  electrolysis: [
    ['Anion chuyển về điện cực nào trong bình điện phân?',['Cathode','Anode','Cả hai','Không chuyển động'],1,'Anion mang điện âm bị hút về anode.'],
    ['Tại anode xảy ra quá trình nào?',['Khử','Oxi hóa','Trung hòa','Kết tủa'],1,'Anode là nơi chất nhường electron, tức bị oxi hóa.'],
    ['Trong điện phân, cathode nối với cực nào của nguồn điện một chiều?',['Cực âm','Cực dương','Không nối','Tùy dung dịch'],0,'Trong bình điện phân, cathode nối với cực âm của nguồn.'],
    ['Điện phân nóng chảy NaCl, sản phẩm ở anode là?',['Na','Cl₂','H₂','O₂'],1,'2Cl⁻ → Cl₂ + 2e tại anode.'],
    ['Điện phân dung dịch NaCl có màng ngăn, sản phẩm chính gồm?',['Na và Cl₂','H₂, Cl₂ và NaOH','H₂ và O₂','NaOH và O₂'],1,'Nước bị khử tạo H₂; Cl⁻ bị oxi hóa tạo Cl₂; dung dịch còn NaOH.'],
    ['Định luật Faraday liên hệ khối lượng chất điện phân với đại lượng nào?',['Điện lượng','Áp suất','Thể tích bình','Nhiệt độ duy nhất'],0,'Lượng chất tạo ra tỉ lệ với điện lượng Q = It.'],
    ['Một mol electron mang điện lượng xấp xỉ bao nhiêu?',['9 650 C','96 500 C','965 C','965 000 C'],1,'Hằng số Faraday F ≈ 96 500 C/mol e.'],
    ['Để tạo 1 mol Cu từ Cu²⁺ cần bao nhiêu mol electron?',['1','2','3','4'],1,'Cu²⁺ + 2e → Cu.'],
    ['Điện phân CuSO₄ với anode bằng Cu, khối lượng anode thay đổi thế nào?',['Tăng','Giảm','Không đổi','Tăng rồi giảm'],1,'Cu ở anode bị oxi hóa: Cu → Cu²⁺ + 2e nên anode tan dần.'],
    ['Mạ đồng một vật, vật cần mạ phải nối với điện cực nào?',['Anode','Cathode','Cầu muối','Cực bất kỳ'],1,'Ion Cu²⁺ bị khử và bám lên vật ở cathode.'],
    ['Điện phân dung dịch AgNO₃ với điện cực trơ, sản phẩm cathode là?',['Ag','H₂','O₂','NO₂'],0,'Ag⁺ dễ bị khử thành Ag tại cathode.'],
    ['Điện phân dung dịch K₂SO₄ với điện cực trơ, khí thoát ở hai điện cực là?',['K và SO₂','H₂ và O₂','H₂ và SO₂','K và O₂'],1,'Nước bị điện phân: H₂ ở cathode, O₂ ở anode.'],
    ['Dòng điện 9 650 C tương ứng bao nhiêu mol electron?',['0,01','0,10','1,00','10,0'],1,'n(e) = Q/F = 9650/96500 = 0,10 mol.'],
    ['Cho 0,2 mol electron qua dung dịch Cu²⁺ dư. Số mol Cu tạo thành là?',['0,05','0,10','0,20','0,40'],1,'Cu²⁺ + 2e → Cu nên nCu = 0,2/2 = 0,1 mol.'],
    ['Điện phân dung dịch CuCl₂ với điện cực trơ, sản phẩm thường là?',['Cu và Cl₂','H₂ và O₂','Cu và O₂','H₂ và Cl₂'],0,'Cu²⁺ bị khử thành Cu; Cl⁻ bị oxi hóa thành Cl₂.'],
    ['Điện phân dung dịch CuSO₄ điện cực trơ, pH dung dịch sau điện phân có xu hướng thế nào?',['Tăng','Giảm','Không đổi','Bằng 7'],1,'Ở anode nước tạo H⁺ và O₂ nên dung dịch axit hơn, pH giảm.'],
    ['Muốn điều chế Al bằng điện phân, phải điện phân chất nào?',['Dung dịch AlCl₃','Al₂O₃ nóng chảy trong cryolite','Dung dịch Al₂(SO₄)₃','Al(OH)₃ trong nước'],1,'Al được sản xuất bằng điện phân Al₂O₃ nóng chảy hòa tan trong cryolite.']
  ]
};

Object.entries(extraQuizQuestions).forEach(([topic, questions]) => {
  quizBank[topic].questions.push(...questions.map(([q,a,c,e]) => ({q,a,c,e})));
  quizBank[topic].questions.forEach((question, index) => {
    question.d = index < 7 ? 'Dễ' : index < 14 ? 'Trung bình' : 'Khó';
  });
});

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
  document.querySelector('#quiz-counter').textContent = `CÂU ${questionIndex + 1} / ${quiz.questions.length} • ${item.d.toUpperCase()}`;
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
