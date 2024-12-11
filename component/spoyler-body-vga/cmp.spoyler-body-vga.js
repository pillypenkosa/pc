// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyVga { 
 
 
 
	static args = {}; 
 
 
 
	static html( data = '' ) { 
		const fooName = this.name + '.html()'; 
 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 

		let obj = {};

		//console.log( 'objListPcVga: ', objListPcVga ); 

		let html = '';

		if ( objListPcVga ) {
			if ( objListPcVga[ data ] ) {


				obj = objListPcVga[ data ];


				//console.log( 'obj: ', obj ); 

				let htmlSites = '';
				if ( obj.site ) 
					htmlSites = Component( 'Sites', obj.site );
			

				let htmlThroughput = '';
				if ( obj.bit && obj.rate ) {

					htmlThroughput = `<div class="throughput">
						<span class="txt-key">продуктивність:</span>
						<span class="txt-val">${ ComponentWinVga.getThroughput( obj.bit, obj.rate ) }</span>
						<span class="txt-unit">GB/s</span>
					</div>`;
				}

				let htmlBit = '';
				if ( obj.bit ) {

					htmlBit = `<div class="bit">
						<span class="txt-key">шина:</span>
						${ obj.bit }
						<span class="txt-unit">bit</span>
					</div>`;
				}

				let htmlRate = '';
				if ( obj.rate ) {

					htmlRate = `<div class="rate">
						<span class="txt-key">частота:</span>
						${ obj.rate }
						<span class="txt-unit">MHz</span>
					</div>`;
				}

				let htmlRam = '';
				if ( obj.ram ) {

					htmlRam = `<div class="ram">
						<span class="txt-key">об'єм:</span>
						${ obj.ram }
						<span class="txt-unit">GB</span>
					</div>`;
				}

				let htmlType = '';
				if ( obj.type ) {

					//let htmlTypeTXT = objTitleIDs[ obj.type ] ? objTitleIDs[ obj.type ] : obj.type;

					htmlType = `<div class="type">
						<span class="txt-key">тип:</span>
						${ objTitleIDs[ obj.type ] ? objTitleIDs[ obj.type ] : obj.type }
					</div>`;
				}

				let htmlResolution = '';
				if ( obj.resolution ) {

					htmlResolution = `<div class="resolution">
						<span class="txt-key">екран:</span>
						${ obj.resolution }
					</div>`;
				}



				html = `<div class="inner">
					<div class="txt-chip">${ obj.chip }</div>
					<div class="txt-title">${ obj.title }</div>

					${ htmlThroughput }
					${ htmlBit }
					${ htmlRate }
					${ htmlRam }
					${ htmlType }
					${ htmlResolution }
					${ htmlSites }

				</div>`;
			}
		}



 
		return { tagParam, html };  
	} 
 
 
 






 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
