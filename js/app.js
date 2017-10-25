
var _app = angular.module('appGISSCS', []);
_app.run(["$rootScope", "$http", function ($rootScope, $http) {
    $rootScope.scs_system = [
        {
            system_id: "sdmc",
            system_description: "Survey Division Staff Management Console",
            system_category: "ADM",
            system_platform: "WEB",
            system_scope_id: "DIV",
            system_owner: "SVY, LS/GI",
            system_contact: "2309 5033",
            system_email: "suk_ling_leung@cedd.hksarg",
            scs_status: "A"
        },
        {
            system_id: "phdp",
            system_description: "CEDD Survey Division Photo Dispatch",
            system_category: "GIS",
            system_platform: "WEB",
            system_scope_id: "DPT",
            system_owner: "SVY, LS/GI",
            system_contact: null,
            system_email: null,
            scs_status: "A"
        },
        {
            system_id: "sdmc",
            system_description: "Computerized Slope Registration and Location Plan System Version 3",
            system_category: "GIS",
            system_platform: "WEB",
            system_scope_id: "DIV",
            system_owner: "SVY, LS/GI",
            system_contact: null,
            system_email: null,
            scs_status: "A"
        },
        {
            system_id: "sdmc",
            system_description: "Land Parcel Information Retrieval",
            system_category: "GIS",
            system_platform: "WEB",
            system_scope_id: "DPT",
            system_owner: "SVY, LS/GI",
            system_contact: null,
            system_email: null,
            scs_status: "A"
        }
    ];
}]);