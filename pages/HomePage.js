export class HomePage {
    logout() {
        cy.get('#open-navigation-menu-mobile').click();
        cy.contains('Log out').click();
    }
}
