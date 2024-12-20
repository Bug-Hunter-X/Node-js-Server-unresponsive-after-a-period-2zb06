# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js servers where the server stops responding to requests after a period. The problem is often caused by unhandled exceptions or memory leaks. 

## Bug Description
The server seems to stop responding to requests after some time, without any error messages in the console.  This makes debugging difficult.

## Solution
The solution involves using error handling and monitoring memory usage.  The improved server includes error handling within the request handler and proper resource cleanup.