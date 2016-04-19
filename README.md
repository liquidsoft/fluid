# fluid-css
> Lightweight grid framework written in LessCSS

## Installation
Via NPM:
```shell
npm install fluid-css
```

## Getting started
Include the *fluid-css.min.css* file into your head tag.
```html
<head>
    <link rel="stylesheet" href="/node_modules/fluid-css/dist/fluid-css.min.css />
</head>
```

## Architecture
The architecture of Fluid-CSS is similar to other well-known grid frameworks such as Bootstrap and Foundation.

### .container
The container element wraps a series of rows. It has a screen-based padding which can be adjusted in *vars.less* file.

### .row
The row class wraps a series of columns. The vertical spacing can be adjusted in *vars.less*.

### .columns
The *columns* class should be paired with a size. There are 3 screen sizes available split into a 12 column system.
The spacing can be adjusted in *vars.less*.

## Helper classes
###.clearfix
###.pull-left
###.pull-right

## Examples
```html
<div class="container">
    <div class="row">
        <div class="small-12 medium-6 columns"></div>
        <div class="small-12 medium-6 columns"></div>
    </div>
    <div class="row">
        <div class="small-1 medium-12 columns"></div>
        <div class="small-11 medium-12 columns"></div>
    </div>
</div>
```

## Roadmap
Here are some considerations for further development:
- add show/hide screen helpers
- add push/pull screen helpers