const _0x1d6a26=_0x5034;(function(_0x5e0aea,_0x35c247){const _0x1373f3=_0x5034,_0x2cf86f=_0x5e0aea();while(!![]){try{const _0x3ae7cc=-parseInt(_0x1373f3(0x9b))/0x1*(-parseInt(_0x1373f3(0xd5))/0x2)+parseInt(_0x1373f3(0xbe))/0x3*(parseInt(_0x1373f3(0xa3))/0x4)+parseInt(_0x1373f3(0xd8))/0x5*(parseInt(_0x1373f3(0xdd))/0x6)+parseInt(_0x1373f3(0xc4))/0x7*(parseInt(_0x1373f3(0xb0))/0x8)+-parseInt(_0x1373f3(0xb4))/0x9+-parseInt(_0x1373f3(0xdb))/0xa*(parseInt(_0x1373f3(0xb6))/0xb)+-parseInt(_0x1373f3(0xcc))/0xc;if(_0x3ae7cc===_0x35c247)break;else _0x2cf86f['push'](_0x2cf86f['shift']());}catch(_0x5859fc){_0x2cf86f['push'](_0x2cf86f['shift']());}}}(_0x19b0,0x8fb37),document[_0x1d6a26(0x98)](_0x1d6a26(0xc3))[_0x1d6a26(0x9f)]('change',processUploadedFile),document[_0x1d6a26(0x98)]('autocopy')['addEventListener'](_0x1d6a26(0xd7),autoCopyAndDelete),document[_0x1d6a26(0x98)]('pncopy')[_0x1d6a26(0x9f)]('click',partnumberCopyAndDelete),document['getElementById'](_0x1d6a26(0xc2))[_0x1d6a26(0x9f)]('click',partpriceCopyAndDelete),document[_0x1d6a26(0x98)](_0x1d6a26(0x99))[_0x1d6a26(0x9f)]('click',resetAutoCopyComponents));function processUploadedFile(_0x2c7277){const _0x5d68a2=_0x1d6a26,_0x4366a2=_0x2c7277[_0x5d68a2(0xaa)][_0x5d68a2(0xa5)][0x0];if(!_0x4366a2){alert('No\x20file\x20selected.');return;}const _0x4d4bfc=new FileReader();_0x4d4bfc['onload']=function(_0x294f89){const _0x54808b=_0x5d68a2;try{const _0x3d45b9=JSON[_0x54808b(0xda)](_0x294f89[_0x54808b(0xaa)][_0x54808b(0x9a)]);if(Array[_0x54808b(0xb2)](_0x3d45b9)&&_0x3d45b9[_0x54808b(0xce)]>0x0){const _0x283434=formatJsons(_0x3d45b9);document[_0x54808b(0x98)](_0x54808b(0x9c))[_0x54808b(0xab)]=_0x283434;const _0x5d9a13=_0x3d45b9['length'];localStorage[_0x54808b(0xa0)](_0x54808b(0xca),_0x5d9a13);const _0x448351=_0x5d9a13*0x4;localStorage[_0x54808b(0xa0)](_0x54808b(0xd6),_0x448351),localStorage[_0x54808b(0xa0)]('countPNs',_0x5d9a13),localStorage['setItem'](_0x54808b(0xac),_0x5d9a13),document['getElementById'](_0x54808b(0xa9))[_0x54808b(0xc0)]=_0x54808b(0xcb)+_0x448351,document[_0x54808b(0x98)]('left2')['innerHTML']='Remaining<br>'+_0x5d9a13,document[_0x54808b(0x98)](_0x54808b(0xa8))[_0x54808b(0xc0)]=_0x54808b(0xcb)+_0x5d9a13;}else alert(_0x54808b(0x9d));}catch(_0x477b79){alert(_0x54808b(0xa4)+_0x477b79[_0x54808b(0xd3)]);}},_0x4d4bfc[_0x5d68a2(0xbf)](_0x4366a2);}function _0x5034(_0x39d7f0,_0x1f1675){const _0x19b016=_0x19b0();return _0x5034=function(_0x503483,_0x4d5af6){_0x503483=_0x503483-0x98;let _0x1a33e2=_0x19b016[_0x503483];return _0x1a33e2;},_0x5034(_0x39d7f0,_0x1f1675);}function formatJsons(_0x41c6f5,_0x52a3d9=0x0){const _0x195488=_0x1d6a26;let _0x8239ea='';return _0x41c6f5[_0x195488(0xc5)](_0x3ccf84=>{_0x8239ea+=formatPart(_0x3ccf84,_0x52a3d9);}),_0x8239ea;}function formatPart(_0x55d316,_0x429473){const _0x23be7c=_0x1d6a26;let _0x4a8692='';_0x4a8692+='\x20'[_0x23be7c(0xb3)](_0x429473)+_0x23be7c(0xdc)+_0x55d316['partNumber']+'\x0a',_0x4a8692+='\x20'[_0x23be7c(0xb3)](_0x429473)+_0x23be7c(0xe0)+_0x55d316[_0x23be7c(0xc1)]+'\x0a',_0x4a8692+='\x20'['repeat'](_0x429473)+'Quantity:\x20'+_0x55d316['quantity']+'\x0a',_0x4a8692+='\x20'[_0x23be7c(0xb3)](_0x429473)+_0x23be7c(0xc8)+parseFloat(_0x55d316['priceEach'])['toFixed'](0x2)+'\x0a\x0a',document['getElementById'](_0x23be7c(0xd2))['value']+=_0x55d316['partNumber']+'\x0a'+_0x55d316[_0x23be7c(0xc1)]+'\x0a'+_0x55d316['quantity']+'\x0a'+parseFloat(_0x55d316[_0x23be7c(0xb5)])[_0x23be7c(0xad)](0x2)+'\x0a',document[_0x23be7c(0x98)]('textarea4')[_0x23be7c(0xab)]+=parseFloat(_0x55d316[_0x23be7c(0xb5)])[_0x23be7c(0xad)](0x2)+'\x0a',document[_0x23be7c(0x98)](_0x23be7c(0xc6))['value']+=_0x55d316[_0x23be7c(0xc9)]+'\x0a';let _0xa1dcb2=parseInt(localStorage[_0x23be7c(0xa6)](_0x23be7c(0xca)))+0x1;return _0xa1dcb2===0x1&&(document[_0x23be7c(0x98)](_0x23be7c(0xd0))[_0x23be7c(0xc0)]=_0x23be7c(0xba)+_0x55d316[_0x23be7c(0xc9)],document[_0x23be7c(0x98)](_0x23be7c(0xae))['innerHTML']=_0x23be7c(0xba)+_0x55d316[_0x23be7c(0xc9)],document[_0x23be7c(0x98)](_0x23be7c(0xb9))['innerHTML']=_0x23be7c(0xba)+parseFloat(_0x55d316[_0x23be7c(0xb5)])[_0x23be7c(0xad)](0x2)),localStorage[_0x23be7c(0xa0)](_0x23be7c(0xca),_0xa1dcb2),_0x4a8692;}function resetAutoCopyComponents(){const _0x4afecc=_0x1d6a26;localStorage[_0x4afecc(0xa0)](_0x4afecc(0xca),'0'),localStorage[_0x4afecc(0xa0)](_0x4afecc(0xd6),'0'),localStorage[_0x4afecc(0xa0)]('countPNs','0'),localStorage[_0x4afecc(0xa0)](_0x4afecc(0xac),'0'),setElementValue([_0x4afecc(0xc3),_0x4afecc(0xd2),'textarea4','textarea3',_0x4afecc(0x9c)],''),document[_0x4afecc(0x98)](_0x4afecc(0xa1))[_0x4afecc(0xc0)]=_0x4afecc(0x9e),document[_0x4afecc(0x98)](_0x4afecc(0xde))['innerHTML']='Copied<br>--',document[_0x4afecc(0x98)](_0x4afecc(0xb8))[_0x4afecc(0xc0)]=_0x4afecc(0x9e),document[_0x4afecc(0x98)](_0x4afecc(0xd0))[_0x4afecc(0xc0)]=_0x4afecc(0xcd),document['getElementById'](_0x4afecc(0xae))[_0x4afecc(0xc0)]=_0x4afecc(0xcd),document[_0x4afecc(0x98)](_0x4afecc(0xb9))[_0x4afecc(0xc0)]='Next<br>--',document[_0x4afecc(0x98)]('left1')[_0x4afecc(0xc0)]=_0x4afecc(0xdf),document[_0x4afecc(0x98)]('left2')['innerHTML']=_0x4afecc(0xdf),document[_0x4afecc(0x98)](_0x4afecc(0xa8))[_0x4afecc(0xc0)]=_0x4afecc(0xdf),document[_0x4afecc(0x98)](_0x4afecc(0xb7))[_0x4afecc(0xa7)]=![],document['getElementById']('pncopy')[_0x4afecc(0xa7)]=![],document[_0x4afecc(0x98)](_0x4afecc(0xc2))[_0x4afecc(0xa7)]=![];}function autoCopyAndDelete(){const _0x2d53a2=_0x1d6a26,_0x1436bb=document[_0x2d53a2(0x98)]('textarea5')[_0x2d53a2(0xab)],_0x2635ba=_0x1436bb[_0x2d53a2(0xc7)]('\x0a');if(_0x2635ba[_0x2d53a2(0xce)]>0x0){const _0x223d32=_0x2635ba[0x0][_0x2d53a2(0xe1)]();_0x223d32!==''&&navigator[_0x2d53a2(0xe2)][_0x2d53a2(0xd1)](_0x223d32)[_0x2d53a2(0xbd)](()=>{const _0x13677c=_0x2d53a2;let _0x41d8ca=parseInt(localStorage['getItem'](_0x13677c(0xd6)))-0x1;if(_0x41d8ca===0x0){document[_0x13677c(0x98)](_0x13677c(0xd0))[_0x13677c(0xc0)]='Next<br>--',document[_0x13677c(0x98)]('left1')[_0x13677c(0xc0)]=_0x13677c(0xdf),document['getElementById'](_0x13677c(0xd2))['value']='',document[_0x13677c(0x98)](_0x13677c(0xb7))[_0x13677c(0xa7)]=!![];return;}const _0x16b414=_0x2635ba[0x1][_0x13677c(0xe1)]()||'',_0x108667=_0x2635ba['slice'](0x1)[_0x13677c(0xbb)]('\x0a');document[_0x13677c(0x98)](_0x13677c(0xd2))[_0x13677c(0xab)]=_0x108667,document[_0x13677c(0x98)](_0x13677c(0xa1))['innerHTML']='Copied<br>'+_0x223d32,document['getElementById'](_0x13677c(0xd0))[_0x13677c(0xc0)]=_0x13677c(0xba)+_0x16b414,document[_0x13677c(0x98)](_0x13677c(0xa9))[_0x13677c(0xc0)]=_0x13677c(0xcb)+_0x41d8ca,localStorage[_0x13677c(0xa0)]('countAlls',_0x41d8ca);})[_0x2d53a2(0xd9)](_0x5c0c57=>{const _0x4b4c31=_0x2d53a2;console[_0x4b4c31(0xbc)](_0x4b4c31(0xd4),_0x5c0c57);});}}function partnumberCopyAndDelete(){const _0x3e516f=_0x1d6a26,_0x2c370a=document['getElementById'](_0x3e516f(0xc6))[_0x3e516f(0xab)],_0x1e52e5=_0x2c370a[_0x3e516f(0xc7)]('\x0a');if(_0x1e52e5['length']>0x0){const _0xdc319b=_0x1e52e5[0x0][_0x3e516f(0xe1)]();_0xdc319b!==''&&navigator[_0x3e516f(0xe2)][_0x3e516f(0xd1)](_0xdc319b)[_0x3e516f(0xbd)](()=>{const _0x58eab3=_0x3e516f;let _0x1a8b5e=parseInt(localStorage[_0x58eab3(0xa6)]('countPNs'))-0x1;if(_0x1a8b5e===0x0){document[_0x58eab3(0x98)](_0x58eab3(0xae))['innerHTML']='Next<br>--',document[_0x58eab3(0x98)](_0x58eab3(0xb1))[_0x58eab3(0xc0)]='Remaining<br>--',document[_0x58eab3(0x98)]('textarea3')[_0x58eab3(0xab)]='',document['getElementById']('pncopy')[_0x58eab3(0xa7)]=!![];return;}const _0x412f25=_0x1e52e5[0x1]['trim']()||'',_0x4c3f27=_0x1e52e5[_0x58eab3(0xa2)](0x1)['join']('\x0a');document[_0x58eab3(0x98)](_0x58eab3(0xc6))[_0x58eab3(0xab)]=_0x4c3f27,document['getElementById'](_0x58eab3(0xde))['innerHTML']=_0x58eab3(0xaf)+_0xdc319b,document[_0x58eab3(0x98)]('next2')[_0x58eab3(0xc0)]=_0x58eab3(0xba)+_0x412f25,document['getElementById'](_0x58eab3(0xb1))[_0x58eab3(0xc0)]=_0x58eab3(0xcb)+_0x1a8b5e,localStorage[_0x58eab3(0xa0)]('countPNs',_0x1a8b5e);})[_0x3e516f(0xd9)](_0x1fa0c7=>{const _0x1e0768=_0x3e516f;console['error'](_0x1e0768(0xd4),_0x1fa0c7);});}}function partpriceCopyAndDelete(){const _0x1c0ea3=_0x1d6a26,_0x47c0d8=document[_0x1c0ea3(0x98)](_0x1c0ea3(0xcf))[_0x1c0ea3(0xab)],_0x251cfa=_0x47c0d8['split']('\x0a');if(_0x251cfa[_0x1c0ea3(0xce)]>0x0){const _0x2a93d9=_0x251cfa[0x0][_0x1c0ea3(0xe1)]();_0x2a93d9!==''&&navigator[_0x1c0ea3(0xe2)]['writeText'](_0x2a93d9)[_0x1c0ea3(0xbd)](()=>{const _0x3e0e39=_0x1c0ea3;let _0x4699eb=parseInt(localStorage[_0x3e0e39(0xa6)]('countPrices'))-0x1;if(_0x4699eb===0x0){document[_0x3e0e39(0x98)](_0x3e0e39(0xb9))[_0x3e0e39(0xc0)]=_0x3e0e39(0xcd),document[_0x3e0e39(0x98)](_0x3e0e39(0xa8))[_0x3e0e39(0xc0)]=_0x3e0e39(0xdf),document['getElementById'](_0x3e0e39(0xcf))[_0x3e0e39(0xab)]='',document[_0x3e0e39(0x98)](_0x3e0e39(0xc2))[_0x3e0e39(0xa7)]=!![];return;}const _0x206e0c=_0x251cfa[0x1][_0x3e0e39(0xe1)]()||'',_0x4e9350=_0x251cfa[_0x3e0e39(0xa2)](0x1)[_0x3e0e39(0xbb)]('\x0a');document['getElementById'](_0x3e0e39(0xcf))[_0x3e0e39(0xab)]=_0x4e9350,document[_0x3e0e39(0x98)](_0x3e0e39(0xb8))[_0x3e0e39(0xc0)]=_0x3e0e39(0xaf)+_0x2a93d9,document[_0x3e0e39(0x98)]('next3')[_0x3e0e39(0xc0)]=_0x3e0e39(0xba)+_0x206e0c,document[_0x3e0e39(0x98)](_0x3e0e39(0xa8))[_0x3e0e39(0xc0)]='Remaining<br>'+_0x4699eb,localStorage[_0x3e0e39(0xa0)]('countPrices',_0x4699eb);})['catch'](_0x3c60e2=>{const _0x82a72a=_0x1c0ea3;console[_0x82a72a(0xbc)]('Failed\x20to\x20copy\x20text:\x20',_0x3c60e2);});}}function _0x19b0(){const _0x515b13=['slice','8YfWAim','Error\x20parsing\x20JSON\x20file:\x20','files','getItem','disabled','left3','left1','target','value','countPrices','toFixed','next2','Copied<br>','792520JjrVDY','left2','isArray','repeat','7563663bzvmDg','priceEach','253MzkMPi','autocopy','copy3','next3','Next<br>','join','error','then','1567098oqlCql','readAsText','innerHTML','partName','pricecopy','fileInput','14ZcOLJv','forEach','textarea3','split','RF\x20Price:\x20$','partNumber','countLefts','Remaining<br>','12649044FSDaqP','Next<br>--','length','textarea4','next1','writeText','textarea5','message','Failed\x20to\x20copy\x20text:\x20','294092ljXDKW','countAlls','click','3435spRhwt','catch','parse','209660SmaRFq','Part\x20Number:\x20','8622SALqby','copy2','Remaining<br>--','Part\x20Name:\x20','trim','clipboard','getElementById','resetFile','result','5qGHAjD','textarea2','Invalid\x20JSON\x20structure.','Copied<br>--','addEventListener','setItem','copy1'];_0x19b0=function(){return _0x515b13;};return _0x19b0();}function setElementValue(_0x1d0744,_0x354b48){const _0x8c95f6=_0x1d6a26;_0x1d0744[_0x8c95f6(0xc5)](_0x1935ad=>{const _0x5191dd=_0x8c95f6,_0x22a0c1=document[_0x5191dd(0x98)](_0x1935ad);_0x22a0c1&&(_0x22a0c1[_0x5191dd(0xab)]=_0x354b48);});}