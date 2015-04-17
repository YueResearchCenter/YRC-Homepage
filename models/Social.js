var keystone = require('keystone'),
  Types = keystone.Field.Types;

Social.add({ 
  facebook: { type: String, width: 'short' },
  github: { type: String, width: 'short' },
  instagram: { type: String, width: 'short' },
  linkedin: { type: String, width: 'short' },
  qq: { type: String, width: 'short' },
  renren: { type: String, width: 'short' },
  skype: { type: String, width: 'short' },
  twitter: { type: String, width: 'short' },
  weibo: { type: String, width: 'short' },
  weixin: { type: String, width: 'short' },
  whatsapp: { type: String, width: 'short' }
});