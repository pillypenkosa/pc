const arrPartsCode = [

	{ id: 'intel_uhd_graphics_730' 		, title: 'Intel UHD Graphics 730' 		, },
	{ id: 'intel_uhd_graphics_770' 		, title: 'Intel UHD Graphics 770' 		, },

	{ id: 'alder_lake_s' 				, title: 'Alder Lake-S' 				, }, // 12
	{ id: 'raptor_lake_r' 				, title: 'Raptor Lake-R' 				, }, // 13
	{ id: 'raptor_lake_s' 				, title: 'Raptor Lake-S' 				, }, // 13

	{ id: 'ddr4' 						, title: 'DDDR-4' 						, },
	{ id: 'ddr5' 						, title: 'DDDR-5' 						, },

	// сокет
	{ id: 's1200' 						, title: 's-1200' 						, }, 
	{ id: 's1700' 						, title: 's-1700' 						, },

	// чіпсет
	{ id: 'b760' 						, title: 'Intel B760' 					, },
	{ id: 'h610' 						, title: 'Intel H610' 					, }, 

];





let objPartsCode = {};
arrPartsCode.forEach( k => {

	if ( k.id ) 
		objPartsCode[ k.id ] = k;
});










const arrListPcMbCpuRam = [





// Материнськы плати  --------------------------------------------------------------------------------------------------------------


{
	id: 'b760', title: 'B760', cat: 'mb', 
	socket: 's1700', chipset: 'b760', ram_type: 'ddr5', rate_memory: { _5600: 1, _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6PXA_6K-6D1N_4FC-6Phx/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'h610', title: 'H610', cat: 'mb', 
	socket: 's1700', chipset: 'h610', ram_type: 'ddr5', rate_memory: { _5600: 1, _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6PXA_6K-6D1N_4FC-6JYR/?orderby=cost&orderdir=asc',
	},
},
{
	id: 'z790', title: 'Z790', cat: 'mb', 
	socket: 's1700', chipset: 'z790', ram_type: 'ddr5', rate_memory: { _5600: 1, _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/_5d-6D1L_5m-6PXA_6K-6D1N_4FC-6P0J/?orderby=cost&orderdir=asc',
	},
},












// Процесори --------------------------------------------------------------------------------------------------------------

{
	id: 'bx_8071512100', title: 'Intel Core i3-12100 730', code: 'BX8071512100', cat: 'cpu', 
	socket: 's1700', core: 'alder_lake_s', cores: 4, 
	cpu_rate: 3.3, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 5, cache3: 12,
	gpu: 'intel_uhd_graphics_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i3-12100_s-1700_3_3ghz_12mb_box_bx8071512100.html',
	},
},
{
	id: 'bx_8071513100', title: 'Intel Core i3-13100 730', code: 'BX8071513100', cat: 'cpu', 
	socket: 's1700', core: 'raptor_lake_s', cores: 4, 
	cpu_rate: 3.4, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 5, cache3: 12,
	gpu: 'intel_uhd_graphics_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i3-13100_s-1700_3_4ghz_12mb_box_bx8071513100.html',
	},
},
{
	id: 'bx_8071514100', title: 'Intel Core i3-14100 730', code: 'BX8071514100', cat: 'cpu', 
	socket: 's1700', core: 'raptor_lake_r', cores: 4, 
	cpu_rate: 3.5, rate_memory: { _4800: 1, },
	cache1: 0.32, cache2: 5, cache3: 12,
	gpu: 'intel_uhd_graphics_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i3-14100_s-1700_4_7ghz_12mb_box_bx8071514100.html',
	},
},
{
	id: 'bx_8071512400', title: 'Intel Core i5-12400 730', code: 'BX8071512400', cat: 'cpu', 
	socket: 's1700', core: 'alder_lake_s', cores: 6, 
	cpu_rate: 2.5, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 7.5, cache3: 18,
	gpu: 'intel_uhd_graphics_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-12400_s-1700_2_5ghz_18mb_box_bx8071512400.html',
	},
},
{
	id: 'bx_8071512500', title: 'Intel Core i5-12500 770', code: 'BX8071512500', cat: 'cpu', 
	socket: 's1700', core: 'alder_lake_s', cores: 6, 
	cpu_rate: 3.0, rate_memory: { _4800: 1, },
	cache1: 0.48, cache2: 7.5, cache3: 18,
	gpu: 'intel_uhd_graphics_770',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-12500_s-1700_3_0ghz_18mb_box_bx8071512500.html',
	},
},
{
	id: 'bx_8071513400', title: 'Intel Core i5-13400 730', code: 'BX8071513400', cat: 'cpu', 
	socket: 's1700', core: 'raptor_lake_s', cores: 10, 
	cpu_rate: 2.5, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 9.5, cache3: 20,
	gpu: 'intel_uhd_graphics_730',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-13400_s-1700_2_5ghz_20mb_box_bx8071513400.html',
	},
},
{
	id: 'bx_8071513500', title: 'Intel Core i5-13500 770', code: 'BX8071513500', cat: 'cpu', 
	socket: 's1700', core: 'raptor_lake_s', cores: 14, 
	cpu_rate: 2.5, rate_memory: { _4800: 1, },
	cache1: 0.48, cache2: 7.5, cache3: 24,
	gpu: 'intel_uhd_graphics_770',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-13500_s-1700_2_5ghz_24mb_box_bx8071513500.html',
	},
},
{
	id: 'bx_8071514500', title: 'Intel Core i5-14500 770', code: 'BX8071514500', cat: 'cpu', 
	socket: 's1700', core: 'raptor_lake_r', cores: 14, 
	cpu_rate: 1.9, rate_memory: { _4800: 1, },
	cache1: 0, cache2: 0, cache3: 24,
	gpu: 'intel_uhd_graphics_770', 
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-14500_s-1700_5_0ghz_24mb_box_bx8071514500.html',
	},
},
{
	id: 'bx_8071513700', title: 'Intel Core i7-13700 770', code: 'BX8071513700', cat: 'cpu', 
	socket: 's1700', core: 'raptor_lake_s', cores: 16, 
	cpu_rate: 2.1, rate_memory: { _5600: 1, },
	cache1: 0.64, cache2: 16, cache3: 30,
	gpu: 'intel_uhd_graphics_770', 
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i7-13700_s-1700_2_1ghz_30mb_box_bx8071513700.html',
	},
},
{
	id: 'bx_8071514700', title: 'Intel Core i7-14700 770', code: 'BX8071514700', cat: 'cpu', 
	socket: 's1700', core: 'raptor_lake_r', cores: 20, 
	cpu_rate: 2.1, rate_memory: { _5600: 1, },
	cache1: 1.792, cache2: 20, cache3: 33,
	gpu: 'intel_uhd_graphics_770',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i7-14700_s-1700_5_4ghz_33mb_box_bx8071514700.html',
	},
},
{
	id: 'bx_8071514900', title: 'Intel Core i9-14900 770', code: 'BX8071514900', cat: 'cpu', 
	socket: 's1700', core: 'raptor_lake_r', cores: 24, 
	cpu_rate: 2.0, rate_memory: { _5600: 1, },
	cache1: 0, cache2: 32, cache3: 36,
	gpu: 'intel_uhd_graphics_770',
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i9-14900_s-1700_5_8ghz_36mb_box_bx8071514900.html',
	},
},








// Оперативна пам'ять --------------------------------------------------------------------------------------------------------------







{
	id: 'ddr5_8_4800', title: 'DDR-5 8 ГБ 4800 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _4800: 1, }, ram_val: 8,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-67F_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_8_5600', title: 'DDR-5 8 ГБ 5600 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 8,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-67F_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_16_4800', title: 'DDR-5 16 ГБ 4800 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _4800: 1, }, ram_val: 16,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-677_6Y-5ug1_CcU-50ky/',
	},
},
{
	id: 'ddr5_16_5600', title: 'DDR-5 16 ГБ 5600 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 16,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-677_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_32_4800', title: 'DDR-5 32 ГБ 4800 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _4800: 1, }, ram_val: 32,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-FVy_6Y-5ug1_CcU-50ky/',
	},
},
{
	id: 'ddr5_32_5600', title: 'DDR-5 32 ГБ 5600 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 32,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-FVy_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_64_4800', title: 'DDR-5 64 ГБ 4800 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _4800: 1, }, ram_val: 64,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-1MoE_6Y-5ug1_CcU-50ky/',
	},
},
{
	id: 'ddr5_64_5600', title: 'DDR-5 64 ГБ 5600 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 64,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-1MoE_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_96_5600', title: 'DDR-5 96 ГБ 5600 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 96,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-6RfT_6Y-6IiZ_CcU-50ky/',
	},
},
{
	id: 'ddr5_128_5600', title: 'DDR-5 128 ГБ 5600 МГц', cat: 'ram', 
	ram_type: 'ddr5', rate_memory: { _5600: 1, }, ram_val: 128,
	site: {
		elmir: 'https://elmir.ua/ua/memory_modules/_6R-6D0t_6S-2BPj_6Y-6IiZ_CcU-50ky/',
	},
},
















];






let objListPcMbCpuRam = {};
arrListPcMbCpuRam.forEach( k => {

	if ( k.id ) 
		objListPcMbCpuRam[ k.id ] = k;
});







