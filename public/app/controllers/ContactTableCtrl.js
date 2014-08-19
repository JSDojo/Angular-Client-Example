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

    $scope.search = function(contact) {
        function zeroPadding(num, places) {
            var zero = places - num.toString().length + 1;
            return Array(+(zero > 0 && zero)).join("0") + num;
        }

        var q = $scope.searchText;

        if (!q) {
            return true;
        }

        q = q.toLowerCase();

        // settings
        var by_address  =  1 << 7,
        by_fname = 1 << 6,
        by_info = 1 << 5,
        by_lname = 1 << 4,
        by_location = 1 << 3,
        by_phone = 1 << 2,
        by_where = 1 << 1,

        filters = 0,

        // searching... 
        matched_with_address = contact.address.toLowerCase().indexOf(q),
        matched_with_fname = contact.fname.toLowerCase().indexOf(q),
        matched_with_info = contact.info.toLowerCase().indexOf(q),
        matched_with_lname = contact.lname.toLowerCase().indexOf(q),
        matched_with_location = contact.location.toLowerCase().indexOf(q),
        matched_with_phone = contact.phone.toLowerCase().indexOf(q),
        matched_with_where = contact.where.toLowerCase().indexOf(q);

        // results...
        var to_match_filter = [
            matched_with_address>=0?"1":"0",
            matched_with_fname>=0?"1":"0",
            matched_with_info>=0?"1":"0",
            matched_with_lname>=0?"1":"0",
            matched_with_location>=0?"1":"0",
            matched_with_phone>=0?"1":"0",
            matched_with_where>=0?"1":"0",
            0
        ].join("");

        // generating bit field...
        if (matched_with_address>=0) {
            filters |= by_address;
        } 
        if (matched_with_fname>=0) {
            filters |= by_fname;
        }
        if (matched_with_info>=0) {
            filters |= by_info;
        }
        if (matched_with_lname>=0) {
            filters |= by_lname;
        }
        if (matched_with_location>=0) {
            filters |= by_location;
        }
        if (matched_with_phone>=0) {
            filters |= by_phone;
        }
        if (matched_with_where>=0) {
            filters |= by_where;
        }

        var matched = filters && zeroPadding((filters>>>0).toString(2),8) == to_match_filter;

        // comparing bitfield...
        if (matched) {
            return true;
        } else {
            return false;
        }
    }

});