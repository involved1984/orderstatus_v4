var currentOS = "iOS";
var appversion = "4.0";

var serverUrl = 'https://www.hotmat.se/admin_app_v4/index.php';

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        LoadingAndInitializingTheApp();
    }
};


var appLoaderFailedAtempts = 0;

function LoadingAndInitializingTheApp(){
    ajaxObject = $.ajax({
            type: 'POST',
            url: serverUrl + '?rnd=' + (new Date).getTime(),
            data: {},
            success: function(data){
                $('#pageContainer').html('');
                $('#pageContainer').append(data);
            },
            error : function(){
                appLoaderFailedAtempts++;
                if (appLoaderFailedAtempts > 3){
                    $('#errorLoadingTheAppContent').show();
                }

                setTimeout(function(){
                    LoadingAndInitializingTheApp();
                }, 1000);
            },
            complete: function(){
            }
    });
}
