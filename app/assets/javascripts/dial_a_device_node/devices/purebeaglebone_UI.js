(function(exports) {

    var localeventbus;
    var data;

    exports.init = function (eventbus) {
 
        localeventbus = eventbus;

        if (typeof String.prototype.startsWith != 'function') {
            String.prototype.startsWith = function (str){
                return this.indexOf(str) == 0;
            };
        }


        eventbus.on ("ui.update", function(data) {   

            switch (parseInt(data.model.usrled0)) {
                    case 0: $('#usrled0button').removeClass('active'); break;
                    case 1: $('#usrled0button').addClass('active'); break;
            }

            switch (parseInt(data.model.usrled1)) {
                    case 0: $('#usrled1button').removeClass('active'); break;
                    case 1: $('#usrled1button').addClass('active'); break;
            }

            switch (parseInt(data.model.usrled2)) {
                    case 0: $('#usrled2button').removeClass('active'); break;
                    case 1: $('#usrled2button').addClass('active'); break;
            }

            switch (parseInt(data.model.usrled3)) {
                    case 0: $('#usrled3button').removeClass('active'); break;
                    case 1: $('#usrled3button').addClass('active'); break;
            }
        });

    };

    exports.toggleusrled0 = function toggleusrled0() {

        var data = "";

        if ($('#usrled0button').hasClass('active')) {
            data= "0";
        } else {
            data = "1";
        }

        localeventbus.emit ("ui.command", [{"command": "setled", "led": "USR0", "value": data}]);

    };

    exports.toggleusrled1 = function toggleusrled1() {

        var data = "";

        if ($('#usrled1button').hasClass('active')) {
            data= "0";
        } else {
            data = "1";
        }

        localeventbus.emit ("ui.command", [{"command": "setled", "led": "USR1", "value": data}]);
    };

    exports.toggleusrled2 = function toggleusrled2() {

        var data = "";

        if ($('#usrled2button').hasClass('active')) {
            data= "0";
        } else {
            data = "1";
        }

        localeventbus.emit ("ui.command", [{"command": "setled", "led": "USR2", "value": data}]);
    };

    exports.toggleusrled3 = function toggleusrled3() {

        var data = "";

        if ($('#usrled3button').hasClass('active')) {
            data= "0";
        } else {
            data = "1";
        }

        localeventbus.emit ("ui.command", [{"command": "setled", "led": "USR3", "value": data}]);
    };
  
  

})(typeof exports == 'undefined'? this['ui'] = {}: exports);