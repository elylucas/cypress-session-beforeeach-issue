describe('session', () => {
  describe('calling login in beforeEach', () => {
    beforeEach(() => {
      cy.login();
    });

    it('accessToken should be in localStorage', () => {
      expect(localStorage.getItem('accessToken')).equal('test123');
    });
  });

  describe('calling login in individual test', () => {
    it('accessToken should be in localStorage (but its not!)', () => {
      cy.login();
      //below test currently fails because accessToken is not in localStorage
      expect(localStorage.getItem('accessToken')).equal('test123');
    });
  });
  
  
});
