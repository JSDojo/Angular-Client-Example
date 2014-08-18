app.controller('ContactTableCtrl', function($scope, Contacts){
    $scope.contacts = [];
    
    init();

    function init() {
        Contacts.findAll(function(contacts){
            if (contacts) {
                $scope.contacts = contacts;    
            } else {
                // something wrong happened.
            }
        });
    }

});