    Save the sum.js file (with the JavaScript code) in the assets/js folder.

    Create an external link to the new file

    Open index.html in Google Chrome.

    Open Chrome DevTools:
        Right-click on the page and select "Inspect" or press Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac).

    In the DevTools window, navigate to the "Sources" tab.

    On the left sidebar, you'll see your file structure. Open the sum.js file.

    Place breakpoints:
        Click on the line number 2 (next to function calculateSum(start, finish)) to set a breakpoint at the start of the calculateSum function.
        Click on line number 10 (next to console.log) to set a breakpoint at the console.log statement.

    Reload the web page to start debugging. You should see the execution paused at the first breakpoint (line 2).

    Use the controls in the DevTools panel to step through the code:
        Step Over (F10): Execute the current line and move to the next.
        Step Into (F11): If there's a function call, enter the function and debug it.
        Step Out (Shift + F11): Finish debugging the current function and return to the caller.
        Continue (F8): Continue execution until the next breakpoint.

    While debugging, inspect the variables start, finish, and sum in the "Scope" section of the DevTools to see their values.

    Continue debugging until you reach the console.log statement (line 5), and observe the output in the DevTools console.