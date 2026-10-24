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
  const button=document.createElement('button');button.type='button';button.className=`element ${element.category}`;button.dataset.search=`${element.z} ${element.symbol} ${element.name}`.toLowerCase();button.dataset.category=element.category;
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
function electronConfig(z){let left=z,parts=[],counts={};for(const [orbital,capacity] of orbitalOrder){const count=Math.min(left,capacity);counts[orbital]=count;left-=count;if(!left)break}Object.assign(counts,configExceptions[z]||{});for(const [orbital] of orbitalOrder){if(counts[orbital])parts.push(orbital+[...String(counts[orbital])].map(n=>superscript[n]).join(''))}return parts.join(' ')}

const oxidation={H:'+1, −1',He:'0',Li:'+1',Be:'+2',B:'+3',C:'−4, +2, +4',N:'−3, +1, +2, +3, +4, +5',O:'−2, −1, +2',F:'−1',Ne:'0',Na:'+1',Mg:'+2',Al:'+3',Si:'−4, +4',P:'−3, +3, +5',S:'−2, +4, +6',Cl:'−1, +1, +3, +5, +7',Ar:'0',K:'+1',Ca:'+2',Sc:'+3',Ti:'+2, +3, +4',V:'+2, +3, +4, +5',Cr:'+2, +3, +6',Mn:'+2, +4, +7',Fe:'+2, +3',Co:'+2, +3',Ni:'+2, +3',Cu:'+1, +2',Zn:'+2',Ga:'+3',Ge:'−4, +2, +4',As:'−3, +3, +5',Se:'−2, +4, +6',Br:'−1, +1, +3, +5, +7',Kr:'0, +2',Rb:'+1',Sr:'+2',Y:'+3',Zr:'+4',Nb:'+3, +5',Mo:'+2, +3, +4, +5, +6',Tc:'+4, +7',Ru:'+2, +3, +4, +8',Rh:'+1, +3',Pd:'+2, +4',Ag:'+1',Cd:'+2',In:'+1, +3',Sn:'+2, +4',Sb:'−3, +3, +5',Te:'−2, +4, +6',I:'−1, +1, +3, +5, +7',Xe:'0, +2, +4, +6, +8',Cs:'+1',Ba:'+2',La:'+3',Ce:'+3, +4',Pr:'+3, +4',Nd:'+3',Pm:'+3',Sm:'+2, +3',Eu:'+2, +3',Gd:'+3',Tb:'+3, +4',Dy:'+3',Ho:'+3',Er:'+3',Tm:'+2, +3',Yb:'+2, +3',Lu:'+3',Hf:'+4',Ta:'+5',W:'+4, +6',Re:'+4, +6, +7',Os:'+2, +3, +4, +8',Ir:'+3, +4',Pt:'+2, +4',Au:'+1, +3',Hg:'+1, +2',Tl:'+1, +3',Pb:'+2, +4',Bi:'+3, +5',Po:'−2, +2, +4, +6',At:'−1, +1, +3, +5, +7',Rn:'0, +2',Fr:'+1',Ra:'+2',Ac:'+3',Th:'+4',Pa:'+4, +5',U:'+3, +4, +5, +6',Np:'+3, +4, +5, +6, +7',Pu:'+3, +4, +5, +6',Am:'+3',Cm:'+3',Bk:'+3, +4',Cf:'+3',Es:'+3',Fm:'+3',Md:'+2, +3',No:'+2, +3',Lr:'+3'};
const roman=['0','I','II','III','IV','V','VI','VII','VIII'];
function oxidationText(el){if(oxidation[el.symbol])return oxidation[el.symbol];if(el.category==='noble')return '0 (dự đoán)';if(el.category==='alkali')return '+1 (dự đoán)';if(el.category==='alkaline')return '+2 (dự đoán)';if(el.category==='halogen')return '−1, +1, +3, +5, +7 (dự đoán)';if(el.group>=3&&el.group<=12)return `+${Math.min(el.group,8)} (dự đoán)`;return 'Chưa xác định chắc chắn'}
function valencyText(el){const values=(oxidationText(el).match(/[+−-](\d)/g)||[]).map(v=>Math.abs(parseInt(v.slice(1),10))).filter((v,i,a)=>a.indexOf(v)===i&&v<=8);return values.length?values.map(v=>roman[v]).join(', '):el.category==='noble'?'0':'Chưa xác định'}

const applications={H:['🚀','Nhiên liệu pin nhiên liệu và sản xuất amoniac.'],He:['🎈','Bơm bóng thám không và làm lạnh nam châm siêu dẫn.'],Li:['🔋','Chế tạo pin lithium-ion cho điện thoại và xe điện.'],C:['✏️','Than chì làm ruột bút; kim cương dùng trong dụng cụ cắt.'],N:['🌱','Sản xuất phân đạm; nitơ lỏng dùng để làm lạnh.'],O:['🫁','Hỗ trợ hô hấp y tế và luyện thép.'],Ne:['💡','Tạo ánh sáng đỏ cam trong đèn quảng cáo.'],Na:['🧂','Hợp chất natri dùng trong muối ăn, thủy tinh và xà phòng.'],Mg:['🎆','Hợp kim nhẹ và pháo sáng trắng chói.'],Al:['🥫','Chế tạo vỏ lon, máy bay và vật liệu xây dựng nhẹ.'],Si:['💻','Chế tạo chip bán dẫn và pin Mặt Trời.'],P:['🌾','Sản xuất phân lân và diêm an toàn.'],S:['🛞','Sản xuất axit sulfuric và lưu hóa cao su.'],Cl:['🚰','Khử trùng nước và sản xuất nhựa PVC.'],Ar:['💡','Khí bảo vệ khi hàn và khí nạp bóng đèn.'],K:['🌿','Thành phần quan trọng của phân bón kali.'],Ca:['🦴','Hợp chất canxi dùng trong xi măng; canxi cần cho xương.'],Ti:['✈️','Hợp kim bền nhẹ cho hàng không và implant y tế.'],Cr:['✨','Mạ chống gỉ và sản xuất thép không gỉ.'],Mn:['🔋','Sản xuất thép và vật liệu điện cực pin.'],Fe:['🏗️','Nguyên liệu chính để sản xuất thép xây dựng.'],Co:['🔋','Vật liệu pin, hợp kim chịu nhiệt và sắc tố xanh.'],Ni:['🪙','Sản xuất thép không gỉ, hợp kim và pin.'],Cu:['🔌','Dây dẫn điện, động cơ và đường ống.'],Zn:['🛡️','Mạ kẽm bảo vệ thép và chế tạo pin.'],Ag:['📷','Trang sức, tiếp điểm điện và vật liệu kháng khuẩn.'],Sn:['🥫','Mạ hộp thực phẩm và tạo hợp kim hàn.'],I:['🧴','Sát khuẩn và bổ sung vi lượng trong muối iod.'],W:['🔥','Chế tạo hợp kim cứng và điện cực chịu nhiệt.'],Pt:['🚗','Chất xúc tác trong bộ xử lí khí thải và công nghiệp.'],Au:['💍','Trang sức và tiếp điểm điện tử chống ăn mòn.'],Hg:['🌡️','Từng dùng trong dụng cụ đo; hiện bị hạn chế vì độc tính.'],Pb:['🔋','Ắc quy chì và tấm chắn bức xạ; cần kiểm soát độc hại.'],U:['⚛️','Nhiên liệu cho lò phản ứng điện hạt nhân.']};
const categoryApps={alkali:['🔋','Nghiên cứu vật liệu, pin hoặc tạo hợp chất chuyên dụng.'],alkaline:['🏗️','Dùng trong hợp kim, vật liệu xây dựng hoặc hợp chất công nghiệp.'],transition:['⚙️','Dùng trong hợp kim, xúc tác hoặc vật liệu công nghệ.'],'post-transition':['🔧','Dùng trong hợp kim, điện tử hoặc vật liệu chuyên dụng.'],metalloid:['💻','Ứng dụng trong bán dẫn, hợp kim hoặc vật liệu quang học.'],nonmetal:['🧪','Dùng trong hóa chất, vật liệu hoặc các quá trình sinh học.'],halogen:['🧴','Dùng trong sát khuẩn, dược phẩm hoặc vật liệu chuyên dụng.'],noble:['💡','Dùng trong chiếu sáng, khí bảo vệ hoặc nghiên cứu.'],lanthanide:['🧲','Dùng trong nam châm, phosphor, laser hoặc xúc tác.'],actinide:['☢️','Chủ yếu dùng trong nghiên cứu và công nghệ hạt nhân.'],unknown:['🔬','Nguyên tố tổng hợp, hiện chủ yếu phục vụ nghiên cứu khoa học.']};
function applicationOf(el){return applications[el.symbol]||categoryApps[el.category]}

const dialog=document.querySelector('#element-dialog');
function showDetails(el,tile){const app=applicationOf(el);document.querySelector('#detail-number').textContent=el.z;document.querySelector('#detail-symbol').textContent=el.symbol;document.querySelector('#detail-name').textContent=el.name;document.querySelector('#detail-category').textContent=categoryNames[el.category];document.querySelector('#detail-title').textContent=`Nguyên tố ${el.name}`;document.querySelector('#detail-mass').textContent=el.mass;document.querySelector('#detail-period').textContent=el.period;document.querySelector('#detail-group').textContent=el.group;document.querySelector('#detail-z').textContent=el.z;document.querySelector('#detail-config').textContent=electronConfig(el.z);document.querySelector('#detail-oxidation').textContent=oxidationText(el);document.querySelector('#detail-valency').textContent=valencyText(el);document.querySelector('#detail-app-icon').textContent=app[0];document.querySelector('#detail-application').textContent=app[1];dialog.style.setProperty('--element-color',getComputedStyle(tile).backgroundColor);dialog.classList.remove('pop');void dialog.offsetWidth;dialog.classList.add('pop');dialog.showModal()}
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
