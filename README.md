# dotyml

> Read values from a YAML file.

## About:

It's a little helper to get values from a YAML file from command-line interface.

## Usage:

```
$ npm install -g dotyml
```

```
$ dotyml file.yml name
```

This will get the key `name` from the root object in `file.yml`.

It also reads from `stdin`:

```
cat file.yml | dotyml name
```

## See also:

- [dotjson](https://www.npmjs.com/package/dotjson)
