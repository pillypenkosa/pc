//const arrRateMemory = [ 5600, 5200, 4800, 2666, 2400, 2133, 1333 ];
const arrRateMemory = [ 6400, 5600, 5200, 4800, ];



//const arrSocket = [ 'i1851', 'i1700', 'i1200', 'i1151', 'amd5', 'amd4', ];
const arrSocket = [ 'i1851', 'i1700', 'amd5', ];







const arrPartsCode = [

	// BGA - Ball Grid Array
	// LGA - Land Grid Array
	// PGA - Pin Grid Array

/*
Socket H4
s1151
*/




	// сокет MB, CPU
	{ id: 'amd4' 		, title: 'AMD AM4 (1331)' 		, }, // Socket AM4 	// Zen / Zen+ / Zen2 / Zen3
	{ id: 'amd5' 		, title: 'AMD AM5 (1718)' 		, }, // Socket AM5  // Zen4
	
	{ id: 'i1151' 		, title: 'Intel (1151)' 		, }, // Socket H4 	// CoffeeLake
	{ id: 'i1200' 		, title: 'Intel (1200)' 		, }, // Socket H5 	// CometLake / RocketLake
	{ id: 'i1700' 		, title: 'Intel (1700)' 		, }, // Socket V 	// AlderLake / RaptorLake
	{ id: 'i1851' 		, title: 'Intel (1851)' 		, }, // Socket V1 	// ArrowLake
	{ id: 'i2551' 		, title: 'Intel (2551)' 		, }, // ???



	// ядро CPU
	{ id: 'alder_lake_s' 		, title: 'Alder Lake-S' 		, }, // Intel 12
	{ id: 'arrow_lake_s' 		, title: 'Arrow Lake-S' 		, }, // Ultra 5
	{ id: 'coffee_lake' 		, title: 'Coffee Lake' 			, }, 
	{ id: 'granite_ridge' 		, title: 'Granite Ridge' 		, }, 
	{ id: 'phoenix' 			, title: 'Phoenix' 				, }, 
	{ id: 'raptor_lake_r' 		, title: 'Raptor Lake-R' 		, }, // Intel 13
	{ id: 'raptor_lake_s' 		, title: 'Raptor Lake-S' 		, }, // Intel 13
	{ id: 'raphael' 			, title: 'Raphael' 				, }, 
	{ id: 'zen5' 				, title: 'Zen 5' 				, }, 



	// відеоядро CPU
	{ id: 'amd_610m' 				, title: 'AMD Radeon 610M' 				, },
	{ id: 'amd_660m' 				, title: 'AMD Radeon 660M' 				, },
	{ id: 'amd_680m' 				, title: 'AMD Radeon 680M' 				, },
	{ id: 'amd_740m' 				, title: 'AMD Radeon 740M' 				, },
	{ id: 'amd_760m' 				, title: 'AMD Radeon 760M' 				, },
	{ id: 'amd_780m' 				, title: 'AMD Radeon 780M' 				, },
	{ id: 'amd_radeon_graphics' 	, title: 'AMD Radeon Graphics' 			, },

	{ id: 'intel_4_xe' 				, title: 'Intel Graphics 4 Xe' 			, },
	{ id: 'intel_uhd_630' 			, title: 'Intel UHD Graphics 630' 		, },
	{ id: 'intel_uhd_730' 			, title: 'Intel UHD Graphics 730' 		, },
	{ id: 'intel_uhd_750' 			, title: 'Intel UHD Graphics 750' 		, },
	{ id: 'intel_uhd_770' 			, title: 'Intel UHD Graphics 770' 		, },



	// чіпсет MB
	{ id: 'b760' 		, title: 'Intel B760' 		, },
	{ id: 'h610' 		, title: 'Intel H610' 		, }, 
	{ id: 'z370' 		, title: 'Intel Z370' 		, }, 
	{ id: 'z790' 		, title: 'Intel Z790' 		, }, 

	// ram
	{ id: 'ddr4' 		, title: 'DDDR-4' 			, },
	{ id: 'ddr5' 		, title: 'DDDR-5' 			, },
	
];





let objPartsCode = {};
arrPartsCode.forEach( k => {

	if ( k.id ) 
		objPartsCode[ k.id ] = k;
});













const arrListPcMbCpuRam = [





// Материнськы плати  --------------------------------------------------------------------------------------------------------------









// 6400 MHz ---
{
	id: 'z890_5600', title: 'Intel Z890 6400 MHz', cat: 'mb', 
	socket: 'i1851', chipset: 'z890', ram_type: 'ddr5', rate_memory: { _6400: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6dWT_5m-6rXI_6K-6D1N_4FC-6rXH/?orderby=cost&orderdir=asc',
	},
},



// 5600 MHz ---
{
	id: 'z790_5600', title: 'Intel Z790 5600 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'z790', ram_type: 'ddr5', rate_memory: { _5600: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6PXA_6K-6D1N_4FC-6P0J/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'h770_5600', title: 'Intel H770 5600 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'h770', ram_type: 'ddr5', rate_memory: { _5600: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6PXA_6K-6D1N_4FC-6Phy/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'h610_5600', title: 'Intel H610 5600 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'h610', ram_type: 'ddr5', rate_memory: { _5600: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6PXA_6K-6D1N_4FC-6JYR/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'b760_5600', title: 'Intel B760 5600 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'b760', ram_type: 'ddr5', rate_memory: { _5600: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6PXA_6K-6D1N_4FC-6Phx/?orderby=cost&orderdir=asc',
	},
},



// 4800 MHz ---
{
	id: 'z790_4800', title: 'Intel Z790 4800 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'z790', ram_type: 'ddr5', rate_memory: { _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6D8L_6K-6D1N_4FC-6P0J/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'z690_4800', title: 'Intel Z690 4800 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'z690', ram_type: 'ddr5', rate_memory: { _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6D8L_6K-6D1N_4FC-6D1M/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'q670_4800', title: 'Intel Q670 4800 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'q670', ram_type: 'ddr5', rate_memory: { _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6D8L_6K-6D1N_4FC-6QjB/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'h770_4800', title: 'Intel H770 4800 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'h770', ram_type: 'ddr5', rate_memory: { _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6D8L_6K-6D1N_4FC-6Phy/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'h610_4800', title: 'Intel H610 4800 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'h610', ram_type: 'ddr5', rate_memory: { _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6D8L_6K-6D1N_4FC-6JYR/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'b760_4800', title: 'Intel B760 4800 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'b760', ram_type: 'ddr5', rate_memory: { _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6D8L_6K-6D1N_4FC-6Phx/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'b660_4800', title: 'Intel B660 4800 MHz', cat: 'mb', 
	socket: 'i1700', chipset: 'b660', ram_type: 'ddr5', rate_memory: { _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6D8L_6K-6D1N_4FC-6JAF/?orderby=cost&orderdir=asc',
	},
},



// 2666 MHz ---
{
	id: 'z370', title: 'Intel Z370 2666 MHz', cat: 'mb', 
	socket: 'i1151', chipset: 'z370', ram_type: 'ddr4', rate_memory: { _2666: 1, _2400: 1, _2133: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=GigaByte%20Z370%20HD3%20s-1151',
	},
},




// MotherBoard AMD ---
// 5600 MHz ---
{
	id: 'x870_5600', title: 'AMD X870 5600 MHz', cat: 'mb', 
	socket: 'amd5', chipset: 'x870', ram_type: 'ddr5', rate_memory: { _5600: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6O8E_5m-6PXA_6K-6D1N_4FC-6mWD-6mWE/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'a620_5600', title: 'AMD A620 5600 MHz', cat: 'mb', 
	socket: 'amd5', chipset: 'a620', ram_type: 'ddr5', rate_memory: { _5600: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6O8E_5m-6PXA_6K-6D1N_4FC-6Rqu/?orderby=cost&orderdir=asc',
	},
},



// 5200 MHz ---
{
	id: 'x870_5200', title: 'AMD X870 5200 MHz', cat: 'mb', 
	socket: 'amd5', chipset: 'x870', ram_type: 'ddr5', rate_memory: { _5200: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6O8E_5m-6Oh8_6K-6D1N_4FC-6mWE/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'x670_5200', title: 'AMD X670 5200 MHz', cat: 'mb', 
	socket: 'amd5', chipset: 'x670', ram_type: 'ddr5', rate_memory: { _5200: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6O8E_5m-6Oh8_6K-6D1N_4FC-6OOU/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'b650_5200', title: 'AMD B650 5200 MHz', cat: 'mb', 
	socket: 'amd5', chipset: 'b650', ram_type: 'ddr5', rate_memory: { _5200: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6O8E_5m-6Oh8_6K-6D1N_4FC-6OuS/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'a620_5200', title: 'AMD A620 5200 MHz', cat: 'mb', 
	socket: 'amd5', chipset: 'a620', ram_type: 'ddr5', rate_memory: { _5200: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6O8E_5m-6Oh8_6K-6D1N_4FC-6Rqu/?orderby=cost&orderdir=asc',
	},
},











// Процесори --------------------------------------------------------------------------------------------------------------






// Ultra 9 ---
{
	id: 'bx_80768285_k', title: 'Intel Core Ultra 9 285K', code: 'BX80768285K', cat: 'cpu', 
	socket: 'i1851', core: 'arrow_lake_s', cores: 24, 
	cpu_rate: 3.7, rate_memory: { _6400: 1, },
	cache1: 0, cache2: 0, cache3: 36,
	site: {
		elmir: '',
		rozetka 	: 'https://hard.rozetka.com.ua/ua/intel-bx80768285k/p454459724/',
	},
},



// Ultra 7 ---
{
	id: 'bx_80768265_k', title: 'Intel Core Ultra 7 265K', code: 'BX80768265K', cat: 'cpu', 
	socket: 'i1851', core: 'arrow_lake_s', cores: 20, 
	cpu_rate: 3.9, rate_memory: { _6400: 1, },
	cache1: 0, cache2: 36, cache3: 30,
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor-intel-core-ultra-7-265k-s-1851-3-9ghz-30mb-box-bx80768265k.html',
	},
},



// Ultra 5 ---
{
	id: 'bx_80768245_kf', title: 'Intel Core Ultra 5 245KF', code: 'BX80768245KF', cat: 'cpu', 
	socket: 'i1851', core: 'arrow_lake_s', cores: 14, 
	cpu_rate: 4.2, rate_memory: { _6400: 1, },
	cache1: 0, cache2: 26, cache3: 24,
	gpu: '4 Xe',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor-intel-core-ultra-5-245kf-s-1851-4-2ghz-24mb-box-bx80768245kf.html',
	},
},




// i9 ---
{
	id: 'bx_8071514900', title: 'Intel Core i9-14900 GPU:770', code: 'BX8071514900', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_r', cores: 24, 
	cpu_rate: 2.0, rate_memory: { _5600: 1, },
	cache1: 0, cache2: 32, cache3: 36,
	gpu: 'intel_uhd_770',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i9-14900_s-1700_5_8ghz_36mb_box_bx8071514900.html',
	},
},



// i7 ---
{
	id: 'bx_8071514700', title: 'Intel Core i7-14700 GPU:770', code: 'BX8071514700', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_r', cores: 20, 
	cpu_rate: 2.1, rate_memory: { _5600: 1, },
	cache1: 1.792, cache2: 20, cache3: 33,
	gpu: 'intel_uhd_770',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i7-14700_s-1700_5_4ghz_33mb_box_bx8071514700.html',
	},
},
{
	id: 'bx_8071513700', title: 'Intel Core i7-13700 GPU:770', code: 'BX8071513700', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_s', cores: 16, 
	cpu_rate: 2.1, rate_memory: { _5600: 1, },
	cache1: 0.64, cache2: 16, cache3: 30,
	gpu: 'intel_uhd_770', 
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i7-13700_s-1700_2_1ghz_30mb_box_bx8071513700.html',
	},
},



// i5 ---







{
	id: 'bx_8071514600_k', title: 'Intel Core i5-14600K GPU:770', code: 'BX8071514600K', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_s', cores: 14, 
	cpu_rate: 3.5, rate_memory: { _5600: 1, },
	cache1: 1.248, cache2: 20, cache3: 24,
	gpu: 'intel_uhd_770', 
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-14600k_s-1700_3_5ghz_24mb_box_bx8071514600k.html',
	},
},
{
	id: 'bx_8071514500', title: 'Intel Core i5-14500 GPU:770', code: 'BX8071514500', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_r', cores: 14, 
	cpu_rate: 1.9, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 0, cache3: 24,
	gpu: 'intel_uhd_770', 
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-14500_s-1700_5_0ghz_24mb_box_bx8071514500.html',
	},
},
{
	id: 'bx_8071513600_k', title: 'Intel Core i5-13600K GPU:770', code: 'BX8071513600K', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_s', cores: 14, 
	cpu_rate: 3.5, rate_memory: { _5600: 1, },
	cache1: 0.48, cache2: 20, cache3: 24,
	gpu: 'intel_uhd_770', 
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-13600k_s-1700_3_5ghz_24mb_box_bx8071513600k.html',
	},
},
{
	id: 'bx_8071513500', title: 'Intel Core i5-13500 GPU:770', code: 'BX8071513500', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_s', cores: 14, 
	cpu_rate: 2.5, rate_memory: { _4800: 1, },
	cache1: 0.48, cache2: 7.5, cache3: 24,
	gpu: 'intel_uhd_770',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-13500_s-1700_2_5ghz_24mb_box_bx8071513500.html',
	},
},
{
	id: 'bx_8071513400', title: 'Intel Core i5-13400 GPU:730', code: 'BX8071513400', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_s', cores: 10, 
	cpu_rate: 2.5, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 9.5, cache3: 20,
	gpu: 'intel_uhd_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-13400_s-1700_2_5ghz_20mb_box_bx8071513400.html',
	},
},
{
	id: 'bx_8071512500', title: 'Intel Core i5-12500 GPU:770', code: 'BX8071512500', cat: 'cpu', 
	socket: 'i1700', core: 'alder_lake_s', cores: 6, 
	cpu_rate: 3.0, rate_memory: { _4800: 1, },
	cache1: 0.48, cache2: 7.5, cache3: 18,
	gpu: 'intel_uhd_770',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-12500_s-1700_3_0ghz_18mb_box_bx8071512500.html',
	},
},
{
	id: 'bx_8071512400', title: 'Intel Core i5-12400 GPU:730', code: 'BX8071512400', cat: 'cpu', 
	socket: 'i1700', core: 'alder_lake_s', cores: 6, 
	cpu_rate: 2.5, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 7.5, cache3: 18,
	gpu: 'intel_uhd_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-12400_s-1700_2_5ghz_18mb_box_bx8071512400.html',
	},
},



// i3 ---
{
	id: 'bx_8071514100', title: 'Intel Core i3-14100 GPU:730', code: 'BX8071514100', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_r', cores: 4, 
	cpu_rate: 3.5, rate_memory: { _4800: 1, },
	cache1: 0.32, cache2: 5, cache3: 12,
	gpu: 'intel_uhd_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i3-14100_s-1700_4_7ghz_12mb_box_bx8071514100.html',
	},
},
{
	id: 'bx_8071513100', title: 'Intel Core i3-13100 GPU:730', code: 'BX8071513100', cat: 'cpu', 
	socket: 'i1700', core: 'raptor_lake_s', cores: 4, 
	cpu_rate: 3.4, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 5, cache3: 12,
	gpu: 'intel_uhd_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i3-13100_s-1700_3_4ghz_12mb_box_bx8071513100.html',
	},
},
{
	id: 'bx_8071512100', title: 'Intel Core i3-12100 GPU:730', code: 'BX8071512100', cat: 'cpu', 
	socket: 'i1700', core: 'alder_lake_s', cores: 4, 
	cpu_rate: 3.3, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 5, cache3: 12,
	gpu: 'intel_uhd_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i3-12100_s-1700_3_3ghz_12mb_box_bx8071512100.html',
	},
},
{
	id: 'bx_80684I38100', title: 'Intel Core i3-8100 GPU:630', code: 'BX80684I38100', cat: 'cpu', 
	socket: 'i1151', core: 'coffee_lake', cores: 4, 
	cpu_rate: 3.6, rate_memory: { _2400: 1, },
	cache1: 0.256, cache2: 1, cache3: 6,
	gpu: 'intel_uhd_630',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i3-8100_s-1151_3_6ghz_6mb_box_bx80684i38100.html',
	},
},











// Ryzen 9 ---
{
	id: '100_100001277_wof', title: 'Ryzen 9 9950 X', code: '100-100001277WOF', cat: 'cpu', 
	socket: 'amd5', core: 'granite_ridge', cores: 16, 
	cpu_rate: 4.3, rate_memory: { _5600: 1, },
	cache1: 1.28, cache2: 16, cache3: 64,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor-amd-ryzen-9-9950x-s-am5-5-7ghz-64mb-box-100-100001277wof.html',
	},
},
{
	id: '100_100000662_wof', title: 'Ryzen 9 9900 X', code: '100-100000662WOF', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 12, 
	cpu_rate: 4.4, rate_memory: { _5600: 1, },
	cache1: 0.96, cache2: 12, cache3: 64,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor-amd-ryzen-9-9900x-s-am5-5-6ghz-76mb-box-100-100000662wof.html',
	},
},
{
	id: '100_100000908_wof', title: 'Ryzen 9 7950 X3D', code: '100-100000908WOF', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 16, 
	cpu_rate: 4.2, rate_memory: { _5200: 1, },
	cache1: 1, cache2: 16, cache3: 128,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_9_7950x3d_s-am5_4_2ghz_128mb_box_100-100000908wof.html',
	},
},
{
	id: '100_100000514_wof', title: 'Ryzen 9 7950 X', code: '100-100000514WOF', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 16, 
	cpu_rate: 4.5, rate_memory: { _5200: 1, },
	cache1: 1, cache2: 16, cache3: 64,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor-amd-ryzen-9-9950x-s-am5-5-7ghz-64mb-box-100-100001277wof.html',
	},
},
{
	id: '100_100000909_wof', title: 'Ryzen 9 7900 X3D', code: '100-100000909WOF', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 12, 
	cpu_rate: 4.4, rate_memory: { _5200: 1, },
	cache1: 0.768, cache2: 12, cache3: 128,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_9_7900x3d_s-am5_4_4ghz_128mb_box_100-100000909wof.html',
	},
},
{
	id: '100_100000589_wof', title: 'Ryzen 9 7900 X', code: '100-100000589WOF', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 12, 
	cpu_rate: 4.7, rate_memory: { _5200: 1, },
	cache1: 0.768, cache2: 12, cache3: 64,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_9_7900x_s-am5_4_7ghz_64mb_box_100-100000589wof.html',
	},
},
{
	id: '100_100000590_box', title: 'Ryzen 9 7900', code: '100-100000590BOX', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 12, 
	cpu_rate: 3.7, rate_memory: { _5200: 1, },
	cache1: 0.768, cache2: 12, cache3: 64,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/?orderby=cost&orderdir=asc&q=Ryzen%209%207900%20s-AMd5',
	},
},



// Ryzen 7 ---
{
	id: '100_100001404_wof', title: 'Ryzen 7 9700 X', code: '100-100001404WOF', cat: 'cpu', 
	socket: 'amd5', core: 'granite_ridge', cores: 8,
	cpu_rate: 3.8, rate_memory: { _5600: 1, },
	cache1: 0.64, cache2: 8, cache3: 12,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor-amd-ryzen-7-9700x-s-am5-5-5ghz-40mb-box-100-100001404wof.html',
	},
},
{
	id: '100_100001236_box', title: 'Ryzen 7 8700 G', code: '100-100001236BOX', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 8,
	cpu_rate: 4.2, rate_memory: { _5200: 1, },
	cache1: 0.512, cache2: 8, cache3: 16,
	gpu: 'amd_780m',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_7_8700g_s-am5_5_1ghz_16mb_box_100-100001236box.html',
	},
},
{
	id: '100_100000910_wof', title: 'Ryzen 7 7800 X3D', code: '100-100000910WOF', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 8,
	cpu_rate: 4.2, rate_memory: { _5200: 1, },
	cache1: 0.512, cache2: 8, cache3: 96,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_7_7800x3d_s-am5_4_2ghz_96mb_box_100-100000910wof.html',
	},
},
{
	id: '100_100000591_wof', title: 'Ryzen 7 7700 X', code: '100-100000591WOF', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 8, 
	cpu_rate: 4.5, rate_memory: { _5200: 1, },
	cache1: 0.512, cache2: 8, cache3: 32,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_7_7700x_s-am5_4_5ghz_32mb_box_100-100000591wof.html',
	},
},
{
	id: '100_100000592_box', title: 'Ryzen 7 7700', code: '100-100000592BOX', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 8, 
	cpu_rate: 3.8, rate_memory: { _5200: 1, },
	cache1: 0.512, cache2: 8, cache3: 32,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_7_7700_s-am5_3_8ghz_32mb_box_100-100000592box.html',
	},
},



// Ryzen 5 ---
{
	id: '100_100001405_wof', title: 'Ryzen 5 9600 X', code: '100-100001405WOF', cat: 'cpu', 
	socket: 'amd5', core: 'zen5', cores: 6, 
	cpu_rate: 3.9, rate_memory: { _5600: 1, },
	cache1: 0.48, cache2: 6, cache3: 32,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor-amd-ryzen-5-9600x-s-am5-5-4ghz-32mb-box-100-100001405wof.html',
	},
},
{
	id: '100_100001237_box', title: 'Ryzen 5 8600 G', code: '100-100001237BOX', cat: 'cpu', 
	socket: 'amd5', core: 'phoenix', cores: 6, 
	cpu_rate: 4.3, rate_memory: { _5200: 1, },
	cache1: 0.384, cache2: 6, cache3: 16,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_5_8600g_s-am5_5_0ghz_16mb_box_100-100001237box.html',
	},
},
{
	id: '100_100000931_box', title: 'Ryzen 5 8500 G', code: '100-100000931BOX', cat: 'cpu', 
	socket: 'amd5', core: 'phoenix', cores: 6, 
	cpu_rate: 3.5, rate_memory: { _5200: 1, },
	cache1: 0.384, cache2: 6, cache3: 16,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_5_8500g_s-am5_5_0ghz_16mb_box_100-100000931box.html',
	},
},
{
	id: '100_100000593_wof', title: 'Ryzen 5 7600 X', code: '100-100000593WOF', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 6, 
	cpu_rate: 4.7, rate_memory: { _5200: 1, },
	cache1: 0.384, cache2: 6, cache3: 32,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_5_7600x_s-am5_4_7ghz_32mb_box_100-100000593wof.html',
	},
},
{
	id: '100_100001015_box', title: 'Ryzen 5 7600', code: '100-100001015BOX', cat: 'cpu', 
	socket: 'amd5', core: 'raphael', cores: 6, 
	cpu_rate: 3.8, rate_memory: { _5200: 1, },
	cache1: 0.384, cache2: 6, cache3: 32,
	gpu: 'amd_radeon_graphics',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_amd_ryzen_5_7600_s-am5_3_8ghz_32mb_box_100-100001015box.html',
	},
},










// Оперативна пам'ять --------------------------------------------------------------------------------------------------------------





// DDR5 --- 6400 ---
{
	id: 'ddr5_96_6400', title: 'DDR-5 6400 МГц 96 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _6400: 1, }, ram_val: 96,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-6RfT_6Y-6Nk7_CcU-50ky/',
	},
},
{
	id: 'ddr5_64_6400', title: 'DDR-5 6400 МГц 64 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _6400: 1, }, ram_val: 64,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-1MoE_6Y-6Nk7_CcU-50ky/',
	},
},
{
	id: 'ddr5_48_6400', title: 'DDR-5 6400 МГц 48 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _6400: 1, }, ram_val: 48,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-6RfO_6Y-6Nk7_CcU-50ky/',
	},
},
{
	id: 'ddr5_32_6400', title: 'DDR-5 6400 МГц 32 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _6400: 1, }, ram_val: 32,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-FVy_6Y-6Nk7_CcU-50ky/',
	},
},
{
	id: 'ddr5_24_6400', title: 'DDR-5 6400 МГц 24 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _6400: 1, }, ram_val: 24,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-678_6Y-6Nk7_CcU-50ky/',
	},
},
{
	id: 'ddr5_16_6400', title: 'DDR-5 6400 МГц 16 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _6400: 1, }, ram_val: 16,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-677_6Y-6Nk7_CcU-50ky/',
	},
},



// DDR5 --- 5600 ---
{
	id: 'ddr5_128_5600', title: 'DDR-5 5600 МГц 128 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 128,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-2BPj_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_96_5600', title: 'DDR-5 5600 МГц 96 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 96,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-6RfT_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_64_5600', title: 'DDR-5 5600 МГц 64 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 64,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-1MoE_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_48_5600', title: 'DDR-5 5600 МГц 48 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 48,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-6RfO_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_32_5600', title: 'DDR-5 5600 МГц 32 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 32,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-FVy_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_16_5600', title: 'DDR-5 5600 МГц 16 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 16,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-677_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_8_5600', title: 'DDR-5 5600 МГц 8 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 8,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-67F_6Y-6IiZ_CcU-50ky/',
	},
},




// DDR5 --- 5200 ---
{
	id: 'ddr5_128_5200', title: 'DDR-5 5200 МГц 128 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5200: 1, }, ram_val: 128,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-2BPj_6Y-6D0s_CcU-50ky/',
	},
},
{
	id: 'ddr5_96_5200', title: 'DDR-5 5200 МГц 96 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5200: 1, }, ram_val: 96,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-6RfT_6Y-6D0s_CcU-50ky/',
	},
},
{
	id: 'ddr5_64_5200', title: 'DDR-5 5200 МГц 64 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5200: 1, }, ram_val: 64,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-1MoE_6Y-6D0s_CcU-50ky/',
	},
},
{
	id: 'ddr5_48_5200', title: 'DDR-5 5200 МГц 48 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5200: 1, }, ram_val: 48,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-6RfO_6Y-6D0s_CcU-50ky/',
	},
},
{
	id: 'ddr5_32_5200', title: 'DDR-5 5200 МГц 32 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5200: 1, }, ram_val: 32,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-FVy_6Y-6D0s_CcU-50ky/',
	},
},
{
	id: 'ddr5_16_5200', title: 'DDR-5 5200 МГц 16 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5200: 1, }, ram_val: 16,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-677_6Y-6D0s_CcU-50ky/',
	},
},
{
	id: 'ddr5_8_5200', title: 'DDR-5 5200 МГц 8 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5200: 1, }, ram_val: 8,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-67F_6Y-6D0s_CcU-50ky/',
	},
},




// DDR4 ---
{
	id: 'ddr5_64_4800', title: 'DDR-5 4800 МГц 64 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _4800: 1, }, ram_val: 64,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-1MoE_6Y-5ug1_CcU-50ky/',
	},
},
{
	id: 'ddr5_32_4800', title: 'DDR-5 4800 МГц 32 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _4800: 1, }, ram_val: 32,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-FVy_6Y-5ug1_CcU-50ky/',
	},
},
{
	id: 'ddr5_16_4800', title: 'DDR-5 4800 МГц 16 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _4800: 1, }, ram_val: 16,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-677_6Y-5ug1_CcU-50ky/',
	},
},
{
	id: 'ddr5_8_4800', title: 'DDR-5 4800 МГц 8 ГБ', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _4800: 1, }, ram_val: 8,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-67F_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr4_16_2666', title: 'DDR-4 2666 МГц 16 ГБ', cat: 'ram', 
	ram_type: 'ddr4', rate_memory: { _2666: 1, }, ram_val: 16,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/memory_module_hyperx_ddr4_16gb_2x8gb_2666mhz_fury_black_hx426c16fb3k2_16.html',
	},
},







];






let objListPcMbCpuRam = {};
arrListPcMbCpuRam.forEach( k => {

	if ( k.id ) 
		objListPcMbCpuRam[ k.id ] = k;
});







