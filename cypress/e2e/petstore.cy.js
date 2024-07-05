describe('petstore user', () => {
  beforeEach(() => {

    cy.user_login("user1", "123");

  });

  it('create user', () => {
    cy.request('POST', '/user', {

      "id": 547,
      "username": "qa",
      "firstName": "Lilly",
      "lastName": "Newmann",
      "email": "lil@new.com",
      "password": "135g",
      "phone": "123777888",
      "userStatus": 0

    }). then((response) => {

      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);

    });
  });

  it('update user', () => {
    cy.request('PUT', '/user/qa', {

      "id": 547,
      "username": "qa",
      "firstName": "Lilly",
      "lastName": "Newmann",
      "email": "lil@gmail.com",
      "password": "765J",
      "phone": "+111755900",
      "userStatus": 0

    }). then((response) => {

      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);

    });
  });

  it('delete user', () => {
    cy.request('DELETE', '/user/qa'). then((response) => {

      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);

    });
  });

});