var _app = angular.module('appGISSCS', []);
_app.run(["$rootScope", "$http", function ($rootScope, $http) {
    $rootScope.appConfig = {
        tabs: [
            { id: "system", title: "System", url: "tpls/tab_content/system.html" },
            { id: "entity", title: "Entity", url: "tpls/tab_content/entity.html" },
            { id: "role", title: "Role", url: "tpls/tab_content/role.html" },
            { id: "function", title: "Function", url: "tpls/tab_content/function.html" },
            { id: "privilege", title: "Privilege", url: "tpls/tab_content/privilege.html" }
        ]
    };
    $rootScope.globalVar = {
        current_tab: $rootScope.appConfig.tabs[0]
    };
    $rootScope.change_tab = function (tab) {
        if (tab == $rootScope.globalVar.current_tab) return;
        $rootScope.globalVar.current_tab = tab;
    };
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
            scs_status: "I"
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