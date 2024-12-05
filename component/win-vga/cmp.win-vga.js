// © 2024 DJS 
 
 
 
 
 
class ComponentWinVga { 
 
 
 
	static args = {}; 
 
		
 	static arrSpoylersSelected = [];



 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 		this.arrSpoylersSelected = arrListPcVga;
 
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
 
 
/*
		let htmlListSpoylers = '';
		arrListPcVga.forEach( k => {

			htmlListSpoylers += `${ Component( 'Spoyler', k ) }`;

		});
*/

		let htmlListSpoylers = this.getHtml( this.arrSpoylersSelected );


		function compare( a, b ) {
			if ( a > b ) return -1;
			if ( a < b ) return 1;
		}




		let htmlOptionBit = '';
		if ( arrVGAbit ) {

			let timeCountBit = {};

			//arrVGAbit.sort( compare );
			arrVGAbit.sort( compare ).forEach( k => {

				if ( !timeCountBit[ k ] ) {

					htmlOptionBit += `<option value="${ k }">${ k } bit</option>`;
					timeCountBit[ k ] = true;
				}
			});
		}



		let htmlOptionRate = '';
		if ( arrVGArate ) {

			let timeCountRate = {};

			//arrVGArate.sort( compare );
			arrVGArate.sort( compare ).forEach( k => {

				if ( !timeCountRate[ k ] ) {

					htmlOptionRate += `<option value="${ k }">${ k } MHz</option>`;
					timeCountRate[ k ] = true;
				}
			});
		}




		let htmlOptionRam = '';
		if ( arrVGAram ) {

			let timeCountRam = {};



			//arrVGAram.sort(()=>1); // не сортується в цілому виразі ( як вище з іншими масивами )


			//arrVGAram.sort( compare );
			arrVGAram.sort( compare ).forEach( k => {

				if ( !timeCountRam[ k ] ) {

					htmlOptionRam += `<option value="${ k }">${ k } GB</option>`;
					timeCountRam[ k ] = true;
				}
			});

			//console.log( 'arrVGAram: ', arrVGAram );
			console.log( 'arrVGAram: ', arrVGAram );



		}




		//console.log( htmlOptionBit );



		let html = `
			<div class="cp-filters">

				<select data-id="chip" onchange="${ this.name }.change( this )">
					<option value="all">--- чіп</option>
					<option value="amd">AMD</option>
					<option value="nvidia">NVIDIA</option>
				</select>

				<select data-id="bit" onchange="${ this.name }.change( this )">
					<option value="all">--- bit</option>
					${ htmlOptionBit }
				</select>

				<select data-id="rate" onchange="${ this.name }.change( this )">
					<option value="all">--- MHz</option>
					${ htmlOptionRate }
				</select>

				<select data-id="ram" onchange="${ this.name }.change( this )">
					<option value="all">--- RAM</option>
					${ htmlOptionRam }

				</select>
			</div>

			<div class="list-spoylers">${ htmlListSpoylers }</div>
			${ Component( 'Logo' ) }
		`;

		return { tagParam, html };  
	} 
 
 




	static change( elem ) { 	// data - txt 
		const fooName = this.name + '.change()'; 
 
		//console.log( 'fooName: ', fooName ); 

		//console.log( elem.dataset.id );
		//console.log( elem.value );


		this.filterKey[ elem.dataset.id ] = elem.value;

		//console.log( this.filterKey );

		this.filter();
	}


 


	static filterKey = {

		chip 	: 'all',
		bit 	: 'all',
		rate 	: 'all',
		ram 	: 'all',
	};




	static filter( data = '' ) { 	// data - txt 
		const fooName = this.name + '.filter()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 

		let arrSelected = arrListPcVga;


		if ( this.filterKey ) {

			if ( this.filterKey.chip != 'all' ) {

				arrSelected = arrSelected.filter( k => {

					if ( k.chip == this.filterKey.chip ) 
						return true;
				});
			}


			if ( this.filterKey.bit != 'all' ) {

				arrSelected = arrSelected.filter( k => {

					if ( k.bit == this.filterKey.bit ) 
						return true;
				});
			}


			if ( this.filterKey.rate != 'all' ) {

				arrSelected = arrSelected.filter( k => {

					if ( k.rate == this.filterKey.rate ) 
						return true;
				});
			}


			if ( this.filterKey.ram != 'all' ) {

				arrSelected = arrSelected.filter( k => {

					if ( k.ram == this.filterKey.ram ) 
						return true;
				});
			}

			//console.log( 'arrSelected: ', arrSelected ); 
		}

		//console.log( 'filterKey: ', this.filterKey ); 


		//return arrSelected;


		this.insertHtmlSpoylers( arrSelected );
	} 
 




	static getHtml( data = [] ) {
		const fooName = this.name + '.getHtml()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 

		let html = '';
		data.forEach( k => {

			html += `${ Component( 'Spoyler', k ) }`;

		});

		return html;
	}





	static insertHtmlSpoylers( data = [] ) {
		const fooName = this.name + '.insertHtmlSpoylers()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 

		let html = '';
		data.forEach( k => {

			html += `${ Component( 'Spoyler', k ) }`;

		});


		document.querySelector( 'cmp-win-vga .list-spoylers' ).innerHTML = html;



		//ratealert();

		//return html;
	}














 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

	} 
 
 



 
 
} 
 
 
 	
 
 
 
 
 	
 
 
