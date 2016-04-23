'use strict';

var should = require("should");
var server = require('../config/testConfig');

describe("api route", function () {

    it("should response to update", function (done) {
        server
            .post("/216457967:AAGB9GtTbB0IamtlwrbCkfORISbEEISORlA")
            .set('Accept', 'application/json')
            .expect(200)
            .expect("Content-type", /json/)
            .expect({success: true})
            .send({
                alaki: (new Date()).getTime().toString()
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

});