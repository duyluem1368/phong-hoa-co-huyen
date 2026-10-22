const chemicals = [
  {id:'HCl',name:'Axit hydrochloric',cat:'acid',color:'#e6f6f8'}, {id:'H2SO4',name:'Axit sulfuric loãng',cat:'acid',color:'#e6f6f8'},
  {id:'HNO3',name:'Axit nitric loãng',cat:'acid',color:'#e6f6f8'}, {id:'CH3COOH',name:'Axit acetic',cat:'acid',color:'#e6f6f8'},
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
  {id:'Br2',name:'Bromine',cat:'other',color:'#bd6c4b'}, {id:'H2O',name:'Nước',cat:'other',color:'#ccebf4'},
  {id:'H3PO4',name:'Axit phosphoric',cat:'acid',color:'#e6f6f8'}, {id:'NH3',name:'Ammonia',cat:'base',color:'#edf7f3'},
  {id:'CaO',name:'Calcium oxide',cat:'other',color:'#f1f0e8'}, {id:'MgO',name:'Magnesium oxide',cat:'other',color:'#f1f0e8'},
  {id:'CuO',name:'Copper(II) oxide',cat:'other',color:'#36393b'}, {id:'Fe2O3',name:'Iron(III) oxide',cat:'other',color:'#a95035'},
  {id:'Al2O3',name:'Aluminium oxide',cat:'other',color:'#edece7'}, {id:'SO2',name:'Sulfur dioxide',cat:'other',color:'#e5f0f1'},
  {id:'SO3',name:'Sulfur trioxide',cat:'other',color:'#e5f0f1'}, {id:'I2',name:'Iodine',cat:'other',color:'#6b4256'},
  {id:'CaCO3',name:'Calcium carbonate',cat:'salt',color:'#f3f1e9'}, {id:'CaCl2',name:'Calcium chloride',cat:'salt',color:'#fff3dc'},
  {id:'MgCl2',name:'Magnesium chloride',cat:'salt',color:'#fff3dc'}, {id:'FeCl2',name:'Iron(II) chloride',cat:'salt',color:'#dcebc6'},
  {id:'CuCl2',name:'Copper(II) chloride',cat:'salt',color:'#9edbc6'}, {id:'AlCl3',name:'Aluminium chloride',cat:'salt',color:'#fff3dc'},
  {id:'ZnSO4',name:'Zinc sulfate',cat:'salt',color:'#fff3dc'}, {id:'Na2S',name:'Sodium sulfide',cat:'salt',color:'#fff3dc'},
  {id:'Na3PO4',name:'Sodium phosphate',cat:'salt',color:'#fff3dc'}, {id:'Na2SO3',name:'Sodium sulfite',cat:'salt',color:'#fff3dc'},
  {id:'Cu(OH)2',name:'Copper(II) hydroxide',cat:'base',color:'#62b7df'}, {id:'C2H5OH',name:'Ethanol',cat:'other',color:'#eef5f6'},
  {id:'C6H12O6',name:'Glucose',cat:'other',color:'#f4eee1'}, {id:'C3H8O3',name:'Glycerol',cat:'other',color:'#eef5f6'},
  {id:'Hồ tinh bột',name:'Dung dịch hồ tinh bột',cat:'other',color:'#f1eee7'},
  {id:'Ag',name:'Bạc',cat:'metal',color:'#dfe3e5'}, {id:'KCl',name:'Potassium chloride',cat:'salt',color:'#fff3dc'},
  {id:'NaBr',name:'Sodium bromide',cat:'salt',color:'#fff3dc'}, {id:'KBr',name:'Potassium bromide',cat:'salt',color:'#fff3dc'},
  {id:'NaI',name:'Sodium iodide',cat:'salt',color:'#fff3dc'}, {id:'K2SO4',name:'Potassium sulfate',cat:'salt',color:'#fff3dc'},
  {id:'K2CO3',name:'Potassium carbonate',cat:'salt',color:'#fff3dc'}, {id:'MgSO4',name:'Magnesium sulfate',cat:'salt',color:'#fff3dc'},
  {id:'Al2(SO4)3',name:'Aluminium sulfate',cat:'salt',color:'#fff3dc'}, {id:'Cu(NO3)2',name:'Copper(II) nitrate',cat:'salt',color:'#b9e4f6'},
  {id:'Fe(NO3)3',name:'Iron(III) nitrate',cat:'salt',color:'#f3d6a3'}, {id:'Ca(NO3)2',name:'Calcium nitrate',cat:'salt',color:'#fff3dc'},
  {id:'Ba(NO3)2',name:'Barium nitrate',cat:'salt',color:'#fff3dc'}, {id:'Na2SiO3',name:'Sodium silicate',cat:'salt',color:'#fff3dc'},
  {id:'NH4NO3',name:'Ammonium nitrate',cat:'salt',color:'#fff3dc'}, {id:'(NH4)2SO4',name:'Ammonium sulfate',cat:'salt',color:'#fff3dc'},
  {id:'H2O2',name:'Hydrogen peroxide',cat:'other',color:'#e9f6f8'}, {id:'C12H22O11',name:'Sucrose',cat:'other',color:'#f4eee1'},
  {id:'C6H5OH',name:'Phenol',cat:'other',color:'#eef5f6'}, {id:'CH3CHO',name:'Acetaldehyde',cat:'other',color:'#eef5f6'}
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
  R('H2O','Na2CO3','Na₂CO₃ + H₂O ⇌ NaHCO₃ + NaOH','Không có hiện tượng rõ; dung dịch có môi trường bazơ.','equilibrium','Ion CO₃²⁻ thủy phân tạo OH⁻.'),
  R('H2O','CO2','CO₂ + H₂O ⇌ H₂CO₃','CO₂ tan một phần, tạo dung dịch axit yếu.','equilibrium','Cân bằng tạo carbonic acid diễn ra thuận nghịch.'),
  R('FeCl3','AgNO3','FeCl₃ + 3AgNO₃ → 3AgCl↓ + Fe(NO₃)₃','Xuất hiện kết tủa trắng AgCl.','precipitate','Ag⁺ phản ứng với Cl⁻ trong dung dịch.','#e9edf0'),
  R('CuSO4','BaCl2','CuSO₄ + BaCl₂ → BaSO₄↓ + CuCl₂','Xuất hiện kết tủa trắng, dung dịch còn màu xanh lục nhạt.','precipitate','Ba²⁺ + SO₄²⁻ → BaSO₄↓.','#dce8d5')
  ,R('HNO3','NaOH','HNO₃ + NaOH → NaNO₃ + H₂O','Dung dịch ấm lên, không có khí hay kết tủa.','heat','H⁺ kết hợp OH⁻ tạo nước; đây là phản ứng trung hòa.','#e9eef0'),
  R('H3PO4','NaOH','H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O','Dung dịch ấm nhẹ, không có khí hay kết tủa.','heat','Axit phosphoric được trung hòa hoàn toàn khi NaOH dư.','#e9eef0'),
  R('H3PO4','Ca(OH)2','2H₃PO₄ + 3Ca(OH)₂ → Ca₃(PO₄)₂↓ + 6H₂O','Xuất hiện kết tủa trắng calcium phosphate.','precipitate','Ca²⁺ kết hợp PO₄³⁻ tạo muối ít tan.','#f0efe8'),
  R('CaO','H2O','CaO + H₂O → Ca(OH)₂','Vôi sống rã ra, hỗn hợp nóng lên mạnh.','heat','Phản ứng tôi vôi tỏa nhiều nhiệt.','#f1f0e8','normal','Không chạm vào hỗn hợp; phản ứng thật có thể gây bỏng nhiệt và bỏng kiềm.'),
  R('CaO','HCl','CaO + 2HCl → CaCl₂ + H₂O','Chất rắn trắng tan dần, dung dịch ấm lên.','heat','Oxide bazơ phản ứng với axit tạo muối và nước.'),
  R('MgO','HCl','MgO + 2HCl → MgCl₂ + H₂O','Chất rắn trắng tan dần.','color','MgO là oxide bazơ, tác dụng với axit.'),
  R('CuO','HCl','CuO + 2HCl → CuCl₂ + H₂O','Chất rắn đen tan dần, tạo dung dịch xanh lục.','color','CuO là oxide bazơ, tạo muối CuCl₂.','#83cbb6'),
  R('CuO','H2SO4','CuO + H₂SO₄ → CuSO₄ + H₂O','Chất rắn đen tan, dung dịch chuyển xanh lam.','color','CuO phản ứng với axit tạo CuSO₄.','#65b9e6'),
  R('Fe2O3','HCl','Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O','Chất rắn nâu đỏ tan dần, tạo dung dịch vàng nâu.','color','Fe₂O₃ là oxide bazơ.','#d8a04c'),
  R('Al2O3','HCl','Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O','Chất rắn trắng tan dần.','color','Al₂O₃ thể hiện tính bazơ khi phản ứng với axit.'),
  R('Al2O3','NaOH','Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O','Chất rắn tan khi đun nóng với kiềm.','color','Al₂O₃ là oxide lưỡng tính.','#e9eef0','heat'),
  R('CO2','NaOH','CO₂ + 2NaOH → Na₂CO₃ + H₂O','Khí CO₂ bị hấp thụ, không tạo kết tủa.','absorb','Khi NaOH dư, sản phẩm muối là Na₂CO₃.'),
  R('SO2','NaOH','SO₂ + 2NaOH → Na₂SO₃ + H₂O','Khí SO₂ bị dung dịch hấp thụ.','absorb','SO₂ là oxide axit, phản ứng với bazơ.','#e9eef0','normal','SO₂ là khí độc, gây kích ứng hô hấp; chỉ mô phỏng.'),
  R('SO2','Ca(OH)2','SO₂ + Ca(OH)₂ → CaSO₃↓ + H₂O','Nước vôi trong vẩn đục do kết tủa trắng.','precipitate','SO₂ phản ứng với bazơ tạo calcium sulfite.','#eeeeE7','normal','SO₂ độc; không tự tạo hoặc hít khí này.'),
  R('SO3','H2O','SO₃ + H₂O → H₂SO₄','Phản ứng tỏa nhiệt mạnh, tạo sulfuric acid.','heat','SO₃ là oxide axit.','#e9eef0','normal','Phản ứng thật rất mãnh liệt và nguy hiểm; chỉ mô phỏng.'),
  R('FeCl2','NaOH','FeCl₂ + 2NaOH → Fe(OH)₂↓ + 2NaCl','Kết tủa trắng xanh xuất hiện rồi dần hóa nâu.','precipitate','Fe²⁺ + 2OH⁻ → Fe(OH)₂↓.','#a8c69b'),
  R('AlCl3','NaOH','AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl','Xuất hiện kết tủa keo trắng.','precipitate','Al³⁺ + 3OH⁻ → Al(OH)₃↓ khi NaOH chưa dư.','#f1f1ed'),
  R('ZnSO4','NaOH','ZnSO₄ + 2NaOH → Zn(OH)₂↓ + Na₂SO₄','Xuất hiện kết tủa trắng Zn(OH)₂.','precipitate','Zn²⁺ + 2OH⁻ → Zn(OH)₂↓.','#f1f1ed'),
  R('MgCl2','NaOH','MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl','Xuất hiện kết tủa trắng Mg(OH)₂.','precipitate','Mg²⁺ + 2OH⁻ → Mg(OH)₂↓.','#f1f1ed'),
  R('CuCl2','NaOH','CuCl₂ + 2NaOH → Cu(OH)₂↓ + 2NaCl','Xuất hiện kết tủa xanh lam.','precipitate','Cu²⁺ + 2OH⁻ → Cu(OH)₂↓.','#62b7df'),
  R('CaCl2','Na2CO3','CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl','Xuất hiện kết tủa trắng CaCO₃.','precipitate','Ca²⁺ + CO₃²⁻ → CaCO₃↓.','#f0efe8'),
  R('CaCl2','AgNO3','CaCl₂ + 2AgNO₃ → 2AgCl↓ + Ca(NO₃)₂','Xuất hiện kết tủa trắng AgCl.','precipitate','Ag⁺ kết hợp Cl⁻ tạo AgCl.','#e9edf0'),
  R('FeCl2','AgNO3','FeCl₂ + 2AgNO₃ → 2AgCl↓ + Fe(NO₃)₂','Xuất hiện kết tủa trắng AgCl.','precipitate','Ag⁺ + Cl⁻ → AgCl↓.','#e9edf0'),
  R('AlCl3','AgNO3','AlCl₃ + 3AgNO₃ → 3AgCl↓ + Al(NO₃)₃','Xuất hiện kết tủa trắng AgCl.','precipitate','Ag⁺ + Cl⁻ → AgCl↓.','#e9edf0'),
  R('Na3PO4','AgNO3','Na₃PO₄ + 3AgNO₃ → Ag₃PO₄↓ + 3NaNO₃','Xuất hiện kết tủa vàng Ag₃PO₄.','precipitate','3Ag⁺ + PO₄³⁻ → Ag₃PO₄↓.','#e4c643'),
  R('Na3PO4','CaCl2','2Na₃PO₄ + 3CaCl₂ → Ca₃(PO₄)₂↓ + 6NaCl','Xuất hiện kết tủa trắng calcium phosphate.','precipitate','3Ca²⁺ + 2PO₄³⁻ → Ca₃(PO₄)₂↓.','#f0efe8'),
  R('Na2S','HCl','Na₂S + 2HCl → 2NaCl + H₂S↑','Khí không màu thoát ra.','gas','S²⁻ nhận H⁺ tạo H₂S.','#e8f0dc','normal','H₂S cực độc; tuyệt đối không tự thực hiện hoặc ngửi khí.'),
  R('Na2S','CuSO4','Na₂S + CuSO₄ → CuS↓ + Na₂SO₄','Xuất hiện kết tủa đen CuS.','precipitate','Cu²⁺ + S²⁻ → CuS↓.','#25282a','normal','Muối sulfide cần được xử lý đúng quy định; không tự làm.'),
  R('Na2S','FeSO4','Na₂S + FeSO₄ → FeS↓ + Na₂SO₄','Xuất hiện kết tủa đen FeS.','precipitate','Fe²⁺ + S²⁻ → FeS↓.','#2d3330'),
  R('Na2S','Pb(NO3)2','Na₂S + Pb(NO₃)₂ → PbS↓ + 2NaNO₃','Xuất hiện kết tủa đen PbS.','precipitate','Pb²⁺ + S²⁻ → PbS↓.','#242629','normal','Hợp chất chì rất độc; chỉ mô phỏng.'),
  R('CaCO3','HCl','CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O','Chất rắn tan dần, sủi bọt khí CO₂.','gas','Muối carbonate phản ứng với axit giải phóng CO₂.'),
  R('NH3','HCl','NH₃ + HCl → NH₄Cl','Xuất hiện khói trắng ammonium chloride.','precipitate','Hai khí kết hợp tạo các hạt NH₄Cl rất nhỏ.','#f1f1ed','normal','NH₃ và HCl đều gây kích ứng; thí nghiệm thật chỉ làm dưới sự giám sát.'),
  R('NH3','H2O','NH₃ + H₂O ⇌ NH₄⁺ + OH⁻','Ammonia tan nhiều; dung dịch có môi trường bazơ.','equilibrium','Cân bằng tạo OH⁻ làm quỳ tím hóa xanh.'),
  R('I2','Hồ tinh bột','I₂ + hồ tinh bột → phức màu xanh tím','Dung dịch xuất hiện màu xanh tím đặc trưng.','color','Iodine tạo phức màu với amylose trong tinh bột.','#29285f'),
  R('I2','NaOH','I₂ + 2NaOH → NaI + NaIO + H₂O','Màu iodine nhạt rồi mất dần trong dung dịch kiềm lạnh.','color','I₂ vừa bị oxi hóa vừa bị khử.','#e9eef0'),
  R('Cl2','NaOH','Cl₂ + 2NaOH → NaCl + NaClO + H₂O','Màu vàng lục của chlorine nhạt dần.','color','Chlorine tự oxi hóa – khử trong kiềm lạnh.','#e9eef0','normal','Chlorine độc và dung dịch hypochlorite có tính oxi hóa; chỉ mô phỏng.'),
  R('C2H5OH','O2','C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O','Ethanol cháy với ngọn lửa xanh nhạt, tỏa nhiệt.','heat','Phản ứng cháy hoàn toàn tạo CO₂ và H₂O.','#9edbff','burn','Ethanol dễ cháy; không tự thực hiện gần nguồn lửa.'),
  R('C2H5OH','CH3COOH','CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O','Sau phản ứng có mùi thơm đặc trưng của ester.','heat','Phản ứng ester hóa thuận nghịch, cần H₂SO₄ đặc làm xúc tác.','#eef5f6','heat','Thí nghiệm thật cần hóa chất ăn mòn và đun nóng; chỉ làm dưới sự giám sát.'),
  R('C6H12O6','Cu(OH)2','C₆H₁₂O₆ + 2Cu(OH)₂ → C₆H₁₂O₇ + Cu₂O↓ + 3H₂O','Khi đun nóng, kết tủa đỏ gạch Cu₂O xuất hiện.','precipitate','Nhóm aldehyde của glucose khử Cu²⁺ thành Cu⁺.','#b94f32','heat'),
  R('C3H8O3','Cu(OH)2','2C₃H₈O₃ + Cu(OH)₂ → (C₃H₇O₃)₂Cu + 2H₂O','Kết tủa tan, tạo dung dịch xanh lam đậm.','color','Glycerol có các nhóm –OH kề nhau tạo phức với Cu²⁺.','#287ec4'),
  R('HCl','KOH','HCl + KOH → KCl + H₂O','Dung dịch ấm lên, không có khí hay kết tủa.','heat','H⁺ + OH⁻ → H₂O; phản ứng trung hòa.'),
  R('HCl','Ca(OH)2','2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O','Dung dịch ấm lên.','heat','Axit mạnh trung hòa bazơ.'),
  R('HCl','Ba(OH)2','2HCl + Ba(OH)₂ → BaCl₂ + 2H₂O','Dung dịch ấm lên.','heat','H⁺ kết hợp OH⁻ tạo nước.'),
  R('HNO3','KOH','HNO₃ + KOH → KNO₃ + H₂O','Dung dịch ấm lên.','heat','Phản ứng trung hòa axit–bazơ.'),
  R('HNO3','Ca(OH)2','2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O','Dung dịch ấm lên.','heat','Axit nitric trung hòa calcium hydroxide.'),
  R('H2SO4','NaOH','H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O','Dung dịch ấm lên.','heat','Một mol H₂SO₄ trung hòa hoàn toàn hai mol NaOH.'),
  R('H3PO4','KOH','H₃PO₄ + 3KOH → K₃PO₄ + 3H₂O','Dung dịch ấm nhẹ.','heat','Phản ứng trung hòa hoàn toàn khi KOH dư.'),
  R('CH3COOH','KOH','CH₃COOH + KOH → CH₃COOK + H₂O','Dung dịch ấm nhẹ.','heat','Axit acetic phản ứng với bazơ mạnh.'),
  R('CH3COOH','NH3','CH₃COOH + NH₃ → CH₃COONH₄','Không có hiện tượng rõ, tạo ammonium acetate.','equilibrium','Axit acetic chuyển proton cho ammonia.'),
  R('Fe','H2SO4','Fe + H₂SO₄ → FeSO₄ + H₂↑','Sắt tan dần, sủi bọt khí H₂; dung dịch xanh lục nhạt.','gas','Fe đứng trước H nên phản ứng với H₂SO₄ loãng.','#dcebc6'),
  R('Zn','H2SO4','Zn + H₂SO₄ → ZnSO₄ + H₂↑','Kẽm tan và có khí H₂ thoát ra.','gas','Zn đẩy hydrogen khỏi axit loãng.'),
  R('Mg','H2SO4','Mg + H₂SO₄ → MgSO₄ + H₂↑','Magnesium tan nhanh, sủi bọt khí.','gas','Mg là kim loại hoạt động mạnh.'),
  R('Al','H2SO4','2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂↑','Sau khi lớp oxide tan, nhôm tan và thoát khí.','gas','Al phản ứng với sulfuric acid loãng.','#e9eef0','normal','Phản ứng sinh H₂ dễ cháy; tránh nguồn lửa.'),
  R('Cu','HNO3','3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O','Đồng tan, tạo dung dịch xanh; khí NO hóa nâu ngoài không khí.','gas','Cu bị oxi hóa thành Cu²⁺, nitrate bị khử thành NO.','#65b9e6','normal','Phản ứng sinh khí nitrogen oxide độc; chỉ mô phỏng.'),
  R('Ag','HNO3','3Ag + 4HNO₃ → 3AgNO₃ + NO↑ + 2H₂O','Bạc tan dần, khí không màu thoát ra rồi hóa nâu ngoài không khí.','gas','Ag phản ứng với nitric acid loãng tạo NO.','#e9eef0','normal','Khí nitrogen oxide độc; chỉ mô phỏng.'),
  R('Fe','HNO3','Fe + 4HNO₃ → Fe(NO₃)₃ + NO↑ + 2H₂O','Sắt tan, tạo dung dịch vàng nâu và khí hóa nâu ngoài không khí.','gas','Với HNO₃ loãng, Fe bị oxi hóa lên +3.','#d7a24e','normal','Nitric acid và khí nitrogen oxide nguy hiểm; chỉ mô phỏng.'),
  R('Cu','H2SO4','Không phản ứng với H₂SO₄ loãng','Không quan sát thấy hiện tượng.','none','Cu đứng sau H nên không đẩy được hydrogen khỏi sulfuric acid loãng.'),
  R('Ag','HCl','Không phản ứng','Không quan sát thấy bạc tan.','none','Ag đứng sau H và không phản ứng với HCl loãng.'),
  R('Mg','CuSO4','Mg + CuSO₄ → MgSO₄ + Cu↓','Magnesium tan, đồng đỏ nâu bám ra; màu xanh nhạt dần.','color','Mg hoạt động mạnh hơn Cu.','#e6f0ed'),
  R('Al','CuSO4','2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu↓','Sau khi phá lớp oxide, đồng đỏ nâu xuất hiện.','precipitate','Al khử Cu²⁺ thành Cu.','#b8734e'),
  R('Zn','FeSO4','Zn + FeSO₄ → ZnSO₄ + Fe↓','Kẽm tan dần, sắt màu xám bám ra.','precipitate','Zn hoạt động mạnh hơn Fe.','#7d8587'),
  R('Mg','FeSO4','Mg + FeSO₄ → MgSO₄ + Fe↓','Magnesium tan, sắt màu xám xuất hiện.','precipitate','Mg đẩy Fe²⁺ khỏi dung dịch.','#7d8587'),
  R('Fe','AgNO3','Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag↓','Tinh thể bạc bám trên sắt; dung dịch lục nhạt xuất hiện.','precipitate','Fe nhường electron cho Ag⁺.','#dcebc6'),
  R('Zn','AgNO3','Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag↓','Bạc bám lên kẽm, kẽm tan dần.','precipitate','Zn khử Ag⁺ thành Ag.','#dfe3e5'),
  R('Cu','FeCl3','Cu + 2FeCl₃ → CuCl₂ + 2FeCl₂','Đồng tan dần; màu vàng nâu nhạt đi, dung dịch chuyển xanh lục.','color','Cu khử Fe³⁺ thành Fe²⁺.','#88bfa4'),
  R('Fe','CuCl2','Fe + CuCl₂ → FeCl₂ + Cu↓','Đồng đỏ nâu bám trên sắt; màu xanh lục nhạt dần.','precipitate','Fe hoạt động mạnh hơn Cu.','#b8734e'),
  R('Zn','CuCl2','Zn + CuCl₂ → ZnCl₂ + Cu↓','Đồng đỏ nâu xuất hiện, kẽm tan.','precipitate','Zn đẩy Cu²⁺ khỏi dung dịch.','#b8734e'),
  R('Al','FeCl3','Al + FeCl₃ → AlCl₃ + Fe↓','Nhôm tan dần, sắt màu xám tạo thành.','precipitate','Al hoạt động mạnh hơn Fe.','#7d8587'),
  R('AgNO3','KCl','AgNO₃ + KCl → AgCl↓ + KNO₃','Xuất hiện kết tủa trắng AgCl.','precipitate','Ag⁺ + Cl⁻ → AgCl↓.','#e9edf0'),
  R('AgNO3','NaBr','AgNO₃ + NaBr → AgBr↓ + NaNO₃','Xuất hiện kết tủa vàng nhạt AgBr.','precipitate','Ag⁺ + Br⁻ → AgBr↓.','#eadb9c'),
  R('AgNO3','KBr','AgNO₃ + KBr → AgBr↓ + KNO₃','Xuất hiện kết tủa vàng nhạt AgBr.','precipitate','Ag⁺ + Br⁻ → AgBr↓.','#eadb9c'),
  R('AgNO3','NaI','AgNO₃ + NaI → AgI↓ + NaNO₃','Xuất hiện kết tủa vàng AgI.','precipitate','Ag⁺ + I⁻ → AgI↓.','#e3c448'),
  R('BaCl2','K2SO4','BaCl₂ + K₂SO₄ → BaSO₄↓ + 2KCl','Xuất hiện kết tủa trắng BaSO₄.','precipitate','Ba²⁺ + SO₄²⁻ → BaSO₄↓.','#f2f1e9'),
  R('BaCl2','MgSO4','BaCl₂ + MgSO₄ → BaSO₄↓ + MgCl₂','Xuất hiện kết tủa trắng BaSO₄.','precipitate','BaSO₄ rất ít tan.','#f2f1e9'),
  R('BaCl2','ZnSO4','BaCl₂ + ZnSO₄ → BaSO₄↓ + ZnCl₂','Xuất hiện kết tủa trắng BaSO₄.','precipitate','Phản ứng dùng nhận biết sulfate.','#f2f1e9'),
  R('BaCl2','Al2(SO4)3','3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄↓ + 2AlCl₃','Xuất hiện nhiều kết tủa trắng.','precipitate','Ba²⁺ kết hợp sulfate tạo BaSO₄.','#f2f1e9'),
  R('BaCl2','(NH4)2SO4','BaCl₂ + (NH₄)₂SO₄ → BaSO₄↓ + 2NH₄Cl','Xuất hiện kết tủa trắng BaSO₄.','precipitate','Ba²⁺ + SO₄²⁻ → BaSO₄↓.','#f2f1e9'),
  R('Ba(NO3)2','Na2SO4','Ba(NO₃)₂ + Na₂SO₄ → BaSO₄↓ + 2NaNO₃','Xuất hiện kết tủa trắng BaSO₄.','precipitate','Ba²⁺ + SO₄²⁻ → BaSO₄↓.','#f2f1e9'),
  R('Cu(NO3)2','NaOH','Cu(NO₃)₂ + 2NaOH → Cu(OH)₂↓ + 2NaNO₃','Xuất hiện kết tủa xanh lam.','precipitate','Cu²⁺ + 2OH⁻ → Cu(OH)₂↓.','#62b7df'),
  R('Fe(NO3)3','NaOH','Fe(NO₃)₃ + 3NaOH → Fe(OH)₃↓ + 3NaNO₃','Xuất hiện kết tủa nâu đỏ.','precipitate','Fe³⁺ + 3OH⁻ → Fe(OH)₃↓.','#a85f3d'),
  R('MgSO4','NaOH','MgSO₄ + 2NaOH → Mg(OH)₂↓ + Na₂SO₄','Xuất hiện kết tủa trắng Mg(OH)₂.','precipitate','Mg²⁺ + 2OH⁻ → Mg(OH)₂↓.','#f1f1ed'),
  R('Al2(SO4)3','NaOH','Al₂(SO₄)₃ + 6NaOH → 2Al(OH)₃↓ + 3Na₂SO₄','Xuất hiện kết tủa keo trắng khi NaOH chưa dư.','precipitate','Al³⁺ + 3OH⁻ → Al(OH)₃↓.','#f1f1ed'),
  R('MgSO4','Na2CO3','MgSO₄ + Na₂CO₃ → MgCO₃↓ + Na₂SO₄','Xuất hiện kết tủa trắng.','precipitate','Mg²⁺ + CO₃²⁻ → MgCO₃↓.','#f0efe8'),
  R('ZnSO4','Na2CO3','ZnSO₄ + Na₂CO₃ → ZnCO₃↓ + Na₂SO₄','Xuất hiện kết tủa trắng ZnCO₃.','precipitate','Zn²⁺ + CO₃²⁻ → ZnCO₃↓.','#f0efe8'),
  R('Cu(NO3)2','Na2CO3','Cu(NO₃)₂ + Na₂CO₃ → CuCO₃↓ + 2NaNO₃','Xuất hiện kết tủa xanh lục.','precipitate','Cu²⁺ + CO₃²⁻ → CuCO₃↓.','#72b89c'),
  R('AgNO3','Na2CO3','2AgNO₃ + Na₂CO₃ → Ag₂CO₃↓ + 2NaNO₃','Xuất hiện kết tủa vàng nhạt.','precipitate','2Ag⁺ + CO₃²⁻ → Ag₂CO₃↓.','#ddca77'),
  R('K2CO3','CaCl2','K₂CO₃ + CaCl₂ → CaCO₃↓ + 2KCl','Xuất hiện kết tủa trắng CaCO₃.','precipitate','Ca²⁺ + CO₃²⁻ → CaCO₃↓.','#f0efe8'),
  R('Na3PO4','MgSO4','2Na₃PO₄ + 3MgSO₄ → Mg₃(PO₄)₂↓ + 3Na₂SO₄','Xuất hiện kết tủa trắng magnesium phosphate.','precipitate','3Mg²⁺ + 2PO₄³⁻ → Mg₃(PO₄)₂↓.','#f0efe8'),
  R('Na3PO4','CuSO4','2Na₃PO₄ + 3CuSO₄ → Cu₃(PO₄)₂↓ + 3Na₂SO₄','Xuất hiện kết tủa xanh lam.','precipitate','3Cu²⁺ + 2PO₄³⁻ → Cu₃(PO₄)₂↓.','#5ca7d0'),
  R('Na3PO4','FeCl3','Na₃PO₄ + FeCl₃ → FePO₄↓ + 3NaCl','Xuất hiện kết tủa vàng nhạt.','precipitate','Fe³⁺ + PO₄³⁻ → FePO₄↓.','#d7c483'),
  R('Na2SiO3','HCl','Na₂SiO₃ + 2HCl → H₂SiO₃↓ + 2NaCl','Xuất hiện kết tủa keo trắng.','precipitate','Silicic acid rất yếu và ít tan.','#f1f1ed'),
  R('NH4NO3','NaOH','NH₄NO₃ + NaOH → NaNO₃ + NH₃↑ + H₂O','Khi đun nhẹ có khí mùi khai thoát ra.','gas','NH₄⁺ + OH⁻ → NH₃ + H₂O.','#e8f2ef','heat','NH₃ gây kích ứng; không ngửi trực tiếp.'),
  R('(NH4)2SO4','NaOH','(NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2NH₃↑ + 2H₂O','Khi đun nhẹ có khí ammonia thoát ra.','gas','Phản ứng dùng nhận biết ion NH₄⁺.','#e8f2ef','heat','NH₃ gây kích ứng; chỉ thực hiện có giám sát.'),
  R('Cl2','NaBr','Cl₂ + 2NaBr → 2NaCl + Br₂','Dung dịch chuyển màu vàng nâu của bromine.','color','Cl₂ oxi hóa Br⁻ thành Br₂.','#b76a45','normal','Chlorine và bromine độc; chỉ mô phỏng.'),
  R('Cl2','KBr','Cl₂ + 2KBr → 2KCl + Br₂','Xuất hiện màu vàng nâu của bromine.','color','Cl₂ có tính oxi hóa mạnh hơn Br₂.','#b76a45','normal','Halogen độc; chỉ mô phỏng.'),
  R('Cl2','NaI','Cl₂ + 2NaI → 2NaCl + I₂','Dung dịch xuất hiện màu nâu của iodine.','color','Cl₂ oxi hóa I⁻ thành I₂.','#8d6548','normal','Chlorine độc; chỉ mô phỏng.'),
  R('Br2','NaI','Br₂ + 2NaI → 2NaBr + I₂','Màu bromine nhạt dần, iodine màu nâu xuất hiện.','color','Br₂ oxi hóa I⁻ thành I₂.','#8d6548','normal','Bromine độc và ăn mòn; chỉ mô phỏng.'),
  R('I2','Na2S','I₂ + Na₂S → 2NaI + S↓','Màu iodine mất dần, sulfur vàng xuất hiện.','precipitate','I₂ oxi hóa S²⁻ thành sulfur.','#e1c332'),
  R('Na2SO3','HCl','Na₂SO₃ + 2HCl → 2NaCl + SO₂↑ + H₂O','Có khí không màu, mùi hắc thoát ra.','gas','Sulfite phản ứng với axit giải phóng SO₂.','#e9eef0','normal','SO₂ độc, không ngửi trực tiếp; chỉ mô phỏng.'),
  R('Na2SO3','H2SO4','Na₂SO₃ + H₂SO₄ → Na₂SO₄ + SO₂↑ + H₂O','Có khí SO₂ thoát ra.','gas','Axit mạnh đẩy sulfurous acid khỏi muối; H₂SO₃ phân hủy.','#e9eef0','normal','SO₂ độc; chỉ mô phỏng.'),
  R('K2CO3','HCl','K₂CO₃ + 2HCl → 2KCl + CO₂↑ + H₂O','Sủi bọt khí CO₂.','gas','CO₃²⁻ phản ứng với H⁺.'),
  R('K2CO3','H2SO4','K₂CO₃ + H₂SO₄ → K₂SO₄ + CO₂↑ + H₂O','Sủi bọt khí không màu.','gas','Muối carbonate phản ứng với axit.'),
  R('CaCO3','HNO3','CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + CO₂↑ + H₂O','Calcium carbonate tan dần, thoát khí CO₂.','gas','Carbonate phản ứng với axit nitric.'),
  R('H2O2','FeCl3','2H₂O₂ → 2H₂O + O₂↑ (Fe³⁺ xúc tác)','Sủi bọt oxygen nhanh hơn.','gas','Fe³⁺ xúc tác sự phân hủy hydrogen peroxide.','#e9f6f8','normal','Hydrogen peroxide đậm đặc gây bỏng và là chất oxi hóa; chỉ dùng dung dịch học đường dưới giám sát.'),
  R('C2H5OH','CuO','C₂H₅OH + CuO → CH₃CHO + Cu + H₂O','Chất rắn đen chuyển thành đồng đỏ; có mùi aldehyde.','color','Ethanol khử CuO thành Cu và bị oxi hóa thành acetaldehyde.','#b8734e','heat'),
  R('C6H5OH','Br2','C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ + 3HBr','Nước bromine mất màu, xuất hiện kết tủa trắng.','precipitate','Phenol thế bromine dễ dàng tạo 2,4,6-tribromophenol.','#f1f1ed','normal','Bromine độc và ăn mòn; chỉ mô phỏng.'),
  R('CH3CHO','O2','2CH₃CHO + O₂ → 2CH₃COOH','Acetaldehyde bị oxi hóa thành acetic acid.','heat','Nhóm aldehyde dễ bị oxi hóa thành nhóm carboxyl.','#eef5f6')
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
function resetVessel(){const v=document.querySelector('#vessel');v.className='reaction-vessel';v.querySelector('.solution').style.background='#cfeef1';document.querySelector('.burner').classList.remove('on');document.querySelector('.experiment-area').classList.remove('reacting','reaction-strong','reaction-color','reaction-none');document.querySelector('#reaction-status').textContent='Sẵn sàng thí nghiệm';window.lab3D?.reset();}
function runReaction(){
  resetVessel(); const condition=document.querySelector('#condition').value;
  const reaction=reactions.find(r=>normalizePair(r.a,r.b)===normalizePair(...chosen)&&(r.condition===condition||r.condition==='normal'));
  const fallback=reactions.find(r=>normalizePair(r.a,r.b)===normalizePair(...chosen));
  const area=document.querySelector('.experiment-area');
  area.classList.add('reacting'); document.querySelector('#reaction-status').textContent='Đang rót hóa chất…';
  const firstChemical=chemicals.find(c=>c.id===chosen[0]);
  window.lab3D?.pour(firstChemical?.color||'#a9dbe8');
  document.querySelector('#run-btn').disabled=true;
  setTimeout(()=>{document.querySelector('#reaction-status').textContent='Đang quan sát phản ứng…';},850);
  setTimeout(()=>showResult(reaction, fallback, condition),1600);
}
function showResult(r,fallback,condition){
  const panel=document.querySelector('#result-panel'); const v=document.querySelector('#vessel');
  const area=document.querySelector('.experiment-area'); area.classList.remove('reacting'); document.querySelector('#run-btn').disabled=false;
  if(!r&&fallback){area.classList.add('reaction-none');document.querySelector('#reaction-status').textContent='Chưa đủ điều kiện phản ứng';panel.innerHTML=`<div class="result-head"><div><span class="eyebrow">CẦN ĐIỀU KIỆN KHÁC</span><h2>Phản ứng chưa xảy ra</h2></div><span class="result-badge none">Đổi điều kiện</span></div><div class="equation">Hãy chọn: ${fallback.condition==='heat'?'Đun nóng':'Đốt cháy trong O₂'}</div><div class="result-item"><small>GỢI Ý</small><p>Điều kiện là một phần quan trọng của phương trình hóa học.</p></div>`;return;}
  if(!r){area.classList.add('reaction-none');document.querySelector('#reaction-status').textContent='Chưa có dữ liệu';panel.innerHTML=`<div class="result-head"><div><span class="eyebrow">THƯ VIỆN ĐANG MỞ RỘNG</span><h2>Chưa có dữ liệu cho cặp chất này</h2></div><span class="result-badge none">Chưa xác định</span></div><div class="equation">${format(chosen[0])} + ${format(chosen[1])} → ?</div><div class="result-item"><small>LƯU Ý</small><p>“Chưa có dữ liệu” không đồng nghĩa với “không phản ứng”. Hãy hỏi giáo viên trước khi kết luận hoặc thử ngoài đời thực.</p></div>`;return;}
  document.querySelector('#reaction-status').textContent=labelType(r.type);
  v.querySelector('.solution').style.background=r.color;
  window.lab3D?.react({type:r.type,color:r.color,condition});
  if(r.type==='gas')v.classList.add('gas');
  if(r.type==='precipitate')v.classList.add('precipitate');
  if(r.type==='color')area.classList.add('reaction-color');
  if(r.type==='heat'){v.classList.add('heat');area.classList.add('reaction-strong');document.querySelector('.burner').classList.add('on');}
  const warning=r.danger?`<div class="danger-warning"><b>⚠ Cảnh báo an toàn:</b> ${r.danger}</div>`:'';
  panel.innerHTML=`<div class="result-head"><div><span class="eyebrow">KẾT QUẢ THÍ NGHIỆM</span><h2>${r.type==='none'?'Không có phản ứng rõ rệt':'Phản ứng đã xảy ra'}</h2></div><span class="result-badge ${r.type==='none'?'none':''}">${labelType(r.type)}</span></div><div class="equation">${format(r.equation)}</div><div class="result-grid"><div class="result-item"><small>HIỆN TƯỢNG</small><p>${r.phenomenon}</p></div><div class="result-item"><small>BẢN CHẤT</small><p>${r.explain}</p></div><div class="result-item"><small>ĐIỀU KIỆN</small><p>${condition==='heat'?'Đun nóng':condition==='burn'?'Đốt cháy trong oxygen':'Điều kiện thường'}</p></div></div>${warning}`;
  panel.scrollIntoView({behavior:'smooth',block:'center'});
}
function labelType(type){return({gas:'Có khí thoát ra',precipitate:'Tạo kết tủa',color:'Đổi màu',heat:'Tỏa nhiệt / cháy',absorb:'Khí bị hấp thụ',equilibrium:'Phản ứng thuận nghịch',none:'Không phản ứng'})[type]||'Phản ứng';}

document.querySelector('#reaction-count').textContent=`${reactions.length}`;
document.querySelector('#chemical-search').addEventListener('input',e=>renderChemicals(e.target.value));
document.querySelectorAll('.category-tabs button').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.category-tabs .active').classList.remove('active');b.classList.add('active');activeCategory=b.dataset.category;renderChemicals(document.querySelector('#chemical-search').value);}));
document.querySelector('#clear-btn').addEventListener('click',clearLab); document.querySelector('#run-btn').addEventListener('click',runReaction);
document.querySelectorAll('.challenge-list button').forEach(b=>b.addEventListener('click',()=>{chosen=[b.dataset.a,b.dataset.b];updateSlots();renderChemicals();document.querySelector('.lab-workspace').scrollIntoView({behavior:'smooth'});}));
renderChemicals();

setTimeout(() => {
  if (!window.lab3D) {
    document.querySelector('.bench')?.classList.add('webgl-fallback');
    const status = document.querySelector('#reaction-status');
    if (status?.textContent === 'Sẵn sàng thí nghiệm') status.textContent = 'Chế độ tương thích 2D';
  }
}, 5000);
