const facebookAppId = process.env.fbAppToken;

export function initFacebookSdk() {
    return new Promise(resolve => {
       // wait for facebook sdk to initialize before starting the vue app
        window.fbAsyncInit = function() {
            FB.init({
              appId            : facebookAppId,
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v10.0'
            });
        };
        // load facebook sdk script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
}

export async function getLoginStatus() {
    const { authResponse } = await new Promise(FB.getLoginStatus);
    if (!authResponse) return;

    return authResponse;
}

export function logout() {
    // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
    FB.api('/me/permissions', 'delete', null, () => {
        FB.logout();
    });
}