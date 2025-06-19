// © 2024 DJS 
 
 
 
 
 
class ComponentWin10set { 
 
 
 
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



		arrListPcWin10set.forEach( k => {


			//console.log( k );


			let htmlSteps = '';
			if ( k.steps ) {

				k.steps.forEach( step => {
					htmlSteps += `<div class="each">- ${ step }</div>`;
				});

				if ( htmlSteps )
					htmlSteps = `<div class="steps">${ htmlSteps }</div>`;

			}


			let htmlWinR = '';
			if ( k.winr ) 
				htmlWinR = `<div class="win-r">Win + R: ${ k.winr }</div>`;

			html += `<div class="each">
				<div class="title">${ k.title }</div>
				${ htmlWinR }
				${ htmlSteps }
		</div>`;



		});
 
 
 
		setMeta({ 
			title 			: 'Windows 10', 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
