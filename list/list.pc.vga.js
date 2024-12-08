/*

Довідник
	https://www.overclockers.ua/video/gpu/



*/



const arrListPcVga = [



/*

{
	id: '',
	code: '',
	cat: '',
	manufacturer: '',
	title: '',
	ram: 8,
	bit: 256,
	rate: 14000,
	type: 'GDDR-6',
	site: {
		elmir: '', // https://elmir.ua/
	},
	note: '',
},

*/






/*

ElMir 		// 2024-12-05
https://elmir.ua/ua/video_cards/ 	- загальне для відеокарт
_4Ee-6P4Q 							- модельний ряд ( RTX 4090 )
/?orderby=cost&orderdir=asc 		- сортування за зростанням ціни



Rozetka 	// 2024-12-05
https://hard.rozetka.com.ua/ua/videocards/ 		- загальне для відеокарт
c80087 											- графічний чіп ( GeForce RTX 4090 )
/sort=cheap;21330=geforce-rtx-4090/ 			- сортування за зростанням ціни



PC Shop 	// 2024-12-05
https://pcshop.ua/komplektuyuschie/videocards/graficheskij-chip_1/ 		- загальне для відеокарт
radeon-rx-6600_1 														- графічний чіп ( GeForce RTX 4090 )
?sort=p.price&order=ASC 												- сортування за зростанням ціни



Stylus 		// 2024-12-05
https://stylus.ua/uk/videokarty/chip: 		- загальне для відеокарт
geforce-rtx-4090 							- чіп ( GeForce RTX 4090 )
/?s=price_asc 								- сортування за зростанням ціни







*/





/*


1920x1080 	// Full HD
3840x2160 	// 4K
7680x4320 	// 8K


*/




// ---- 4090 ------------------------------------------------------------------------------------------------------------












{
	id: 'geforce_rtx_4090', title: 'GeForce RTX 4090', chip: 'nvidia',
	bit: 384, rate: 21000, ram: 24, type: 'GDDR-6X', resolution: '7680x4320 ( 8K )',
	site: {
		elmir 		: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%204090',
		rozetka 	: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-rtx-4090/',
		pcshop 		: 'https://pcshop.ua/komplektuyuschie/videocards/graficheskij-chip_1/geforce-rtx-4090_1?sort=p.price&order=ASC',
		stylus 		: 'https://stylus.ua/uk/videokarty/chip:geforce-rtx-4090/?s=price_asc',			
		click 		: 'https://click.ua/videokartyi-nvidia-geforce-rtx-4090',	
		compx 		: 'https://compx.ua/videokarti-nvidia-geforce/?sort=p.price&order=ASC&ocf=F751S2V1612910673',	
		telemart 	: 'https://telemart.ua/ua/videocard/filter/geforce-rtx-4090/?sort=price',	
		teraflops 	: 'https://tera-flops.com.ua/ua/g85328986-videokarty?csbss2=568960360',	
		v_comp 		: 'https://v-comp.com.ua/videokarty/?paga=0&col_page=20&sort=1&minP=0&maxP=351960&bren=&param=W3siaWQiOiI5MTYiLCJuYW1lIjpbIkdlRm9yY2UgUlRYNDA5MCJdfV0=',	
	},
},
{
	id: 'geforce_rtx_3090_ti', title: 'GeForce RTX 3090 Ti', chip: 'nvidia', 
	bit: 384, rate: 21000, ram: 24, type: 'GDDR-6X', resolution: '7680x4320 ( 8K )',
	site: {
		elmir 		: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%203090%20Ti',
		rozetka 	: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-rtx-3090-ti/',
		stylus 		: 'https://stylus.ua/uk/search/?q=geforce%20rtx%203090%20ti&s=price_asc',	
	},
},
{
	id: 'geforce_rtx_3090', title: 'GeForce RTX 3090', chip: 'nvidia',
	bit: 384, rate: 19500, ram: 24, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3080_ti', title: 'GeForce RTX 3080 Ti', chip: 'nvidia', 
	bit: 384, rate: 19000, ram: 12, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3080', title: 'GeForce RTX 3080', chip: 'nvidia',
	bit: 320, rate: 19000, ram: 10, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4080_super', title: 'GeForce RTX 4080 Super', chip: 'nvidia',
	bit: 256, rate: 23000, ram: 16, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-6akW/',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4080', title: 'GeForce RTX 4080', chip: 'nvidia',
	bit: 256, rate: 22400, ram: 16, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4070_ti_super', title: 'GeForce RTX 4070 Ti Super', chip: 'nvidia',
	bit: 256, rate: 21000, ram: 16, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_7800_xt', title: 'Radeon RX 7800 XT', chip: 'amd',
	bit: 256, rate: 19500, ram: 16, type: 'GDDR-6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_4Ee-6W4J/?orderby=cost&orderdir=desc',

	},
},
{
	id: 'geforce_rtx_2080_ti', title: 'GeForce RTX 2080 Ti', chip: 'nvidia', 
	bit: 352, rate: 14000, ram: 11, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3070_ti', title: 'GeForce RTX 3070 Ti', chip: 'nvidia',
	bit: 256, rate: 19000, ram: 8, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4070_ti', title: 'GeForce RTX 4070 Ti', chip: 'nvidia',
	bit: 192, rate: 21000, ram: 12, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4070_super', title: 'GeForce RTX 4070 Super', chip: 'nvidia',
	bit: 192, rate: 21000, ram: 12, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4070', title: 'GeForce RTX 4070', chip: 'nvidia',
	bit: 192, rate: 21000, ram: 12, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2080_super', title: 'GeForce RTX 2080 Super', chip: 'nvidia', 
	bit: 256, rate: 15500, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3070', title: 'GeForce RTX 3070', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3060_ti', title: 'GeForce RTX 3060 Ti', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2080', title: 'GeForce RTX 2080', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2070_super', title: 'GeForce RTX 2070 Super', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2060_super', title: 'GeForce RTX 2060 Super', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3060', title: 'GeForce RTX 3060', chip: 'nvidia',
	bit: 192, rate: 15000, ram: 12, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2060', title: 'GeForce RTX 2060', chip: 'nvidia',
	bit: 192, rate: 14000, ram: 6, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_gtx_1660_super', title: 'GeForce GTX 1660 Super', chip: 'nvidia',
	bit: 192, rate: 14000, ram: 6, type: 'GDDR-6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_4Ee-5Gc1/?orderby=cost&orderdir=asc',
		rozetka: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-gtx-1660-super/', //
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4060_ti', title: 'GeForce RTX 4060 Ti', chip: 'nvidia',
	bit: 128, rate: 18000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_gtx_1660_ti', title: 'GeForce GTX 1660 Ti', chip: 'nvidia',
	bit: 192, rate: 12000, ram: 6, type: 'GDDR-6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_4Ee-5A32/?orderby=cost&orderdir=asc',
		rozetka: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-gtx-1660-ti/',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_7600', title: 'Radeon RX 7600', chip: 'amd',
	bit: 128, rate: 18000, ram: 8, type: 'GDDR-6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_4Ee-6Rt4/?orderby=cost&orderdir=asc',
		rozetka 	: '',
		pcshop 		: '',
		stylus 		: '',	
	},
},
{
	id: 'geforce_rtx_4060', title: 'GeForce RTX 4060', chip: 'nvidia',
	bit: 128, rate: 17000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_6600_xt', title: 'Radeon RX 6600 XT', chip: 'amd',
	bit: 128, rate: 16000, ram: 8, type: 'GDDR-6',
	site: {
		elmir 		: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=Radeon%20RX%206600%20XT',
		rozetka 	: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=rx-6600-xt/',
		pcshop 		: '',
		stylus 		: 'https://stylus.ua/uk/search/?q=radeon%20rx%206600%20xt',	
	},
},
{
	id: 'geforce_rtx_3050', title: 'GeForce RTX 3050', chip: 'nvidia',
	bit: 128, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_gtx_1660', title: 'GeForce GTX 1660', chip: 'nvidia',
	bit: 192, rate: 8000, ram: 6, type: 'GDDR-5',
	site: {
		elmir: '',
		rozetka: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-gtx-1660/',
		pcshop: '',
	},
},
{
	id: 'geforce_gtx_1650_2', title: 'GeForce GTX 1650 rev.2', chip: 'nvidia',
	bit: 128, rate: 12000, ram: 4, type: 'GDDR-6', resolution: '7680x4320 ( 8K )',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_4Ee-5BoR/?orderby=cost&orderdir=asc',
		rozetka: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-gtx-1650/',
		pcshop: 'https://pcshop.ua/komplektuyuschie/videocards/graficheskij-chip_1/geforce-gtx-1650_1?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_gtx_1650', title: 'GeForce GTX 1650', chip: 'nvidia',
	bit: 128, rate: 8000, ram: 4, type: 'GDDR-5', resolution: '7680x4320 ( 8K )',
	site: {
		elmir 		: '',
		rozetka 	: '',
		pcshop 		: '',
	},
},


{
	id: 'geforce_8800_gt', title: 'GeForce 8800 GT', chip: 'nvidia', // code: 'ZT-88TES3P-FCP',
	bit: 256, rate: 1800, ram: 0.512, type: 'GDDR-3',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'riva_tnt_2_ultra', title: 'Riva TNT 2 Ultra', chip: 'nvidia',
	bit: 128, rate: 183, ram: 0.032, type: 'SDR',
	site: {

	},
},
{
	id: 'riva_tnt_2_pro', title: 'Riva TNT 2 Pro', chip: 'nvidia',
	bit: 128, rate: 166, ram: 0.032, type: 'SDR',
	site: {

	},
},
{
	id: 'riva_tnt_2', title: 'Riva TNT 2', chip: 'nvidia',
	bit: 128, rate: 125, ram: 0.032, type: 'SDR',
	site: {

	},
},
{
	id: 'riva_tnt', title: 'Riva TNT', chip: 'nvidia',
	bit: 128, rate: 110, ram: 0.016, type: 'SDR',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},





/*
{
	id: 'intel_uhd_graphics_630', title: 'Intel UHD Graphics 630', chip: 'intel',
	bit: 128, rate: 2666, ram: 0, type: 'DDR-4',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
*/







];




let arrVGAbit = [];
let arrVGArate = [];
let arrVGAram = [];
let arrVGAtype = [];


let objListPcVga = {};
arrListPcVga.forEach( k => {

	if ( k.id ) 
		objListPcVga[ k.id ] = k;

	if ( k.bit ) 
		arrVGAbit.push( +k.bit );

	if ( k.rate ) 
		arrVGArate.push( +k.rate );

	if ( k.ram ) 
		arrVGAram.push( +k.ram );

	if ( k.type ) 
		arrVGAtype.push( k.type );
});


/*
arrVGAbit.sort( ()=>-1 );
arrVGArate.sort( ()=>-1 );
arrVGAram.sort( ()=>-1 );
arrVGAtype.sort( ()=>-1 );
*/






/*
console.log( 'arrVGAbit: ', arrVGAbit );
console.log( 'arrVGArate: ', arrVGArate );
console.log( 'arrVGAtype: ', arrVGAtype );

console.log( 'arrVGAram: ', arrVGAram );
*/




