'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const db = admin.firestore();
admin.initializeApp(functions.config().firebase);

    exports.receiveReports = functions.https.onRequest(async (req, res) => { 
        db.collection('reports')
        .add({
            desc: req.body.text,
            lng: 123.8888898,
            lat: 10.3127439, 
            time: req.body.time
        })
        .then(response => {
            const document_ref = response.path
            const document_id = response.id
            db.collection('/hospitals/Ffv7QjIh6VbiLiYTl8An/reports').doc(document_id)
            .set({
                reportReference: document_ref,
                desc: req.body.text,
                lng: 123.8888898,
                lat: 10.3127439,
                time: req.body.time
            })
            res.send(response.path)
        });
    })

    exports.receiveReports2 = functions.https.onRequest(async (req, res) => {
        db.collection('reports')
        .add({
            desc: req.body.text,
            lng: 123.8888898,
            lat: 10.3127439, 
            time: req.body.time
        })
        .then(response => {
            const document_id = response.id
            const document_ref = response.path
            db.collection('/baranggay/R85cO2Pf4St48nzYS2LW/reports').doc(document_id)
            .set({
                reportReference: document_ref,
                desc: req.body.text,
                lng: 123.8888898,
                lat: 10.3127439,
                time: req.body.time
            })
            res.send(response.path)
        });
    })
    