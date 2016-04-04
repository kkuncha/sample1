angular.module('myApp')


  .controller('queryDBCtrl', function($scope, UserDashboardSettings){

    $scope.firstFieldList = ["Account ID", "Account Number", "Account Status", "Cardholder's Name", "Account Vehicle Name", "Managing Account ID", "Managing Account Number", "Managing Account Name"];
    $scope.database = {
        row1: '',
        row2: '',
        row3: '',
        row4: '',
        row5: '',
        row6: '',
    };
    $scope.databaseFields = ["acc_id", "acc_anumber", "acc_status", "card_holder_name"];

    $scope.fieldNames = ["Account ID", "Account Number", "Account Status", "Cardholder's Name"];

    $scope.showsecond = false;

    $scope.AddOneMore = function(){

        if( $scope.first_chosed == undefined) {
            alert("Please choose some option");
            return;
        }

        $scope.secondfieldset = $scope.prepareNewList($scope.first_chosed, $scope.firstFieldList);
        $scope.showsecond = true;
    };

    $scope.AddSecondRow = function(){

        if( $scope.second_chosed == undefined) {
            alert("Please choose some option");
            return;
        }

       // alert($scope.second_chosed);
        $scope.thirdfieldset = $scope.prepareNewList($scope.second_chosed, $scope.secondfieldset);
        $scope.showthird = true;
    };



    $scope.prepareNewList = function(value, array){
        var second_array = [];
        for(var i=0; i<array.length; i++) {
            if(array[i] != value)
                second_array.push(array[i]);
        }
        return second_array;
    };

    $scope.getDatabaseFields = function(value, fieldvalue, fieldName){
        if(value == "no") {
            var index = $scope.databaseFields.indexOf(fieldvalue);
            if( index > -1){
                $scope.databaseFields.splice(index, 1);    
                $scope.fieldNames.splice(index, 1);
            }               
        } else {
            $scope.fieldNames.push(fieldName);
            $scope.databaseFields.push(value);
        }
        $scope.prepareQueries();
    };

    $scope.closeSecondRow = function() {        
      //  if($scope.showthird) {
       //     $scope.thirdfieldset.push($scope.second_chosed);
       // }
        //$scope.secondfieldset = [];
        $scope.showsecond = false;
    };

    $scope.closeThirdRow = function() {
        $scope.thirdfieldset = [];
        $scope.showthird = false;
    };

    $scope.selectInputField = function(inputField) {
        $scope.merchant_info = inputField.fieldValue.acc_id;
    };

    $scope.prepareQueries = function(){
        $scope.fieldValues = UserDashboardSettings.fetchData();
    };

    $scope.saveDefaultSettings = function() {        
        var response = UserDashboardSettings.saveUserSettings();
        alert(response);
    };

    $scope.prepareQueries();
  });