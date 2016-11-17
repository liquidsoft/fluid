# fluid
> Lightweight grid system

## What's new ?
I've rewritten the code in sass and changed the compiler to gulp. Both **less** and **sass** sources are available from **fluid.less** or **fluid.scss**.

## Features
- Responsive grid system using semantic CSS classes and LessCSS mixins
- Support classes for offsetting columns (pushing or pulling)

## When?
- When you want to start a clean project.
- When your project doesn't require the full bundle provided by Bootstrap or similar frameworks (e.g. portfolio website).

## Screen sizes
Currently supports 3 screen sizes preset at:
- Small **<768px**
- Medium **>=768px** and **<1200px**
- Large *>=1200px*

*The breakpoints can be changed using LessCSS.*

The framework is built bottom-up meaning that rules for smaller screens apply to all screens unless overridden.

## Installation
Via NPM
```shell
npm install fluid-css
```

Via GIT:
```shell
git clone https://github.com/liquidsoft/fluid
```

**Good to go**: [Download](https://github.com/liquidsoft/fluid/tree/master/build) a precompiled version from the build folder (**note** that the precompiled versions do not support settings). 

## Usage
- Precompiled CSS (download from the **build** folder). All classes are available but lacks the power of variables and mixins.
- Import **fluid.less** from **node_modules/fluid-css/fluid.less** in your LessCSS project and overwrite the predefined settings.
- Clone -> Change **src/vars.less** -> Run **gulp** -> Copy the CSS into your project.

## Architecture

### .container
The grid wrapper. Takes full width by default.

### .container.fixed
Fixes the container to a maximum width of 1170px by default.

### .row
Wraps columns. It should usually be appended to the *.container*. 

### .column
### .columns
The responsive columns must always be paired with at least a column size class:

- small-{n}
- medium-{n}
- large-{n}

They can also be paired with offset helper classes:

- push-small-{n}
- pull-small-{n}
- push-medium-{n}
- pull-medium-{n}
- push-large-{n}
- pull-large-{n}

## Configuration
The following less variables can be overridden for a customized build:

- **@columns** - Number of columns in a row. (default: 12)
- **@breakpoint-small** - The width at which the small screen breaks. (default: 768px)
- **@breakpoint-large** - The width at which the medium screen breaks. (default: 1200px)
- **@container-fixed-width** - Maximum width of a *.container.fixed* element. (default: 1170px)
- **@row-spacing-small** - The space between two rows on a small screen. (default: 15px)
- **@row-spacing-medium** - The space between two rows on a medium screen. (default: 15px)
- **@row-spacing-large** - The space between two rows on a large screen. (default: 15px)
- **@column-spacing-small** - The space between two columns on a small screen. (default: 30px)
- **@column-spacing-medium** - The space between two columns on a medium screen. (default: 30px)
- **@column-spacing-large** - The space between two columns on a large screen. (default: 30px)

## Mixins

### .medium-screen(@rules)
Sets rules for medium screens.
```less
.medium-screen({
    color: #333;
});
```

### .large-screen(@rules)
Sets rules for large screens.

### .small-screen-only(@rules)
Sets rules for small screens **only**.

### .medium-screen-only(@rules)
Sets rules for medium screens **only**.

### .not-large-screen(@rules)
Sets rules for small and medium screens **only**.

### .clearfix()
Clearfixes the element.

### .container()
### .row()
### .column(@units, @spacing)
Makes a column that takes *@units* grid fractions with regards to column *@spacing*.

### .small-column(@units)
Makes a column that takes *@units* grid fractions on small screens.

### .medium-column(@units)
Makes a column that takes *@units* grid fractions on medium screens.

### .large-column(@units)
Makes a column that takes *@units* grid fractions on large screens.

### .push-small-column(@units)
### .pull-small-column(@units)
### .push-medium-column(@units)
### .pull-medium-column(@units)
### .push-large-column(@units)
### .pull-medium-column(@units)

## To be added

- Offset reset (push-*-0 and pull-*-0)

## Examples
**Note:** Always define your columns bottom-up. A column should always have a **small** size in order to be fully responsive. 

```html
<div class="container">
    <div class="row">
        <div class="small-12 medium-4 columns"></div>
        <div class="small-12 medium-4 columns"></div>
        <div class="small-12 medium-4 columns"></div>
    </div>
    <div class="row">
        <div class="small-12 large-6 push-large-6 columns"></div>
        <div class="small-12 large-6 pull-large-6 columns"></div>
    </div>
</div>
```

## Issues?
Create an issue! Any help is appreciated.