# Handlebars - Templating

## Objectives

* Explain the use case for templating engines like handlebars
* Use the handlebars documentation
* Use handlebars to render simple content
* Use handlebars render iterative content
* Linking JS to handlebars

## Notes

* Explain the use case for templating engines like handlebars
  - Pure DOM manipulation can become cumbersome
  - Create a template and dynamically populate
  - Especially for server-side rendered apps
    - You still can use them on front-end
  - More efficient or succinct code

* Use handlebars to render simple content
  - If your context/data has an object like { title: 'Hiyoo!!'}
```hbs  
  <h1>{{title}}</h2>
```

* Use handlebars to render iterative content
  - If you're context/data has an array of objects like { projects: [{name: 'My Project'}, {name: 'Another Project'}]}
```hbs
  {{/#each projects}}
    <h1>{{name}}</h1>
  {{/each}}
```
OR
```hbs
  {{/#each projects as project}}
    <h1>{{project.name}}</h1>
  {{/each}}
```

* Linking JS to handlebars
 - Link your JS files and your css files in layout.hbs
 - Paths will be from the 'public' folder
