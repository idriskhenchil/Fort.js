# Fort.js

[![](https://data.jsdelivr.com/v1/package/npm/@idriskhenchil/fort/badge)](https://www.jsdelivr.com/package/npm/@idriskhenchil/fort)

A modern progress bar for form completion. [Check out the demo!](https://idriskhenchil.com/fort)

![](https://idriskhenchil.com/fort/demo.gif)


## Getting Started

#### 1. Add JS file
```html
<script src="https://cdn.jsdelivr.net/npm/@idriskhenchil/fort@1.1.0/dist/fort.min.js"></script>
```

#### 2. Create a form
```html
<form class="fort">
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
</form>
```

#### 3. Call Fort with your desired effect, target class, and color(s)
```javascript
new Fort('.fort').solid("#6638F0");
```

**Ignoring fields:**

Add the `fort-ignore` class to a field to ignore it from counting towards the progress. 
```html
<input type="text" placeholder="Name" class="fort-ignore">
```
## Effects
* [Solid](https://idriskhenchil.com/fort) - `solid()`
* [Gradient](https://idriskhenchil.com/fort/gradient) - `gradient()`

**Changing the colors:**
* Solid - `Fort('.target').solid("#009DFF")` 


* Gradient - `Fort('.target').gradient("#009DFF", "#47B9FF")` Note: Only pass two color values.

## Contributing
Please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgements

**Fort.js** is authored and maintained by [Idris Khenchil](https://www.twitter.com/idriskhenchil)
