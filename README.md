# gitbook-plugin-draw.io

## How to install it?
You can install via npm or yarn:  

```sh
$ npm install --save gitbook-plugin-draw.io
# or
$ yarn add gitbook-plugin-draw.io
```

And config your book.json file.

```json
{
    "plugins": ["draw.io"]
}
```

## How to use it?
Insert drawIo tag into your Gitbook pages.

```
{% drawIo src="./hoge.drawio" %}{% drawIo %}
```