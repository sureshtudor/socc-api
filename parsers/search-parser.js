exports.responseParser = function (body) {
    let results = [];

    if (body.result.length > 0) {
        body.result[0].applications.map(e => {
            results.push({
                "id": e.id,
                "applicationId": e.applicationId,
                "referenceKey": e.referenceKey,
                "applicationType": e.applicationType,
                "statusChgDate": e.statusChgDate,
                "promoCode": (e.venue || {}).promoCd,
                "legalName": (e.parties[0] || {}).legalName,
                "street": (((e.parties[0] || {}).paddresses[0] || {}).address || {}).streetAddr,
                "city": (((e.parties[0] || {}).paddresses[0] || {}).address || {}).city,
                "state": (((e.parties[0] || {}).paddresses[0] || {}).address || {}).stateProvince,
                "postalCode": (((e.parties[0] || {}).paddresses[0] || {}).address || {}).postalCode
            });
        });
    }

    return results;
}