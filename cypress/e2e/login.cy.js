import { LoginPage } from '../../pages/Login';
import { HomePage } from '../../pages/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Testy procesu logowania', () => {
    it('Wpisz email user888 i wyloguj', () => {
        loginPage.visit();
        loginPage.login('user888@gmail.com', '1234567890');
        homePage.logout();
    });

    it('Wpisz email testowyqa i wyloguj', () => {
        loginPage.visit();
        loginPage.login('testowyqa@qa.team', 'QA!automation-1');
        homePage.logout();
    });
});
