// © 2023 DJS 
 
 
 
 
 
class ComponentWinMyPc { 
 
 
 
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
		arrListPcMy.forEach( k => {

			let htmlKeyVal = '';
			if ( k.keyval ) {

				k.keyval.forEach( keyval => {

					htmlKeyVal += `<div class="each-keyval">
						<span class="key">${ keyval.k }:</span>
						<span class="val">${ keyval.v }</span>
					</div>`;
				});
			}



			let htmlSites = '';
			if ( k.site ) {

				k.site.forEach( site => {

					htmlSites += `<div class="each-site">
						<a href="${ site.href }" target="_blank" title="">${ site.title }</a>
					</div>`;
				});

				htmlSites = `<div class="sites">${ htmlSites }</div>`;
			}











			html += `<div class="each">
					
				<div class="title">${ k.title }:</div>
				${ htmlKeyVal }
				${ htmlSites }

			</div>`;
		});










 
		setMeta({ 
			title 			: 'Мій ПК', 
			description 	: 'Мій ПК...', 
			//image 		: '', 
		}); 
 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
