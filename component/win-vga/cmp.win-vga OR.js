// © 2024 DJS 
 
 
 
 
 
class ComponentWinVga { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		//let html = fooName; 
 
 
 
		setMeta({ 
			title 			: 'Відеокарти', 
			description 	: 'Відеокарти...', 
			//image 		: '', 
		}); 
 
 

		let tBody = '';
		arrListPcVga.forEach( k => {

			//let htmlGbs = k.bit * k.rate;

			let htmlGbs = this.getThroughput( k.bit, k.rate );


			//let htmlGbs = ( k.bit * k.rate * 1000000 ) / ( 8 * 1024 * 1024 * 1024 ) ;

/*
			let htmlSite = '';
			if ( k.site ) {
				if ( k.site.elmir ) 
					htmlSite += `<a href="https://elmir.ua/ua/${ k.site.elmir }" target="_blank"><img src="img/pic/favicon_elmir.png"></a> `;

				if ( k.site.rozetka ) 
					htmlSite += `<a href="https://hard.rozetka.com.ua/ua/${ k.site.rozetka }" target="_blank"><img src="img/pic/favicon_rozetka.png"></a> `;

			}
*/

			tBody += `<tr data-id="${ k.id }" data-pm="+">
				<td class="manufacturer">${ k.manufacturer }</td>
				<td class="model">
					<div class="modelTitle pointer" onclick="ComponentWinVga.clc( this )"><span class="pm">+</span> ${ k.model }</div>
					<div class="modelBody"></div>
				</td>
				<td class="throughput">
					<span class="gbs">${ htmlGbs }</span> <span class="unit">GB/s</span> = 
					<span class="bit">${ k.bit }</span> <span class="unit">bit</span> * 
					<span class="rate">${ k.rate }</span> <span class="unit">MHz</span>
				</td>
				<td class="ram">${ k.ram } <span class="unit">GB</span></td>
			</tr>`;
			//<td>${ k.type }</td>
			//<td class="site">${ htmlSite }</td>

		});

					//<td>Сайти</td>
					//<td>Тип</td>

		let htmlTable = `<table id="tableVga">
			<thead>
				<tr>
					<td>Виробник</td>
					<td>Модель</td>
					<td>Продуктивність</td>
					<td>RAM</td>
				</tr>
			</thead>
			<tbody>${ tBody }</tbody>
		</table>`;


		let html = `
			${ htmlTable }
			${ Component( 'Logo' ) }
		`;





		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 


		let divParent = elem.closest( 'tr' );


		//console.log( 'divParent: ', divParent ); 
		//console.log( 'divParent-pm: ', divParent.dataset.pm ); 
		//console.log( 'divParent-id: ', divParent.dataset.id ); 


		let obj = objListPcVga[ divParent.dataset.id ] ? objListPcVga[ divParent.dataset.id ] : {};
		//console.log( 'obj: ', obj ); 


		let divModelBody = divParent.querySelector( '.model .modelBody' );


		//console.log( 'divModelBody: ', divModelBody ); 
		


		if ( divParent.dataset.pm == '+' ) {
			divParent.dataset.pm = '-';


			divParent.querySelector( '.model .modelTitle .pm' ).innerHTML = '-';



			let htmlSite = '';
			if ( obj.site ) {

				if ( obj.site.elmir ) 
					htmlSite += `<a href="https://elmir.ua/ua/video_cards/${ obj.site.elmir }" target="_blank" title="www.elmir.ua"><img src="img/pic/favicon_elmir.png"></a> `;

				if ( obj.site.rozetka ) 
					htmlSite += `<a href="https://hard.rozetka.com.ua/ua/${ obj.site.rozetka }" target="_blank" title="www.rozetka.com.ua"><img src="img/pic/favicon_rozetka.png"></a> `;
			
				if ( obj.site.pcshop ) 
					htmlSite += `<a href="https://pcshop.ua/ua/komplektuyuschie/videocards/${ obj.site.pcshop }" target="_blank" title="www.pcshop.ua"><img src="img/pic/favicon_pcshop.png"></a> `;
			
				if ( htmlSite )
					htmlSite = `<div class="info-site"><span class="unit">магазини:</span> ${ htmlSite }</div>`;
			}



			divModelBody.innerHTML = `<div class="bodyContent">
				<div class="info-title">
					${ obj.manufacturer ? obj.manufacturer : '' } 
					${ obj.model ? obj.model : '' } 
					${ obj.title ? obj.title : '' }
				</div>

				<div class="info-code">${ obj.code ? obj.code : '' }</div>

				<div class="info-throughput">
					<span class="unit">Продуктивність:</span>
					<span class="n-throughput">${ this.getThroughput( obj.bit, obj.rate ) }</span>
					<span class="unit">ГБ/с</span>
				</div>

				<div class="info-memory">Пам\'ять:</div>

				<div class="info-bit">
					<span class="unit">шина:</span>
					${ obj.bit ? obj.bit : '?' }
					<span class="unit">bit</span>
				</div>

				<div class="info-rate">
					<span class="unit">частота:</span>
					${ obj.rate ? obj.rate : '?' }
					<span class="unit">МГц</span>
				</div>

				<div class="info-ram">
					<span class="unit">oб\'єм:</span>
					${ obj.ram ? obj.ram : '?' } 
					<span class="unit">Гб</span>
				</div>

				<div class="info-type">
					<span class="unit">тип:</span>
					${ obj.type ? obj.type : '?' }
				</div>

				${ htmlSite }
			</div>`;
		}

		else {
			divParent.querySelector( '.model .modelTitle .pm' ).innerHTML = '+';
			divParent.dataset.pm = '+';
			divModelBody.innerHTML = '';
		}
	} 
 
 
 
	static getThroughput( bit, rate ) { 	// bit - в бітах, rate - в мегагерцах

		//let kilo = 1000;
		let kilo = 1024;





		//return (( bit / 8 ) * rate ) / 1000;


		//return ( 57.6 / 1800 ) * 8 * 1000;


		return ( bit * rate ) / 8000;








		//return Math.round( ( bit * rate * 1000000 ) / ( 8 * 1024 * 1024 * 1024 ) );
		//return Math.round( ( bit * rate * 1000000 ) / ( 8 * 1000 * 1000 * 1000 ) );

		//20000 МГц = 20000000 кГц = 20000000000 Гц 


		// 					 біт   МГц	  Гц		  Байт	кБайт  МБайт  ГБайт
		//return Math.round( ( bit * rate * 1000000 ) / ( 8 * kilo * kilo * kilo ) );







	}





 
 
} 
 
 
 	
 
 
 
 
 	
 
 
