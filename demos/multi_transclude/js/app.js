(function() {

  var myApp = angular.module("myApp", []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  myApp.controller(
    "AppController",
    function() {
      // Empty.
    }
  );


  myApp.directive(
    "siteLayout",
    function( MultiTranscludeFn ) {

      return {
        scope: {},
        transclude: true,
        templateUrl: "site-layout.html",

        link: function(scope, iElem, iAttrs, ctrl, transcludeFn) {
          MultiTranscludeFn.perform( iElem, transcludeFn );
        }
      };

    } // end function
  );


  myApp.factory(
    "MultiTranscludeFn",
    function() {

      return {
        perform: function(iElem, transcludeFn) {

          transcludeFn( function( clone ) {

            angular.forEach( clone, function(cloneEl) {

              console.log(cloneEl.attributes);

              // Node type 3 is "text" node
              if (cloneEl.nodeType !== 3) {

                // Get target name from clone
                var destId = cloneEl.attributes["transclude-to"].value;
                console.log("destId: " + destId);
                console.log(iElem);

                // Find target
                var destAttr = "[transclude-id='" + destId + "']";
                console.log("destAttr: " + destAttr);
                var dest = iElem.find(destAttr);  // NOTE: Require jQuery

                console.log("dest: " + dest);

                // Append target if found
                if (dest.length) {

                  dest.append(cloneEl);

                } else {
                  // if target isn't found (missing/invalid transclude),
                  // clean up and throw error

                  cloneEl.remove();

                  throw new Error(
                    "Target not found. Please specify the correct transclude-to attribute."
                  );
                }
              } // end if
            });
          });
        }
      };
    } // end function
  );

})();

