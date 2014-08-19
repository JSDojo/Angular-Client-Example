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
        function search(q, where) {
            q = q.replace(/\s+/g, ' ').trim().split(" ");

            for (i in q) {
                if (where.indexOf(q[i])>=0) {
                    return true;
                }
            }

            return false;
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
        matched_with_address = search(q, contact.address.toLowerCase()),
        matched_with_fname = search(q, contact.fname.toLowerCase()),
        matched_with_info = search(q, contact.info.toLowerCase()),
        matched_with_lname = search(q, contact.lname.toLowerCase()),
        matched_with_location = search(q, contact.location.toLowerCase()),
        matched_with_phone = search(q, contact.phone.toLowerCase()),
        matched_with_where = search(q, contact.where.toLowerCase());

        // results...
        var to_match_filter = [
            matched_with_address ? "1":"0",
            matched_with_fname ? "1":"0",
            matched_with_info ? "1":"0",
            matched_with_lname ? "1":"0",
            matched_with_location ? "1":"0",
            matched_with_phone ? "1":"0",
            matched_with_where ? "1":"0",
            0
        ].join("");

        // generating bit field...
        if (matched_with_address) {
            filters |= by_address;
        } 
        if (matched_with_fname) {
            filters |= by_fname;
        }
        if (matched_with_info) {
            filters |= by_info;
        }
        if (matched_with_lname) {
            filters |= by_lname;
        }
        if (matched_with_location) {
            filters |= by_location;
        }
        if (matched_with_phone) {
            filters |= by_phone;
        }
        if (matched_with_where) {
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