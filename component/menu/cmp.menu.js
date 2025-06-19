// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [

		//{ title: 'Головна' 			, id: 'index' 					, href: '?' 			, args: { id1: 'arg_1' 		, }, },


		{ title: 'Мій ПК' 			, id: 'my_pc' 					, href: '?my-pc'		},
		{ title: 'Відеокарти' 		, id: 'vga' 					, href: '?vga'			},
		{ title: 'MB,CPU,RAM' 		, id: 'mbcpuram' 				, href: '?mbcpuram'		},
		{ title: 'Windows 10' 		, id: 'windows_10' 				, href: '?windows-10'	},



	];







 
	static html( objData = {} ) { 
		const name = this.name + '.html()'; 
 
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
 		this.arrBtns.forEach( k => {
 			html += `<div class="btn pointer" data-id="${ k.id }" onclick="${ this.name }.clc( '${ k.href }' )">${ k.title }</div>`;
		});
 



 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) {  
		const fooName = this.name + '.clc()';

		//console.log( 'fooName: ', fooName );
		//console.log( 'data: ', data );


		//console.log( 'data-id: ', data.dataset.id );
		//console.log( 'data-href: ', data.dataset.href );


		// чи відображти меню
		ComponentHeader.clc();


		if ( history.pushState ) {
			history.pushState( null, null, data );
			
			Router.loadContent();
		}

	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
