//Name:Akram Al-shukaili
//Source:https://canjs.com/doc/guides/recipes/signup-simple.html using canjs 

import { ajax, fixture, StacheElement, type } from "//unpkg.com/can@6/core.mjs";
function usename(Username) {
    return ("Telypay");
}
function password(Password) {
    return ("password123");
}
fixture("POST /api/session", function (request, response) {

    if (user.username === usename && user.password === password) {
        response(200, { message: "Success" }, {}, "Success");
    }
    else if (user.username === usename && user.password != password) {

        response(400, { message: "Wrong Password" }, {}, "Wrong Password");
    }

    else if (user.username != usename && user.password != password) {
        response(500, { message: "Error" }, {}, "Error");
    }

    else {
        response(401, { message: "Unauthorized" }, {}, "unauthorized");
    }

});
