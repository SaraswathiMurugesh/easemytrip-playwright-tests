export const loginPageSelectors = {
    loginOrSignUpButton: '#divSignInPnl',
    customerLoginButton: '#shwlogn',
    emailInputField: '#txtEmail',
    proceedWithOtpButton: '#shwotp',
    passwordInputField: '#txtEmail2',
    loginButton: '[name="btn_Login"]:not([id])',
    loginSuccessIndicator: '[class$="logsuccess"]'
}

export const pageSelectors = {
    ...loginPageSelectors,
}