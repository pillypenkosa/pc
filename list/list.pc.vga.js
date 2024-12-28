/*

Довідник
	https://www.overclockers.ua/video/gpu/



*/

// DIMM 		- Dual In-line Memory Module

// DDR 		- Double Data Rate
// GDDR 	- Graphics Double Data Rate

// RAM 		- Random Access Memory
// DRAM 	- Dynamic Random Access Memory
// SDRAM 	- Synchronous Dynamic Random Access Memory


const objTitleIDs = {

	gddr7 		: 'GDDR-7',
	gddr6x 		: 'GDDR-6X',
	gddr6 		: 'GDDR-6',
	gddr5 		: 'GDDR-5',
	gddr3 		: 'GDDR-3',
	sdr 		: 'SDR',

};








const arrVgaSeria = [ 

	{ id: 'rtx50' 		, title: 'GeForce RTX 50' , },
	{ id: 'rtx40' 		, title: 'GeForce RTX 40' , },
	{ id: 'rtx30' 		, title: 'GeForce RTX 30' , },
	{ id: 'rtx20' 		, title: 'GeForce RTX 20' , },
	{ id: 'gtx10' 		, title: 'GeForce GTX 10' , },

	{ id: 'rx7' 		, title: 'Radeon RX 7' , },
	{ id: 'rx6' 		, title: 'Radeon RX 6' , },
	{ id: 'rx5' 		, title: 'Radeon RX 5' , },





];










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
	type: 'gddr6',
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
















{
	id: 'geforce_rtx_5090', title: 'GeForce RTX 5090', seria: 'rtx50', chip: 'nvidia',
	bit: 512, rate: 28000, ram: 32, type: 'gddr7', resolution: '',
	site: {
		elmir 		: '',
	},
},
{
	id: 'geforce_rtx_4090', title: 'GeForce RTX 4090', seria: 'rtx40', chip: 'nvidia',
	bit: 384, rate: 21000, ram: 24, type: 'gddr6x', resolution: '7680x4320 ( 8K )',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6P4Q/?orderby=cost&orderdir=asc',
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
	id: 'geforce_rtx_3090_ti', title: 'GeForce RTX 3090 Ti', seria: 'rtx30', chip: 'nvidia', 
	bit: 384, rate: 21000, ram: 24, type: 'gddr6x', resolution: '7680x4320 ( 8K )',
	site: {
		elmir 		: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%203090%20Ti',
		rozetka 	: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-rtx-3090-ti/',
		stylus 		: 'https://stylus.ua/uk/search/?q=geforce%20rtx%203090%20ti&s=price_asc',	
	},
},
{
	id: 'geforce_rtx_5080', title: 'GeForce RTX 5080', seria: 'rtx50', chip: 'nvidia',
	bit: 256, rate: 30000, ram: 16, type: 'gddr7', resolution: '',
	site: {
		elmir 		: '',
	},
},
{
	id: 'radeon_rx_7900_xtx', title: 'Radeon RX 7900 XTX', seria: 'rx7', chip: 'amd',
	bit: 384, rate: 20000, ram: 24, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-6Q28/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'geforce_rtx_3090', title: 'GeForce RTX 3090', seria: 'rtx30', chip: 'nvidia',
	bit: 384, rate: 19500, ram: 24, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%203090',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3080_ti', title: 'GeForce RTX 3080 Ti', seria: 'rtx30', chip: 'nvidia', 
	bit: 384, rate: 19000, ram: 12, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%203080%20Ti',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_5070_ti', title: 'GeForce RTX 5070 Ti', seria: 'rtx50', chip: 'nvidia',
	bit: 256, rate: 28000, ram: 16, type: 'gddr7', resolution: '',
	site: {
		elmir 		: '',
	},
},
{
	id: 'radeon_rx_7900_xt', title: 'Radeon RX 7900 XT', seria: 'rx7', chip: 'amd',
	bit: 320, rate: 20000, ram: 20, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-6Q27/?orderby=cost&orderdir=desc',
	},
},
{
	id: 'geforce_rtx_3080', title: 'GeForce RTX 3080', seria: 'rtx30', chip: 'nvidia',
	bit: 320, rate: 19000, ram: 10, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%203080',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4080_super', title: 'GeForce RTX 4080 Super', seria: 'rtx40', chip: 'nvidia',
	bit: 256, rate: 23000, ram: 16, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6akW/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'geforce_rtx_4080', title: 'GeForce RTX 4080', seria: 'rtx40', chip: 'nvidia',
	bit: 256, rate: 22400, ram: 16, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6PLq/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_5070', title: 'GeForce RTX 5070', seria: 'rtx50', chip: 'nvidia',
	bit: 192, rate: 28000, ram: 12, type: 'gddr7', resolution: '',
	site: {
		elmir 		: '',
	},
},
{
	id: 'geforce_rtx_4070_ti_super', title: 'GeForce RTX 4070 Ti Super', seria: 'rtx40', chip: 'nvidia',
	bit: 256, rate: 21000, ram: 16, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6akV/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_7800_xt', title: 'Radeon RX 7800 XT', seria: 'rx7', chip: 'amd',
	bit: 256, rate: 19500, ram: 16, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_4Ee-6W4J/?orderby=cost&orderdir=desc',

	},
},
{
	id: 'geforce_rtx_2080_ti', title: 'GeForce RTX 2080 Ti', seria: 'rtx20', chip: 'nvidia', 
	bit: 352, rate: 14000, ram: 11, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%202080%20Ti',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3070_ti', title: 'GeForce RTX 3070 Ti', seria: 'rtx30', chip: 'nvidia',
	bit: 256, rate: 19000, ram: 8, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%203070%20Ti',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_7900_gre', title: 'Radeon RX 7900 GRE', seria: 'rx7', chip: 'amd',
	bit: 256, rate: 18000, ram: 16, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-6f8K/?orderby=cost&orderdir=desc',
	},
},
{
	id: 'radeon_rx_7900', title: 'Radeon RX 7900', seria: 'rx7', chip: 'amd',
	bit: 256, rate: 18000, ram: 16, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-6a7d/?orderby=cost&orderdir=desc',
	},
},
{
	id: 'radeon_rx_6800', title: 'Radeon RX 6800', seria: 'rx6', chip: 'amd', 
	bit: 256, rate: 16000, ram: 16, type: 'gddr6', 
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-62NY/?orderby=cost&orderdir=desc',
	
	},
},
{
	id: 'geforce_rtx_4070_ti', title: 'GeForce RTX 4070 Ti', seria: 'rtx40', chip: 'nvidia',
	bit: 192, rate: 21000, ram: 12, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6PlM/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4070_super', title: 'GeForce RTX 4070 Super', seria: 'rtx40', chip: 'nvidia',
	bit: 192, rate: 21000, ram: 12, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6akX/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4070', title: 'GeForce RTX 4070', seria: 'rtx40', chip: 'nvidia',
	bit: 192, rate: 21000, ram: 12, type: 'gddr6x',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6RVR/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2080_super', title: 'GeForce RTX 2080 Super', seria: 'rtx20', chip: 'nvidia', 
	bit: 256, rate: 15500, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%202080%20Super',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_5060_ti', title: 'GeForce RTX 5060 Ti', seria: 'rtx50', chip: 'nvidia',
	bit: 128, rate: 28000, ram: 16, type: 'gddr7', resolution: '',
	site: {
		elmir 		: '',
	},
},
{
	id: 'geforce_rtx_5060', title: 'GeForce RTX 5060', seria: 'rtx50', chip: 'nvidia',
	bit: 128, rate: 28000, ram: 8, type: 'gddr7', resolution: '',
	site: {
		elmir 		: '',
	},
},
{
	id: 'geforce_rtx_3070', title: 'GeForce RTX 3070', seria: 'rtx30', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%203070',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3060_ti', title: 'GeForce RTX 3060 Ti', seria: 'rtx30', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-5vfb/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2080', title: 'GeForce RTX 2080', seria: 'rtx20', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%202080',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2070_super', title: 'GeForce RTX 2070 Super', seria: 'rtx20', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%202070%20Super',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2060_super', title: 'GeForce RTX 2060 Super', seria: 'rtx20', chip: 'nvidia',
	bit: 256, rate: 14000, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%20RTX%202060%20Super',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_7700_xt', title: 'Radeon RX 7700 XT', seria: 'rx7', chip: 'amd',
	bit: 192, rate: 18000, ram: 12, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-6W39/?orderby=cost&orderdir=desc',
	},
},
{
	id: 'radeon_rx_6750', title: 'Radeon RX 6750', seria: 'rx6', chip: 'amd', 
	bit: 192, rate: 18000, ram: 12, type: 'gddr6', 
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-6MOU/?orderby=cost&orderdir=desc',
	
	},
},
{
	id: 'geforce_rtx_3060', title: 'GeForce RTX 3060', seria: 'rtx30', chip: 'nvidia',
	bit: 192, rate: 15000, ram: 12, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-5vfc/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2060', title: 'GeForce RTX 2060', seria: 'rtx20', chip: 'nvidia',
	bit: 192, rate: 14000, ram: 6, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-595R/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_gtx_1660_super', title: 'GeForce GTX 1660 Super', seria: 'gtx10', chip: 'nvidia',
	bit: 192, rate: 14000, ram: 6, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-5Gc1/?orderby=cost&orderdir=asc',
		rozetka: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-gtx-1660-super/', //
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4060_ti', title: 'GeForce RTX 4060 Ti', seria: 'rtx40', chip: 'nvidia',
	bit: 128, rate: 18000, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6Rsq/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'geforce_gtx_1660_ti', title: 'GeForce GTX 1660 Ti', seria: 'gtx10', chip: 'nvidia',
	bit: 192, rate: 12000, ram: 6, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-5A32/?orderby=cost&orderdir=asc',
		rozetka: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-gtx-1660-ti/',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_7600_xt', title: 'Radeon RX 7600 XT', seria: 'rx7', chip: 'amd',
	bit: 128, rate: 18000, ram: 16, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-6ceK/?orderby=cost&orderdir=desc',
	},
},
{
	id: 'radeon_rx_7600', title: 'Radeon RX 7600', seria: 'rx7', chip: 'amd',
	bit: 128, rate: 18000, ram: 8, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_4Ee-6Rt4/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'radeon_rx_6650_xt', title: 'Radeon RX 6650 XT', seria: 'rx6', chip: 'amd', 

	bit: 128, rate: 17500, ram: 8, type: 'gddr6', 
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_6q-58G_6r-56Cd_1AY-6Y6_4Ee-6MOP/?orderby=cost&orderdir=asc',
	
	},
},
{
	id: 'geforce_rtx_4060', title: 'GeForce RTX 4060', seria: 'rtx40', chip: 'nvidia',
	bit: 128, rate: 17000, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6Rsr/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_6600_xt', title: 'Radeon RX 6600 XT', seria: 'rx6', chip: 'amd',
	bit: 128, rate: 16000, ram: 8, type: 'gddr6',
	site: {
		elmir 		: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=Radeon%20RX%206600%20XT',
		rozetka 	: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=rx-6600-xt/',
		pcshop 		: '',
		stylus 		: 'https://stylus.ua/uk/search/?q=radeon%20rx%206600%20xt',	
	},
},
{
	id: 'geforce_rtx_5050', title: 'GeForce RTX 5050', seria: 'rtx50', chip: 'nvidia',
	bit: 128, rate: 14000, ram: 8, type: 'gddr6', resolution: '',
	site: {
		elmir 		: '',
	},
},
{
	id: 'geforce_rtx_3050', title: 'GeForce RTX 3050', seria: 'rtx30', chip: 'nvidia',
	bit: 128, rate: 14000, ram: 8, type: 'gddr6',
	site: {
		elmir: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-6JdB/?orderby=cost&orderdir=asc',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'radeon_rx_6600', title: 'Radeon RX 6600', seria: 'rx6', chip: 'amd', 
	bit: 128, rate: 14000, ram: 8, type: 'gddr6', 
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_6q-58G_6r-56Cd_1AY-6Y6_4Ee-6C8F/?orderby=cost&orderdir=asc',
	
	},
},
{
	id: 'radeon_rx_580', title: 'Radeon RX 580', seria: 'rx5', chip: 'amd', 
	bit: 256, rate: 7000, ram: 8, type: 'gddr5', 
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y6_4Ee-1y83/?orderby=cost&orderdir=asc',
	
	},
},
{
	id: 'geforce_gtx_1660', title: 'GeForce GTX 1660', seria: 'gtx10', chip: 'nvidia',
	bit: 192, rate: 8000, ram: 6, type: 'gddr5',
	site: {
		elmir: '',
		rozetka: 'https://hard.rozetka.com.ua/ua/videocards/c80087/sort=cheap;21330=geforce-gtx-1660/',
		pcshop: '',
	},
},
{
	id: 'geforce_gtx_1060', title: 'GeForce GTX 1060', seria: 'gtx10', chip: 'nvidia', 
	bit: 192, rate: 8000, ram: 6, type: 'gddr5',
	site: {
		elmir 		: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GTX1060%206GB%20DDR5',
	},
},
{
	id: 'geforce_gtx_1650', title: 'GeForce GTX 1650', seria: 'gtx10', chip: 'nvidia',
	bit: 128, rate: 8000, ram: 4, type: 'gddr5', resolution: '7680x4320 ( 8K )',
	site: {
		elmir 		: 'https://elmir.ua/ua/video_cards/_1AY-6Y7_4Ee-5BoR/?orderby=cost&orderdir=asc',
		rozetka 	: '',
		pcshop 		: '',
	},
},
{
	id: 'geforce_8800_gt', title: 'GeForce 8800 GT', chip: 'nvidia', // code: 'ZT-88TES3P-FCP',
	bit: 256, rate: 1800, ram: 0.512, type: 'gddr3',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GeForce%208800%20GT',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'riva_tnt_2_ultra', title: 'Riva TNT 2 Ultra', chip: 'nvidia',
	bit: 128, rate: 183, ram: 0.032, type: 'sdr',
	site: {

	},
},
{
	id: 'riva_tnt_2_pro', title: 'Riva TNT 2 Pro', chip: 'nvidia',
	bit: 128, rate: 166, ram: 0.032, type: 'sdr',
	site: {

	},
},
{
	id: 'riva_tnt_2', title: 'Riva TNT 2', chip: 'nvidia',
	bit: 128, rate: 125, ram: 0.032, type: 'sdr',
	site: {

	},
},
{
	id: 'riva_tnt', title: 'Riva TNT', chip: 'nvidia',
	bit: 128, rate: 110, ram: 0.016, type: 'sdr',
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




