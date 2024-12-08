



const arrListPcMy = [

	{
		title: 'MotherBoard',
		keyval: [
			{ k: 'Модель' 				, v: 'Gigabyte Z370 HD3', },
			{ k: 'Сокет' 				, v: 's-1151' , },
			{ k: 'Чипсет' 				, v: 'Intel Z370' , },
			{ k: 'Тип RAM' 				, v: 'DDR4 * 4 шт' , },
			{ k: 'Об\'єм RAM' 			, v: '64 Гб', },
			{ k: 'Підтримка частот пам\'яті' 	, v: '2133 МГц, 2400 МГц, 2666 МГц, 2800 (O.C.) МГц, 2933 (O.C.) МГц, 3000 (O.C.) МГц, 3200 (O.C.) МГц, 3333 (O.C.) МГц, 3400 (O.C.) МГц, 3466 (O.C.) МГц, 3600 (O.C.) МГц, 3733 (O.C.) МГц, 3866 (O.C.) МГц, 4000 (O.C.) МГц', },
			//{ k: 'Роз\'єми' 				, v: 'DVI * 1 шт, HDMI * 1 шт, USB 2.0 * 2 шт, USB 3.2 Gen 1 * 4 шт, SATA-3 * 6 шт', },
		],
		site: [ 
			{ title: 'www.elmir.ua' 		, href: 'https://elmir.ua/motherboards/motherboard_gigabyte_z370_hd3_s-1151_z370.html', },
			{ title: 'www.rozetka.com.ua' 	, href: 'https://hard.rozetka.com.ua/ua/gigabyte_z370_hd3/p24386964/', },
			{ title: 'Процесори для Gigabyte Z370 HD3' 			, href: 'https://www.gigabyte.com/Motherboard/Z370-HD3-rev-10/support#support-cpu', },
		],
	},
	{
		title: 'CPU',
		keyval: [
			{ k: 'Модель' 				, v: 'Intel Core i3-8100', },
			{ k: 'Частота ядра' 		, v: '3.6 ГГц', },
			{ k: 'Кількість ядер' 		, v: 4, },
			{ k: 'Тип пам\'яти' 		, v: 'DDR4', },
			{ k: 'Підтримка частоти пам\'яті' 	, v: '2400 МГц', },
			{ k: 'Ядро' 				, v: 'Coffee Lake', },
			{ k: 'Кеш L1' 				, v: '256 КБ', },
			{ k: 'Кеш L2' 				, v: '1 МБ', },
			{ k: 'Кеш L3' 				, v: '6 МБ', },
			{ k: 'Техпроцес' 			, v: '14 нм', },
			{ k: 'TDP' 					, v: '65 Вт', },
			{ k: 'Відеоядро' 			, v: 'Intel UHD Graphics 630', },

			{ k: '' 					, v: ' ---', },
			{ k: 'Пропускна здатність відеоядра (можливо з врахуванням RAM)' 	, v: '42.7 GB/s', },
			{ k: 'Шина' 				, v: '128 bit', },


		],
		site: [ 
			{ title: 'www.elmir.ua' 		, href: 'https://elmir.ua/processors/processor_intel_core_i3-8100_s-1151_3_6ghz_6mb_box_bx80684i38100.html', },
			{ title: 'www.rozetka.com.ua' 	, href: 'https://hard.rozetka.com.ua/intel_core_i3_8100/p23602096/characteristics/', },
		],
	},
	{
		title: 'RAM', // Random Access Memory — пам'ять з довільним доступом
		keyval: [
			{ k: 'Модель' 		, v: 'HyperX DDR4 16GB 2x8GB 2666MHz Fury Black', },
			{ k: 'Код' 			, v: 'HX426C16FB3K2/16', },

			{ k: 'Тип' 			, v: 'DDR4', },
			{ k: 'Об\'єм' 		, v: '16 Гб = 8GB * 2', },
			{ k: 'Частота' 		, v: '2666(1333) МГц', },
			{ k: 'Таймінги' 	, v: 'CL16', },
			{ k: 'Напруга' 		, v: '1,2 В', },
		],
		site: [ 
			{ title: 'www.elmir.ua' 		, href: 'https://elmir.ua/memory_modules/memory_module_hyperx_ddr4_16gb_2x8gb_2666mhz_fury_black_hx426c16fb3k2_16.html', },
		],
	},
	{
		title: 'Power AC/DC',
		keyval: [
			{ k: 'Модель' 			, v: 'Chieftec Core BBS-700S', },
			{ k: 'Потужність' 		, v: '700 Вт', },
		],
		site: [ 
			{ title: 'www.elmir.ua' 		, href: 'https://elmir.ua/power_supplies/power_supply_unit_700w_chieftec_core_bbs-700s.html', },
		],
	},







	{
		title: 'SSD M.2',
		keyval: [
			{ k: 'Назва' 		, v: 'Kingston NV1', },
			{ k: 'об\'єм' 		, v: '1 TB', },
			{ k: 'запис' 		, v: '1700 МБ/с', },
			{ k: 'зчитування' 	, v: '2100 МБ/с', },
			{ k: 'ключ' 		, v: 'М', },
		],
		site: [ 
			{ title: 'www.elmir.ua' 		, href: 'https://elmir.ua/ua/ssd-drives/ssd-drive_m_2_1tb_kingston_nv1_snvs_1000g.html', },
		],
	},

	{
		title: 'SSD SATA-3',
		keyval: [
			{ k: 'Назва' 		, v: 'Silicon Power A55', },
			{ k: 'об\'єм' 		, v: '128 GB', },
			{ k: 'запис' 		, v: '360 МБ/с', },
			{ k: 'зчитування' 	, v: '460 МБ/с', },
		],
		site: [ 
			{ title: 'www.elmir.ua' 		, href: 'https://elmir.ua/ua/ssd-drives/ssd-drive_2_5_sata_128gb_silicon_power_a55_sp128gbss3a55s25.html', },
		],
	},








	


];



