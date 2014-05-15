# Host.js
Get some information about the host.

## Install


## $host
  Host.js exposes an object called $host that contains some methods.
  You can see the methods available through  the options method.

```js
 $host.options();
```

## $host.url(<path>)
  Assuming that we are in www.example.com

*without parameter it get the URL*
```js
 $host.url();
/* http://example.com */
```
*with parameter it navigates to another address*
```js
 $host.url("http://foo.com");
```
or

```js
 $host.url("/foo");
```

## $host.protocol(<protocol>)
  Get the protocol being used

```js
 $host.protocol();
```
or set the protocol

```js
 $host.protocol("https");
```

## $host.params()
  Get the parameters passed

```js
 $host.params();
 /* http://example.com?foo=foo&bar='bar' */
```

Will return a object like this:

```js
 { foo: 'foo', bar: 'bar' }
```

or set the params

```js
 $host.params({ name: 'John' });
 /* http://example.com?name=John */
```

## $host.reloadPage()
  Reload the page

```js
  $host.reload();
```

## $host.options()
Shows the options
```js
 $host.options();
```
Will return something like this

url()
protocol()
hash()
addHash()
params()
reloadPage()
options()




