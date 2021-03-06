import { UserManager } from 'oidc-client'

class ApplicationUserManager extends UserManager {
  constructor () {  
    super({     //
      authority:'https://cnblogb2c.b2clogin.cn/cnblogb2c.partner.onmschina.cn/B2C_1_signupsignin1/v2.0/.well-known/openid-configuration',
      client_id: 'b3e98701-2fda-45ff-bb8e-58ed09c740e3',
      redirect_uri: 'http://localhost:9001/callback',
      response_type: 'id_token token',
      scope: 'openid https://cnblogb2c.partner.onmschina.cn/896faa25-061b-408d-ae54-9899c6b9f1bf/demo.write https://cnblogb2c.partner.onmschina.cn/896faa25-061b-408d-ae54-9899c6b9f1bf/demo.read offline_access',
      post_logout_redirect_uri: 'http://localhost:9001',
      //userinfo_endpoint:'https://microsoftgraph.chinacloudapi.cn/oidc/userinfo'
    })
  }

  async login () {
    await this.signinRedirect()
    return this.getUser()
  }

  async logout () {
    return this.signoutRedirect()
  }
}

const applicationUserManager = new ApplicationUserManager()
export { applicationUserManager as default }
