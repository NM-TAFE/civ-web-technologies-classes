Here's the simple fix for "**C-WT-AT2-POR-Phase-3**" document
Located on page 6, under "Install & Configure Tailwind CSS".

Fix to get past this section: 
--
Instead of runing:

```
npm install -D tailwindcss
```

which works and then 
```
npx tailwindcss init 
```

Which doesn't due to it being removed in v4.

---

Instead now, in v4 there are a few different methods to install Tailwind CSS.

__Method 1:__ Installation using Vite:
--

1. move to your projects directory using 
```
cd my-project
```

2. Install Tailwind CSS using 
```
npm install tailwindcss @tailwindcss/vite
```

3. Configure the Vite plugin with
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

4. import Tailwind CSS 

Add an `@import` to your CSS file like this
```
@import "tailwindcss";
```

5. Start your build process

with the command
```
npm run dev
```

6. Then you can start using Tailwind in your HTML

For example: 
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

__Method 2:__ Installation using PostCSS:
--

1. move to your projects directory using 
```
cd my-project
```

2. Install Tailwind CSS with Postcss. 
With the command:
```
npm install tailwindcss @tailwindcss/postcss postcss
```  

3. Then add your Tailwind to the PostCSS configuration (postcss.config.mjs)
With the following:
```
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

4. import Tailwind CSS 

Add an `@import` to your CSS main file like this
```
@import "tailwindcss";
```

5. Start your build process

with the command
```
npm run dev
```

6. Then you can start using Tailwind in your HTML

For example: 
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

__Method 3:__ Installation using Tailwind CLI:
--

1. move to your projects directory using 
```
cd my-project
```

2. Install Tailwind CSS with CLI
using the command:
```
npm install tailwindcss @tailwindcss/cli
```

3. Create the "`src`" folder in your project.

4. Then create "`input.css`" and "`output.css`" within that folder

5. Then Add import Tailwind CSS 

Add an `@import` to "`input.css`" file.
with the line:
```
@import "tailwindcss";
```

6. Then Start the Tailwind CLI build process

> Note: make sure the "`input.css`" and "`output.css`" file exists.

Use the command:
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

7. Start using Tailwind in your HTML

For example: 
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
Notes:
- This method uses the "`output.css`" within "myproject/src/output.css".

---

Notes:
All of these Instructions are gathered from the offical Tailwind v4.3 Installation Guide
- source: https://tailwindcss.com/docs/installation/using-vite
