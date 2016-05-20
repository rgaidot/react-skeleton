process.env.NODE_ENV = 'test';

function noop() {
    return null;
}

require.extensions['.md'] = noop;

require.extensions['.scss'] = noop;

require.extensions['.svg'] = noop;

require.extensions['.png'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;
