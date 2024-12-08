// © 2024 DJS 
 
 
 
 
 
class ComponentSites { 
 
 
 
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
 
 
 
		let html = '';

		if ( objData ) {

			for ( let k in objData ) {

				if ( k == 'elmir' && objData.elmir ) 
					html += `<a href="${ objData.elmir }" title="ElMir" target="_blank"><img src="img/pic/favicon_elmir.png" alt=""></a>`;
			
				if ( k == 'rozetka' && objData.rozetka ) 
					html += `<a href="${ objData.rozetka }" title="Rozetka" target="_blank"><img src="img/pic/favicon_rozetka.png" alt=""></a>`;
				
				if ( k == 'pcshop' && objData.pcshop ) 
					html += `<a href="${ objData.pcshop }" title="PC Shop" target="_blank"><img src="img/pic/favicon_pcshop.png" alt=""></a>`;
				
				if ( k == 'stylus' && objData.stylus ) 
					html += `<a href="${ objData.stylus }" title="Stylus" target="_blank"><img src="img/pic/favicon_stylus.png" alt=""></a>`;
				
				if ( k == 'telemart' && objData.telemart ) 
					html += `<a href="${ objData.telemart }" title="TeleMart" target="_blank"><img src="img/pic/favicon_telemart.png" alt=""></a>`;
				
				if ( k == 'compx' && objData.compx ) 
					html += `<a href="${ objData.compx }" title="CompX" target="_blank"><img src="img/pic/favicon_compx.png" alt=""></a>`;
				
				if ( k == 'click' && objData.click ) 
					html += `<a href="${ objData.click }" title="Click" target="_blank"><img src="img/pic/favicon_click.png" alt=""></a>`;
				
				if ( k == 'teraflops' && objData.teraflops ) 
					html += `<a href="${ objData.teraflops }" title="TeraFlops" target="_blank"><img src="img/pic/favicon_teraflops.png" alt=""></a>`;					

				if ( k == 'v_comp' && objData.v_comp ) 
					html += `<a href="${ objData.v_comp }" title="V-Comp" target="_blank"><img src="img/pic/favicon_v_comp.png" alt=""></a>`;
				
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
 
 
 	
 
 
 
 
 	
 
 
