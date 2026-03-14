const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  host: 'ShadowSMP',   
  port: 19132,         // optional, default 19132
  username: 'ss join',   // the username you want to join as, optional if online mode
  offline: false      // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.
})
