# Fort.js

Modern progress bar for form completion. [Check out the demo!](/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### 1. Add JS file.
```html
<script src="fort.min.js"></script>
```

#### 2. Create a form
```html
<form class="fort">
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
</form>
```

#### 3. Call Fort with your desired effect, target class, and color(s).
```javascript
Fort('.fort').solid("#6638F0");
```



## Effects
* [Solid](http://idriskhenchil.github.io/index.html) - `solid()`
* [Gradient](http://idriskhenchil.github.io/gradient/index.html) - `gradient()`

**Changing the colors:**
* Solid - `Fort('.target').solid(#009DFF")` 


* Gradient - `Fort('.target').gradient(#009DFF", "#47B9FF")` Note: Only pass two color values.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgements

**Fort.js** is authored and maintained by [Idris Khenchil](https://www.twitter.com/idriskhenchil)
