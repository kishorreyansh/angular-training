
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular_training/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/angular_training"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/home"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/aboutus"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/careers"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/contactus"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/users"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/userdetails/*"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/products"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/productdetails"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/javascript"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/javascript/array"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/javascript/string"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/javascript/math"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/managevideos"
  },
  {
    "renderMode": 0,
    "route": "/angular_training/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5178, hash: '475db1fee2a15c445d9d143fd65bb3ef7aab71b85b5c3489d9a9ae8ff9b71c9c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1093, hash: '31d6ae5ce508489da1b5de7f82eb60eca93416a99832a45cb29166584618858c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-W6RCCAJB.css': {size: 232284, hash: 'xcNC0bBuBlQ', text: () => import('./assets-chunks/styles-W6RCCAJB_css.mjs').then(m => m.default)}
  },
};
