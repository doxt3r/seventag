!function(e){e.sevenTag.on("bootstrap",function(){function i(){return e.innerWidth<400||e.innerHeight<400}function n(){return e.parent.stgDebuggerMinimized}function t(){return e.innerWidth<e.innerHeight}function s(){t()?(a.style.width="100%",a.style.height=n()?"60px":"100%",e.document.body.style["margin-top"]="60px",a.style["overflow-y"]="auto"):(a.style.width=n()?"60px":"400px",a.style.height="100%",a.style.transition="width 1s",e.document.body.style["margin-top"]="0px")}if(e.sevenTag.debugOptions.enabled!==!1){var o='<!doctype html>\n<html lang="en" ng-app="application" ng-cloak>\n<head>\n    <meta charset="UTF-8">\n    <title>Debugger for admin</title>\n    <meta name="description" content="">\n    <meta name="viewport" content="width=device-width">\n\n    <link rel="stylesheet" href="##host##/icons.css" type="text/css" />\n    <link rel="stylesheet" href="##host##/animate.min.css" type="text/css" />\n    <link rel="stylesheet" href="##host##/styles.css" type="text/css" />\n</head>\n<body ng-class="{ \'mobile\': isMobile() }">\n    <header id="navbar">\n    <a\n        id="navbar-slide-button"\n        href\n        ng-click="debugger.minimizedMemento.isMinimized() ? debugger.minimizedMemento.maximize() : debugger.minimizedMemento.minimize()"\n    >\n        <i class="icon-arrow-thin-right" ng-if="!debugger.minimizedMemento.isMinimized() && !isMobile()"></i>\n        <i class="icon-arrow-thin-left" ng-if="debugger.minimizedMemento.isMinimized() && !isMobile()"></i>\n        <i class="icon-arrow-down" ng-if="debugger.minimizedMemento.isMinimized() && isMobile()"></i>\n        <i class="icon-arrow-up" ng-if="!debugger.minimizedMemento.isMinimized() && isMobile()"></i>\n    </a>\n    <div id="brand-minimize" minimize-element ng-if="isMobile()">\n        <i class="icon-logo"></i>\n    </div>\n    <div id="navbar-brand" minimize-cloak>\n        <i class="icon-logo"></i>\n    </div>\n    <div id="navbar-container-separator" minimize-cloak></div>\n    <div id="navbar-container-name" minimize-cloak>\n        {{ debugger.$containerName }}\n    </div>\n    <a id="navbar-close-button" href minimize-cloak ng-click="debugger.close()"><i class="icon-close"></i></a>\n</header>\n\n    <div id="brand-minimize" class="brand-minimize-not-mobile" minimize-element ng-if="!isMobile()">\n        <i class="icon-logo"></i>\n    </div>\n    <div id="container-wrapper" minimize-cloak>\n        <nav id="navigation">\n    <ul>\n        <li ng-class="{active: $state.includes(\'overview\')}">\n            <a href ui-sref="overview.tags">Overview</a>\n        </li>\n        <li ng-class="{active: $state.includes(\'events-log\')}">\n            <a href ui-sref="events-log.list">Events log</a>\n        </li>\n    </ul>\n</nav>\n\n\n        <main id="page-view" ui-view style="clear:both"></main>\n\n        <div id="breakpoints">\n    <div id="breakpoints-title">\n        Breakpoints\n        <cc-help ng-if="isHelperVisible()" content="With breakpoints You can stop the page change events from execution. This makes it easier to check if proper tags were triggered e.g. during form submission" placement="up"></cc-help>\n    </div>\n    <input\n        type="checkbox"\n        id="breakpoints-input"\n        ng-model="debugger.$debugger.breakpoints.enabled"\n        class="stg-toggle"\n        ng-class="{\'checked\': debugger.$debugger.breakpoints.isEnabled()}"\n    />\n    <label for="breakpoints-input" id="breakpoints-toggle" class="stg-toggle-btn"></label>\n</div>\n\n    </div>\n\n    <script type="text/ng-template" id="ccHelp.html">\n        <i\n            class="icon-info-circle helper"\n            ng-class="{\'icon-info-circle\': !active, \'icon-info-fill\': active}"\n            tooltip-placement="{{ placement}}"\n            tooltip-html-unsafe="{{ content }}"\n            ng-init="active = false;"\n            ng-mouseenter="active = true"\n            ng-mouseleave="active = false"\n        >\n        </i>\n    </script>\n\n    <script src="##host##/vendor.js"></script>\n    <script src="##host##/scripts.js"></script>\n    <script src="##host##/templates.cache.js"></script>\n</body>\n</html>\n',a=e.document.createElement("DIV");e.onresize=function(){i()&&s()},s(),a.style.position="fixed",a.style["-webkit-overflow-scrolling"]="touch",a.style.zIndex="2147483647",a.style.right=0,a.style.top=0,a.id="seventag_container_debugger";var l=e.document.createElement("iframe");l.style.width="100%",l.style.height="100%",l.style.border="none",l.src="about:blank",a.appendChild(l),e.document.body.appendChild(a);var r=l.contentWindow.document;r.open(),r.write(o),r.close()}})}(window);