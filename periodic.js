const rawElements = `
H|Hydrogen|1,008|1|1|nonmetal
He|Helium|4,0026|1|18|noble
Li|Lithium|6,94|2|1|alkali
Be|Beryllium|9,0122|2|2|alkaline
B|Boron|10,81|2|13|metalloid
C|Carbon|12,011|2|14|nonmetal
N|Nitrogen|14,007|2|15|nonmetal
O|Oxygen|15,999|2|16|nonmetal
F|Fluorine|18,998|2|17|halogen
Ne|Neon|20,180|2|18|noble
Na|Sodium|22,990|3|1|alkali
Mg|Magnesium|24,305|3|2|alkaline
Al|Aluminium|26,982|3|13|post-transition
Si|Silicon|28,085|3|14|metalloid
P|Phosphorus|30,974|3|15|nonmetal
S|Sulfur|32,06|3|16|nonmetal
Cl|Chlorine|35,45|3|17|halogen
Ar|Argon|39,948|3|18|noble
K|Potassium|39,098|4|1|alkali
Ca|Calcium|40,078|4|2|alkaline
Sc|Scandium|44,956|4|3|transition
Ti|Titanium|47,867|4|4|transition
V|Vanadium|50,942|4|5|transition
Cr|Chromium|51,996|4|6|transition
Mn|Manganese|54,938|4|7|transition
Fe|Iron|55,845|4|8|transition
Co|Cobalt|58,933|4|9|transition
Ni|Nickel|58,693|4|10|transition
Cu|Copper|63,546|4|11|transition
Zn|Zinc|65,38|4|12|transition
Ga|Gallium|69,723|4|13|post-transition
Ge|Germanium|72,630|4|14|metalloid
As|Arsenic|74,922|4|15|metalloid
Se|Selenium|78,971|4|16|nonmetal
Br|Bromine|79,904|4|17|halogen
Kr|Krypton|83,798|4|18|noble
Rb|Rubidium|85,468|5|1|alkali
Sr|Strontium|87,62|5|2|alkaline
Y|Yttrium|88,906|5|3|transition
Zr|Zirconium|91,224|5|4|transition
Nb|Niobium|92,906|5|5|transition
Mo|Molybdenum|95,95|5|6|transition
Tc|Technetium|[98]|5|7|transition
Ru|Ruthenium|101,07|5|8|transition
Rh|Rhodium|102,91|5|9|transition
Pd|Palladium|106,42|5|10|transition
Ag|Silver|107,87|5|11|transition
Cd|Cadmium|112,41|5|12|transition
In|Indium|114,82|5|13|post-transition
Sn|Tin|118,71|5|14|post-transition
Sb|Antimony|121,76|5|15|metalloid
Te|Tellurium|127,60|5|16|metalloid
I|Iodine|126,90|5|17|halogen
Xe|Xenon|131,29|5|18|noble
Cs|Caesium|132,91|6|1|alkali
Ba|Barium|137,33|6|2|alkaline
La|Lanthanum|138,91|6|3|lanthanide
Ce|Cerium|140,12|6|3|lanthanide
Pr|Praseodymium|140,91|6|3|lanthanide
Nd|Neodymium|144,24|6|3|lanthanide
Pm|Promethium|[145]|6|3|lanthanide
Sm|Samarium|150,36|6|3|lanthanide
Eu|Europium|151,96|6|3|lanthanide
Gd|Gadolinium|157,25|6|3|lanthanide
Tb|Terbium|158,93|6|3|lanthanide
Dy|Dysprosium|162,50|6|3|lanthanide
Ho|Holmium|164,93|6|3|lanthanide
Er|Erbium|167,26|6|3|lanthanide
Tm|Thulium|168,93|6|3|lanthanide
Yb|Ytterbium|173,05|6|3|lanthanide
Lu|Lutetium|174,97|6|3|lanthanide
Hf|Hafnium|178,49|6|4|transition
Ta|Tantalum|180,95|6|5|transition
W|Tungsten|183,84|6|6|transition
Re|Rhenium|186,21|6|7|transition
Os|Osmium|190,23|6|8|transition
Ir|Iridium|192,22|6|9|transition
Pt|Platinum|195,08|6|10|transition
Au|Gold|196,97|6|11|transition
Hg|Mercury|200,59|6|12|transition
Tl|Thallium|204,38|6|13|post-transition
Pb|Lead|207,2|6|14|post-transition
Bi|Bismuth|208,98|6|15|post-transition
Po|Polonium|[209]|6|16|post-transition
At|Astatine|[210]|6|17|halogen
Rn|Radon|[222]|6|18|noble
Fr|Francium|[223]|7|1|alkali
Ra|Radium|[226]|7|2|alkaline
Ac|Actinium|[227]|7|3|actinide
Th|Thorium|232,04|7|3|actinide
Pa|Protactinium|231,04|7|3|actinide
U|Uranium|238,03|7|3|actinide
Np|Neptunium|[237]|7|3|actinide
Pu|Plutonium|[244]|7|3|actinide
Am|Americium|[243]|7|3|actinide
Cm|Curium|[247]|7|3|actinide
Bk|Berkelium|[247]|7|3|actinide
Cf|Californium|[251]|7|3|actinide
Es|Einsteinium|[252]|7|3|actinide
Fm|Fermium|[257]|7|3|actinide
Md|Mendelevium|[258]|7|3|actinide
No|Nobelium|[259]|7|3|actinide
Lr|Lawrencium|[266]|7|3|actinide
Rf|Rutherfordium|[267]|7|4|transition
Db|Dubnium|[268]|7|5|transition
Sg|Seaborgium|[269]|7|6|transition
Bh|Bohrium|[270]|7|7|transition
Hs|Hassium|[269]|7|8|transition
Mt|Meitnerium|[278]|7|9|unknown
Ds|Darmstadtium|[281]|7|10|unknown
Rg|Roentgenium|[282]|7|11|unknown
Cn|Copernicium|[285]|7|12|transition
Nh|Nihonium|[286]|7|13|unknown
Fl|Flerovium|[289]|7|14|unknown
Mc|Moscovium|[290]|7|15|unknown
Lv|Livermorium|[293]|7|16|unknown
Ts|Tennessine|[294]|7|17|halogen
Og|Oganesson|[294]|7|18|noble`.trim();

const categoryNames={alkali:'Kim loại kiềm',alkaline:'Kim loại kiềm thổ',transition:'Kim loại chuyển tiếp','post-transition':'Kim loại sau chuyển tiếp',metalloid:'Á kim',nonmetal:'Phi kim',halogen:'Halogen',noble:'Khí hiếm',lanthanide:'Họ Lanthanide',actinide:'Họ Actinide',unknown:'Chưa xác định'};
const elements=rawElements.split('\n').map((line,index)=>{const [symbol,name,mass,period,group,category]=line.split('|');return{z:index+1,symbol,name,mass,period:+period,group:+group,category}});
const table=document.querySelector('#periodic-table');

function makePlaceholder(text,row){const item=document.createElement('div');item.className='placeholder';item.textContent=text;item.style.gridColumn='3';item.style.gridRow=String(row);table.appendChild(item)}
makePlaceholder('57–71\nHọ Lanthanide',6);makePlaceholder('89–103\nHọ Actinide',7);

elements.forEach(element=>{
  const button=document.createElement('button');button.type='button';button.className=`element ${element.category}`;button.dataset.search=`${element.z} ${element.symbol} ${element.name}`.toLowerCase();button.dataset.category=element.category;button.dataset.symbol=element.symbol;
  if(element.z>=57&&element.z<=71){button.style.gridRow='9';button.style.gridColumn=String(element.z-53)}
  else if(element.z>=89&&element.z<=103){button.style.gridRow='10';button.style.gridColumn=String(element.z-85)}
  else{button.style.gridRow=String(element.period);button.style.gridColumn=String(element.group)}
  button.innerHTML=`<small>${element.z}</small><strong>${element.symbol}</strong><span>${element.name}</span><b>${element.mass}</b>`;
  button.setAttribute('aria-label',`${element.name}, kí hiệu ${element.symbol}, số hiệu nguyên tử ${element.z}`);button.addEventListener('click',()=>showDetails(element,button));table.appendChild(button)
});

const legend=document.querySelector('#legend');
Object.entries(categoryNames).forEach(([key,label])=>{const button=document.createElement('button');button.type='button';button.dataset.category=key;button.innerHTML=`<i class="${key}"></i>${label}`;button.addEventListener('click',()=>filterCategory(key));legend.appendChild(button)});

const search=document.querySelector('#element-search');
function normalize(value){return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim()}
function applySearch(){const query=normalize(search.value);document.querySelectorAll('.element').forEach(el=>{const match=!query||normalize(el.dataset.search).includes(query);el.classList.toggle('dimmed',!match);el.classList.toggle('match',Boolean(query&&match))})}
search.addEventListener('input',applySearch);document.querySelector('#clear-search').addEventListener('click',()=>{search.value='';applySearch();search.focus()});
function filterCategory(category){search.value='';document.querySelectorAll('.element').forEach(el=>{const match=el.dataset.category===category;el.classList.toggle('dimmed',!match);el.classList.toggle('match',match)})}

const superscript={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
const orbitalOrder=[['1s',2],['2s',2],['2p',6],['3s',2],['3p',6],['4s',2],['3d',10],['4p',6],['5s',2],['4d',10],['5p',6],['6s',2],['4f',14],['5d',10],['6p',6],['7s',2],['5f',14],['6d',10],['7p',6]];
const configExceptions={24:{'4s':1,'3d':5},29:{'4s':1,'3d':10},41:{'5s':1,'4d':4},42:{'5s':1,'4d':5},44:{'5s':1,'4d':7},45:{'5s':1,'4d':8},46:{'5s':0,'4d':10},47:{'5s':1,'4d':10},57:{'4f':0,'5d':1},58:{'4f':1,'5d':1},64:{'4f':7,'5d':1},78:{'6s':1,'5d':9},79:{'6s':1,'5d':10},89:{'5f':0,'6d':1},90:{'5f':0,'6d':2},91:{'5f':2,'6d':1},92:{'5f':3,'6d':1},93:{'5f':4,'6d':1},96:{'5f':7,'6d':1},103:{'6d':0,'7p':1}};
function electronCounts(z){let left=z,counts={};for(const [orbital,capacity] of orbitalOrder){const count=Math.min(left,capacity);counts[orbital]=count;left-=count;if(!left)break}Object.assign(counts,configExceptions[z]||{});return counts}
function electronConfig(z){const counts=electronCounts(z),parts=[];for(const [orbital] of orbitalOrder){if(counts[orbital])parts.push(orbital+[...String(counts[orbital])].map(n=>superscript[n]).join(''))}return parts.join(' ')}
function shellDistribution(z){const shells=[];Object.entries(electronCounts(z)).forEach(([orbital,count])=>{const shell=parseInt(orbital,10)-1;shells[shell]=(shells[shell]||0)+count});return shells.filter(value=>value!==undefined)}
function bohrImage(el){const shells=shellDistribution(el.z),cx=150,cy=110,maxRadius=92,radii=shells.map((_,i)=>28+(maxRadius-28)*(i/Math.max(shells.length-1,1)));let rings='',dots='';radii.forEach((radius,index)=>{rings+=`<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="#8f80c8" stroke-width="1.2" opacity="${.8-index*.06}"/>`;const electrons=shells[index],dotRadius=electrons>24?1.7:electrons>12?2.2:3;for(let e=0;e<electrons;e++){const angle=-Math.PI/2+(Math.PI*2*e/electrons),x=cx+Math.cos(angle)*radius,y=cy+Math.sin(angle)*radius;dots+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${dotRadius}" fill="#7657d5"/>`}});const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220" viewBox="0 0 300 220"><rect width="300" height="220" rx="20" fill="#fff" opacity=".8"/>${rings}${dots}<circle cx="${cx}" cy="${cy}" r="20" fill="#31245f"/><text x="${cx}" y="${cy+6}" text-anchor="middle" font-family="Arial" font-weight="700" font-size="17" fill="#fff">${el.symbol}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}

const oxidation={H:'+1, −1',He:'0',Li:'+1',Be:'+2',B:'+3',C:'−4, +2, +4',N:'−3, +1, +2, +3, +4, +5',O:'−2, −1, +2',F:'−1',Ne:'0',Na:'+1',Mg:'+2',Al:'+3',Si:'−4, +4',P:'−3, +3, +5',S:'−2, +4, +6',Cl:'−1, +1, +3, +5, +7',Ar:'0',K:'+1',Ca:'+2',Sc:'+3',Ti:'+2, +3, +4',V:'+2, +3, +4, +5',Cr:'+2, +3, +6',Mn:'+2, +4, +7',Fe:'+2, +3',Co:'+2, +3',Ni:'+2, +3',Cu:'+1, +2',Zn:'+2',Ga:'+3',Ge:'−4, +2, +4',As:'−3, +3, +5',Se:'−2, +4, +6',Br:'−1, +1, +3, +5, +7',Kr:'0, +2',Rb:'+1',Sr:'+2',Y:'+3',Zr:'+4',Nb:'+3, +5',Mo:'+2, +3, +4, +5, +6',Tc:'+4, +7',Ru:'+2, +3, +4, +8',Rh:'+1, +3',Pd:'+2, +4',Ag:'+1',Cd:'+2',In:'+1, +3',Sn:'+2, +4',Sb:'−3, +3, +5',Te:'−2, +4, +6',I:'−1, +1, +3, +5, +7',Xe:'0, +2, +4, +6, +8',Cs:'+1',Ba:'+2',La:'+3',Ce:'+3, +4',Pr:'+3, +4',Nd:'+3',Pm:'+3',Sm:'+2, +3',Eu:'+2, +3',Gd:'+3',Tb:'+3, +4',Dy:'+3',Ho:'+3',Er:'+3',Tm:'+2, +3',Yb:'+2, +3',Lu:'+3',Hf:'+4',Ta:'+5',W:'+4, +6',Re:'+4, +6, +7',Os:'+2, +3, +4, +8',Ir:'+3, +4',Pt:'+2, +4',Au:'+1, +3',Hg:'+1, +2',Tl:'+1, +3',Pb:'+2, +4',Bi:'+3, +5',Po:'−2, +2, +4, +6',At:'−1, +1, +3, +5, +7',Rn:'0, +2',Fr:'+1',Ra:'+2',Ac:'+3',Th:'+4',Pa:'+4, +5',U:'+3, +4, +5, +6',Np:'+3, +4, +5, +6, +7',Pu:'+3, +4, +5, +6',Am:'+3',Cm:'+3',Bk:'+3, +4',Cf:'+3',Es:'+3',Fm:'+3',Md:'+2, +3',No:'+2, +3',Lr:'+3'};
const roman=['0','I','II','III','IV','V','VI','VII','VIII'];
function oxidationText(el){if(oxidation[el.symbol])return oxidation[el.symbol];if(el.category==='noble')return '0, +2 (dự đoán)';if(el.category==='alkali')return '+1 (dự đoán)';if(el.category==='alkaline')return '+2 (dự đoán)';if(el.category==='halogen')return '−1, +1, +3, +5, +7 (dự đoán)';if(el.group>=3&&el.group<=12)return `+${Math.min(el.group,8)} (dự đoán)`;if(el.group===13)return '+1, +3 (dự đoán)';if(el.group===14)return '+2, +4 (dự đoán)';if(el.group===15)return '−3, +1, +3, +5 (dự đoán)';if(el.group===16)return '−2, +2, +4, +6 (dự đoán)';return '0 (chưa có dữ liệu thực nghiệm)'}
function valencyText(el){const values=(oxidationText(el).match(/[+−-](\d)/g)||[]).map(v=>Math.abs(parseInt(v.slice(1),10))).filter((v,i,a)=>a.indexOf(v)===i&&v<=8);return values.length?values.map(v=>roman[v]).join(', '):el.category==='noble'?'0':'Chưa xác định'}

const rawApplications=`
H|🚀|Pin nhiên liệu, nhiên liệu tên lửa và sản xuất amoniac.
He|🎈|Bóng thám không và làm lạnh nam châm siêu dẫn.
Li|🔋|Pin lithium-ion cho điện thoại và xe điện.
Be|🛰️|Hợp kim hàng không vũ trụ và cửa sổ ống tia X.
B|🧪|Thủy tinh borosilicate chịu nhiệt và chất tẩy rửa.
C|✏️|Than chì làm ruột bút; kim cương làm dụng cụ cắt.
N|🌱|Sản xuất phân đạm và bảo quản lạnh bằng nitơ lỏng.
O|🫁|Hỗ trợ hô hấp y tế và luyện thép.
F|🦷|Fluoride trong kem đánh răng và vật liệu fluoropolymer.
Ne|💡|Đèn quảng cáo phát ánh sáng đỏ cam.
Na|🧂|Muối ăn, thủy tinh, giấy và xà phòng.
Mg|🎆|Hợp kim nhẹ và pháo sáng trắng.
Al|🥫|Vỏ lon, máy bay và vật liệu xây dựng nhẹ.
Si|💻|Chip bán dẫn và pin Mặt Trời.
P|🌾|Phân lân và diêm an toàn.
S|🛞|Sản xuất axit sulfuric và lưu hóa cao su.
Cl|🚰|Khử trùng nước và sản xuất nhựa PVC.
Ar|💡|Khí bảo vệ khi hàn và khí nạp bóng đèn.
K|🌿|Phân bón kali giúp cây sinh trưởng.
Ca|🏗️|Xi măng, vôi và vật liệu xây dựng.
Sc|✈️|Hợp kim nhôm–scandi nhẹ cho hàng không và thể thao.
Ti|🦿|Hợp kim hàng không và implant y tế.
V|🔧|Tăng độ bền thép và dùng trong xúc tác.
Cr|✨|Mạ chống gỉ và sản xuất thép không gỉ.
Mn|🔋|Sản xuất thép và vật liệu điện cực pin.
Fe|🏗️|Nguyên liệu chính để sản xuất thép xây dựng.
Co|🔋|Pin, hợp kim chịu nhiệt và sắc tố xanh.
Ni|🪙|Thép không gỉ, hợp kim và pin.
Cu|🔌|Dây dẫn điện, động cơ và đường ống.
Zn|🛡️|Mạ bảo vệ thép và chế tạo pin.
Ga|📡|LED, laser diode và chip tần số cao.
Ge|📷|Sợi quang, thấu kính hồng ngoại và bán dẫn.
As|💻|Bán dẫn gallium arsenide; việc dùng bị kiểm soát do độc tính.
Se|☀️|Pin quang điện, cảm biến ánh sáng và thủy tinh.
Br|🔥|Chất chống cháy và hóa chất nhiếp ảnh.
Kr|📸|Đèn chớp, laser và cửa sổ cách nhiệt.
Rb|⏱️|Đồng hồ nguyên tử và nghiên cứu vật lí.
Sr|🎆|Tạo màu đỏ cho pháo hoa và chế tạo nam châm ferrite.
Y|📺|Phosphor màn hình, laser YAG và gốm kĩ thuật.
Zr|⚛️|Vỏ thanh nhiên liệu hạt nhân và gốm chịu nhiệt.
Nb|🧲|Nam châm siêu dẫn và thép cường độ cao.
Mo|⚙️|Thép chịu nhiệt và chất xúc tác lọc dầu.
Tc|🩻|Đồng vị Tc-99m dùng trong chẩn đoán hình ảnh y học.
Ru|💾|Tiếp điểm điện, điện trở chip và chất xúc tác.
Rh|🚗|Bộ xúc tác xử lí khí thải ô tô.
Pd|🚗|Bộ xúc tác khí thải, điện tử và tinh chế hiđro.
Ag|💍|Trang sức, tiếp điểm điện và vật liệu kháng khuẩn.
Cd|🔋|Pin Ni–Cd và sắc tố; bị hạn chế vì độc tính.
In|📱|Lớp dẫn điện trong suốt cho màn hình cảm ứng.
Sn|🥫|Mạ hộp thực phẩm và tạo hợp kim hàn.
Sb|🔥|Chất chống cháy và hợp kim làm cứng chì.
Te|☀️|Pin Mặt Trời CdTe và vật liệu nhiệt điện.
I|🧴|Sát khuẩn và bổ sung vi lượng trong muối iod.
Xe|🚘|Đèn pha cường độ cao, đèn chớp và gây mê.
Cs|⏱️|Chuẩn thời gian của đồng hồ nguyên tử.
Ba|🩻|BaSO₄ làm chất cản quang trong chụp X-quang tiêu hóa.
La|📷|Thấu kính quang học, pin NiMH và xúc tác.
Ce|🚗|Bộ xúc tác khí thải và bột đánh bóng kính.
Pr|✈️|Hợp kim bền và thủy tinh màu cho kính bảo hộ.
Nd|🧲|Nam châm vĩnh cửu mạnh trong loa và động cơ.
Pm|🔋|Nguồn phóng xạ nhỏ cho nghiên cứu và pin nguyên tử.
Sm|🎧|Nam châm samarium–cobalt và điều trị giảm đau xương.
Eu|📺|Phosphor đỏ trong màn hình và mực chống giả.
Gd|🩻|Chất tương phản MRI và vật liệu hấp thụ neutron.
Tb|💡|Phosphor xanh trong đèn và màn hình.
Dy|🧲|Nam châm chịu nhiệt cho động cơ xe điện.
Ho|🔦|Laser y khoa và vật liệu tạo từ trường mạnh.
Er|🌐|Khuếch đại tín hiệu trong cáp quang.
Tm|🩻|Nguồn tia X di động và laser y khoa.
Yb|🔦|Laser sợi quang và đồng hồ nguyên tử.
Lu|🩻|Tinh thể dò trong máy PET và xúc tác.
Hf|💻|Thanh điều khiển lò phản ứng và điện môi chip.
Ta|📱|Tụ điện nhỏ trong điện thoại và implant y tế.
W|🛠️|Dụng cụ cắt cứng và điện cực chịu nhiệt.
Re|✈️|Siêu hợp kim cho động cơ phản lực.
Os|🖊️|Hợp kim siêu cứng cho ngòi bút và tiếp điểm.
Ir|🔥|Bugi, chén nung và thiết bị chịu ăn mòn.
Pt|🚗|Bộ xúc tác khí thải, trang sức và xúc tác công nghiệp.
Au|💍|Trang sức và tiếp điểm điện tử chống ăn mòn.
Hg|🌡️|Từng dùng trong dụng cụ đo; nay bị hạn chế vì độc tính.
Tl|🔭|Kính quang học hồng ngoại và đầu dò bức xạ.
Pb|🔋|Ắc quy chì và tấm chắn bức xạ.
Bi|💊|Dược phẩm dạ dày và hợp kim nóng chảy thấp.
Po|🔬|Nguồn hạt alpha trong nghiên cứu và thiết bị chuyên dụng.
At|🧬|Đồng vị At-211 được nghiên cứu cho điều trị ung thư đích.
Rn|🌍|Theo dõi địa chất và nghiên cứu phóng xạ; là khí độc hại.
Fr|🔬|Chỉ dùng trong nghiên cứu cấu trúc nguyên tử.
Ra|🔬|Nguồn neutron và nghiên cứu lịch sử về phóng xạ.
Ac|🧬|Ac-225 được nghiên cứu cho liệu pháp alpha đích.
Th|⚛️|Nhiên liệu hạt nhân tiềm năng và hợp kim chịu nhiệt.
Pa|🔬|Chủ yếu dùng trong nghiên cứu hạt nhân.
U|⚛️|Nhiên liệu cho lò phản ứng điện hạt nhân.
Np|🔬|Nghiên cứu hạt nhân và sản xuất Pu-238.
Pu|🛰️|Pu-238 cấp điện cho tàu thăm dò không gian.
Am|🚨|Nguồn ion hóa trong một số đầu báo khói.
Cm|🚀|Nguồn hạt alpha cho thiết bị khoa học không gian.
Bk|🔬|Tổng hợp nguyên tố nặng hơn và nghiên cứu hạt nhân.
Cf|⛏️|Nguồn neutron trong phân tích vật liệu và thăm dò.
Es|🔬|Nghiên cứu hóa học nguyên tố siêu nặng.
Fm|🔬|Chỉ dùng trong nghiên cứu hạt nhân.
Md|🔬|Chỉ dùng trong nghiên cứu tính chất nguyên tử.
No|🔬|Chỉ dùng trong nghiên cứu hóa học hạt nhân.
Lr|🔬|Chỉ dùng trong nghiên cứu nguyên tố siêu nặng.
Rf|🔬|Nghiên cứu hóa học nguyên tố siêu nặng.
Db|🔬|Nghiên cứu phản ứng và cấu trúc hạt nhân.
Sg|🔬|Nghiên cứu hóa học nguyên tố siêu nặng.
Bh|🔬|Chỉ tạo được lượng rất nhỏ để nghiên cứu.
Hs|🔬|Nghiên cứu tính chất nguyên tố siêu nặng.
Mt|🔬|Chỉ dùng trong nghiên cứu khoa học.
Ds|🔬|Chỉ dùng trong nghiên cứu khoa học.
Rg|🔬|Chỉ dùng trong nghiên cứu khoa học.
Cn|🔬|Nghiên cứu tính chất hóa học tương đối tính.
Nh|🔬|Chỉ dùng trong nghiên cứu khoa học.
Fl|🔬|Nghiên cứu độ bền của hạt nhân siêu nặng.
Mc|🔬|Chỉ dùng trong nghiên cứu khoa học.
Lv|🔬|Chỉ dùng trong nghiên cứu khoa học.
Ts|🔬|Nghiên cứu nguyên tố halogen siêu nặng.
Og|🔬|Nghiên cứu giới hạn của bảng tuần hoàn.
`.trim();
const applications=Object.fromEntries(rawApplications.split('\n').map(line=>{const [symbol,icon,text]=line.split('|');return[symbol,[icon,text]]}));
function applicationOf(el){return applications[el.symbol]||['🔬','Hiện chủ yếu được dùng trong nghiên cứu khoa học.']}
function applicationImage(el,app){const safe=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180" viewBox="0 0 240 180"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#ede7ff"/><stop offset="1" stop-color="#fff1df"/></linearGradient></defs><rect width="240" height="180" rx="24" fill="url(#g)"/><circle cx="120" cy="76" r="52" fill="#fff" opacity=".85"/><text x="120" y="95" text-anchor="middle" font-size="66">${safe(app[0])}</text><rect x="74" y="135" width="92" height="30" rx="15" fill="#31245f"/><text x="120" y="156" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="17" fill="white">${safe(el.symbol)} · ${el.z}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}

const dialog=document.querySelector('#element-dialog');
function showDetails(el,tile){const app=applicationOf(el),image=document.querySelector('#detail-app-image'),bohr=document.querySelector('#detail-bohr-image'),shells=shellDistribution(el.z);document.querySelector('#detail-number').textContent=el.z;document.querySelector('#detail-symbol').textContent=el.symbol;document.querySelector('#detail-name').textContent=el.name;document.querySelector('#detail-category').textContent=categoryNames[el.category];document.querySelector('#detail-title').textContent=`Nguyên tố ${el.name}`;document.querySelector('#detail-mass').textContent=el.mass;document.querySelector('#detail-period').textContent=el.period;document.querySelector('#detail-group').textContent=el.group;document.querySelector('#detail-z').textContent=el.z;document.querySelector('#detail-config').textContent=electronConfig(el.z);document.querySelector('#detail-oxidation').textContent=oxidationText(el);document.querySelector('#detail-valency').textContent=valencyText(el);document.querySelector('#detail-shells').textContent=`K–Q: ${shells.join(' – ')}`;bohr.src=bohrImage(el);bohr.alt=`Mô hình Bohr của ${el.name}, phân bố ${shells.join(', ')} electron`;image.src=applicationImage(el,app);image.alt=`Minh họa ứng dụng của ${el.name}`;document.querySelector('#detail-application').textContent=app[1];dialog.style.setProperty('--element-color',getComputedStyle(tile).backgroundColor);dialog.classList.remove('pop');void dialog.offsetWidth;dialog.classList.add('pop');dialog.showModal()}
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});

const themeToggle=document.querySelector('.theme-toggle'),savedTheme=localStorage.getItem('chem-theme');if(savedTheme==='dark'||(!savedTheme&&matchMedia('(prefers-color-scheme: dark)').matches))document.body.classList.add('dark-mode');function updateThemeButton(){const dark=document.body.classList.contains('dark-mode');themeToggle.textContent=dark?'☀':'☾';themeToggle.setAttribute('aria-label',dark?'Chuyển sang chế độ sáng':'Chuyển sang chế độ tối')}updateThemeButton();themeToggle.addEventListener('click',()=>{document.body.classList.toggle('dark-mode');localStorage.setItem('chem-theme',document.body.classList.contains('dark-mode')?'dark':'light');updateThemeButton()});
const requestedSymbol=new URLSearchParams(location.search).get('element');if(requestedSymbol){const tile=document.querySelector(`.element[data-symbol="${requestedSymbol.replace(/[^A-Za-z]/g,'')}"]`);tile?.click()}
