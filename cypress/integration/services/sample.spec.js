
describe("Automation Test", function() {
  it('Should share details of current weather at a requested location', function() {
        cy.request({
		method: 'GET',
		url: "http://api.weatherstack.com/current?access_key=82dff9515e09cdd2b2eb97023ea40b1f&query=New York"
  }).then(function(response){
		  expect(response.body).to.have.property('current');
	  
            });

        });
});
