#LMS Frontend

### Setup Instruction

1. clone the project

...
    https://github.com/sandeepkrmehta/lms-frontend
...


2. move into directory

...
    cd lms-frontend
...

3. install dependencies

...
    npm i
... 

4. run the server

...
    npm run dev 
...


### Setup Instruction for tailwind

[Tail wind official doc] (https://tailwindcss.com/docs/installation)


1. Install Tailwindcss

...
    npm install -D tailwindcss
...

2. Create Tailwind Config file

...
    npx tailwindcss init
...

3. Add file extension to tailwind config file in the content property

...
    ./src/**/*.{html,js,jsx,ts,tsx}"
...

4. Add the tailwind directives at the top of the "index.css" file

...

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
...