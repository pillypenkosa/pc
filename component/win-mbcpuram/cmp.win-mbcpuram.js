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

	
		let html = `
			<div class="cp-filters">

				<select data-id="rate_memory" onchange="${ this.name }.change( this )">
					<option value="all">--- MHz</option>
					<option value="_4800">4800</option>
					<option value="_5600">5600</option>
				</select>

			</div>

			<div class="list">${ htmlList }</div>
		`;


		return { tagParam, html };  
	} 
 
 
 
	static filterKey = {

		rate_memory 	: 'all',

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
		//console.log( 'this.filterKey: ', this.filterKey ); 

		let arrSelected = arrListPcMbCpuRam;



		if ( this.filterKey.rate_memory != 'all' ) {

			arrSelected = arrSelected.filter( k => {

				if ( k.rate_memory && k.rate_memory[ this.filterKey.rate_memory ] ) 
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
 
 
 	
 
 
 
 
 	
 
 
