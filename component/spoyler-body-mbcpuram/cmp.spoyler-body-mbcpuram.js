// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyMbCpuRam { 
 
 
 
	static args = {}; 
 
 
 
	static html( data = '' ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 
		let obj = {};


		if ( objListPcMbCpuRam && objListPcMbCpuRam[ data ] ) {
			obj = objListPcMbCpuRam[ data ];

			let htmlCat = '';
			if ( obj.cat == 'mb' ) 
				htmlCat = 'MotherBoard:';

			if ( obj.cat == 'cpu' ) 
				htmlCat = 'CPU:';

			if ( obj.cat == 'ram' ) 
				htmlCat = 'RAM';


			let htmlSocket = '';
			if ( obj.socket )
				htmlSocket = `<div class="keyval"><span class="key">сокет: </span>${ obj.socket }</div>`;


			// код комплектуючої
			let htmlCode = '';
			if ( obj.code ) 
				htmlCode = `<span class="code">(${ obj.code })</span>`;
			

			let htmlRateMemory = '';
			if ( obj.rate_memory ) {
				for ( let k in obj.rate_memory ) 
					htmlRateMemory += `${ k.slice( 1 ) }/`;

				if ( htmlRateMemory )
					htmlRateMemory = `<div class="keyval"><span class="key">частота пам\'яті: </span>${ htmlRateMemory.slice( 0, -1 ) } МГц</div>`;
					//htmlRateMemory = htmlRateMemory.slice( 0, -2 );
			}


			// максимальна частота процесора 
			let htmlRateMax = '';
			if ( obj.cpu_rate_max )
				htmlRateMax = `<div class="keyval"><span class="key">частота: </span>${ obj.cpu_rate_max } ГГц</div>`;

			// тип пам'яті
			let htmRamType = '';
			if ( obj.ram_type ) 
				htmRamType = `<div class="keyval"><span class="key">RAM type: </span>${ obj.ram_type }</div>`;

			// максимальний об'єм пам'яті
			let htmRamVal = '';
			if ( obj.ram_max )
				htmRamVal = `<div class="keyval"><span class="key">RAM об'єм: </span>${ obj.ram_max } Гб</div>`;

			// кількість слотів пам'яті
			let htmRamSlot = '';
			if ( obj.ram_slot )
				htmRamSlot = `<div class="keyval"><span class="key">RAM слотів: </span>${ obj.ram_slot } шт</div>`;

			// кількість слотів М.2
			let htmlSSDm2 = '';
			if ( obj.ssd_m2 )
				htmlSSDm2 = `<div class="keyval"><span class="key">SSD M2: </span>${ obj.ssd_m2 } шт</div>`;

			// швидкість LAN Ethernet
			let htmLan = '';
			if ( obj.lan )
				htmLan = `<div class="keyval"><span class="key">LAN: </span>${ obj.lan } ГГц</div>`;







			// ядро процевора
			let htmCore = '';
			if ( obj.core )
				if ( objPartsCode[ obj.core ] ) 
					if ( objPartsCode[ obj.core ].title ) 
						htmCore = `<div class="keyval"><span class="key">ядро: </span>${ objPartsCode[ obj.core ].title }</div>`;




			// кількість ядер
			let htmCores = '';
			if ( obj.cores )
				htmCores = `<div class="keyval"><span class="key">ядер: </span>${ obj.cores } шт</div>`;



			// кеш процесора
			let htmlCache = '';
			if ( obj.cache1 )
				htmlCache = obj.cache1;

			if ( obj.cache2 )
				htmlCache += ' / ' + obj.cache2;

			if ( obj.cache3 )
				htmlCache += ' / ' + obj.cache3;

			if ( htmlCache )
				htmlCache = `<div class="keyval"><span class="key">кеш: </span>${ htmlCache }</div>`;



			// відеоядро
			let htmlGpu = '';
			if ( obj.gpu ) {

				if ( objPartsCode[ obj.gpu ] )
					if ( objPartsCode[ obj.gpu ].title )
						htmlGpu += objPartsCode[ obj.gpu ].title;

				
				if ( obj.gpu_rate ) 
					htmlGpu += ` (${ obj.gpu_rate } МГц)`;
				
				htmlGpu = `<div class="keyval"><span class="key">відеоядро: </span>${ htmlGpu }</div>`;
			}





			let htmlSites = '';
			if ( obj.site ) 
				htmlSites = Component( 'Sites', obj.site );
		
			






			html = `<div class="body-wrap">
				<div class="obj-cat">${ htmlCat }</div>
				<div class="obj-title"><span class="key">назва: </span>${ obj.title } ${ htmlCode }</div>
				${ htmlSocket }

				${ htmlRateMax }

				${ htmlRateMemory }

				${ htmRamType }
				${ htmRamVal }
				${ htmRamSlot }

				${ htmlSSDm2 }
				${ htmLan }

				${ htmCores }
				${ htmlCache }
				${ htmCore }

				${ htmlGpu }





				${ htmlSites }
				
			</div>`;
		}


		return { tagParam, html };  
	} 
 
 
 
 








 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
