




const dependences = [



	// масиви-списки з інших сайтів ( сторонні ) ----------------------------------------------------------------------------------
	
	{ db: 'country' 	, },  // https://pillypenkosa.github.io/db/list/list.country.js





	// масиви-списки з ЦЬОГО проекту ( свої ) -------------------------------------------------------------------------------------


	{ arr: 'pc.win10set' 		, },
	{ arr: 'pc.mbcpuram' 		, },
	{ arr: 'pc.vga' 			, },
	{ arr: 'pc.my' 				, },




	// компоненти загальні --------------------------------------------------------------------------------------------------------





	{ cmp: 'Win-Err404' 				, },
	{ cmp: 'Footer' 					, },
	{ cmp: 'Menu' 						, },
	{ cmp: 'Header' 					, },

	{ cmp: 'Logo' 						, },

	{ cmp: 'Sites' 						, },




	{ cmp: 'Spoyler-Body-Mbcpuram' 		, },
	{ cmp: 'Spoyler-Body-Vga' 		, },
	//{ cmp: 'Spoyler-Title-Mbcpuram' 	, },



	{ cmp: 'Spoyler' 					, },






	// компоненти-контенти // win-сторiнки ----------------------------------------------------------------------------------------
	


	{ cmp: 'Win-10-set' 			, regexp: /^windows-10/ 				, },


	{ cmp: 'Win-MbCpuRam' 			, regexp: /^mbcpuram/ 					, },

	{ cmp: 'Win-Vga' 				, regexp: /^vga/ 						, },
	{ cmp: 'Win-MyPc' 				, regexp: /^my-pc/ 						, },

	{ cmp: 'Win-Index' 				, regexp: /^index$/ 					, }, 	// regexp - url-маршрут (route) в адресному рядку
	









	//{ cmp: 'Win-User' 			, regexp: /^user\/[0-9]+$/ 				, }, 	// user/{ n }
	//{ cmp: 'Win-User' 			, regexp: /^user\/[0-9A-Za-z]+$/ 		, }, 	// user/{ txt }
	//{ cmp: 'Win-Users' 			, regexp: /^users$/ 					, },










];




















