const arrPartsCode = [

	{ id: 'intel_uhd_graphics_770' 		, title: 'Intel UHD Graphics 770' 		, },
	{ id: 'raptor_lake_r' 				, title: 'Raptor Lake R' 				, },
	{ id: 'raptor_lake_s' 				, title: 'Raptor Lake S' 				, },



];





let objPartsCode = {};
arrPartsCode.forEach( k => {

	if ( k.id ) 
		objPartsCode[ k.id ] = k;
});










const arrListPcMbCpuRam = [


{
	id: 'msi_pro_h610m_e_s_1700_h610', title: 'MSI Pro H610M-E s-1700 H610', cat: 'mb', 
	socket: 's-1700', ssd_m2: 2, lan: 2.5,
	ram_type: 'DDDR5', ram_max: 256, ram_slot: 4, 
	rate_memory: { _5600: 1, _5200: 1, _4800: 1, },
	site: {
		elmir: 'https://elmir.ua/ua/motherboards/motherboard_msi_pro_h610m-e_s-1700_h610.html',
	},
},
{
	id: 'bx_8071513600_k', title: 'Intel Core i5-13600K s-1700 3.5GHz/24MB BOX', code: 'BX8071513600K', cat: 'cpu', 
	socket: 's-1700', core: 'raptor_lake_r', cores: 14, 
	cpu_rate_max: 5.1, cpu_rate: 3.5, rate_memory: { _5600: 1, },
	cache1: 480, cache2: 20, cache3: 24,
	gpu: 'intel_uhd_graphics_770', gpu_rate: 300,
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-13600k_s-1700_3_5ghz_24mb_box_bx8071513600k.html',
	},
},
{
	id: 'bx_8071514600_k', title: 'Intel Core i5-14600K s-1700 3.5GHz/24MB BOX', code: 'BX8071514600K', cat: 'cpu', 
	socket: 's-1700', core: 'raptor_lake_r', cores: 14, 
	cpu_rate_max: 5.3, cpu_rate: 3.5, rate_memory: { _5600: 1, },
	cache1: 1.248, cache2: 20, cache3: 24,
	gpu: 'intel_uhd_graphics_770', gpu_rate: 300,
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i5-14600k_s-1700_3_5ghz_24mb_box_bx8071514600k.html',
	},
},
{
	id: 'bx_8071513700', title: 'Intel Core i7-13700 s-1700 2.1GHz/30MB BOX', code: 'BX8071513700', cat: 'cpu', 
	socket: 's-1700', core: 'raptor_lake_s', cores: 16, 
	cpu_rate_max: 5.2, cpu_rate: 2.1, rate_memory: { _5600: 1, },
	cache1: 640, cache2: 16, cache3: 30,
	gpu: 'intel_uhd_graphics_770', gpu_rate: 300,
	site: {
		elmir: 'https://elmir.ua/ua/processors/processor_intel_core_i7-13700_s-1700_2_1ghz_30mb_box_bx8071513700.html',
	},
},










];






let objListPcMbCpuRam = {};
arrListPcMbCpuRam.forEach( k => {

	if ( k.id ) 
		objListPcMbCpuRam[ k.id ] = k;
});







