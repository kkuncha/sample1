angular.module('myApp')
	.factory('UserDashboardSettings', function($http, $q){
	     var user_dashboard  = {};

	     var user_data = [
						    {
						        "acc_id": "90898HJ999H",
						        "acc_anumber": "45236524",
						        "acc_status": "inactive",
						        "card_holder_name": "Alok",
						        "ac_vehicle_name": "Maruthi",
						        "ac_man_acc_number": "56453443",
						        "ac_man_account": "SB Account",
						        "man_acc_name": "CB account"
						    },
						    {
						        "acc_id": "7348748HFJDFHJ",
						        "acc_anumber": "869786987",
						        "acc_status": "active",
						        "card_holder_name": "Ashok",
						        "ac_vehicle_name": "Mercedes",
						        "ac_man_acc_number": "5465576",
						        "ac_man_account": "CB Account",
						        "man_acc_name": "SB account"
						    },
						    {
						        "acc_id": "6787EFHJDF8DF7",
						        "acc_anumber": "754857485",
						        "acc_status": "inactive",
						        "card_holder_name": "Anil",
						        "ac_vehicle_name": "BMW",
						        "ac_man_acc_number": "23434354",
						        "ac_man_account": "CB Account",
						        "man_acc_name": "SB account"
						    },
						    {
						        "acc_id": "89787667DD",
						        "acc_anumber": "6856985659",
						        "acc_status": "inactive",
						        "card_holder_name": "Anand",
						        "ac_vehicle_name": "Duster",
						        "ac_man_acc_number": "45454545",
						        "ac_man_account": "SB Account",
						        "man_acc_name": "CB account"
						    },
						    {
						        "acc_id": "67836473GDSGDH",
						        "acc_anumber": "212133492348",
						        "acc_status": "active",
						        "card_holder_name": "Aakash",
						        "ac_vehicle_name": "Verna",
						        "ac_man_acc_number": "54534443",
						        "ac_man_account": "SB Account",
						        "man_acc_name": "SB account"
						    },
						    {
						        "acc_id": "473847384DHJSD",
						        "acc_anumber": "5495749549",
						        "acc_status": "inactive",
						        "card_holder_name": "Ashwin",
						        "ac_vehicle_name": "i10",
						        "ac_man_acc_number": "456564545",
						        "ac_man_account": "SB Account",
						        "man_acc_name": "CB account"
						    },
						    {
						        "acc_id": "47387438HJSDHF",
						        "acc_anumber": "754857845784",
						        "acc_status": "inactive",
						        "card_holder_name": "Ahmed",
						        "ac_vehicle_name": "Lancer",
						        "ac_man_acc_number": "323232",
						        "ac_man_account": "CB Account",
						        "man_acc_name": "SB account"
						    }
						 ];

								 

         user_dashboard.saveUserSettings = function(){
            return "user session saved";
         };         

		 user_dashboard.fetchData = function() {
		 	return user_data;
		 };


	     return user_dashboard;
});