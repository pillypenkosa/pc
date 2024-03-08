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






// ---- 4090 ------------------------------------------------------------------------------------------------------------





{
	id: 'geforce_rtx_4090', title: 'GeForce RTX 4090',
	bit: 384, rate: 21000, ram: 24, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-6P4Q/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-4090/',
		pcshop: 'graficheskij-chip/geforce-rtx-4090?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_3090_ti', title: 'GeForce RTX 3090 Ti', 
	bit: 384, rate: 21000, ram: 24, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3090-ti/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3090', title: 'GeForce RTX 3090',
	bit: 384, rate: 19500, ram: 24, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-5vfY/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3090/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3080_ti', title: 'GeForce RTX 3080 Ti', 
	bit: 384, rate: 19000, ram: 12, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3080-ti/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3080', title: 'GeForce RTX 3080',
	bit: 320, rate: 19000, ram: 10, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3080/',
		pcshop: 'graficheskij-chip/geforce-rtx-3080?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_4080_super', title: 'GeForce RTX 4080 Super',
	bit: 256, rate: 23000, ram: 16, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-6akW/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-4080-super/',
		pcshop: 'graficheskij-chip/geforce-rtx-4080-super?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_4080', title: 'GeForce RTX 4080',
	bit: 256, rate: 22400, ram: 16, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-6PLq/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-4080/',
		pcshop: 'graficheskij-chip/geforce-rtx-4080?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_4070_ti_super', title: 'GeForce RTX 4070 Ti Super',
	bit: 256, rate: 21000, ram: 16, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-6akV/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-4070-ti-super/',
		pcshop: 'graficheskij-chip/geforce-rtx-4070-ti-super?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_2080_ti', title: 'GeForce RTX 2080 Ti', 
	bit: 352, rate: 14000, ram: 11, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-2080-ti/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3070_ti', title: 'GeForce RTX 3070 Ti',
	bit: 256, rate: 19000, ram: 8, type: 'GDDR-6X',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3070-ti/',
		pcshop: 'graficheskij-chip/geforce-rtx-3070-ti',
	},
},
{
	id: 'geforce_rtx_4070_ti', title: 'GeForce RTX 4070 Ti',
	bit: 192, rate: 21000, ram: 12, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-6PlM/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-4070-ti/',
		pcshop: 'graficheskij-chip/geforce-rtx-4070-ti?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_4070_super', title: 'GeForce RTX 4070 Super',
	bit: 192, rate: 21000, ram: 12, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-6akX/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-4070-super/',
		pcshop: 'graficheskij-chip/geforce-rtx-4070-super?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_4070', title: 'GeForce RTX 4070',
	bit: 192, rate: 21000, ram: 12, type: 'GDDR-6X',
	site: {
		elmir: '_4Ee-6RVR/',
		rozetka: 'c80087/sort=cheap;21330=rtx-4070/',
		pcshop: 'graficheskij-chip/geforce-rtx-4070',
	},
},
{
	id: 'geforce_rtx_2080_super', title: 'GeForce RTX 2080 Super', 
	bit: 256, rate: 15500, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-2080-super/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3070', title: 'GeForce RTX 3070',
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3070/',
		pcshop: 'graficheskij-chip/geforce-rtx-3070/geforce-rtx-4080-super?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_3060_ti', title: 'GeForce RTX 3060 Ti',
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '_4Ee-5vfb/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3060-ti/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2080', title: 'GeForce RTX 2080', 
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-2080/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2070_super', title: 'GeForce RTX 2070 Super', 
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-2070-super/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_2060_super', title: 'GeForce RTX 2060 Super', 
	bit: 256, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-2060-super/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_3060', title: 'GeForce RTX 3060',
	bit: 192, rate: 15000, ram: 12, type: 'GDDR-6',
	site: {
		elmir: '_4Ee-5vfc/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3060/',
		pcshop: 'graficheskij-chip/geforce-rtx-3060/geforce-rtx-4080-super?sort=p.price&order=ASC',
	},
},
{
	id: 'geforce_rtx_2060', title: 'GeForce RTX 2060',
	bit: 192, rate: 14000, ram: 6, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-2060/',
		pcshop: '',
	},
},
{
	id: 'geforce_gtx_1660_super', title: 'GeForce GTX 1660 Super',
	bit: 192, rate: 14000, ram: 6, type: 'GDDR-6',
	site: {
		elmir: '_4Ee-5Gc1/',
		rozetka: 'c80087/sort=cheap;21330=geforce-gtx-1660-super/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4060_ti', title: 'GeForce RTX 4060 Ti',
	bit: 128, rate: 18000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '_4Ee-6Rsq/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-4060-ti/',
		pcshop: 'graficheskij-chip/geforce-rtx-4060-ti',
	},
},
{
	id: 'geforce_gtx_1660_ti', title: 'GeForce GTX 1660 Ti',
	bit: 192, rate: 12000, ram: 6, type: 'GDDR-6',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-gtx-1660-ti/',
		pcshop: '',
	},
},
{
	id: 'geforce_rtx_4060', title: 'GeForce RTX 4060',
	bit: 128, rate: 17000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '_4Ee-6Rsr/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-4060/',
		pcshop: 'graficheskij-chip/geforce-rtx-4060',
	},
},
{
	id: 'geforce_rtx_3050', title: 'GeForce RTX 3050',
	bit: 128, rate: 14000, ram: 8, type: 'GDDR-6',
	site: {
		elmir: '_4Ee-6JdB/',
		rozetka: 'c80087/sort=cheap;21330=geforce-rtx-3050/',
		pcshop: 'graficheskij-chip/geforce-rtx-3050',
	},
},
{
	id: 'geforce_gtx_1660', title: 'GeForce GTX 1660',
	bit: 192, rate: 8000, ram: 6, type: 'GDDR-5',
	site: {
		elmir: '',
		rozetka: 'c80087/sort=cheap;21330=geforce-gtx-1660/',
		pcshop: '',
	},
},
{
	id: 'geforce_8800_gt', title: 'GeForce 8800 GT', // code: 'ZT-88TES3P-FCP',
	bit: 256, rate: 1800, ram: 0.512, type: 'GDDR-3',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'riva_tnt_2_ultra', title: 'Riva TNT 2 Ultra',
	bit: 128, rate: 183, ram: 0.032, type: 'SDR',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'riva_tnt_2_pro', title: 'Riva TNT 2 Pro',
	bit: 128, rate: 166, ram: 0.032, type: 'SDR',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'riva_tnt_2', title: 'Riva TNT 2',
	bit: 128, rate: 125, ram: 0.032, type: 'SDR',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},
{
	id: 'riva_tnt', title: 'Riva TNT',
	bit: 128, rate: 110, ram: 0.016, type: 'SDR',
	site: {
		elmir: '',
		rozetka: '',
		pcshop: '',
	},
},






















/*

{
	id: 'Zotac_ZT_88TES3P_FCP',
	bit: 256, rate: 1800, ram: 0.512, type: 'GDDR-3',
	title: 'GeForce 8800 GT', manufacturer: 'Zotac',
	code: 'ZT-88TES3P-FCP',
},





/*



{
	id: 'nVidia_Riva_TNT2_pro',
	bit: 128, rate: 166, ram: 0.032, type: 'DDR',
	title: 'nVidia Riva TNT 2 Pro', manufacturer: '',
	code: '',
},
{
	id: 'nVidia_Riva_TNT2',
	bit: 128, rate: 150, ram: 0.032, type: 'DDR',
	title: 'nVidia Riva TNT 2', manufacturer: '',
	code: '',
},
{
	id: 'nVidia_Riva_TNT',
	bit: 128, rate: 110, ram: 0.016, type: 'DDR',
	title: 'nVidia Riva TNT', manufacturer: '',
	code: '',
},





*/




];





let objListPcVga = {};
arrListPcVga.forEach( k => {
	objListPcVga[ k.id ] = k;
});









