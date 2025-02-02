var Squidex = {
	
	ClientSecret: "",
	ClientID: "",
	Token: "",
	Endpoint: "",
	
	Init: async function(clientID,clientSecret,endpoint) {
		Squidex.ClientID = clientID;
		Squidex.ClientSecret = clientSecret;
		
		if (endpoint != undefined){
			Squidex.Endpoint = endpoint;
		}
		
		await Squidex.GetToken();
	},
	
	GetToken: async function () {
		var result = await fetch('https://cloud.squidex.io/identity-server/connect/token', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: "grant_type=client_credentials&client_id=" + Squidex.ClientID + "&client_secret=" + Squidex.ClientSecret
		});
		var response = await result.json();
		Squidex.Token = response["access_token"];
	},
	
	GetRecords: async function(filter,endpoint){
		if (filter == undefined){
			filter = "";
		}
		if (endpoint == undefined){
			endpoint = Squidex.Endpoint;
		}
		var result = await fetch('https://cloud.squidex.io/api/content/' + endpoint +'/' + filter, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': "Bearer " + Squidex.Token
		}
		})
		var response = await result.json();
		return response.items;
	},
	
	CreateRecord: async function(record,endpoint){
		if (endpoint == undefined){
			endpoint = Squidex.Endpoint;
		}
		var result = await fetch('https://cloud.squidex.io/api/content/' + endpoint +'?publish=true&id=', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': "Bearer " + Squidex.Token
		},
		body: JSON.stringify(record)
		})
		var response = await result.json();
		return response;
	},
	
	UpdateRecord: async function(recordID,record,endpoint){
		if (endpoint == undefined){
			endpoint = Squidex.Endpoint;
		}
		var result = await fetch('https://cloud.squidex.io/api/content/' + endpoint +'/' + recordID, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': "Bearer " + Squidex.Token
		},
		body: JSON.stringify(record)
		})
		var response = await result.json();
		return response;
	},
	
	DeleteRecord: async function(recordID,endpoint){
		if (endpoint == undefined){
			endpoint = Squidex.Endpoint;
		}
		var result = await fetch('https://cloud.squidex.io/api/content/' + endpoint +'/' + recordID, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': "Bearer " + Squidex.Token
		},
		body: JSON.stringify("")
		})
	}
}