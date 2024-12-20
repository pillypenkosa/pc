// © 2024 DJS 
 
 
 
 
 
class ComponentWinMbCpuRam { 
 
 
 
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
 
 
 
 
 
 
		setMeta({ 
			title 			: fooName, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 

		let htmlList = this.getHtml( arrListPcMbCpuRam );

	

		let htmlOptionRateMemory = '';
		if ( arrRateMemory ) {
			arrRateMemory.forEach( k => {
				htmlOptionRateMemory += `<option value="_${ k }">${ k }</option>`;
			});
		}


		let htmlOptionSocket = '';
		if ( arrSocket ) {
			arrSocket.forEach( k => {
				htmlOptionSocket += `<option value="${ k }">${ objPartsCode[ k ].title }</option>`;
			});
		}




		let html = `
			<div class="cp-filters">

				<select data-id="rate_memory" onchange="${ this.name }.change( this )">
					<option value="all">--- MHz</option>
					${ htmlOptionRateMemory }
				</select>


				<select data-id="socket" onchange="${ this.name }.change( this )">
					<option value="all">--- Socket</option>
					${ htmlOptionSocket }
				</select>




			</div>

			<div class="list">${ htmlList }</div>
		`;


		return { tagParam, html };  
	} 
 
 
 
	static filterKey = {

		rate_memory 	: 'all',
		socket 			: 'all',

	};
 



	//static arrSelected = arrListPcMbCpuRam;




	static change( elem ) { 
		const fooName = this.name + '.getHtml()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 


		let id = elem.dataset.id;
		let val = elem.value;


		this.filterKey[ id ] = val;


		//console.log( 'val: ', val ); 

		let arrSelected = arrListPcMbCpuRam;
		//console.log( 'arrSelected: ', arrSelected ); 



		if ( this.filterKey.rate_memory != 'all' ) {

			arrSelected = arrSelected.filter( k => {

				if ( k.rate_memory && k.rate_memory[ this.filterKey.rate_memory ] ) 
					return true;
			});
		}

		if ( this.filterKey.socket != 'all' ) {

			arrSelected = arrSelected.filter( k => {

				if ( k.socket && k.socket == this.filterKey.socket ) 
					return true;
			});
		}




		document.querySelector( 'cmp-win-mbcpuram .list' ).innerHTML = this.getHtml( arrSelected );
	} 



	static getHtml( data = [] ) { 
		const fooName = this.name + '.getHtml()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 


		let html = '';
		data.forEach( k => {

			html += `${ 
				Component( 'Spoyler', { 
					id 		: k.id, 
					title 	: `<span class="key">${ k.cat }: </span>${ k.title }`, 
					cmp 	: 'Spoyler-Body-MbCpuRam', // для вставки в body спойлера
				})}`;
		});



		return html;
	} 
 
 


 
	static clc222( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
